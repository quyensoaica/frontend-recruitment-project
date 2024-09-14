import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { companyThunks } from "./companyThunks";
import { toast } from "react-toastify";
import { ICompany } from "@/types/company/CompanyType";

export interface CompanyState {
  loading: boolean;
  myCompany?: ICompany;
  isSubmitting?: boolean;
}

const initialState: CompanyState = {
  loading: false,
  myCompany: undefined,
  isSubmitting: false,
};

export const CompanySlice = createSlice({
  name: "Company",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(companyThunks.registerCompanyByRecruiter.pending, (state) => {
        state.isSubmitting = true;
      })
      .addCase(companyThunks.registerCompanyByRecruiter.fulfilled, (state, action) => {
        toast.success("Yêu cầu đăng kí công ty thành công, vui lòng chờ được duyệt");
        state.isSubmitting = false;
      })
      .addCase(companyThunks.registerCompanyByRecruiter.rejected, (state, action: PayloadAction<any>) => {
        state.isSubmitting = false;
        toast.error(action.payload.errorMessage);
      });

    builder
      .addCase(companyThunks.getMyCompany.pending, (state) => {
        state.loading = true;
      })
      .addCase(companyThunks.getMyCompany.fulfilled, (state, action) => {
        state.loading = false;
        state.myCompany = action.payload.data;
      })
      .addCase(companyThunks.getMyCompany.rejected, (state) => {
        state.loading = false;
        state.myCompany = undefined;
      });

    builder
      .addCase(companyThunks.updateCompanyWhenRegister.pending, (state) => {
        state.isSubmitting = true;
      })
      .addCase(companyThunks.updateCompanyWhenRegister.fulfilled, (state, action) => {
        state.myCompany = action.payload.data;
        state.isSubmitting = false;
        toast.success("Cập nhật thông tin công ty thành công");
      })
      .addCase(companyThunks.updateCompanyWhenRegister.rejected, (state, action: PayloadAction<any>) => {
        toast.error(action.payload.errorMessage);
        state.isSubmitting = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const CompanyActions = {
  ...CompanySlice.actions,
  ...companyThunks,
};

export default CompanySlice.reducer;
