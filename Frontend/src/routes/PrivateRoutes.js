import { useEffect } from "react";
import {
    Route
} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PrivateRoutes = (props) => {

    let navigate = useNavigate();

    useEffect(() => {
        let session = sessionStorage.getItem('account');
        if (!session) {
            navigate("/login");
            window.location.reload();
        }
        if (session) {
            //check role
        }
    }, [])


    return (
        <>
            <Route path={props.path} component={props.component} />
        </>
    )
}

export default PrivateRoutes;