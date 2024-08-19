import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ProductDetails() {
  const [product, setproduct] = useState({});
  let { productID } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/produacts/${productID}`)
      .then((Response) => Response.json())
      .then((product) => setproduct(product));
  }, []);
  return (
    <>
      {/* <h1>ProductDetails {productID}</h1> */}
      {product && <h1>{product.title}</h1>}
    </>
  );
}
export default ProductDetails;
