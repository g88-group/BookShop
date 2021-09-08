import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import HeaderWrapper from './HeaderWrapper'
import * as t from "../../redux/types";
import { dispatch } from '../../redux/store';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faSearch, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
const Header = ({ toggle, theme }) => {
    const [searchBooks, setSearchBooks] = useState('');
    const booksdata = useSelector(state => state.BooksReducer.data);
    const filterData = booksdata.results?.books?.filter(v => v.title.toLowerCase().includes(searchBooks.trim().toLowerCase()));
    const sidebarShow = useSelector(state => state.BooksReducer.sidebar);
    const booksData = () => {
        const action = { type: t.DATA_BOOKS3, payload: filterData };
        dispatch(action);
    }
    booksData();
    const [searchShow, setSearchShow] = useState(false);
    const showSearch = () => {
        setSearchShow(!searchShow);
    }
    const sidebarshow = () => {
        const action = { type: t.SIDEBAR_SHOW }
        dispatch(action)
    }
    return (
        <HeaderWrapper>
            <div className="header">
                <Link href="#"><a className="navbar_logo">Bookshop</a></Link>
                <div className={`input_search_container px-2 d-flex align-items-center ${searchShow && "top"}`}>
                    <input type="text"
                        className="form-control shadow-none search_input"
                        placeholder="Search..."
                        onChange={event => setSearchBooks(event.target.value)} />
                    <button className="btn d-block d-lg-none ms-2" onClick={showSearch}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
                <div className="nav_menu">
                    <div>
                        <Link href="#"><a className="navbar_link">Books</a></Link>
                        <Link href="#"><a className="navbar_link">Audiobooks</a></Link>
                        <Link href="#"><a className="navbar_link">Stationery & gifts</a></Link>
                        <a href="https://github.com/g88-group" className="navbar_link">About Us</a>
                    </div>

                </div>
                <div>
                    <button className="btn me-2">
                        <FontAwesomeIcon icon={faUser} />
                    </button>
                    <button className="btn me-2" onClick={showSearch}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <button className="btn me-2">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                    <button className="btn me-2" onClick={sidebarshow}>
                        <FontAwesomeIcon icon={sidebarShow ? faTimes : faBars} />
                    </button>
                </div>
            </div>
        </HeaderWrapper>
    )
}

export default Header;
