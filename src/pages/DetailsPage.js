import React from 'react'
import PageWrapper from "../components/PageWrapper";
import Autocomplete from "../components/Autocomplete";
import MultiSelect from "../components/MultiSelect";

const DetailsPage = () => {
    return (
        <PageWrapper>
            <section id="upcoming-events" className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 mb-16">
                <h2 className="text-2xl font-semibold text-gray-600 mt-2 mb-5 text-center">Events Details</h2> 
                <div className="flex justify-between bg-gray-100 border-b items-center my-5 py-2 px-2">
                    <h3 className="w-2/5">Asante John</h3>
                    <span>Action</span>
                </div>
                <Autocomplete />
                <MultiSelect />
            </section>
        </PageWrapper>
    )
}

export default DetailsPage
