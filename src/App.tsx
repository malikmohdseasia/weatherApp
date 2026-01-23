import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import ProtectedRoute from "./Components/auth/ProtectedRoute";
import LoginRoute from "./Components/auth/LoginRoute";
import 'react-toastify/dist/ReactToastify.css';

const Login = lazy(() => import('./Components/auth/Login'));
const SignUp = lazy(() => import('./Components/auth/SignUp'));
const Home = lazy(()=>import('./Components/Home'));
const NotFound = lazy(()=>import('./Components/NotFound'));


const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<LoginRoute><Login /></LoginRoute>} />
            <Route path="/signup" element={<LoginRoute><SignUp /></LoginRoute>} />
            <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
            <Route path="*" element={<NotFound/>} />

          </Routes>
        </Suspense>

      </BrowserRouter>
    </>
  )
}

export default App