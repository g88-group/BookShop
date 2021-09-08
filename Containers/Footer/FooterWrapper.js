import styled from "styled-components";

const FooterWrapper = styled.div`
padding: 30px;
background-color: rgba(0 0 0 / 0.9);
a{
    color: white;
    display: block;
    width: 100%;
    &:hover {
        color: crimson;
    }
}
.list-group-item-action:hover {
    background-color: transparent !important;
}
`;
export default FooterWrapper;