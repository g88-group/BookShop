import styled, { ThemeProvider } from "styled-components";
const SidebarWrapper = styled.div`
  .menu {
    width: 250px;
    height: 100%;
    background-color: ${({ theme }) => theme.body};
    padding: 40px;
    overflow: auto;

    .sidebar_link {
      display: block;
      padding: 10px;
      color: ${({ theme }) => theme.text};
      text-transform: capitalize;
      font-size: 15px;
      font-weight: 600;
      border: 1px solid rgba(0 0 0 /0.2);
    }
  }
`;
export default SidebarWrapper;
