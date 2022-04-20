import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className="">
                <div className="">
                    <div className="">
                        <div className="">
                            <div className="">
                                <img className=""
                                    src="" alt='logo'
                                />
                            </div>
                            <div className="">
                                <div className="">
                                    <a
                                        href="#"
                                        className=""
                                    >
                                        Home
                                    </a>

                                    <a
                                        href="#"
                                        className=""
                                    >
                                        Services
                                    </a>

                                    <a
                                        href="#"
                                        className=""
                                    >
                                        About
                                    </a>

                                    <a
                                        href="#"
                                        className=""
                                    >
                                        Contact
                                    </a>

                                    <a
                                        href="#"
                                        className=""
                                    >
                                        Signin
                                    </a>
                                    <a
                                        href="#"
                                        className=""
                                    >
                                        Register
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className=""
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="">Menu</span>
                                {!isOpen ? (
                                    <svg
                                        className=""
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className=""
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>


                    </div>

                </div>
                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="" id="mobile-menu">
                            <div ref={ref} className="">
                                <a
                                    href="#"
                                    className=""
                                >
                                    Home
                                </a>

                                <a
                                    href="#"
                                    className=""
                                >
                                    Services
                                </a>

                                <a
                                    href="#"
                                    className=""
                                >
                                    About
                                </a>

                                <a
                                    href="#"
                                    className=""
                                >
                                    Contact
                                </a>

                                <a
                                    href="#"
                                    className=""
                                >
                                    Signin
                                </a>
                                <a
                                    href="#"
                                    className=""
                                >
                                    Register
                                </a>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav >
        </div>
    );
}

export default Navbar;
