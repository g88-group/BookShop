import Link from "next/link";
import { useState } from "react";
import BooksWrapper from "../../Wrappers/BooksWrapper";
const Books = ({ data }) => {
    const [a, setA] = useState(false);
    const [datas, setDatas] = useState()
    const info = (book_uri) => {
        setA(!a);
        console.log(a);
        setDatas(data.results.books.filter((v) => v.book_uri === book_uri)[0])
        console.log(datas);
    }
    const backBooks = () => {
        setA(!a)
    }
    return (
        <BooksWrapper>
            <div className="books">
                {a ? <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 col-lg-4 col-xl-3 p-3">
                        <div>
                            <div className="h-100 p-1">
                                <img className="w-100 h-75 book_img" style={{ objectFit: "cover" }} src={datas.book_image} alt="" />
                            </div>
                            <p className="books_title fw-bold">
                                {datas.title}
                            </p>
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={backBooks}>Back</button>
                </div> : <div className="row">
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
                </div>}

            </div>

        </BooksWrapper>
    )
}
export default Books;
