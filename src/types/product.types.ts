import { number } from "yup";

export interface IProductRequest {
  title: string;
}

export interface IProductResponse {
  id: number;
  title: string;
  /* other product data */
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number; // Corrected to number based on the example
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string; // Assuming ISO 8601 string format
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string; // Assuming ISO 8601 string format
    updatedAt: string; // Assuming ISO 8601 string format
    barcode: string;
    qrCode: string; // Placeholder, assuming it's a string
  };
  thumbnail: string; // Placeholder, assuming it's a URL or path
  images: string[]; // Placeholder, assuming these are URLs or paths
}


export interface IProductSearch {
 query: string
}



