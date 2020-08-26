import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getWeather } from "../actions";

class Weather extends Component {

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              position => {
                  const latitude  = position.coords.latitude;
                  const longitude = position.coords.longitude;
                  this.props.getWeather(latitude, longitude);
              }
            )
        }
    }

    render() {
        const { data, error } = this.props;
        return (
              <Fragment>
              {
                  data && 
                  <div className="current">
                      <div className="overview">
                          <i className={ `wi wi-owm-${data.icon}` }></i>
                          <div>
                              <h1>{ data.temperature.value.toFixed(1) } &deg;C</h1>
                              <h3>{ data.description }</h3>
                          </div>
                      </div>
                      <div className="details">
                          <div className="col">
                              <h4>{ data.temperature.max.toFixed(1) } &deg;C</h4>
                              <h5>High</h5>
                              <h4>{ data.temperature.min.toFixed(1) } &deg;C</h4>
                              <h5>Low</h5>
                          </div>
                          <div className="col">
                              <h4>{ data.wind.speed } <i className={ `wi wi-wind towards-${data.wind.deg}-deg` }></i></h4>
                              <h5>Wind</h5>
                              <h4>{ data.humidity }</h4>
                              <h5>Humidity</h5>
                          </div>
                          <div className="col">
                              <h4>{ new Date(data.sun.sunrise * 1000).toLocaleString('en-GB', { hour: 'numeric', minute: 'numeric' })}</h4>
                              <h5>Sunrise</h5>
                              <h4>{ new Date(data.sun.sunset * 1000).toLocaleString('en-GB', { hour: 'numeric', minute: 'numeric' })}</h4>
                              <h5>Sunset</h5>
                          </div>
                      </div>
                  </div>
              }
              </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.weather.data,
        error: state.weather.error
    }
}

const mapDispatchToProps = { getWeather }


export default connect(mapStateToProps, mapDispatchToProps)(Weather);
