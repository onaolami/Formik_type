import { AxiosResponse } from "axios";
import { ILoginRequest, ILoginResponse } from "../types/auth.types";
import apiInstance from "./apiInstance.service";

class AuthService {
  login(data: ILoginRequest): Promise<AxiosResponse<ILoginResponse>> {
    return apiInstance.post("/auth/login", data);
  }
  
}

const authService = new AuthService();
export default authService;
