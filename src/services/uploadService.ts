import { CloudPresets } from "@/constants/CloudPreset";
import Environment from "@/constants/env";
import { IAppResposeBase, IUploadImageResponse } from "@/types/AppType";
import axios from "axios";

const uploadAnImage = async (image: File, CloudPreset?: CloudPresets): Promise<IAppResposeBase<IUploadImageResponse>> => {
  try {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("cloud_name", String(Environment.CLOUD_NAME));
    formData.append("upload_preset", CloudPreset ?? CloudPresets.IMAGE);
    const response = await axios.post(`${Environment.CLOUD_BASE_URL}${Environment.CLOUD_NAME}/image/upload`, formData);
    const data: IAppResposeBase<IUploadImageResponse> = {
      success: true,
      data: response.data,
      status: response.status,
      errorMessage: "",
    };
    return data;
  } catch (error: any) {
    throw error.response.data;
  }
};

const deleteAnImage = async (url: string): Promise<IAppResposeBase<IUploadImageResponse>> => {
  try {
    if (!url || !url.trim()) {
      throw new Error("Invalid url");
    }
    const publicId = url.split("/").pop()?.split(".")[0];
    if (!publicId) {
      throw new Error("Invalid url");
    }
    const params = {
      public_id: publicId,
      api_key: "your_api_key",
      api_secret: "your_api_secret",
    };
    const response = await axios.post(`${Environment.CLOUD_BASE_URL}${Environment.CLOUD_NAME}/image/destroy`, params);
    const data: IAppResposeBase<IUploadImageResponse> = {
      success: true,
      data: response.data,
      status: response.status,
      errorMessage: "",
    };
    return data;
  } catch (error: any) {
    throw error.response.data;
  }
};

const uploadService = {
  uploadAnImage,
  deleteAnImage,
};
export default uploadService;
