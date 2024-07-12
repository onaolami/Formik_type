import { useEffect, useState } from "react";
import { IProduct } from "../../types/product.types";
import productService from "../../services/product.service";
import { useParams } from "react-router-dom";

const GetSingleProduct = () => {
  const {id} = useParams<{id:string}>()
  const [product, setProduct] = useState<IProduct | undefined >(undefined);

  useEffect(() => {
    if (id === undefined) {
      return;
    }
    productService
      .getSingleProducts(id)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      {!product ? <p>...isloading</p>: (
        <div>
          <h1>{product.title}</h1>
          <p>{product.id}</p>
          </div>
      )}
    </div>
  );
};

export default GetSingleProduct;
