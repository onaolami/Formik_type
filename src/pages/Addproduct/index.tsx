import { Field, FieldProps, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import * as yup from "yup";
import { IProductRequest, IProductResponse } from "../../types/product.types";
import ProductService from "../../services/product.service";
import { AxiosResponse } from "axios";
import productService from "../../services/product.service";
import GetAllProduct from "../../components/getallproduct";
import GetSingleProduct from "../../components/getSingleProduct";
import SearchProduct from "../../components/searchproducts";

const AddProductPage = () => {
  const validationSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
  });

  const initialValues: IProductRequest = {
    title: "",
  };
  const onSubmit = (
    values: IProductRequest,
    helpers: FormikHelpers<IProductRequest>
  ) => {
    console.log(values);
    productService
      .addproduct(values)
      .then((response: AxiosResponse<IProductResponse>) => {
        console.log("response", response);
      })
      .catch((err: any) => {
        console.log("err", err);
      })
      .finally(() => {
        helpers.setSubmitting(false);
        helpers.resetForm();
      });
  };

  return (
    <div>
      <h1>Add a new product</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <Field name="title">
              {({ meta, field }: FieldProps) => (
                <div>
                  <label htmlFor="title">Title</label>
                  <input id="Title" autoComplete="off" {...field} />
                  {meta.touched && meta.error && <p>{meta.error}</p>}
                </div>
              )}
            </Field>
            <div>
              <button type="submit">
                {isSubmitting ? "Loading..." : "AddProduct"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <GetAllProduct />
      <GetSingleProduct />
    </div>
  );
};

export default AddProductPage;
