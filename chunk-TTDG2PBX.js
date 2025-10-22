import{g as P,o as g,p as M}from"./chunk-J2OK2TAB.js";import{lb as N,xb as x,yb as S}from"./chunk-ER3PPZVH.js";import{$a as T,Ca as b,Eb as h,Ka as t,La as i,M as v,Ma as n,Ra as s,Wc as k,Yc as F,Za as w,_a as A,_c as D,bb as e,db as f,ia as p,ja as C,mb as q,nb as E,pa as m,qa as y,za as l}from"./chunk-TTO7B3JZ.js";var V=()=>({property:"id",label:"User ID"}),G=a=>[a],B=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-page-dynamic-edit-basic"]],standalone:!1,decls:1,vars:4,consts:[["p-title","Po Page Dynamic Edit","p-service-api","https://po-sample-api.onrender.com/v1/people",3,"p-fields"]],template:function(o,d){o&1&&n(0,"po-page-dynamic-edit",0),o&2&&l("p-fields",E(2,G,q(1,V)))},dependencies:[P],encapsulation:2})}return a})();var W=a=>({"docs-sample-code-tabs":a}),O=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-page-dynamic-edit-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,d){o&1&&(n(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Page Dynamic Edit Basic"),i(),t(4,"a",2),s("click",function(){return d.toggleSampleCodeTabs()}),n(5,"span"),e(6),i()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.html"),i(),t(13,"pre",7),e(14,`<po-page-dynamic-edit
  p-title="Po Page Dynamic Edit"
  [p-fields]="[{ property: 'id', label: 'User ID' }]"
  p-service-api="https://po-sample-api.onrender.com/v1/people"
