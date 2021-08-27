import React from 'react'
import SidebarWrapper from './SidebarWrapper'
import Link from "next/link"
const Sidebar = () => {
    return (
        <SidebarWrapper>
            <div className="menu">
                <ul>
                    <li>
                        <Link href=""><a className="sidebar_link"> Link 1</a></Link>
                    </li>
                </ul>
            </div>
        </SidebarWrapper>
    )
}

export default Sidebar
