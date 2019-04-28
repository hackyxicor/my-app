import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import saga from '../Saga/index.saga';
import reducer from '../Reducers/index.reducer';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// create a redux store with our reducer above and middleware
const store = createStore(
    reducer,
    compose(applyMiddleware(sagaMiddleware))
);

// run the saga
sagaMiddleware.run(saga);

export default store;