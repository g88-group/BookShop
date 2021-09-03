import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Footer from '../Footer'
import Sidebar from '../Sidebar'
import ContainerWrapper from './ContainerWrapper'

const Container = ({ children, data }) => {
    return (
        <ContainerWrapper>
            <Sidebar data={data} />
            <div className="home_container">
                <div className="d-flex justify-content-center align-items-center h-100 w-100 position-relative">
                    <h2 data-text="Bookshop...">Bookshop...</h2>
                    <div className="fs-1 text-white position-absolute down">
                        <FontAwesomeIcon icon={faAngleDoubleDown} />
                    </div>
                </div>
            </div>
            <div className="w-100 p-2 py-5 bg-transparent">
                {children}
            </div>
            <Footer />
        </ContainerWrapper>
    )
}

export default Container;