>
</po-page-dynamic-edit>
`),i()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.ts"),i(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-dynamic-edit-basic',
  templateUrl: './sample-po-page-dynamic-edit-basic.component.html',
  standalone: false
})
export class SamplePoPageDynamicEditBasicComponent {}
`),i()()()()(),t(21,"div",10),n(22,"sample-po-page-dynamic-edit-basic"),i(),n(23,"hr")),o&2&&(p(5),b("po-icon "+d.sampleCodeButtonIcon),p(),f(" ",d.sampleCodeButtonLabel,""),p(),l("ngClass",E(4,W,d.hideSampleCodeTabs)))},dependencies:[h,g,x,S,B],encapsulation:2})}return a})();var J=["dynamicEdit"],j=(()=>{class a{dynamicEdit;serviceApi="https://po-sample-api.onrender.com/v1/people";actions={save:"/documentation/po-page-dynamic-detail",saveNew:"/documentation/po-page-dynamic-edit"};literals={pageActionCancel:"Descartar",pageActionSave:"Gravar",pageActionSaveNew:"Gravar e novo"};breadcrumb={items:[{label:"Home",link:"/"},{label:"People",link:"/documentation/po-page-dynamic-table"},{label:"Edit"}]};fields=[{property:"status",divider:"Status",options:["active","inactive"]},{property:"id",label:"User ID",key:!0,required:!0},{property:"name",divider:"Personal data",required:!0},{property:"nickname"},{property:"email",label:"E-mail"},{property:"birthdate",label:"Birth date",type:"date",errorMessage:"Invalid date.",help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY.",keydown:this.onKeyDown.bind(this,"birthdate")},{property:"genre",options:["female","male","others"],gridLgColumns:6},{property:"nationality"},{property:"birthPlace",label:"Place of birth"},{property:"graduation"},{property:"father",label:"Father`s name",divider:"Relationship",gridMdColumns:4,gridLgColumns:4},{property:"mother",label:"Mother`s name",offsetMdColumns:4,offsetLgColumns:4,gridMdColumns:4,gridLgColumns:4},{property:"street",divider:"Address",gridColumns:4},{property:"city",optionsService:"https://po-sample-api.onrender.com/v1/cities?transform=true",offsetColumns:4,gridColumns:4}];onKeyDown(r,o){o.code==="F9"&&this.dynamicEdit.showAdditionalHelp(r)}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-page-dynamic-edit-user"]],viewQuery:function(o,d){if(o&1&&w(J,7),o&2){let u;A(u=T())&&(d.dynamicEdit=u.first)}},standalone:!1,decls:2,vars:6,consts:[["dynamicEdit",""],["p-title","User edit",3,"p-auto-router","p-actions","p-breadcrumb","p-fields","p-literals","p-service-api"]],template:function(o,d){o&1&&n(0,"po-page-dynamic-edit",1,0),o&2&&l("p-auto-router",!0)("p-actions",d.actions)("p-breadcrumb",d.breadcrumb)("p-fields",d.fields)("p-literals",d.literals)("p-service-api",d.serviceApi)},dependencies:[P],encapsulation:2})}return a})();var Z=a=>({"docs-sample-code-tabs":a}),z=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-page-dynamic-edit-user-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,d){o&1&&(n(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Page Dynamic Edit - User"),i(),t(4,"a",2),s("click",function(){return d.toggleSampleCodeTabs()}),n(5,"span"),e(6),i()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.html"),i(),t(13,"pre",7),e(14,`<po-page-dynamic-edit
  #dynamicEdit
  [p-auto-router]="true"
  p-title="User edit"
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-fields]="fields"
  [p-literals]="literals"
  [p-service-api]="serviceApi"
>
</po-page-dynamic-edit>
`),i()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.ts"),i(),t(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';

import { PoBreadcrumb, PoDynamicFormField } from '@po-ui/ng-components';

import { PoPageDynamicEditActions, PoPageDynamicEditComponent, PoPageDynamicEditLiterals } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-dynamic-edit-user',
  templateUrl: './sample-po-page-dynamic-edit-user.component.html',
  standalone: false
})
export class SamplePoPageDynamicEditUserComponent {
  @ViewChild('dynamicEdit', { static: true }) dynamicEdit: PoPageDynamicEditComponent;

  public readonly serviceApi = 'https://po-sample-api.onrender.com/v1/people';

  public readonly actions: PoPageDynamicEditActions = {
    save: '/documentation/po-page-dynamic-detail',
    saveNew: '/documentation/po-page-dynamic-edit'
  };

  public readonly literals: PoPageDynamicEditLiterals = {
    pageActionCancel: 'Descartar',
    pageActionSave: 'Gravar',
    pageActionSaveNew: 'Gravar e novo'
  };

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'People', link: '/documentation/po-page-dynamic-table' },
      { label: 'Edit' }
    ]
  };

  public readonly fields: Array<PoDynamicFormField> = [
    { property: 'status', divider: 'Status', options: ['active', 'inactive'] },
    { property: 'id', label: 'User ID', key: true, required: true },
    { property: 'name', divider: 'Personal data', required: true },
    { property: 'nickname' },
    { property: 'email', label: 'E-mail' },
    {
      property: 'birthdate',
      label: 'Birth date',
      type: 'date',
      errorMessage: 'Invalid date.',
      help: 'Enter or select a valid date.',
      additionalHelpTooltip: 'Please enter a valid date in the format MMDDYYYY.',
      keydown: this.onKeyDown.bind(this, 'birthdate')
    },
    { property: 'genre', options: ['female', 'male', 'others'], gridLgColumns: 6 },
    { property: 'nationality' },
    { property: 'birthPlace', label: 'Place of birth' },
    { property: 'graduation' },
    {
      property: 'father',
      label: 'Father\`s name',
      divider: 'Relationship',
      gridMdColumns: 4,
      gridLgColumns: 4
    },
    {
      property: 'mother',
      label: 'Mother\`s name',
      offsetMdColumns: 4,
      offsetLgColumns: 4,
      gridMdColumns: 4,
      gridLgColumns: 4
    },
    {
      property: 'street',
      divider: 'Address',
      gridColumns: 4
    },
    {
      property: 'city',
      optionsService: 'https://po-sample-api.onrender.com/v1/cities?transform=true',
      offsetColumns: 4,
      gridColumns: 4
    }
  ];

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.dynamicEdit.showAdditionalHelp(property);
    }
  }
}
`),i()()()()(),t(21,"div",10),n(22,"sample-po-page-dynamic-edit-user"),i(),n(23,"hr")),o&2&&(p(5),b("po-icon "+d.sampleCodeButtonIcon),p(),f(" ",d.sampleCodeButtonLabel,""),p(),l("ngClass",E(4,Z,d.hideSampleCodeTabs)))},dependencies:[h,g,x,S,j],encapsulation:2})}return a})();var _=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-page-dynamic-edit-doc"]],standalone:!1,decls:1408,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-page-dynamic-edit#po-page-dynamic-edit-metadata"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoPageDynamicEditActions"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoPageDynamicEditField>"],["pan","",1,"docs-api-property-type","PoPageDynamicEditLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","(()","=>","PoPageDynamicEditOptions)"],["pan","",1,"docs-api-property-type","((model:","any)","=>","any)"],["pan","",1,"docs-api-property-type","((model:","any)","=>","Observable<any>)"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(()","=>","PoPageDynamicEditBeforeCancel)"],["href","https://po-ui.io/guides/api#successMessages"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","PoPageDynamicEditBeforeSave)"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","PoPageDynamicEditBeforeSaveNew)"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","void)"],["pan","",1,"docs-api-property-type","((resource:","any,","id?:","string)","=>","void)"],["pan","",1,"docs-api-property-type","any"],["href","https://po-ui.io/documentation/po-dynamic-form"],["id","po-page-dynamic-edit-metadata"],["pan","",1,"docs-api-property-type","number"]],template:function(o,d){o&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoPageDynamicEditModule } from '@po-ui/ng-templates';"),i()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo do template do po-page-dynamic-detail."),i()(),t(7,"h3",3),e(8,"Componente"),i(),t(9,"h4",4)(10,"code",5),e(11,"PoPageDynamicEditComponent"),i()(),t(12,"div",2)(13,"p"),e(14,"O "),t(15,"code"),e(16,"po-page-dynamic-edit"),i(),e(17,` \xE9 uma p\xE1gina que pode servir para editar ou criar novos registros,
o mesmo tamb\xE9m suporta metadados conforme especificado na documenta\xE7\xE3o.`),i(),t(18,"h3"),e(19,"Utiliza\xE7\xE3o via rota"),i(),t(20,"p"),e(21,"Ao utilizar as rotas para inicializar o template, o "),t(22,"code"),e(23,"page-dynamic-edit"),i(),e(24,` disponibiliza propriedades que devem ser fornecidas no arquivo de configura\xE7\xE3o de rotas da aplica\xE7\xE3o, para
poder especificar o endpoint dos dados e dos metadados que ser\xE3o carregados na inicializa\xE7\xE3o.`),i(),t(25,"p"),e(26,"Exemplo de utiliza\xE7\xE3o:"),i(),t(27,"p"),e(28,"Arquivo de configura\xE7\xE3o de rotas da aplica\xE7\xE3o: "),t(29,"code"),e(30,"app-routing.module.ts"),i()(),t(31,"pre")(32,"code"),e(33,`const routes: Routes = [
{
  path: 'people',
  component: PoPageDynamicEditComponent,
  data: {
    serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
    serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados utilizando o m\xE9todo HTTP Get
    serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customiza\xE7\xF5es dos metadados utilizando o m\xE9todo HTTP Post
  }
 },
 {
  path: 'home',
  component: HomeExampleComponent
 }
];
`),i()(),t(34,"p"),e(35,`O componente primeiro ir\xE1 carregar o metadado da rota definida na propriedade serviceMetadataApi
e depois ir\xE1 buscar da rota definida na propriedade serviceLoadApi.`),i(),t(36,"p"),e(37,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),i(),t(38,"blockquote")(39,"p"),e(40,`Caso o servidor retornar um erro ao recuperar os metadados, ser\xE3o repassados os metadados salvos em cache,
se o cache n\xE3o existir ser\xE1 disparada uma notifica\xE7\xE3o.`),i()(),t(41,"p"),e(42,"Para carregar com um recurso j\xE1 existente, deve-se ser inclu\xEDdo um par\xE2metro na rota chamado "),t(43,"code"),e(44,"id"),i(),e(45,":"),i(),t(46,"pre")(47,"code"),e(48,`{
  path: 'people/:id',
  component: PoPageDynamicEditComponent,
  data: {
    serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
    serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados
    serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customiza\xE7\xF5es dos metadados
  }
}
`),i()(),t(49,"p"),e(50,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),i(),t(51,"p"),e(52,`O formato esperado na resposta da requisi\xE7\xE3o est\xE1 especificado na interface
`),t(53,"a",6),e(54,"PoPageDynamicEditMetadata"),i(),e(55,". Por exemplo:"),i(),t(56,"pre")(57,"code"),e(58,` {
  version: 1,
  title: 'Person edit',
  fields: [
    { property: 'id', key: true, disabled: true },
    { property: 'status' },
    { property: 'name' },
    { property: 'nickname' },
    { property: 'birthdate', label: 'Birth date' },
    { property: 'genre' },
    { property: 'city' },
    { property: 'country' }
  ]
}
`),i()(),t(59,"blockquote")(60,"p"),e(61,"Caso o endpoint dos metadados n\xE3o seja especificado, ser\xE1 feito uma requisi\xE7\xE3o utilizando o "),t(62,"code"),e(63,"serviceApi"),i(),e(64," da seguinte forma:"),i()(),t(65,"pre")(66,"code"),e(67,`GET {end-point}/metadata?type=edit&version={version}
`),i()()(),t(68,"div",7)(69,"h4",8),e(70,"Seletor"),i(),t(71,"pre",9),e(72,`<po-page-dynamic-edit
    p-actions="PoPageDynamicEditActions"
    p-auto-router="boolean"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    p-fields="Array<PoPageDynamicEditField>"
    p-literals="PoPageDynamicEditLiterals"
    p-notification-type="string"
    p-load="string | (() => PoPageDynamicEditOptions)"
    p-load-data="((model: any) => any) | ((model: any) => Observable<any>)"
    p-service-api="string"
    p-title="string" >
</po-page-dynamic-edit>
`),i()(),t(73,"h4",10),e(74,"Propriedades"),i(),t(75,"table",11)(76,"tr",12)(77,"th",13),e(78,"Nome"),i(),t(79,"th",13),e(80,"Tipo"),i(),t(81,"th",13),e(82,"Padr\xE3o"),i(),t(83,"th",13),e(84,"Descri\xE7\xE3o"),i()(),t(85,"tr",14)(86,"td",15)(87,"div",16)(88,"span",17),e(89," p-actions"),n(90,"br"),i()()(),t(91,"td",18)(92,"code",19),e(93,"PoPageDynamicEditActions"),i()(),t(94,"td",20),e(95,"-"),i(),t(96,"td",21)(97,"em")(98,"strong"),e(99,"(opcional)"),i()(),t(100,"p"),e(101,"A\xE7\xF5es da p\xE1gina."),i()()(),t(102,"tr",14)(103,"td",15)(104,"div",16)(105,"span",17),e(106," p-auto-router"),n(107,"br"),i()()(),t(108,"td",18)(109,"code",22),e(110,"boolean"),i()(),t(111,"td",20)(112,"p"),e(113,"false"),i()(),t(114,"td",21)(115,"em")(116,"strong"),e(117,"(opcional)"),i()(),t(118,"p"),e(119,`Cria automaticamente as rotas de edi\xE7\xE3o (novo/duplicate) e detalhes caso as a\xE7\xF5es
estejam definidas nas a\xE7\xF5es.`),i(),t(120,"blockquote")(121,"p"),e(122,"Para o correto funcionamento n\xE3o pode haver nenhum rota coringa ("),t(123,"code"),e(124,"**"),i(),e(125,") especificada."),i()()()(),t(126,"tr",14)(127,"td",15)(128,"div",16)(129,"span",17),e(130," p-breadcrumb"),n(131,"br"),i()()(),t(132,"td",18)(133,"code",23),e(134,"PoBreadcrumb"),i()(),t(135,"td",20),e(136,"-"),i(),t(137,"td",21)(138,"em")(139,"strong"),e(140,"(opcional)"),i()(),t(141,"p"),e(142,"Objeto com propriedades do breadcrumb."),i()()(),t(143,"tr",14)(144,"td",15)(145,"div",16)(146,"span",17),e(147," p-components-size"),n(148,"br"),i()()(),t(149,"td",18)(150,"code",24),e(151,"string"),i()(),t(152,"td",20)(153,"p")(154,"code"),e(155,"medium"),i()()(),t(156,"td",21)(157,"em")(158,"strong"),e(159,"(opcional)"),i()(),t(160,"p"),e(161,"Define o tamanho dos componentes de formul\xE1rio no template:"),i(),t(162,"ul")(163,"li")(164,"code"),e(165,"small"),i(),e(166,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),i(),t(167,"li")(168,"code"),e(169,"medium"),i(),e(170,": aplica a medida medium de cada componente."),i()(),t(171,"blockquote")(172,"p"),e(173,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(174,"code"),e(175,"medium"),i(),e(176,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(177,"a",25),e(178,"po-theme"),i(),e(179,"."),i()()()(),t(180,"tr",14)(181,"td",15)(182,"div",16)(183,"span",17),e(184," p-fields"),n(185,"br"),i()()(),t(186,"td",18)(187,"code",26),e(188,"Array<PoPageDynamicEditField>"),i()(),t(189,"td",20),e(190,"-"),i(),t(191,"td",21)(192,"p"),e(193,"Lista dos campos usados na tabela e busca avan\xE7ada."),i()()(),t(194,"tr",14)(195,"td",15)(196,"div",16)(197,"span",17),e(198," p-literals"),n(199,"br"),i()()(),t(200,"td",18)(201,"code",27),e(202,"PoPageDynamicEditLiterals"),i()(),t(203,"td",20),e(204,"-"),i(),t(205,"td",21)(206,"em")(207,"strong"),e(208,"(opcional)"),i()(),t(209,"p"),e(210,"Objeto com as literais usadas no "),t(211,"code"),e(212,"po-page-dynamic-edit"),i(),e(213,"."),i(),t(214,"p"),e(215,`\xC9 possivel customizar passando um objeto com todas as literais dispon\xEDveis
ou passando apenas as literais que deseja customizar`),i(),t(216,"pre")(217,"code"),e(218,`const customLiterals: PoPageDynamicEditLiterals = {
  detailActionNew: 'Incluir',
  pageActionCancel: 'Descartar',
  pageActionSave: 'Gravar',
  pageActionSaveNew: 'Gravar e incluir',
  registerNotFound: 'Nenhum registro encontrado.',
  saveNotificationError: 'Campo(s) obrigat\xF3rio(s) sem preenchimento.',
  saveNotificationSuccessSave: 'Item salvo com sucesso.',
  saveNotificationSuccessUpdate: 'Item atualizado com sucesso.',
  saveNotificationWarning: 'Necess\xE1rio preencher o formul\xE1rio corretamente.'
};
`),i()(),t(219,"p"),e(220,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),i(),t(221,"pre")(222,"code"),e(223,`<po-page-dynamic-edit
  [p-literals]="customLiterals">
</po-page-dynamic-edit>
`),i()(),t(224,"blockquote")(225,"p"),e(226,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),t(227,"a",28)(228,"code"),e(229,"PoI18nService"),i()(),e(230," ou "),t(231,"em"),e(232,"browser"),i(),e(233,"."),i()()()(),t(234,"tr",14)(235,"td",15)(236,"div",16)(237,"span",17),e(238," p-notification-type"),n(239,"br"),i()()(),t(240,"td",18)(241,"code",24),e(242,"string"),i()(),t(243,"td",20)(244,"p"),e(245,"warning"),i()(),t(246,"td",21)(247,"em")(248,"strong"),e(249,"(opcional)"),i()(),t(250,"p"),e(251,"Tipo da notifica\xE7\xE3o."),i(),t(252,"p"),e(253,"\xC9 possivel definir o tipo de notifica\xE7\xE3o que ser\xE1 exibido quando houver algum campo inv\xE1lido no formul\xE1rio."),i(),t(254,"pre")(255,"code"),e(256,`<po-page-dynamic-edit
  p-notification-type="warning">
</po-page-dynamic-edit>
`),i()(),t(257,"blockquote")(258,"p"),e(259,"Os valores aceitos s\xE3o 'warning' e 'error'."),i()()()(),t(260,"tr",14)(261,"td",15)(262,"div",16)(263,"span",17),e(264," p-load"),n(265,"br"),i()()(),t(266,"td",18)(267,"code",24),e(268,"string "),i(),t(269,"code",29),e(270," (() => PoPageDynamicEditOptions)"),i()(),t(271,"td",20),e(272,"-"),i(),t(273,"td",21)(274,"p"),e(275,"Fun\xE7\xE3o ou servi\xE7o que ser\xE1 executado na inicializa\xE7\xE3o do componente."),i(),t(276,"p"),e(277,"A propriedade aceita os seguintes tipos:"),i(),t(278,"ul")(279,"li")(280,"code"),e(281,"string"),i(),e(282,": "),t(283,"em"),e(284,"Endpoint"),i(),e(285," usado pelo componente para requisi\xE7\xE3o via "),t(286,"code"),e(287,"POST"),i(),e(288,"."),i(),t(289,"li")(290,"code"),e(291,"function"),i(),e(292,": M\xE9todo que ser\xE1 executado."),i()(),t(293,"p"),e(294,"O retorno desta fun\xE7\xE3o deve ser do tipo "),t(295,"code"),e(296,"PoPageDynamicEditOptions"),i(),e(297,`,
onde o usu\xE1rio poder\xE1 customizar novos campos, breadcrumb, title e actions`),i(),t(298,"p"),e(299,"Por exemplo:"),i(),t(300,"pre")(301,"code"),e(302,`getPageOptions(): PoPageDynamicEditOptions {
return {
  actions:
    { cancel: false, save: 'save/:id', saveNew: 'saveNew' },
  fields: [
    { property: 'idCard', gridColumns: 6 }
  ]
};
}
`),i()(),t(303,"p"),e(304,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),t(305,"code"),e(306,"bind"),i(),e(307,", por exemplo:"),i(),t(308,"pre")(309,"code"),e(310,`[p-load]="onLoadOptions.bind(this)"
`),i()()()(),t(311,"tr",14)(312,"td",15)(313,"div",16)(314,"span",17),e(315," p-load-data"),n(316,"br"),i()()(),t(317,"td",18)(318,"code",30),e(319,"((model: any) => any) "),i(),t(320,"code",31),e(321," ((model: any) => Observable<any>)"),i()(),t(322,"td",20),e(323,"-"),i(),t(324,"td",21)(325,"em")(326,"strong"),e(327,"(opcional)"),i()(),t(328,"p"),e(329,"Fun\xE7\xE3o que ser\xE1 executada ap\xF3s ser realizada a busca dos dados."),i(),t(330,"p"),e(331,"A propriedade aceita os seguintes tipos:"),i(),t(332,"ul")(333,"li")(334,"code"),e(335,"function"),i(),e(336,": M\xE9todo que ser\xE1 executado."),i()(),t(337,"p"),e(338,`Esta fun\xE7\xE3o passa por par\xE2metro o model e deve receb\xEA-lo de volta com as altera\xE7\xF5es.
Tamb\xE9m aceita o retorno de um Observable com o novo model.`),i(),t(339,"p"),e(340,"Por exemplo:"),i(),t(341,"pre")(342,"code"),e(343,`onLoadCustom(model) {
 return { ...model, customField: 'newValue' };
}
`),i()(),t(344,"p"),e(345,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),t(346,"code"),e(347,"bind"),i(),e(348,", por exemplo:"),i(),t(349,"pre")(350,"code"),e(351,`[p-load-data]="onLoadCustom.bind(this)"
`),i()()()(),t(352,"tr",14)(353,"td",15)(354,"div",16)(355,"span",17),e(356," p-service-api"),n(357,"br"),i()()(),t(358,"td",18)(359,"code",24),e(360,"string"),i()(),t(361,"td",20),e(362,"-"),i(),t(363,"td",21)(364,"p"),e(365,"Endpoint usado pelo template para requisi\xE7\xE3o do recurso que ser\xE1 exibido para edi\xE7\xE3o."),i(),t(366,"p"),e(367,"Para as a\xE7\xF5es de "),t(368,"code"),e(369,"save"),i(),e(370," e "),t(371,"code"),e(372,"saveNew"),i(),e(373,`, ser\xE1 feito uma requisi\xE7\xE3o de cria\xE7\xE3o nesse mesmo endpoint passando os valores
preenchidos pelo usu\xE1rio via payload.`),i(),t(374,"blockquote")(375,"p")(376,"code"),e(377,"POST {end-point}"),i()()(),t(378,"pre")(379,"code"),e(380,`<po-page-dynamic-edit
  [p-actions]="{ save: '/', saveNew: 'new' }"
  [p-fields]="[ { property: 'name' }, { property: 'city' } ]"
  p-service="/api/po-samples/v1/people"
  ...>
</po-page-dynamic-edit>
`),i()(),t(381,"p"),e(382,"Resquisi\xE7\xE3o disparada, onde a propriedade "),t(383,"code"),e(384,"name"),i(),e(385," e "),t(386,"code"),e(387,"city"),i(),e(388," foram preenchidas:"),i(),t(389,"pre")(390,"code"),e(391,`POST /api/po-samples/v1/people HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),i()(),t(392,"p"),e(393,"Request payload:"),i(),t(394,"pre")(395,"code"),e(396,`{ "name": "Fulano", "city": "Smallville" }
`),i()(),t(397,"p"),e(398,"Caso queira que o template carregue um recurso j\xE1 existente, deve-se ser inclu\xEDdo um parametro na rota chamado "),t(399,"code"),e(400,"id"),i(),e(401,"."),i(),t(402,"p"),e(403,"Exemplo de configura\xE7\xE3o de rota:"),i(),t(404,"pre")(405,"code"),e(406,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: PersonEditComponent },
  ...
],
`),i()(),t(407,"p"),e(408,"Baseado nisso, na inicializa\xE7\xE3o do template, ser\xE1 disparado uma requisi\xE7\xE3o para buscar o recurso que ser\xE1 editado."),i(),t(409,"blockquote")(410,"p")(411,"code"),e(412,"GET {end-point}/{id}"),i()()(),t(413,"p"),e(414,"Nos m\xE9todos de "),t(415,"code"),e(416,"save"),i(),e(417," e "),t(418,"code"),e(419,"saveNew"),i(),e(420,", ao inv\xE9s de um "),t(421,"code"),e(422,"POST"),i(),e(423,", ser\xE1 disparado um "),t(424,"code"),e(425,"PUT"),i(),e(426,"."),i(),t(427,"p"),e(428,"Resquisi\xE7\xE3o disparada, onde a propriedade "),t(429,"code"),e(430,"name"),i(),e(431," e "),t(432,"code"),e(433,"city"),i(),e(434," foram preenchidas / atualizadas, e o "),t(435,"code"),e(436,"id"),i(),e(437," da url \xE9 2:"),i(),t(438,"pre")(439,"code"),e(440,`PUT /api/po-samples/v1/people/2 HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),i()(),t(441,"p"),e(442,"Request payload:"),i(),t(443,"pre")(444,"code"),e(445,`{ "name": "Fulano", "city": "Metropolis" }
`),i()()()(),t(446,"tr",14)(447,"td",15)(448,"div",16)(449,"span",17),e(450," p-title"),n(451,"br"),i()()(),t(452,"td",18)(453,"code",24),e(454,"string"),i()(),t(455,"td",20),e(456,"-"),i(),t(457,"td",21)(458,"p"),e(459,"T\xEDtulo da p\xE1gina."),i()()()(),t(460,"h3",10),e(461,"M\xE9todos"),i(),t(462,"table",32)(463,"tr",14)(464,"th",33)(465,"div",16)(466,"h4")(467,"span",17),e(468," showAdditionalHelp "),i()()()()(),t(469,"tr",21)(470,"td",21)(471,"p"),e(472,"M\xE9todo que exibe "),t(473,"code"),e(474,"p-helper"),i(),e(475," ou executa a a\xE7\xE3o definida em "),t(476,"code"),e(477,"p-helper{eventOnClick}"),i(),e(478," ou em "),t(479,"code"),e(480,"p-additionalHelp"),i(),e(481,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),t(482,"code"),e(483,"keydown"),i(),e(484,"."),i(),t(485,"pre")(486,"code"),e(487,`import { PoPageDynamicEditModule } from '@po-ui/ng-templates';
...
@ViewChild('dynamicEdit', { static: true }) dynamicEdit: PoPageDynamicEditComponent;

fields: Array<PoPageDynamicEditField> = [
 {
   property: 'name',
   ...
   help: 'Mensagem de ajuda.',
   helper: 'Mensagem de ajuda complementar com o componente po-helper implementado.',
   keydown: this.onKeyDown.bind(this, 'name')
 },
]

onKeyDown(property: string, event: KeyboardEvent): void {
 if (event.code === 'F9') {
   this.dynamicEdit.showAdditionalHelp(property);
 }
}
`),i()()()()(),t(488,"h5")(489,"b"),e(490,"Par\xE2metros"),i()(),t(491,"table",11)(492,"tr",12)(493,"th",13),e(494,"Nome"),i(),t(495,"th",13),e(496,"Tipo"),i(),t(497,"th",13),e(498,"Descri\xE7\xE3o"),i()(),t(499,"tr",14)(500,"td",15),e(501," property"),i(),t(502,"td",18)(503,"code",34),e(504," string "),i()(),t(505,"td",21)(506,"p"),e(507,"Identificador da coluna."),i()()()(),n(508,"br"),t(509,"h3"),e(510,"Interfaces"),i(),t(511,"h4",35)(512,"code",5),e(513,"PoPageDynamicEditActions"),i()(),t(514,"div",2)(515,"p"),e(516,"Interface para as a\xE7\xF5es do componente po-page-dynamic-edit."),i()(),t(517,"h4",10),e(518,"Propriedades"),i(),t(519,"table",11)(520,"tr",12)(521,"th",13),e(522,"Nome"),i(),t(523,"th",13),e(524,"Tipo"),i(),t(525,"th",13),e(526,"Descri\xE7\xE3o"),i()(),t(527,"tr",14)(528,"td",15)(529,"div",16)(530,"span",17),e(531," beforeCancel"),n(532,"br"),i()()(),t(533,"td",18)(534,"code",24),e(535,"string "),i(),t(536,"code",36),e(537," (() => PoPageDynamicEditBeforeCancel)"),i()(),t(538,"td",21)(539,"em")(540,"strong"),e(541,"(opcional)"),i()(),t(542,"p"),e(543,"Rota ou m\xE9todo que ser\xE1 chamado antes de executar a a\xE7\xE3o de cancelamento (cancel)."),i(),t(544,"p"),e(545,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),t(546,"code"),e(547,"PoPageDynamicEditBeforeCancel"),i(),e(548,"."),i(),t(549,"blockquote")(550,"p"),e(551,"A url ser\xE1 chamada via POST"),i()(),t(552,"p"),e(553,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),t(554,"strong"),e(555,"beforeCancel"),i(),e(556,`
ou definir a mensagem no atributo `),t(557,"code"),e(558,"_messages"),i(),e(559,` na resposta da API conforme definido
em `),t(560,"a",37),e(561,"Guia de implementa\xE7\xE3o de APIs"),i()()()(),t(562,"tr",14)(563,"td",15)(564,"div",16)(565,"span",17),e(566," beforeSave"),n(567,"br"),i()()(),t(568,"td",18)(569,"code",24),e(570,"string "),i(),t(571,"code",38),e(572," ((resource: any, id: string) => PoPageDynamicEditBeforeSave)"),i()(),t(573,"td",21)(574,"em")(575,"strong"),e(576,"(opcional)"),i()(),t(577,"p"),e(578,"Rota ou m\xE9todo que ser\xE1 chamado antes de salvar um recurso (save)."),i(),t(579,"p"),e(580,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),t(581,"code"),e(582,"PoPageDynamicEditBeforeSave"),i(),e(583,"."),i(),t(584,"blockquote")(585,"p"),e(586,`A url ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a url ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),t(587,"code"),e(588,"POST {beforeSave}/{key}"),i(),e(589,"."),i()(),t(590,"p"),e(591,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),t(592,"strong"),e(593,"beforeSave"),i(),e(594,`
ou definir a mensagem no atributo `),t(595,"code"),e(596,"_messages"),i(),e(597,` na resposta da API conforme definido
em `),t(598,"a",37),e(599,"Guia de implementa\xE7\xE3o de APIs"),i()()()(),t(600,"tr",14)(601,"td",15)(602,"div",16)(603,"span",17),e(604," beforeSaveNew"),n(605,"br"),i()()(),t(606,"td",18)(607,"code",24),e(608,"string "),i(),t(609,"code",39),e(610," ((resource: any, id: string) => PoPageDynamicEditBeforeSaveNew)"),i()(),t(611,"td",21)(612,"em")(613,"strong"),e(614,"(opcional)"),i()(),t(615,"p"),e(616,"Rota ou m\xE9todo que ser\xE1 chamado antes de executar o evento salvar e abrir novo registro (saveNew)."),i(),t(617,"p"),e(618,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),t(619,"code"),e(620,"PoPageDynamicEditBeforeSaveNew"),i(),e(621,"."),i(),t(622,"blockquote")(623,"p"),e(624,`A URL ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a URL ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),t(625,"code"),e(626,"POST {beforeSave}/{key}"),i(),e(627,"."),i()(),t(628,"p"),e(629,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),t(630,"strong"),e(631,"beforeSaveNew"),i(),e(632,`
ou definir a mensagem no atributo `),t(633,"code"),e(634,"_messages"),i(),e(635,` na resposta da API conforme definido
em `),t(636,"a",37),e(637,"Guia de implementa\xE7\xE3o de APIs"),i()()()(),t(638,"tr",14)(639,"td",15)(640,"div",16)(641,"span",17),e(642," cancel"),n(643,"br"),i()()(),t(644,"td",18)(645,"code",24),e(646,"string "),i(),t(647,"code",22),e(648," boolean "),i(),t(649,"code",40),e(650," Function"),i()(),t(651,"td",21)(652,"em")(653,"strong"),e(654,"(opcional)"),i()(),t(655,"p"),e(656,"Rota de redirecionamento para a\xE7\xE3o de cancelar, caso n\xE3o seja especificada ser\xE1 usado o comando "),t(657,"code"),e(658,"navigator.back()"),i(),e(659,"."),i(),t(660,"blockquote")(661,"p"),e(662,"Se passada uma fun\xE7\xE3o, \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o ou outro comportamento desejado."),i()(),t(663,"blockquote")(664,"p"),e(665,"Caso queira esconder a a\xE7\xE3o deve ser passado o valor "),t(666,"code"),e(667,"false"),i(),e(668,";"),i()(),t(669,"pre")(670,"code"),e(671,`actions = {
  cancel: '/'
};
`),i()()()(),t(672,"tr",14)(673,"td",15)(674,"div",16)(675,"span",17),e(676," save"),n(677,"br"),i()()(),t(678,"td",18)(679,"code",24),e(680,"string "),i(),t(681,"code",41),e(682," ((resource: any, id: string) => void)"),i()(),t(683,"td",21)(684,"em")(685,"strong"),e(686,"(opcional)"),i()(),t(687,"p"),e(688,"Rota de redirecionamento ou m\xE9todo para executar o envio dos dados ao servidor."),i(),t(689,"p"),e(690,"A rota de redirecionamento ser\xE1 executada ap\xF3s a confirma\xE7\xE3o de grava\xE7\xE3o do registro."),i(),t(691,"blockquote")(692,"p"),e(693,"A rota pode conter um par\xE2metro chamando id."),i()(),t(694,"pre")(695,"code"),e(696,`actions = {
  save: 'detail/:id'
};
`),i()(),t(697,"p"),e(698,"Se for passado um m\xE9todo:"),i(),t(699,"ul")(700,"li"),e(701,"receber\xE1 como par\xE2metro na chamada do m\xE9todo o recurso, por exemplo: "),t(702,"code"),e(703,"{ email: 'example@email.com' }"),i(),e(704,"."),i(),t(705,"li"),e(706,`\xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),i()()()(),t(707,"tr",14)(708,"td",15)(709,"div",16)(710,"span",17),e(711," saveNew"),n(712,"br"),i()()(),t(713,"td",18)(714,"code",24),e(715,"string "),i(),t(716,"code",42),e(717," ((resource: any, id?: string) => void)"),i()(),t(718,"td",21)(719,"em")(720,"strong"),e(721,"(opcional)"),i()(),t(722,"p"),e(723,"Rota de redirecionamento ou m\xE9todo para executar o envio dos dados ao servidor."),i(),t(724,"p"),e(725,"A rota de redirecionamento ser\xE1 executada ap\xF3s a confirma\xE7\xE3o de grava\xE7\xE3o do registro."),i(),t(726,"blockquote")(727,"p"),e(728,`Caso tratar-se de um novo registro, ser\xE1 resetado o formul\xE1rio para um novo registro.
Se estiver editando um registro a rota de redirecionamento ser\xE1 utilizada.`),i()(),t(729,"pre")(730,"code"),e(731,`actions = {
  saveNew: 'new'
};
`),i()(),t(732,"p"),e(733,"A rota pode conter um par\xE2metro id."),i(),t(734,"pre")(735,"code"),e(736,`actions = {
  saveNew: 'edit/:id'
};
`),i()(),t(737,"p"),e(738,`Ao informar um m\xE9todo \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),i()()()(),t(739,"h4",35)(740,"code",5),e(741,"PoPageDynamicEditBeforeCancel"),i()(),t(742,"div",2)(743,"p"),e(744,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),t(745,"code"),e(746,"beforeCancel"),i(),e(747,"."),i()(),t(748,"h4",10),e(749,"Propriedades"),i(),t(750,"table",11)(751,"tr",12)(752,"th",13),e(753,"Nome"),i(),t(754,"th",13),e(755,"Tipo"),i(),t(756,"th",13),e(757,"Descri\xE7\xE3o"),i()(),t(758,"tr",14)(759,"td",15)(760,"div",16)(761,"span",17),e(762," allowAction"),n(763,"br"),i()()(),t(764,"td",18)(765,"code",22),e(766,"boolean"),i()(),t(767,"td",21)(768,"em")(769,"strong"),e(770,"(opcional)"),i()(),t(771,"p"),e(772,"Define se deve ou n\xE3o executar a a\xE7\xE3o de cancelamento de edi\xE7\xE3o da p\xE1gina (cancel)"),i()()(),t(773,"tr",14)(774,"td",15)(775,"div",16)(776,"span",17),e(777," newUrl"),n(778,"br"),i()()(),t(779,"td",18)(780,"code",24),e(781,"string"),i()(),t(782,"td",21)(783,"em")(784,"strong"),e(785,"(opcional)"),i()(),t(786,"p"),e(787,"Nova rota para navega\xE7\xE3o que substituir\xE1 a definida anteriormente em "),t(788,"code"),e(789,"cancel"),i(),e(790,"."),i()()()(),t(791,"h4",35)(792,"code",5),e(793,"PoPageDynamicEditBeforeSaveNew"),i()(),t(794,"div",2)(795,"p"),e(796,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),t(797,"code"),e(798,"beforeSaveNew"),i(),e(799,"."),i()(),t(800,"h4",10),e(801,"Propriedades"),i(),t(802,"table",11)(803,"tr",12)(804,"th",13),e(805,"Nome"),i(),t(806,"th",13),e(807,"Tipo"),i(),t(808,"th",13),e(809,"Descri\xE7\xE3o"),i()(),t(810,"tr",14)(811,"td",15)(812,"div",16)(813,"span",17),e(814," allowAction"),n(815,"br"),i()()(),t(816,"td",18)(817,"code",22),e(818,"boolean"),i()(),t(819,"td",21)(820,"em")(821,"strong"),e(822,"(opcional)"),i()(),t(823,"p"),e(824,"Define se deve ou n\xE3o executar a a\xE7\xE3o salvar e novo (saveNew)."),i()()(),t(825,"tr",14)(826,"td",15)(827,"div",16)(828,"span",17),e(829," newUrl"),n(830,"br"),i()()(),t(831,"td",18)(832,"code",24),e(833,"string"),i()(),t(834,"td",21)(835,"em")(836,"strong"),e(837,"(opcional)"),i()(),t(838,"p"),e(839,"Nova rota de redirecionamento, que substituir\xE1 a rota definida anteriormente em "),t(840,"code"),e(841,"saveNew"),i(),e(842,"."),i()()(),t(843,"tr",14)(844,"td",15)(845,"div",16)(846,"span",17),e(847," resource"),n(848,"br"),i()()(),t(849,"td",18)(850,"code",43),e(851,"any"),i()(),t(852,"td",21)(853,"em")(854,"strong"),e(855,"(opcional)"),i()(),t(856,"p"),e(857,"Recurso atualizado."),i(),t(858,"p"),e(859,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto,
no entanto as propriedades que possu\xEDrem `),t(860,"code"),e(861,"key: true"),i(),e(862,` n\xE3o ser\xE3o alteradas.
Por exemplo:`),i(),t(863,"ul")(864,"li")(865,"p"),e(866,"recurso anterior com a propriedade id foi que definida como "),t(867,"em"),e(868,"key"),i(),e(869,":"),i(),t(870,"pre")(871,"code"),e(872,`{ id: 1, name: 'Ane' }
`),i()()(),t(873,"li")(874,"p"),e(875,"recurso retornado no "),t(876,"code"),e(877,"beforeSaveNew"),i(),e(878,":"),i(),t(879,"pre")(880,"code"),e(881,`{ id: 50, age: 23 }
`),i()()(),t(882,"li")(883,"p"),e(884,"Mesclagem do recurso:"),i(),t(885,"pre")(886,"code"),e(887,`{ id: 1, name: 'Ane', age: 23 }
`),i()()()(),t(888,"blockquote")(889,"p"),e(890,"Caso "),t(891,"code"),e(892,"allowAction"),i(),e(893," seja "),t(894,"code"),e(895,"false"),i(),e(896,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (saveNew).`),i()()()()(),t(897,"h4",35)(898,"code",5),e(899,"PoPageDynamicEditBeforeSave"),i()(),t(900,"div",2)(901,"p"),e(902,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),t(903,"code"),e(904,"beforeSave"),i(),e(905,"."),i()(),t(906,"h4",10),e(907,"Propriedades"),i(),t(908,"table",11)(909,"tr",12)(910,"th",13),e(911,"Nome"),i(),t(912,"th",13),e(913,"Tipo"),i(),t(914,"th",13),e(915,"Descri\xE7\xE3o"),i()(),t(916,"tr",14)(917,"td",15)(918,"div",16)(919,"span",17),e(920," allowAction"),n(921,"br"),i()()(),t(922,"td",18)(923,"code",22),e(924,"boolean"),i()(),t(925,"td",21)(926,"em")(927,"strong"),e(928,"(opcional)"),i()(),t(929,"p"),e(930,"Define se deve ou n\xE3o executar a a\xE7\xE3o salvar (save)."),i()()(),t(931,"tr",14)(932,"td",15)(933,"div",16)(934,"span",17),e(935," newUrl"),n(936,"br"),i()()(),t(937,"td",18)(938,"code",24),e(939,"string"),i()(),t(940,"td",21)(941,"em")(942,"strong"),e(943,"(opcional)"),i()(),t(944,"p"),e(945,"Nova rota para salvar o recurso, que substituir\xE1 a rota definida anteriormente em "),t(946,"code"),e(947,"save"),i(),e(948,"."),i()()(),t(949,"tr",14)(950,"td",15)(951,"div",16)(952,"span",17),e(953," resource"),n(954,"br"),i()()(),t(955,"td",18)(956,"code",43),e(957,"any"),i()(),t(958,"td",21)(959,"em")(960,"strong"),e(961,"(opcional)"),i()(),t(962,"p"),e(963,"Recurso atualizado."),i(),t(964,"p"),e(965,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto.
Por exemplo:`),i(),t(966,"ul")(967,"li")(968,"p"),e(969,"recurso anterior:"),i(),t(970,"pre")(971,"code"),e(972,`{ name: 'Ane' }
`),i()()(),t(973,"li")(974,"p"),e(975,"recurso retornado no "),t(976,"code"),e(977,"beforeSave"),i(),e(978,":"),i(),t(979,"pre")(980,"code"),e(981,`{ age: 23 }
`),i()()(),t(982,"li")(983,"p"),e(984,"Mesclagem do recurso:"),i(),t(985,"pre")(986,"code"),e(987,`{ name: 'Ane', age: 23 }
`),i()()()(),t(988,"blockquote")(989,"p"),e(990,"Caso "),t(991,"code"),e(992,"allowAction"),i(),e(993," seja "),t(994,"code"),e(995,"false"),i(),e(996,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (save).`),i()()()()(),t(997,"h4",35)(998,"code",5),e(999,"PoPageDynamicEditField"),i()(),t(1e3,"div",2)(1001,"p"),e(1002,"Interface dos fields usados para compor o template "),t(1003,"code"),e(1004,"po-page-dynamic-edit"),i(),e(1005,`.
Herda as defini\xE7\xF5es da interface
`),t(1006,"a",44),e(1007,"PoDynamicFormField"),i(),e(1008,"."),i()(),t(1009,"h4",10),e(1010,"Propriedades"),i(),t(1011,"table",11)(1012,"tr",12)(1013,"th",13),e(1014,"Nome"),i(),t(1015,"th",13),e(1016,"Tipo"),i(),t(1017,"th",13),e(1018,"Descri\xE7\xE3o"),i()(),t(1019,"tr",14)(1020,"td",15)(1021,"div",16)(1022,"span",17),e(1023," duplicate"),n(1024,"br"),i()()(),t(1025,"td",18)(1026,"code",22),e(1027,"boolean"),i()(),t(1028,"td",21)(1029,"em")(1030,"strong"),e(1031,"(opcional)"),i()(),t(1032,"p"),e(1033,"Indica se o campo ser\xE1 duplicado caso seja executada a a\xE7\xE3o de duplica\xE7\xE3o."),i()()()(),t(1034,"h4",35)(1035,"code",5),e(1036,"PoPageDynamicEditLiterals"),i()(),t(1037,"div",2)(1038,"p"),e(1039,"Interface para defini\xE7\xE3o das literais usadas no "),t(1040,"code"),e(1041,"po-page-dynamic-edit"),i(),e(1042,"."),i()(),t(1043,"h4",10),e(1044,"Propriedades"),i(),t(1045,"table",11)(1046,"tr",12)(1047,"th",13),e(1048,"Nome"),i(),t(1049,"th",13),e(1050,"Tipo"),i(),t(1051,"th",13),e(1052,"Descri\xE7\xE3o"),i()(),t(1053,"tr",14)(1054,"td",15)(1055,"div",16)(1056,"span",17),e(1057," cancelConfirmMessage"),n(1058,"br"),i()()(),t(1059,"td",18)(1060,"code",24),e(1061,"string"),i()(),t(1062,"td",21)(1063,"em")(1064,"strong"),e(1065,"(opcional)"),i()(),t(1066,"p"),e(1067,"Texto exibido na mensagem de cancelamento da inclus\xE3o/edi\xE7\xE3o."),i()()(),t(1068,"tr",14)(1069,"td",15)(1070,"div",16)(1071,"span",17),e(1072," detailActionNew"),n(1073,"br"),i()()(),t(1074,"td",18)(1075,"code",24),e(1076,"string"),i()(),t(1077,"td",21)(1078,"em")(1079,"strong"),e(1080,"(opcional)"),i()(),t(1081,"p"),e(1082,"R\xF3tulo exibido no bot\xE3o "),t(1083,"code"),e(1084,"Novo"),i(),e(1085,"."),i()()(),t(1086,"tr",14)(1087,"td",15)(1088,"div",16)(1089,"span",17),e(1090," pageActionCancel"),n(1091,"br"),i()()(),t(1092,"td",18)(1093,"code",24),e(1094,"string"),i()(),t(1095,"td",21)(1096,"em")(1097,"strong"),e(1098,"(opcional)"),i()(),t(1099,"p"),e(1100,"R\xF3tulo exibido no bot\xE3o "),t(1101,"code"),e(1102,"Cancelar"),i(),e(1103,"."),i()()(),t(1104,"tr",14)(1105,"td",15)(1106,"div",16)(1107,"span",17),e(1108," pageActionSave"),n(1109,"br"),i()()(),t(1110,"td",18)(1111,"code",24),e(1112,"string"),i()(),t(1113,"td",21)(1114,"em")(1115,"strong"),e(1116,"(opcional)"),i()(),t(1117,"p"),e(1118,"R\xF3tulo exibido no bot\xE3o "),t(1119,"code"),e(1120,"Salvar"),i(),e(1121,"."),i()()(),t(1122,"tr",14)(1123,"td",15)(1124,"div",16)(1125,"span",17),e(1126," pageActionSaveNew"),n(1127,"br"),i()()(),t(1128,"td",18)(1129,"code",24),e(1130,"string"),i()(),t(1131,"td",21)(1132,"em")(1133,"strong"),e(1134,"(opcional)"),i()(),t(1135,"p"),e(1136,"R\xF3tulo exibido no bot\xE3o "),t(1137,"code"),e(1138,"Salvar e novo"),i(),e(1139,"."),i()()(),t(1140,"tr",14)(1141,"td",15)(1142,"div",16)(1143,"span",17),e(1144," registerNotFound"),n(1145,"br"),i()()(),t(1146,"td",18)(1147,"code",24),e(1148,"string"),i()(),t(1149,"td",21)(1150,"em")(1151,"strong"),e(1152,"(opcional)"),i()(),t(1153,"p"),e(1154,"Texto exibido para resgistro n\xE3o encontrado."),i()()(),t(1155,"tr",14)(1156,"td",15)(1157,"div",16)(1158,"span",17),e(1159," saveNotificationError"),n(1160,"br"),i()()(),t(1161,"td",18)(1162,"code",24),e(1163,"string"),i()(),t(1164,"td",21)(1165,"em")(1166,"strong"),e(1167,"(opcional)"),i()(),t(1168,"p"),e(1169,"Texto exibido para ocorr\xEAncia de alguma inconsist\xEAncia ao salvar."),i()()(),t(1170,"tr",14)(1171,"td",15)(1172,"div",16)(1173,"span",17),e(1174," saveNotificationSuccessSave"),n(1175,"br"),i()()(),t(1176,"td",18)(1177,"code",24),e(1178,"string"),i()(),t(1179,"td",21)(1180,"em")(1181,"strong"),e(1182,"(opcional)"),i()(),t(1183,"p"),e(1184,"Texto exibido para recurso salvo com sucesso."),i()()(),t(1185,"tr",14)(1186,"td",15)(1187,"div",16)(1188,"span",17),e(1189," saveNotificationSuccessUpdate"),n(1190,"br"),i()()(),t(1191,"td",18)(1192,"code",24),e(1193,"string"),i()(),t(1194,"td",21)(1195,"em")(1196,"strong"),e(1197,"(opcional)"),i()(),t(1198,"p"),e(1199,"Texto exibido para recurso atualizado com sucesso."),i()()(),t(1200,"tr",14)(1201,"td",15)(1202,"div",16)(1203,"span",17),e(1204," saveNotificationWarning"),n(1205,"br"),i()()(),t(1206,"td",18)(1207,"code",24),e(1208,"string"),i()(),t(1209,"td",21)(1210,"em")(1211,"strong"),e(1212,"(opcional)"),i()(),t(1213,"p"),e(1214,"Texto exibido para adivert\xEAncia de formul\xE1rio preenchido de forma incorreta."),i()()()(),t(1215,"h4",35)(1216,"code",5),e(1217,"PoPageDynamicEditMetadata"),i()(),t(1218,"div",2)(1219,"p"),e(1220,"Interface para as propriedades de uma p\xE1gina din\xE2mica. "),n(1221,"a",45),i()(),t(1222,"h4",10),e(1223,"Propriedades"),i(),t(1224,"table",11)(1225,"tr",12)(1226,"th",13),e(1227,"Nome"),i(),t(1228,"th",13),e(1229,"Tipo"),i(),t(1230,"th",13),e(1231,"Descri\xE7\xE3o"),i()(),t(1232,"tr",14)(1233,"td",15)(1234,"div",16)(1235,"span",17),e(1236," actions"),n(1237,"br"),i()()(),t(1238,"td",18)(1239,"code",19),e(1240,"PoPageDynamicEditActions"),i()(),t(1241,"td",21)(1242,"em")(1243,"strong"),e(1244,"(opcional)"),i()(),t(1245,"p"),e(1246,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar na p\xE1gina atrav\xE9s de bot\xF5es."),i()()(),t(1247,"tr",14)(1248,"td",15)(1249,"div",16)(1250,"span",17),e(1251," autoRouter"),n(1252,"br"),i()()(),t(1253,"td",18)(1254,"code",22),e(1255,"boolean"),i()(),t(1256,"td",21)(1257,"em")(1258,"strong"),e(1259,"(opcional)"),i()(),t(1260,"p"),e(1261,"Cria automaticamente as rotas de edi\xE7\xE3o (novo/duplicate) e detalhes caso sejam definidas a\xE7\xF5es na propriedade "),t(1262,"code"),e(1263,"p-actions"),i()(),t(1264,"p"),e(1265,"As rotas criadas ser\xE3o baseadas na propriedade "),t(1266,"code"),e(1267,"p-actions"),i(),e(1268,"."),i(),t(1269,"blockquote")(1270,"p"),e(1271,"Para o correto funcionamento n\xE3o pode haver nenhuma rota coringa ("),t(1272,"code"),e(1273,"**"),i(),e(1274,") especificada."),i()()()(),t(1275,"tr",14)(1276,"td",15)(1277,"div",16)(1278,"span",17),e(1279," breadcrumb"),n(1280,"br"),i()()(),t(1281,"td",18)(1282,"code",23),e(1283,"PoBreadcrumb"),i()(),t(1284,"td",21)(1285,"em")(1286,"strong"),e(1287,"(opcional)"),i()(),t(1288,"p"),e(1289,"Objeto com propriedades do breadcrumb."),i()()(),t(1290,"tr",14)(1291,"td",15)(1292,"div",16)(1293,"span",17),e(1294," fields"),n(1295,"br"),i()()(),t(1296,"td",18)(1297,"code",26),e(1298,"Array<PoPageDynamicEditField>"),i()(),t(1299,"td",21)(1300,"em")(1301,"strong"),e(1302,"(opcional)"),i()(),t(1303,"p"),e(1304,"Lista dos campos usados."),i()()(),t(1305,"tr",14)(1306,"td",15)(1307,"div",16)(1308,"span",17),e(1309," title"),n(1310,"br"),i()()(),t(1311,"td",18)(1312,"code",24),e(1313,"string"),i()(),t(1314,"td",21)(1315,"em")(1316,"strong"),e(1317,"(opcional)"),i()(),t(1318,"p"),e(1319,"T\xEDtulo da p\xE1gina."),i()()(),t(1320,"tr",14)(1321,"td",15)(1322,"div",16)(1323,"span",17),e(1324," version"),n(1325,"br"),i()()(),t(1326,"td",18)(1327,"code",46),e(1328,"number"),i()(),t(1329,"td",21)(1330,"p"),e(1331,"Vers\xE3o do metadado devolvido pelo backend."),i()()()(),t(1332,"h4",35)(1333,"code",5),e(1334,"PoPageDynamicEditOptions"),i()(),t(1335,"div",2)(1336,"p"),e(1337,"Interface para as propriedades de uma p\xE1gina din\xE2mica."),i()(),t(1338,"h4",10),e(1339,"Propriedades"),i(),t(1340,"table",11)(1341,"tr",12)(1342,"th",13),e(1343,"Nome"),i(),t(1344,"th",13),e(1345,"Tipo"),i(),t(1346,"th",13),e(1347,"Descri\xE7\xE3o"),i()(),t(1348,"tr",14)(1349,"td",15)(1350,"div",16)(1351,"span",17),e(1352," actions"),n(1353,"br"),i()()(),t(1354,"td",18)(1355,"code",19),e(1356,"PoPageDynamicEditActions"),i()(),t(1357,"td",21)(1358,"em")(1359,"strong"),e(1360,"(opcional)"),i()(),t(1361,"p"),e(1362,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar na p\xE1gina atrav\xE9s de bot\xF5es."),i()()(),t(1363,"tr",14)(1364,"td",15)(1365,"div",16)(1366,"span",17),e(1367," breadcrumb"),n(1368,"br"),i()()(),t(1369,"td",18)(1370,"code",23),e(1371,"PoBreadcrumb"),i()(),t(1372,"td",21)(1373,"em")(1374,"strong"),e(1375,"(opcional)"),i()(),t(1376,"p"),e(1377,"Objeto com propriedades do breadcrumb."),i()()(),t(1378,"tr",14)(1379,"td",15)(1380,"div",16)(1381,"span",17),e(1382," fields"),n(1383,"br"),i()()(),t(1384,"td",18)(1385,"code",26),e(1386,"Array<PoPageDynamicEditField>"),i()(),t(1387,"td",21)(1388,"em")(1389,"strong"),e(1390,"(opcional)"),i()(),t(1391,"p"),e(1392,"Lista dos campos usados."),i()()(),t(1393,"tr",14)(1394,"td",15)(1395,"div",16)(1396,"span",17),e(1397," title"),n(1398,"br"),i()()(),t(1399,"td",18)(1400,"code",24),e(1401,"string"),i()(),t(1402,"td",21)(1403,"em")(1404,"strong"),e(1405,"(opcional)"),i()(),t(1406,"p"),e(1407,"T\xEDtulo da p\xE1gina."),i()()()()())},dependencies:[g],encapsulation:2})}return a})();var R=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||a)(C(k),C(F))};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:7,vars:4,consts:[["p-title","Page Dynamic Edit",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,d){o&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),s("p-click",function(){return d.changeTab("doc")}),n(3,"sample-po-page-dynamic-edit-doc"),i(),t(4,"po-tab",3),s("p-click",function(){return d.changeTab("web")}),n(5,"sample-po-page-dynamic-edit-basic-view")(6,"sample-po-page-dynamic-edit-user-view"),i()()()),o&2&&(l("p-actions",d.actions),p(2),l("p-active",d.activeTab==="doc"),p(2),l("p-hide",d.hidePoWebSample)("p-active",d.activeTab==="web"))},dependencies:[N,x,S,O,z,_],encapsulation:2})}return a})();var te=[{path:"",component:R}],U=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=y({type:a});static \u0275inj=v({imports:[D.forChild(te),D]})}return a})();var fe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=y({type:a});static \u0275inj=v({imports:[M,U]})}return a})();export{fe as DocPoPageDynamicEditModule};
