let EndPoint = {
  //Login Endpoints
  Login: '/secured/publicLogin',

  //boLogin Endpoints
  BoLogin: '/secured/boLogin',

  //Register Endpoints 
  Register : '/secured/addPeople',

  // DashBoard endPoints
  GetDashboard: '/customtransaction/executeCustomTransaction',

  //Permist Flow end Points
  GetMyPermits: '/folder/getFolderByPeople',
  GetPermitSummary: '/folder/getFolderByRSN',
  GetFolderFee: '/folder/getFolderFee',
  GetFolderByRSN: '/folder/getFolderByRSN',
  GetProperty: '/property/getProperty',
  GetFolderPeople: '/folder/getFolderPeople',
  GetWorkflow: '/folder/getFolderProcess',
  GetApplicationDetails: '/folder/getFolderInfo',
  GetAttachmentList: '/folder/getFolderAttachment',
  UploadFile: '/folder/addFolderAttachment2',
  AddFolderAttachment: '/folder/addFolderAttachment',

  //Register endPoints
  GetValidPhoneTypes: '/secured/getValidPhoneTypes',
  GetValidStreetTypes: '/secured/getValidStreetTypes',
  GetValidPeopleTitles: '/secured/getValidPeopleTitles',
  GetValidCity: '/secured/getValidCity',
  GetValidProvinces: '/secured/getValidProvinces',
  AddPeople: '/secured/addPeople',
  GetUnitTypes: '/secured/getValidUnitTypes',

  //Inspection endPoints
  GetMyInspections: '/customtransaction/executeCustomTransaction',

  //MyProfile endPoints

  GetPeople: '/secured/getPeople',
  GetValidStreetDirections: '/secured/getValidStreetDirections',
  GetValidSecurityQuestions: '/secured/getValidSecurityQuestions',
  UpdatePeople: '/secured/updatePeople',

  changePassword: '/secured/updatePeopleInternetPassword',

  ScheduleInspection: '/folder/addInspectionRequest',

  //PublicSearch endPoints
  ExecuteCustomTransaction: '/customtransaction/executeCustomTransaction',
  GetWorkType: '/folder/getFolderWorkByFolderType',
  GetFolderSubByFolderType: '/folder/getFolderSubByFolderType',
  GetFolderWorkByFolderType: '/folder/getFolderWorkByFolderType',

  // ScheduleInspection : '/customtransaction/executeCustomTransaction'
};

export {EndPoint};
