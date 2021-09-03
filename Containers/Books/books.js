import { useRouter } from "next/router";
import Link from "next/link";
import BooksWrapper from "../../Wrappers/BooksWrapper";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as stars } from "@fortawesome/free-solid-svg-icons";
const Books = () => {
    const router = useRouter();
    const category = router.query.category;
    const filteredData = useSelector(state => state.BooksReducer.filterData);
    return (
        <BooksWrapper>
            <div className="books">
                <h2 className="text-center fw-bold text-capitalize">{category ? category : "combined-print-and-e-book-fiction"}</h2>
                <div className="row w-100 m-0">
                    {filteredData?.map((v, i) => <div className="col-md-6 col-lg-4 col-xl-3 p-3 books_card" key={i}>
                        <div className="d-flex flex-column h-100  p-2 bg-white  shadow rounded-3">
                            <Link href={`${category ? category : "category/hardcover-nonfiction"}${v.book_uri.slice(10)}`}>
                                <a className="d-flex flex-column h-100 books_link rounded-3">
                                    <img className="book_img w-100 rounded-3" src={v.book_image} alt="" />
                                    <div className="book_info p-3">
                                        <div>
                                            <p className="author mb-0">{v.contributor}</p>
                                            <p className="book_title mb-1">{v.title}</p>
                                            <p className="mb-2"><span>
                                                {v.rank >= 1 ?
                                                    <span className="text-warning"> <FontAwesomeIcon icon={stars} /> </span>
                                                    : <FontAwesomeIcon icon={faStar} />}
                                            </span>
                                                <span>
                                                    {v.rank >= 2 ?
                                                        <span className="text-warning"> <FontAwesomeIcon icon={stars} /> </span>
                                                        : <FontAwesomeIcon icon={faStar} />}
                                                </span><span>
                                                    {v.rank >= 3 ?
                                                        <span className="text-warning"> <FontAwesomeIcon icon={stars} /> </span>
                                                        : <FontAwesomeIcon icon={faStar} />}
                                                </span><span>
                                                    {v.rank >= 4 ?
                                                        <span className="text-warning"> <FontAwesomeIcon icon={stars} /> </span>
                                                        : <FontAwesomeIcon icon={faStar} />}
                                                </span><span>
                                                    {v.rank >= 5 ?
                                                        <span className="text-warning"> <FontAwesomeIcon icon={stars} /> </span>
                                                        : <FontAwesomeIcon icon={faStar} />}
                                                </span>
                                            </p>
                                            <p> {v.price}$</p>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                            <Link href={v.amazon_product_url}>
                                <a target="_blank" className="buy_btn">BUY NOW</a>
                            </Link>
                        </div>
                    </div>)}
                </div>

            </div>
        </BooksWrapper>
    )
}
export default Books;
