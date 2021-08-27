import styled from "styled-components";
const SidebarWrapper = styled.div`
height: 100vh;
        .menu {
            width: 250px;
            height: 100%;
            overflow: auto;
            background-color: ${({ theme }) => theme.body};
            padding: 40px 0;
        .sidebar_link {
            display: block;
            padding: 10px;
            color: ${({ theme }) => theme.text};
            text-transform: capitalize;
            font-weight: 600;
            font-size: 15px;
            border: 1px solid rgba(0 0 0 / 0.2);
    }
}
`;
export default SidebarWrapper;