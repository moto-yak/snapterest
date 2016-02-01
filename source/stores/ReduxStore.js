import { createStore, applyMiddleware } from 'redux';
import CollectionReducer from '../reducers/CollectionReducer';
import createLogger from 'redux-logger';

export default function configureStore() {
  const logger = createLogger({logger:console});
  const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
  const store = createStoreWithMiddleware(CollectionReducer);
  console.log(store);
  return store;
}
