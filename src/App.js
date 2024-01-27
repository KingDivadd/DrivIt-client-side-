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
import Dashboard from "pages/dashboard";
import "./index.css";
import Workbay from "pages/workbay";
import WorkbayReport from "pages/workbay-report";
import VehicleLog from 'pages/vehicle-log'

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
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/recover-password" element={<RecoverPassword />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/workbay" element={<Workbay />} />
              <Route path="/workbay/:id" element={<WorkbayReport />} />
              <Route path="/vehicle-log" element={<VehicleLog />} />

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
