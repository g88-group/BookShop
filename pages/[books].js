import { useRouter } from 'next/router';
import React from 'react'
import { useSelector } from 'react-redux';
import { getBooks, getList } from '../Api';
import Container from '../Containers/Container'
import { dispatch } from '../redux/store';
import * as t from "../redux/types";
const GLbooks = ({listdata , booksdata}) => {
 
    const router = useRouter();
    const id = router.query;
    const filterData = useSelector(state => state.BooksReducer.filterData);
    // const data = filterData.filter(v => v.book_uri.slice(11) == id)[0];
    console.log(filterData);
    console.log(id);
    // console.log(data);
    return (
        <Container data={listdata}>
           <div className="row">
               <div className="col-md-10">
                   {/* <img src={data.book_image} alt="" /> */}
               </div>
           </div>
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

export default GLbooks
