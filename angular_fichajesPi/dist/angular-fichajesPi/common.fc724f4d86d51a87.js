"use strict";(self.webpackChunkangular_fichajesPi=self.webpackChunkangular_fichajesPi||[]).push([[592],{6610:(d,c,i)=>{i.d(c,{J:()=>r});var t=i(4537),l=i(9215),u=i(6659);let r=(()=>{class s{constructor(e){this.httpClient=e,this.endPoint=t.N.apiURL+"/usuario"}getElements(e,a,o,h,p){return this.httpClient.post(this.endPoint+`/pagesFiltered?page=${a}&size=${o}&order=${h}&asc=${p}`,e)}detail(e){return this.httpClient.get(this.endPoint+`/${e}`)}update(e,a){return this.httpClient.put(this.endPoint+`/${e}`,a)}delete(e){return this.httpClient.delete(this.endPoint+`/${e}`)}getCsvData(e){return this.httpClient.post(this.endPoint+"/listFiltered",e)}getMyUsuario(){return this.httpClient.get(this.endPoint+"/miusuario")}changePassword(e,a){return this.httpClient.put(this.endPoint+`/password/${e}`,a)}}return s.\u0275fac=function(e){return new(e||s)(l.LFG(u.eN))},s.\u0275prov=l.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},2958:(d,c,i)=>{i.d(c,{x:()=>u});var t=i(9215),l=i(6894);let u=(()=>{class r{constructor(){this.service=null,this.serieName="serie",this.chartTitle="chart title"}ngOnInit(){var n;null===(n=this.service)||void 0===n||n.getChartData().subscribe(e=>{this.initChart(e.fechas,e.cantidades)})}initChart(n,e){this.basicData={labels:n,datasets:[{label:this.serieName,data:e,fill:!0,borderColor:"#D21757",backgroundColor:"#D7EBED",tension:.2}]},this.basicOptions={plugins:{legend:{labels:{color:"#495057"}}},scales:{x:{ticks:{color:"#495057"},grid:{color:"#ebedef"}},y:{ticks:{color:"#495057"},grid:{color:"#ebedef"}}}}}}return r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-chart"]],inputs:{service:"service",serieName:"serieName",chartTitle:"chartTitle"},decls:4,vars:3,consts:[[1,"d-flex","flex-column","justify-content-center","align-items-center","mb-3"],[1,"bg-waves","rounded","shadow","px-4","py-2","mb-3","text-dark"],["type","line",1,"w-100",3,"data","options"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"h4",1),t._uU(2),t.qZA(),t._UZ(3,"p-chart",2),t.qZA()),2&n&&(t.xp6(2),t.Oqu(e.chartTitle),t.xp6(1),t.Q6J("data",e.basicData)("options",e.basicOptions))},directives:[l.C],styles:[""]}),r})()},2482:(d,c,i)=>{i.d(c,{j:()=>s});var t=i(9215),l=i(8870),u=i(1207);function r(n,e){if(1&n&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",4),t.TgZ(4,"div",5),t._uU(5),t.qZA(),t.qZA(),t.qZA()),2&n){const a=e.$implicit,o=t.oxw();t.xp6(2),t.Oqu(a.cantidad),t.xp6(1),t.hYB("routerLink","/intranet/",o.route,"",a.id,""),t.xp6(2),t.Oqu(a.nombreEmpleado)}}let s=(()=>{class n{constructor(){this.listaElementos=[],this.service=null,this.tableName="Nombre Tabla",this.columnName="Nombre Columna",this.route="incidencias/list/empleado/"}ngOnInit(){var a;null===(a=this.service)||void 0===a||a.getUserTableData().subscribe(o=>{this.listaElementos=o})}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-statics-table"]],inputs:{service:"service",tableName:"tableName",columnName:"columnName",route:"route"},decls:12,vars:3,consts:[[1,"d-flex","flex-column","justify-content-center","align-items-center"],[1,"bg-waves","rounded","shadow","px-4","py-2","mb-3","text-dark"],[1,"table","table-hover","text-center"],[4,"ngFor","ngForOf"],[3,"routerLink"],[1,"w-100","h-100","btn","btn-outline-secondary"]],template:function(a,o){1&a&&(t.TgZ(0,"div",0),t.TgZ(1,"h4",1),t._uU(2),t.qZA(),t.TgZ(3,"table",2),t.TgZ(4,"thead"),t.TgZ(5,"tr"),t.TgZ(6,"th"),t._uU(7),t.qZA(),t.TgZ(8,"th"),t._uU(9," Usuario "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"tbody"),t.YNc(11,r,6,4,"tr",3),t.qZA(),t.qZA(),t.qZA()),2&a&&(t.xp6(2),t.Oqu(o.tableName),t.xp6(5),t.hij(" ",o.columnName," "),t.xp6(4),t.Q6J("ngForOf",o.listaElementos))},directives:[l.sg,u.rH],styles:[""]}),n})()}}]);