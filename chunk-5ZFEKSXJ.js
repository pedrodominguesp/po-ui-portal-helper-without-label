import{o as b,p as W}from"./chunk-J2OK2TAB.js";import{Jb as z,Ya as C,lb as J,sa as j,v as M,xb as x,yb as S}from"./chunk-ER3PPZVH.js";import{$a as U,Ca as y,Eb as h,Ka as n,L as D,La as t,M as P,Ma as i,P as g,Qa as w,Ra as c,T as q,U as k,Wc as K,Yc as X,Za as R,_a as H,_c as L,ab as v,bb as e,db as f,ia as d,ja as O,lb as A,mb as _,nb as E,pa as s,qa as T,za as p}from"./chunk-TTO7B3JZ.js";var re=()=>({property:"name",required:!0,showRequired:!0}),le=o=>[o],G=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-basic"]],standalone:!1,decls:1,vars:4,consts:[[3,"p-fields"]],template:function(a,l){a&1&&i(0,"po-dynamic-form",0),a&2&&p("p-fields",E(2,le,_(1,re)))},dependencies:[C],encapsulation:2})}return o})();var de=o=>({"docs-sample-code-tabs":o}),Q=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form Basic"),t(),n(4,"a",2),c("click",function(){return l.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-dynamic-form [p-fields]="[{ property: 'name', required: true, showRequired: true }]"> </po-dynamic-form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-form-basic',
  templateUrl: './sample-po-dynamic-form-basic.component.html',
  standalone: false
})
export class SamplePoDynamicFormBasicComponent {}
`),t()()()()(),n(21,"div",10),i(22,"sample-po-dynamic-form-basic"),t(),i(23,"hr")),a&2&&(d(5),y("po-icon "+l.sampleCodeButtonIcon),d(),f(" ",l.sampleCodeButtonLabel,""),d(),p("ngClass",E(4,de,l.hideSampleCodeTabs)))},dependencies:[h,b,x,S,G],encapsulation:2})}return o})();var I=(()=>{class o{getCity(r){switch(r){case 1:return[{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return[{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return[{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return[{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return[]}getUserDocument(r){let a={property:"cpf",visible:!0},l={property:"cnpj",visible:!0};return{fields:[r.isJuridicPerson?l:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=D({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Z=(()=>{class o{poNotification=g(j);registerService=g(I);person={};validateFields=["state"];fields=[{property:"name",divider:"PERSONAL DATA",required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:!0,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password"},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:!0},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:!0},{property:"email",divider:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:!0,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",divider:"Work data",range:!0,gridColumns:5,gridSmColumns:12},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",divider:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:!0,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:!0},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:!0,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:!0},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:!0,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:!0},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:z.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:!0,url:"https://po-sample-api.onrender.com/v1/uploads/addFile"}];ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:!1,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"}}onChangeFields(r){return{value:{city:void 0},fields:[{property:"city",gridColumns:6,options:this.registerService.getCity(r.value.state),disabled:!1}]}}onLoadFields(r){return this.registerService.getUserDocument(r)}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-register"]],standalone:!1,features:[A([I])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,l){if(a&1){let m=w();i(0,"po-dynamic-form",1,0)(2,"br"),n(3,"div",2)(4,"po-button",3),c("p-click",function(){q(m);let N=v(1);return l.poNotification.success("Data saved successfully!"),k(N.form.reset())}),t()()}if(a&2){let m=v(1);p("p-fields",l.fields)("p-load",l.onLoadFields.bind(l))("p-validate",l.onChangeFields.bind(l))("p-validate-fields",l.validateFields)("p-value",l.person),d(4),p("p-disabled",m==null?null:m.form.invalid)}},dependencies:[M,C],encapsulation:2})}return o})();var ce=o=>({"docs-sample-code-tabs":o}),$=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-register-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form - Register"),t(),n(4,"a",2),c("click",function(){return l.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.html"),t(),n(13,"pre",7),e(14,`<po-dynamic-form
  #dynamicForm
  p-auto-focus="name"
  [p-fields]="fields"
  [p-load]="onLoadFields.bind(this)"
  [p-validate]="this.onChangeFields.bind(this)"
  [p-validate-fields]="validateFields"
  [p-value]="person"
>
</po-dynamic-form>

<br />

<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Save"
    [p-disabled]="dynamicForm?.form.invalid"
    (p-click)="poNotification.success('Data saved successfully!'); dynamicForm.form.reset()"
  >
  </po-button>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';

import {
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
  ForceBooleanComponentEnum
} from '@po-ui/ng-components';
import { PoDynamicFormRegisterService } from './sample-po-dynamic-form-register.service';

@Component({
  selector: 'sample-po-dynamic-form-register',
  templateUrl: './sample-po-dynamic-form-register.component.html',
  providers: [PoDynamicFormRegisterService],
  standalone: false
})
export class SamplePoDynamicFormRegisterComponent implements OnInit {
  poNotification = inject(PoNotificationService);
  private registerService = inject(PoDynamicFormRegisterService);

  person = {};
  validateFields: Array<string> = ['state'];

  fields: Array<PoDynamicFormField> = [
    {
      property: 'name',
      divider: 'PERSONAL DATA',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Type your name'
    },
    {
      property: 'birthday',
      label: 'Date of birth',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2010-01-01',
      errorMessage: 'The date must be before the year 2010.',
      order: -1
    },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'genre', gridColumns: 6, gridSmColumns: 12, options: ['Male', 'Female', 'Other'], order: 2 },
    {
      property: 'shortDescription',
      label: 'Short Description',
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 5,
      placeholder: 'Type short description'
    },
    {
      property: 'secretKey',
      label: 'Secret Key',
      gridColumns: 6,
      secret: true,
      pattern: '[a-zA]{5}[Z0-9]{3}',
      errorMessage: 'At least 5 alphabetic and 3 numeric characters are required.',
      placeholder: 'Type your password'
    },
    {
      property: 'rememberSecretKey',
      label: 'Remember Secret Key',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'yes',
      booleanFalse: 'no',
      formatModel: true
    },
    {
      property: 'status',
      label: 'Status',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'Active',
      booleanFalse: 'Inactive',
      formatModel: true
    },
    { property: 'email', divider: 'CONTACTS', gridColumns: 6, icon: 'an an-envelope' },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6 },
    { property: 'address', gridColumns: 6 },
    {
      property: 'addressNumber',
      label: 'Address number',
      type: 'number',
      gridColumns: 6,
      maxValue: 10000,
      errorMessage: 'Invalid number.'
    },
    {
      property: 'state',
      gridColumns: 6,
      options: [
        { state: 'Santa Catarina', code: 1 },
        { state: 'S\xE3o Paulo', code: 2 },
        { state: 'Rio de Janeiro', code: 3 },
        { state: 'Minas Gerais', code: 4 }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    { property: 'city', disabled: true, gridColumns: 6, fieldValue: 'code', fieldLabel: 'city' },
    {
      property: 'vacation',
      type: 'date',
      divider: 'Work data',
      range: true,
      gridColumns: 5,
      gridSmColumns: 12
    },
    {
      property: 'entryTime',
      label: 'Entry time',
      type: 'time',
      gridColumns: 2,
      gridSmColumns: 6
    },
    { property: 'exitTime', label: 'Exit time', type: 'time', gridColumns: 2, gridSmColumns: 6 },
    {
      property: 'wage',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 12,
      decimalsLength: 2,
      thousandMaxlength: 7,
      icon: 'an an-currency-circle-dollar'
    },
    {
      property: 'hobbies',
      divider: 'MORE INFO',
      gridColumns: 6,
      gridSmColumns: 12,
      optional: true,
      options: ['Soccer', 'Basketball', 'Bike', 'Yoga', 'Travel', 'Run'],
      optionsMulti: true
    },
    {
      property: 'favoriteHero',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Favorite hero',
      optional: true,
      searchService: 'https://po-sample-api.onrender.com/v1/heroes',
      columns: [
        { property: 'nickname', label: 'Hero' },
        { property: 'label', label: 'Name' }
      ],
      format: ['id', 'nickname'],
      fieldLabel: 'nickname',
      fieldValue: 'email'
    },
    {
      property: 'partner',
      gridColumns: 6,
      gridSmColumns: 12,
      optionsService: 'https://po-sample-api.onrender.com/v1/people',
      fieldLabel: 'name',
      fieldValue: 'id',
      optional: true
    },
    {
      property: 'videogame',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Video game console',
      optional: true,
      fieldValue: 'code',
      fieldLabel: 'console',
      options: [
        { console: 'Nintendo Wii U', code: 'NWU' },
        { console: 'Playstation 4', code: 'PS4' },
        { console: 'Xbox One', code: 'XONE' },
        { console: 'Nintendo Switch', code: 'NSW' },
        { console: 'Playstation 5', code: 'PS5' },
        { console: 'Xbox Series S|X', code: 'XSSX' }
      ],
      optionsMulti: true
    },
    {
      property: 'agree',
      gridColumns: 12,
      label: 'Do you agree?',
      type: 'boolean',
      forceBooleanComponentType: ForceBooleanComponentEnum.checkbox
    },
    {
      property: 'image',
      type: 'upload',
      gridColumns: 12,
      gridSmColumns: 12,
      label: 'Upload your background',
      optional: true,
      url: 'https://po-sample-api.onrender.com/v1/uploads/addFile'
    }
  ];

  ngOnInit() {
    this.person = {
      name: 'Tony Stark',
      birthday: '1970-05-29',
      isJuridicPerson: false,
      videogame: ['PS4', 'NSW', 'XSSX'],
      rememberSecretKey: 'no',
      status: 'active'
    };
  }

  onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {
    return {
      value: { city: undefined },
      fields: [
        {
          property: 'city',
          gridColumns: 6,
          options: this.registerService.getCity(changedValue.value.state),
          disabled: false
        }
      ]
    };
  }

  onLoadFields(value: any) {
    return this.registerService.getUserDocument(value);
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.service.ts"),t(),n(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoDynamicFormRegisterService {
  getCity(state: number) {
    switch (state) {
      case 1: {
        return [
          { city: 'Palho\xE7a', code: 5 },
          { city: 'Lages', code: 6 },
          { city: 'Balne\xE1rio Cambori\xFA', code: 7 },
          { city: 'Brusque', code: 8 }
        ];
      }
      case 2: {
        return [
          { city: 'S\xE3o Paulo', code: 9 },
          { city: 'Guarulhos', code: 10 },
          { city: 'Campinas', code: 11 },
          { city: 'S\xE3o Bernardo do Campo', code: 12 }
        ];
      }
      case 3: {
        return [
          { city: 'Rio de Janeiro', code: 13 },
          { city: 'S\xE3o Gon\xE7alo', code: 14 },
          { city: 'Duque de Caxias', code: 15 },
          { city: 'Nova Igua\xE7u', code: 16 }
        ];
      }
      case 4: {
        return [
          { city: 'Belo Horizonte', code: 17 },
          { city: 'Uberl\xE2ndia', code: 18 },
          { city: 'Contagem', code: 19 },
          { city: 'Juiz de Fora', code: 20 }
        ];
      }
    }
    return [];
  }

  getUserDocument(value) {
    const cpfField = { property: 'cpf', visible: true };
    const cnpjField = { property: 'cnpj', visible: true };
    const document = value.isJuridicPerson ? cnpjField : cpfField;

    return {
      fields: [document]
    };
  }
}
`),t()()()()(),n(25,"div",10),i(26,"sample-po-dynamic-form-register"),t(),i(27,"hr")),a&2&&(d(5),y("po-icon "+l.sampleCodeButtonIcon),d(),f(" ",l.sampleCodeButtonLabel,""),d(),p("ngClass",E(4,ce,l.hideSampleCodeTabs)))},dependencies:[h,b,x,S,Z],encapsulation:2})}return o})();var B=(()=>{class o{getCity(r){switch(r){case 1:return[{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return[{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return[{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return[{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return[]}getUserDocument(r){let a={property:"cpf",visible:!0},l={property:"cnpj",visible:!0};return{fields:[r.isJuridicPerson?l:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=D({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Ee=["dynamicForm"],ee=(()=>{class o{poNotification=g(j);registerService=g(B);dynamicForm;person={};validateFields=["state"];fields=[{property:"name",container:"PERSONAL DATA",required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1,help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY.",keydown:this.onKeyDown.bind(this,"birthday")},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:!0,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password",help:"Password must include a combination of letters and numbers.",additionalHelpTooltip:"At least 5 alphabetic and 3 numeric characters are required.",keydown:this.onKeyDown.bind(this,"secretKey")},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:!0},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:!0},{property:"email",container:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:!0,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",container:"Work data",range:!0,gridColumns:5,gridSmColumns:12,help:"Enter or select a valid date range.",additionalHelpTooltip:"Ensure the start date is earlier than or equal to the end date.",keydown:this.onKeyDown.bind(this,"vacation")},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",container:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:!0,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:!0,listboxControlPosition:"top"},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:!0,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:!0,listboxControlPosition:"top"},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:!0,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:!0,listboxControlPosition:"top"},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:z.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:!0,url:"https://po-sample-api.onrender.com/v1/uploads/addFile",customAction:{icon:"an an-download",visible:!0},customActionClick:r=>{console.log("Iniciar download para o arquivo:",r.name)}}];ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:!1,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"}}onChangeFields(r){return{value:{city:void 0},fields:[{property:"city",gridColumns:6,options:this.registerService.getCity(r.value.state),disabled:!1}]}}onKeyDown(r,a){a.code==="F9"&&this.dynamicForm.showAdditionalHelp(r)}onLoadFields(r){return this.registerService.getUserDocument(r)}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-container"]],viewQuery:function(a,l){if(a&1&&R(Ee,7),a&2){let m;H(m=U())&&(l.dynamicForm=m.first)}},standalone:!1,features:[A([B])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,l){if(a&1){let m=w();i(0,"po-dynamic-form",1,0)(2,"br"),n(3,"div",2)(4,"po-button",3),c("p-click",function(){q(m);let N=v(1);return l.poNotification.success("Data saved successfully!"),k(N.form.reset())}),t()()}if(a&2){let m=v(1);p("p-fields",l.fields)("p-load",l.onLoadFields.bind(l))("p-validate",l.onChangeFields.bind(l))("p-validate-fields",l.validateFields)("p-value",l.person),d(4),p("p-disabled",m==null?null:m.form.invalid)}},dependencies:[M,C],encapsulation:2})}return o})();var Se=o=>({"docs-sample-code-tabs":o}),te=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-container-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form - Container"),t(),n(4,"a",2),c("click",function(){return l.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.html"),t(),n(13,"pre",7),e(14,`<po-dynamic-form
  #dynamicForm
  p-auto-focus="name"
  [p-fields]="fields"
  [p-load]="onLoadFields.bind(this)"
  [p-validate]="this.onChangeFields.bind(this)"
  [p-validate-fields]="validateFields"
  [p-value]="person"
>
</po-dynamic-form>

<br />

<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Save"
    [p-disabled]="dynamicForm?.form.invalid"
    (p-click)="poNotification.success('Data saved successfully!'); dynamicForm.form.reset()"
  >
  </po-button>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, ViewChild, inject } from '@angular/core';

import {
  ForceBooleanComponentEnum,
  PoDynamicFormComponent,
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
  PoUploadFile
} from '@po-ui/ng-components';
import { PoDynamicFormContainerService } from './sample-po-dynamic-form-container.service';

@Component({
  selector: 'sample-po-dynamic-form-container',
  templateUrl: './sample-po-dynamic-form-container.component.html',
  providers: [PoDynamicFormContainerService],
  standalone: false
})
export class SamplePoDynamicFormContainerComponent implements OnInit {
  poNotification = inject(PoNotificationService);
  private registerService = inject(PoDynamicFormContainerService);

  @ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;
  person = {};
  validateFields: Array<string> = ['state'];

