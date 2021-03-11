import React from 'react'
import { Link } from "react-router-dom"

const Event = () => {
    return (
        <>
            <div className="flex justify-between items-center my-5 px-2">
                <h3 className="w-2/5">Asante John</h3>
                <Link to="/details" className="bg-blue-600 text-white text-sm font-semibold rounded-md px-5 py-2">View Details</Link>
            </div>
            <hr />
        </>
    )
}

export default Event
