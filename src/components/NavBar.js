import { Link } from "react-router-dom";
import { Navbar, Button, Menu, Dropdown } from "react-daisyui";

const NavBar = () => {
    return (
        <div className="pb-40 flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
            <Navbar
                className='bg-neutral text-neutral-content rounded-2xl'
            >
                <Navbar.Start>
                    <Dropdown>
                        <Button color="ghost" tabIndex={0} className="lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </Button>
                        <Dropdown.Menu tabIndex={0} className="w-52 menu-compact mt-3">
                            <Dropdown.Item><Link to="/tickets">My Tickets</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/create-ticket">Create Ticket</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                    <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
                </Navbar.Start>
                <Navbar.Center className="hidden lg:flex">
                    <Menu horizontal className="p-0">
                        <Menu.Item>
                            <Link to="/tickets">My Tickets</Link>
                        </Menu.Item>

                        <Menu.Item>
                            <Link to="/create-ticket">Create Ticket</Link>
                        </Menu.Item>
                    </Menu>
                </Navbar.Center>
                <Navbar.End>
                    <Button>
                        <Link to="/auth?mode=login">Login</Link>
                    </Button>
                </Navbar.End>
            </Navbar>
        </div>
    );
    // return (
    //     <div className="flex w-full component-preview p-4 pb-40 items-center justify-center gap-2 font-sans">
    //         <Navbar>
    //             <div className="flex-1 ">
    //                 <Button color="ghost" className="normal-case text-xl">
    //                     <li><Link to="/">Home</Link></li>
    //                 </Button>
    //             </div>
    //             <div className="flex-none">
    //                 <Menu horizontal className="p-0">
    //                     <Menu.Item>
    //                         <Link to="/tickets">My Tickets</Link>
    //                     </Menu.Item>
    //                     <Menu.Item>
    //                         <Link to="/create-ticket">Create Ticket</Link>
    //                     </Menu.Item>
    //                     <Menu.Item>
    //                         <Link to="/auth?mode=login">Login</Link>
    //                     </Menu.Item>
    //                 </Menu>
    //             </div>
    //         </Navbar>
    //     </div>
    // );
};

export default NavBar;