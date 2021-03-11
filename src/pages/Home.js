import React from 'react'
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

const Home = () => {
    return (
        <PageWrapper>
            <header className="max-w-3xl mx-auto text-center mt-12">
                <h1 className="text-6xl font-extrabold text-blue-800 mb-4">Seemles Tracking of Birthdays and all Events </h1> 
                <h2 className="text-2xl text-blue-900 opacity-85 mb-16">You don't have to memorize them any more</h2> 
                <Link to="/new" className="bg-blue-600 text-white font-semibold rounded-md px-14 py-3">Track New Event</Link>
            </header>
            <section className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 my-16">
                <h2 className="text-2xl font-semibold text-gray-600 mt-2 mb-5 text-center">Tracked Events</h2> 
                <div className="flex justify-between bg-gray-100 border-b items-center my-5 py-2 px-2">
                    <h3 className="w-2/5">Asante John</h3>
                    <span>Action</span>
                </div>
                <div className="flex justify-between items-center my-5 px-2">
                    <h3 className="w-2/5">Asante John</h3>
                    <button className="bg-blue-600 text-white text-sm font-semibold rounded-md px-5 py-2">View Details</button>
                </div>
                <hr />
                <div className="flex justify-between items-center my-5 px-2">
                    <h3 className="w-2/5">Asante John</h3>
                    <button className="bg-blue-600 text-white text-sm font-semibold rounded-md px-5 py-2">View Details</button>
                </div>
                <hr />
                <div className="flex justify-between items-center my-5 px-2">
                    <h3 className="w-2/5">Asante John</h3>
                    <button className="bg-blue-600 text-white text-sm font-semibold rounded-md px-5 py-2">View Details</button>
                </div>
                <hr />
            </section>
            
        </PageWrapper>
    )
}

export default Home
