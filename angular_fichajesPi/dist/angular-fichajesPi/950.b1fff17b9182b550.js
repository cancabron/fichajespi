"use strict";(self.webpackChunkangular_fichajesPi=self.webpackChunkangular_fichajesPi||[]).push([[950],{4950:(N,c,i)=>{i.r(c),i.d(c,{PermisosModule:()=>J});var p=i(8870),d=i(1207),Z=i(860);class h{constructor(l,t,o,r,s,x,_){this.aprobado=l,this.dia=t,this.descripcion=o,this.horaFin=r,this.horaInicio=s,this.estado=x,this.usuario=_}}var a=i(1659),e=i(9215),u=i(283),m=i(6603),v=i(1307);let T=(()=>{class n{constructor(t,o,r){this.service=t,this.activatedRoute=o,this.router=r,this.model=new h(null,"","","","","",new Z.a("","","","",null,null,null,null,null,""))}ngOnInit(){this.load()}load(){this.service.detail(this.activatedRoute.snapshot.params.id).subscribe(o=>{this.model=o},o=>{a.G.toastDanger("Ocurri\xf3 un error",o.message),console.log(o)})}onDelete(){const t=this.activatedRoute.snapshot.params.id;a.G.dangerConfirmBox("\xbfDesea eliminar el permiso?","Esta operaci\xf3n no se puede deshacer","SI","NO").openConfirmBox$().subscribe(o=>{o.Success&&this.delete(t)})}delete(t){this.service.delete(t).subscribe(o=>{a.G.toastWarning("","Permiso Eliminado"),this.router.navigate(["intranet/permisos"])},o=>{a.G.toastDanger("Ocurri\xf3 un error",o.message),console.log(o)})}onApprove(){this.service.aprobar(this.activatedRoute.snapshot.params.id).subscribe(o=>{a.G.toastSucess("","Permiso Aprobado"),this.load()},o=>{a.G.toastDanger("Ocurri\xf3 un error",o.message),console.log(o)})}onDeny(){this.service.denegar(this.activatedRoute.snapshot.params.id).subscribe(o=>{a.G.toastDanger("","Permiso Denegado"),this.load()},o=>{a.G.toastDanger("Ocurri\xf3 un error",o.message),console.log(o)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.M),e.Y36(d.gz),e.Y36(d.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-permisos-detalles"]],decls:75,vars:8,consts:[[1,"container-fluid","mt-3"],[1,"mb-4","text-center","selected","bg-waves","rounded","p-3"],[1,"mt-4","mb-4","mx-5"],[1,"row","mb-4"],[1,"col-12","col-sm-12","col-md-12","col-lg-12","col-xl-12","d-flex","align-items-end","justify-content-end","mb-3"],[1,"form-group","small","w-100"],["for","resumen"],[1,"input-group","input-group-sm"],["type","text","name","descripcion","id","descripcion","disabled","",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-12","col-sm-6","col-md-4","col-lg-4","col-xl-3","d-flex","align-items-end","justify-content-end","mb-3"],["for","dia"],["type","text","name","dia","id","dia","disabled","",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","hora-inicio","id","hora-inicio","disabled","",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","hora-fin","id","hora-fin","disabled","",1,"form-control",3,"ngModel","ngModelChange"],["for","u-nombre"],["type","text","name","u-nombre","id","u-nombre","disabled","",1,"form-control",3,"ngModel","ngModelChange"],["for","u-numero"],["type","text","name","u-numero","id","u-numero","disabled","",1,"form-control",3,"ngModel","ngModelChange"],["for","u-email"],["type","text","name","u-email","id","u-email","disabled","",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","estado","id","estado","disabled","",1,"form-control",3,"ngModel","ngModelChange"],[1,"row","d-flex","flex-row","justify-content-center"],[1,"col-12","col-sm-6","col-md-4","col-lg-3","col-xl-2","d-flex","align-items-end","justify-content-end","mb-3"],[1,"btn","btn-sm","btn-danger","w-100",3,"click"],[1,"btn","btn-sm","btn-success","w-100",3,"click"],[1,"row","d-flex","flex-row","justify-content-end","mx-5"],["routerLink","/intranet/permisos/list",1,"w-100"],[1,"w-100","text-center","mt-5","mb-5"],[1,"mx-auto","btn","btn-outline-danger","btn-sm",3,"click"],[1,"bi","bi-trash"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h3",1),e._uU(2,"Aprobar Permiso"),e.qZA(),e.TgZ(3,"form",2),e.TgZ(4,"div",3),e.TgZ(5,"div",4),e.TgZ(6,"div",5),e.TgZ(7,"label",6),e.TgZ(8,"b"),e._uU(9,"Descripci\xf3n:"),e.qZA(),e.qZA(),e.TgZ(10,"div",7),e.TgZ(11,"textarea",8),e.NdJ("ngModelChange",function(s){return o.model.descripcion=s}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(12,"div",9),e.TgZ(13,"div",5),e.TgZ(14,"label",10),e.TgZ(15,"b"),e._uU(16,"D\xeda:"),e.qZA(),e.qZA(),e.TgZ(17,"div",7),e.TgZ(18,"input",11),e.NdJ("ngModelChange",function(s){return o.model.dia=s}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(19,"div",9),e.TgZ(20,"div",5),e.TgZ(21,"label",10),e.TgZ(22,"b"),e._uU(23,"Hora Inicio:"),e.qZA(),e.qZA(),e.TgZ(24,"div",7),e.TgZ(25,"input",12),e.NdJ("ngModelChange",function(s){return o.model.horaInicio=s}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(26,"div",9),e.TgZ(27,"div",5),e.TgZ(28,"label",10),e.TgZ(29,"b"),e._uU(30,"Hora Fin:"),e.qZA(),e.qZA(),e.TgZ(31,"div",7),e.TgZ(32,"input",13),e.NdJ("ngModelChange",function(s){return o.model.horaFin=s}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(33,"div",9),e.TgZ(34,"div",5),e.TgZ(35,"label",14),e.TgZ(36,"b"),e._uU(37,"Nombre Empleado:"),e.qZA(),e.qZA(),e.TgZ(38,"div",7),e.TgZ(39,"input",15),e.NdJ("ngModelChange",function(s){return o.model.usuario.nombreEmpleado=s}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(40,"div",9),e.TgZ(41,"div",5),e.TgZ(42,"label",16),e.TgZ(43,"b"),e._uU(44,"N\xfamero Empleado:"),e.qZA(),e.qZA(),e.TgZ(45,"div",7),e.TgZ(46,"input",17),e.NdJ("ngModelChange",function(s){return o.model.usuario.numero=s}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(47,"div",9),e.TgZ(48,"div",5),e.TgZ(49,"label",18),e.TgZ(50,"b"),e._uU(51,"Email Empleado:"),e.qZA(),e.qZA(),e.TgZ(52,"div",7),e.TgZ(53,"input",19),e.NdJ("ngModelChange",function(s){return o.model.usuario.email=s}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(54,"div",9),e.TgZ(55,"div",5),e.TgZ(56,"label",18),e.TgZ(57,"b"),e._uU(58,"Estado:"),e.qZA(),e.qZA(),e.TgZ(59,"div",7),e.TgZ(60,"input",20),e.NdJ("ngModelChange",function(s){return o.model.estado=s}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(61,"div",21),e.TgZ(62,"div",22),e.TgZ(63,"button",23),e.NdJ("click",function(){return o.onDeny()}),e._uU(64," Denegar "),e.qZA(),e.qZA(),e.TgZ(65,"div",22),e.TgZ(66,"button",24),e.NdJ("click",function(){return o.onApprove()}),e._uU(67," Aprobar "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(68,"div",25),e.TgZ(69,"div",22),e._UZ(70,"app-boton-volver",26),e.qZA(),e.qZA(),e.TgZ(71,"div",27),e.TgZ(72,"button",28),e.NdJ("click",function(){return o.onDelete()}),e._UZ(73,"i",29),e._uU(74," Eliminar permiso "),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(11),e.Q6J("ngModel",o.model.descripcion),e.xp6(7),e.Q6J("ngModel",o.model.dia),e.xp6(7),e.Q6J("ngModel",o.model.horaInicio),e.xp6(7),e.Q6J("ngModel",o.model.horaFin),e.xp6(7),e.Q6J("ngModel",o.model.usuario.nombreEmpleado),e.xp6(7),e.Q6J("ngModel",o.model.usuario.numero),e.xp6(7),e.Q6J("ngModel",o.model.usuario.email),e.xp6(7),e.Q6J("ngModel",o.model.estado))},directives:[m._Y,m.JL,m.F,m.Fj,m.JJ,m.On,v.w,d.rH],styles:[""]}),n})();var f=i(2958),b=i(2482);let A=(()=>{class n{constructor(t){this.service=t}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.M))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-permisos-statistics"]],decls:4,vars:7,consts:[[1,"d-flex","flex-column","align-items-center","justify-content-center","mt-5"],[1,"col-8","col-sm-6","mb-5",3,"service","serieName","chartTitle"],[1,"d-flex","mb-5","align-items-start","justify-content-around","w-100","bg-light","p-5","rounded-3"],[1,"",3,"service","tableName","columnName","route"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-chart",1),e.TgZ(2,"div",2),e._UZ(3,"app-statics-table",3),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.Q6J("service",o.service)("serieName","Horas")("chartTitle","Evoluci\xf3n Horas de Permisos \xfaltimos 12 meses"),e.xp6(2),e.Q6J("service",o.service)("tableName","Ranking Usuarios")("columnName","Horas Permisos")("route","permisos/list/empleado/"))},directives:[f.x,b.j],styles:[""]}),n})();var C=i(7957);let g=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-permisos"]],decls:5,vars:0,consts:[[1,"w-100","text-center"],["routerLink","/intranet/permisos/statistics",1,"btn","btn-sm","bg-pink","text-white","px-3","py-1","mb-2","shadow","fs-6","fw-bold"],[1,"bi","bi-graph-down"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"button",1),e._uU(2,"Estad\xedsticas "),e._UZ(3,"i",2),e.qZA(),e.qZA(),e._UZ(4,"app-permisos-lista"))},directives:[d.rH,C.u],styles:[""]}),n})();const M=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:g},{path:"list/empleado/:numero",component:g},{path:"list/:id",component:T},{path:"statistics",component:A}];let q=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[d.Bz.forChild(M)],d.Bz]}),n})();var P=i(9544),y=i(7729),D=i(7525);let J=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[u.M],imports:[[p.ez,q,P.m,y.I,D.g]]}),n})()}}]);