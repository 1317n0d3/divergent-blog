import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { setupStore } from "./store/store";
import { Provider } from "react-redux";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import NewsPage from "./components/NewsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewsPost from "./components/NewsPost";

const store = setupStore();

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Navigate to={"/divergent-blog"} />,
  },
  {
    path: "/divergent-blog",
    element: <NewsPage />,
  },
  {
    path: "/divergent-blog/:id",
    element: <NewsPost />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
