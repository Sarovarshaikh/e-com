import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { SearchContext } from "../context/SearchContext";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const { query, setQuery } = useContext(SearchContext);
  const { cart } = useContext(CartContext);
  console.log("==================>", user, "<============");
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <Link className="navbar-brand" to="/">
        MyShop
      </Link>
      <form className="d-flex ms-auto me-2">
        <input
          className="form-control"
          type="search"
          placeholder="Search products"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          {user ? (
            <>
              <li className="nav-item">
                <span className="nav-link">
                  Hello, {user?.profile?.data?.name}
                </span>
              </li>
              <li>
                <img
                  src={user?.profile?.data?.avatar}
                  className=""
                  style={{ width: "91px", height: "87px" }}
                  alt="img..."
                />
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart ({cart.length})
                </Link>
              </li>
              <li className="nav-item">
                <button
                  onClick={logoutUser}
                  className="btn btn-sm btn-outline-danger"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