  fields: Array<PoDynamicFormField> = [
    {
      property: 'name',
      container: 'PERSONAL DATA',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Type your name'
    },
    {
      property: 'birthday',
      label: 'Date of birth',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2010-01-01',
      errorMessage: 'The date must be before the year 2010.',
      order: -1,
      help: 'Enter or select a valid date.',
      additionalHelpTooltip: 'Please enter a valid date in the format MMDDYYYY.',
      keydown: this.onKeyDown.bind(this, 'birthday')
    },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'genre', gridColumns: 6, gridSmColumns: 12, options: ['Male', 'Female', 'Other'], order: 2 },
    {
      property: 'shortDescription',
      label: 'Short Description',
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 5,
      placeholder: 'Type short description'
    },
    {
      property: 'secretKey',
      label: 'Secret Key',
      gridColumns: 6,
      secret: true,
      pattern: '[a-zA]{5}[Z0-9]{3}',
      errorMessage: 'At least 5 alphabetic and 3 numeric characters are required.',
      placeholder: 'Type your password',
      help: 'Password must include a combination of letters and numbers.',
      additionalHelpTooltip: 'At least 5 alphabetic and 3 numeric characters are required.',
      keydown: this.onKeyDown.bind(this, 'secretKey')
    },
    {
      property: 'rememberSecretKey',
      label: 'Remember Secret Key',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'yes',
      booleanFalse: 'no',
      formatModel: true
    },
    {
      property: 'status',
      label: 'Status',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'Active',
      booleanFalse: 'Inactive',
      formatModel: true
    },
    { property: 'email', container: 'CONTACTS', gridColumns: 6, icon: 'an an-envelope' },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6 },
    { property: 'address', gridColumns: 6 },
    {
      property: 'addressNumber',
      label: 'Address number',
      type: 'number',
      gridColumns: 6,
      maxValue: 10000,
      errorMessage: 'Invalid number.'
    },
    {
      property: 'state',
      gridColumns: 6,
      options: [
        { state: 'Santa Catarina', code: 1 },
        { state: 'S\xE3o Paulo', code: 2 },
        { state: 'Rio de Janeiro', code: 3 },
        { state: 'Minas Gerais', code: 4 }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    { property: 'city', disabled: true, gridColumns: 6, fieldValue: 'code', fieldLabel: 'city' },
    {
      property: 'vacation',
      type: 'date',
      container: 'Work data',
      range: true,
      gridColumns: 5,
      gridSmColumns: 12,
      help: 'Enter or select a valid date range.',
      additionalHelpTooltip: 'Ensure the start date is earlier than or equal to the end date.',
      keydown: this.onKeyDown.bind(this, 'vacation')
    },
    {
      property: 'entryTime',
      label: 'Entry time',
      type: 'time',
      gridColumns: 2,
      gridSmColumns: 6
    },
    { property: 'exitTime', label: 'Exit time', type: 'time', gridColumns: 2, gridSmColumns: 6 },
    {
      property: 'wage',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 12,
      decimalsLength: 2,
      thousandMaxlength: 7,
      icon: 'an an-currency-circle-dollar'
    },
    {
      property: 'hobbies',
      container: 'MORE INFO',
      gridColumns: 6,
      gridSmColumns: 12,
      optional: true,
      options: ['Soccer', 'Basketball', 'Bike', 'Yoga', 'Travel', 'Run'],
      optionsMulti: true,
      listboxControlPosition: 'top'
    },
    {
      property: 'favoriteHero',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Favorite hero',
      optional: true,
      searchService: 'https://po-sample-api.onrender.com/v1/heroes',
      columns: [
        { property: 'nickname', label: 'Hero' },
        { property: 'label', label: 'Name' }
      ],
      format: ['id', 'nickname'],
      fieldLabel: 'nickname',
      fieldValue: 'email'
    },
    {
      property: 'partner',
      gridColumns: 6,
      gridSmColumns: 12,
      optionsService: 'https://po-sample-api.onrender.com/v1/people',
      fieldLabel: 'name',
      fieldValue: 'id',
      optional: true,
      listboxControlPosition: 'top'
    },
    {
      property: 'videogame',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Video game console',
      optional: true,
      fieldValue: 'code',
      fieldLabel: 'console',
      options: [
        { console: 'Nintendo Wii U', code: 'NWU' },
        { console: 'Playstation 4', code: 'PS4' },
        { console: 'Xbox One', code: 'XONE' },
        { console: 'Nintendo Switch', code: 'NSW' },
        { console: 'Playstation 5', code: 'PS5' },
        { console: 'Xbox Series S|X', code: 'XSSX' }
      ],
      optionsMulti: true,
      listboxControlPosition: 'top'
    },
    {
      property: 'agree',
      gridColumns: 12,
      label: 'Do you agree?',
      type: 'boolean',
      forceBooleanComponentType: ForceBooleanComponentEnum.checkbox
    },
    {
      property: 'image',
      type: 'upload',
      gridColumns: 12,
      gridSmColumns: 12,
      label: 'Upload your background',
      optional: true,
      url: 'https://po-sample-api.onrender.com/v1/uploads/addFile',
      customAction: { icon: 'an an-download', visible: true },
      customActionClick: (file: PoUploadFile) => {
        console.log('Iniciar download para o arquivo:', file.name);
      }
    }
  ];

  ngOnInit() {
    this.person = {
      name: 'Tony Stark',
      birthday: '1970-05-29',
      isJuridicPerson: false,
      videogame: ['PS4', 'NSW', 'XSSX'],
      rememberSecretKey: 'no',
      status: 'active'
    };
  }

  onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {
    return {
      value: { city: undefined },
      fields: [
        {
          property: 'city',
          gridColumns: 6,
          options: this.registerService.getCity(changedValue.value.state),
          disabled: false
        }
      ]
    };
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.dynamicForm.showAdditionalHelp(property);
    }
  }

  onLoadFields(value: any) {
    return this.registerService.getUserDocument(value);
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.service.ts"),t(),n(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoDynamicFormContainerService {
  getCity(state: number) {
    switch (state) {
      case 1: {
        return [
          { city: 'Palho\xE7a', code: 5 },
          { city: 'Lages', code: 6 },
          { city: 'Balne\xE1rio Cambori\xFA', code: 7 },
          { city: 'Brusque', code: 8 }
        ];
      }
      case 2: {
        return [
          { city: 'S\xE3o Paulo', code: 9 },
          { city: 'Guarulhos', code: 10 },
          { city: 'Campinas', code: 11 },
          { city: 'S\xE3o Bernardo do Campo', code: 12 }
        ];
      }
      case 3: {
        return [
          { city: 'Rio de Janeiro', code: 13 },
          { city: 'S\xE3o Gon\xE7alo', code: 14 },
          { city: 'Duque de Caxias', code: 15 },
          { city: 'Nova Igua\xE7u', code: 16 }
        ];
      }
      case 4: {
        return [
          { city: 'Belo Horizonte', code: 17 },
          { city: 'Uberl\xE2ndia', code: 18 },
          { city: 'Contagem', code: 19 },
          { city: 'Juiz de Fora', code: 20 }
        ];
      }
    }
    return [];
  }

  getUserDocument(value) {
    const cpfField = { property: 'cpf', visible: true };
    const cnpjField = { property: 'cnpj', visible: true };
    const document = value.isJuridicPerson ? cnpjField : cpfField;

    return {
      fields: [document]
    };
  }
}
`),t()()()()(),n(25,"div",10),i(26,"sample-po-dynamic-form-container"),t(),i(27,"hr")),a&2&&(d(5),y("po-icon "+l.sampleCodeButtonIcon),d(),f(" ",l.sampleCodeButtonLabel,""),d(),p("ngClass",E(4,Se,l.hideSampleCodeTabs)))},dependencies:[h,b,x,S,ee],encapsulation:2})}return o})();var ne=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-doc"]],standalone:!1,decls:4438,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoDynamicFormField>"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"language-html"],[1,"language-ts"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Function"],["href","documentation/po-dynamic-form#po-dynamic-form-load"],["href","documentation/po-dynamic-form#po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-javascript"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["id","po-dynamic-form-load"],["id","po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type","PoDynamicFormField"],["id","po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(a,l){a&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoDynamicModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2),n(5,"h3",3),e(6,"Componente"),t(),n(7,"h4",4)(8,"code",5),e(9,"PoDynamicFormComponent"),t()(),n(10,"div",2)(11,"p"),e(12,"Componente para cria\xE7\xE3o de formul\xE1rios din\xE2micos a partir de uma lista de objetos."),t(),n(13,"p"),e(14,"Tamb\xE9m \xE9 poss\xEDvel verificar se o formul\xE1rio est\xE1 v\xE1lido e informar valores para a exibi\xE7\xE3o de informa\xE7\xF5es. "),t()(),n(15,"div",6)(16,"h4",7),e(17,"Seletor"),t(),n(18,"pre",8),e(19,`<po-dynamic-form
    p-auto-focus="string"
    p-components-size="string"
    p-fields="Array<PoDynamicFormField>"
    (p-form)="EventEmitter"
    p-group-form="boolean"
    p-load="string | Function"
    p-validate="string | Function"
    p-validate-fields="Array<string>"
    p-validate-on-input="boolean"
    p-value="any" >
</po-dynamic-form>
`),t()(),n(20,"h4",9),e(21,"Propriedades"),t(),n(22,"table",10)(23,"tr",11)(24,"th",12),e(25,"Nome"),t(),n(26,"th",12),e(27,"Tipo"),t(),n(28,"th",12),e(29,"Padr\xE3o"),t(),n(30,"th",12),e(31,"Descri\xE7\xE3o"),t()(),n(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),e(36," p-auto-focus"),i(37,"br"),t()()(),n(38,"td",17)(39,"code",18),e(40,"string"),t()(),n(41,"td",19),e(42,"-"),t(),n(43,"td",20)(44,"em")(45,"strong"),e(46,"(opcional)"),t()(),n(47,"p"),e(48,"Nome da propriedade, atribu\xEDda ao "),n(49,"code"),e(50,"PoDynamicFormField.property"),t(),e(51,", que iniciar\xE1 o campo com foco."),t()()(),n(52,"tr",13)(53,"td",14)(54,"div",15)(55,"span",16),e(56," p-components-size"),i(57,"br"),t()()(),n(58,"td",17)(59,"code",18),e(60,"string"),t()(),n(61,"td",19)(62,"p")(63,"code"),e(64,"medium"),t()()(),n(65,"td",20)(66,"em")(67,"strong"),e(68,"(opcional)"),t()(),n(69,"p"),e(70,"Define o tamanho dos componentes de formul\xE1rio no template:"),t(),n(71,"ul")(72,"li")(73,"code"),e(74,"small"),t(),e(75,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(76,"li")(77,"code"),e(78,"medium"),t(),e(79,": aplica a medida medium de cada componente."),t()(),n(80,"blockquote")(81,"p"),e(82,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(83,"code"),e(84,"medium"),t(),e(85,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(86,"a",21),e(87,"po-theme"),t(),e(88,"."),t()()()(),n(89,"tr",13)(90,"td",14)(91,"div",15)(92,"span",16),e(93," p-fields"),i(94,"br"),t()()(),n(95,"td",17)(96,"code",22),e(97,"Array<PoDynamicFormField>"),t()(),n(98,"td",19)(99,"p")(100,"code"),e(101,"[]"),t()()(),n(102,"td",20)(103,"p"),e(104,"Cole\xE7\xE3o de objetos que implementam a interface "),n(105,"code"),e(106,"PoDynamicFormField"),t(),e(107,`, para defini\xE7\xE3o dos campos que ser\xE3o criados
dinamicamente.`),t(),n(108,"blockquote")(109,"p"),e(110,"Ex: "),n(111,"code"),e(112,"[ { property: 'name' } ]"),t()()(),n(113,"p"),e(114,"Regras de tipagem e cria\xE7\xE3o dos componentes:"),t(),n(115,"ul")(116,"li"),e(117,"Caso o "),n(118,"em"),e(119,"type"),t(),e(120," informado seja "),n(121,"em"),e(122,"boolean"),t(),e(123," o componente criado ser\xE1 o "),n(124,"code"),e(125,"po-switch"),t(),e(126,"."),t(),n(127,"li"),e(128,"Caso o "),n(129,"em"),e(130,"type"),t(),e(131," informado seja "),n(132,"em"),e(133,"currency"),t(),e(134," e n\xE3o seja informado um "),n(135,"em"),e(136,"mask"),t(),e(137," ou "),n(138,"em"),e(139,"pattern"),t(),e(140," o componente criado ser\xE1 o "),n(141,"code"),e(142,"po-decimal"),t(),e(143,`,
caso seja informado um `),n(144,"em"),e(145,"mask"),t(),e(146," ou "),n(147,"em"),e(148,"pattern"),t(),e(149," o componente criado ser\xE1 o "),n(150,"code"),e(151,"po-input"),t(),e(152,"."),t(),n(153,"li"),e(154,"Caso o "),n(155,"em"),e(156,"type"),t(),e(157," informado seja "),n(158,"em"),e(159,"number"),t(),e(160," e n\xE3o seja informado um "),n(161,"em"),e(162,"mask"),t(),e(163," ou "),n(164,"em"),e(165,"pattern"),t(),e(166," o componente criado ser\xE1 o "),n(167,"code"),e(168,"po-number"),t(),e(169,`, caso seja
informado um `),n(170,"em"),e(171,"mask"),t(),e(172," ou "),n(173,"em"),e(174,"pattern"),t(),e(175," o componente criado ser\xE1 o "),n(176,"code"),e(177,"po-input"),t(),e(178,"."),t(),n(179,"li"),e(180,"Caso a lista possua a propriedade "),n(181,"code"),e(182,"options"),t(),e(183," e a mesma possua at\xE9 3 itens o componente criado ser\xE1 o "),n(184,"code"),e(185,"po-radio-group"),t(),e(186,`
ou `),n(187,"code"),e(188,"po-checkbox-group"),t(),e(189," se informar a propriedade "),n(190,"code"),e(191,"optionsMulti"),t(),e(192,"."),t(),n(193,"li"),e(194,"Caso a mesma possua 3 ou mais itens, ser\xE1 criado o componente "),n(195,"code"),e(196,"po-select"),t(),e(197," ou, "),n(198,"code"),e(199,"po-multiselect"),t(),e(200," se a propriedade "),n(201,"code"),e(202,"optionsMulti"),t(),e(203,`
for verdadeira.`),t(),n(204,"li"),e(205,"Caso o "),n(206,"em"),e(207,"type"),t(),e(208," informado seja "),n(209,"em"),e(210,"date"),t(),e(211," ou "),n(212,"em"),e(213,"datetime"),t(),e(214," o componente criado ser\xE1 o "),n(215,"code"),e(216,"po-datepicker"),t(),e(217,"."),t(),n(218,"li"),e(219,"Caso seja informado a propriedade "),n(220,"code"),e(221,"optionsService"),t(),e(222," o componente criado ser\xE1 o "),n(223,"code"),e(224,"po-combo"),t(),e(225,"."),t(),n(226,"li"),e(227,"Caso o "),n(228,"em"),e(229,"type"),t(),e(230," informado seja "),n(231,"em"),e(232,"time"),t(),e(233," o componente criado ser\xE1 um "),n(234,"code"),e(235,"po-input"),t(),e(236," podendo receber um "),n(237,"em"),e(238,"mask"),t(),e(239,` para formatar
o valor exibido, caso n\xE3o seja informado um `),n(240,"em"),e(241,"mask"),t(),e(242," o componente ser\xE1 criado com a m\xE1scara '99:99' por padr\xE3o."),t(),n(243,"li"),e(244,"Caso a lista possua a propriedade "),n(245,"code"),e(246,"rows"),t(),e(247,` e esta seja definida com valor maior ou igual a 3 o componente criado ser\xE1
o `),n(248,"code"),e(249,"po-textarea"),t(),e(250,", caso o valor da propriedade "),n(251,"code"),e(252,"rows"),t(),e(253," seja menor que 3 o componente criado ser\xE1 o "),n(254,"code"),e(255,"po-input"),t(),e(256,"."),t(),n(257,"li"),e(258,"Caso seja informada a propriedade "),n(259,"code"),e(260,"secret"),t(),e(261," o componente criado ser\xE1 o "),n(262,"code"),e(263,"po-password"),t(),e(264,"."),t(),n(265,"li"),e(266,"Caso o "),n(267,"em"),e(268,"type"),t(),e(269," informado seja "),n(270,"em"),e(271,"string"),t(),e(272," o componente criado ser\xE1 o "),n(273,"code"),e(274,"po-input"),t(),e(275,"."),n(276,"blockquote")(277,"p"),e(278,"Ao alterar o valor das "),n(279,"code"),e(280,"properties"),t(),e(281,", visibilidade e/ou agrupamentos via container, os "),n(282,"code"),e(283,"fields"),t(),e(284," que utilizam servi\xE7o podem refazer as chamadas para as API's."),t()()()()()(),n(285,"tr",13)(286,"td",14)(287,"div",23)(288,"span",24),e(289," (p-form)"),i(290,"br"),t()()(),n(291,"td",17)(292,"code",25),e(293,"EventEmitter"),t()(),n(294,"td",19),e(295,"-"),t(),n(296,"td",20)(297,"em")(298,"strong"),e(299,"(opcional)"),t()(),n(300,"p"),e(301,`Na inicializa\xE7\xE3o do componente ser\xE1 repassado o objeto de formul\xE1rio utilizado no componente,
podendo ser utilizado para valida\xE7\xF5es e/ou detec\xE7\xE3o de mudan\xE7a dos valores.`),t(),n(302,"p"),e(303,`Portanto existem duas maneiras de recuperar o formul\xE1rio,
atrav\xE9s de `),n(304,"em"),e(305,"template reference"),t(),e(306," e atrav\xE9s do "),n(307,"em"),e(308,"output"),t(),e(309,", veja os exemplos abaixo:"),t(),n(310,"blockquote")(311,"p")(312,"em"),e(313,"template reference"),t()()(),n(314,"pre")(315,"code",26),e(316,`<po-dynamic-form #dynamicForm>
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.form.invalid">
</po-button>
`),t()(),n(317,"blockquote")(318,"p")(319,"em"),e(320,"Output"),t()()(),n(321,"pre")(322,"code",26),e(323,`...
<po-dynamic-form (p-form)="getForm($event)">
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.invalid">
</po-button>
...
`),t()(),n(324,"pre")(325,"code",27),e(326,`...

export class AppComponent {

  dynamicForm: NgForm;

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

}
`),t()(),n(327,"blockquote")(328,"p"),e(329,"Caso a propriedade "),n(330,"code"),e(331,"p-group-form"),t(),e(332,` for verdadeira n\xE3o ser\xE1 repassado o formul\xE1rio, pois o mesmo utilizar\xE1
o formul\xE1rio pai.`),t()()()(),n(333,"tr",13)(334,"td",14)(335,"div",15)(336,"span",16),e(337," p-group-form"),i(338,"br"),t()()(),n(339,"td",17)(340,"code",28),e(341,"boolean"),t()(),n(342,"td",19),e(343,"-"),t(),n(344,"td",20)(345,"em")(346,"strong"),e(347,"(opcional)"),t()(),n(348,"p"),e(349,"Ao informar esta propriedade, o componente passar\xE1 a utilizar o formul\xE1rio pai para criar os "),n(350,"code"),e(351,"FormControl"),t(),e(352,`
e com isso \xE9 poss\xEDvel recuperar o valor do formul\xE1rio e suas valida\xE7\xF5es a partir do formul\xE1rio pai.`),t(),n(353,"pre")(354,"code",26),e(355,`<form #parentForm="ngForm">

  <po-dynamic-form p-group-form [p-fields]="fields"></po-dynamic-form>

 <po-button p-label="Adicionar" [p-disabled]="parentForm.invalid"></po-button>
