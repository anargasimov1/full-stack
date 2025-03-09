import Header from "./components/header/Header"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Profile from "./components/dashboard/Profile";
import { Admin } from "./components/admin/Admin";
import { AdminPage } from "./components/admin/AdminPage";
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Header />} index />
                    <Route element={<Login />} path="/login" />
                    <Route element={<Register />} path="/register" />
                    <Route element={<Profile />} path="/profile" />
                    <Route element={<Admin />} path="/admin" />
                    <Route element={<AdminPage />} path="/adminpage" />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App

