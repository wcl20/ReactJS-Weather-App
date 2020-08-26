import { combineReducers } from "redux";
import { WEATHER, FORECAST } from "../constants";
import { generateRequestActionType, generateSuccessActionType, generateFailureActionType } from "../middlewares";


function weather(state = { isLoading: false }, action) {
    switch(action.type) {
        case generateRequestActionType(WEATHER):
            return Object.assign({}, state, { isLoading: true });
        case generateSuccessActionType(WEATHER):
            let data = {
                description: action.payload.weather[0].description,
                icon: `${action.payload.weather[0].icon.substr(-1) === 'd' ? "day" : "night" }-${action.payload.weather[0].id}`,
                temperature: {
                    value: action.payload.main.temp,
                    min: action.payload.main.temp_min,
                    max: action.payload.main.temp_max
                },
                humidity: action.payload.main.humidity,
                sun: {
                    sunrise: action.payload.sys.sunrise,
                    sunset: action.payload.sys.sunset
                },
                wind: {
                    speed: action.payload.wind.speed,
                    degree: action.payload.wind.deg
                }
            };
            return Object.assign({}, state, { isLoading: false, data: data });
        case generateFailureActionType(WEATHER):
            return Object.assign({}, state, { isLoading: false, error: action.error });
        default:
            return state;
    }
}

function forecast(state = { isLoading: false }, action) {
    switch(action.type) {
        case generateRequestActionType(FORECAST):
            return Object.assign({}, state, { isLoading: true });
        case generateSuccessActionType(FORECAST):
            console.log(action.payload.daily);
            return Object.assign({}, state, { isLoading: false, data: action.payload.daily });
        case generateFailureActionType(FORECAST):
            return Object.assign({}, state, { isLoading: false, error: action.error });
        default:
            return state;
    }
}

const rootReducer = combineReducers({ weather, forecast });
export default rootReducer;
