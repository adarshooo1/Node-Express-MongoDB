import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsList from "./ProductsList";
import ProductData from "./data";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductsList {...ProductData} />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
