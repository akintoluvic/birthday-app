import React from 'react'
import PageWrapper from "../components/PageWrapper";

const DetailsPage = () => {
    return (
        <PageWrapper>
            <h1>Details</h1> 
            <label class="block">
              <span class="text-gray-700">Input (datetime-local)</span>
              <input type="datetime-local" class="mt-1 block w-full" />
            </label>
            <label class="block">
              <span class="text-gray-700">Input (time)</span>
              <input type="time" class="mt-1 block w-full" />
            </label>
        </PageWrapper>
    )
}

export default DetailsPage
