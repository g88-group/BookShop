import React from 'react'
import Sidebar from '../Sidebar'
import ContainerWrapper from './ContainerWrapper'

const Container = ({ children }) => {
    return (
        <ContainerWrapper>
            <Sidebar />
            {children}
        </ContainerWrapper>
    )
}

export default Container
