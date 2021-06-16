//all the url for API endpoints
const MainAPI = 'http://34.102.69.148:9000';
const APIEndPoints = {
    LOGIN: MainAPI + '/login',
    SIGNUP: MainAPI + '/client',
    LOGOUT: MainAPI + '/account/logout',
    FORGOT_PASSWORD:MainAPI+ '/request/password/reset?emailPhone=',
    CHECK_VERIFICATION_CODE:MainAPI+ '/check/verification/code',
    PASSWORD_RESET:MainAPI+ '/password/reset',
    BANK : MainAPI + '/bank',
    CARD : MainAPI + '/card',
    TRANSACTION : MainAPI + '/transaction',
    BALANCE : MainAPI + '/balance',
    RECEIVERSCLIENT : MainAPI + '/client?type=3',
    SCHEDULE_TRANSACTION : MainAPI + '/schedule/transaction/account',

    ADD_USER : MainAPI + '/user',
    DELETE_USER : MainAPI + '/user/',
    FETCH_ALL_USERS:MainAPI+'/users',
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