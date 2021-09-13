import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AppConstantsService {

  constructor() { }

  public version = 1.0;

  public HOME_URL: string = environment.serverUrl;
  public GETFILE_URL: string = this.HOME_URL + 'show-quotation-file/';
  public SUCCESS: number = 200;
  public UNAUTHORIZED: number = 401;
  public FORBIDDEN: number = 403;
  public SERVER_DOWN: number = 0;
  public INVALID_TENANT: number = 300;
  public NOT_FOUND: number = 404;
  public TOKEN_EXPIRED: number = 412;
  public INTERNAL_SERVER_ERROR: number = 500;
  public REQUIRED_FIELD_EMPTY: number = 601;
  public UNIQUE_KEY_EXISTS: number = 602;
  public PASSWORD_MISMATCHED: number = 603;
  public USER_NOT_FOUND: number = 604;
  public USER_NOT_ACTIVE: number = 607;
  public USER_IS_LOCKED: number = 608;
  public DUPLICATE_PRODUCT_NAME = 1001;
  public AMC_LOST = 1101;
  public DUPLICATE_ACCOUNT_NAME = 1201;
  public EMAIL_ALREADY_EXISTS = 602;
  public DUPLICATE_CONTACT_NAME = 1301;
  public AMC_HAS_SERVICE = 1102;
  public DUPLICATE_QUOTATION_NO = 1401;
  public DUPLICATE_LEAD_COMPANY_NAME = 1501;
  public AMC_SELECT_DATE = 1104;
  // public INVALID_FILE_IMPORT_CODE = 1901;
  public INVALID_FILE_IMPORT_CODE = 1801;
  public NOTE_SUGGESTION_INVALID = 2001;
  public ORGANISATION_ID = 1;
  public DUPLICATE_CAMPAIGN_NAME = 2100;
  public EXTRA_FIELD_SECTION_UNABLE_DELETE = 611;
  public EXTRA_FIELD_SECTION_UNABLE_UPDATE = 612;
  public NO_LEAVES_TO_AVAIL = 1201;
  public FORGOT_TO_UPDATE_STATUS = 1202;
  public ALREADY_USED = 602;
  public ALREDY_EXIST = 300;
  public ALREADY_ADDED = 1203;
  public NO_CLOCKED_IN_RECORD_FOUND = 1204;
  public NOT_ELIGIBLE_LEAVE = 1213;
  public UNIT_NO = 1106;
  public SERVCE_NOT = 2014;
  public AlrUsedProd = 2400;
  public AlrUsedCat = 612;
  public AlrUsedDesi = 2200;
  public ALREADY_ADDED_HOLIDAY = 2300;

  // pattern
  public mobileNoPattern = '^[0-9]{10}$';



  public SERVER_URLS: any = {
    'GET_OPPORTUNITY_COUNT':'opportunity/opportunity-list-count',
    'UPDATR_OUTCOME_OPPORTUNITY':'forecast/update-target',
    'NEW_OUTCOME_CHANGE':'opportunity/change-opportunity-outcome',
    'TOKEN_SAVE': 'notification-alert/add-security-user-device',
    'VERIFY_TENANT':'auth/verify-tenant/',
    'GET_PHONECODE':'phone-code/get-all-phonecode',
    'LOGOUT':'auth/sign-off',
    'CALENDAR_RECURSIVE_TASKS':'task/recursive-task/calendar/list',
    'GET_PENDING_LEAVES':'leave/get-pending-leave/',
    //holiday
    'ADD_HOLIDAY': 'holiday',
    'HOLIDAY_LIST': 'holiday/list',
    'GET_BY_HOLIDAYS': 'holiday/',
    'DEL_HOLIDAY': 'holiday/bulk-delete',
    'CHANGE_STATUS_HOLIDAYS':'holiday/change-status/',
    'TERM_MOVE_TO_TRASH':'terms/delete/',
    'AMC_ASSIGN_USER':'amc/assign-user/',
    'TEMPLATE_MOVE_TO_TRASH':'email-template/delete/',
    'PROMOTIONAL_MOVE_TO_TRASH':'campaign/promotional-campaign/move-to-trash',
    'RECURSIVE_TASK':'task/update-recursive-task',
    'RECURSE_TASK_BY_ID':'task/get-rec-task-details/',
    'DEL_REC_TASK':'task/delete-recursive-task/',
    'CHNG_REC_TASK_STATUS':'task/change-rec-task-status/',
    'GET_RECURRING_TASK':'task/get-recursive-task-list/',
    'GET_FORECAST_USER': 'new-dashboard/forecast-user-list',
    'SALE_MODULE_USERLIST': 'new-dashboard/modulewise-user-list/',
    'CAMPAGIN_MODULE_COUNT': 'campaign/campaign-wise-count/',
    'CAMPAGIN_OPPORTUNITY_LIST': 'campaign/campaign-opp-list/',
    'CAMPAGIN_CONTACT_LIST': 'campaign/campaign-contact-list/',
    'CAMPAGIN_LEAD_LIST': 'campaign/campaign-lead-list/',
    'ALL_CAMPAGIN_LIST': 'campaign/active-campaign-list',
    'SEND_SMS_OF_FEEDBACK': 'feedback/send-request',

    'GET_FORECAST_MONTH': 'forecast/get-user-wise-monthlist/',
    'GET_AMC_EDIT_CHECK': 'amc/check-is-amc-editable',
    'APPROVE_ORDER': 'order/accept-order',
    'GET_FORCAST_USER_LIST': 'forecast/target-user-list?targetUid=',
    'GET_FORCAST_LIST': 'forecast/get-forcast-list',
    'GET_ALL_SERVICES': 'amc/get-all-amc-service-list',
    // Country, State, District, City API
    "GET_ALL_COUNTRY_LIST": "countries/get-all-countries",
    "GET_STATE_LIST": "states/get-all-states/",
    "GET_DISTRICT_LIST": "district/get-district-list-by-state/",
    "GET_CITY_LIST": "city/get-all-cities-by-district/",
    "GET_AREA_LIST": "area/area-list-by-district/",

    'NEW_VIEW_SERVICE': 'amc/get-service-list/',
    'GET_MULTIPLE_EMP_DETAILS': 'forecast/employee-details',
    'CAL_VERT_TLT': 'forecast/addition-of-array',
    'RENEW_AMC': 'amc/renew-amc',
    'SERVICE_HISTORY': 'amc/get-service-history/',
    //dashboard
    'DASHBOARD_SALES_COUNT': 'new-dashboard/modulewise-product-analysis-test',
    'DASHBOARD_FORECAST_COUNT': 'new-dashboard/get-monthwise-target',
    'DASHBOARD_TARGET_COUNT': 'new-dashboard/acheive-target-count',
    'DASHBOARD_ACTIVITY_LIST': 'new-dashboard/activity-list',
    'DASHBOARD_RATIO_COUNT': 'new-dashboard/opportunity-ratio',
    'DASHBOARD_OPPO_COUNT': 'new-dashboard/opportunity-count',
    'DASHBOARD_LEAD_COUNT': 'new-dashboard/lead-count',
    'DASHBOARD_LEAD_STATUS': 'dashboard/lead-status',
    'DASHBOARD_LEAD_LABEL_CHART': 'dashboard/chart/lead-label',
    'DASHBOARD_ACTIVITY_COUNT': 'dashboard/activity-count',
    'DASHBOARD_SUMMARY': 'dashboard/summary',
    'DASHBOARD_LEAD_STAGE_CHART': 'dashboard/lead-stage-chart',
    'DASHBOARD_LEADPRODUCT_LABEL_CHART': 'dashboard/lead-label-product-chart',
    'FORCAST_TARGET_DASHBOARD': 'dashboard/previous-months-target',
    'DASHBOARD_SALE_EXECUTIVE': 'dashboard/generate-opportunities',
    'DASH_PRODUCT_DATA': 'dashboard/product-wise-leadlabel-count',
    //all attendance
    'ALL_ATTENDANCE': 'attendance/attendance-list',
    'MY_ATTENDANCE': 'attendance/my-attendance-list',
    'INDIVIUAL_ATTENDANCE': "attendance/individual-attendance-list",
    'GET_ALL_USERS': "user-management/active-users",
    'TODAYS_ATTENDANCE': "attendance/todays-attendance",
    'FILTER_ATTENDANCE': 'attendance/attendance-list',
    'DOWNLOAD_INDIVIDUAL_FILE': 'attendance/attendance-report',
    "UPDATE_ATTENDANCE": "attendance/update-attendance",
    "GET_ATTENDANCE_DETAIL": "attendance/get-attendance-by-id/",
    "UPDATE_BREAK": "attendance/update-break",
    "GET_BREAK_DETAIL": "attendance/get-break-by-id/",
    "PRINT_ATTENDANCE": "attendance/attendance-print-report",
    "DOWNLOAD_EXCEL": "attendance/attendance-excel-report",
    "ADD_NEW_BREAK": "attendance/add-break",
    'ADD_NEW_ATTENDANCE': 'attendance//add-attendance',


    // time request
    'TIME_REQ_LIST': 'attendance/attendance-requests',
    'CHANGE_STATUS_CHECK_IN-OUT': 'attendance/react-missed-attendance',

    //check in/out
    'CHECK_ATTENDANCE': 'attendance/check-last-attendance/',
    'CHECK_OUT_HEAD': 'You have missed last clock out on ',
    'CHECK_IN_HEAD': 'You have missed last clock in',
    'CHECK_IN_NOTE': 'You need to send last clock in request',
    'END_BREAK_HEAD': 'You have missed to end your break on ',
    'END_BREAK_NOTE': 'You need to send last end break request',
    'CHECK_OUT_NOTE': 'You need to send last clock out request',
    'START_BREAK_HEAD': 'You have missed to start your break',
    'START_BREAK_NOTE': 'You need to send last start break request, to do this please click on "Forgot to update status?" from Update Status menu.',
    'MARK_ATTENDANCE': 'attendance/mark-attendance/',
    'MISS_ATTENDANCE': 'attendance/request-missed-attendance',
    'ADD_BREAK': 'attendance/break-update/',
    'CHECK_LAST_BREAK': 'attendance/check-last-breaks/',
    'UPDATE_FORGOT_ATTENDANCE': 'attendance/request-missed-attendance',
    'ON_BREAK_HEAD': "You are already on break",

    //my leaves
    'ALL_LEAVE': 'leave/list',
    'MY_LEAVE': 'leave/my-list',
    'ADD_LEAVE': 'leave/add',
    'ADD_MY_LEAVE': 'leave/add-my',
    'GET_LEAVE_DETAILD': 'leave/',
    'EDIT_LEAVE': 'leave/update',
    'EDIT_MY_LEAVE': 'leave/update-my',
    'REIMBRSE_DATE': 'leave/add-reimbursed-date',
    'TIME_OFF_REQUESTS': 'leave/time-off-requests',
    'GET_CURRENT_YEAR_HOLIDAY_LIST': 'holiday/get-this-year-holidays',
    'ELIGIBLE_USERS': 'user-management/users-eligible-for-holiday',
    'ADD_BULK_LEAVES': 'leave/add-bulk-leave',
    'MORELEAVE_HEAD': 'Time Offs Applied are greater than balance leaves',
    'MORELEAVE_NOTE': 'Note:Still want to add leave click on "YES"',
    'APPROVE_TIME_OFF': 'leave/react-on-time-off',
    'DELETE_LEAVE': 'leave/',

    //yearly leaves
    'YEARLY_LEAVES_LIST': 'leave/get-employee-yearly-leaves/',
    'ADD_YEARLY_LEAVES': 'leave/add-yearly-leaves',
    'EDIT_YEARLY_LEAVES': 'leave/edit-yearly-leaves',
    'DEL_YEARLY_LEAVE': 'leave/delete-yearly-leaves/',

    'TARGET_DATA': 'forecast/emp-list',
    'NOTIFICATION_LIST': 'notification-alert',
    // campaign
    'ADD_CAMPAIGN': 'campaign',
    'CAMPAIGN_LIST': 'campaign/list',
    'CAMPAIGN_BY_ID': 'campaign/',
    'EXPORT_CAMPAIGN': 'data/export-campaign',
    'TOP_COMPAIGN__COUNT': 'campaign/campaign-list-count',
    'MOBILE_COMPAIGN_LIST': 'campaign/mobile-list',
    'CAMPAIGN_MOVE_TO_TRASH': 'campaign/move-to-trash',
    'CAMPAIGN_DETAILS': 'campaign/campaign-details/',
    'CAMPAIGN_DETAILS_BY_ID': 'campaign/campaign-details/',
    'NOTES_CAMPAIGN': 'campaign/campaign-note-list/',
    'CALLS_CAMPAIGN': 'campaign/campaign-call-list/',
    'TASK_CAMPAIGN': 'campaign/campaign-task-list/',
    'EVENT_CAMPAIGN': 'campaign/campaign-event-list/',
    'ATTACHMENT_CAMPAIGN': 'campaign/campaign-attachment-list/',
    'CAMPAIGN_ALL_LIST': 'campaign/all-list?userId=',
    'CAMPAIGN_ATTACHMENT': 'campaign/attachment',
    'CAMPAIGN_ATTACHMENT_DELETE': 'campaign/delete-attachment/',
    'ASSIGN_CAMPAIGN': 'campaign/assign-campaign',
    'CAMPAIGN_MODULE_LIST': 'campaign/assign-campaign-list',
    'LEAD_MOBILE_LIST': 'lead/mobile-list',
    'OPPO_MOBILE_LIST': 'opportunity/mobile-list',
    'CONTACT_MOBILE_LIST': 'contact/mobile-list',
    'DELETE_UNDER_CAMPAIGN': 'campaign/delete-assign-campaign/',
    'MASS_STATUS_UPADTE': 'campaign/mass-update',
    'IMPORT_CAMPAIGN': 'data/import-campaign',
    'CAMPAIGN_TIMELINE': 'campaign/timeline/',
    'CAMPAIGN_STAT': 'campaign/get-camapign-stat/',
    'CAMPAIGN_SEND_EMAIL': 'campaign/campaign-send-email',
    'ALL_CAMPAIGNs_LIST': 'campaign/all-list',

    'EXPORT-QUOTATION': 'data/export-quotation',
    'MOBILE_QUOTATION_LIST': 'quotation/mobile-list',
    'NEW_OPPORTUNITY_ACTIVITY_SHOW': 'opportunity/new-opportunity-activity-list/',
    'EXPORT_OPPORTUNITY': 'data/export-opportunity',
    'CHANGE_OPPO_STATUS': 'opportunity/change-stage/',
    'GET_OPPORTUNITY_LIST': 'opportunity/opportunity-card-list',
    'NEW_ACCOUNT_ACTIVITY_SHOW': 'account/new-account-activity-list/',
    'NEW_CONTACT_ACTIVITY_SHOW': 'contact/new-contact-activity-list/',
    'TOP_CONTACT__COUNT': 'contact/contact-list-count',
    'EXPORT_CONTACT': 'data/export-contacts',
    'MOBILE_CONTACT_LIST': 'contact/mobile-list',
    'SEND_DETAILS_TO_SMS': 'extrafield/send-request-test?customerId=',
    'GET_EXTRA_FIELDS': 'extrafield/get-data/',
    'NEW_ACTIVITY_SHOW': 'lead/new-lead-activity-list/',
    'EXPORT_LEAD': 'data/export-leads',
    //ALERTS
    'ALERTS_BY_USER': 'notification-alert/listbyuserId',
    'ALERTS_READ': 'notification-alert/alert-read',
    'ALERTS_MARK_AS_READ': 'notification-alert/read-all-alert',

    //import amc
    'IMPORT_AMC': 'data/import-amc',
    //import account
    'IMPORT_ACCOUNT': 'data/import-account',
    //import contact
    'IMPORT_CONTACT': 'data/import-contact',
    //import deal
    'IMPORT_COLUMNS': 'data/get-columns',
    'IMPORT_DEAL': 'data/import-opportunity ',
    'IMPORT_FILE': 'get-file/import_deal.xlsx/',
    //import lead
    'IMPORT_LEAD': 'data/import-lead',
    'GET_COLUMN': 'data/get-columns',
    //import product
    'IMPORT_PRODUCT': 'data/import-product',
    //import Quotation
    'IMPORT_QUOTE': 'data/import-quotation',

    // quotation APIs
    'CON_ACC_LIST': 'quotation/contact-account-list',
    'GET_QUOTE_NO': 'quotation/genrate-quotation-no',
    'ADD_QUOTE': 'quotation',
    'QUOTE_LIST': "quotation/list",
    'QUOTE_BY_ID': 'quotation/',
    'VIEW_QUOTATION': 'quotation/view-quotation-invoice/',
    'DOWNLOAD_QUOTATION': 'quotation/quotation-invoice/',
    'QUOT_APP_SETTING': 'quotation/quotation-setting-list',
    'DEL_QUOTATION_ATTACHMENT_BY_ID': 'quotation/delete-attachment/',
    'GET_PREVIOUS_QUOTATION': 'quotation/previous-qotation-list/',
    'CONVERT_DEAL': 'quotation/convert-quotation-opportunity/',
    'TO_EMAIL_LIST': 'quotation/lead-email-list/',
    'QUOTE_CONTACT_LIST': 'contact/all-list?userId=',
    'PREVIOUS_QOUTE_BY_OPPO': 'quotation/prev-qotation-list/',
    'TRASH_QUOTE': 'quotation/move-to-trash',

    // home APIs
    'DASHBOARD_LIST': 'dashboard/list/',
    'OPEN_TASK_LIST': 'dashboard/open-task/',
    'OPEN_DEAL_LIST': 'dashboard/open-opportunity/',
    'AMOUNT_STAGE': 'dashboard/ammount-stage/',
    'DASH_COUNT': 'dashboard/dashboard-count/',
    // amc service APIS
    'ALL_SERVICES': 'amc/service-list',
    'ADD_SERVICE': 'amc/amc-service',
    'VIEW_PRODUCT': 'amc/find-product/',
    'VIEW_SERVICES': 'amc/find-service/',
    'AMC_SERVICES': 'amc/service/',
    'EDIT_SERVICE': 'amc/edit-service',
    'DEL_SERVICE': 'amc/amc-service/',
    'CHANGE_EXP_STATUS': 'amc/mark-it-lost',
    'EDIT_AMC_SERVICES': 'amc/edit-service',
    //warranty APIs
    'LIST_WARRANTY': 'warranty/list',
    'ADD_WARRANTY': 'warranty',
    'WARRANTY_CHANGE_STATUS': 'warranty/change-warranty-status/',
    'WARRANTY_BY_ID': 'warranty/',

    // terms & condition APIs
    'LIST_TERMS': 'terms/list',
    'ADD_TERMS': 'terms',

    'ADD_LEAD': 'add-lead',
    'EDIT_LEAD': 'edit-lead',
    'TERMS_BY_ID': 'terms/',
    'CHANGE_STATUS': 'terms/terms-change-status/',
    'CHANGE_LEAD_STATUS': 'lead/change-status/',
    'CHANGE_LEAD_CLASSIFICATION': 'lead/change-classification/',
    'CHANGE_LEAD_RATING': 'lead/change-rating/',

    //Custom Module
    'GET_CUSTOM_MODULE': 'custom-module/list/',
    'GET_CUSTOM_MODULE_VALUES': 'custom-module/values/',
    'CUSTOM_MODULE_REPORT': 'custom-module/report/',
    'CUSTOM_MODULE_DATA': 'custom-module/values',
    'GET_DEAL_CUSTOM_MODULE_VALUES': 'account/deal-custom-module/',

    // interceptor component APIs
    'GEN_TOKEN': 'auth/generate-token',

    // role component APIs
    'GRP_LIST': 'group-management/groups/',
    'ASSIGN_ACT': 'group-management/assign-actions/',
    'REMOVE_ACT': 'group-management/remove-group-actions/',
    'GET_ACT': 'group-management/actions',


    // user component APIs
    // userdiv APIs
    'ACTIVE_USERS': 'user-management/active-users',
    'LIST_GRP': 'group-management/list-groups',
    'USERS': 'user-management/users',
    'USERS_BY_ID': 'user-management/users/',
    'APP_LIST_ITEM': 'config-management/app-list-items',
    'ADD_USER': 'user-management/add-users',
    'EDIT_USER': 'user-management/edit-users',
    'CHNG_STATUS': 'user-management/users/change-status/',
    'LOCK_USER': 'user-management/users/locked',
    'LOCK_USER_STATUS': 'user-management/users/change-lock-status/',
    'CHANGE_PASS': 'auth/change-password',
    'THEME_CHANGE': 'auth/change-theme',
    'RESET_PASSWD': 'user-management/reset-password/',
    'PASSWORD_RULE': 'user-management/password-rule',

    // list item div
    'DEL_LIST_ITEM': 'config-management/delete-list-item/',
    'UPT_LIST_ITEM': 'config-management/update-list-item',
    'ADD_LIST_ITEM': 'config-management/add-list-item',
    'GET_APP_CONFIG': 'config-management/list-item-groups',
    'GRP_BY_ID': 'config-management/list-item-by-group?group=',

    // setting div APIs
    'SETTING_GRP': 'config-management/app-setting-groups',
    'DET_BY_ID': 'config-management/app-setting-group-items/',
    'DEL_SETTING': 'config-management/delete-app-setting/',
    'EDIT_SETTING': 'config-management/update-app-setting',
    'ADD_SETTING': 'config-management/add-app-setting',

    // ROLES div APIs
    'EDIT_GRP': 'group-management/groups-edit',
    'ADD_GRP': 'group-management/groups',
    'DEL_GRP': 'group-management/groups/',
    'GRPS': 'group-management/groups/',
    "ADD_GROUP_ROLE_ACTIONS": "group-management/add-group-action",
    "EDIT_GROUP_ROLE_ACTIONS": "group-management/edit-group-action",
    "GET_BY_GROUP_ID_ACTIONS": "group-management/get-group-action/",

    //persona detail div APIs
    'GET_USER_DET': 'user-management/users/',
    'UPDATE_USER': 'user-management/update-profile',

    //PRODUCT div APIs
    'PRODUCT_EXPORT': 'data/export-product',
    'MOBILE_PRODUCT_LIST': 'product/mobile-list',
    'PRODUCT_ADD': 'product',
    'PRODUCT_LIST': 'product/list',
    'PRODUCT_BYID': 'product/',
    'CATEGORY_LIST': 'category/list',
    'DEL_PROD': 'product/bulk-delete',
    'FILTER_LIST': 'filter/list',
    'FILTER_SORT': 'filter/sort',
    'SAVE_FILTER_LIST': 'filter/saved-filters',
    'TRASH_PRODUCT': 'product/move-to-trash',
    'ALL_PRODUCT_LIST': '/product/product-type-list',
    'PRODUCT_DETAIL': 'product/product-details?productUid=',
    'PRODUCT_WISE_LEADS': 'product/product-lead-list?productId=',
    'PRODUCT_WISE_CONTACTS': 'product/product-contact-list?productId=',
    'PRODUCT_WISE_OPPO': 'product/product-opportunity-list?productId=',
    'PRODUCT_WISE_ORDER': 'product/product-order-list?productId=',
    'PRODUCT_WISE_QUOTE': 'product/product-quotation-list?productId=',

    // extra field module APIs
    'EXTRAFIELDS': 'extrafield',
    'EXTRAFIELDS_LIST': 'extrafield/list',
    'ACTIVE_EXTRA_FIELDS': 'customfield/active-lead-custom-list/',
    'REMV_EXTRAFIELDS': 'extrafield/',
    'EXTRAFIELDS_BY_ID': 'extrafield/',
    'EXTRA_FIELD_STATUS': 'extrafield/disable-status/',
    'ALL_EXTRA_STATUS': 'extrafield/change-status/',
    'ADD_SECTION': 'extrafield/section',
    'SECTION_LIST': 'extrafield/section/list',
    'SETION_DELETE': 'extrafield/section/',
    'MAIN_TITLE_LIST': 'extrafield/section/title-list/',
    'SUB_TITLE_LIST': 'extrafield/section/subtitle-list/',
    'EXTRA_FIELD_DEPENDENCY': 'extrafield/check-section-dependency/',
    'FIELDS_DEPENDENCY': 'extrafield/check-extra-dependency/',
    'SUBSECTION_FIELDS_CHANGE_SEQUENCE': 'extrafield/change-seq',
    'CHANGE_SECTION_SEQUENCE': 'extrafield/seq-list',
    'SECTION_FIELDS_SEQUENCE': 'extrafield/change-section-seq',
    'UPLOAD_FILE_OF EXTRA_FIELD': 'extrafield/upload-file',

    // customize-module component APIs
    'CUSTOMFIELDS': 'customfield',
    'CUSTOMFIELDS_LIST': 'customfield/list',
    'CUSTOMFIELDS_LIST_IN_ADD': 'customfield/list-add',
    'ACTIVE_CUSTOM_FIELDS': 'customfield/active-lead-custom-list/',
    'REMV_CUSTOMFIELDS': 'customfield/',

    //DEAL div APIs
    'DEAL_ADD': 'opportunity',
    'DEALS_LIST': 'opportunity/list',
    'DEAL_BY_ID': 'opportunity/',
    'DEL_DEAL': 'opportunity/bulk-delete',
    'DEAL_MOVE_TO_TRASH': 'opportunity/move-to-trash',
    'ALL_DEAL_LIST': 'opportunity/all-list',
    'ALL_OPPO_LIST': 'opportunity/all-list',
    'DEAL_DETAILS_BY_ID': 'opportunity/opportunity-details/',
    'CALL_DEAL': 'opportunity/opportunity-call-list/',
    'TASK_DEAL': 'opportunity/opportunity-task-list/',
    'CALENDAR_TASKS': 'task/calendar/list',
    'EVENT_DEAL': 'opportunity/opportunity-event-list/',
    'NOTE_DEAL': 'opportunity/opportunity-note-list/',
    'ATTACH_DEAL': 'opportunity/opportunity-attachment-list/',
    'DEAL_ACTIVITY_SHOW': 'opportunity/opportunity-activity-list/',
    'DEAL_QUOTATION': 'opportunity/opportunity-quotation-list/',
    'DEL_DEAL_ATTACHMENT_BY_ID': 'opportunity/delete-attachment/',
    'DEL_DEAL_PAYMENT_BY_ID': 'opportunity/delete-opportunity-payment/',
    'CONVERT_TO_DEAL': 'convert-opportunity-to-opportunity/',
    'DEAL_DETAILS_ID': 'opportunity/opportunity-detail-read/',
    'CHANGE_PAYMENT_STATUS': 'opportunity/opportunity-paid-status/',
    'DEAL_CONTACT_ACCOUNT': 'opportunity/contact-account-details/',
    'CHANGE_DEAL_STAGE': 'opportunity/change-stage/',
    'CHANGE_DEAL_OUTCOME': 'opportunity/change-outcome/',
    'GET_DEALS': 'opportunity/all-list',
    'OUTCOME_CHANGE': 'opportunity/new-change-outcome',
    'GOOGLE_CONTACT_LIST': 'calendar/sync/google-contact?access_token=',
    'ADD_GOOGLE_CONTACT': 'contact/add-sync-contacts?userUId=',
    'All_GOOGLE_CONTACT': 'calendar/sync/google-contact-list',


    // ORDER MODULE APIS
    'ORDER_LIST': 'order/list',
    'ORDER_BY_ID': 'order/',
    'PIR_PRODUCT_LIST': 'opportunity/opportunity-product-list/',
    'GENRATE_PIR_NO': 'custom-module/generate-pir-number/',
    'ORDER_CUSTOM_VALUES': 'custom-module/values?moduleId=',
    'ORDER_ADD': 'order',
    'ORDER_STATUS': 'order/accept-order/',

    // TASK
    'TASK': 'task',
    'DEL_TASK': 'task/',
    'TASK_BY_ID': 'task/',
    'CHNG_TASK_STATUS': 'task/change-status/',

    // Note
    'ADD_NOTE': 'notes',
    'DEL_NOTE': 'notes/',
    'DEL_ATTACHMENT': 'notes/note-attachment/',
    'NOTES_BY_ID': 'notes/',

    // CALL LOG
    'ADD_CALL': 'call',
    'CALL_BY_ID': 'call/',
    'DEL_CALLLOG': 'call/',

    // event
    'ADD_EVENT': 'event',
    'EVENT_BY_ID': 'event/',
    'DEL_EVENT': 'event/',

    //Attchment
    'ATTACHMENT': 'lead/attachment',
    'DEL_ATTACHMENT_BY_ID': 'lead/delete-attachment/',
    'CONTACT_ATTACHMENT': 'contact/attachment/',
    'CONTACT_DEL_ATTACHMENT_BY_ID': "contact/delete-attachment/",
    'ACCOUNT_ATTACHMENT': 'account/attachment',
    'ACCOUNT_DEL_ATTACHMENT_BY_ID': 'account/delete-attachment/',
    'DEAL_ATTACHMENT': 'opportunity/attachment',
    'DEAL_DEL_ATTACHMENT_BY_ID': 'opportunity/delete-attachment/',


    // CONTACT APIs
    'CONTACT_ADD': 'contact',
    'CONTACT_LIST': 'contact/list',
    'ALL_CONTACT_LIST': 'contact/all-list',
    'CONTACT_DETAILS_BY_ID': 'contact/contact-details/',
    'DEL_CONTACT': 'contact/bulk-delete',
    'CONTACT_MOVE_TO_TRASH': 'contact/move-to-trash',
    'CONTACT_BY_ID': 'contact/',
    'NOTE_CONTACT': 'contact/contact-note-list/',
    'CALL_CONTACT': 'contact/contact-call-list/',
    'EVENT_CONTACT': 'contact/contact-event-list/',
    'ATTACH_CONTACT': 'contact/contact-attachment-list/',
    'TASK_CONTACT': 'contact/contact-task-list/',
    'CONTACT_ACTIVITY_SHOW': 'contact/contact-activity-list/',
    'CONTACT_DEAL_ACCOUNT': 'contact/opportunity-account-details/',
    'CONTACT_QUOTATION': 'quotation/by-contact/',
    'CONTACT_ORDER': 'order//order-by-contact/',

    //ACCOUNT APIs
    'ACCOUNT_TOP_COUNT': 'account/account-list-count',
    'EXPORT_ACCOUNT': 'data/export-accounts',
    'MOBILE_ACCOUNT_LIST': 'account/mobile-list',
    'ALL_ACCOUNT_LIST': 'account/all-list',
    'ACCOUNT_ADD': 'account',
    'ACCOUNT_LIST': 'account/list',
    'ACCOUNT_BY_ID': 'account/',
    'DEL_ACCOUNT': 'account/bulk-delete',
    'ACCOUNT_MOVE_TO_TRASH': 'account/move-to-trash',
    'ACCOUNT_DETAILS_BY_ID': 'account/account-details/',
    'ATTACH_ACC': 'account/account-attachment-list/',
    'CALL_ACC': 'account/account-call-list/',
    'TASK_ACC': 'account/account-task-list/',
    'EVENT_ACC': 'account/account-event-list/',
    'NOTE_ACC': 'account/account-note-list/',
    'ACC_ACTIVITY_SHOW': 'account/account-activity-list/',
    'ACC_TIMELINE': 'account/timeline/',
    'QUOTATION_ACC': 'account/account-quotation-list/',
    'ACCOUNT_CONTACT_DEAL': 'account/contact-opportunity-details/',
    'ACCOUNT_QUOTATIONS': 'quotation/by-account/',
    'ACC_CUSTOM_VALUES': 'custom-module/values?moduleId=',
    'ACC_ORDER_LIST': 'order/order-by-account/',

    //activitiies
    'ACTIVITIES_LIST': 'activity/list',
    'MARK_AS_COMPLETE': 'task/change-multi-task-status',
    'TASK_ACTIVITY': 'activity/task-activity-list',
    'EVENT_ACTIVITY': 'activity/event-activity-list',
    'CALL_ACTIVITY': 'activity/call-activity-list',
    'NOTE_ACTIVITY': 'activity/note-activity-list',

    //Lead APIs
    'MOBILE_LEAD_LIST': 'lead/mobile-list',
    'TOP_COUNT': 'lead/lead-list-count',
    'GET_MODULE_COLUMNS': 'module-columns/',
    'SAVE_COLUMN_MODULE': 'module-columns',
    'LEAD_ADD': 'lead',
    'LEAD_LIST': 'lead/list',
    'ADD_LEAD_LIST': 'lead/list-add',
    'LEAD_BY_ID': 'lead/',
    'DEL_LEAD': 'lead/bulk_delete',
    'LEAD_MOVE_TO_TRASH': 'lead/move-to-trash',
    'LEAD_BY_UID': 'lead/lead-details/',
    'ALL_LEAD_LIST': 'lead/all-list',
    'ALL_DEAL': 'opportunity/opportunity-account-list/',
    'CONVERT_LEAD': 'lead/convert-lead',
    'NOTES_SHOW': 'lead/lead-note-list/',
    'CALLS_SHOW': 'lead/lead-call-list/',
    'TASK_SHOW': 'lead/lead-task-list/',
    'EVENT_SHOW': 'lead/lead-event-list/',
    'ATTACHMENT_SHOW': 'lead/lead-attachment-list/',
    'AMC_STATUS': 'amc/service-done/',
    'CUSTOM_FIELD_STATUS': 'customfield/disable-status/',
    'ALL_CUSTOM_STATUS': 'customfield/change-status/',
    'ACTIVITY_SHOW': 'lead/lead-activity-list/',
    'QUOTATION_SHOW': 'lead/lead-quotation-list/',
    'GET_REF_NO': 'lead/lead-ref-no/',
    'RESTORE_RECORDS': 'lead/restore-to-trash?moduleId=',

    // AMC APIs
    'AMC_LIST': 'amc/list',
    'DEL_AMC': 'amc/bulk_delete',
    'ALL_WARRANTY_TYPE': 'warranty/warranty-type-list',
    'ALL_TERMS_CONDITION': 'terms/terms-type-list',
    'AMC_ADD': 'amc',
    'AMC_BY_UID': 'amc/',

    //Calendar APIs
    'EVENT_LIST': 'calendar/event-list/',
    'CALENDAR_SYNC': 'calendar/sync',
    'CALENDAR_EVENTS': 'calendar/list-events',
    'CALENDAR_LOGIN': 'calendar/login-google-calender',
    'CALENDAR_GOOGLE_SYNC': 'calendar/google-calender-sync',
    'CALENDAR_LOGOUT': 'calendar/logout-google-calender',

    // REPORTS
    'REPORT_MODULES': 'reports/modules',
    'SAVE_REPORT_COLUMN': 'reports/columns',

    // DATA ADMINISTRATION
    'DATA_BACKUP': 'data-backup',
    'BACKUP_HISTORY': 'data-backup/history',
    'SYSTEM_LOG': 'notification-alert/log',

    //TRACKING
    'ALL_USER_TRACK': 'user-tracking/locations',
    'USER_TRACK': 'user-tracking/locations?userId=',
    'USER_TRACK_WID_DATE': 'user-tracking/locations?userId=',
    'SELECTED_USER_TRACK': 'user-tracking/user-locations',
    'TRACK_ACTIVE_USERS': 'user-tracking/location-status/list',
    'ALL_USER_TRACK_LIST': 'user-tracking/user-list',

    //FORECAST APIs
    // 'FORECAST_LIST': 'forecast/list',
    'ADD_TARGET': 'forecast/target',
    'BY_ID_TARGET': 'forecast/target?targetUid=',
    'TARGET_LIST': 'forecast/target/list',
    'PRODUCT_WISE_EMP': 'forecast/employee-target/',
    'TRASH_TARGET': 'forecast/move-to-trash',
    'EMP_LIST': 'forecast/target-user-list?targetUid=',
    'EMP_DETAIL': 'forecast/employee-details/',
    //forecast in setting module
    'ADD_DESIGNATION': 'user-management/designation',
    'EDIT_DESIGNATION': 'user-management/designation',
    'DESIGNATION_LIST': 'user-management/designation/all-list', //for dropdown
    'SHOW_DESIGNATION': 'user-management/designation/list',// setting designation list
    'GET_BY_ID_DESIGNATE': 'user-management/designation/',
    'DELETE_DESIG':'user-management/delete-designation/',
    //email APIs
    'EMAIL_TEMPALTE_LIST': 'email-template/list',
    'ADD_EMAIL_TEMPLATE': 'email-template',
    'BY_ID_TEMPALTE': 'email-template?id=',
    'MODULE_ACTION_AND_FIELDS': 'email-template/module-data?module=',
    'EMAIL_TEMP_STATUS': 'email-template/change-status?id=',
    //SMS APIs
    'ADD_SMS_TEMPLATE': 'email-template/sms',
    'GET_SMS_BY_ID': 'email-template/sms?id=',
    'SMS_TEMPALTE_LIST': 'email-template/sms/list',
    //WhatsApp APIs
    'ADD_WP_TEMPLATE': 'email-template/whatsApp',
    'GET_WP_BY_ID': 'email-template/whatsApp?id=',
    'WP_TEMPALTE_LIST': 'email-template/whatsApp/list',
    'NOTE_HELP': 'email-template/note',

    //organization
    'GET_FISCAL_YEAR': 'setting-management/list-fiscal-year',
    'GET_CURRENCY': 'currency/currency-list',
    'GET_Date_Format': 'setting-management/list-date-format',
    'GET_Date_Format_Divider': 'setting-management/list-date-format-divider',
    'GET_ORGANIZATION_DETAIL': 'organization/organization-by-id/',
    'UPDATE_ORGDETAIL': 'organization',
    'GET_TIMEZONE': 'setting-management/get-timeZone',
    'GET_COUNTRY': 'setting-management/get-country-list',
    'GET_INDUSTRY': 'setting-management/list-industry-type',
    'DELETE_HEAD':'Are you sure you want to delete this leave',

    //feedback
    'FEEDBACK_LIST': 'question-management/list-question',
    'FEEDBACK_STATUS': 'question-management//change-question-status/',
    'ADD_QUSETION': 'question-management/add-question',
    'EDIT_QUESTION': 'question-management/edit-question',
    'CHECK_DEPENDENCY': 'question-management/check-question-dependency/',
    'FEEDBACK_GET_BY_ID': 'question-management/getbyid/',
    'FEEDBACK_ACTIVE_LIST': 'question-management/list-active?module=',
    'VIEW_FEEDBACK': 'feedback/view/',
    'ADD_FEEDBACK': 'feedback/submit',
    'FEEDBACK_RESPONSE_DATA': 'question-management/que-response-list',
    'GET_USER_RESPONSE': 'question-management/user-response/list',
    'LOGIN': 'auth/authenticate',

    //promorioanal Campaigns
    'PROMO_LEADS': 'lead/all-list?userId=',
    'PROMO_CONTACT': 'contact/all-list?userId=',
    'ADD_PROMOTIONAL_CAMPAIGN': 'campaign/promotional-campaign',
    'LIST_PROMOTIONAL_CAMPAIGN': 'campaign/promotional-camaign/list',
    'GET_PROMOTIONAL_CAMPAIGN': 'campaign/promotional-camaign/',
    'TRASH_PROMOTIONAL_CAMPAIGN': 'campaign/promotional-campaign/move-to-trash',
    'RESTORE_PROMOTIONAL_CAMPAIGN': 'campaign/promotional-campaign/restore-to-trash/',

    //latest update
    'TODAYS_MEETINGS': 'dashboard/meeting-reminder-list/',
    'TODAYS_CALLS': 'dashboard/schedule-call-list/',

    //product Category
    'PRODUCT_CATEGORY_LIST': 'category/setting-list',
    'ADD_PRODUCT_CATEGORY': 'category',
    'BY_ID_PRODUCT_CATEGORY': 'category/',
    'DELETE_PRODUCT_CATEGORY': 'category/',
    'PRODUCT_CATEGORY_DEPENDENCY': 'category/check-category-dependency/',
    'CHANGE_STATUS_PRODUCT_CAT': 'category/change-status/'
  };


  public UI_URLS: any = {
    'LOGIN': '/web/login',
    'HOME': '/web/home',

  };

}
