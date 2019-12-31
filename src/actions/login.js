import * as service from '../services/commonservice';
import { getService } from '../services/commonservice';
import  {constants} from '../constants/constants';
// import * as constants from '../constants/constants';

// export function login(data) {
//     return async dispatch => {
//         dispatch(helper.loading());
//         try {
//             const res = await helper.serviceCall(data);
//             dispatch(helper.stopLoading());
//             if (res.status === 1) {
//                 dispatch(helper.success(res, data.type, data.post_data));
//             } else {
//                 dispatch(helper.failure(res, data.type));
//             }
//         } catch (error) {
//             console.error('Exception-LoginAction', error);
//         }
//     };
// }
export const login = (dispatch, getState) => {
    const {
        form: { login }
      } = getState();
      let email, password;
     
  console.log("###action",login);
  email = login.values.email;
  password = login.values.password;
    dispatch({
      api: service.getService,
      types: [
        constants.LOGIN_REQUEST,
        constants.LOGIN_SUCCESS,
        constants.LOGIN_FAILURE
      ],
      request: {
        email,
        password
      },
    }).then(({ response }) => {

    });

  };


