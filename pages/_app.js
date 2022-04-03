import { ChakraProvider } from '@chakra-ui/react'
import { createStore } from 'redux';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { PersistGate } from "redux-persist/integration/react";
import '../styles/globals.css'
import allReducers from '../Redux/Index';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {

  const persistConfig = {
    key: "Todo",
    storage,
    whitelist: ["myTodo"], // only navigation will be persisted
  };
  const persistedReducer = persistReducer(persistConfig, allReducers);

  const store = createStore(persistedReducer);

  const persistor = persistStore(store);

  store.subscribe(() => console.log(store.getState()));


  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    </PersistGate>
    </Provider>

  )

}

export default MyApp
