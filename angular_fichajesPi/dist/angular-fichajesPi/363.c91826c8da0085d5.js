"use strict";(self.webpackChunkangular_fichajesPi=self.webpackChunkangular_fichajesPi||[]).push([[363],{5363:(K,v,r)=>{r.r(v),r.d(v,{HomeModule:()=>X});var m=r(8870),u=r(1207),l=r(1659);class f{constructor(i){this.password=i}}var e=r(9215),d=r(6610),p=r(5410),c=r(6603),g=r(8110),Z=r(1307);function T(n,i){1&n&&(e.TgZ(0,"div"),e._uU(1," El campo es obligatorio. "),e.qZA())}function A(n,i){1&n&&(e.TgZ(0,"div"),e._uU(1," La contrase\xf1a debe contener al menos 6 caracteres con may\xfasculas, min\xfasculas y n\xfameros. "),e.qZA())}function b(n,i){if(1&n&&(e.TgZ(0,"div",20),e.YNc(1,T,2,0,"div",21),e.YNc(2,A,2,0,"div",21),e.qZA()),2&n){e.oxw();const o=e.MAs(14);e.xp6(1),e.Q6J("ngIf",null==o.errors?null:o.errors.required),e.xp6(1),e.Q6J("ngIf",null==o.errors?null:o.errors.pattern)}}function C(n,i){1&n&&(e.TgZ(0,"div"),e._uU(1," El campo es obligatorio. "),e.qZA())}function U(n,i){1&n&&(e.TgZ(0,"div"),e._uU(1," La contrase\xf1a debe contener al menos 6 caracteres con may\xfasculas, min\xfasculas y n\xfameros. "),e.qZA())}function q(n,i){if(1&n&&(e.TgZ(0,"div",20),e.YNc(1,C,2,0,"div",21),e.YNc(2,U,2,0,"div",21),e.qZA()),2&n){e.oxw();const o=e.MAs(14);e.xp6(1),e.Q6J("ngIf",null==o.errors?null:o.errors.required),e.xp6(1),e.Q6J("ngIf",null==o.errors?null:o.errors.pattern)}}let _=(()=>{class n{constructor(o,t,s){this.service=o,this.tokenService=t,this.router=s,this.pass1="",this.pass2=""}ngOnInit(){}submit(){this.checkPasswords()&&this.service.changePassword(this.tokenService.getId(),new f(this.pass1)).subscribe(o=>{console.log(o),l.G.toastSucess("","Password cambiado"),this.router.navigate(["intranet/home"])},o=>{l.G.toastDanger("Ocurri\xf3 un error",o.message),console.log(o)})}checkPasswords(){return this.pass1===this.pass2||(l.G.toastDanger("","Las contrase\xf1as no coinciden"),!1)}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(d.J),e.Y36(p.B),e.Y36(u.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-cuenta"]],decls:31,vars:5,consts:[[1,"bg-light","pb-3","rounded","mt-4","mx-4"],[1,"text-center","selected","bg-waves","rounded","p-3"],["novalidate","",1,"mt-4",3,"ngSubmit"],["f","ngForm"],[1,"w-75","mx-auto","row","justify-content-between"],[1,"col-12","d-flex","align-items-end","justify-content-end","mb-3"],[1,"form-group","w-100"],["for","pass1"],[1,"bi","bi-key"],[1,"input-group"],["type","password","name","pass1","id","pass1","required","","pattern","^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{6,}$",1,"form-control",3,"ngModel","ngModelChange"],["d","ngModel"],["class","alert-danger my-3 p-2 rounded",4,"ngIf"],["for","pass2"],[1,"bi","bi-key-fill"],["type","password","name","pass2","id","pass2","required","","pattern","^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{6,}$",1,"form-control",3,"ngModel","ngModelChange"],[1,"m-4","row","justify-content-center"],[1,"col-12","col-sm-6","col-md-4","col-lg-3","col-xl-2","d-flex","align-items-end","justify-content-end","mb-3"],[1,"w-100",3,"valid"],["routerLink","/intranet/home",1,"w-100"],[1,"alert-danger","my-3","p-2","rounded"],[4,"ngIf"]],template:function(o,t){if(1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"h3",1),e._uU(2,"Cambiar Password"),e.qZA(),e.TgZ(3,"form",2,3),e.NdJ("ngSubmit",function(){return t.submit()}),e.TgZ(5,"div",4),e.TgZ(6,"div",5),e.TgZ(7,"div",6),e.TgZ(8,"label",7),e.TgZ(9,"b"),e._UZ(10,"i",8),e._uU(11,"Password"),e.qZA(),e.qZA(),e.TgZ(12,"div",9),e.TgZ(13,"input",10,11),e.NdJ("ngModelChange",function(a){return t.pass1=a}),e.qZA(),e.qZA(),e.YNc(15,b,3,2,"div",12),e.qZA(),e.qZA(),e.TgZ(16,"div",5),e.TgZ(17,"div",6),e.TgZ(18,"label",13),e.TgZ(19,"b"),e._UZ(20,"i",14),e._uU(21,"Confirmar Password"),e.qZA(),e.qZA(),e.TgZ(22,"div",9),e.TgZ(23,"input",15,11),e.NdJ("ngModelChange",function(a){return t.pass2=a}),e.qZA(),e.qZA(),e.YNc(25,q,3,2,"div",12),e.qZA(),e.qZA(),e.qZA(),e.TgZ(26,"div",16),e.TgZ(27,"div",17),e._UZ(28,"app-boton-guardar",18),e.qZA(),e.TgZ(29,"div",17),e._UZ(30,"app-boton-volver",19),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o){const s=e.MAs(4),a=e.MAs(14);e.xp6(13),e.Q6J("ngModel",t.pass1),e.xp6(2),e.Q6J("ngIf",a.invalid&&(a.dirty||a.touched)),e.xp6(8),e.Q6J("ngModel",t.pass2),e.xp6(2),e.Q6J("ngIf",a.invalid&&(a.dirty||a.touched)),e.xp6(3),e.Q6J("valid",s.valid)}},directives:[c._Y,c.JL,c.F,c.Fj,c.Q7,c.c5,c.JJ,c.On,m.O5,g.Q,Z.w,u.rH],styles:[""]}),n})();var y=r(1732);let M=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-fichajes-user"]],decls:1,vars:0,template:function(o,t){1&o&&e._UZ(0,"app-fichajes-lista")},directives:[y.m],styles:[""]}),n})();var F=r(860),x=r(4537),w=r(6659);let h=(()=>{class n{constructor(o){this.httpClient=o,this.endPoint=x.N.apiURL+"/fichaje"}now(o){return this.httpClient.post(this.endPoint+"/now",o)}}return n.\u0275fac=function(o){return new(o||n)(e.LFG(w.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function N(n,i){1&n&&(e.TgZ(0,"div",5),e.TgZ(1,"b"),e._uU(2,"Estado: "),e.qZA(),e._uU(3,"Trabajando"),e.qZA())}function J(n,i){1&n&&(e.TgZ(0,"div",5),e.TgZ(1,"b"),e._uU(2,"Estado: "),e.qZA(),e._uU(3,"Fuera del trabajo"),e.qZA())}let j=(()=>{class n{constructor(o,t,s){this.service=o,this.empleadoService=t,this.router=s,this.model=new F.a("","","","",null,null,null,null,null,""),this.dto={diaDesde:"",diaHasta:"",horaDesde:"",horaHasta:"",hora:"",dia:"",origen:"web",tipo:"",numeroUsuario:"",nombreUsuario:""}}ngOnInit(){this.loadData()}loadData(){this.empleadoService.getMyUsuario().subscribe(o=>{this.model=o,this.dto.numeroUsuario=o.numero},o=>{l.G.toastDanger("Ocurri\xf3 un error",o.message),console.log(o)})}fichar(){this.service.now(this.dto).subscribe(o=>{l.G.toastSucess("","Fichaje realizado"),this.loadData()},o=>{l.G.toastDanger("Ocurri\xf3 un error",o.message),console.log(o)})}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(h),e.Y36(d.J),e.Y36(u.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],decls:23,vars:6,consts:[[1,"d-flex","flex-column","justify-content-center","align-items-center","mt-4"],["src","../../assets/images/fichajespi_logo_mano.svg","alt","","height","200",1,""],[1,"btn","bg-pink","text-white","px-5","py-3","m-5","shadow","fs-5","fw-bold",3,"click"],[1,"bi","bi-watch","feather"],[1,"bg-light","rounded","p-4"],[1,"text-center","my-3"],["class","text-center my-3",4,"ngIf"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.TgZ(2,"button",2),e.NdJ("click",function(){return t.fichar()}),e._UZ(3,"i",3),e._uU(4," Fichar"),e.qZA(),e.TgZ(5,"div",4),e.TgZ(6,"div",5),e.TgZ(7,"b"),e._uU(8),e.qZA(),e.qZA(),e.TgZ(9,"div",5),e.TgZ(10,"b"),e._uU(11,"\xdaltimo fichaje: "),e.qZA(),e._uU(12),e.qZA(),e.YNc(13,N,4,0,"div",6),e.YNc(14,J,4,0,"div",6),e.TgZ(15,"div",5),e.TgZ(16,"b"),e._uU(17,"Vacaciones restantes: "),e.qZA(),e._uU(18),e.qZA(),e.TgZ(19,"div",5),e.TgZ(20,"b"),e._uU(21,"Horas generadas: "),e.qZA(),e._uU(22),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(8),e.hij("N\xfamero Tarjeta: ",t.model.numero,""),e.xp6(4),e.Oqu(t.model.ultimoFichaje),e.xp6(1),e.Q6J("ngIf",t.model.working),e.xp6(1),e.Q6J("ngIf",!t.model.working),e.xp6(4),e.Oqu(t.model.diasVacaciones),e.xp6(4),e.Oqu(t.model.horasGeneradas))},directives:[m.O5],styles:[""]}),n})();class P{constructor(i,o,t,s){this.inicio=i,this.fin=o,this.numeroUsuario=t,this.nombreUsuario=s}}var S=r(7227);let H=(()=>{class n{constructor(o,t,s){this.service=o,this.tokenService=t,this.router=s,this.inicio="",this.fin="",this.numeroUsuario="",this.nombreUsuario=""}ngOnInit(){this.numeroUsuario=this.tokenService.getNumero(),this.nombreUsuario=this.tokenService.getNombre()}clear(){}onRegister(){let o=new P(this.inicio,this.fin,this.numeroUsuario,this.nombreUsuario);this.service.create(o).subscribe(t=>{console.log(t),l.G.toastSucess("","Vacaciones Guardadas"),this.router.navigate([`intranet/home/vacaciones/${this.numeroUsuario}`])},t=>{console.log(t),l.G.toastDanger("Error",t.error.mensaje)})}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(S.X),e.Y36(p.B),e.Y36(u.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-nuevas-vacaciones"]],decls:27,vars:4,consts:[[1,"bg-light","pb-3","rounded","mt-4","mx-4"],[1,"text-center","selected","bg-waves","rounded","p-3"],["novalidate","",1,"mt-4",3,"ngSubmit"],["f","ngForm"],[1,"w-75","mx-auto","row","justify-content-between"],[1,"col-12","d-flex","align-items-end","justify-content-end","mb-3"],[1,"form-group","w-100"],["for","inicio"],[1,"bi","bi-person"],[1,"input-group"],["type","date","name","inicio","id","inicio","required","",1,"form-control",3,"ngModel","ngModelChange"],["for","fin"],["type","date","name","fin","id","fin","required","",1,"form-control",3,"ngModel","ngModelChange"],[1,"m-4","row","justify-content-center"],[1,"col-12","col-sm-6","col-md-4","col-lg-3","col-xl-2","d-flex","align-items-end","justify-content-end","mb-3"],[1,"w-100",3,"valid"],[1,"w-100",3,"routerLink"]],template:function(o,t){if(1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"h3",1),e._uU(2,"Crear Petici\xf3n de Vacaciones"),e.qZA(),e.TgZ(3,"form",2,3),e.NdJ("ngSubmit",function(){return t.onRegister()}),e.TgZ(5,"div",4),e.TgZ(6,"div",5),e.TgZ(7,"div",6),e.TgZ(8,"label",7),e.TgZ(9,"b"),e._UZ(10,"i",8),e._uU(11,"D\xeda Inicio:"),e.qZA(),e.qZA(),e.TgZ(12,"div",9),e.TgZ(13,"input",10),e.NdJ("ngModelChange",function(a){return t.inicio=a}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"div",5),e.TgZ(15,"div",6),e.TgZ(16,"label",11),e.TgZ(17,"b"),e._UZ(18,"i",8),e._uU(19,"D\xeda Fin:"),e.qZA(),e.qZA(),e.TgZ(20,"div",9),e.TgZ(21,"input",12),e.NdJ("ngModelChange",function(a){return t.fin=a}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(22,"div",13),e.TgZ(23,"div",14),e._UZ(24,"app-boton-guardar",15),e.qZA(),e.TgZ(25,"div",14),e._UZ(26,"app-boton-volver",16),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o){const s=e.MAs(4);e.xp6(13),e.Q6J("ngModel",t.inicio),e.xp6(8),e.Q6J("ngModel",t.fin),e.xp6(3),e.Q6J("valid",s.valid),e.xp6(2),e.MGl("routerLink","/intranet/home/vacaciones/",t.numeroUsuario,"")}},directives:[c._Y,c.JL,c.F,c.Fj,c.Q7,c.JJ,c.On,g.Q,Z.w,u.rH],styles:[""]}),n})();class I{constructor(i,o,t,s,a,$){this.dia=i,this.horaInicio=o,this.horaFin=t,this.descripcion=s,this.numeroUsuario=a,this.nombreUsuario=$}}var Q=r(283);let Y=(()=>{class n{constructor(o,t,s){this.service=o,this.tokenService=t,this.router=s,this.dia="",this.horaInicio="",this.horaFin="",this.descripcion="",this.numeroUsuario="",this.nombreUsuario=""}ngOnInit(){this.numeroUsuario=this.tokenService.getNumero(),this.nombreUsuario=this.tokenService.getNombre()}clear(){}onRegister(){let o=new I(this.dia,this.horaInicio,this.horaFin,this.descripcion,this.numeroUsuario,this.nombreUsuario);this.service.create(o).subscribe(t=>{console.log(t),l.G.toastSucess("","Permiso Guardado"),this.router.navigate([`intranet/home/permisos/${this.numeroUsuario}`])},t=>{console.log(t),l.G.toastDanger("Error",t.error.mensaje)})}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(Q.M),e.Y36(p.B),e.Y36(u.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-nuevo-permiso"]],decls:43,vars:6,consts:[[1,"bg-light","pb-3","rounded","mt-4","mx-4"],[1,"text-center","selected","bg-waves","rounded","p-3"],["novalidate","",1,"mt-4",3,"ngSubmit"],["f","ngForm"],[1,"w-75","mx-auto","row","justify-content-between"],[1,"col-12","d-flex","align-items-end","justify-content-end","mb-3"],[1,"form-group","w-100"],["for","dia"],[1,"bi","bi-person"],[1,"input-group"],["type","date","name","dia","id","dia","required","",1,"form-control",3,"ngModel","ngModelChange"],["for","hora-ini"],["type","time","name","hora-ini","id","hora-ini","required","",1,"form-control",3,"ngModel","ngModelChange"],["for","hora-fin"],["type","time","name","hora-fin","id","hora-fin","required","",1,"form-control",3,"ngModel","ngModelChange"],["for","descripcion"],["type","text","name","descripcion","id","descripcion","required","",1,"form-control",3,"ngModel","ngModelChange"],[1,"m-4","row","justify-content-center"],[1,"col-12","col-sm-6","col-md-4","col-lg-3","col-xl-2","d-flex","align-items-end","justify-content-end","mb-3"],[1,"w-100",3,"valid"],[1,"w-100",3,"routerLink"]],template:function(o,t){if(1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"h3",1),e._uU(2,"Crear Petici\xf3n de Permiso"),e.qZA(),e.TgZ(3,"form",2,3),e.NdJ("ngSubmit",function(){return t.onRegister()}),e.TgZ(5,"div",4),e.TgZ(6,"div",5),e.TgZ(7,"div",6),e.TgZ(8,"label",7),e.TgZ(9,"b"),e._UZ(10,"i",8),e._uU(11,"D\xeda:"),e.qZA(),e.qZA(),e.TgZ(12,"div",9),e.TgZ(13,"input",10),e.NdJ("ngModelChange",function(a){return t.dia=a}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"div",5),e.TgZ(15,"div",6),e.TgZ(16,"label",11),e.TgZ(17,"b"),e._UZ(18,"i",8),e._uU(19,"Hora inicio:"),e.qZA(),e.qZA(),e.TgZ(20,"div",9),e.TgZ(21,"input",12),e.NdJ("ngModelChange",function(a){return t.horaInicio=a}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(22,"div",5),e.TgZ(23,"div",6),e.TgZ(24,"label",13),e.TgZ(25,"b"),e._UZ(26,"i",8),e._uU(27,"Hora fin:"),e.qZA(),e.qZA(),e.TgZ(28,"div",9),e.TgZ(29,"input",14),e.NdJ("ngModelChange",function(a){return t.horaFin=a}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(30,"div",5),e.TgZ(31,"div",6),e.TgZ(32,"label",15),e.TgZ(33,"b"),e._UZ(34,"i",8),e._uU(35,"Descripci\xf3n:"),e.qZA(),e.qZA(),e.TgZ(36,"div",9),e.TgZ(37,"input",16),e.NdJ("ngModelChange",function(a){return t.descripcion=a}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(38,"div",17),e.TgZ(39,"div",18),e._UZ(40,"app-boton-guardar",19),e.qZA(),e.TgZ(41,"div",18),e._UZ(42,"app-boton-volver",20),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o){const s=e.MAs(4);e.xp6(13),e.Q6J("ngModel",t.dia),e.xp6(8),e.Q6J("ngModel",t.horaInicio),e.xp6(8),e.Q6J("ngModel",t.horaFin),e.xp6(8),e.Q6J("ngModel",t.descripcion),e.xp6(3),e.Q6J("valid",s.valid),e.xp6(2),e.MGl("routerLink","/intranet/home/permisos/",t.numeroUsuario,"")}},directives:[c._Y,c.JL,c.F,c.Fj,c.Q7,c.JJ,c.On,g.Q,Z.w,u.rH],styles:[""]}),n})();var D=r(7957);let O=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-permisos-user"]],decls:6,vars:0,consts:[[1,"d-flex","flex-column","justify-content-center","align-items-center","mt-4","rounded"],["routerLink","/intranet/home/permisos/nuevo",1,"btn","bg-pink","text-white","px-5","py-3","m-5","shadow"],[1,"bi","bi-plus-circle"],[1,"mb-5","mx-5"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"button",1),e._UZ(2,"i",2),e._uU(3," Nuevo permiso"),e.qZA(),e.qZA(),e._UZ(4,"hr",3),e._UZ(5,"app-permisos-lista"))},directives:[u.rH,D.u],styles:[""]}),n})();var V=r(9521);const G=[{path:"",component:j},{path:"fichajes/:numero",component:M},{path:"permisos/nuevo",component:Y},{path:"permisos/:numero",component:O},{path:"vacaciones/nuevo",component:H},{path:"vacaciones/:numero",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-vacaciones-user"]],decls:6,vars:0,consts:[[1,"d-flex","flex-column","justify-content-center","align-items-center","mt-4","rounded"],["routerLink","/intranet/home/vacaciones/nuevo",1,"btn","bg-pink","text-white","px-5","py-3","m-5","shadow"],[1,"bi","bi-plus-circle"],[1,"mb-5","mx-5"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"button",1),e._UZ(2,"i",2),e._uU(3," Nuevas Vacaciones"),e.qZA(),e.qZA(),e._UZ(4,"hr",3),e._UZ(5,"app-vacaciones-lista"))},directives:[u.rH,V.C],styles:[""]}),n})()},{path:"cuenta",component:_}];let L=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[u.Bz.forChild(G)],u.Bz]}),n})();var k=r(9544),z=r(7729),E=r(5964),B=r(7525),R=r(6259);let X=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[h,d.J],imports:[[m.ez,L,k.m,z.I,E.P,B.g,R.B]]}),n})()}}]);