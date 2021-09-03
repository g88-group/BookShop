import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as stars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux';
import { getBooks, getList } from '../../../Api';
import Container from '../../../Containers/Container';
import { dispatch } from '../../../redux/store';
import * as t from "../../../redux/types";
import Link from 'next/link';
import IdWrapper from '../../../Wrappers/IdWrapper';
const BookPage = ({ listdata, booksdata }) => {
    const datas = () => {
        const action = { type: t.DATA_BOOKS4, payload: booksdata };
        dispatch(action);
    };
    datas();
    const router = useRouter();
    const id = router.query.id;
    const filterData = useSelector(state => state.BooksReducer.filterData);
    const data = filterData.filter(data => data.book_uri.slice(11) == id)[0];
    return (
        <Container data={listdata}>
            <IdWrapper>
                <div className="container">
                    <div className="row justify-content-center m-0 p-0">
                        <div className="col-10">
                            <div className="row">
                                <div className="col-sm-6 col-lg-4">
                                    <img src={data.book_image} className="w-100 h-100" alt="" />
                                </div>
                                <div className="col-lg-8 d-flex flex-column justify-content-between">
                                    <div>
                                        <p className="mb-0 fw-bold">Contributor: <span className="author">{data.contributor}</span></p>
                                        <p className="mb-1 fw-bold">Title: <span className="book_title"> {data.title}</span></p>
                                        <p className="m-0 fw-bold">Publisher: <span className="fw-">{data.publisher}</span></p>
                                        <p className="mb-2"><span>
                                            {data.rank >= 1 ?
                                                <span className="text-warning"> <FontAwesomeIcon icon={stars} /> </span>
                                                : <FontAwesomeIcon icon={faStar} />}
                                        </span>
                                            <span>
                                                {data.rank >= 2 ?
                                                    <span className="text-warning"> <FontAwesomeIcon icon={stars} /> </span>
                                                    : <FontAwesomeIcon icon={faStar} />}
                                            </span><span>
                                                {data.rank >= 3 ?
                                                    <span className="text-warning"> <FontAwesomeIcon icon={stars} /> </span>
                                                    : <FontAwesomeIcon icon={faStar} />}
                                            </span><span>
                                                {data.rank >= 4 ?
                                                    <span className="text-warning"> <FontAwesomeIcon icon={stars} /> </span>
                                                    : <FontAwesomeIcon icon={faStar} />}
                                            </span><span>
                                                {data.rank >= 5 ?
                                                    <span className="text-warning"> <FontAwesomeIcon icon={stars} /> </span>
                                                    : <FontAwesomeIcon icon={faStar} />}
                                            </span>
                                        </p>
                                        <p> {data.price}$</p>
                                        <p>{data.description}</p>
                                        <p>Isbn {data.primary_isbn13}</p>
                                        <p>Isbn {data.primary_isbn10}</p>
                                        <p>Weeks on list {data.weeks_on_list}</p>
                                    </div>
                                    <div className="row">
                                        {data.buy_links.map((v, i) => <div key={i} className="col-6 col-md-4 mb-2"> <a target="_blank" href={v.url} className="buy_btn"> Buy from {v.name} </a></div>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </IdWrapper>
        </Container>
    )
}
export const getServerSideProps = async (contex) => {
    const { category } = contex.query
    const res = await getList();
    const res2 = await getBooks(category);
    return {
        props: {
            listdata: res.data || [],
            booksdata: res2.data || [],
        }
    }
}
export default BookPage
