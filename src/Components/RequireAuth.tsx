import { Location, Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({allowedRoles}:any) => {
    const { auth  }:any = useAuth();
    const location = useLocation();

    console.log(auth.id,"required auth.user");

    return (
        allowedRoles?.includes(auth.role)
        ? <Outlet />
        : auth?.role
            ? <Navigate to="/unauthorized" state={{from : location}} replace/>
            : <Navigate to="/login" state={{from : location}} replace/>
    )
}

export default RequireAuth;