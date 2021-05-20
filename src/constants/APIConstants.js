const BASE_URL='https://apexrideapi.herokuapp.com'

//define all the URL for posts(GET,POST,PUT,DELETE,GETBYID)
export const LOGIN_URL=`${BASE_URL}/auth/local`
export const SIGNUP_URL=`${BASE_URL}/auth/local/register`
export const NOTIFICATIONS_URL=`${BASE_URL}/notifications`

const MainAPI = 'https://455325babfe7.ngrok.io';

const APIEndPoints = {
    LOGIN: MainAPI + '/login',
    SIGNUP: MainAPI + '/client',
    LOGOUT: MainAPI + '/account/logout',
    ADD_USER : MainAPI + '/user',
    DELETE_USER : MainAPI + '/user/',
    FETCH_ALL_USERS:MainAPI+'/users',
    PASSWORD_RESET:MainAPI+ '/user/password/update',
    PASSWORD_RESET_ADMIN:MainAPI+ '/user/password/reset',
    FETCH_REPORT_MASTER : MainAPI+'/',
    FETCH_PHONES:MainAPI+ '/phone',
    FETCH_ADDRESS:MainAPI+ '/address',
    FETCH_PLEDGE:MainAPI+ '/pledge',
    FETCH_PAYMENTS:MainAPI+ '/payment',
    FETCH_EVENTS:MainAPI+ '/event',
    FETCH_MASTER:MainAPI+'/master',
    FETCH_REPORT_SINGLE_DONOR:MainAPI+'/master/',
    FETCH_NOTES:MainAPI+'/note',
    FETCH_ASSOCIATIONS:MainAPI+'/association',
    FETCH_AGGREGRATE_REPORT:MainAPI+'/report/aggregate'

};

export default APIEndPoints;