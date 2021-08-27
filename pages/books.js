const Books = ({ data }) => {
    console.log(data);
    return (
        <div className="books">
            <div className="row">
                {data.results.books.map((v, i) => <div className="col-md-6 col-lg-4 col-xl-3">
                    {v.title}
                </div>)}
            </div>
        </div>
    )
}

export default Books;
