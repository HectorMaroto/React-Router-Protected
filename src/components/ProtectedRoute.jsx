/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom"

function ProtectedRoute({ children, user, redirectTo = '/landing' }) {

    if (!user) {
        return <Navigate to={redirectTo} />
    }

    return children ? children : <Outlet /> // Para mostrar varias rutas protegidas hijas por una misma logica (la de arriba)
}

export default ProtectedRoute