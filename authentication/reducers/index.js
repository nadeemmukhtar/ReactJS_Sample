import { AsyncStorage } from 'react-native';

export const AUTHENTICATE = 'tribalist/AUTHENTICATE';
export const AUTHENTICATE_SUCCESS = 'tribalist/AUTHENTICATE_SUCCESS';
export const AUTHENTICATE_FAIL = 'tribalist/AUTHENTICATE_FAIL';
export const AUTHENTICATE_LOCALLY = 'tribalist/AUTHENTICATE_LOCALLY';

export const SIGNUP = 'tribalist/SIGNUP';
export const SIGNUP_SUCCESS='tribalist/SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'tribalist/SIGNUP_FAIL';

export const RESET_PASSWORD = 'tribalist/RESET_PASSWORD';
export const RESET_PASSWORD_SUCCESS = 'tribalist/RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAIL = 'tribalist/RESET_PASSWORD_FAIL';

export const SOCIAL_LOGIN =  'tribalist/SOCIAL_LOGIN';
export const SOCIAL_LOGIN_SUCCESS =  'tribalist/SOCIAL_LOGIN_SUCCESS';
export const SOCIAL_LOGIN_FAIL =  'tribalist/SOCIAL_LOGIN_FAIL';

export const LOGOUT = 'tribalist/LOGOUT';

let initialState = {
    authenticating: false,
    isAuthenticated: false,
    user: null,
    error: null,
    loading: false,
    registerUser: null,
    errors:  [],
}


export default sessionsReducer = (state = {}, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return { ...state, error: null ,authenticating: true};
        case AUTHENTICATE_SUCCESS:
            if (action.payload.data.status == true) {
                const { data } = action.payload.data;
                return {
                    ...state,
                    error: null,
                    user: data,
                    authenticating: false,
                    isAuthenticated: true
                };
            }
            else {
                const { error } = action.payload.data;
                return {
                    ...state,
                    error: error,
                    user: null,
                    authenticating: false,
                    isAuthenticated: false
                };
            }
        case AUTHENTICATE_FAIL:

            return { ...state, authenticating: false };
        case SIGNUP:

            return { ...state, registerUser: null ,registerLoading: true};
        case SIGNUP_SUCCESS:
              if (action.payload.data.status == true) {
                  return { ...state, errors: null, registerUser: action.payload.data.data , registerLoading: false}
              } else {
                  return { ...state, errors: action.payload.data.error.error , registerUser: null, registerLoading: false}
              }
        case SIGNUP_FAIL:
            return { ...state,  registerUser: null ,registerLoading: false };

        case SOCIAL_LOGIN:
            return { ...state, error: null , user: null ,authenticating: true};
        case SOCIAL_LOGIN_SUCCESS:
            if (action.payload.data.status == true) {
                const { data } = action.payload.data;
                return {
                    ...state,
                    error: null,
                    user: data,
                    authenticating: false,
                    isAuthenticated: true
                };
            }
            else {
                const { error } = action.payload.data;
                return {
                    ...state,
                    error: error,
                    user: null,
                    authenticating: false,
                    isAuthenticated: false
                };
            }
        case SOCIAL_LOGIN_FAIL:
            return { ...state, authenticating: false };
        case LOGOUT:
            return { ...state, registerUser: null,isAuthenticated: false, user: null }
        default:
            return state;
    }
}

// MARK: - Action Creators

export function authenticate(email, password) {
    return {
        type: AUTHENTICATE,
        payload: {
            request: {
                method: 'post',
                url: `/user/login` + `?email=` + email + `&password=` + password,

            }
        }
    }
}


export function socialLogin(email, fb_id){
  return {
      type: SOCIAL_LOGIN,
      payload: {
          request: {
              method: 'post',
              url: `/user/fb-auth-check` + `?email=` + email + `&fb_id=` + fb_id,

          }
      }
  }
}

export function logout() {

    return {
              type: LOGOUT,
              payload: {
              }
        }
}

export function registration(name, email, password, image){
    return {
        type: SIGNUP,
        payload: {
            request: {
                method: 'post',
                url: '/user/register',
                data: {
                  name: name,
                  email: email,
                  password: password,
                  image: image
                }
              }
        }
      }
}
