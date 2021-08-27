import { getBooks, getList } from "../Api";
import Container from "../Containers/Container";
import HomeWrapper from "../Wrappers/HomeWrapper";
import Books from "./books";


export default function Home({ listdata, booksdata }) {
  return (
    <Container data={listdata}>
      <HomeWrapper>
        <div className="home">
          <Books data={booksdata} />
        </div>
      </HomeWrapper>
    </Container>
  )
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
