import { constants } from '../constants/constants';
let isLoggedIn = localStorage.getItem('isLoggedIn');
let transporterStatus = localStorage.getItem('transporterStatus');
let initialState = { isGuest: isLoggedIn === 'true' ? false : true, transporterStatus: transporterStatus };

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case constants.LOGIN_SUCCESS:
            console.log("###state",state);
            return Object.assign({}, state, {
               
                // loginData: action.data,
                // transporterStatus: action.data.data.status,
                // isGuest: false,
            });
        default:
            return state;
    }

};