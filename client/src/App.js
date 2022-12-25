import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Post from "./pages/Post";
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";

function App() {
  const Layout = () => {
    return (
      <div className="outlet">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/add", element: <AddPost /> },
        { path: "/post/:id", element: <Post /> },
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
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
