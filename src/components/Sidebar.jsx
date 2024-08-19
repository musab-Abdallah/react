import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
    <ul className="list-group mt-4">
        <li className="list-group-item">
            <Link to={'/Products'}>Get All Products</Link>
        </li>
        <li className="list-group-item">
            <Link href="#">Get All Cateogries</Link>
        </li>
    </ul>
    </>
  )
}
export default Sidebar;