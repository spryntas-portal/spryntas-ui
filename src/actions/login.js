import helper from './commonservice';

export function register(data) {
    return async dispatch => {
        dispatch(helper.loading());
        try {
            const res = await helper.serviceCall(data);
            dispatch(helper.stopLoading());
            if (res.status === 1) {
                dispatch(helper.success(res, data.type));
            } else {
                dispatch(helper.failure(res, data.type));
            }
        } catch (error) {
            console.error('Exception-Register', error);
        }
    };
}

export function login(data) {
    return async dispatch => {
        dispatch(helper.loading());
        try {
            const res = await helper.serviceCall(data);
            dispatch(helper.stopLoading());
            if (res.status === 1) {
                dispatch(helper.success(res, data.type, data.post_data));
            } else {
                dispatch(helper.failure(res, data.type));
            }
        } catch (error) {
            console.error('Exception-LoginAction', error);
        }
    };
}

export function handleLoginBackClick() {
    return dispatch => dispatch({ type: 'LOGIN_BACK_CLICK' });
}

export function logout() {
    return async dispatch => {
        dispatch(helper.loading());
        try {
            localStorage.clear();
            window.location.reload();
        } catch (error) {
            console.error('Exception-LoginAction', error);
        }
    };
}

