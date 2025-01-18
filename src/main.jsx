import React from "react";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { store, persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

const Loading = () => <div>Loading...</div>; //

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
