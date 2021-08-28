import React from 'react'

export const Info = ({ booksdata }) => {
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
