import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { ChatState } from "context/chatContext";
import Login from "auth/loginPage";
import RecoverPassword from "auth/recover-password";
import SignUp from "auth/signupPage";
import SignInSign from "auth/signIn.js"
import Dashboard from "pages/assignee/dashboard";
import DriverDashboard from "pages/driver/dashboard";
import "./index.css";
import Workbay from "pages/assignee/workbay";
import WorkbayReport from "pages/assignee/workbay-report";
import VehicleLog from 'pages/assignee/vehicle-log'
import VehicleLogReport from "pages/assignee/vehicle-log-report";
import VehiclePage from 'pages/assignee/vehicle-page'
import Report from 'pages/assignee/reports'
import LandingPage from 'pages/landing-page'

function App() {
  const {isAuth, setIsAuth, mode, persistData} = ChatState()
  const theme = useMemo(() => createTheme(themeSettings(persistData.mode)), [persistData.mode]);
  // const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/recover-password" element={<RecoverPassword />} />
              <Route path="/dashboard" element={<DriverDashboard />} />
              <Route path="/workbay" element={<Workbay />} />
              <Route path="/workbay/:id" element={<WorkbayReport />} />
              <Route path="/vehicle-log" element={<VehicleLog />} />
              <Route path="/vehicle-log/:id" element={<VehicleLogReport />} />
              <Route path="/vehicle" element={<VehiclePage />} />
              <Route path="/reports" element={<Report />} />

              {/* <Route
                path="/home"
                element={persistData.isAuth ? <HomePage /> : <Navigate to="/" />}
              /> */}
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
