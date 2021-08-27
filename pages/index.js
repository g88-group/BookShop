import { getList } from "../API";
import Container from "../Containers/Container";
import HomeWrapper from "../Wrappers/HomeWrapper";

export default function Home({listdata}) {
  return (
    <Container data={listdata}>
      <HomeWrapper></HomeWrapper>
    </Container>
  );
}

export const getServerSideProps = async () => {
  const res = await getList();
  return {
    props: {
      listdata: res.data || [],
    }
  }
}