import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "aos/dist/aos.css";
import "react-datepicker/dist/react-datepicker.css";
import "swiper/css";
import { store } from "./store/index";
import AuthProvider from "./context/AuthProvider/AuthProvider.jsx";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <AuthProvider>
                <App />
            </AuthProvider>
        </Provider>
    </React.StrictMode>
);
