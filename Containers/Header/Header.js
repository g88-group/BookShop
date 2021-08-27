import React from 'react'
import { HeaderWrapper } from './HeaderWrapper';

const Header = ({children}) => {
    return (
        <HeaderWrapper>
            <div className="header">
                <img src="" alt="" />
                <div>
                    {children}
                </div>
            </div>
        </HeaderWrapper>
    )
}

export default Header;
