import React from "react";



import { store } from "./rtk/store";
import { Provider } from 'react-redux';
import TabNavigator from "./components/TabNavigator";


export default function App() {


  return (
    
    <Provider store={store}>
      <TabNavigator/>

  </Provider>


  );
}


