import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Mangas from "./pages/Mangas";
import Contact from "./pages/Contact";
import SingleManga from "./components/SingleManga";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "mangas",
        element: <Mangas />,
      },
      {
        path: "mangas/:id",
        element: <SingleManga />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
