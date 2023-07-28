import { useState } from "react";
import { Drawer, Navbar, Button, Menu } from "react-daisyui";
import { Link } from "react-router-dom";
import SidebarContent from "./sideBarContent";
import UserDropDown from "../userMenu/UserDropdown";

const NavBar = ({ children }) => {

    const isLogedin = true;

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        setVisible(!visible);
    };

    return (
        <Drawer
            open={visible}
            onClickOverlay={toggleVisible}
            className="font-sans"
            side={<SidebarContent />}
        >
            <Navbar>
                <div className="flex-none lg:hidden">
                    <Button shape="square" color="ghost" onClick={toggleVisible}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block w-6 h-6 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </Button>
                </div>
                <div className="flex-1 px-2 mx-2">M2</div>
                <div className="flex-none hidden lg:block">
                    <Menu horizontal={true}>
                        <Menu.Item>
                            <Link>
                                Test
                            </Link>
                        </Menu.Item>
                        {isLogedin ? (
                            <UserDropDown />
                        ) : (
                            <Menu.Item>
                                <Link to="/auth?mode=login">Login</Link>
                            </Menu.Item>
                        )}
                    </Menu>
                </div>
            </Navbar>
            <div >{children}</div>
        </Drawer>
    );
};

export default NavBar;

