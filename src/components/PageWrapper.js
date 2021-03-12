import React from 'react'

const PageWrapper = ({children}) => {
    return (
        <div className="container pt-12 md:pt-24 pb-16">
            {children}
        </div>
    )
}

export default PageWrapper
