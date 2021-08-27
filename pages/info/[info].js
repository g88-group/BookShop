import React from 'react'

const Info = ({ listdata, booksdata }) => {
    return (
        <div>

        </div>
    )
}
export const getServerSideProps = async (contex, rank) => {
    const { category } = contex.query
    const res = await getList();
    const res2 = await getBooks(category, rank);
    return {
        props: {
            listdata: res.data || [],
            booksdata: res2.data || [],
        }
    }
}
export default Category
export default Info
