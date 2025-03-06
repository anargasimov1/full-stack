import Body from "./components/body/Body"
import Header from "./components/header/Header"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Profile from "./components/dashboard/Profile";
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Body />} path="/body" />
                    <Route element={<Header />} index />
                    <Route element={<Login />} path="/login" />
                    <Route element={<Register />} path="/register" />
                    <Route element={<Profile />} path="/profile" />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App

