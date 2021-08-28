import styled from "styled-components";

const BooksWrapper = styled.div`
    .books{
        .books_title {
            color: ${({theme})=> theme.titleColor};
        }
    }
`;
export default BooksWrapper;