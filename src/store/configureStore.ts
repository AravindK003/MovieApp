import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import { movieReducer } from "../movie/state/reducer";
import movieRootSaga from "../movie/state/saga";

export const configureStore = () => {
    const rootReducer = combineReducers({
        movieReducer
    })
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  registerSagas(sagaMiddleware);
  store.replaceReducer(rootReducer);

return store;
};
    
const registerSagas = (sagaMiddleware: SagaMiddleware<any>) => {
    sagaMiddleware.run(movieRootSaga);
}
