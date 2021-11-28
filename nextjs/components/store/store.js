import { createStore, applyMiddleware, compose } from 'redux';
import { createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk';

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== "production") {
        const { composeWithDevTools } = require("redux-devtools-extension");
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};


const initStore = () => {
    return createStore(reducer, bindMiddleware([thunkMiddleware]));
};

export const wrapper = createWrapper(initStore);