import { HYDRATE } from 'next-redux-wrapper';
import { userDetail } from './action';

const initialState = {
    allList: [],
    InsertData: {},
    detailData: {}
}
// let result = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload };
        case "AllList":
            return {
                ...state,
                allList: action.payload
            }
        case 'InsertData':
            return { ...state, InsertData: action.payload };
        case 'DetailData':
            return { ...state, detailData: action.payload };
        default:
            return state;
    }
};
export default reducer;