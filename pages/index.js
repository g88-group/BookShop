import { getBooks, getList } from "../Api";
import Container from "../Containers/Container";
import HomeWrapper from "../Wrappers/HomeWrapper";
import Books from "../Containers/Books/books";
import * as t from "../redux/types";
import { dispatch } from "../redux/store";

export default function Home({ listdata, booksdata }) {
  const dataBooks = () => {
    const action = { type: t.DATA_BOOKS, payload: booksdata };
    dispatch(action);
  }
  dataBooks();
  return (
    <Container data={listdata}>
      <HomeWrapper>
        <div className="home">
          <Books data={booksdata} />
        </div>
      </HomeWrapper>
    </Container>
  );
}

export const getServerSideProps = async () => {
  const res = await getList();
  const res2 = await getBooks();
  return {
    props: {
      listdata: res.data || [],
      booksdata: res2.data || [],
    }
  }
}
