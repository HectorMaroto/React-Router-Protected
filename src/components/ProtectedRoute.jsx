/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom"

function ProtectedRoute({ children, user, redirectTo = '/landing' }) {

    if (!user) {
        return <Navigate to={redirectTo} />
    }
  return children
}

export default ProtectedRoute