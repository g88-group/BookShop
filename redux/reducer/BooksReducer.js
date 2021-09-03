import * as t from "../types";
const initialState = {
    sidebar: false,
    data: [],
    filterData: [],
}

const BooksReducer = (state = initialState, action) => {
    switch (action.type) {
        case t.DATA_BOOKS: return { ...state, data: action.payload };
        case t.DATA_BOOKS2: return { ...state, data: action.payload };
        case t.DATA_BOOKS3: return { ...state, filterData: action.payload };
        case t.DATA_BOOKS4: return { ...state, data: action.payload };
        case t.SIDEBAR_SHOW: return { ...state, sidebar: !state.sidebar };
        default: return state;
    }
}

export default BooksReducer;