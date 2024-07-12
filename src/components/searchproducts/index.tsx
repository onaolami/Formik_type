import { useState } from "react";
import { Link } from "react-router-dom";
import { IProduct, IProductSearch } from "../../types/product.types";
import { Field, FieldProps, Form, Formik, FormikHelpers } from "formik";
import productService from "../../services/product.service";

const SearchProduct = () => {
  const initialValues: IProductSearch = {
    query: "",
  };

  const onSubmit = (
    values: IProductSearch,
    helpers: FormikHelpers<IProductSearch>
  ) => {
    console.log(values);
    productService
      .searchproduct(values.query)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      }).finally(()=>{
        helpers.setSubmitting(false)
        helpers.resetForm();
      })
  };

  const [products, setProducts] = useState<IProduct[]>([]);
  return (
    <div>
      <h1>Products</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ isSubmitting, isValid }) => (
          <Form>
            <Field name="query">
              {({ meta, field }: FieldProps) => (
                <div>
                  <label htmlFor="SearchProducts">Search Products</label>
                  <input id="SearchProducts" autoComplete="off" {...field} />
                </div>
              )}
            </Field>
            <button type="submit">{isSubmitting ? "loading": "search"}</button>
          </Form>
        )}
      </Formik>
      <table>
        <thead>
          <th>id</th>
          <th>title</th>
          <th>description</th>
          <th>category</th>
          <th>price</th>
          <th>rating</th>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <Link to={`/product/${product.id}`}>{product.title}</Link>
              </td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchProduct;
