import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Products.css'
import Swal from 'sweetalert2'
function Products() {
  const [products, setproduct] = useState([]);
  useEffect(() => {
    getAllProduct()
  }, []);
  const getAllProduct = () => {
    fetch("http://localhost:3000/produacts")
    .then((Response) => Response.json()) 
    .then((data) => setproduct(data));
  }
  const Deleteproducts = (product) => {
    //  console.log(productid)
    Swal.fire({
     title: `Are You Sure To Delete ${product.title}`,
     showCancelButton:true
    }).then((data) => {
      if(data.isConfirmed) {
           fetch(`http://localhost:3000/produacts/${product.id}`, {
        method:"DELETE"
    }).then((Response) => Response.json()).then((data) => getAllProduct(data))
      }
    })
  
  }
  return (
    <>
      <h1>Products Page</h1>
      <Link to={"/products/add"} className="btn btn-success mt-3">
        Add New Products
      </Link>
      <table className="table table-striped mt-5 products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            {/* <th>description</th> */}
            <th>Price</th>
            <th>Opreations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
                <>
                <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                {/* <td>{product.description.slice(0, 100)}......</td> */}
                <td>{product.price}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() =>Deleteproducts(product)}>Delete</button>
                  <Link to={`/products/${product.id}`} className="btn btn-info btn-sm">View</Link>
                  <button className="btn btn-primary btn-sm">Edit</button>
                </td>
              </tr>
                </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default Products;
