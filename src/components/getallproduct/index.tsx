import { useEffect, useState } from "react";
import { IProduct } from "../../types/product.types";
import productService from "../../services/product.service";
import { Link } from "react-router-dom";

const GetAllProduct = () => {
 
  const [products,setProducts]= useState<IProduct[]>([]);
   useEffect (()=>{
     productService.getAllProducts().then((response)=>{
        setProducts(response.data.products);
     })
     .catch((error)=>{
      console.log(error);
      
     });
   },[])

  return (
    <div>
      <h1>Products</h1>
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
              <td><Link to={`/product/${product.id}`}>{product.title}</Link></td>
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

export default GetAllProduct;
