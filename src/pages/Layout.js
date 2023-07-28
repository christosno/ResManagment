import NavBar from "../components/navBar/NavBar";
import Home from "./Home";
import PageFooter from "../components/footer/PageFooter";
import Authentication from "./Authentication";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const RouteLayout = () => {
    return (
        <>
            <NavBar>
                <Outlet />
            </NavBar>
            <PageFooter />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <RouteLayout />,
        children: [
            { path: "", element: <Home /> },
            { path: "auth", element: <Authentication /> },
        ],
    },
]);

const queryClient = new QueryClient();

const Layout = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
    );
};

export default Layout;