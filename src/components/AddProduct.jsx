import { useState } from "react";
import { useNavigate } from "react-router";

function AddProduct() {
    const [title, settitle] = useState('')
    const [price, setprice] = useState(0)
    const navigate = useNavigate()
    const formsubmit = (e) => {
        e.preventDefault()
        // console.log("title", title)
        // console.log("price", price)
        fetch("http://localhost:3000/produacts", {
            method: "POST",
            body: JSON.stringify({
                title:title,
                price: price
            })
        }).then((Response) => Response.json()).then((data) => {
            console.log(data)
            navigate('/Products')
        })
    }
  return (
    <>
      <h1>Add Product</h1>
      <form onSubmit={formsubmit}>
        <div className="mb-3">
          <label htmlFor="productitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control "
            id="productitle"
            placeholder="product title"
            aria-describedby="product title"
            onChange={(e) => settitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productprice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="productprice"
            placeholder="product price"
            aria-describedby="product price"
            onChange={(e) => setprice(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
}
export default AddProduct;
