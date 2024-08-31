export interface IAppResposeBase<T> {
  status: number;
  errorMessage?: string;
  data: T;
  error?: {
    message: string;
    details: string;
  };
  success: boolean;
}

export interface IErrorResponse {
  error: {
    message?: string;
    errorDetail?: string;
  };
  errorMessage: string;
}
