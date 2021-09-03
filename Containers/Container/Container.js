import React from 'react'
import Footer from '../Footer'
import Sidebar from '../Sidebar'
import ContainerWrapper from './ContainerWrapper'

const Container = ({ children, data }) => {
    return (
        <ContainerWrapper>
            <Sidebar data={data} />
            <div className="home_container d-flex justify-content-center align-items-center">
                <h2 data-text="Bookshop...">Bookshop...</h2>
            </div>
            <div className="w-100 p-2 py-5 bg-transparent">
                {children}
            </div>
            <Footer />
        </ContainerWrapper>
    )
}

export default Container;
