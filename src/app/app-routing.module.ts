
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


///////// begin RDLPhbkPhoneView 
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
///////// end RDLPhbkPhoneView


///////// begin RDLPhbkPhoneView 
  { path: 'RDLPhbkPhoneView', 
  loadChildren: () => import('./components/phbk-phone-view/phbk-phone-view-rdl-lazy.routing.module').then(m => m.PhbkPhoneViewRdlLazyRoutingModule),
  data: { vn: 'PhbkPhoneView', va: 'l', ms: true, np: 'RDL', fh: 2, mh: 10, sf: true, /* title: 'Phones', */  dp: 1, uid: '4461cb0c88c44ebf85a0d1dda64ac695' }  },
///////// end RDLPhbkPhoneView


///////// begin RDLPhbkEmployeeView
{ path: 'RDLPhbkEmployeeView', 
loadChildren: () => import('./components/phbk-employee-view/phbk-employee-view-rdl-lazy.routing.module').then(m => m.PhbkEmployeeViewRdlLazyRoutingModule),
data: { vn: 'PhbkEmployeeView', va: 'l', ms: true, np: 'RDL', fh: 2, mh: 10, sf: true, /* title: 'Employees', */  dp: 1, uid: 'e529eea06b1c4c6b91f88ba5d0b7cf53' }  },
///////// end RDLPhbkEmployeeView


///////// begin PhbkEmployeeView
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
data: { vn: 'PhbkEmployeeView', va: 'l', ms: true,  fh: 2, mh: 10, sf: true, /* title: 'Employees', */  dp: 1, uid: 'f15d0dbec9a3468d9e3cd747f3175b70' }  },
///////// end PhbkEmployeeView

///////// begin PhbkDivisionView
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
data: { vn: 'PhbkEmployeeView', va: 'l', ms: true,  fh: 2, mh: 10, sf: true, /*  title: 'Employees', */ hf: 'hf2',  dp: 2, uid: '70a05ca4a15c41d8a83a480724dbc56b' }  },


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
data: { vn: 'PhbkDivisionView', va: 'l', ms: true,  fh: 2, mh: 10, sf: true, /* title: 'Divisions', */  dp: 1, uid: '1e3dc105fc474f64ad8404e4f34b773d' }  },

///////// end PhbkDivisionView 

///////// begin RDLPhbkDivisionView 
{ path: 'RDLPhbkDivisionView/RDLPhbkEmployeeView/:hf2', 
loadChildren: () => import('./components/phbk-employee-view/phbk-employee-view-rdl-lazy.routing.module').then(m => m.PhbkEmployeeViewRdlLazyRoutingModule),
data: { vn: 'PhbkEmployeeView', va: 'l', ms: true, np: 'RDL', fh: 2, mh: 10, sf: true, /* title: 'Employees', */ hf: 'hf2',  dp: 2, uid: 'ff532edf5a774302a6e32f0c883f85aa' }  },

{ path: 'RDLPhbkDivisionView', 
loadChildren: () => import('./components/phbk-division-view/phbk-division-view-rdl-lazy.routing.module').then(m => m.PhbkDivisionViewRdlLazyRoutingModule),
data: { vn: 'PhbkDivisionView', va: 'l', ms: true, np: 'RDL', fh: 2, mh: 10, sf: true, /* title: 'Divisions', */  dp: 1, uid: '8326666dc11e4bf5a95a662d6fc7f86d' }  },

///////// end RDLPhbkDivisionView 

///////// begin PhbkEnterpriseView  
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
data: { vn: 'PhbkEmployeeView', va: 'l', ms: true,  fh: 2, mh: 10, sf: true, /*  title: 'Employees', */ hf: 'hf3',  dp: 3, uid: 'f0a62bb0c36944fc872f40ee4a5f73ec' }  },


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
data: { vn: 'PhbkDivisionView', va: 'l', ms: true,  fh: 2, mh: 10, sf: true, /*  title: 'Divisions', */ hf: 'hf2',  dp: 2, uid: '8a5e86eacdb043aeb3e7f7046b7b23bf' }  },


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
data: { vn: 'PhbkEnterpriseView', va: 'l', ms: true,  fh: 2, mh: 10, sf: true, /* title: 'Enterprises', */  dp: 1, uid: 'fe3a332c4dcd4416b5bc58f7fa611095' }  },

///////// end PhbkEnterpriseView

///////// begin RDLPhbkEnterpriseView
{ path: 'RDLPhbkEnterpriseView/RDLPhbkDivisionView/:hf2/RDLPhbkEmployeeView/:hf3', 
loadChildren: () => import('./components/phbk-employee-view/phbk-employee-view-rdl-lazy.routing.module').then(m => m.PhbkEmployeeViewRdlLazyRoutingModule),
data: { vn: 'PhbkEmployeeView', va: 'l', ms: true, np: 'RDL', fh: 2, mh: 10, sf: true, /* title: 'Employees', */ hf: 'hf3',  dp: 3, uid: '9e09262de19642789c55868640761de7' }  },

{ path: 'RDLPhbkEnterpriseView/RDLPhbkDivisionView/:hf2', 
loadChildren: () => import('./components/phbk-division-view/phbk-division-view-rdl-lazy.routing.module').then(m => m.PhbkDivisionViewRdlLazyRoutingModule),
data: { vn: 'PhbkDivisionView', va: 'l', ms: true, np: 'RDL', fh: 2, mh: 10, sf: true, /* title: 'Divisions', */ hf: 'hf2',  dp: 2, uid: '6eae6b8219e341aaa7c8e512b52db3f8' }  },

{ path: 'RDLPhbkEnterpriseView', 
loadChildren: () => import('./components/phbk-enterprise-view/phbk-enterprise-view-rdl-lazy.routing.module').then(m => m.PhbkEnterpriseViewRdlLazyRoutingModule),
data: { vn: 'PhbkEnterpriseView', va: 'l', ms: true, np: 'RDL', fh: 2, mh: 10, sf: true, /* title: 'Enterprises', */  dp: 1, uid: 'adb6a7f659c943c38ba150c4a8247cdb' }  },
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

