import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./components/NavBar";

const routes = [
    {
        path: "/",
        element: <Home {...{ NavBar }} />,
        errorElement: <ErrorPage {...{ NavBar }} />
    },
    {
        path: "/about",
        element: <About {...{ NavBar }} />,
        errorElement: <ErrorPage {...{ NavBar }} />
    },
    {
        path: "/login",
        element: <Login {...{ NavBar }} />,
        errorElement: <ErrorPage {...{ NavBar }} />
    },
    {
        path: "/profile/:id",
        element: <UserProfile {...{ NavBar }} />,
        errorElement: <ErrorPage {...{ NavBar }} />
    }
];

export default routes;