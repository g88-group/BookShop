import React from 'react'
import FooterWrapper from './FooterWrapper'
const Footer = () => {
    return (
        <FooterWrapper>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <ul className="list-group-horizontal list-group">
                            <li className="list-group-item-action text-center">
                                <a href="#"> Sardor </a>
                                <p className="m-0">+998903320522</p>
                                </li>
                            <li className="list-group-item-action text-center">
                                <a href="#"> Islom </a>
                                <p className="m-0">+998903320522</p>
                                </li>
                            <li className="list-group-item-action text-center">
                                <a href="#"> Doston </a>
                                <p className="m-0">+998903320522</p>
                                </li>
                        </ul>
                    </div>
                </div>
            </div>
        </FooterWrapper>
    )
}

export default Footer
