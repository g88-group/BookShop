import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import ContainerWrapper from './ContainerWrapper'

const Container = ({ children, data }) => {
    return (
        <ContainerWrapper>
            <Sidebar data={data} />
            <div>
                <Header />
                {children}
            </div>
        </ContainerWrapper>
    )
}

export default Container
