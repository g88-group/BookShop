import styled from "styled-components";

const HeaderWrapper = styled.div`
position: sticky;
top: 0;
background-color: white;
z-index: 1000;
.header {
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .navbar_logo {
        font-weight: 700;
        font-size: 30px;
        margin: 0;
        color: crimson;
    }
    .nav_menu {
        display: flex;
        justify-content: center;
        align-items: center;
        .navbar_link {
            padding: 10px 15px;
            text-transform: uppercase;
            font-size: 14px;
            font-weight: 600;
            color: rgba(0 0 0 / 0.4);
            &:hover {
                color: crimson;
            }
        }
    }
    .input_search_container {
        position: absolute;
        top: -550%;
        left: 50%;
        width: 50%;
        transform: translate(-50%, -50%);
        .search_input {
        border-radius: 40px;
    }
        &.top {
            top: 50%;
        }
    }
}

@media screen and (max-width: 992px) {
    .input_search_container {
        width: 100% !important;
        background-color: white;
        height: 100%;
    }
    .nav_menu {
        display: none !important;
    }
}
@media screen and (max-width: 500px) {
    .header {
        .navbar_logo {
            font-size: 15px;
        }
    }
}
`;
export default HeaderWrapper;
