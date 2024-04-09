import {
    Route,
    Routes
} from "react-router-dom";

import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Users from '../components/ManageUsers/Users';
// import PrivateRoutes from "./PrivateRoutes";
import HomePage from "../components/HomePage/Home";
import ProductDetails from "../components/Product/ProductDetails";
import ProductList from "../components/Product/ProductList";
import Shop from "../components/ShopPage/Shop"
import Cart from "../components/CartPage/Cart";
import ErrorPages from "../components/ErrorPage/ErrorPages";
const AppRoutes = (props) => {

    const Project = () => {
        return (
            <span>projects</span>
        )
    }

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}>
                    {/* Home */}
                </Route>
                <Route path="/shop" element={<Shop />}>
                    {/* shop */}
                </Route>
                <Route path="/login" element={<Login />} >
                    {/* <Login /> */}
                </Route>
                <Route path="/register" element={<Register />}>
                    {/* <Register /> */}
                </Route>
                <Route path="/users" element={<Users />}>
                    {/* <Register /> */}
                </Route>
                <Route path="/cart" element={<Cart />}>
                    {/* <Register /> */}
                </Route>
                <Route path="/product-details" element={<ProductDetails />}>
                    {/* <Register /> */}
                </Route>
                {/* <PrivateRoutes path="/users" component={Users} />
                <PrivateRoutes path="/projects" component={Project} /> */}

                {/* <Route path="/users" element={<PrivateRoutes component={Users} />} />
                <Route path="/projects" element={<PrivateRoutes component={Project} />} /> */}

                <Route path="*" element={<ErrorPages />}>
                    {/* 404 not found */}
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes;