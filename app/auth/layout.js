import React from 'react'

function Layout({ children }) {
    return (
        <div className='min-h-screen grid justify-center items-center bg-[#07CBFF] bg-[radial-gradient(at_center_top,_#07CBFF,_#012BFF)]'>
            <main>{children}</main>
        </div>
    )
}

export default Layout