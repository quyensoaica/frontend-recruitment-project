import { IAppResposeBase } from "@/types/AppType";
import { ICompany, IRegisterCompany } from "@/types/company/CompanyType";
import http from "@/utils/axios/customAxios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const registerCompanyByRecruiter = createAsyncThunk(
  "company/registerCompanyByRecruiter",
  async (payload: IRegisterCompany, { rejectWithValue, dispatch }): Promise<IAppResposeBase<ICompany>> => {
    try {
      const response: IAppResposeBase<ICompany> = await http.post("/api/companies/register-company-by-recruiter", payload);
      dispatch<any>(getMyCompany());
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data) as any;
    }
  }
);

const getMyCompany = createAsyncThunk(
  "company/getMyCompany",
  async (_, { rejectWithValue }): Promise<IAppResposeBase<ICompany>> => {
    try {
      const response: IAppResposeBase<ICompany> = await http.get("/api/companies/my-company");
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data) as any;
    }
  }
);

const updateCompanyWhenRegister = createAsyncThunk(
  "company/updateCompanyWhenRegister",
  async (payload: IRegisterCompany, { rejectWithValue, dispatch }): Promise<IAppResposeBase<ICompany>> => {
    try {
      const response: IAppResposeBase<ICompany> = await http.put("/api/companies/update-company-when-register", payload);
      dispatch<any>(getMyCompany());
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data) as any;
    }
  }
);

export const companyThunks = {
  registerCompanyByRecruiter,
  getMyCompany,
  updateCompanyWhenRegister,
};
