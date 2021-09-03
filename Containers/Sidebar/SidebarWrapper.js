import styled, { ThemeProvider } from "styled-components";
const SidebarWrapper = styled.div`
height: 100%;
        .menu {
            position: fixed;
            top: -150%;
            left: 0px;
            width: 100%;
            background-color: white;
            z-index: 100;
            max-height: 80vh;
            overflow-y: auto;
            overflow-x: hidden;
            &.show {
                top: 65px;
                height: auto;
            }
        .sidebar_link {
            display: block;
            text-transform: capitalize;
            padding: 5px;
            font-weight: 600;
            font-size: 13px;
            color: rgba(0 0 0 / 0.5);
            &:hover {
                color: crimson;
            }
            &.active {
                color: crimson;
                border-right: 2px solid crimson;
            }
    }
}
@media screen and (max-width: 500px) {
    .menu {
        &.show {
            top: 57px;
        }
    }
}
`;
export default SidebarWrapper;
