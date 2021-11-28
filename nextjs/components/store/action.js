import axios from "axios";

export const fetchPosts = () => async (dispatch) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos');
    console.log(response.data);
    dispatch({
        type: 'AllList',
        payload: JSON.stringify(response.data)
    });
};
export function saveData(data) {
    return {
        type: 'InsertData',
        payload: JSON.stringify(data)
    }
}
export function detailData(x) {
    return {
        type: 'DetailData',
        payload: JSON.stringify(x)
    }
}