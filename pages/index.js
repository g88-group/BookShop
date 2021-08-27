import { getList } from "../Api";
import Container from "../Containers/Container";
import HomeWrapper from "../Wrappers/HomeWrapper";


export default function Home({listdata}) {
  return (
    <Container data={listdata}>
      <HomeWrapper>
        <div className="home">
          
        </div>
      </HomeWrapper>
    </Container>
  )
}

export const getServerSideProps = async () => {
  const res = await getList();
  return {
    props: {
      listdata: res.data || [],
    }
  }
}
