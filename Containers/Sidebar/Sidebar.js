import React from 'react'
import SidebarWrapper from './SidebarWrapper'
import Link from "next/link"
const Sidebar = ({ data }) => {
    return (
        <SidebarWrapper>
            <div className="menu shadow">
                <ul>
                    {data.results.map((v, i) => <li key={i}>
                        <Link href={"/category/" + v.list_name_encoded}><a className={`sidebar_link `}>{v.list_name_encoded}</a></Link>
                    </li>)}

                </ul>
            </div>
        </SidebarWrapper>
    )
}

export default Sidebar
