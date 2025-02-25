import React from "react";

import TabNavigator from "./TabNavigator";

import { store } from "./rtk/store";
import { Provider } from 'react-redux';


export default function App() {


  return (
    
    <Provider store={store}>
      <TabNavigator/>

  </Provider>


  );
}


