import NavBar from "../components/NavBar";
import Home from "./Home";
import Tickets from "./Tickets";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

const RouteLayout = () => {
    return (
        <>
            <NavBar />
            <div>
                <Outlet />
            </div>
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <RouteLayout />,
        children: [
            { path: "", element: <Home /> },
            { path: "tickets", element: <Tickets /> },
        ],
    },
]);

const queryClient = new QueryClient();

const Layout = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
};

export default Layout;