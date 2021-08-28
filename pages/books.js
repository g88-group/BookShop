import Link from "next/link";
import BooksWrapper from "../Wrappers/BooksWrapper";
const Books = ({ data }) => {
    const info = (book_uri) => {
        const datas = data.results.books.filter((v) => v.book_uri === book_uri)[0];
        console.log(datas);
    }
    return (
        <BooksWrapper>
            <div className="books">
                <div className="row">
                    {data.results.books.map((v, i) => <div className="col-md-6 col-lg-4 col-xl-3 p-3" key={i}>
                        <div onClick={() => info(v.book_uri)}>
                            <a>
                                <div className="h-100 p-1">
                                    <img className="w-100 h-75 book_img" style={{ objectFit: "cover" }} src={v.book_image} alt="" />
                                </div>
                                <p className="books_title fw-bold">
                                    {v.title}
                                </p>
                            </a>
                        </div>
                    </div>)}
                </div>
            </div>

        </BooksWrapper>
    )
}
export default Books;
