import { Axios, AxiosResponse } from "axios";
import {
  IProduct,
  IProductRequest,
  IProductResponse,
  IProductSearch,
} from "../types/product.types";
import apiInstance from "./apiInstance.service";

class ProductService {
  addproduct(data: IProductRequest): Promise<AxiosResponse<IProductResponse>> {
    return apiInstance.post("/products/add", data);
  }

  getAllProducts(): Promise<AxiosResponse<{ products: IProduct[] }>> {
    return apiInstance.get("/products");
  }
  getSingleProducts(id: string): Promise<AxiosResponse<IProduct>> {
    return apiInstance.get(`/products/${id}`);
  }
  searchproduct(query: string): Promise<AxiosResponse<{ products: IProduct[] }>> {
    return apiInstance.get(`/products/search?q=${query}`);
  }
}

const productService = new ProductService();

export default productService;
