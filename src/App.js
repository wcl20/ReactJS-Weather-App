import React from 'react';
import { Provider } from "react-redux";
import configureStore from "./js/store";
import "weather-icons/css/weather-icons.css";
import "weather-icons/css/weather-icons-wind.css";
import './scss/main.scss';
import HomePage from "./js/views/HomePage.js";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
