import { WEATHER, FORECAST } from "../constants";
import { services } from "../services";

export function getWeather(latitude, longitude) {
    return function(dispatch) {
        dispatch( { type: WEATHER, httpService: services.getWeather, params: [latitude, longitude] } );
    }
}

export function getForecast(latitude, longitude) {
    return function(dispatch) {
        dispatch( { type: FORECAST, httpService: services.getForecast, params: [latitude, longitude] } );
    }
}
