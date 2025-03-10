import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import { Login } from "../pages/Login";
import {ListeEleves} from "../eleves/ListeEleves";
import {AddStudent} from "../eleves/AddStudent";
import ResetPassword from "../pages/ResetPassword";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/resetpassword" element={<ResetPassword/>}/>

                Routes protégées
                <Route path="/profile" element={<Profile />} />
                <Route path="/dashboard" element={<Dashboard />}/>
                
                 Section Élèves *
                <Route path="/eleves" element={<ListeEleves />} />
                <Route path="/eleves/add" element={<AddStudent />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
