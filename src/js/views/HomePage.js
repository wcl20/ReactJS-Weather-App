import React, { Component } from "react";

import Weather from "../components/weather.js";
import Forecast from "../components/forecast.js";

class HomePage extends Component {

    render() {
        return (
              <div className="homepage">
                <h1 className="date">{ new Date().toLocaleDateString('en-GB') }</h1>
                <Weather />
                <Forecast />
              </div>
        )
    }
}

export default HomePage;
