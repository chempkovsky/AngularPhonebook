
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppGlblHomeComponent } from './shared/components/app-glbl-home/app-glbl-home.component';
import { AppGlblPagenotfoundComponent } from './shared/components/app-glbl-pagenotfound/app-glbl-pagenotfound.component';

const routes: Routes = [

///////// begin RDLaspnetuserView 
  { path: 'RDLaspnetuserView/RDLaspnetuserrolesView/:hf2', 
  loadChildren: () => import('./components/aspnetuserroles-view/aspnetuserroles-view-rdl-lazy.routing.module').then(m => m.AspnetuserrolesViewRdlLazyRoutingModule),
  data: { vn: 'aspnetuserrolesView', va: 'l', ms: true, np: 'RDL', fh: 2, mh: 10, sf: true, /* title: 'User Roles', */ hf: 'hf2',  dp: 2, uid: '0911946b566d4135b97694a32d9db940' }  },

  { path: 'RDLaspnetuserView/RDLaspnetusermaskView/:hf2', 
  loadChildren: () => import('./components/aspnetusermask-view/aspnetusermask-view-rdl-lazy.routing.module').then(m => m.AspnetusermaskViewRdlLazyRoutingModule),
  data: { vn: 'aspnetusermaskView', va: 'l', ms: true, np: 'RDL', fh: 2, mh: 10, sf: true, /* title: 'User Masks', */ hf: 'hf2',  dp: 2, uid: 'f5568f3d7fee495abee0ef00768dfba2' }  },

  { path: 'RDLaspnetuserView', 
  loadChildren: () => import('./components/aspnetuser-view/aspnetuser-view-rdl-lazy.routing.module').then(m => m.AspnetuserViewRdlLazyRoutingModule),
  data: { vn: 'aspnetuserView', va: 'l', ms: true, np: 'RDL', fh: 2, mh: 10, sf: true, /* title: 'Users', */  dp: 1, uid: '6d3a9f7f925e43359bce2d5440b21965' }  },
///////// end RDLaspnetuserView

///////// begin aspnetuserView
  { path: 'aspnetuserView/aspnetuserrolesView/:hf2/ViewaspnetuserrolesView/:hf3/:id3', 
  loadChildren: () => import('./components/aspnetuserroles-view/aspnetuserroles-view-rv-lazy.routing.module').then(m => m.AspnetuserrolesViewRvLazyRoutingModule),
  data: { vn: 'aspnetuserrolesView', va: 'v', /* sf: true,  title: 'View User Role', */ hf: 'hf3',  id: 'id3', dp: 3}},

{ path: 'aspnetuserView/aspnetuserrolesView/:hf2/AddaspnetuserrolesView/:hf3', 
  loadChildren: () => import('./components/aspnetuserroles-view/aspnetuserroles-view-ra-lazy.routing.module').then(m => m.AspnetuserrolesViewRaLazyRoutingModule),
  data: { vn: 'aspnetuserrolesView', va: 'a', /* sf: true,  title: 'Add User Role', */ hf: 'hf3',  dp: 3}},

{ path: 'aspnetuserView/aspnetuserrolesView/:hf2/UpdaspnetuserrolesView/:hf3/:id3', 
  loadChildren: () => import('./components/aspnetuserroles-view/aspnetuserroles-view-ru-lazy.routing.module').then(m => m.AspnetuserrolesViewRuLazyRoutingModule),
  data: { vn: 'aspnetuserrolesView', va: 'u', /* sf: true,  title: 'Update User Role', */ hf: 'hf3',  id: 'id3',  dp: 3}},

{ path: 'aspnetuserView/aspnetuserrolesView/:hf2/DelaspnetuserrolesView/:hf3/:id3', 
  loadChildren: () => import('./components/aspnetuserroles-view/aspnetuserroles-view-rd-lazy.routing.module').then(m => m.AspnetuserrolesViewRdLazyRoutingModule),
  data: { vn: 'aspnetuserrolesView', va: 'd', /* sf: true,  title: 'Delete User Role', */ hf: 'hf3',  id: 'id3',  dp: 3}},

{ path: 'aspnetuserView/aspnetuserrolesView/:hf2', 
  loadChildren: () => import('./components/aspnetuserroles-view/aspnetuserroles-view-rl-lazy.routing.module').then(m => m.AspnetuserrolesViewRlLazyRoutingModule),
  data: { vn: 'aspnetuserrolesView', va: 'l', ms: true,  fh: 2, mh: 10, sf: true, /*  title: 'User Roles', */ hf: 'hf2',  dp: 2, uid: '422df652268a4986a6262033eb412184' }  },

  { path: 'aspnetuserView/aspnetusermaskView/:hf2', 
  loadChildren: () => import('./components/aspnetusermask-view/aspnetusermask-view-rl-lazy.routing.module').then(m => m.AspnetusermaskViewRlLazyRoutingModule),
  data: { vn: 'aspnetusermaskView', va: 'l', ms: true,  fh: 2, mh: 10, sf: true, /*  title: 'User Masks', */ hf: 'hf2',  dp: 2, uid: '289fe9775a744771b0dbab1f9696c182' }  },


  { path: 'aspnetuserView/ViewaspnetuserView/:hf2/:id2', 
  loadChildren: () => import('./components/aspnetuser-view/aspnetuser-view-rv-lazy.routing.module').then(m => m.AspnetuserViewRvLazyRoutingModule),
  data: { vn: 'aspnetuserView', va: 'v', /* sf: true,  title: 'View User', */ hf: 'hf2',  id: 'id2', dp: 2}},

{ path: 'aspnetuserView/AddaspnetuserView/:hf2', 
  loadChildren: () => import('./components/aspnetuser-view/aspnetuser-view-ra-lazy.routing.module').then(m => m.AspnetuserViewRaLazyRoutingModule),
  data: { vn: 'aspnetuserView', va: 'a', /* sf: true,  title: 'Add User', */ hf: 'hf2',  dp: 2}},

{ path: 'aspnetuserView/UpdaspnetuserView/:hf2/:id2', 
  loadChildren: () => import('./components/aspnetuser-view/aspnetuser-view-ru-lazy.routing.module').then(m => m.AspnetuserViewRuLazyRoutingModule),
  data: { vn: 'aspnetuserView', va: 'u', /* sf: true,  title: 'Update User', */ hf: 'hf2',  id: 'id2',  dp: 2}},

{ path: 'aspnetuserView/DelaspnetuserView/:hf2/:id2', 
  loadChildren: () => import('./components/aspnetuser-view/aspnetuser-view-rd-lazy.routing.module').then(m => m.AspnetuserViewRdLazyRoutingModule),
  data: { vn: 'aspnetuserView', va: 'd', /* sf: true,  title: 'Delete User', */ hf: 'hf2',  id: 'id2',  dp: 2}},

{ path: 'aspnetuserView', 
  loadChildren: () => import('./components/aspnetuser-view/aspnetuser-view-rl-lazy.routing.module').then(m => m.AspnetuserViewRlLazyRoutingModule),
  data: { vn: 'aspnetuserView', va: 'l', ms: true,  fh: 2, mh: 10, sf: true, /* title: 'Users', */  dp: 1, uid: 'f7eb32b313b742e7871e8f0a0a916d0a' }  },
///////// end aspnetuserView

///////// begin RDLaspnetroleView  
  { path: 'RDLaspnetroleView/RDLaspnetuserrolesView/:hf2', 
  loadChildren: () => import('./components/aspnetuserroles-view/aspnetuserroles-view-rdl-lazy.routing.module').then(m => m.AspnetuserrolesViewRdlLazyRoutingModule),
  data: { vn: 'aspnetuserrolesView', va: 'l', ms: true, np: 'RDL', fh: 2, mh: 10, sf: true, /* title: 'User Roles', */ hf: 'hf2',  dp: 2, uid: '84688231e70949b0b101b157f970194d' }  },

  { path: 'RDLaspnetroleView/RDLaspnetrolemaskView/:hf2', 
  loadChildren: () => import('./components/aspnetrolemask-view/aspnetrolemask-view-rdl-lazy.routing.module').then(m => m.AspnetrolemaskViewRdlLazyRoutingModule),
  data: { vn: 'aspnetrolemaskView', va: 'l', ms: true, np: 'RDL', fh: 2, mh: 10, sf: true, /* title: 'Role Masks', */ hf: 'hf2',  dp: 2, uid: '83f6796ee44d437f9fd85d074684af8a' }  },

  { path: 'RDLaspnetroleView', 
  loadChildren: () => import('./components/aspnetrole-view/aspnetrole-view-rdl-lazy.routing.module').then(m => m.AspnetroleViewRdlLazyRoutingModule),
  data: { vn: 'aspnetroleView', va: 'l', ms: true, np: 'RDL', fh: 2, mh: 10, sf: true, /* title: 'Roles', */  dp: 1, uid: 'eb03be2660584ac5894bb2243de6112a' }  },

///////// end RDLaspnetroleView

///////// begin aspnetroleView
  { path: 'aspnetroleView/aspnetuserrolesView/:hf2/ViewaspnetuserrolesView/:hf3/:id3', 
  loadChildren: () => import('./components/aspnetuserroles-view/aspnetuserroles-view-rv-lazy.routing.module').then(m => m.AspnetuserrolesViewRvLazyRoutingModule),
  data: { vn: 'aspnetuserrolesView', va: 'v', /* sf: true,  title: 'View User Role', */ hf: 'hf3',  id: 'id3', dp: 3}},

{ path: 'aspnetroleView/aspnetuserrolesView/:hf2/AddaspnetuserrolesView/:hf3', 
  loadChildren: () => import('./components/aspnetuserroles-view/aspnetuserroles-view-ra-lazy.routing.module').then(m => m.AspnetuserrolesViewRaLazyRoutingModule),
  data: { vn: 'aspnetuserrolesView', va: 'a', /* sf: true,  title: 'Add User Role', */ hf: 'hf3',  dp: 3}},

{ path: 'aspnetroleView/aspnetuserrolesView/:hf2/UpdaspnetuserrolesView/:hf3/:id3', 
  loadChildren: () => import('./components/aspnetuserroles-view/aspnetuserroles-view-ru-lazy.routing.module').then(m => m.AspnetuserrolesViewRuLazyRoutingModule),
  data: { vn: 'aspnetuserrolesView', va: 'u', /* sf: true,  title: 'Update User Role', */ hf: 'hf3',  id: 'id3',  dp: 3}},

{ path: 'aspnetroleView/aspnetuserrolesView/:hf2/DelaspnetuserrolesView/:hf3/:id3', 
  loadChildren: () => import('./components/aspnetuserroles-view/aspnetuserroles-view-rd-lazy.routing.module').then(m => m.AspnetuserrolesViewRdLazyRoutingModule),
  data: { vn: 'aspnetuserrolesView', va: 'd', /* sf: true,  title: 'Delete User Role', */ hf: 'hf3',  id: 'id3',  dp: 3}},

{ path: 'aspnetroleView/aspnetuserrolesView/:hf2', 
  loadChildren: () => import('./components/aspnetuserroles-view/aspnetuserroles-view-rl-lazy.routing.module').then(m => m.AspnetuserrolesViewRlLazyRoutingModule),
  data: { vn: 'aspnetuserrolesView', va: 'l', ms: true,  fh: 2, mh: 10, sf: true, /*  title: 'User Roles', */ hf: 'hf2',  dp: 2, uid: '5a87aa09caee4fdaa0744a1dcf30cf7d' }  },

  { path: 'aspnetroleView/aspnetrolemaskView/:hf2/ViewaspnetrolemaskView/:hf3/:id3', 
  loadChildren: () => import('./components/aspnetrolemask-view/aspnetrolemask-view-rv-lazy.routing.module').then(m => m.AspnetrolemaskViewRvLazyRoutingModule),
  data: { vn: 'aspnetrolemaskView', va: 'v', /* sf: true,  title: 'View Role Mask', */ hf: 'hf3',  id: 'id3', dp: 3}},

{ path: 'aspnetroleView/aspnetrolemaskView/:hf2/AddaspnetrolemaskView/:hf3', 
  loadChildren: () => import('./components/aspnetrolemask-view/aspnetrolemask-view-ra-lazy.routing.module').then(m => m.AspnetrolemaskViewRaLazyRoutingModule),
  data: { vn: 'aspnetrolemaskView', va: 'a', /* sf: true,  title: 'Add Role Mask', */ hf: 'hf3',  dp: 3}},

{ path: 'aspnetroleView/aspnetrolemaskView/:hf2/UpdaspnetrolemaskView/:hf3/:id3', 
  loadChildren: () => import('./components/aspnetrolemask-view/aspnetrolemask-view-ru-lazy.routing.module').then(m => m.AspnetrolemaskViewRuLazyRoutingModule),
  data: { vn: 'aspnetrolemaskView', va: 'u', /* sf: true,  title: 'Update Role Mask', */ hf: 'hf3',  id: 'id3',  dp: 3}},

{ path: 'aspnetroleView/aspnetrolemaskView/:hf2/DelaspnetrolemaskView/:hf3/:id3', 
  loadChildren: () => import('./components/aspnetrolemask-view/aspnetrolemask-view-rd-lazy.routing.module').then(m => m.AspnetrolemaskViewRdLazyRoutingModule),
  data: { vn: 'aspnetrolemaskView', va: 'd', /* sf: true,  title: 'Delete Role Mask', */ hf: 'hf3',  id: 'id3',  dp: 3}},

{ path: 'aspnetroleView/aspnetrolemaskView/:hf2', 
  loadChildren: () => import('./components/aspnetrolemask-view/aspnetrolemask-view-rl-lazy.routing.module').then(m => m.AspnetrolemaskViewRlLazyRoutingModule),
  data: { vn: 'aspnetrolemaskView', va: 'l', ms: true,  fh: 2, mh: 10, sf: true, /*  title: 'Role Masks', */ hf: 'hf2',  dp: 2, uid: '03e8d35dff59419cb9cee16b8d9b487c' }  },

  { path: 'aspnetroleView/ViewaspnetroleView/:hf2/:id2', 
  loadChildren: () => import('./components/aspnetrole-view/aspnetrole-view-rv-lazy.routing.module').then(m => m.AspnetroleViewRvLazyRoutingModule),
  data: { vn: 'aspnetroleView', va: 'v', /* sf: true,  title: 'View Role', */ hf: 'hf2',  id: 'id2', dp: 2}},

{ path: 'aspnetroleView/AddaspnetroleView/:hf2', 
  loadChildren: () => import('./components/aspnetrole-view/aspnetrole-view-ra-lazy.routing.module').then(m => m.AspnetroleViewRaLazyRoutingModule),
  data: { vn: 'aspnetroleView', va: 'a', /* sf: true,  title: 'Add Role', */ hf: 'hf2',  dp: 2}},

{ path: 'aspnetroleView/UpdaspnetroleView/:hf2/:id2', 
  loadChildren: () => import('./components/aspnetrole-view/aspnetrole-view-ru-lazy.routing.module').then(m => m.AspnetroleViewRuLazyRoutingModule),
  data: { vn: 'aspnetroleView', va: 'u', /* sf: true,  title: 'Update Role', */ hf: 'hf2',  id: 'id2',  dp: 2}},

{ path: 'aspnetroleView/DelaspnetroleView/:hf2/:id2', 
  loadChildren: () => import('./components/aspnetrole-view/aspnetrole-view-rd-lazy.routing.module').then(m => m.AspnetroleViewRdLazyRoutingModule),
  data: { vn: 'aspnetroleView', va: 'd', /* sf: true,  title: 'Delete Role', */ hf: 'hf2',  id: 'id2',  dp: 2}},

{ path: 'aspnetroleView', 
  loadChildren: () => import('./components/aspnetrole-view/aspnetrole-view-rl-lazy.routing.module').then(m => m.AspnetroleViewRlLazyRoutingModule),
  data: { vn: 'aspnetroleView', va: 'l', ms: true,  fh: 2, mh: 10, sf: true, /* title: 'Roles', */  dp: 1, uid: 'af75c358d7684cf5867ddf49f920e3f8' }  },
///////// end aspnetroleView

///////// begin RDLaspnetmodelView
{ path: 'RDLaspnetmodelView/RDLaspnetusermaskView/:hf2', 
loadChildren: () => import('./components/aspnetusermask-view/aspnetusermask-view-rdl-lazy.routing.module').then(m => m.AspnetusermaskViewRdlLazyRoutingModule),
data: { vn: 'aspnetusermaskView', va: 'l', ms: true, np: 'RDL', fh: 2, mh: 10, sf: true, /* title: 'User Masks', */ hf: 'hf2',  dp: 2, uid: 'f761889764a346e9872c4f7a3eb034bc' }  },

{ path: 'RDLaspnetmodelView/RDLaspnetrolemaskView/:hf2', 
loadChildren: () => import('./components/aspnetrolemask-view/aspnetrolemask-view-rdl-lazy.routing.module').then(m => m.AspnetrolemaskViewRdlLazyRoutingModule),
data: { vn: 'aspnetrolemaskView', va: 'l', ms: true, np: 'RDL', fh: 2, mh: 10, sf: true, /* title: 'Role Masks', */ hf: 'hf2',  dp: 2, uid: '40e9ee42d9024ed1955fd7a92a58c9f2' }  },

{ path: 'RDLaspnetmodelView', 
loadChildren: () => import('./components/aspnetmodel-view/aspnetmodel-view-rdl-lazy.routing.module').then(m => m.AspnetmodelViewRdlLazyRoutingModule),
data: { vn: 'aspnetmodelView', va: 'l', ms: true, np: 'RDL', fh: 2, mh: 10, sf: true, /* title: 'Models', */  dp: 1, uid: '646bf11ec0fb4fd8af1a2fb7fa08f52c' }  },
///////// end RDLaspnetmodelView

///////// begin aspnetmodelView
  { path: 'aspnetmodelView/aspnetrolemaskView/:hf2/ViewaspnetrolemaskView/:hf3/:id3', 
  loadChildren: () => import('./components/aspnetrolemask-view/aspnetrolemask-view-rv-lazy.routing.module').then(m => m.AspnetrolemaskViewRvLazyRoutingModule),
  data: { vn: 'aspnetrolemaskView', va: 'v', /* sf: true,  title: 'View Role Mask', */ hf: 'hf3',  id: 'id3', dp: 3}},

{ path: 'aspnetmodelView/aspnetrolemaskView/:hf2/AddaspnetrolemaskView/:hf3', 
  loadChildren: () => import('./components/aspnetrolemask-view/aspnetrolemask-view-ra-lazy.routing.module').then(m => m.AspnetrolemaskViewRaLazyRoutingModule),
  data: { vn: 'aspnetrolemaskView', va: 'a', /* sf: true,  title: 'Add Role Mask', */ hf: 'hf3',  dp: 3}},

{ path: 'aspnetmodelView/aspnetrolemaskView/:hf2/UpdaspnetrolemaskView/:hf3/:id3', 
  loadChildren: () => import('./components/aspnetrolemask-view/aspnetrolemask-view-ru-lazy.routing.module').then(m => m.AspnetrolemaskViewRuLazyRoutingModule),
  data: { vn: 'aspnetrolemaskView', va: 'u', /* sf: true,  title: 'Update Role Mask', */ hf: 'hf3',  id: 'id3',  dp: 3}},

{ path: 'aspnetmodelView/aspnetrolemaskView/:hf2/DelaspnetrolemaskView/:hf3/:id3', 
  loadChildren: () => import('./components/aspnetrolemask-view/aspnetrolemask-view-rd-lazy.routing.module').then(m => m.AspnetrolemaskViewRdLazyRoutingModule),
  data: { vn: 'aspnetrolemaskView', va: 'd', /* sf: true,  title: 'Delete Role Mask', */ hf: 'hf3',  id: 'id3',  dp: 3}},

{ path: 'aspnetmodelView/aspnetrolemaskView/:hf2', 
  loadChildren: () => import('./components/aspnetrolemask-view/aspnetrolemask-view-rl-lazy.routing.module').then(m => m.AspnetrolemaskViewRlLazyRoutingModule),
  data: { vn: 'aspnetrolemaskView', va: 'l', ms: true,  fh: 2, mh: 10, sf: true, /*  title: 'Role Masks', */ hf: 'hf2',  dp: 2, uid: '699bb9133742491eaa9a7cdbff217beb' }  },
  { path: 'aspnetmodelView/ViewaspnetmodelView/:hf2/:id2', 
  loadChildren: () => import('./components/aspnetmodel-view/aspnetmodel-view-rv-lazy.routing.module').then(m => m.AspnetmodelViewRvLazyRoutingModule),
  data: { vn: 'aspnetmodelView', va: 'v', /* sf: true,  title: 'View Model', */ hf: 'hf2',  id: 'id2', dp: 2}},

{ path: 'aspnetmodelView/AddaspnetmodelView/:hf2', 
  loadChildren: () => import('./components/aspnetmodel-view/aspnetmodel-view-ra-lazy.routing.module').then(m => m.AspnetmodelViewRaLazyRoutingModule),
  data: { vn: 'aspnetmodelView', va: 'a', /* sf: true,  title: 'Add Model', */ hf: 'hf2',  dp: 2}},

{ path: 'aspnetmodelView/UpdaspnetmodelView/:hf2/:id2', 
  loadChildren: () => import('./components/aspnetmodel-view/aspnetmodel-view-ru-lazy.routing.module').then(m => m.AspnetmodelViewRuLazyRoutingModule),
  data: { vn: 'aspnetmodelView', va: 'u', /* sf: true,  title: 'Update Model', */ hf: 'hf2',  id: 'id2',  dp: 2}},

{ path: 'aspnetmodelView/DelaspnetmodelView/:hf2/:id2', 
  loadChildren: () => import('./components/aspnetmodel-view/aspnetmodel-view-rd-lazy.routing.module').then(m => m.AspnetmodelViewRdLazyRoutingModule),
  data: { vn: 'aspnetmodelView', va: 'd', /* sf: true,  title: 'Delete Model', */ hf: 'hf2',  id: 'id2',  dp: 2}},

{ path: 'aspnetmodelView', 
  loadChildren: () => import('./components/aspnetmodel-view/aspnetmodel-view-rl-lazy.routing.module').then(m => m.AspnetmodelViewRlLazyRoutingModule),
  data: { vn: 'aspnetmodelView', va: 'l', ms: true,  fh: 2, mh: 10, sf: true, /* title: 'Models', */  dp: 1, uid: 'e0f28c12f3694103b5562c59cea1450d' }  },
///////// end aspnetmodelView


///////// begin PhbkPhoneView 
{ path: 'PhbkPhoneView/ViewPhbkPhoneView/:hf2/:id2', 
loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-rv-lazy.routing.module').then(m => m.PhbkPhoneViewRvLazyRoutingModule),
data: { vn: 'PhbkPhoneView', va: 'v', /* sf: true,  title: 'View Phone', */ hf: 'hf2',  id: 'id2', dp: 2}},

{ path: 'PhbkPhoneView/AddPhbkPhoneView/:hf2', 
loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-ra-lazy.routing.module').then(m => m.PhbkPhoneViewRaLazyRoutingModule),
data: { vn: 'PhbkPhoneView', va: 'a', /* sf: true,  title: 'Add Phone', */ hf: 'hf2',  dp: 2}},

{ path: 'PhbkPhoneView/UpdPhbkPhoneView/:hf2/:id2', 
loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-ru-lazy.routing.module').then(m => m.PhbkPhoneViewRuLazyRoutingModule),
data: { vn: 'PhbkPhoneView', va: 'u', /* sf: true,  title: 'Update Phone', */ hf: 'hf2',  id: 'id2',  dp: 2}},

{ path: 'PhbkPhoneView/DelPhbkPhoneView/:hf2/:id2', 
loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-rd-lazy.routing.module').then(m => m.PhbkPhoneViewRdLazyRoutingModule),
data: { vn: 'PhbkPhoneView', va: 'd', /* sf: true,  title: 'Delete Phone', */ hf: 'hf2',  id: 'id2',  dp: 2}},

{ path: 'PhbkPhoneView', 
loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-rl-lazy.routing.module').then(m => m.PhbkPhoneViewRlLazyRoutingModule),
data: { vn: 'PhbkPhoneView', va: 'l', ms: true,  fh: 2, mh: 10, sf: true, /* title: 'Phones', */  dp: 1, uid: 'd4fc560b95cd4562b32023e6348f483f' }  },
///////// end PhbkPhoneView


///////// begin RDLPhbkPhoneView 
  { path: 'RDLPhbkPhoneView', 
  loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-rdl-lazy.routing.module').then(m => m.PhbkPhoneViewRdlLazyRoutingModule),
  data: { vn: 'PhbkPhoneView', va: 'l', ms: true, np: 'RDL', fh: 2, mh: 10, sf: true, /* title: 'Phones', */  dp: 1, uid: '4461cb0c88c44ebf85a0d1dda64ac695' }  },
///////// end RDLPhbkPhoneView


///////// begin PhbkEmployeeView
{ path: 'PhbkEmployeeView/PhbkPhoneView/:hf2/ViewPhbkPhoneView/:hf3/:id3', 
loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-rv-lazy.routing.module').then(m => m.PhbkPhoneViewRvLazyRoutingModule),
data: { vn: 'PhbkPhoneView', va: 'v', /* sf: true,  title: 'View Phone', */ hf: 'hf3',  id: 'id3', dp: 3}},

{ path: 'PhbkEmployeeView/PhbkPhoneView/:hf2/AddPhbkPhoneView/:hf3', 
loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-ra-lazy.routing.module').then(m => m.PhbkPhoneViewRaLazyRoutingModule),
data: { vn: 'PhbkPhoneView', va: 'a', /* sf: true,  title: 'Add Phone', */ hf: 'hf3',  dp: 3}},

{ path: 'PhbkEmployeeView/PhbkPhoneView/:hf2/UpdPhbkPhoneView/:hf3/:id3', 
loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-ru-lazy.routing.module').then(m => m.PhbkPhoneViewRuLazyRoutingModule),
data: { vn: 'PhbkPhoneView', va: 'u', /* sf: true,  title: 'Update Phone', */ hf: 'hf3',  id: 'id3',  dp: 3}},

{ path: 'PhbkEmployeeView/PhbkPhoneView/:hf2/DelPhbkPhoneView/:hf3/:id3', 
loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-rd-lazy.routing.module').then(m => m.PhbkPhoneViewRdLazyRoutingModule),
data: { vn: 'PhbkPhoneView', va: 'd', /* sf: true,  title: 'Delete Phone', */ hf: 'hf3',  id: 'id3',  dp: 3}},

{ path: 'PhbkEmployeeView/PhbkPhoneView/:hf2', 
loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-rl-lazy.routing.module').then(m => m.PhbkPhoneViewRlLazyRoutingModule),
data: { vn: 'PhbkPhoneView', va: 'l', ms: true,  fh: 2, mh: 10, sf: true, /*  title: 'Phones', */ hf: 'hf2',  dp: 2, uid: 'c6bb725da8ff45ffab01e66460552d86' }  },

{ path: 'PhbkEmployeeView/ViewPhbkEmployeeView/:hf2/:id2', 
loadChildren: () => import('./components/phbk-employee-view/phbk-employee-view-rv-lazy.routing.module').then(m => m.PhbkEmployeeViewRvLazyRoutingModule),
data: { vn: 'PhbkEmployeeView', va: 'v', /* sf: true,  title: 'View Employee', */ hf: 'hf2',  id: 'id2', dp: 2}},

{ path: 'PhbkEmployeeView/AddPhbkEmployeeView/:hf2', 
loadChildren: () => import('./components/phbk-employee-view/phbk-employee-view-ra-lazy.routing.module').then(m => m.PhbkEmployeeViewRaLazyRoutingModule),
data: { vn: 'PhbkEmployeeView', va: 'a', /* sf: true,  title: 'Add Employee', */ hf: 'hf2',  dp: 2}},

{ path: 'PhbkEmployeeView/UpdPhbkEmployeeView/:hf2/:id2', 
loadChildren: () => import('./components/phbk-employee-view/phbk-employee-view-ru-lazy.routing.module').then(m => m.PhbkEmployeeViewRuLazyRoutingModule),
data: { vn: 'PhbkEmployeeView', va: 'u', /* sf: true,  title: 'Update Employee', */ hf: 'hf2',  id: 'id2',  dp: 2}},

{ path: 'PhbkEmployeeView/DelPhbkEmployeeView/:hf2/:id2', 
loadChildren: () => import('./components/phbk-employee-view/phbk-employee-view-rd-lazy.routing.module').then(m => m.PhbkEmployeeViewRdLazyRoutingModule),
data: { vn: 'PhbkEmployeeView', va: 'd', /* sf: true,  title: 'Delete Employee', */ hf: 'hf2',  id: 'id2',  dp: 2}},

{ path: 'PhbkEmployeeView', 
loadChildren: () => import('./components/phbk-employee-view/phbk-employee-view-rl-lazy.routing.module').then(m => m.PhbkEmployeeViewRlLazyRoutingModule),
data: { vn: 'PhbkEmployeeView', va: 'l', ms: true,  fh: 2, mh: 10, sf: true, /* title: 'Employees', */  dp: 1, uid: 'cf97e4764621407d9f70482bfb556b99' }  },

///////// end PhbkEmployeeView

///////// begin RDLPhbkEmployeeView
{ path: 'RDLPhbkEmployeeView/RDLPhbkPhoneView/:hf2', 
loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-rdl-lazy.routing.module').then(m => m.PhbkPhoneViewRdlLazyRoutingModule),
data: { vn: 'PhbkPhoneView', va: 'l', ms: true, np: 'RDL', fh: 2, mh: 10, sf: true, /* title: 'Phones', */ hf: 'hf2',  dp: 2, uid: '8e481ba14e0941239c655144cac70836' }  },

{ path: 'RDLPhbkEmployeeView', 
loadChildren: () => import('./components/phbk-employee-view/phbk-employee-view-rdl-lazy.routing.module').then(m => m.PhbkEmployeeViewRdlLazyRoutingModule),
data: { vn: 'PhbkEmployeeView', va: 'l', ms: true, np: 'RDL', fh: 2, mh: 10, sf: true, /* title: 'Employees', */  dp: 1, uid: '3f65e3c719694bf5b64b49ea5a64bbce' }  },
///////// end RDLPhbkEmployeeView


///////// begin PhbkDivisionView
{ path: 'PhbkDivisionView/PhbkEmployeeView/:hf2/PhbkPhoneView/:hf3/ViewPhbkPhoneView/:hf4/:id4', 
loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-rv-lazy.routing.module').then(m => m.PhbkPhoneViewRvLazyRoutingModule),
data: { vn: 'PhbkPhoneView', va: 'v', /* sf: true,  title: 'View Phone', */ hf: 'hf4',  id: 'id4', dp: 4}},

{ path: 'PhbkDivisionView/PhbkEmployeeView/:hf2/PhbkPhoneView/:hf3/AddPhbkPhoneView/:hf4', 
loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-ra-lazy.routing.module').then(m => m.PhbkPhoneViewRaLazyRoutingModule),
data: { vn: 'PhbkPhoneView', va: 'a', /* sf: true,  title: 'Add Phone', */ hf: 'hf4',  dp: 4}},

{ path: 'PhbkDivisionView/PhbkEmployeeView/:hf2/PhbkPhoneView/:hf3/UpdPhbkPhoneView/:hf4/:id4', 
loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-ru-lazy.routing.module').then(m => m.PhbkPhoneViewRuLazyRoutingModule),
data: { vn: 'PhbkPhoneView', va: 'u', /* sf: true,  title: 'Update Phone', */ hf: 'hf4',  id: 'id4',  dp: 4}},

{ path: 'PhbkDivisionView/PhbkEmployeeView/:hf2/PhbkPhoneView/:hf3/DelPhbkPhoneView/:hf4/:id4', 
loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-rd-lazy.routing.module').then(m => m.PhbkPhoneViewRdLazyRoutingModule),
data: { vn: 'PhbkPhoneView', va: 'd', /* sf: true,  title: 'Delete Phone', */ hf: 'hf4',  id: 'id4',  dp: 4}},

{ path: 'PhbkDivisionView/PhbkEmployeeView/:hf2/PhbkPhoneView/:hf3', 
loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-rl-lazy.routing.module').then(m => m.PhbkPhoneViewRlLazyRoutingModule),
data: { vn: 'PhbkPhoneView', va: 'l', ms: true,  fh: 2, mh: 10, sf: true, /*  title: 'Phones', */ hf: 'hf3',  dp: 3, uid: 'f2235b5dbad04f5a957b861f5eef6494' }  },

{ path: 'PhbkDivisionView/PhbkEmployeeView/:hf2/ViewPhbkEmployeeView/:hf3/:id3', 
loadChildren: () => import('./components/phbk-employee-view/phbk-employee-view-rv-lazy.routing.module').then(m => m.PhbkEmployeeViewRvLazyRoutingModule),
data: { vn: 'PhbkEmployeeView', va: 'v', /* sf: true,  title: 'View Employee', */ hf: 'hf3',  id: 'id3', dp: 3}},

{ path: 'PhbkDivisionView/PhbkEmployeeView/:hf2/AddPhbkEmployeeView/:hf3', 
loadChildren: () => import('./components/phbk-employee-view/phbk-employee-view-ra-lazy.routing.module').then(m => m.PhbkEmployeeViewRaLazyRoutingModule),
data: { vn: 'PhbkEmployeeView', va: 'a', /* sf: true,  title: 'Add Employee', */ hf: 'hf3',  dp: 3}},

{ path: 'PhbkDivisionView/PhbkEmployeeView/:hf2/UpdPhbkEmployeeView/:hf3/:id3', 
loadChildren: () => import('./components/phbk-employee-view/phbk-employee-view-ru-lazy.routing.module').then(m => m.PhbkEmployeeViewRuLazyRoutingModule),
data: { vn: 'PhbkEmployeeView', va: 'u', /* sf: true,  title: 'Update Employee', */ hf: 'hf3',  id: 'id3',  dp: 3}},

{ path: 'PhbkDivisionView/PhbkEmployeeView/:hf2/DelPhbkEmployeeView/:hf3/:id3', 
loadChildren: () => import('./components/phbk-employee-view/phbk-employee-view-rd-lazy.routing.module').then(m => m.PhbkEmployeeViewRdLazyRoutingModule),
data: { vn: 'PhbkEmployeeView', va: 'd', /* sf: true,  title: 'Delete Employee', */ hf: 'hf3',  id: 'id3',  dp: 3}},

{ path: 'PhbkDivisionView/PhbkEmployeeView/:hf2', 
loadChildren: () => import('./components/phbk-employee-view/phbk-employee-view-rl-lazy.routing.module').then(m => m.PhbkEmployeeViewRlLazyRoutingModule),
data: { vn: 'PhbkEmployeeView', va: 'l', ms: true,  fh: 2, mh: 10, sf: true, /*  title: 'Employees', */ hf: 'hf2',  dp: 2, uid: '7a4c89da737e44b68a89c33ed008fb52' }  },

{ path: 'PhbkDivisionView/ViewPhbkDivisionView/:hf2/:id2', 
loadChildren: () => import('./components/phbk-division-view/phbk-division-view-rv-lazy.routing.module').then(m => m.PhbkDivisionViewRvLazyRoutingModule),
data: { vn: 'PhbkDivisionView', va: 'v', /* sf: true,  title: 'View Division', */ hf: 'hf2',  id: 'id2', dp: 2}},

{ path: 'PhbkDivisionView/AddPhbkDivisionView/:hf2', 
loadChildren: () => import('./components/phbk-division-view/phbk-division-view-ra-lazy.routing.module').then(m => m.PhbkDivisionViewRaLazyRoutingModule),
data: { vn: 'PhbkDivisionView', va: 'a', /* sf: true,  title: 'Add Division', */ hf: 'hf2',  dp: 2}},

{ path: 'PhbkDivisionView/UpdPhbkDivisionView/:hf2/:id2', 
loadChildren: () => import('./components/phbk-division-view/phbk-division-view-ru-lazy.routing.module').then(m => m.PhbkDivisionViewRuLazyRoutingModule),
data: { vn: 'PhbkDivisionView', va: 'u', /* sf: true,  title: 'Update Division', */ hf: 'hf2',  id: 'id2',  dp: 2}},

{ path: 'PhbkDivisionView/DelPhbkDivisionView/:hf2/:id2', 
loadChildren: () => import('./components/phbk-division-view/phbk-division-view-rd-lazy.routing.module').then(m => m.PhbkDivisionViewRdLazyRoutingModule),
data: { vn: 'PhbkDivisionView', va: 'd', /* sf: true,  title: 'Delete Division', */ hf: 'hf2',  id: 'id2',  dp: 2}},

{ path: 'PhbkDivisionView', 
loadChildren: () => import('./components/phbk-division-view/phbk-division-view-rl-lazy.routing.module').then(m => m.PhbkDivisionViewRlLazyRoutingModule),
data: { vn: 'PhbkDivisionView', va: 'l', ms: true,  fh: 2, mh: 10, sf: true, /* title: 'Divisions', */  dp: 1, uid: '528494227e764e6991bf2e7efa9c57be' }  },

///////// end PhbkDivisionView 

///////// begin RDLPhbkDivisionView 
{ path: 'RDLPhbkDivisionView/RDLPhbkEmployeeView/:hf2/RDLPhbkPhoneView/:hf3', 
loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-rdl-lazy.routing.module').then(m => m.PhbkPhoneViewRdlLazyRoutingModule),
data: { vn: 'PhbkPhoneView', va: 'l', ms: true, np: 'RDL', fh: 2, mh: 10, sf: true, /* title: 'Phones', */ hf: 'hf3',  dp: 3, uid: '6c57f10cef8b4c6b9dc46b40d76a5fce' }  },

{ path: 'RDLPhbkDivisionView/RDLPhbkEmployeeView/:hf2', 
loadChildren: () => import('./components/phbk-employee-view/phbk-employee-view-rdl-lazy.routing.module').then(m => m.PhbkEmployeeViewRdlLazyRoutingModule),
data: { vn: 'PhbkEmployeeView', va: 'l', ms: true, np: 'RDL', fh: 2, mh: 10, sf: true, /* title: 'Employees', */ hf: 'hf2',  dp: 2, uid: 'd9734d13501e4f989b6c2742afc02d80' }  },

{ path: 'RDLPhbkDivisionView', 
loadChildren: () => import('./components/phbk-division-view/phbk-division-view-rdl-lazy.routing.module').then(m => m.PhbkDivisionViewRdlLazyRoutingModule),
data: { vn: 'PhbkDivisionView', va: 'l', ms: true, np: 'RDL', fh: 2, mh: 10, sf: true, /* title: 'Divisions', */  dp: 1, uid: '90b6193f8b0b4819a0ba15324094bda0' }  },

///////// end RDLPhbkDivisionView 

///////// begin PhbkEnterpriseView  
{ path: 'PhbkEnterpriseView/PhbkDivisionView/:hf2/PhbkEmployeeView/:hf3/PhbkPhoneView/:hf4/ViewPhbkPhoneView/:hf5/:id5', 
loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-rv-lazy.routing.module').then(m => m.PhbkPhoneViewRvLazyRoutingModule),
data: { vn: 'PhbkPhoneView', va: 'v', /* sf: true,  title: 'View Phone', */ hf: 'hf5',  id: 'id5', dp: 5}},

{ path: 'PhbkEnterpriseView/PhbkDivisionView/:hf2/PhbkEmployeeView/:hf3/PhbkPhoneView/:hf4/AddPhbkPhoneView/:hf5', 
loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-ra-lazy.routing.module').then(m => m.PhbkPhoneViewRaLazyRoutingModule),
data: { vn: 'PhbkPhoneView', va: 'a', /* sf: true,  title: 'Add Phone', */ hf: 'hf5',  dp: 5}},

{ path: 'PhbkEnterpriseView/PhbkDivisionView/:hf2/PhbkEmployeeView/:hf3/PhbkPhoneView/:hf4/UpdPhbkPhoneView/:hf5/:id5', 
loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-ru-lazy.routing.module').then(m => m.PhbkPhoneViewRuLazyRoutingModule),
data: { vn: 'PhbkPhoneView', va: 'u', /* sf: true,  title: 'Update Phone', */ hf: 'hf5',  id: 'id5',  dp: 5}},

{ path: 'PhbkEnterpriseView/PhbkDivisionView/:hf2/PhbkEmployeeView/:hf3/PhbkPhoneView/:hf4/DelPhbkPhoneView/:hf5/:id5', 
loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-rd-lazy.routing.module').then(m => m.PhbkPhoneViewRdLazyRoutingModule),
data: { vn: 'PhbkPhoneView', va: 'd', /* sf: true,  title: 'Delete Phone', */ hf: 'hf5',  id: 'id5',  dp: 5}},

{ path: 'PhbkEnterpriseView/PhbkDivisionView/:hf2/PhbkEmployeeView/:hf3/PhbkPhoneView/:hf4', 
loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-rl-lazy.routing.module').then(m => m.PhbkPhoneViewRlLazyRoutingModule),
data: { vn: 'PhbkPhoneView', va: 'l', ms: true,  fh: 2, mh: 10, sf: true, /*  title: 'Phones', */ hf: 'hf4',  dp: 4, uid: '8f7052bddce3438f82a7b1e15b16e691' }  },

{ path: 'PhbkEnterpriseView/PhbkDivisionView/:hf2/PhbkEmployeeView/:hf3/ViewPhbkEmployeeView/:hf4/:id4', 
loadChildren: () => import('./components/phbk-employee-view/phbk-employee-view-rv-lazy.routing.module').then(m => m.PhbkEmployeeViewRvLazyRoutingModule),
data: { vn: 'PhbkEmployeeView', va: 'v', /* sf: true,  title: 'View Employee', */ hf: 'hf4',  id: 'id4', dp: 4}},

{ path: 'PhbkEnterpriseView/PhbkDivisionView/:hf2/PhbkEmployeeView/:hf3/AddPhbkEmployeeView/:hf4', 
loadChildren: () => import('./components/phbk-employee-view/phbk-employee-view-ra-lazy.routing.module').then(m => m.PhbkEmployeeViewRaLazyRoutingModule),
data: { vn: 'PhbkEmployeeView', va: 'a', /* sf: true,  title: 'Add Employee', */ hf: 'hf4',  dp: 4}},

{ path: 'PhbkEnterpriseView/PhbkDivisionView/:hf2/PhbkEmployeeView/:hf3/UpdPhbkEmployeeView/:hf4/:id4', 
loadChildren: () => import('./components/phbk-employee-view/phbk-employee-view-ru-lazy.routing.module').then(m => m.PhbkEmployeeViewRuLazyRoutingModule),
data: { vn: 'PhbkEmployeeView', va: 'u', /* sf: true,  title: 'Update Employee', */ hf: 'hf4',  id: 'id4',  dp: 4}},

{ path: 'PhbkEnterpriseView/PhbkDivisionView/:hf2/PhbkEmployeeView/:hf3/DelPhbkEmployeeView/:hf4/:id4', 
loadChildren: () => import('./components/phbk-employee-view/phbk-employee-view-rd-lazy.routing.module').then(m => m.PhbkEmployeeViewRdLazyRoutingModule),
data: { vn: 'PhbkEmployeeView', va: 'd', /* sf: true,  title: 'Delete Employee', */ hf: 'hf4',  id: 'id4',  dp: 4}},

{ path: 'PhbkEnterpriseView/PhbkDivisionView/:hf2/PhbkEmployeeView/:hf3', 
loadChildren: () => import('./components/phbk-employee-view/phbk-employee-view-rl-lazy.routing.module').then(m => m.PhbkEmployeeViewRlLazyRoutingModule),
data: { vn: 'PhbkEmployeeView', va: 'l', ms: true,  fh: 2, mh: 10, sf: true, /*  title: 'Employees', */ hf: 'hf3',  dp: 3, uid: '91f97c5e0db74052b832ca1b284e7bd9' }  },

{ path: 'PhbkEnterpriseView/PhbkDivisionView/:hf2/ViewPhbkDivisionView/:hf3/:id3', 
loadChildren: () => import('./components/phbk-division-view/phbk-division-view-rv-lazy.routing.module').then(m => m.PhbkDivisionViewRvLazyRoutingModule),
data: { vn: 'PhbkDivisionView', va: 'v', /* sf: true,  title: 'View Division', */ hf: 'hf3',  id: 'id3', dp: 3}},

{ path: 'PhbkEnterpriseView/PhbkDivisionView/:hf2/AddPhbkDivisionView/:hf3', 
loadChildren: () => import('./components/phbk-division-view/phbk-division-view-ra-lazy.routing.module').then(m => m.PhbkDivisionViewRaLazyRoutingModule),
data: { vn: 'PhbkDivisionView', va: 'a', /* sf: true,  title: 'Add Division', */ hf: 'hf3',  dp: 3}},

{ path: 'PhbkEnterpriseView/PhbkDivisionView/:hf2/UpdPhbkDivisionView/:hf3/:id3', 
loadChildren: () => import('./components/phbk-division-view/phbk-division-view-ru-lazy.routing.module').then(m => m.PhbkDivisionViewRuLazyRoutingModule),
data: { vn: 'PhbkDivisionView', va: 'u', /* sf: true,  title: 'Update Division', */ hf: 'hf3',  id: 'id3',  dp: 3}},

{ path: 'PhbkEnterpriseView/PhbkDivisionView/:hf2/DelPhbkDivisionView/:hf3/:id3', 
loadChildren: () => import('./components/phbk-division-view/phbk-division-view-rd-lazy.routing.module').then(m => m.PhbkDivisionViewRdLazyRoutingModule),
data: { vn: 'PhbkDivisionView', va: 'd', /* sf: true,  title: 'Delete Division', */ hf: 'hf3',  id: 'id3',  dp: 3}},

{ path: 'PhbkEnterpriseView/PhbkDivisionView/:hf2', 
loadChildren: () => import('./components/phbk-division-view/phbk-division-view-rl-lazy.routing.module').then(m => m.PhbkDivisionViewRlLazyRoutingModule),
data: { vn: 'PhbkDivisionView', va: 'l', ms: true,  fh: 2, mh: 10, sf: true, /*  title: 'Divisions', */ hf: 'hf2',  dp: 2, uid: 'e53a8c43ac9448408ea1a989bc18956d' }  },

{ path: 'PhbkEnterpriseView/ViewPhbkEnterpriseView/:hf2/:id2', 
loadChildren: () => import('./components/phbk-enterprise-view/phbk-enterprise-view-rv-lazy.routing.module').then(m => m.PhbkEnterpriseViewRvLazyRoutingModule),
data: { vn: 'PhbkEnterpriseView', va: 'v', /* sf: true,  title: 'View Enterprise', */ hf: 'hf2',  id: 'id2', dp: 2}},

{ path: 'PhbkEnterpriseView/AddPhbkEnterpriseView/:hf2', 
loadChildren: () => import('./components/phbk-enterprise-view/phbk-enterprise-view-ra-lazy.routing.module').then(m => m.PhbkEnterpriseViewRaLazyRoutingModule),
data: { vn: 'PhbkEnterpriseView', va: 'a', /* sf: true,  title: 'Add Enterprise', */ hf: 'hf2',  dp: 2}},

{ path: 'PhbkEnterpriseView/UpdPhbkEnterpriseView/:hf2/:id2', 
loadChildren: () => import('./components/phbk-enterprise-view/phbk-enterprise-view-ru-lazy.routing.module').then(m => m.PhbkEnterpriseViewRuLazyRoutingModule),
data: { vn: 'PhbkEnterpriseView', va: 'u', /* sf: true,  title: 'Update Enterprise', */ hf: 'hf2',  id: 'id2',  dp: 2}},

{ path: 'PhbkEnterpriseView/DelPhbkEnterpriseView/:hf2/:id2', 
loadChildren: () => import('./components/phbk-enterprise-view/phbk-enterprise-view-rd-lazy.routing.module').then(m => m.PhbkEnterpriseViewRdLazyRoutingModule),
data: { vn: 'PhbkEnterpriseView', va: 'd', /* sf: true,  title: 'Delete Enterprise', */ hf: 'hf2',  id: 'id2',  dp: 2}},

{ path: 'PhbkEnterpriseView', 
loadChildren: () => import('./components/phbk-enterprise-view/phbk-enterprise-view-rl-lazy.routing.module').then(m => m.PhbkEnterpriseViewRlLazyRoutingModule),
data: { vn: 'PhbkEnterpriseView', va: 'l', ms: true,  fh: 2, mh: 10, sf: true, /* title: 'Enterprises', */  dp: 1, uid: 'cd1cf229ebd84ed8990e1e033703ee4c' }  },

///////// end PhbkEnterpriseView

///////// begin RDLPhbkEnterpriseView
{ path: 'RDLPhbkEnterpriseView/RDLPhbkDivisionView/:hf2/RDLPhbkEmployeeView/:hf3/RDLPhbkPhoneView/:hf4', 
loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-rdl-lazy.routing.module').then(m => m.PhbkPhoneViewRdlLazyRoutingModule),
data: { vn: 'PhbkPhoneView', va: 'l', ms: true, np: 'RDL', fh: 2, mh: 10, sf: true, /* title: 'Phones', */ hf: 'hf4',  dp: 4, uid: '3fd98026b0fd4f3b811fa5f5d8b4b80b' }  },
{ path: 'RDLPhbkEnterpriseView/RDLPhbkDivisionView/:hf2/RDLPhbkEmployeeView/:hf3', 
loadChildren: () => import('./components/phbk-employee-view/phbk-employee-view-rdl-lazy.routing.module').then(m => m.PhbkEmployeeViewRdlLazyRoutingModule),
data: { vn: 'PhbkEmployeeView', va: 'l', ms: true, np: 'RDL', fh: 2, mh: 10, sf: true, /* title: 'Employees', */ hf: 'hf3',  dp: 3, uid: 'ea4590c632c2445cb8d24bca98217a6b' }  },
{ path: 'RDLPhbkEnterpriseView/RDLPhbkDivisionView/:hf2', 
loadChildren: () => import('./components/phbk-division-view/phbk-division-view-rdl-lazy.routing.module').then(m => m.PhbkDivisionViewRdlLazyRoutingModule),
data: { vn: 'PhbkDivisionView', va: 'l', ms: true, np: 'RDL', fh: 2, mh: 10, sf: true, /* title: 'Divisions', */ hf: 'hf2',  dp: 2, uid: 'add1e74f7d354462a1b5f34a441bae86' }  },
{ path: 'RDLPhbkEnterpriseView', 
loadChildren: () => import('./components/phbk-enterprise-view/phbk-enterprise-view-rdl-lazy.routing.module').then(m => m.PhbkEnterpriseViewRdlLazyRoutingModule),
data: { vn: 'PhbkEnterpriseView', va: 'l', ms: true, np: 'RDL', fh: 2, mh: 10, sf: true, /* title: 'Enterprises', */  dp: 1, uid: '9f540e3cf293444baaf470261b486af2' }  },
///////// end RDLPhbkEnterpriseView

///////// begin SimpleDictionary
{  path: 'simpledictionary', loadChildren: () => import('./featues/simple-dictionaries/simple-dictionary.ftr.lazy.routing.module').then(m => m.SimpleDictionaryFtrLazyRoutingModule), 
data: { vn: 'SimpleDictionaryFtrComponent', va: 'l'} }, 
///////// end SimpleDictionary

///////// begin PhbkPhoneTypeView

  { path: 'PhbkPhoneTypeView/PhbkPhoneView/:hf2/ViewPhbkPhoneView/:hf3/:id3', 
  loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-rv-lazy.routing.module').then(m => m.PhbkPhoneViewRvLazyRoutingModule),
  data: { vn: 'PhbkPhoneView', va: 'v', /* sf: true,  title: 'View Phone', */ hf: 'hf3',  id: 'id3', dp: 3}},

{ path: 'PhbkPhoneTypeView/PhbkPhoneView/:hf2/AddPhbkPhoneView/:hf3', 
  loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-ra-lazy.routing.module').then(m => m.PhbkPhoneViewRaLazyRoutingModule),
  data: { vn: 'PhbkPhoneView', va: 'a', /* sf: true,  title: 'Add Phone', */ hf: 'hf3',  dp: 3}},

{ path: 'PhbkPhoneTypeView/PhbkPhoneView/:hf2/UpdPhbkPhoneView/:hf3/:id3', 
  loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-ru-lazy.routing.module').then(m => m.PhbkPhoneViewRuLazyRoutingModule),
  data: { vn: 'PhbkPhoneView', va: 'u', /* sf: true,  title: 'Update Phone', */ hf: 'hf3',  id: 'id3',  dp: 3}},

{ path: 'PhbkPhoneTypeView/PhbkPhoneView/:hf2/DelPhbkPhoneView/:hf3/:id3', 
  loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-rd-lazy.routing.module').then(m => m.PhbkPhoneViewRdLazyRoutingModule),
  data: { vn: 'PhbkPhoneView', va: 'd', /* sf: true,  title: 'Delete Phone', */ hf: 'hf3',  id: 'id3',  dp: 3}},

{ path: 'PhbkPhoneTypeView/PhbkPhoneView/:hf2', 
  loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-rl-lazy.routing.module').then(m => m.PhbkPhoneViewRlLazyRoutingModule),
  data: { vn: 'PhbkPhoneView', va: 'l', ms: true,  fh: 2, mh: 10, sf: true, /*  title: 'Phones', */ hf: 'hf2',  dp: 2, uid: '8bb20c861a78450d8ef0ff988354271d' }  },


{ path: 'PhbkPhoneTypeView/ViewPhbkPhoneTypeView/:hf2/:id2', 
  loadChildren: () => import('./components/phbk-phone-type-view/phbk-phone-type-view-rv-lazy.routing.module').then(m => m.PhbkPhoneTypeViewRvLazyRoutingModule),
  data: { vn: 'PhbkPhoneTypeView', va: 'v', /* sf: true,  title: 'View Phone Type', */ hf: 'hf2',  id: 'id2', dp: 2}},

{ path: 'PhbkPhoneTypeView/AddPhbkPhoneTypeView/:hf2', 
  loadChildren: () => import('./components/phbk-phone-type-view/phbk-phone-type-view-ra-lazy.routing.module').then(m => m.PhbkPhoneTypeViewRaLazyRoutingModule),
  data: { vn: 'PhbkPhoneTypeView', va: 'a', /* sf: true,  title: 'Add Phone Type', */ hf: 'hf2',  dp: 2}},

{ path: 'PhbkPhoneTypeView/UpdPhbkPhoneTypeView/:hf2/:id2', 
  loadChildren: () => import('./components/phbk-phone-type-view/phbk-phone-type-view-ru-lazy.routing.module').then(m => m.PhbkPhoneTypeViewRuLazyRoutingModule),
  data: { vn: 'PhbkPhoneTypeView', va: 'u', /* sf: true,  title: 'Update Phone Type', */ hf: 'hf2',  id: 'id2',  dp: 2}},

{ path: 'PhbkPhoneTypeView/DelPhbkPhoneTypeView/:hf2/:id2', 
  loadChildren: () => import('./components/phbk-phone-type-view/phbk-phone-type-view-rd-lazy.routing.module').then(m => m.PhbkPhoneTypeViewRdLazyRoutingModule),
  data: { vn: 'PhbkPhoneTypeView', va: 'd', /* sf: true,  title: 'Delete Phone Type', */ hf: 'hf2',  id: 'id2',  dp: 2}},

{ path: 'PhbkPhoneTypeView', 
  loadChildren: () => import('./components/phbk-phone-type-view/phbk-phone-type-view-rl-lazy.routing.module').then(m => m.PhbkPhoneTypeViewRlLazyRoutingModule),
  data: { vn: 'PhbkPhoneTypeView', va: 'l', ms: true,  fh: 2, mh: 10, sf: true, /* title: 'Phone Types', */  dp: 1, uid: '75da8b3003b845aa90781abb6e68c4eb' }  },

///////// end PhbkPhoneTypeView

///////// begin RDLPhbkPhoneTypeView

{ path: 'RDLPhbkPhoneTypeView/RDLPhbkPhoneView/:hf2', 
loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-rdl-lazy.routing.module').then(m => m.PhbkPhoneViewRdlLazyRoutingModule),
data: { vn: 'PhbkPhoneView', va: 'l', ms: true, np: 'RDL', fh: 2, mh: 10, sf: true, /* title: 'Phones', */ hf: 'hf2',  dp: 2, uid: '35e365c388ad41c9be618b3d938b3350' }  },

{ path: 'RDLPhbkPhoneTypeView', 
loadChildren: () => import('./components/phbk-phone-type-view/phbk-phone-type-view-rdl-lazy.routing.module').then(m => m.PhbkPhoneTypeViewRdlLazyRoutingModule),
data: { vn: 'PhbkPhoneTypeView', va: 'l', ms: true, np: 'RDL', fh: 2, mh: 10, sf: true, /* title: 'Phone Types', */  dp: 1, uid: 'b6bb5d442a5d40eea326ce8f2b040323' }  },

///////// end RDLPhbkPhoneTypeView


  { path: 'authentication', loadChildren: () => import('./shared/modules/app-glbl-security.module').then(m => m.AppGlblSecurityModule) },  

  { path: 'home', component: AppGlblHomeComponent }, 
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, 
//  { path: '**', component: AppGlblHomeComponent },
  { path: '**', component: AppGlblPagenotfoundComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

