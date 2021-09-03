import React from 'react'
import { getBooks, getList } from '../../Api';
import Container from '../../Containers/Container';
import Books from '../../Containers/Books/books';
import * as t from "../../redux/types";
import { dispatch } from '../../redux/store';

const Category = ({ listdata, booksdata }) => {
    const dataBooks = () => {
        const action = { type: t.DATA_BOOKS2, payload: booksdata }
        dispatch(action);
    }
    dataBooks();
    return (
        <Container data={listdata}>
            <Books />
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
export default Category
