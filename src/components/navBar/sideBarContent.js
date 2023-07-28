import { Link } from "react-router-dom";

const SidebarContent = () => {

    return (
        // Convert the JSON data to JSX elements
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
                <Link>Sidebar Item 1</Link>
            </li>
            <li>
                <Link to="/auth?mode=login">Login</Link>
            </li>
        </ul>
    );
};

export default SidebarContent;