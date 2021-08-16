//all the url for API endpoints
const MainAPI = 'https://maaser-api.brilltech.com';
const APIEndPoints = {
    LOGIN: MainAPI + '/login',
    SIGNUP: MainAPI + '/client',
    LOGOUT: MainAPI + '/account/logout',
    FORGOT_PASSWORD:MainAPI+ '/request/password/reset?emailPhone=',
    CHANGE_PASSWORD:MainAPI+ '/password/change',
    CHECK_VERIFICATION_CODE:MainAPI+ '/check/verification/code',
    PASSWORD_RESET:MainAPI+ '/password/reset',
    BANK : MainAPI + '/bank',
    CARD : MainAPI + '/card',
    CARD_DELETE : MainAPI + '/payment/card',
    TRANSACTION : MainAPI + '/transaction',
    BALANCE : MainAPI + '/balance',
    RECEIVERSCLIENT : MainAPI + '/client?type=3',
    DONORSCLIENT : MainAPI + '/client?type=2',
    SCHEDULE_TRANSACTION : MainAPI + '/schedule/transaction',
    UPCOMING_TRANSACTION : MainAPI + '/upcoming/transaction',
    GET_SCHEDULE_TRANSACTION : MainAPI + '/schedule/transaction/account',
    UPDATE_SCHEDULE_TRANSACTION_STATUS : MainAPI + '/schedule/transaction/status',
    DONATIONS_MADE : MainAPI + '/transaction/account',
    DONATION_RECEIVED : MainAPI + '/transaction/account',
    TRANSACTION_PDF_RECEIPT : MainAPI + '/transaction/receipt',
    TRANSACTIONS_PDF_RECEIPT : MainAPI + '/transaction/report/export?exportType=1',
    TRANSACTIONS_EXCEL_RECEIPT : MainAPI + '/transaction/report/export?exportType=2',
    GET_EMPLOYEE_LIST : MainAPI + '/employee/client',
    EMPLOYEE : MainAPI + '/employee',
    IMAGE:MainAPI + '/upload/image',
    VIDEO:MainAPI + '/upload/video',
    PROFILE:MainAPI + '/account/profile',

    //CAMPAIGN
    CAMPAIGN_GET_BY_ACCOUNT_ID:MainAPI + '/campaign/account',
    SUB_CAMPAIGN_GET_BY_ACCOUNT_ID:MainAPI + '/sub/campaign/account',
    CAMPAIGN:MainAPI + '/campaign',
    CAMPAIGN_STATUS:MainAPI + '/campaign/status',
    SUB_CAMPAIGN:MainAPI + '/sub/campaign',
    SUB_CAMPAIGN_STATUS:MainAPI + '/sub/campaign/status',
    SUB_CAMPAIGN:MainAPI + '/sub/campaign',
    CAMPAIGN_SUBCAMPAIGN_DONATION:MainAPI + '/campaign/donations',
    GET_ALL_CAMPAIGN_COMMENTS_BY_REFID:MainAPI + '/comment/campaign',
    POST_CAMPAIGN_COMMENTS:MainAPI + '/comment',
    GENERATE_CAMPAIGN_URL:MainAPI + '/campaign/url',


    // CAMPAIGN_GET_ALL:MainAPI + '/account/profile',
    // CAMPAIGN_GET_BY_ACCOUNT_ID:MainAPI + '/account/profile',


    //PERMISSIONS
    GET_PERMISSIONS:MainAPI + '/permissions',
    POST_PERMISSIONS:MainAPI + '/permission/assign',

    LOGOUT:MainAPI + '/logout'
};

export default APIEndPoints;