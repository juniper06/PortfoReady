import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Regdetails from "./pages/Register/Regdetails";
import Home from "./pages/Home/Home";
import ContactForm from "./pages/ContactForm/ContactForm";
import RootLayout from "./Layout/RootLayout";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <ContactForm />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/register/regdetails",
    element: <Regdetails />,
  },
]);

const theme = createTheme({
  palette: {
    gray: {
      main: '#000000',
    }
    
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
