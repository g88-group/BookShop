import React from 'react'
import SidebarWrapper from './SidebarWrapper'
import Link from "next/link";
import { useSelector } from 'react-redux';
import { dispatch } from '../../redux/store';
import * as t from "../../redux/types";
import { useRouter } from 'next/router';
const Sidebar = ({ data }) => {
    const sidebarShow = useSelector(state => state.BooksReducer.sidebar);
    const sidebarshow = () => {
        const action = { type: t.SIDEBAR_SHOW }
        dispatch(action)
    }
    const router = useRouter();
    const category = router.query.category;
    console.log(category);
    return (
        <SidebarWrapper>
            <div className={`menu px-2 ${sidebarShow && "show"}`}>
                <div className="row">
                    {data?.results?.map((v, i) => <div className="col-sm-6 col-md-4 col-lg-3" key={i}>
                        <Link href={"/category/" + v.list_name_encoded}>
                            <a className={`sidebar_link ${category == v.list_name_encoded && "active"}`} onClick={sidebarshow}>{v.list_name_encoded}</a>
                        </Link>
                    </div>)}

                </div>
            </div>
        </SidebarWrapper>
    )
}

export default Sidebar;