</form>
`),t()()()(),n(356,"tr",13)(357,"td",14)(358,"div",15)(359,"span",16),e(360," p-load"),i(361,"br"),t()()(),n(362,"td",17)(363,"code",18),e(364,"string "),t(),n(365,"code",29),e(366," Function"),t()(),n(367,"td",19),e(368,"-"),t(),n(369,"td",20)(370,"em")(371,"strong"),e(372,"(opcional)"),t()(),n(373,"p"),e(374,"Fun\xE7\xE3o ou servi\xE7o que ser\xE1 executado na inicializa\xE7\xE3o do componente."),t(),n(375,"p"),e(376,"A propriedade aceita os seguintes tipos:"),t(),n(377,"ul")(378,"li")(379,"code"),e(380,"string"),t(),e(381,": "),n(382,"em"),e(383,"Endpoint"),t(),e(384," usado pelo componente para requisi\xE7\xE3o via "),n(385,"code"),e(386,"POST"),t(),e(387,"."),t(),n(388,"li")(389,"code"),e(390,"function"),t(),e(391,": M\xE9todo que ser\xE1 executado."),t()(),n(392,"p"),e(393,"Ao ser executado, ir\xE1 receber como par\xE2metro o objeto informado no "),n(394,"code"),e(395,"p-value"),t(),e(396,"."),t(),n(397,"p"),e(398,"O retorno desta fun\xE7\xE3o deve ser do tipo "),n(399,"a",30),e(400,"PoDynamicFormLoad"),t(),e(401,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos, valores e determinar o campo a ser focado.`),t(),n(402,"p"),e(403,"Por exemplo:"),t(),n(404,"pre")(405,"code"),e(406,`onLoadFields(): PoDynamicFormLoad {

  return {
    value: { cpf: undefined },
    fields: [
      { property: 'cpf' }
    ],
    focus: 'cpf'
  };
}
`),t()(),n(407,"p"),e(408,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),n(409,"code"),e(410,"bind"),t(),e(411,", por exemplo:"),t(),n(412,"pre")(413,"code"),e(414,`[p-load]="onLoadFields.bind(this)"
`),t()()()(),n(415,"tr",13)(416,"td",14)(417,"div",15)(418,"span",16),e(419," p-validate"),i(420,"br"),t()()(),n(421,"td",17)(422,"code",18),e(423,"string "),t(),n(424,"code",29),e(425," Function"),t()(),n(426,"td",19),e(427,"-"),t(),n(428,"td",20)(429,"em")(430,"strong"),e(431,"(opcional)"),t()(),n(432,"p"),e(433,"Fun\xE7\xE3o ou servi\xE7o para validar as "),n(434,"strong"),e(435,"mudan\xE7as do formul\xE1rio"),t(),e(436,"."),t(),n(437,"p"),e(438,"A propriedade aceita os seguintes tipos:"),t(),n(439,"ul")(440,"li")(441,"code"),e(442,"string"),t(),e(443,": "),n(444,"em"),e(445,"Endpoint"),t(),e(446," usado pelo componente para requisi\xE7\xE3o via "),n(447,"code"),e(448,"POST"),t(),e(449,"."),t(),n(450,"li")(451,"code"),e(452,"function"),t(),e(453,": M\xE9todo que ser\xE1 executado."),t()(),n(454,"p"),e(455,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e os valores atualizados do formulario, conforme a interface `),n(456,"code"),e(457,"PoDynamicFormFieldChanged"),t()(),n(458,"p"),e(459,"O retorno desta fun\xE7\xE3o deve ser do tipo "),n(460,"a",31),e(461,"PoDynamicFormValidation"),t(),e(462,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos.
Por exemplo:`),t(),n(463,"pre")(464,"code"),e(465,`onChangeFields(changeValue): PoDynamicFormValidation {

if (changeValue.property === 'state') {

  return {
    value: { city: undefined },
    fields: [
      { property: 'city', options: this.getCity(changeValue.value.state) }
    ],
    focus: 'city'
  };
}
`),t()(),n(466,"p"),e(467,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),n(468,"code"),e(469,"bind"),t(),e(470,", por exemplo:"),t(),n(471,"pre")(472,"code"),e(473,`[p-validate]="this.myFunction.bind(this)"
`),t()(),n(474,"blockquote")(475,"p"),e(476,"Se houver uma lista de campos para valida\xE7\xE3o definida em "),n(477,"code"),e(478,"p-validate-fields"),t(),e(479,", a propriedade "),n(480,"code"),e(481,"validate"),t(),e(482," s\xF3 receber\xE1 o disparo para os campos equivalentes."),t()()()(),n(483,"tr",13)(484,"td",14)(485,"div",15)(486,"span",16),e(487," p-validate-fields"),i(488,"br"),t()()(),n(489,"td",17)(490,"code",32),e(491,"Array<string>"),t()(),n(492,"td",19),e(493,"-"),t(),n(494,"td",20)(495,"em")(496,"strong"),e(497,"(opcional)"),t()(),n(498,"p"),e(499,"Lista que define os campos que ir\xE3o disparar o validate do form."),t()()(),n(500,"tr",13)(501,"td",14)(502,"div",15)(503,"span",16),e(504," p-validate-on-input"),i(505,"br"),t()()(),n(506,"td",17)(507,"code",28),e(508,"boolean"),t()(),n(509,"td",19),e(510,"-"),t(),n(511,"td",20)(512,"em")(513,"strong"),e(514,"(opcional)"),t()(),n(515,"p"),e(516,"Ao informar esta propriedade, o componente passar\xE1 a emitir o valor a cada caractere digitado."),t(),n(517,"p"),e(518,"Pode ser aplicado nos seguintes componentes:"),t(),n(519,"ul")(520,"li"),e(521,"po-input"),t(),n(522,"li"),e(523,"po-number"),t(),n(524,"li"),e(525,"po-decimal"),t(),n(526,"li"),e(527,"po-textarea"),t(),n(528,"li"),e(529,"po-password"),t()(),n(530,"p"),e(531,"Deve informar os campos que deseja receber as emiss\xF5es na propriedade "),n(532,"code"),e(533,"p-validate-fields"),t(),e(534,"."),t()()(),n(535,"tr",13)(536,"td",14)(537,"div",15)(538,"span",16),e(539," p-value"),i(540,"br"),t()()(),n(541,"td",17)(542,"code",33),e(543,"any"),t()(),n(544,"td",19),e(545,"-"),t(),n(546,"td",20)(547,"p"),e(548,"Objeto que ser\xE1 utilizado como valor para exibir as informa\xE7\xF5es, ser\xE1 recuperado e preenchido atrav\xE9s do atributo "),n(549,"em"),e(550,"property"),t(),e(551,`
dos objetos contidos na propridade `),n(552,"code"),e(553,"p-fields"),t(),e(554,"."),t(),n(555,"p"),e(556,"Pode iniciar com valor ou apenas com um objeto vazio que ser\xE1 preenchido conforme descrito acima."),t(),n(557,"blockquote")(558,"p"),e(559,"Ex: "),n(560,"code"),e(561,"{ name: 'po' }"),t()()()()()(),n(562,"h3",9),e(563,"M\xE9todos"),t(),n(564,"table",34)(565,"tr",13)(566,"th",35)(567,"div",15)(568,"h4")(569,"span",16),e(570," focus "),t()()()()(),n(571,"tr",20)(572,"td",20)(573,"p"),e(574,"Fun\xE7\xE3o que atribui foco ao campo desejado."),t(),n(575,"p"),e(576,"Para utiliz\xE1-la \xE9 necess\xE1rio capturar a inst\xE2ncia do "),n(577,"code"),e(578,"dynamic form"),t(),e(579,", como por exemplo:"),t(),n(580,"pre")(581,"code",26),e(582,`<po-dynamic-form #dynamicForm [p-fields]="fields"></po-dynamic-form>
`),t()(),n(583,"pre")(584,"code",36),e(585,`import { PoDynamicFormComponent, PoDynamicFormField } from '@po-ui/ng-components';

...

@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
  { property: 'fieldOne' },
  { property: 'fieldTwo' }
];

fieldFocus() {
  this.dynamicForm.focus('fieldTwo');
}
`),t()()()()(),n(586,"h5")(587,"b"),e(588,"Par\xE2metros"),t()(),n(589,"table",10)(590,"tr",11)(591,"th",12),e(592,"Nome"),t(),n(593,"th",12),e(594,"Tipo"),t(),n(595,"th",12),e(596,"Descri\xE7\xE3o"),t()(),n(597,"tr",13)(598,"td",14),e(599," property"),t(),n(600,"td",17)(601,"code",37),e(602," string "),t()(),n(603,"td",20)(604,"p"),e(605,"Nome da propriedade atribu\xEDda ao "),n(606,"code"),e(607,"PoDynamicFormField.property"),t(),e(608,"."),t()()()(),i(609,"br"),n(610,"table",34)(611,"tr",13)(612,"th",35)(613,"div",15)(614,"h4")(615,"span",16),e(616," showAdditionalHelp "),t()()()()(),n(617,"tr",20)(618,"td",20)(619,"p"),e(620,"M\xE9todo que exibe "),n(621,"code"),e(622,"p-helper"),t(),e(623," ou executa a a\xE7\xE3o definida em "),n(624,"code"),e(625,"p-helper{eventOnClick}"),t(),e(626," ou em "),n(627,"code"),e(628,"p-additionalHelp"),t(),e(629,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(630,"code"),e(631,"keydown"),t(),e(632,"."),t(),n(633,"pre")(634,"code"),e(635,`import { PoDynamicModule } from '@po-ui/ng-components';
...
@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
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
   this.dynamicForm.showAdditionalHelp(property);
 }
}
`),t()()()()(),n(636,"h5")(637,"b"),e(638,"Par\xE2metros"),t()(),n(639,"table",10)(640,"tr",11)(641,"th",12),e(642,"Nome"),t(),n(643,"th",12),e(644,"Tipo"),t(),n(645,"th",12),e(646,"Descri\xE7\xE3o"),t()(),n(647,"tr",13)(648,"td",14),e(649," property"),t(),n(650,"td",17)(651,"code",37),e(652," string "),t()(),n(653,"td",20)(654,"p"),e(655,"Identificador da coluna."),t()()()(),i(656,"br"),n(657,"h3"),e(658,"Interfaces"),t(),n(659,"h4",38)(660,"code",5),e(661,"PoDynamicFormField"),t()(),n(662,"div",2)(663,"p"),e(664," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente."),t()(),n(665,"h4",9),e(666,"Propriedades"),t(),n(667,"table",10)(668,"tr",11)(669,"th",12),e(670,"Nome"),t(),n(671,"th",12),e(672,"Tipo"),t(),n(673,"th",12),e(674,"Descri\xE7\xE3o"),t()(),n(675,"tr",13)(676,"td",14)(677,"div",15)(678,"span",16),e(679," additionalHelp"),i(680,"br"),t()()(),n(681,"td",17)(682,"code",29),e(683,"Function"),t()(),n(684,"td",20)(685,"em")(686,"strong"),e(687,"(opcional)"),t()(),n(688,"p"),e(689,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(690,"code"),e(691,"p-help"),t(),e(692,"."),t(),n(693,"blockquote")(694,"p"),e(695,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),t()()()(),n(696,"tr",13)(697,"td",14)(698,"div",15)(699,"span",16),e(700," additionalHelpTooltip"),i(701,"br"),t()()(),n(702,"td",17)(703,"code",18),e(704,"string"),t()(),n(705,"td",20)(706,"em")(707,"strong"),e(708,"(opcional)"),t()(),n(709,"p"),e(710,"Exibe um \xEDcone de ajuda adicional ao "),n(711,"code"),e(712,"p-help"),t(),e(713,`, com o texto desta propriedade no tooltip.
Se o evento `),n(714,"code"),e(715,"p-additional-help"),t(),e(716,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(717,"strong"),e(718,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(719,"blockquote")(720,"p"),e(721,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),t()()()(),n(722,"tr",13)(723,"td",14)(724,"div",15)(725,"span",16),e(726," advancedFilters"),i(727,"br"),t()()(),n(728,"td",17)(729,"code",39),e(730,"Array<PoLookupAdvancedFilter>"),t()(),n(731,"td",20)(732,"em")(733,"strong"),e(734,"(opcional)"),t()(),n(735,"p"),e(736,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),n(737,"blockquote")(738,"p"),e(739,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),n(740,"p"),e(741,"Exemplo de URL com busca avan\xE7ada:"),t(),n(742,"p")(743,"code"),e(744,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),t()(),n(745,"p"),e(746,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),t(),n(747,"p")(748,"code"),e(749,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),t()()()(),n(750,"tr",13)(751,"td",14)(752,"div",15)(753,"span",16),e(754," appendBox"),i(755,"br"),t()()(),n(756,"td",17)(757,"code",28),e(758,"boolean"),t()(),n(759,"td",20)(760,"em")(761,"strong"),e(762,"(opcional)"),t()(),n(763,"p"),e(764,"Define que o "),n(765,"code"),e(766,"listbox"),t(),e(767," e/ou popover ("),n(768,"code"),e(769,"p-helper"),t(),e(770," e/ou "),n(771,"code"),e(772,"p-error-limit"),t(),e(773,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),n(774,"blockquote")(775,"p"),e(776,"Quando utilizado com "),n(777,"code"),e(778,"p-helper"),t(),e(779,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),n(780,"tr",13)(781,"td",14)(782,"div",15)(783,"span",16),e(784," autoHeight"),i(785,"br"),t()()(),n(786,"td",17)(787,"code",28),e(788,"boolean"),t()(),n(789,"td",20)(790,"em")(791,"strong"),e(792,"(opcional)"),t()(),n(793,"p"),e(794,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),t(),n(795,"p")(796,"strong"),e(797,"Componentes compat\xEDveis:"),t(),n(798,"code"),e(799,"po-multiselect"),t(),e(800,", "),n(801,"code"),e(802,"po-lookup"),t(),e(803,"."),t()()(),n(804,"tr",13)(805,"td",14)(806,"div",15)(807,"span",16),e(808," autoUpload"),i(809,"br"),t()()(),n(810,"td",17)(811,"code",28),e(812,"boolean"),t()(),n(813,"td",20)(814,"em")(815,"strong"),e(816,"(opcional)"),t()(),n(817,"p"),e(818,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),n(819,"p")(820,"strong"),e(821,"Componente compat\xEDvel"),t(),e(822,": "),n(823,"code"),e(824,"po-upload"),t()()()(),n(825,"tr",13)(826,"td",14)(827,"div",15)(828,"span",16),e(829," booleanFalse"),i(830,"br"),t()()(),n(831,"td",17)(832,"code",18),e(833,"string"),t()(),n(834,"td",20)(835,"em")(836,"strong"),e(837,"(opcional)"),t()(),n(838,"p"),e(839,"Texto exibido quando o valor do componente for "),n(840,"em"),e(841,"false"),t(),e(842,"."),t()()(),n(843,"tr",13)(844,"td",14)(845,"div",15)(846,"span",16),e(847," booleanTrue"),i(848,"br"),t()()(),n(849,"td",17)(850,"code",18),e(851,"string"),t()(),n(852,"td",20)(853,"em")(854,"strong"),e(855,"(opcional)"),t()(),n(856,"p"),e(857,"Texto exibido quando o valor do componente for "),n(858,"em"),e(859,"true"),t(),e(860,"."),t()()(),n(861,"tr",13)(862,"td",14)(863,"div",15)(864,"span",16),e(865," changeOnEnter"),i(866,"br"),t()()(),n(867,"td",17)(868,"code",28),e(869,"boolean"),t()(),n(870,"td",20)(871,"em")(872,"strong"),e(873,"(opcional)"),t()(),n(874,"p"),e(875,"Indica que o evento "),n(876,"code"),e(877,"p-change"),t(),e(878,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),n(879,"code"),e(880,"po-combo"),t(),e(881,"."),t()()(),n(882,"tr",13)(883,"td",14)(884,"div",15)(885,"span",16),e(886," changeVisibleColumns"),i(887,"br"),t()()(),n(888,"td",17)(889,"code",29),e(890,"Function"),t()(),n(891,"td",20)(892,"em")(893,"strong"),e(894,"(opcional)"),t()(),n(895,"p"),e(896,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),n(897,"p"),e(898,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),n(899,"p")(900,"strong"),e(901,"Componentes compat\xEDveis"),t(),e(902,": "),n(903,"code"),e(904,"po-lookup"),t()()()(),n(905,"tr",13)(906,"td",14)(907,"div",15)(908,"span",16),e(909," clean"),i(910,"br"),t()()(),n(911,"td",17)(912,"code",28),e(913,"boolean"),t()(),n(914,"td",20)(915,"em")(916,"strong"),e(917,"(opcional)"),t()(),n(918,"p"),e(919,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t(),n(920,"p")(921,"strong"),e(922,"Componentes compat\xEDveis:"),t(),n(923,"code"),e(924,"po-datepicker"),t(),e(925,", "),n(926,"code"),e(927,"po-datepicker-range"),t(),e(928,", "),n(929,"code"),e(930,"po-input"),t(),e(931,", "),n(932,"code"),e(933,"po-number"),t(),e(934,", "),n(935,"code"),e(936,"po-decimal"),t(),e(937,", "),n(938,"code"),e(939,"po-combo"),t(),e(940,", "),n(941,"code"),e(942,"po-lookup"),t(),e(943,", "),n(944,"code"),e(945,"po-password"),t()()()(),n(946,"tr",13)(947,"td",14)(948,"div",15)(949,"span",16),e(950," columnRestoreManager"),i(951,"br"),t()()(),n(952,"td",17)(953,"code",29),e(954,"Function"),t()(),n(955,"td",20)(956,"em")(957,"strong"),e(958,"(opcional)"),t()(),n(959,"p"),e(960,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),n(961,"p"),e(962,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),n(963,"p")(964,"strong"),e(965,"Componentes compat\xEDveis"),t(),e(966,": "),n(967,"code"),e(968,"po-lookup"),t()()()(),n(969,"tr",13)(970,"td",14)(971,"div",15)(972,"span",16),e(973," columns"),i(974,"br"),t()()(),n(975,"td",17)(976,"code",40),e(977,"Array<PoLookupColumn> "),t(),n(978,"code",41),e(979," number"),t()(),n(980,"td",20)(981,"em")(982,"strong"),e(983,"(opcional)"),t()(),n(984,"p"),e(985,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),n(986,"code"),e(987,"searchService"),t(),e(988,`,
essa propriedade deve receber um array de objetos que implementam a interface `),n(989,"a",42)(990,"code"),e(991,"PoLookupColumn"),t()(),e(992,"."),t(),n(993,"blockquote")(994,"p"),e(995,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),n(996,"em"),e(997,"label"),t(),e(998," e "),n(999,"em"),e(1e3,"value"),t(),e(1001,` para valores
de tela e do model respectivamente.`),t()(),n(1002,"p")(1003,"strong"),e(1004,"Componentes compat\xEDveis:"),t(),n(1005,"code"),e(1006,"po-radio-group"),t(),e(1007,", "),n(1008,"code"),e(1009,"po-lookup"),t(),e(1010,", "),n(1011,"code"),e(1012,"po-checkbox-group"),t(),e(1013,"."),t()()(),n(1014,"tr",13)(1015,"td",14)(1016,"div",15)(1017,"span",16),e(1018," container"),i(1019,"br"),t()()(),n(1020,"td",17)(1021,"code",18),e(1022,"string"),t()(),n(1023,"td",20)(1024,"em")(1025,"strong"),e(1026,"(opcional)"),t()(),n(1027,"p"),e(1028,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),t(),n(1029,"p"),e(1030,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),t()()(),n(1031,"tr",13)(1032,"td",14)(1033,"div",15)(1034,"span",16),e(1035," customAction"),i(1036,"br"),t()()(),n(1037,"td",17)(1038,"code",43),e(1039,"PoProgressAction"),t()(),n(1040,"td",20)(1041,"em")(1042,"strong"),e(1043,"(opcional)"),t()(),n(1044,"p"),e(1045,"Define uma a\xE7\xE3o personalizada no componente "),n(1046,"code"),e(1047,"po-upload"),t(),e(1048,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),t(),n(1049,"p")(1050,"strong"),e(1051,"Componente compat\xEDvel"),t(),e(1052,": "),n(1053,"code"),e(1054,"po-upload"),t(),e(1055,","),t(),n(1056,"p")(1057,"strong"),e(1058,"Exemplo de configura\xE7\xE3o"),t(),e(1059,":"),t(),n(1060,"pre")(1061,"code",44),e(1062,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),t()()()(),n(1063,"tr",13)(1064,"td",14)(1065,"div",15)(1066,"span",16),e(1067," customActionClick"),i(1068,"br"),t()()(),n(1069,"td",17)(1070,"code",45),e(1071,"(file: PoUploadFile) => void"),t()(),n(1072,"td",20)(1073,"em")(1074,"strong"),e(1075,"(opcional)"),t()(),n(1076,"p"),e(1077,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),n(1078,"code"),e(1079,"p-custom-action"),t(),e(1080,"."),t(),n(1081,"p")(1082,"strong"),e(1083,"Componente compat\xEDvel"),t(),e(1084,": "),n(1085,"code"),e(1086,"po-upload"),t(),e(1087,","),t(),n(1088,"p"),e(1089,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),t(),n(1090,"p")(1091,"strong"),e(1092,"Par\xE2metro do evento"),t(),e(1093,":"),t(),n(1094,"ul")(1095,"li")(1096,"code"),e(1097,"file"),t(),e(1098,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),n(1099,"code"),e(1100,"PoUploadFile"),t(),e(1101," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),t()(),n(1102,"p")(1103,"strong"),e(1104,"Exemplo de uso"),t(),e(1105,":"),t(),n(1106,"pre")(1107,"code",44),e(1108,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),t()()()(),n(1109,"tr",13)(1110,"td",14)(1111,"div",15)(1112,"span",16),e(1113," debounceTime"),i(1114,"br"),t()()(),n(1115,"td",17)(1116,"code",41),e(1117,"number"),t()(),n(1118,"td",20)(1119,"em")(1120,"strong"),e(1121,"(opcional)"),t()(),n(1122,"p"),e(1123,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),n(1124,"code"),e(1125,"p-filter-service"),t(),e(1126,")."),t(),n(1127,"p")(1128,"strong"),e(1129,"Componentes compat\xEDveis:"),t(),n(1130,"code"),e(1131,"po-combo"),t(),e(1132,", "),n(1133,"code"),e(1134,"po-multiselect"),t(),e(1135,"."),t()()(),n(1136,"tr",13)(1137,"td",14)(1138,"div",15)(1139,"span",16),e(1140," decimalsLength"),i(1141,"br"),t()()(),n(1142,"td",17)(1143,"code",41),e(1144,"number"),t()(),n(1145,"td",20)(1146,"em")(1147,"strong"),e(1148,"(opcional)"),t()(),n(1149,"p"),e(1150,"Quantidade m\xE1xima de casas decimais."),t(),n(1151,"blockquote")(1152,"p"),e(1153,"Esta propriedade s\xF3 pode ser utilizada quando o "),n(1154,"code"),e(1155,"type"),t(),e(1156," for "),n(1157,"em"),e(1158,"currency"),t(),e(1159," ou "),n(1160,"em"),e(1161,"decimal"),t(),e(1162,"."),t()()()(),n(1163,"tr",13)(1164,"td",14)(1165,"div",15)(1166,"span",16),e(1167," directory"),i(1168,"br"),t()()(),n(1169,"td",17)(1170,"code",28),e(1171,"boolean"),t()(),n(1172,"td",20)(1173,"em")(1174,"strong"),e(1175,"(opcional)"),t()(),n(1176,"p"),e(1177,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),n(1178,"blockquote")(1179,"p"),e(1180,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),n(1181,"blockquote")(1182,"p"),e(1183,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),n(1184,"strong"),e(1185,"Internet Explorer"),t(),e(1186,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()(),n(1187,"p")(1188,"strong"),e(1189,"Componente compat\xEDvel"),t(),e(1190,": "),n(1191,"code"),e(1192,"po-upload"),t()()()(),n(1193,"tr",13)(1194,"td",14)(1195,"div",15)(1196,"span",16),e(1197," disabled"),i(1198,"br"),t()()(),n(1199,"td",17)(1200,"code",28),e(1201,"boolean"),t()(),n(1202,"td",20)(1203,"em")(1204,"strong"),e(1205,"(opcional)"),t()(),n(1206,"p"),e(1207,"Desabilita o campo caso informar o valor "),n(1208,"em"),e(1209,"true"),t(),e(1210,"."),t()()(),n(1211,"tr",13)(1212,"td",14)(1213,"div",15)(1214,"span",16),e(1215," disabledInitFilter"),i(1216,"br"),t()()(),n(1217,"td",17)(1218,"code",28),e(1219,"boolean"),t()(),n(1220,"td",20)(1221,"em")(1222,"strong"),e(1223,"(opcional)"),t()(),n(1224,"p"),e(1225,"Desabilita o filtro inicial no servi\xE7o do "),n(1226,"code"),e(1227,"po-combo"),t(),e(1228,", que \xE9 executado no primeiro clique no campo."),t()()(),n(1229,"tr",13)(1230,"td",14)(1231,"div",15)(1232,"span",16),e(1233," disabledTabFilter"),i(1234,"br"),t()()(),n(1235,"td",17)(1236,"code",28),e(1237,"boolean"),t()(),n(1238,"td",20)(1239,"em")(1240,"strong"),e(1241,"(opcional)"),t()(),n(1242,"p"),e(1243,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),n(1244,"code"),e(1245,"po-combo"),t(),e(1246,"."),t()()(),n(1247,"tr",13)(1248,"td",14)(1249,"div",15)(1250,"span",16),e(1251," divider"),i(1252,"br"),t()()(),n(1253,"td",17)(1254,"code",18),e(1255,"string"),t()(),n(1256,"td",20)(1257,"em")(1258,"strong"),e(1259,"(opcional)"),t()(),n(1260,"p"),e(1261,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),t()()(),n(1262,"tr",13)(1263,"td",14)(1264,"div",15)(1265,"span",16),e(1266," dragDrop"),i(1267,"br"),t()()(),n(1268,"td",17)(1269,"code",28),e(1270,"boolean"),t()(),n(1271,"td",20)(1272,"em")(1273,"strong"),e(1274,"(opcional)"),t()(),n(1275,"p"),e(1276,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),n(1277,"blockquote")(1278,"p"),e(1279,"Recomendamos utilizar apenas um "),n(1280,"code"),e(1281,"po-upload"),t(),e(1282," com esta funcionalidade por tela."),t()(),n(1283,"p")(1284,"strong"),e(1285,"Componente compat\xEDvel"),t(),e(1286,": "),n(1287,"code"),e(1288,"po-upload"),t()()()(),n(1289,"tr",13)(1290,"td",14)(1291,"div",15)(1292,"span",16),e(1293," dragDropHeight"),i(1294,"br"),t()()(),n(1295,"td",17)(1296,"code",41),e(1297,"number"),t()(),n(1298,"td",20)(1299,"em")(1300,"strong"),e(1301,"(opcional)"),t()(),n(1302,"p"),e(1303,"Define em "),n(1304,"em"),e(1305,"pixels"),t(),e(1306," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),n(1307,"code"),e(1308,"160px"),t(),e(1309,"."),t(),n(1310,"blockquote")(1311,"p"),e(1312,"Esta propriedade funciona somente se a propriedade "),n(1313,"code"),e(1314,"p-drag-drop"),t(),e(1315," estiver habilitada."),t()(),n(1316,"p")(1317,"strong"),e(1318,"Componente compat\xEDvel"),t(),e(1319,": "),n(1320,"code"),e(1321,"po-upload"),t()()()(),n(1322,"tr",13)(1323,"td",14)(1324,"div",15)(1325,"span",16),e(1326," errorAsyncFunction"),i(1327,"br"),t()()(),n(1328,"td",17)(1329,"code",46),e(1330,"(value) => Observable<boolean>"),t()(),n(1331,"td",20)(1332,"em")(1333,"strong"),e(1334,"(opcional)"),t()(),n(1335,"p"),e(1336,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1337,"code"),e(1338,"change"),t(),e(1339," ou "),n(1340,"code"),e(1341,"change-model"),t(),e(1342,", dependendo do valor da propriedade "),n(1343,"code"),e(1344,"triggerMode"),t(),e(1345,"."),t(),n(1346,"blockquote")(1347,"p"),e(1348,"Retorna "),n(1349,"code"),e(1350,"Observable com o valor true"),t(),e(1351," para sinalizar o erro "),n(1352,"code"),e(1353,"false"),t(),e(1354," para indicar que n\xE3o h\xE1 erro."),t()(),n(1355,"p")(1356,"strong"),e(1357,"Componente compat\xEDvel"),t(),e(1358,": "),n(1359,"code"),e(1360,"po-datepicker"),t()()()(),n(1361,"tr",13)(1362,"td",14)(1363,"div",15)(1364,"span",16),e(1365," errorAsyncProperties"),i(1366,"br"),t()()(),n(1367,"td",17)(1368,"code",47),e(1369,"ErrorAsyncProperties"),t()(),n(1370,"td",20)(1371,"em")(1372,"strong"),e(1373,"(opcional)"),t()(),n(1374,"p"),e(1375,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),t(),n(1376,"p")(1377,"strong"),e(1378,"Componentes compat\xEDveis:"),t(),n(1379,"code"),e(1380,"po-input"),t(),e(1381,", "),n(1382,"code"),e(1383,"po-number"),t(),e(1384,", "),n(1385,"code"),e(1386,"po-decimal"),t(),e(1387,", "),n(1388,"code"),e(1389,"po-password"),t(),e(1390,"."),t()()(),n(1391,"tr",13)(1392,"td",14)(1393,"div",15)(1394,"span",16),e(1395," errorLimit"),i(1396,"br"),t()()(),n(1397,"td",17)(1398,"code",28),e(1399,"boolean"),t()(),n(1400,"td",20)(1401,"em")(1402,"strong"),e(1403,"(opcional)"),t()(),n(1404,"p"),e(1405,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(1406,"blockquote")(1407,"p"),e(1408,"Caso essa propriedade seja definida como "),n(1409,"code"),e(1410,"true"),t(),e(1411,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()(),n(1412,"p")(1413,"strong"),e(1414,"Componentes compat\xEDveis:"),t(),n(1415,"code"),e(1416,"po-checkbox-group"),t(),e(1417,", "),n(1418,"code"),e(1419,"po-combo"),t(),e(1420,", "),n(1421,"code"),e(1422,"po-datepicker"),t(),e(1423,", "),n(1424,"code"),e(1425,"po-datepicker-range"),t(),e(1426,", "),n(1427,"code"),e(1428,"po-decimal"),t(),e(1429,", "),n(1430,"code"),e(1431,"po-input"),t(),e(1432,", "),n(1433,"code"),e(1434,"po-lookup"),t(),e(1435,", "),n(1436,"code"),e(1437,"po-multiselect"),t(),e(1438,", "),n(1439,"code"),e(1440,"po-number"),t(),e(1441,", "),n(1442,"code"),e(1443,"po-password"),t(),e(1444,", "),n(1445,"code"),e(1446,"po-radio-group"),t(),e(1447,", "),n(1448,"code"),e(1449,"po-select"),t(),e(1450,", "),n(1451,"code"),e(1452,"po-switch"),t(),e(1453,", "),n(1454,"code"),e(1455,"po-textarea"),t(),e(1456,"."),t()()(),n(1457,"tr",13)(1458,"td",14)(1459,"div",15)(1460,"span",16),e(1461," errorMessage"),i(1462,"br"),t()()(),n(1463,"td",17)(1464,"code",18),e(1465,"string"),t()(),n(1466,"td",20)(1467,"em")(1468,"strong"),e(1469,"(opcional)"),t()(),n(1470,"p"),e(1471,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),t(),n(1472,"p"),e(1473,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),t(),n(1474,"ul")(1475,"li"),e(1476,"pattern;"),t(),n(1477,"li"),e(1478,"minValue;"),t(),n(1479,"li"),e(1480,"maxValue;"),t(),n(1481,"li"),e(1482,"required;"),t()(),n(1483,"blockquote")(1484,"p"),e(1485,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),n(1486,"code"),e(1487,"po-datepicker"),t(),e(1488,", "),n(1489,"code"),e(1490,"po-input"),t(),e(1491,", "),n(1492,"code"),e(1493,"po-number"),t(),e(1494,", "),n(1495,"code"),e(1496,"po-decimal"),t(),e(1497,", "),n(1498,"code"),e(1499,"po-password"),t(),e(1500,`, \xE9 necess\xE1rio que a propriedade
`),n(1501,"code"),e(1502,"requiredFieldErrorMessage"),t(),e(1503," esteja como "),n(1504,"code"),e(1505,"true"),t(),e(1506,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),n(1507,"code"),e(1508,"po-datepicker-range"),t(),e(1509,", "),n(1510,"code"),e(1511,"po-select"),t(),e(1512,", "),n(1513,"code"),e(1514,"po-checkbox-group"),t(),e(1515,", "),n(1516,"code"),e(1517,"po-radio-group"),t(),e(1518,", "),n(1519,"code"),e(1520,"po-multiselect"),t(),e(1521,", "),n(1522,"code"),e(1523,"po-combo"),t(),e(1524,`,
`),n(1525,"code"),e(1526,"po-lookup"),t(),e(1527," e "),n(1528,"code"),e(1529,"po-textarea"),t(),e(1530," n\xE3o \xE9 necess\xE1rio passar a propriedade "),n(1531,"code"),e(1532,"requiredFieldErrorMessage"),t(),e(1533,"."),t()(),n(1534,"p")(1535,"strong"),e(1536,"Componentes compat\xEDveis:"),t(),n(1537,"code"),e(1538,"po-checkbox-group"),t(),e(1539,", "),n(1540,"code"),e(1541,"po-combo"),t(),e(1542,", "),n(1543,"code"),e(1544,"po-datepicker"),t(),e(1545,", "),n(1546,"code"),e(1547,"po-datepicker-range"),t(),e(1548,", "),n(1549,"code"),e(1550,"po-decimal"),t(),e(1551,", "),n(1552,"code"),e(1553,"po-input"),t(),e(1554,", "),n(1555,"code"),e(1556,"po-lookup"),t(),e(1557,", "),n(1558,"code"),e(1559,"po-multiselect"),t(),e(1560,", "),n(1561,"code"),e(1562,"po-number"),t(),e(1563,", "),n(1564,"code"),e(1565,"po-password"),t(),e(1566,", "),n(1567,"code"),e(1568,"po-radio-group"),t(),e(1569,", "),n(1570,"code"),e(1571,"po-select"),t(),e(1572,", "),n(1573,"code"),e(1574,"po-switch"),t(),e(1575,", "),n(1576,"code"),e(1577,"po-textarea"),t(),e(1578,"."),t()()(),n(1579,"tr",13)(1580,"td",14)(1581,"div",15)(1582,"span",16),e(1583," fieldLabel"),i(1584,"br"),t()()(),n(1585,"td",17)(1586,"code",18),e(1587,"string"),t()(),n(1588,"td",20)(1589,"em")(1590,"strong"),e(1591,"(opcional)"),t()(),n(1592,"p"),e(1593,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),t(),n(1594,"p"),e(1595,"O valor padr\xE3o \xE9: "),n(1596,"code"),e(1597,"label"),t(),e(1598,"."),t(),n(1599,"blockquote")(1600,"p"),e(1601,"Esta propriedade pode ser utilizada em conjunto com: "),n(1602,"code"),e(1603,"options"),t(),e(1604,", "),n(1605,"code"),e(1606,"optionsService"),t(),e(1607," e "),n(1608,"code"),e(1609,"searchService"),t(),e(1610,"."),t()()()(),n(1611,"tr",13)(1612,"td",14)(1613,"div",15)(1614,"span",16),e(1615," fieldValue"),i(1616,"br"),t()()(),n(1617,"td",17)(1618,"code",18),e(1619,"string"),t()(),n(1620,"td",20)(1621,"em")(1622,"strong"),e(1623,"(opcional)"),t()(),n(1624,"p"),e(1625,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),t(),n(1626,"p"),e(1627,"O valor padr\xE3o \xE9: "),n(1628,"code"),e(1629,"value"),t(),e(1630,"."),t(),n(1631,"blockquote")(1632,"p"),e(1633,"Esta propriedade pode ser utilizada em conjunto com: "),n(1634,"code"),e(1635,"options"),t(),e(1636,", "),n(1637,"code"),e(1638,"optionsService"),t(),e(1639," e "),n(1640,"code"),e(1641,"searchService"),t(),e(1642,"."),t()()()(),n(1643,"tr",13)(1644,"td",14)(1645,"div",15)(1646,"span",16),e(1647," filterMinlength"),i(1648,"br"),t()()(),n(1649,"td",17)(1650,"code",41),e(1651,"number"),t()(),n(1652,"td",20)(1653,"em")(1654,"strong"),e(1655,"(opcional)"),t()(),n(1656,"p"),e(1657,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),n(1658,"code"),e(1659,"po-combo"),t(),e(1660,"."),t()()(),n(1661,"tr",13)(1662,"td",14)(1663,"div",15)(1664,"span",16),e(1665," filterMode"),i(1666,"br"),t()()(),n(1667,"td",17)(1668,"code",48),e(1669,"PoMultiselectFilterMode"),t()(),n(1670,"td",20)(1671,"em")(1672,"strong"),e(1673,"(opcional)"),t()(),n(1674,"p"),e(1675,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),n(1676,"code"),e(1677,"startsWith"),t(),e(1678,", "),n(1679,"code"),e(1680,"contains"),t(),e(1681," ou "),n(1682,"code"),e(1683,"endsWith"),t(),e(1684,"."),t(),n(1685,"blockquote")(1686,"p"),e(1687,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),t()(),n(1688,"p")(1689,"strong"),e(1690,"Componentes compat\xEDveis:"),t(),n(1691,"code"),e(1692,"po-multiselect"),t(),e(1693,"."),t()()(),n(1694,"tr",13)(1695,"td",14)(1696,"div",15)(1697,"span",16),e(1698," forceBooleanComponentType"),i(1699,"br"),t()()(),n(1700,"td",17)(1701,"code",49),e(1702,"ForceBooleanComponentEnum"),t()(),n(1703,"td",20)(1704,"em")(1705,"strong"),e(1706,"(opcional)"),t()(),n(1707,"p"),e(1708,"Valores aceitos:"),t(),n(1709,"ul")(1710,"li"),e(1711,"ForceBooleanComponentEnum.switch"),t(),n(1712,"li"),e(1713,"ForceBooleanComponentEnum.checkbox"),t()()()(),n(1714,"tr",13)(1715,"td",14)(1716,"div",15)(1717,"span",16),e(1718," forceOptionsComponentType"),i(1719,"br"),t()()(),n(1720,"td",17)(1721,"code",50),e(1722,"ForceOptionComponentEnum"),t()(),n(1723,"td",20)(1724,"em")(1725,"strong"),e(1726,"(opcional)"),t()(),n(1727,"p"),e(1728,"pode ser utilizada em conjunto com a propriedade "),n(1729,"code"),e(1730,"options"),t(),e(1731," for\xE7ando o componente a renderizar um "),n(1732,"code"),e(1733,"po-select"),t(),e(1734," ou "),n(1735,"code"),e(1736,"po-radio-group"),t(),e(1737,"."),t(),n(1738,"p"),e(1739,"Valores aceitos:"),t(),n(1740,"ul")(1741,"li"),e(1742,"ForceOptionComponentEnum.radioGroup"),t(),n(1743,"li"),e(1744,"ForceOptionComponentEnum.select"),t()(),n(1745,"blockquote")(1746,"p"),e(1747,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),n(1748,"code"),e(1749,"optionsMulti"),t(),e(1750," e "),n(1751,"code"),e(1752,"optionsService"),t(),e(1753,"."),t()()()(),n(1754,"tr",13)(1755,"td",14)(1756,"div",15)(1757,"span",16),e(1758," formField"),i(1759,"br"),t()()(),n(1760,"td",17)(1761,"code",18),e(1762,"string"),t()(),n(1763,"td",20)(1764,"em")(1765,"strong"),e(1766,"(opcional)"),t()(),n(1767,"p"),e(1768,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),n(1769,"code"),e(1770,"url"),t(),e(1771,"."),t(),n(1772,"blockquote")(1773,"p"),e(1774,"O valor default \xE9 "),n(1775,"code"),e(1776,"files"),t()()(),n(1777,"p")(1778,"strong"),e(1779,"Componente compat\xEDvel"),t(),e(1780,": "),n(1781,"code"),e(1782,"po-upload"),t()()()(),n(1783,"tr",13)(1784,"td",14)(1785,"div",15)(1786,"span",16),e(1787," format"),i(1788,"br"),t()()(),n(1789,"td",17)(1790,"code",18),e(1791,"string "),t(),n(1792,"code",32),e(1793," Array<string>"),t()(),n(1794,"td",20)(1795,"em")(1796,"strong"),e(1797,"(opcional)"),t()(),n(1798,"p"),e(1799,"Formato de exibi\xE7\xE3o no campo."),t(),n(1800,"p"),e(1801,"Ao utilizar esta propriedade com o "),n(1802,"code"),e(1803,"type"),t(),n(1804,"em"),e(1805,"PoDynamicFieldType.Date"),t(),e(1806," ou "),n(1807,"em"),e(1808,"PoDynamicFieldType.DateTime"),t(),e(1809,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),t(),n(1810,"p"),e(1811,"Valores v\xE1lidos:"),t(),n(1812,"ul")(1813,"li"),e(1814,"dd/mm/yyyy"),t(),n(1815,"li"),e(1816,"mm/dd/yyyy"),t(),n(1817,"li"),e(1818,"yyyy/mm/dd"),t()(),n(1819,"p"),e(1820,"Tamb\xE9m pode-se utilizar em conjunto com "),n(1821,"code"),e(1822,"searchService"),t(),e(1823,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),t()()(),n(1824,"tr",13)(1825,"td",14)(1826,"div",15)(1827,"span",16),e(1828," formatModel"),i(1829,"br"),t()()(),n(1830,"td",17)(1831,"code",28),e(1832,"boolean"),t()(),n(1833,"td",20)(1834,"em")(1835,"strong"),e(1836,"(opcional)"),t()(),n(1837,"p"),e(1838,"Indica se o "),n(1839,"code"),e(1840,"model"),t(),e(1841," receber\xE1 o valor formatado pelas propriedades "),n(1842,"code"),e(1843,"p-label-on"),t(),e(1844," e "),n(1845,"code"),e(1846,"p-label-off"),t(),e(1847,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),t(),n(1848,"p"),e(1849,"O valor padr\xE3o \xE9: "),n(1850,"code"),e(1851,"false"),t(),e(1852,"."),t(),n(1853,"blockquote")(1854,"p"),e(1855,"Esta propriedade est\xE1 disponivel apenas para o "),n(1856,"code"),e(1857,"swicth"),t(),e(1858,"."),t()()()(),n(1859,"tr",13)(1860,"td",14)(1861,"div",15)(1862,"span",16),e(1863," gridColumns"),i(1864,"br"),t()()(),n(1865,"td",17)(1866,"code",41),e(1867,"number"),t()(),n(1868,"td",20)(1869,"em")(1870,"strong"),e(1871,"(opcional)"),t()(),n(1872,"p"),e(1873,"Tamanho de exibi\xE7\xE3o do campo em telas."),t(),n(1874,"p"),e(1875,"Deve ser usado o sistema de "),n(1876,"strong"),e(1877,"grid"),t(),e(1878," do PO (1 ... 12 colunas)."),t(),n(1879,"blockquote")(1880,"p"),e(1881,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),t()()()(),n(1882,"tr",13)(1883,"td",14)(1884,"div",15)(1885,"span",16),e(1886," gridLgColumns"),i(1887,"br"),t()()(),n(1888,"td",17)(1889,"code",41),e(1890,"number"),t()(),n(1891,"td",20)(1892,"em")(1893,"strong"),e(1894,"(opcional)"),t()(),n(1895,"p"),e(1896,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),n(1897,"p"),e(1898,"Deve ser usado o sistema de "),n(1899,"strong"),e(1900,"grid"),t(),e(1901," do PO (1 ... 12 colunas)."),t(),n(1902,"blockquote")(1903,"p"),e(1904,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(1905,"code"),e(1906,"gridColumns"),t(),e(1907,"."),t()()()(),n(1908,"tr",13)(1909,"td",14)(1910,"div",15)(1911,"span",16),e(1912," gridLgPull"),i(1913,"br"),t()()(),n(1914,"td",17)(1915,"code",41),e(1916,"number"),t()(),n(1917,"td",20)(1918,"em")(1919,"strong"),e(1920,"(opcional)"),t()(),n(1921,"p"),e(1922,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),t(),n(1923,"p"),e(1924,"Deve ser usado o sistema de "),n(1925,"strong"),e(1926,"grid"),t(),e(1927," do PO (1 ... 11 colunas)."),t(),n(1928,"blockquote")(1929,"p"),e(1930,"Esta propriedade n\xE3o funciona com a propriedade "),n(1931,"code"),e(1932,"gridColumns"),t(),e(1933,". Deve-se especificar o tamanho da tela."),t()()()(),n(1934,"tr",13)(1935,"td",14)(1936,"div",15)(1937,"span",16),e(1938," gridMdColumns"),i(1939,"br"),t()()(),n(1940,"td",17)(1941,"code",41),e(1942,"number"),t()(),n(1943,"td",20)(1944,"em")(1945,"strong"),e(1946,"(opcional)"),t()(),n(1947,"p"),e(1948,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),n(1949,"p"),e(1950,"Deve ser usado o sistema de "),n(1951,"strong"),e(1952,"grid"),t(),e(1953," do PO (1 ... 12 colunas)."),t(),n(1954,"blockquote")(1955,"p"),e(1956,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(1957,"code"),e(1958,"gridColumns"),t(),e(1959,"."),t()()()(),n(1960,"tr",13)(1961,"td",14)(1962,"div",15)(1963,"span",16),e(1964," gridMdPull"),i(1965,"br"),t()()(),n(1966,"td",17)(1967,"code",41),e(1968,"number"),t()(),n(1969,"td",20)(1970,"em")(1971,"strong"),e(1972,"(opcional)"),t()(),n(1973,"p"),e(1974,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),t(),n(1975,"p"),e(1976,"Deve ser usado o sistema de "),n(1977,"strong"),e(1978,"grid"),t(),e(1979," do PO (1 ... 11 colunas)."),t(),n(1980,"blockquote")(1981,"p"),e(1982,"Esta propriedade n\xE3o funciona com a propriedade "),n(1983,"code"),e(1984,"gridColumns"),t(),e(1985,". Deve-se especificar o tamanho da tela."),t()()()(),n(1986,"tr",13)(1987,"td",14)(1988,"div",15)(1989,"span",16),e(1990," gridSmColumns"),i(1991,"br"),t()()(),n(1992,"td",17)(1993,"code",41),e(1994,"number"),t()(),n(1995,"td",20)(1996,"em")(1997,"strong"),e(1998,"(opcional)"),t()(),n(1999,"p"),e(2e3,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),n(2001,"p"),e(2002,"Deve ser usado o sistema de "),n(2003,"strong"),e(2004,"grid"),t(),e(2005," do PO (1 ... 12 colunas)."),t(),n(2006,"blockquote")(2007,"p"),e(2008,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2009,"code"),e(2010,"gridColumns"),t(),e(2011,"."),t()()()(),n(2012,"tr",13)(2013,"td",14)(2014,"div",15)(2015,"span",16),e(2016," gridSmPull"),i(2017,"br"),t()()(),n(2018,"td",17)(2019,"code",41),e(2020,"number"),t()(),n(2021,"td",20)(2022,"em")(2023,"strong"),e(2024,"(opcional)"),t()(),n(2025,"p"),e(2026,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),t(),n(2027,"p"),e(2028,"Deve ser usado o sistema de "),n(2029,"strong"),e(2030,"grid"),t(),e(2031," do PO (1 ... 11 colunas)."),t(),n(2032,"blockquote")(2033,"p"),e(2034,"Esta propriedade n\xE3o funciona com a propriedade "),n(2035,"code"),e(2036,"gridColumns"),t(),e(2037,". Deve-se especificar o tamanho da tela."),t()()()(),n(2038,"tr",13)(2039,"td",14)(2040,"div",15)(2041,"span",16),e(2042," gridXlColumns"),i(2043,"br"),t()()(),n(2044,"td",17)(2045,"code",41),e(2046,"number"),t()(),n(2047,"td",20)(2048,"em")(2049,"strong"),e(2050,"(opcional)"),t()(),n(2051,"p"),e(2052,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),n(2053,"p"),e(2054,"Deve ser usado o sistema de "),n(2055,"strong"),e(2056,"grid"),t(),e(2057," do PO (1 ... 12 colunas)."),t(),n(2058,"blockquote")(2059,"p"),e(2060,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2061,"code"),e(2062,"gridColumns"),t(),e(2063,"."),t()()()(),n(2064,"tr",13)(2065,"td",14)(2066,"div",15)(2067,"span",16),e(2068," gridXlPull"),i(2069,"br"),t()()(),n(2070,"td",17)(2071,"code",41),e(2072,"number"),t()(),n(2073,"td",20)(2074,"em")(2075,"strong"),e(2076,"(opcional)"),t()(),n(2077,"p"),e(2078,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),t(),n(2079,"p"),e(2080,"Deve ser usado o sistema de "),n(2081,"strong"),e(2082,"grid"),t(),e(2083," do PO (1 ... 11 colunas)."),t(),n(2084,"blockquote")(2085,"p"),e(2086,"Esta propriedade n\xE3o funciona com a propriedade "),n(2087,"code"),e(2088,"gridColumns"),t(),e(2089,". Deve-se especificar o tamanho da tela."),t()()()(),n(2090,"tr",13)(2091,"td",14)(2092,"div",15)(2093,"span",16),e(2094," headers"),i(2095,"br"),t()()(),n(2096,"td",17)(2097,"code",51),e(2098,"{ [name: string]: string "),t(),n(2099,"code",52),e(2100,` Array<string>;
}`),t()(),n(2101,"td",20)(2102,"em")(2103,"strong"),e(2104,"(opcional)"),t()(),n(2105,"p"),e(2106,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t(),n(2107,"p")(2108,"strong"),e(2109,"Componente compat\xEDvel"),t(),e(2110,": "),n(2111,"code"),e(2112,"po-upload"),t()()()(),n(2113,"tr",13)(2114,"td",14)(2115,"div",15)(2116,"span",16),e(2117," help"),i(2118,"br"),t()()(),n(2119,"td",17)(2120,"code",18),e(2121,"string"),t()(),n(2122,"td",20)(2123,"em")(2124,"strong"),e(2125,"(opcional)"),t()(),n(2126,"p"),e(2127,"Texto de ajuda."),t()()(),n(2128,"tr",13)(2129,"td",14)(2130,"div",15)(2131,"span",16),e(2132," helper"),i(2133,"br"),t()()(),n(2134,"td",17)(2135,"code",18),e(2136,"string "),t(),n(2137,"code",53),e(2138," PoHelperOptions"),t()(),n(2139,"td",20)(2140,"em")(2141,"strong"),e(2142,"(opcional)"),t()(),n(2143,"p"),e(2144,"Texto simples que ser\xE1 apresentado como aux\xEDlio ao campo ou objeto com as defini\xE7\xF5es do po-helper."),t()()(),n(2145,"tr",13)(2146,"td",14)(2147,"div",15)(2148,"span",16),e(2149," hideLabelStatus"),i(2150,"br"),t()()(),n(2151,"td",17)(2152,"code",28),e(2153,"boolean"),t()(),n(2154,"td",20)(2155,"em")(2156,"strong"),e(2157,"(opcional)"),t()(),n(2158,"p"),e(2159,"Indica se o status do "),n(2160,"code"),e(2161,"model"),t(),e(2162," ser\xE1 escondido visualmente ao lado do switch"),t()()(),n(2163,"tr",13)(2164,"td",14)(2165,"div",15)(2166,"span",16),e(2167," hidePasswordPeek"),i(2168,"br"),t()()(),n(2169,"td",17)(2170,"code",28),e(2171,"boolean"),t()(),n(2172,"td",20)(2173,"em")(2174,"strong"),e(2175,"(opcional)"),t()(),n(2176,"p"),e(2177,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),n(2178,"code"),e(2179,"po-password"),t(),e(2180,"."),t()()(),n(2181,"tr",13)(2182,"td",14)(2183,"div",15)(2184,"span",16),e(2185," hideRestrictionsInfo"),i(2186,"br"),t()()(),n(2187,"td",17)(2188,"code",28),e(2189,"boolean"),t()(),n(2190,"td",20)(2191,"em")(2192,"strong"),e(2193,"(opcional)"),t()(),n(2194,"p"),e(2195,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t(),n(2196,"p")(2197,"strong"),e(2198,"Componente compat\xEDvel"),t(),e(2199,": "),n(2200,"code"),e(2201,"po-upload"),t()()()(),n(2202,"tr",13)(2203,"td",14)(2204,"div",15)(2205,"span",16),e(2206," hideSearch"),i(2207,"br"),t()()(),n(2208,"td",17)(2209,"code",28),e(2210,"boolean"),t()(),n(2211,"td",20)(2212,"em")(2213,"strong"),e(2214,"(opcional)"),t()(),n(2215,"p"),e(2216,"Esconde o campo de pesquisa existente dentro do dropdown do "),n(2217,"code"),e(2218,"po-multiselect"),t(),e(2219,"."),t()()(),n(2220,"tr",13)(2221,"td",14)(2222,"div",15)(2223,"span",16),e(2224," hideSelectAll"),i(2225,"br"),t()()(),n(2226,"td",17)(2227,"code",28),e(2228,"boolean"),t()(),n(2229,"td",20)(2230,"em")(2231,"strong"),e(2232,"(opcional)"),t()(),n(2233,"p"),e(2234,'Indica se o campo "Selecionar todos" do '),n(2235,"code"),e(2236,"po-multiselect"),t(),e(2237," ser\xE1 escondido."),t()()(),n(2238,"tr",13)(2239,"td",14)(2240,"div",15)(2241,"span",16),e(2242," hideSelectButton"),i(2243,"br"),t()()(),n(2244,"td",17)(2245,"code",28),e(2246,"boolean"),t()(),n(2247,"td",20)(2248,"em")(2249,"strong"),e(2250,"(opcional)"),t()(),n(2251,"p"),e(2252,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),n(2253,"blockquote")(2254,"p"),e(2255,"Caso o valor definido seja "),n(2256,"code"),e(2257,"true"),t(),e(2258,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(2259,"code"),e(2260,"selectFiles()"),t(),e(2261," para sele\xE7\xE3o de arquivos."),t()(),n(2262,"p")(2263,"strong"),e(2264,"Componente compat\xEDvel"),t(),e(2265,": "),n(2266,"code"),e(2267,"po-upload"),t()()()(),n(2268,"tr",13)(2269,"td",14)(2270,"div",15)(2271,"span",16),e(2272," hideSendButton"),i(2273,"br"),t()()(),n(2274,"td",17)(2275,"code",28),e(2276,"boolean"),t()(),n(2277,"td",20)(2278,"em")(2279,"strong"),e(2280,"(opcional)"),t()(),n(2281,"p"),e(2282,"Omite o bot\xE3o de envio de arquivos."),t(),n(2283,"blockquote")(2284,"p"),e(2285,"Caso o valor definido seja "),n(2286,"code"),e(2287,"true"),t(),e(2288,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(2289,"code"),e(2290,"sendFiles()"),t(),e(2291," para envio do(s) arquivo(s) selecionado(s)."),t()(),n(2292,"p")(2293,"strong"),e(2294,"Componente compat\xEDvel"),t(),e(2295,": "),n(2296,"code"),e(2297,"po-upload"),t()()()(),n(2298,"tr",13)(2299,"td",14)(2300,"div",15)(2301,"span",16),e(2302," icon"),i(2303,"br"),t()()(),n(2304,"td",17)(2305,"code",18),e(2306,"string "),t(),n(2307,"code",54),e(2308," TemplateRef<void>"),t()(),n(2309,"td",20)(2310,"em")(2311,"strong"),e(2312,"(opcional)"),t()(),n(2313,"p"),e(2314,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(2315,"blockquote")(2316,"p"),e(2317,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),t()(),n(2318,"ul")(2319,"li"),e(2320,"Input;"),t(),n(2321,"li"),e(2322,"Number;"),t(),n(2323,"li"),e(2324,"Decimal;"),t(),n(2325,"li"),e(2326,"Combo;"),t(),n(2327,"li"),e(2328,"Password;"),t()(),n(2329,"blockquote")(2330,"p"),e(2331,"Veja a disponibilidade de \xEDcones em "),n(2332,"a",55),e(2333,"biblioteca de \xEDcones"),t(),e(2334,"."),t()()()(),n(2335,"tr",13)(2336,"td",14)(2337,"div",15)(2338,"span",16),e(2339," infiniteScroll"),i(2340,"br"),t()()(),n(2341,"td",17)(2342,"code",28),e(2343,"boolean"),t()(),n(2344,"td",20)(2345,"em")(2346,"strong"),e(2347,"(opcional)"),t()(),n(2348,"p"),e(2349,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),t(),n(2350,"p")(2351,"strong"),e(2352,"Componentes compat\xEDveis:"),t(),n(2353,"code"),e(2354,"po-combo"),t(),e(2355,", "),n(2356,"code"),e(2357,"po-lookup"),t(),e(2358,"."),t()()(),n(2359,"tr",13)(2360,"td",14)(2361,"div",15)(2362,"span",16),e(2363," infiniteScrollDistance"),i(2364,"br"),t()()(),n(2365,"td",17)(2366,"code",41),e(2367,"number"),t()(),n(2368,"td",20)(2369,"em")(2370,"strong"),e(2371,"(opcional)"),t()(),n(2372,"p"),e(2373,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),n(2374,"strong"),e(2375,"Exemplos"),t(),n(2376,"code"),e(2377,"{ infiniteScrollDistance: 80 }"),t(),e(2378,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),t(),n(2379,"p")(2380,"strong"),e(2381,"Componente compat\xEDvel:"),t(),n(2382,"code"),e(2383,"po-combo"),t(),e(2384,"."),t()()(),n(2385,"tr",13)(2386,"td",14)(2387,"div",15)(2388,"span",16),e(2389," invalidValue"),i(2390,"br"),t()()(),n(2391,"td",17)(2392,"code",28),e(2393,"boolean"),t()(),n(2394,"td",20)(2395,"em")(2396,"strong"),e(2397,"(opcional)"),t()(),n(2398,"p"),e(2399,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),n(2400,"code"),e(2401,"p-field-error-message"),t(),e(2402,"."),t(),n(2403,"blockquote")(2404,"p"),e(2405,"Caso essa propriedade seja definida como "),n(2406,"code"),e(2407,"true"),t(),e(2408,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),t()(),n(2409,"p")(2410,"strong"),e(2411,"Componente compat\xEDvel"),t(),e(2412,": "),n(2413,"code"),e(2414,"po-switch"),t()()()(),n(2415,"tr",13)(2416,"td",14)(2417,"div",15)(2418,"span",16),e(2419," isoFormat"),i(2420,"br"),t()()(),n(2421,"td",17)(2422,"code",56),e(2423,"PoDatepickerIsoFormat"),t()(),n(2424,"td",20)(2425,"em")(2426,"strong"),e(2427,"(opcional)"),t()(),n(2428,"p"),e(2429,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),t(),n(2430,"blockquote")(2431,"p"),e(2432,"Veja os valores v\xE1lidos no "),n(2433,"code"),e(2434,"enumPoDatepickerIsoFormat"),t(),e(2435,"."),t()(),n(2436,"p")(2437,"strong"),e(2438,"Componente compat\xEDvel:"),t(),e(2439," po-datepicker"),t()()(),n(2440,"tr",13)(2441,"td",14)(2442,"div",15)(2443,"span",16),e(2444," key"),i(2445,"br"),t()()(),n(2446,"td",17)(2447,"code",28),e(2448,"boolean"),t()(),n(2449,"td",20)(2450,"em")(2451,"strong"),e(2452,"(opcional)"),t()(),n(2453,"p"),e(2454,"Identificador"),t()()(),n(2455,"tr",13)(2456,"td",14)(2457,"div",15)(2458,"span",16),e(2459," keydown"),i(2460,"br"),t()()(),n(2461,"td",17)(2462,"code",29),e(2463,"Function"),t()(),n(2464,"td",20)(2465,"em")(2466,"strong"),e(2467,"(opcional)"),t()(),n(2468,"p"),e(2469,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(2470,"code"),e(2471,"KeyboardEvent"),t(),e(2472," com informa\xE7\xF5es sobre a tecla."),t()()(),n(2473,"tr",13)(2474,"td",14)(2475,"div",15)(2476,"span",16),e(2477," label"),i(2478,"br"),t()()(),n(2479,"td",17)(2480,"code",18),e(2481,"string"),t()(),n(2482,"td",20)(2483,"em")(2484,"strong"),e(2485,"(opcional)"),t()(),n(2486,"p"),e(2487,"R\xF3tulo do campo exibido."),t(),n(2488,"p"),e(2489,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),n(2490,"code"),e(2491,"label"),t(),e(2492," o valor da propriedade "),n(2493,"code"),e(2494,"property"),t(),e(2495," com a primeira letra em mai\xFAsculo."),t()()(),n(2496,"tr",13)(2497,"td",14)(2498,"div",15)(2499,"span",16),e(2500," labelPosition"),i(2501,"br"),t()()(),n(2502,"td",17)(2503,"code",57),e(2504,"PoSwitchLabelPosition"),t()(),n(2505,"td",20)(2506,"em")(2507,"strong"),e(2508,"(opcional)"),t()(),n(2509,"p"),e(2510,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),t(),n(2511,"blockquote")(2512,"p"),e(2513,"Por padr\xE3o exibe \xE0 direita."),t()()()(),n(2514,"tr",13)(2515,"td",14)(2516,"div",15)(2517,"span",16),e(2518," listboxControlPosition"),i(2519,"br"),t()()(),n(2520,"td",17)(2521,"code",58),e(2522,"'top' "),t(),n(2523,"code",59),e(2524," 'bottom'"),t()(),n(2525,"td",20)(2526,"em")(2527,"strong"),e(2528,"(opcional)"),t()(),n(2529,"p"),e(2530,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),n(2531,"code"),e(2532,"listbox"),t(),e(2533," em rela\xE7\xE3o ao campo ("),n(2534,"code"),e(2535,"top"),t(),e(2536," ou "),n(2537,"code"),e(2538,"bottom"),t(),e(2539,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),t(),n(2540,"p")(2541,"strong"),e(2542,"Componentes compat\xEDveis:"),t(),n(2543,"code"),e(2544,"po-multiselect"),t(),e(2545,", "),n(2546,"code"),e(2547,"po-combo"),t(),e(2548,"."),t()()(),n(2549,"tr",13)(2550,"td",14)(2551,"div",15)(2552,"span",16),e(2553," literals"),i(2554,"br"),t()()(),n(2555,"td",17)(2556,"code",60),e(2557,"PoLookupLiterals "),t(),n(2558,"code",61),e(2559," PoMultiselectLiterals "),t(),n(2560,"code",62),e(2561," PoComboLiterals "),t(),n(2562,"code",63),e(2563," PoDatepickerRangeLiterals "),t(),n(2564,"code",64),e(2565," PoUploadLiterals"),t()(),n(2566,"td",20)(2567,"em")(2568,"strong"),e(2569,"(opcional)"),t()(),n(2570,"p"),e(2571,"Objeto com as literais usadas para os seguintes componentes: "),n(2572,"code"),e(2573,"po-lookup"),t(),e(2574,", "),n(2575,"code"),e(2576,"po-multiselect"),t(),e(2577,", "),n(2578,"code"),e(2579,"po-combo"),t(),e(2580," e "),n(2581,"code"),e(2582,"po-datepicker-range"),t(),e(2583,"."),t(),n(2584,"blockquote")(2585,"p"),e(2586,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),t()(),n(2587,"p")(2588,"strong"),e(2589,"Componentes compat\xEDveis:"),t(),n(2590,"code"),e(2591,"po-lookup"),t(),e(2592,", "),n(2593,"code"),e(2594,"po-multiselect"),t(),e(2595,", "),n(2596,"code"),e(2597,"po-combo"),t(),e(2598,", "),n(2599,"code"),e(2600,"po-datepicker-range"),t()()()(),n(2601,"tr",13)(2602,"td",14)(2603,"div",15)(2604,"span",16),e(2605," locale"),i(2606,"br"),t()()(),n(2607,"td",17)(2608,"code",18),e(2609,"string"),t()(),n(2610,"td",20)(2611,"em")(2612,"strong"),e(2613,"(opcional)"),t()(),n(2614,"p"),e(2615,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),n(2616,"a",65)(2617,"code"),e(2618,"I18n"),t()()(),n(2619,"p"),e(2620,"Exemplo de utiliza\xE7\xE3o:"),t(),n(2621,"pre")(2622,"code"),e(2623,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),t()(),n(2624,"blockquote")(2625,"p"),e(2626,"Para ver quais linguagens suportadas acesse "),n(2627,"a",65)(2628,"code"),e(2629,"I18n"),t()(),e(2630,`
A propriedade ser\xE1 repassada para os componentes que suportam a mesma.`),t()()()(),n(2631,"tr",13)(2632,"td",14)(2633,"div",15)(2634,"span",16),e(2635," mask"),i(2636,"br"),t()()(),n(2637,"td",17)(2638,"code",18),e(2639,"string"),t()(),n(2640,"td",20)(2641,"em")(2642,"strong"),e(2643,"(opcional)"),t()(),n(2644,"p"),e(2645,"M\xE1scara para o campo."),t(),n(2646,"p")(2647,"strong"),e(2648,"Componentes compat\xEDveis:"),t(),n(2649,"code"),e(2650,"po-input"),t(),e(2651,"."),t(),n(2652,"blockquote")(2653,"p"),e(2654,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),n(2655,"code"),e(2656,"type: time"),t(),e(2657,"."),t()()()(),n(2658,"tr",13)(2659,"td",14)(2660,"div",15)(2661,"span",16),e(2662," maskFormatModel"),i(2663,"br"),t()()(),n(2664,"td",17)(2665,"code",28),e(2666,"boolean"),t()(),n(2667,"td",20)(2668,"em")(2669,"strong"),e(2670,"(opcional)"),t()(),n(2671,"p"),e(2672,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),n(2673,"code"),e(2674,"false"),t(),e(2675,"."),t(),n(2676,"p")(2677,"strong"),e(2678,"Componentes compat\xEDveis:"),t(),n(2679,"code"),e(2680,"po-input"),t(),e(2681,"."),t(),n(2682,"blockquote")(2683,"p"),e(2684,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),n(2685,"code"),e(2686,"type: time"),t(),e(2687,"."),t()()()(),n(2688,"tr",13)(2689,"td",14)(2690,"div",15)(2691,"span",16),e(2692," maxLength"),i(2693,"br"),t()()(),n(2694,"td",17)(2695,"code",41),e(2696,"number"),t()(),n(2697,"td",20)(2698,"em")(2699,"strong"),e(2700,"(opcional)"),t()(),n(2701,"p"),e(2702,"Tamanho m\xE1ximo de caracteres."),t(),n(2703,"p")(2704,"strong"),e(2705,"Componentes compat\xEDveis:"),t(),n(2706,"code"),e(2707,"po-input"),t(),e(2708,", "),n(2709,"code"),e(2710,"po-number"),t(),e(2711,", "),n(2712,"code"),e(2713,"po-decimal"),t(),e(2714,", "),n(2715,"code"),e(2716,"po-textarea"),t(),e(2717,", "),n(2718,"code"),e(2719,"po-password"),t(),e(2720,"."),t()()(),n(2721,"tr",13)(2722,"td",14)(2723,"div",15)(2724,"span",16),e(2725," maxValue"),i(2726,"br"),t()()(),n(2727,"td",17)(2728,"code",18),e(2729,"string "),t(),n(2730,"code",41),e(2731," number"),t()(),n(2732,"td",20)(2733,"em")(2734,"strong"),e(2735,"(opcional)"),t()(),n(2736,"p"),e(2737,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),n(2738,"em"),e(2739,"number"),t(),e(2740,", "),n(2741,"em"),e(2742,"date"),t(),e(2743," ou "),n(2744,"em"),e(2745,"dateTime"),t(),e(2746,"."),t(),n(2747,"p")(2748,"strong"),e(2749,"Componentes compat\xEDveis:"),t(),n(2750,"code"),e(2751,"po-datepicker"),t(),e(2752,", "),n(2753,"code"),e(2754,"po-datepicker-range"),t(),e(2755,", "),n(2756,"code"),e(2757,"po-number"),t(),e(2758,", "),n(2759,"code"),e(2760,"po-decimal"),t()()()(),n(2761,"tr",13)(2762,"td",14)(2763,"div",15)(2764,"span",16),e(2765," minLength"),i(2766,"br"),t()()(),n(2767,"td",17)(2768,"code",41),e(2769,"number"),t()(),n(2770,"td",20)(2771,"em")(2772,"strong"),e(2773,"(opcional)"),t()(),n(2774,"p"),e(2775,"Tamanho m\xEDnimo de caracteres."),t(),n(2776,"p")(2777,"strong"),e(2778,"Componentes compat\xEDveis:"),t(),n(2779,"code"),e(2780,"po-input"),t(),e(2781,", "),n(2782,"code"),e(2783,"po-number"),t(),e(2784,", "),n(2785,"code"),e(2786,"po-decimal"),t(),e(2787,", "),n(2788,"code"),e(2789,"po-textarea"),t(),e(2790,", "),n(2791,"code"),e(2792,"po-password"),t(),e(2793,"."),t()()(),n(2794,"tr",13)(2795,"td",14)(2796,"div",15)(2797,"span",16),e(2798," minValue"),i(2799,"br"),t()()(),n(2800,"td",17)(2801,"code",18),e(2802,"string "),t(),n(2803,"code",41),e(2804," number"),t()(),n(2805,"td",20)(2806,"em")(2807,"strong"),e(2808,"(opcional)"),t()(),n(2809,"p"),e(2810,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),n(2811,"em"),e(2812,"number"),t(),e(2813,", "),n(2814,"em"),e(2815,"date"),t(),e(2816," ou "),n(2817,"em"),e(2818,"dateTime"),t(),e(2819,"."),t(),n(2820,"p")(2821,"strong"),e(2822,"Componentes compat\xEDveis:"),t(),n(2823,"code"),e(2824,"po-datepicker"),t(),e(2825,", "),n(2826,"code"),e(2827,"po-datepicker-range"),t(),e(2828,", "),n(2829,"code"),e(2830,"po-number"),t(),e(2831,", "),n(2832,"code"),e(2833,"po-decimal"),t()()()(),n(2834,"tr",13)(2835,"td",14)(2836,"div",15)(2837,"span",16),e(2838," multiple"),i(2839,"br"),t()()(),n(2840,"td",17)(2841,"code",28),e(2842,"boolean"),t()(),n(2843,"td",20)(2844,"em")(2845,"strong"),e(2846,"(opcional)"),t()(),n(2847,"p"),e(2848,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),n(2849,"p")(2850,"strong"),e(2851,"Componente compat\xEDvel:"),t(),n(2852,"code"),e(2853,"po-lookup"),t(),e(2854,", "),n(2855,"code"),e(2856,"po-upload"),t()()()(),n(2857,"tr",13)(2858,"td",14)(2859,"div",15)(2860,"span",16),e(2861," noAutocomplete"),i(2862,"br"),t()()(),n(2863,"td",17)(2864,"code",28),e(2865,"boolean"),t()(),n(2866,"td",20)(2867,"em")(2868,"strong"),e(2869,"(opcional)"),t()(),n(2870,"p"),e(2871,"Define a propriedade nativa "),n(2872,"code"),e(2873,"autocomplete"),t(),e(2874," do campo como off."),t(),n(2875,"p")(2876,"strong"),e(2877,"Componentes compat\xEDveis:"),t(),n(2878,"code"),e(2879,"po-datepicker"),t(),e(2880,", "),n(2881,"code"),e(2882,"po-datepicker-range"),t(),e(2883,", "),n(2884,"code"),e(2885,"po-input"),t(),e(2886,", "),n(2887,"code"),e(2888,"po-number"),t(),e(2889,", "),n(2890,"code"),e(2891,"po-decimal"),t(),e(2892,", "),n(2893,"code"),e(2894,"po-lookup"),t(),e(2895,", "),n(2896,"code"),e(2897,"po-password"),t()()()(),n(2898,"tr",13)(2899,"td",14)(2900,"div",15)(2901,"span",16),e(2902," offsetColumns"),i(2903,"br"),t()()(),n(2904,"td",17)(2905,"code",41),e(2906,"number"),t()(),n(2907,"td",20)(2908,"em")(2909,"strong"),e(2910,"(opcional)"),t()(),n(2911,"p"),e(2912,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),t(),n(2913,"p"),e(2914,"Deve ser usado o sistema de "),n(2915,"strong"),e(2916,"grid"),t(),e(2917," do PO (1 ... 12 colunas)."),t(),n(2918,"blockquote")(2919,"p"),e(2920,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),t()()()(),n(2921,"tr",13)(2922,"td",14)(2923,"div",15)(2924,"span",16),e(2925," offsetLgColumns"),i(2926,"br"),t()()(),n(2927,"td",17)(2928,"code",41),e(2929,"number"),t()(),n(2930,"td",20)(2931,"em")(2932,"strong"),e(2933,"(opcional)"),t()(),n(2934,"p"),e(2935,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),n(2936,"p"),e(2937,"Deve ser usado o sistema de "),n(2938,"strong"),e(2939,"grid"),t(),e(2940," do PO (1 ... 12 colunas)."),t(),n(2941,"blockquote")(2942,"p"),e(2943,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2944,"code"),e(2945,"offsetColumns"),t(),e(2946,"."),t()()()(),n(2947,"tr",13)(2948,"td",14)(2949,"div",15)(2950,"span",16),e(2951," offsetMdColumns"),i(2952,"br"),t()()(),n(2953,"td",17)(2954,"code",41),e(2955,"number"),t()(),n(2956,"td",20)(2957,"em")(2958,"strong"),e(2959,"(opcional)"),t()(),n(2960,"p"),e(2961,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),n(2962,"p"),e(2963,"Deve ser usado o sistema de "),n(2964,"strong"),e(2965,"grid"),t(),e(2966," do PO (1 ... 12 colunas)."),t(),n(2967,"blockquote")(2968,"p"),e(2969,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2970,"code"),e(2971,"offsetColumns"),t(),e(2972,"."),t()()()(),n(2973,"tr",13)(2974,"td",14)(2975,"div",15)(2976,"span",16),e(2977," offsetSmColumns"),i(2978,"br"),t()()(),n(2979,"td",17)(2980,"code",41),e(2981,"number"),t()(),n(2982,"td",20)(2983,"em")(2984,"strong"),e(2985,"(opcional)"),t()(),n(2986,"p"),e(2987,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),n(2988,"p"),e(2989,"Deve ser usado o sistema de "),n(2990,"strong"),e(2991,"grid"),t(),e(2992," do PO (1 ... 12 colunas)."),t(),n(2993,"blockquote")(2994,"p"),e(2995,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2996,"code"),e(2997,"offsetColumns"),t(),e(2998,"."),t()()()(),n(2999,"tr",13)(3e3,"td",14)(3001,"div",15)(3002,"span",16),e(3003," offsetXlColumns"),i(3004,"br"),t()()(),n(3005,"td",17)(3006,"code",41),e(3007,"number"),t()(),n(3008,"td",20)(3009,"em")(3010,"strong"),e(3011,"(opcional)"),t()(),n(3012,"p"),e(3013,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),n(3014,"p"),e(3015,"Deve ser usado o sistema de "),n(3016,"strong"),e(3017,"grid"),t(),e(3018," do PO (1 ... 12 colunas)."),t(),n(3019,"blockquote")(3020,"p"),e(3021,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(3022,"code"),e(3023,"offsetColumns"),t(),e(3024,"."),t()()()(),n(3025,"tr",13)(3026,"td",14)(3027,"div",15)(3028,"span",16),e(3029," onError"),i(3030,"br"),t()()(),n(3031,"td",17)(3032,"code",29),e(3033,"Function"),t()(),n(3034,"td",20)(3035,"em")(3036,"strong"),e(3037,"(opcional)"),t()(),n(3038,"p"),e(3039,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),n(3040,"blockquote")(3041,"p"),e(3042,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(3043,"code"),e(3044,"HttpErrorResponse"),t(),e(3045,"."),t()(),n(3046,"p")(3047,"strong"),e(3048,"Componente compat\xEDvel"),t(),e(3049,": "),n(3050,"code"),e(3051,"po-upload"),t()()()(),n(3052,"tr",13)(3053,"td",14)(3054,"div",15)(3055,"span",16),e(3056," onSuccess"),i(3057,"br"),t()()(),n(3058,"td",17)(3059,"code",29),e(3060,"Function"),t()(),n(3061,"td",20)(3062,"em")(3063,"strong"),e(3064,"(opcional)"),t()(),n(3065,"p"),e(3066,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),n(3067,"blockquote")(3068,"p"),e(3069,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(3070,"code"),e(3071,"HttpResponse"),t(),e(3072,"."),t()(),n(3073,"p")(3074,"strong"),e(3075,"Componente compat\xEDvel"),t(),e(3076,": "),n(3077,"code"),e(3078,"po-upload"),t()()()(),n(3079,"tr",13)(3080,"td",14)(3081,"div",15)(3082,"span",16),e(3083," onUpload"),i(3084,"br"),t()()(),n(3085,"td",17)(3086,"code",29),e(3087,"Function"),t()(),n(3088,"td",20)(3089,"em")(3090,"strong"),e(3091,"(opcional)"),t()(),n(3092,"p"),e(3093,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),n(3094,"pre")(3095,"code"),e(3096,`event.data = {id: 'id do usu\xE1rio'};
`),t()(),n(3097,"p")(3098,"strong"),e(3099,"Componente compat\xEDvel"),t(),e(3100,": "),n(3101,"code"),e(3102,"po-upload"),t()()()(),n(3103,"tr",13)(3104,"td",14)(3105,"div",15)(3106,"span",16),e(3107," optional"),i(3108,"br"),t()()(),n(3109,"td",17)(3110,"code",28),e(3111,"boolean"),t()(),n(3112,"td",20)(3113,"em")(3114,"strong"),e(3115,"(opcional)"),t()(),n(3116,"p"),e(3117,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(3118,"blockquote")(3119,"p"),e(3120,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),t()(),n(3121,"ul")(3122,"li"),e(3123,"O campo for "),n(3124,"code"),e(3125,"required"),t(),e(3126,", ou;"),t(),n(3127,"li"),e(3128,"N\xE3o possuir "),n(3129,"code"),e(3130,"help"),t(),e(3131," e "),n(3132,"code"),e(3133,"label"),t(),e(3134,"."),t()()()(),n(3135,"tr",13)(3136,"td",14)(3137,"div",15)(3138,"span",16),e(3139," options"),i(3140,"br"),t()()(),n(3141,"td",17)(3142,"code",32),e(3143,"Array<string> "),t(),n(3144,"code",66),e(3145," Array<PoSelectOption> "),t(),n(3146,"code",67),e(3147," Array<PoMultiselectOption> "),t(),n(3148,"code",68),e(3149," Array<PoCheckboxGroupOption> "),t(),n(3150,"code",69),e(3151," Array<any>"),t()(),n(3152,"td",20)(3153,"em")(3154,"strong"),e(3155,"(opcional)"),t()(),n(3156,"p"),e(3157,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),t(),n(3158,"p")(3159,"strong"),e(3160,"Componentes compat\xEDveis:"),t(),n(3161,"code"),e(3162,"po-select"),t(),e(3163,", "),n(3164,"code"),e(3165,"po-radio-group"),t(),e(3166,", "),n(3167,"code"),e(3168,"po-checkbox-group"),t(),e(3169,", "),n(3170,"code"),e(3171,"po-multiselect"),t(),e(3172,"."),t()()(),n(3173,"tr",13)(3174,"td",14)(3175,"div",15)(3176,"span",16),e(3177," optionsMulti"),i(3178,"br"),t()()(),n(3179,"td",17)(3180,"code",28),e(3181,"boolean"),t()(),n(3182,"td",20)(3183,"em")(3184,"strong"),e(3185,"(opcional)"),t()(),n(3186,"p"),e(3187,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),t()()(),n(3188,"tr",13)(3189,"td",14)(3190,"div",15)(3191,"span",16),e(3192," optionsService"),i(3193,"br"),t()()(),n(3194,"td",17)(3195,"code",18),e(3196,"string "),t(),n(3197,"code",70),e(3198," PoComboFilter "),t(),n(3199,"code",71),e(3200," PoMultiselectFilter"),t()(),n(3201,"td",20)(3202,"em")(3203,"strong"),e(3204,"(opcional)"),t()(),n(3205,"p"),e(3206,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),n(3207,"strong"),e(3208,"Importante"),t()(),n(3209,"blockquote")(3210,"p"),e(3211,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),n(3212,"a",72),e(3213,"guia de API do PO UI"),t(),e(3214,"."),t()()()(),n(3215,"tr",13)(3216,"td",14)(3217,"div",15)(3218,"span",16),e(3219," order"),i(3220,"br"),t()()(),n(3221,"td",17)(3222,"code",41),e(3223,"number"),t()(),n(3224,"td",20)(3225,"em")(3226,"strong"),e(3227,"(opcional)"),t()(),n(3228,"p"),e(3229,"Informa a ordem de exibi\xE7\xE3o do campo."),t(),n(3230,"p"),e(3231,"Exemplo de utiliza\xE7\xE3o:"),t(),n(3232,"p")(3233,"code"),e(3234,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),t()(),n(3235,"p"),e(3236,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),n(3237,"code"),e(3238,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),t()(),n(3239,"p"),e(3240,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),t(),n(3241,"p"),e(3242,"Campos sem "),n(3243,"code"),e(3244,"order"),t(),e(3245,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),t()()(),n(3246,"tr",13)(3247,"td",14)(3248,"div",15)(3249,"span",16),e(3250," params"),i(3251,"br"),t()()(),n(3252,"td",17)(3253,"code",33),e(3254,"any"),t()(),n(3255,"td",20)(3256,"em")(3257,"strong"),e(3258,"(opcional)"),t()(),n(3259,"p"),e(3260,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),n(3261,"code"),e(3262,"po-lookup"),t(),e(3263,` e
`),n(3264,"code"),e(3265,"po-combo"),t(),e(3266,"."),t(),n(3267,"p"),e(3268,"Por exemplo, para o par\xE2metro "),n(3269,"code"),e(3270,"{ age: 23 }"),t(),e(3271," a URL da requisi\xE7\xE3o ficaria:"),t(),n(3272,"p")(3273,"code"),e(3274,"url + ?age=23&filter=Peter"),t()()()(),n(3275,"tr",13)(3276,"td",14)(3277,"div",15)(3278,"span",16),e(3279," pattern"),i(3280,"br"),t()()(),n(3281,"td",17)(3282,"code",18),e(3283,"string"),t()(),n(3284,"td",20)(3285,"em")(3286,"strong"),e(3287,"(opcional)"),t()(),n(3288,"p"),e(3289,"Regex para valida\xE7\xE3o do campo."),t(),n(3290,"p")(3291,"strong"),e(3292,"Componentes compat\xEDveis:"),t(),n(3293,"code"),e(3294,"po-input"),t(),e(3295,", "),n(3296,"code"),e(3297,"po-password"),t(),e(3298,"."),t()()(),n(3299,"tr",13)(3300,"td",14)(3301,"div",15)(3302,"span",16),e(3303," placeholder"),i(3304,"br"),t()()(),n(3305,"td",17)(3306,"code",18),e(3307,"string"),t()(),n(3308,"td",20)(3309,"em")(3310,"strong"),e(3311,"(opcional)"),t()(),n(3312,"p"),e(3313,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),t()()(),n(3314,"tr",13)(3315,"td",14)(3316,"div",15)(3317,"span",16),e(3318," placeholderSearch"),i(3319,"br"),t()()(),n(3320,"td",17)(3321,"code",18),e(3322,"string"),t()(),n(3323,"td",20)(3324,"em")(3325,"strong"),e(3326,"(opcional)"),t()(),n(3327,"p"),e(3328,"Placeholder do campo de pesquisa do "),n(3329,"code"),e(3330,"po-multiselect"),t(),e(3331,"."),t(),n(3332,"blockquote")(3333,"p"),e(3334,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),t()()()(),n(3335,"tr",13)(3336,"td",14)(3337,"div",15)(3338,"span",16),e(3339," property"),i(3340,"br"),t()()(),n(3341,"td",17)(3342,"code",18),e(3343,"string"),t()(),n(3344,"td",20)(3345,"p"),e(3346,"Nome de refer\xEAncia do campo."),t()()(),n(3347,"tr",13)(3348,"td",14)(3349,"div",15)(3350,"span",16),e(3351," range"),i(3352,"br"),t()()(),n(3353,"td",17)(3354,"code",28),e(3355,"boolean"),t()(),n(3356,"td",20)(3357,"em")(3358,"strong"),e(3359,"(opcional)"),t()(),n(3360,"p"),e(3361,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),t(),n(3362,"blockquote")(3363,"p"),e(3364,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),t()()()(),n(3365,"tr",13)(3366,"td",14)(3367,"div",15)(3368,"span",16),e(3369," readonly"),i(3370,"br"),t()()(),n(3371,"td",17)(3372,"code",28),e(3373,"boolean"),t()(),n(3374,"td",20)(3375,"em")(3376,"strong"),e(3377,"(opcional)"),t()(),n(3378,"p"),e(3379,"Indica que o campo ser\xE1 somente leitura."),t(),n(3380,"p")(3381,"strong"),e(3382,"Componentes compat\xEDveis:"),t(),n(3383,"code"),e(3384,"po-datepicker"),t(),e(3385,", "),n(3386,"code"),e(3387,"po-datepicker-range"),t(),e(3388,", "),n(3389,"code"),e(3390,"po-input"),t(),e(3391,", "),n(3392,"code"),e(3393,"po-number"),t(),e(3394,", "),n(3395,"code"),e(3396,"po-decimal"),t(),e(3397,", "),n(3398,"code"),e(3399,"po-select"),t(),e(3400,", "),n(3401,"code"),e(3402,"po-textarea"),t(),e(3403,", "),n(3404,"code"),e(3405,"po-password"),t()()()(),n(3406,"tr",13)(3407,"td",14)(3408,"div",15)(3409,"span",16),e(3410," removeInitialFilter"),i(3411,"br"),t()()(),n(3412,"td",17)(3413,"code",28),e(3414,"boolean"),t()(),n(3415,"td",20)(3416,"em")(3417,"strong"),e(3418,"(opcional)"),t()(),n(3419,"p"),e(3420,"Define que o filtro no primeiro clique ser\xE1 removido."),t(),n(3421,"blockquote")(3422,"p"),e(3423,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),t()(),n(3424,"p")(3425,"strong"),e(3426,"Componente compat\xEDvel"),t(),e(3427,": "),n(3428,"code"),e(3429,"po-combo"),t()()()(),n(3430,"tr",13)(3431,"td",14)(3432,"div",15)(3433,"span",16),e(3434," required"),i(3435,"br"),t()()(),n(3436,"td",17)(3437,"code",28),e(3438,"boolean"),t()(),n(3439,"td",20)(3440,"em")(3441,"strong"),e(3442,"(opcional)"),t()(),n(3443,"p"),e(3444,"Define a obrigatoriedade do campo."),t()()(),n(3445,"tr",13)(3446,"td",14)(3447,"div",15)(3448,"span",16),e(3449," requiredFieldErrorMessage"),i(3450,"br"),t()()(),n(3451,"td",17)(3452,"code",28),e(3453,"boolean"),t()(),n(3454,"td",20)(3455,"em")(3456,"strong"),e(3457,"(opcional)"),t()(),n(3458,"p"),e(3459,"Exibe a mensagem setada na propriedade "),n(3460,"code"),e(3461,"errorMessage"),t(),e(3462," se o campo estiver vazio e for requerido."),t(),n(3463,"blockquote")(3464,"p"),e(3465,"Necess\xE1rio que a propriedade "),n(3466,"code"),e(3467,"required"),t(),e(3468," esteja habilitada."),t()(),n(3469,"p")(3470,"strong"),e(3471,"Componentes compat\xEDveis:"),t(),n(3472,"code"),e(3473,"po-datepicker"),t(),e(3474,", "),n(3475,"code"),e(3476,"po-input"),t(),e(3477,", "),n(3478,"code"),e(3479,"po-number"),t(),e(3480,", "),n(3481,"code"),e(3482,"po-decimal"),t(),e(3483,", "),n(3484,"code"),e(3485,"po-password"),t(),e(3486,"."),t()()(),n(3487,"tr",13)(3488,"td",14)(3489,"div",15)(3490,"span",16),e(3491," restrictions"),i(3492,"br"),t()()(),n(3493,"td",17)(3494,"code",73),e(3495,"PoUploadFileRestrictions"),t()(),n(3496,"td",20)(3497,"em")(3498,"strong"),e(3499,"(opcional)"),t()(),n(3500,"p"),e(3501,"Objeto que segue a defini\xE7\xE3o da interface "),n(3502,"code"),e(3503,"PoUploadFileRestrictions"),t(),e(3504,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t(),n(3505,"p")(3506,"strong"),e(3507,"Componente compat\xEDvel"),t(),e(3508,": "),n(3509,"code"),e(3510,"po-upload"),t()()()(),n(3511,"tr",13)(3512,"td",14)(3513,"div",15)(3514,"span",16),e(3515," rows"),i(3516,"br"),t()()(),n(3517,"td",17)(3518,"code",41),e(3519,"number"),t()(),n(3520,"td",20)(3521,"em")(3522,"strong"),e(3523,"(opcional)"),t()(),n(3524,"p"),e(3525,"Quantidade de linhas exibidas no "),n(3526,"code"),e(3527,"po-textarea"),t(),e(3528,"."),t()()(),n(3529,"tr",13)(3530,"td",14)(3531,"div",15)(3532,"span",16),e(3533," searchService"),i(3534,"br"),t()()(),n(3535,"td",17)(3536,"code",18),e(3537,"string "),t(),n(3538,"code",74),e(3539," PoLookupFilter"),t()(),n(3540,"td",20)(3541,"em")(3542,"strong"),e(3543,"(opcional)"),t()(),n(3544,"p"),e(3545,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),n(3546,"code"),e(3547,"columns"),t(),e(3548,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),n(3549,"strong"),e(3550,"Importante:"),t()(),n(3551,"blockquote")(3552,"p"),e(3553,"Caso utilizar a propriedade "),n(3554,"code"),e(3555,"optionsService"),t(),e(3556,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),n(3557,"a",72),e(3558,"guia de API do PO UI"),t(),e(3559,"."),t()()()(),n(3560,"tr",13)(3561,"td",14)(3562,"div",15)(3563,"span",16),e(3564," secret"),i(3565,"br"),t()()(),n(3566,"td",17)(3567,"code",28),e(3568,"boolean"),t()(),n(3569,"td",20)(3570,"em")(3571,"strong"),e(3572,"(opcional)"),t()(),n(3573,"p"),e(3574,"Esconde a informa\xE7\xE3o estilo "),n(3575,"em"),e(3576,"password"),t(),e(3577,", pode ser utilizado quando o tipo de dado for "),n(3578,"em"),e(3579,"string"),t(),e(3580,"."),t()()(),n(3581,"tr",13)(3582,"td",14)(3583,"div",15)(3584,"span",16),e(3585," showRequired"),i(3586,"br"),t()()(),n(3587,"td",17)(3588,"code",28),e(3589,"boolean"),t()(),n(3590,"td",20)(3591,"em")(3592,"strong"),e(3593,"(opcional)"),t()(),n(3594,"p"),e(3595,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(3596,"blockquote")(3597,"p"),e(3598,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(3599,"ul")(3600,"li"),e(3601,"N\xE3o possuir "),n(3602,"code"),e(3603,"p-help"),t(),e(3604," e/ou "),n(3605,"code"),e(3606,"p-label"),t(),e(3607,"."),t()()()(),n(3608,"tr",13)(3609,"td",14)(3610,"div",15)(3611,"span",16),e(3612," showThumbnail"),i(3613,"br"),t()()(),n(3614,"td",17)(3615,"code",28),e(3616,"boolean"),t()(),n(3617,"td",20)(3618,"em")(3619,"strong"),e(3620,"(opcional)"),t()(),n(3621,"p"),e(3622,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),t(),n(3623,"blockquote")(3624,"p"),e(3625,"Propriedade funciona apenas em arquivos de formato de imagem ("),n(3626,"code"),e(3627,".png"),t(),e(3628,", "),n(3629,"code"),e(3630,".jpg"),t(),e(3631,", "),n(3632,"code"),e(3633,".jpeg"),t(),e(3634," e "),n(3635,"code"),e(3636,".gif"),t(),e(3637,")."),t()(),n(3638,"p")(3639,"strong"),e(3640,"Componente compat\xEDvel"),t(),e(3641,": "),n(3642,"code"),e(3643,"po-upload"),t()()()(),n(3644,"tr",13)(3645,"td",14)(3646,"div",15)(3647,"span",16),e(3648," size"),i(3649,"br"),t()()(),n(3650,"td",17)(3651,"code",18),e(3652,"string"),t()(),n(3653,"td",20)(3654,"em")(3655,"strong"),e(3656,"(opcional)"),t()(),n(3657,"p"),e(3658,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),t(),n(3659,"ul")(3660,"li")(3661,"code"),e(3662,"small"),t(),e(3663,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(3664,"li")(3665,"code"),e(3666,"medium"),t(),e(3667,": aplica a medida medium de cada componente."),t(),n(3668,"li")(3669,"code"),e(3670,"large"),t(),e(3671,": aplica a medida large de cada componente (dispon\xEDvel para "),n(3672,"code"),e(3673,"po-checkbox"),t(),e(3674," e "),n(3675,"code"),e(3676,"po-radio-group"),t(),e(3677,")."),n(3678,"blockquote")(3679,"p"),e(3680,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(3681,"code"),e(3682,"medium"),t(),e(3683,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(3684,"a",21),e(3685,"po-theme"),t(),e(3686,"."),t()()()()()(),n(3687,"tr",13)(3688,"td",14)(3689,"div",15)(3690,"span",16),e(3691," sort"),i(3692,"br"),t()()(),n(3693,"td",17)(3694,"code",28),e(3695,"boolean"),t()(),n(3696,"td",20)(3697,"em")(3698,"strong"),e(3699,"(opcional)"),t()(),n(3700,"p"),e(3701,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),t(),n(3702,"p")(3703,"strong"),e(3704,"Componentes compat\xEDveis:"),t(),n(3705,"code"),e(3706,"po-combo"),t(),e(3707,", po-multiselect"),t()()(),n(3708,"tr",13)(3709,"td",14)(3710,"div",15)(3711,"span",16),e(3712," step"),i(3713,"br"),t()()(),n(3714,"td",17)(3715,"code",41),e(3716,"number"),t()(),n(3717,"td",20)(3718,"em")(3719,"strong"),e(3720,"(opcional)"),t()(),n(3721,"p"),e(3722,"Intervalo utilizado no "),n(3723,"code"),e(3724,"po-number"),t(),e(3725,"."),t()()(),n(3726,"tr",13)(3727,"td",14)(3728,"div",15)(3729,"span",16),e(3730," thousandMaxlength"),i(3731,"br"),t()()(),n(3732,"td",17)(3733,"code",41),e(3734,"number"),t()(),n(3735,"td",20)(3736,"em")(3737,"strong"),e(3738,"(opcional)"),t()(),n(3739,"p"),e(3740,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),t(),n(3741,"blockquote")(3742,"p"),e(3743,"Esta propriedade s\xF3 pode ser utilizada quando o "),n(3744,"code"),e(3745,"type"),t(),e(3746," for "),n(3747,"em"),e(3748,"currency"),t(),e(3749," ou "),n(3750,"em"),e(3751,"decimal"),t(),e(3752,"."),t()()()(),n(3753,"tr",13)(3754,"td",14)(3755,"div",15)(3756,"span",16),e(3757," type"),i(3758,"br"),t()()(),n(3759,"td",17)(3760,"code",18),e(3761,"string "),t(),n(3762,"code",75),e(3763," PoDynamicFieldType"),t()(),n(3764,"td",20)(3765,"em")(3766,"strong"),e(3767,"(opcional)"),t()(),n(3768,"p"),e(3769,"Tipo do valor campo."),t(),n(3770,"p"),e(3771,"Valores v\xE1lidos:"),t(),n(3772,"ul")(3773,"li")(3774,"code"),e(3775,"boolean"),t(),e(3776,": Valores "),n(3777,"em"),e(3778,"booleanos"),t(),e(3779,"."),t(),n(3780,"li")(3781,"code"),e(3782,"currency"),t(),e(3783,": Valores monet\xE1rios."),t(),n(3784,"li")(3785,"code"),e(3786,"decimal"),t(),e(3787,": Valores decimais."),t(),n(3788,"li")(3789,"code"),e(3790,"date"),t(),e(3791,": Valores de datas."),n(3792,"ul")(3793,"li"),e(3794,"Aceita os tipos "),n(3795,"strong"),e(3796,"string"),t(),e(3797," e "),n(3798,"strong"),e(3799,"Date"),t(),e(3800,` padr\xE3o do Javascript,
por exemplo: `),n(3801,"code"),e(3802,"'2017-11-28'"),t(),e(3803," ou "),n(3804,"code"),e(3805,"new Date(2017, 10, 28)"),t(),e(3806,"."),t()()(),n(3807,"li")(3808,"code"),e(3809,"dateTime"),t(),e(3810,": Valor de data com hor\xE1rio."),n(3811,"ul")(3812,"li"),e(3813,"Aceita o tipo "),n(3814,"em"),e(3815,"string"),t(),e(3816," no formato "),n(3817,"strong"),e(3818,"ISO-8601"),t(),e(3819," extendido "),n(3820,"strong"),e(3821,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(3822,`
e o tipo `),n(3823,"strong"),e(3824,"Date"),t(),e(3825," padr\xE3o do Javascript, por exemplo: "),n(3826,"code"),e(3827,"'2017-11-28T00:00:00-02:00'"),t(),e(3828," ou "),n(3829,"code"),e(3830,"new Date(2017, 10, 28)"),t(),e(3831,"."),t()()(),n(3832,"li")(3833,"code"),e(3834,"number"),t(),e(3835,": Valores num\xE9ricos."),t(),n(3836,"li")(3837,"code"),e(3838,"string"),t(),e(3839,": Textos."),t(),n(3840,"li")(3841,"code"),e(3842,"time"),t(),e(3843,": Valor do hor\xE1rio."),n(3844,"ul")(3845,"li"),e(3846,"Aceita o tipo "),n(3847,"strong"),e(3848,"string"),t(),e(3849," nos formatos "),n(3850,"strong"),e(3851,"'HH:mm:ss'"),t(),e(3852," ou "),n(3853,"strong"),e(3854,"'HH:mm:ss.ffffff'"),t(),e(3855,", por exemplo: "),n(3856,"code"),e(3857,"'23:12:45'"),t(),e(3858,"."),t()()()()()(),n(3859,"tr",13)(3860,"td",14)(3861,"div",15)(3862,"span",16),e(3863," url"),i(3864,"br"),t()()(),n(3865,"td",17)(3866,"code",18),e(3867,"string"),t()(),n(3868,"td",20)(3869,"em")(3870,"strong"),e(3871,"(opcional)"),t()(),n(3872,"p"),e(3873,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t(),n(3874,"p")(3875,"strong"),e(3876,"Componente compat\xEDvel"),t(),e(3877,": "),n(3878,"code"),e(3879,"po-upload"),t()()()(),n(3880,"tr",13)(3881,"td",14)(3882,"div",15)(3883,"span",16),e(3884," validate"),i(3885,"br"),t()()(),n(3886,"td",17)(3887,"code",18),e(3888,"string "),t(),n(3889,"code",29),e(3890," Function"),t()(),n(3891,"td",20)(3892,"em")(3893,"strong"),e(3894,"(opcional)"),t()(),n(3895,"p"),e(3896,"Fun\xE7\xE3o ou servi\xE7o para validar as "),n(3897,"strong"),e(3898,"mudan\xE7as do campo"),t(),e(3899,"."),t(),n(3900,"ul")(3901,"li"),e(3902,"A propriedade aceita os seguintes tipos:"),t()(),n(3903,"ul")(3904,"li")(3905,"strong"),e(3906,"String"),t(),e(3907,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),n(3908,"code"),e(3909,"POST"),t(),e(3910,"."),t(),n(3911,"li")(3912,"strong"),e(3913,"Function"),t(),e(3914,": M\xE9todo que ser\xE1 executado."),t()(),n(3915,"p"),e(3916,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),n(3917,"code"),e(3918,"PoDynamicFormFieldChanged"),t(),e(3919,":"),t(),n(3920,"p")(3921,"code"),e(3922,"{ property: 'property name', value: 'new value' }"),t()(),n(3923,"p"),e(3924,"O retorno desta fun\xE7\xE3o deve ser do tipo "),n(3925,"a",76),e(3926,"PoDynamicFormFieldValidation"),t(),e(3927,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),t(),n(3928,"pre")(3929,"code"),e(3930,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),t()(),n(3931,"p"),e(3932,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),n(3933,"code"),e(3934,"bind"),t(),e(3935,`, por exemplo:
`),n(3936,"code"),e(3937,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),t()()()(),n(3938,"tr",13)(3939,"td",14)(3940,"div",15)(3941,"span",16),e(3942," visible"),i(3943,"br"),t()()(),n(3944,"td",17)(3945,"code",28),e(3946,"boolean"),t()(),n(3947,"td",20)(3948,"em")(3949,"strong"),e(3950,"(opcional)"),t()(),n(3951,"p"),e(3952,"Indica se o campo ser\xE1 vis\xEDvel."),t()()()(),n(3953,"h4",38)(3954,"code",5),e(3955,"PoDynamicFormLoad"),t()(),n(3956,"div",2)(3957,"p"),i(3958,"a",77),t(),n(3959,"p"),e(3960,"Estrutura de retorno no carregamento do formul\xE1rio."),t()(),n(3961,"h4",9),e(3962,"Propriedades"),t(),n(3963,"table",10)(3964,"tr",11)(3965,"th",12),e(3966,"Nome"),t(),n(3967,"th",12),e(3968,"Tipo"),t(),n(3969,"th",12),e(3970,"Descri\xE7\xE3o"),t()(),n(3971,"tr",13)(3972,"td",14)(3973,"div",15)(3974,"span",16),e(3975," fields"),i(3976,"br"),t()()(),n(3977,"td",17)(3978,"code",22),e(3979,"Array<PoDynamicFormField>"),t()(),n(3980,"td",20)(3981,"em")(3982,"strong"),e(3983,"(opcional)"),t()(),n(3984,"p"),e(3985,"Lista com as novas defini\xE7\xF5es dos campos."),t(),n(3986,"blockquote")(3987,"p"),e(3988,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que precisam ser alteradas ou adicionadas."),t()()()(),n(3989,"tr",13)(3990,"td",14)(3991,"div",15)(3992,"span",16),e(3993," focus"),i(3994,"br"),t()()(),n(3995,"td",17)(3996,"code",18),e(3997,"string"),t()(),n(3998,"td",20)(3999,"em")(4e3,"strong"),e(4001,"(opcional)"),t()(),n(4002,"p"),e(4003,"Nome do campo que receber\xE1 o foco."),t(),n(4004,"p"),e(4005,"Exemplo:"),t(),n(4006,"pre")(4007,"code"),e(4008,`focus: 'name'
`),t()()()(),n(4009,"tr",13)(4010,"td",14)(4011,"div",15)(4012,"span",16),e(4013," value"),i(4014,"br"),t()()(),n(4015,"td",17)(4016,"code",33),e(4017,"any"),t()(),n(4018,"td",20)(4019,"em")(4020,"strong"),e(4021,"(opcional)"),t()(),n(4022,"p"),e(4023,"Objeto contendo os novos valores."),t(),n(4024,"p"),e(4025,"Exemplo:"),t(),n(4026,"pre")(4027,"code"),e(4028,`{
  name: 'new name',
  age: 10
}
`),t()(),n(4029,"blockquote")(4030,"p"),e(4031,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),t()()()()(),n(4032,"h4",38)(4033,"code",5),e(4034,"PoDynamicFormFieldChanged"),t()(),n(4035,"div",2)(4036,"p"),e(4037,"Estrutura dos valores que ser\xE3o disparados quando houver uma mudan\xE7a em um campo ou no formul\xE1rio."),t()(),n(4038,"h4",9),e(4039,"Propriedades"),t(),n(4040,"table",10)(4041,"tr",11)(4042,"th",12),e(4043,"Nome"),t(),n(4044,"th",12),e(4045,"Tipo"),t(),n(4046,"th",12),e(4047,"Descri\xE7\xE3o"),t()(),n(4048,"tr",13)(4049,"td",14)(4050,"div",15)(4051,"span",16),e(4052," property"),i(4053,"br"),t()()(),n(4054,"td",17)(4055,"code",18),e(4056,"string"),t()(),n(4057,"td",20)(4058,"p"),e(4059,"Valor da propriedade do campo."),t()()(),n(4060,"tr",13)(4061,"td",14)(4062,"div",15)(4063,"span",16),e(4064," value"),i(4065,"br"),t()()(),n(4066,"td",17)(4067,"code",33),e(4068,"any"),t()(),n(4069,"td",20)(4070,"p"),e(4071,"Novo valor do campo."),t()()()(),n(4072,"h4",38)(4073,"code",5),e(4074,"PoDynamicFormFieldValidation"),t()(),n(4075,"div",2)(4076,"p"),i(4077,"a",78),t(),n(4078,"p"),e(4079,"Estrutura de retorno da valida\xE7\xE3o de um campo."),t()(),n(4080,"h4",9),e(4081,"Propriedades"),t(),n(4082,"table",10)(4083,"tr",11)(4084,"th",12),e(4085,"Nome"),t(),n(4086,"th",12),e(4087,"Tipo"),t(),n(4088,"th",12),e(4089,"Descri\xE7\xE3o"),t()(),n(4090,"tr",13)(4091,"td",14)(4092,"div",15)(4093,"span",16),e(4094," field"),i(4095,"br"),t()()(),n(4096,"td",17)(4097,"code",79),e(4098,"PoDynamicFormField"),t()(),n(4099,"td",20)(4100,"em")(4101,"strong"),e(4102,"(opcional)"),t()(),n(4103,"p"),e(4104,"Novas defini\xE7\xF5es das propriedades do campo."),t(),n(4105,"blockquote")(4106,"p"),e(4107,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades, apenas as que foram alteradas."),t()()()(),n(4108,"tr",13)(4109,"td",14)(4110,"div",15)(4111,"span",16),e(4112," focus"),i(4113,"br"),t()()(),n(4114,"td",17)(4115,"code",28),e(4116,"boolean"),t()(),n(4117,"td",20)(4118,"em")(4119,"strong"),e(4120,"(opcional)"),t()(),n(4121,"p"),e(4122,"Coloca o foco no campo ap\xF3s a valida\xE7\xE3o."),t()()(),n(4123,"tr",13)(4124,"td",14)(4125,"div",15)(4126,"span",16),e(4127," value"),i(4128,"br"),t()()(),n(4129,"td",17)(4130,"code",33),e(4131,"any"),t()(),n(4132,"td",20)(4133,"em")(4134,"strong"),e(4135,"(opcional)"),t()(),n(4136,"p"),e(4137,"Novo valor do campo"),t()()()(),n(4138,"h4",38)(4139,"code",5),e(4140,"PoDynamicFormValidation"),t()(),n(4141,"div",2)(4142,"p"),i(4143,"a",80),t(),n(4144,"p"),e(4145,"Estrutura de retorno da valida\xE7\xE3o do formul\xE1rio."),t()(),n(4146,"h4",9),e(4147,"Propriedades"),t(),n(4148,"table",10)(4149,"tr",11)(4150,"th",12),e(4151,"Nome"),t(),n(4152,"th",12),e(4153,"Tipo"),t(),n(4154,"th",12),e(4155,"Descri\xE7\xE3o"),t()(),n(4156,"tr",13)(4157,"td",14)(4158,"div",15)(4159,"span",16),e(4160," fields"),i(4161,"br"),t()()(),n(4162,"td",17)(4163,"code",22),e(4164,"Array<PoDynamicFormField>"),t()(),n(4165,"td",20)(4166,"em")(4167,"strong"),e(4168,"(opcional)"),t()(),n(4169,"p"),e(4170,"Lista com as novas defini\xE7\xF5es dos campos."),t(),n(4171,"blockquote")(4172,"p"),e(4173,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que foram alteradas."),t()()()(),n(4174,"tr",13)(4175,"td",14)(4176,"div",15)(4177,"span",16),e(4178," focus"),i(4179,"br"),t()()(),n(4180,"td",17)(4181,"code",18),e(4182,"string"),t()(),n(4183,"td",20)(4184,"em")(4185,"strong"),e(4186,"(opcional)"),t()(),n(4187,"p"),e(4188,"Nome do campo que receber\xE1 o foco."),t(),n(4189,"p"),e(4190,"Exemplo:"),t(),n(4191,"pre")(4192,"code"),e(4193,`focus: 'name'
`),t()()()(),n(4194,"tr",13)(4195,"td",14)(4196,"div",15)(4197,"span",16),e(4198," value"),i(4199,"br"),t()()(),n(4200,"td",17)(4201,"code",33),e(4202,"any"),t()(),n(4203,"td",20)(4204,"em")(4205,"strong"),e(4206,"(opcional)"),t()(),n(4207,"p"),e(4208,"Objeto contendo os novos valores."),t(),n(4209,"p"),e(4210,"Exemplo:"),t(),n(4211,"pre")(4212,"code"),e(4213,`{
  name: 'new name',
  age: 10
}
`),t()(),n(4214,"blockquote")(4215,"p"),e(4216,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),t()()()()(),n(4217,"h4",38)(4218,"code",5),e(4219,"ErrorAsyncProperties"),t()(),n(4220,"div",2)(4221,"p"),e(4222,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(4223,"h4",9),e(4224,"Propriedades"),t(),n(4225,"table",10)(4226,"tr",11)(4227,"th",12),e(4228,"Nome"),t(),n(4229,"th",12),e(4230,"Tipo"),t(),n(4231,"th",12),e(4232,"Descri\xE7\xE3o"),t()(),n(4233,"tr",13)(4234,"td",14)(4235,"div",15)(4236,"span",16),e(4237," errorAsync"),i(4238,"br"),t()()(),n(4239,"td",17)(4240,"code",46),e(4241,"(value) => Observable<boolean>"),t()(),n(4242,"td",20)(4243,"p"),e(4244,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(4245,"code"),e(4246,"change"),t(),e(4247," ou "),n(4248,"code"),e(4249,"change-model"),t(),e(4250,", dependendo do valor da propriedade "),n(4251,"code"),e(4252,"triggerMode"),t(),e(4253,"."),t()()(),n(4254,"tr",13)(4255,"td",14)(4256,"div",15)(4257,"span",16),e(4258," triggerMode"),i(4259,"br"),t()()(),n(4260,"td",17)(4261,"code",81),e(4262,"'change' "),t(),n(4263,"code",82),e(4264," 'changeModel'"),t()(),n(4265,"td",20)(4266,"em")(4267,"strong"),e(4268,"(opcional)"),t()(),n(4269,"p"),e(4270,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(4271,"code"),e(4272,"change"),t(),e(4273," ou "),n(4274,"code"),e(4275,"change-model"),t(),e(4276,"."),t()()()(),n(4277,"h3"),e(4278,"Enums"),t(),n(4279,"h4",4)(4280,"code",5),e(4281,"ForceBooleanComponentEnum"),t()(),n(4282,"div",2)(4283,"p"),e(4284,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),t()(),n(4285,"h4",9),e(4286,"Propriedades"),t(),n(4287,"table",10)(4288,"tr",11)(4289,"th",12),e(4290,"Nome"),t(),n(4291,"th",12),e(4292,"Descri\xE7\xE3o"),t()(),n(4293,"tr",13)(4294,"td",14)(4295,"div",15)(4296,"span",16),e(4297," switch"),i(4298,"br"),t()()(),n(4299,"td",20)(4300,"p"),e(4301,"For\xE7a a renderiza\xE7\xE3o de um po-switch"),t()()(),n(4302,"tr",13)(4303,"td",14)(4304,"div",15)(4305,"span",16),e(4306," checkbox"),i(4307,"br"),t()()(),n(4308,"td",20)(4309,"p"),e(4310,"For\xE7a a renderiza\xE7\xE3o de um po-checkbox"),t()()()(),n(4311,"h4",4)(4312,"code",5),e(4313,"ForceOptionComponentEnum"),t()(),n(4314,"div",2)(4315,"p"),e(4316,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),t()(),n(4317,"h4",9),e(4318,"Propriedades"),t(),n(4319,"table",10)(4320,"tr",11)(4321,"th",12),e(4322,"Nome"),t(),n(4323,"th",12),e(4324,"Descri\xE7\xE3o"),t()(),n(4325,"tr",13)(4326,"td",14)(4327,"div",15)(4328,"span",16),e(4329," radioGroup"),i(4330,"br"),t()()(),n(4331,"td",20)(4332,"p"),e(4333,"For\xE7a a renderiza\xE7\xE3o de um po-radio-group independente da quantidade do op\xE7\xF5es"),t()()(),n(4334,"tr",13)(4335,"td",14)(4336,"div",15)(4337,"span",16),e(4338," select"),i(4339,"br"),t()()(),n(4340,"td",20)(4341,"p"),e(4342,"For\xE7a a renderiza\xE7\xE3o de um po-select independente da quantidade do op\xE7\xF5es"),t()()()(),n(4343,"h4",4)(4344,"code",5),e(4345,"PoDynamicFieldType"),t()(),n(4346,"div",2)(4347,"p"),e(4348,"Enum para defini\xE7\xE3o do tipo de campo que ser\xE1 criado dinamicamente."),t()(),n(4349,"h4",9),e(4350,"Propriedades"),t(),n(4351,"table",10)(4352,"tr",11)(4353,"th",12),e(4354,"Nome"),t(),n(4355,"th",12),e(4356,"Descri\xE7\xE3o"),t()(),n(4357,"tr",13)(4358,"td",14)(4359,"div",15)(4360,"span",16),e(4361," Boolean"),i(4362,"br"),t()()(),n(4363,"td",20)(4364,"p"),e(4365,"Valor booleano."),t()()(),n(4366,"tr",13)(4367,"td",14)(4368,"div",15)(4369,"span",16),e(4370," Currency"),i(4371,"br"),t()()(),n(4372,"td",20)(4373,"p"),e(4374,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),t()()(),n(4375,"tr",13)(4376,"td",14)(4377,"div",15)(4378,"span",16),e(4379," Decimal"),i(4380,"br"),t()()(),n(4381,"td",20)(4382,"p"),e(4383,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),t()()(),n(4384,"tr",13)(4385,"td",14)(4386,"div",15)(4387,"span",16),e(4388," Date"),i(4389,"br"),t()()(),n(4390,"td",20)(4391,"p"),e(4392,"Valor para data."),t()()(),n(4393,"tr",13)(4394,"td",14)(4395,"div",15)(4396,"span",16),e(4397," DateTime"),i(4398,"br"),t()()(),n(4399,"td",20)(4400,"p"),e(4401,"Valor para data e hora."),t()()(),n(4402,"tr",13)(4403,"td",14)(4404,"div",15)(4405,"span",16),e(4406," Time"),i(4407,"br"),t()()(),n(4408,"td",20)(4409,"p"),e(4410,"Utilizado para informar/exibir hora."),t()()(),n(4411,"tr",13)(4412,"td",14)(4413,"div",15)(4414,"span",16),e(4415," Number"),i(4416,"br"),t()()(),n(4417,"td",20)(4418,"p"),e(4419,"Valor num\xE9rico."),t()()(),n(4420,"tr",13)(4421,"td",14)(4422,"div",15)(4423,"span",16),e(4424," String"),i(4425,"br"),t()()(),n(4426,"td",20)(4427,"p"),e(4428,"Texto."),t()()(),n(4429,"tr",13)(4430,"td",14)(4431,"div",15)(4432,"span",16),e(4433," Upload"),i(4434,"br"),t()()(),n(4435,"td",20)(4436,"p"),e(4437,"Utilizado para fazer uploads de arquivos."),t()()()()())},dependencies:[b],encapsulation:2})}return o})();var ie=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(O(K),O(X))};static \u0275cmp=s({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Dynamic Form",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),c("p-click",function(){return l.changeTab("doc")}),i(3,"sample-po-dynamic-form-doc"),t(),n(4,"po-tab",3),c("p-click",function(){return l.changeTab("web")}),i(5,"sample-po-dynamic-form-basic-view")(6,"sample-po-dynamic-form-register-view")(7,"sample-po-dynamic-form-container-view"),t()()()),a&2&&(p("p-actions",l.actions),d(2),p("p-active",l.activeTab==="doc"),d(2),p("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"))},dependencies:[J,x,S,Q,$,te,ne],encapsulation:2})}return o})();var ye=[{path:"",component:ie}],oe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=T({type:o});static \u0275inj=P({imports:[L.forChild(ye),L]})}return o})();var et=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=T({type:o});static \u0275inj=P({imports:[W,oe]})}return o})();export{et as DocPoDynamicFormModule};
