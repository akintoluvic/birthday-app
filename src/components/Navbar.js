import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="fixed w-full bg-white text-gray-800 ">
            <div className="container flex justify-between py-5 items-center">
                <Link to="/" className="flex title-font font-medium items-center">
                    <span className="p-2 rounded-full border-2 border-blue-500 text-blue-600">
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </span>

                    <span className="hidden md:inline ml-3 text-xl font-semibold">Birthday App</span>
                </Link>
                <nav className="ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link to="/" className="mr-5 hover:text-blue-700">Home</Link>
                    <Link to="/new" className="mr-5 hover:text-blue-700">Add New</Link>
                    <Link to="/details" className="mr-5 hover:text-blue-700">Full Details</Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
