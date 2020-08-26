import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getForecast } from "../actions";

class Forecast extends Component {

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              position => {
                  const latitude  = position.coords.latitude;
                  const longitude = position.coords.longitude;
                  this.props.getForecast(latitude, longitude);
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
                  <ul className="forecast">
                      {
                        data.map((item, i) => {
                            return (
                              <li key={i}>
                                  <h5>{ new Date(item.dt * 1000).toLocaleDateString('en-GB').substr(0, 5) }</h5>
                                  <i className={ `wi wi-owm-${item.weather[0].icon.substr(-1) === 'd' ? 'day' : 'night'}-${item.weather[0].id}` }></i>
                                  <h5>{ item.temp.min } &deg; / { item.temp.max } &deg;</h5>
                              </li>
                        );})
                      }

                  </ul>
              }
              </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.forecast.data,
        error: state.forecast.error
    }
}

const mapDispatchToProps = { getForecast }


export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
