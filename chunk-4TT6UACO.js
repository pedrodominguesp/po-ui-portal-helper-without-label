import{o as b,p as W}from"./chunk-AFRMAFNN.js";import{Jb as z,Ya as C,lb as J,sa as j,v as M,xb as x,yb as S}from"./chunk-TRMMOLUM.js";import{$a as U,Ca as y,Eb as h,Ka as n,L as D,La as t,M as P,Ma as i,P as g,Qa as w,Ra as c,T as q,U as k,Wc as K,Yc as X,Za as R,_a as H,_c as L,ab as v,bb as e,db as f,ia as d,ja as O,lb as A,mb as _,nb as E,pa as s,qa as T,za as p}from"./chunk-TTO7B3JZ.js";var re=()=>({property:"name",required:!0,showRequired:!0}),le=o=>[o],G=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-basic"]],standalone:!1,decls:1,vars:4,consts:[[3,"p-fields"]],template:function(a,l){a&1&&i(0,"po-dynamic-form",0),a&2&&p("p-fields",E(2,le,_(1,re)))},dependencies:[C],encapsulation:2})}return o})();var de=o=>({"docs-sample-code-tabs":o}),Q=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form Basic"),t(),n(4,"a",2),c("click",function(){return l.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-dynamic-form [p-fields]="[{ property: 'name', required: true, showRequired: true }]"> </po-dynamic-form>
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
`),t()()()()(),n(25,"div",10),i(26,"sample-po-dynamic-form-container"),t(),i(27,"hr")),a&2&&(d(5),y("po-icon "+l.sampleCodeButtonIcon),d(),f(" ",l.sampleCodeButtonLabel,""),d(),p("ngClass",E(4,Se,l.hideSampleCodeTabs)))},dependencies:[h,b,x,S,ee],encapsulation:2})}return o})();var ne=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-doc"]],standalone:!1,decls:4399,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoDynamicFormField>"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"language-html"],[1,"language-ts"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Function"],["href","documentation/po-dynamic-form#po-dynamic-form-load"],["href","documentation/po-dynamic-form#po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-javascript"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["id","po-dynamic-form-load"],["id","po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type","PoDynamicFormField"],["id","po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(a,l){a&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoDynamicModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2),n(5,"h3",3),e(6,"Componente"),t(),n(7,"h4",4)(8,"code",5),e(9,"PoDynamicFormComponent"),t()(),n(10,"div",2)(11,"p"),e(12,"Componente para cria\xE7\xE3o de formul\xE1rios din\xE2micos a partir de uma lista de objetos."),t(),n(13,"p"),e(14,"Tamb\xE9m \xE9 poss\xEDvel verificar se o formul\xE1rio est\xE1 v\xE1lido e informar valores para a exibi\xE7\xE3o de informa\xE7\xF5es. "),t()(),n(15,"div",6)(16,"h4",7),e(17,"Seletor"),t(),n(18,"pre",8),e(19,`<po-dynamic-form
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
`),t()()()()(),n(586,"h5")(587,"b"),e(588,"Par\xE2metros"),t()(),n(589,"table",10)(590,"tr",11)(591,"th",12),e(592,"Nome"),t(),n(593,"th",12),e(594,"Tipo"),t(),n(595,"th",12),e(596,"Descri\xE7\xE3o"),t()(),n(597,"tr",13)(598,"td",14),e(599," property"),t(),n(600,"td",17)(601,"code",37),e(602," string "),t()(),n(603,"td",20)(604,"p"),e(605,"Nome da propriedade atribu\xEDda ao "),n(606,"code"),e(607,"PoDynamicFormField.property"),t(),e(608,"."),t()()()(),i(609,"br"),n(610,"table",34)(611,"tr",13)(612,"th",35)(613,"div",15)(614,"h4")(615,"span",16),e(616," showAdditionalHelp "),t()()()()(),n(617,"tr",20)(618,"td",20)(619,"p"),e(620,"M\xE9todo que exibe "),n(621,"code"),e(622,"additionalHelpTooltip"),t(),e(623," ou executa a a\xE7\xE3o definida em "),n(624,"code"),e(625,"additionalHelp"),t(),e(626,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(627,"code"),e(628,"keydown"),t(),e(629,"."),t(),n(630,"pre")(631,"code"),e(632,`import { PoDynamicModule } from '@po-ui/ng-components';
...
@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
 {
   property: 'name',
   ...
   help: 'Mensagem de ajuda.',
   additionalHelpTooltip: 'Mensagem de ajuda complementar.',
   keydown: this.onKeyDown.bind(this, 'name')
 },
]

onKeyDown(property: string, event: KeyboardEvent): void {
 if (event.code === 'F9') {
   this.dynamicForm.showAdditionalHelp(property);
 }
}
`),t()()()()(),n(633,"h5")(634,"b"),e(635,"Par\xE2metros"),t()(),n(636,"table",10)(637,"tr",11)(638,"th",12),e(639,"Nome"),t(),n(640,"th",12),e(641,"Tipo"),t(),n(642,"th",12),e(643,"Descri\xE7\xE3o"),t()(),n(644,"tr",13)(645,"td",14),e(646," property"),t(),n(647,"td",17)(648,"code",37),e(649," string "),t()(),n(650,"td",20)(651,"p"),e(652,"Identificador da coluna."),t()()()(),i(653,"br"),n(654,"h3"),e(655,"Interfaces"),t(),n(656,"h4",38)(657,"code",5),e(658,"PoDynamicFormField"),t()(),n(659,"div",2)(660,"p"),e(661," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente."),t()(),n(662,"h4",9),e(663,"Propriedades"),t(),n(664,"table",10)(665,"tr",11)(666,"th",12),e(667,"Nome"),t(),n(668,"th",12),e(669,"Tipo"),t(),n(670,"th",12),e(671,"Descri\xE7\xE3o"),t()(),n(672,"tr",13)(673,"td",14)(674,"div",15)(675,"span",16),e(676," additionalHelp"),i(677,"br"),t()()(),n(678,"td",17)(679,"code",29),e(680,"Function"),t()(),n(681,"td",20)(682,"em")(683,"strong"),e(684,"(opcional)"),t()(),n(685,"p"),e(686,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(687,"code"),e(688,"p-help"),t(),e(689,"."),t(),n(690,"blockquote")(691,"p"),e(692,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),t()()()(),n(693,"tr",13)(694,"td",14)(695,"div",15)(696,"span",16),e(697," additionalHelpTooltip"),i(698,"br"),t()()(),n(699,"td",17)(700,"code",18),e(701,"string"),t()(),n(702,"td",20)(703,"em")(704,"strong"),e(705,"(opcional)"),t()(),n(706,"p"),e(707,"Exibe um \xEDcone de ajuda adicional ao "),n(708,"code"),e(709,"p-help"),t(),e(710,`, com o texto desta propriedade no tooltip.
Se o evento `),n(711,"code"),e(712,"p-additional-help"),t(),e(713,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(714,"strong"),e(715,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(716,"blockquote")(717,"p"),e(718,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),t()()()(),n(719,"tr",13)(720,"td",14)(721,"div",15)(722,"span",16),e(723," advancedFilters"),i(724,"br"),t()()(),n(725,"td",17)(726,"code",39),e(727,"Array<PoLookupAdvancedFilter>"),t()(),n(728,"td",20)(729,"em")(730,"strong"),e(731,"(opcional)"),t()(),n(732,"p"),e(733,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),n(734,"blockquote")(735,"p"),e(736,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),n(737,"p"),e(738,"Exemplo de URL com busca avan\xE7ada:"),t(),n(739,"p")(740,"code"),e(741,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),t()(),n(742,"p"),e(743,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),t(),n(744,"p")(745,"code"),e(746,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),t()()()(),n(747,"tr",13)(748,"td",14)(749,"div",15)(750,"span",16),e(751," appendBox"),i(752,"br"),t()()(),n(753,"td",17)(754,"code",28),e(755,"boolean"),t()(),n(756,"td",20)(757,"em")(758,"strong"),e(759,"(opcional)"),t()(),n(760,"p"),e(761,"Define que o "),n(762,"code"),e(763,"listbox"),t(),e(764," e/ou tooltip ("),n(765,"code"),e(766,"p-additional-help-tooltip"),t(),e(767," e/ou "),n(768,"code"),e(769,"p-error-limit"),t(),e(770,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),n(771,"blockquote")(772,"p"),e(773,"Quando utilizado com "),n(774,"code"),e(775,"p-additional-help-tooltip"),t(),e(776,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(777,"tr",13)(778,"td",14)(779,"div",15)(780,"span",16),e(781," autoHeight"),i(782,"br"),t()()(),n(783,"td",17)(784,"code",28),e(785,"boolean"),t()(),n(786,"td",20)(787,"em")(788,"strong"),e(789,"(opcional)"),t()(),n(790,"p"),e(791,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),t(),n(792,"p")(793,"strong"),e(794,"Componentes compat\xEDveis:"),t(),n(795,"code"),e(796,"po-multiselect"),t(),e(797,", "),n(798,"code"),e(799,"po-lookup"),t(),e(800,"."),t()()(),n(801,"tr",13)(802,"td",14)(803,"div",15)(804,"span",16),e(805," autoUpload"),i(806,"br"),t()()(),n(807,"td",17)(808,"code",28),e(809,"boolean"),t()(),n(810,"td",20)(811,"em")(812,"strong"),e(813,"(opcional)"),t()(),n(814,"p"),e(815,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),n(816,"p")(817,"strong"),e(818,"Componente compat\xEDvel"),t(),e(819,": "),n(820,"code"),e(821,"po-upload"),t()()()(),n(822,"tr",13)(823,"td",14)(824,"div",15)(825,"span",16),e(826," booleanFalse"),i(827,"br"),t()()(),n(828,"td",17)(829,"code",18),e(830,"string"),t()(),n(831,"td",20)(832,"em")(833,"strong"),e(834,"(opcional)"),t()(),n(835,"p"),e(836,"Texto exibido quando o valor do componente for "),n(837,"em"),e(838,"false"),t(),e(839,"."),t()()(),n(840,"tr",13)(841,"td",14)(842,"div",15)(843,"span",16),e(844," booleanTrue"),i(845,"br"),t()()(),n(846,"td",17)(847,"code",18),e(848,"string"),t()(),n(849,"td",20)(850,"em")(851,"strong"),e(852,"(opcional)"),t()(),n(853,"p"),e(854,"Texto exibido quando o valor do componente for "),n(855,"em"),e(856,"true"),t(),e(857,"."),t()()(),n(858,"tr",13)(859,"td",14)(860,"div",15)(861,"span",16),e(862," changeOnEnter"),i(863,"br"),t()()(),n(864,"td",17)(865,"code",28),e(866,"boolean"),t()(),n(867,"td",20)(868,"em")(869,"strong"),e(870,"(opcional)"),t()(),n(871,"p"),e(872,"Indica que o evento "),n(873,"code"),e(874,"p-change"),t(),e(875,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),n(876,"code"),e(877,"po-combo"),t(),e(878,"."),t()()(),n(879,"tr",13)(880,"td",14)(881,"div",15)(882,"span",16),e(883," changeVisibleColumns"),i(884,"br"),t()()(),n(885,"td",17)(886,"code",29),e(887,"Function"),t()(),n(888,"td",20)(889,"em")(890,"strong"),e(891,"(opcional)"),t()(),n(892,"p"),e(893,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),n(894,"p"),e(895,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),n(896,"p")(897,"strong"),e(898,"Componentes compat\xEDveis"),t(),e(899,": "),n(900,"code"),e(901,"po-lookup"),t()()()(),n(902,"tr",13)(903,"td",14)(904,"div",15)(905,"span",16),e(906," clean"),i(907,"br"),t()()(),n(908,"td",17)(909,"code",28),e(910,"boolean"),t()(),n(911,"td",20)(912,"em")(913,"strong"),e(914,"(opcional)"),t()(),n(915,"p"),e(916,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t(),n(917,"p")(918,"strong"),e(919,"Componentes compat\xEDveis:"),t(),n(920,"code"),e(921,"po-datepicker"),t(),e(922,", "),n(923,"code"),e(924,"po-datepicker-range"),t(),e(925,", "),n(926,"code"),e(927,"po-input"),t(),e(928,", "),n(929,"code"),e(930,"po-number"),t(),e(931,", "),n(932,"code"),e(933,"po-decimal"),t(),e(934,", "),n(935,"code"),e(936,"po-combo"),t(),e(937,", "),n(938,"code"),e(939,"po-lookup"),t(),e(940,", "),n(941,"code"),e(942,"po-password"),t()()()(),n(943,"tr",13)(944,"td",14)(945,"div",15)(946,"span",16),e(947," columnRestoreManager"),i(948,"br"),t()()(),n(949,"td",17)(950,"code",29),e(951,"Function"),t()(),n(952,"td",20)(953,"em")(954,"strong"),e(955,"(opcional)"),t()(),n(956,"p"),e(957,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),n(958,"p"),e(959,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),n(960,"p")(961,"strong"),e(962,"Componentes compat\xEDveis"),t(),e(963,": "),n(964,"code"),e(965,"po-lookup"),t()()()(),n(966,"tr",13)(967,"td",14)(968,"div",15)(969,"span",16),e(970," columns"),i(971,"br"),t()()(),n(972,"td",17)(973,"code",40),e(974,"Array<PoLookupColumn> "),t(),n(975,"code",41),e(976," number"),t()(),n(977,"td",20)(978,"em")(979,"strong"),e(980,"(opcional)"),t()(),n(981,"p"),e(982,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),n(983,"code"),e(984,"searchService"),t(),e(985,`,
essa propriedade deve receber um array de objetos que implementam a interface `),n(986,"a",42)(987,"code"),e(988,"PoLookupColumn"),t()(),e(989,"."),t(),n(990,"blockquote")(991,"p"),e(992,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),n(993,"em"),e(994,"label"),t(),e(995," e "),n(996,"em"),e(997,"value"),t(),e(998,` para valores
de tela e do model respectivamente.`),t()(),n(999,"p")(1e3,"strong"),e(1001,"Componentes compat\xEDveis:"),t(),n(1002,"code"),e(1003,"po-radio-group"),t(),e(1004,", "),n(1005,"code"),e(1006,"po-lookup"),t(),e(1007,", "),n(1008,"code"),e(1009,"po-checkbox-group"),t(),e(1010,"."),t()()(),n(1011,"tr",13)(1012,"td",14)(1013,"div",15)(1014,"span",16),e(1015," container"),i(1016,"br"),t()()(),n(1017,"td",17)(1018,"code",18),e(1019,"string"),t()(),n(1020,"td",20)(1021,"em")(1022,"strong"),e(1023,"(opcional)"),t()(),n(1024,"p"),e(1025,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),t(),n(1026,"p"),e(1027,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),t()()(),n(1028,"tr",13)(1029,"td",14)(1030,"div",15)(1031,"span",16),e(1032," customAction"),i(1033,"br"),t()()(),n(1034,"td",17)(1035,"code",43),e(1036,"PoProgressAction"),t()(),n(1037,"td",20)(1038,"em")(1039,"strong"),e(1040,"(opcional)"),t()(),n(1041,"p"),e(1042,"Define uma a\xE7\xE3o personalizada no componente "),n(1043,"code"),e(1044,"po-upload"),t(),e(1045,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),t(),n(1046,"p")(1047,"strong"),e(1048,"Componente compat\xEDvel"),t(),e(1049,": "),n(1050,"code"),e(1051,"po-upload"),t(),e(1052,","),t(),n(1053,"p")(1054,"strong"),e(1055,"Exemplo de configura\xE7\xE3o"),t(),e(1056,":"),t(),n(1057,"pre")(1058,"code",44),e(1059,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),t()()()(),n(1060,"tr",13)(1061,"td",14)(1062,"div",15)(1063,"span",16),e(1064," customActionClick"),i(1065,"br"),t()()(),n(1066,"td",17)(1067,"code",45),e(1068,"(file: PoUploadFile) => void"),t()(),n(1069,"td",20)(1070,"em")(1071,"strong"),e(1072,"(opcional)"),t()(),n(1073,"p"),e(1074,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),n(1075,"code"),e(1076,"p-custom-action"),t(),e(1077,"."),t(),n(1078,"p")(1079,"strong"),e(1080,"Componente compat\xEDvel"),t(),e(1081,": "),n(1082,"code"),e(1083,"po-upload"),t(),e(1084,","),t(),n(1085,"p"),e(1086,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),t(),n(1087,"p")(1088,"strong"),e(1089,"Par\xE2metro do evento"),t(),e(1090,":"),t(),n(1091,"ul")(1092,"li")(1093,"code"),e(1094,"file"),t(),e(1095,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),n(1096,"code"),e(1097,"PoUploadFile"),t(),e(1098," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),t()(),n(1099,"p")(1100,"strong"),e(1101,"Exemplo de uso"),t(),e(1102,":"),t(),n(1103,"pre")(1104,"code",44),e(1105,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),t()()()(),n(1106,"tr",13)(1107,"td",14)(1108,"div",15)(1109,"span",16),e(1110," debounceTime"),i(1111,"br"),t()()(),n(1112,"td",17)(1113,"code",41),e(1114,"number"),t()(),n(1115,"td",20)(1116,"em")(1117,"strong"),e(1118,"(opcional)"),t()(),n(1119,"p"),e(1120,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),n(1121,"code"),e(1122,"p-filter-service"),t(),e(1123,")."),t(),n(1124,"p")(1125,"strong"),e(1126,"Componentes compat\xEDveis:"),t(),n(1127,"code"),e(1128,"po-combo"),t(),e(1129,", "),n(1130,"code"),e(1131,"po-multiselect"),t(),e(1132,"."),t()()(),n(1133,"tr",13)(1134,"td",14)(1135,"div",15)(1136,"span",16),e(1137," decimalsLength"),i(1138,"br"),t()()(),n(1139,"td",17)(1140,"code",41),e(1141,"number"),t()(),n(1142,"td",20)(1143,"em")(1144,"strong"),e(1145,"(opcional)"),t()(),n(1146,"p"),e(1147,"Quantidade m\xE1xima de casas decimais."),t(),n(1148,"blockquote")(1149,"p"),e(1150,"Esta propriedade s\xF3 pode ser utilizada quando o "),n(1151,"code"),e(1152,"type"),t(),e(1153," for "),n(1154,"em"),e(1155,"currency"),t(),e(1156," ou "),n(1157,"em"),e(1158,"decimal"),t(),e(1159,"."),t()()()(),n(1160,"tr",13)(1161,"td",14)(1162,"div",15)(1163,"span",16),e(1164," directory"),i(1165,"br"),t()()(),n(1166,"td",17)(1167,"code",28),e(1168,"boolean"),t()(),n(1169,"td",20)(1170,"em")(1171,"strong"),e(1172,"(opcional)"),t()(),n(1173,"p"),e(1174,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),n(1175,"blockquote")(1176,"p"),e(1177,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),n(1178,"blockquote")(1179,"p"),e(1180,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),n(1181,"strong"),e(1182,"Internet Explorer"),t(),e(1183,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()(),n(1184,"p")(1185,"strong"),e(1186,"Componente compat\xEDvel"),t(),e(1187,": "),n(1188,"code"),e(1189,"po-upload"),t()()()(),n(1190,"tr",13)(1191,"td",14)(1192,"div",15)(1193,"span",16),e(1194," disabled"),i(1195,"br"),t()()(),n(1196,"td",17)(1197,"code",28),e(1198,"boolean"),t()(),n(1199,"td",20)(1200,"em")(1201,"strong"),e(1202,"(opcional)"),t()(),n(1203,"p"),e(1204,"Desabilita o campo caso informar o valor "),n(1205,"em"),e(1206,"true"),t(),e(1207,"."),t()()(),n(1208,"tr",13)(1209,"td",14)(1210,"div",15)(1211,"span",16),e(1212," disabledInitFilter"),i(1213,"br"),t()()(),n(1214,"td",17)(1215,"code",28),e(1216,"boolean"),t()(),n(1217,"td",20)(1218,"em")(1219,"strong"),e(1220,"(opcional)"),t()(),n(1221,"p"),e(1222,"Desabilita o filtro inicial no servi\xE7o do "),n(1223,"code"),e(1224,"po-combo"),t(),e(1225,", que \xE9 executado no primeiro clique no campo."),t()()(),n(1226,"tr",13)(1227,"td",14)(1228,"div",15)(1229,"span",16),e(1230," disabledTabFilter"),i(1231,"br"),t()()(),n(1232,"td",17)(1233,"code",28),e(1234,"boolean"),t()(),n(1235,"td",20)(1236,"em")(1237,"strong"),e(1238,"(opcional)"),t()(),n(1239,"p"),e(1240,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),n(1241,"code"),e(1242,"po-combo"),t(),e(1243,"."),t()()(),n(1244,"tr",13)(1245,"td",14)(1246,"div",15)(1247,"span",16),e(1248," divider"),i(1249,"br"),t()()(),n(1250,"td",17)(1251,"code",18),e(1252,"string"),t()(),n(1253,"td",20)(1254,"em")(1255,"strong"),e(1256,"(opcional)"),t()(),n(1257,"p"),e(1258,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),t()()(),n(1259,"tr",13)(1260,"td",14)(1261,"div",15)(1262,"span",16),e(1263," dragDrop"),i(1264,"br"),t()()(),n(1265,"td",17)(1266,"code",28),e(1267,"boolean"),t()(),n(1268,"td",20)(1269,"em")(1270,"strong"),e(1271,"(opcional)"),t()(),n(1272,"p"),e(1273,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),n(1274,"blockquote")(1275,"p"),e(1276,"Recomendamos utilizar apenas um "),n(1277,"code"),e(1278,"po-upload"),t(),e(1279," com esta funcionalidade por tela."),t()(),n(1280,"p")(1281,"strong"),e(1282,"Componente compat\xEDvel"),t(),e(1283,": "),n(1284,"code"),e(1285,"po-upload"),t()()()(),n(1286,"tr",13)(1287,"td",14)(1288,"div",15)(1289,"span",16),e(1290," dragDropHeight"),i(1291,"br"),t()()(),n(1292,"td",17)(1293,"code",41),e(1294,"number"),t()(),n(1295,"td",20)(1296,"em")(1297,"strong"),e(1298,"(opcional)"),t()(),n(1299,"p"),e(1300,"Define em "),n(1301,"em"),e(1302,"pixels"),t(),e(1303," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),n(1304,"code"),e(1305,"160px"),t(),e(1306,"."),t(),n(1307,"blockquote")(1308,"p"),e(1309,"Esta propriedade funciona somente se a propriedade "),n(1310,"code"),e(1311,"p-drag-drop"),t(),e(1312," estiver habilitada."),t()(),n(1313,"p")(1314,"strong"),e(1315,"Componente compat\xEDvel"),t(),e(1316,": "),n(1317,"code"),e(1318,"po-upload"),t()()()(),n(1319,"tr",13)(1320,"td",14)(1321,"div",15)(1322,"span",16),e(1323," errorAsyncFunction"),i(1324,"br"),t()()(),n(1325,"td",17)(1326,"code",46),e(1327,"(value) => Observable<boolean>"),t()(),n(1328,"td",20)(1329,"em")(1330,"strong"),e(1331,"(opcional)"),t()(),n(1332,"p"),e(1333,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1334,"code"),e(1335,"change"),t(),e(1336," ou "),n(1337,"code"),e(1338,"change-model"),t(),e(1339,", dependendo do valor da propriedade "),n(1340,"code"),e(1341,"triggerMode"),t(),e(1342,"."),t(),n(1343,"blockquote")(1344,"p"),e(1345,"Retorna "),n(1346,"code"),e(1347,"Observable com o valor true"),t(),e(1348," para sinalizar o erro "),n(1349,"code"),e(1350,"false"),t(),e(1351," para indicar que n\xE3o h\xE1 erro."),t()(),n(1352,"p")(1353,"strong"),e(1354,"Componente compat\xEDvel"),t(),e(1355,": "),n(1356,"code"),e(1357,"po-datepicker"),t()()()(),n(1358,"tr",13)(1359,"td",14)(1360,"div",15)(1361,"span",16),e(1362," errorAsyncProperties"),i(1363,"br"),t()()(),n(1364,"td",17)(1365,"code",47),e(1366,"ErrorAsyncProperties"),t()(),n(1367,"td",20)(1368,"em")(1369,"strong"),e(1370,"(opcional)"),t()(),n(1371,"p"),e(1372,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),t(),n(1373,"p")(1374,"strong"),e(1375,"Componentes compat\xEDveis:"),t(),n(1376,"code"),e(1377,"po-input"),t(),e(1378,", "),n(1379,"code"),e(1380,"po-number"),t(),e(1381,", "),n(1382,"code"),e(1383,"po-decimal"),t(),e(1384,", "),n(1385,"code"),e(1386,"po-password"),t(),e(1387,"."),t()()(),n(1388,"tr",13)(1389,"td",14)(1390,"div",15)(1391,"span",16),e(1392," errorLimit"),i(1393,"br"),t()()(),n(1394,"td",17)(1395,"code",28),e(1396,"boolean"),t()(),n(1397,"td",20)(1398,"em")(1399,"strong"),e(1400,"(opcional)"),t()(),n(1401,"p"),e(1402,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(1403,"blockquote")(1404,"p"),e(1405,"Caso essa propriedade seja definida como "),n(1406,"code"),e(1407,"true"),t(),e(1408,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()(),n(1409,"p")(1410,"strong"),e(1411,"Componentes compat\xEDveis:"),t(),n(1412,"code"),e(1413,"po-checkbox-group"),t(),e(1414,", "),n(1415,"code"),e(1416,"po-combo"),t(),e(1417,", "),n(1418,"code"),e(1419,"po-datepicker"),t(),e(1420,", "),n(1421,"code"),e(1422,"po-datepicker-range"),t(),e(1423,", "),n(1424,"code"),e(1425,"po-decimal"),t(),e(1426,", "),n(1427,"code"),e(1428,"po-input"),t(),e(1429,", "),n(1430,"code"),e(1431,"po-lookup"),t(),e(1432,", "),n(1433,"code"),e(1434,"po-multiselect"),t(),e(1435,", "),n(1436,"code"),e(1437,"po-number"),t(),e(1438,", "),n(1439,"code"),e(1440,"po-password"),t(),e(1441,", "),n(1442,"code"),e(1443,"po-radio-group"),t(),e(1444,", "),n(1445,"code"),e(1446,"po-select"),t(),e(1447,", "),n(1448,"code"),e(1449,"po-switch"),t(),e(1450,", "),n(1451,"code"),e(1452,"po-textarea"),t(),e(1453,"."),t()()(),n(1454,"tr",13)(1455,"td",14)(1456,"div",15)(1457,"span",16),e(1458," errorMessage"),i(1459,"br"),t()()(),n(1460,"td",17)(1461,"code",18),e(1462,"string"),t()(),n(1463,"td",20)(1464,"em")(1465,"strong"),e(1466,"(opcional)"),t()(),n(1467,"p"),e(1468,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),t(),n(1469,"p"),e(1470,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),t(),n(1471,"ul")(1472,"li"),e(1473,"pattern;"),t(),n(1474,"li"),e(1475,"minValue;"),t(),n(1476,"li"),e(1477,"maxValue;"),t(),n(1478,"li"),e(1479,"required;"),t()(),n(1480,"blockquote")(1481,"p"),e(1482,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),n(1483,"code"),e(1484,"po-datepicker"),t(),e(1485,", "),n(1486,"code"),e(1487,"po-input"),t(),e(1488,", "),n(1489,"code"),e(1490,"po-number"),t(),e(1491,", "),n(1492,"code"),e(1493,"po-decimal"),t(),e(1494,", "),n(1495,"code"),e(1496,"po-password"),t(),e(1497,`, \xE9 necess\xE1rio que a propriedade
`),n(1498,"code"),e(1499,"requiredFieldErrorMessage"),t(),e(1500," esteja como "),n(1501,"code"),e(1502,"true"),t(),e(1503,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),n(1504,"code"),e(1505,"po-datepicker-range"),t(),e(1506,", "),n(1507,"code"),e(1508,"po-select"),t(),e(1509,", "),n(1510,"code"),e(1511,"po-checkbox-group"),t(),e(1512,", "),n(1513,"code"),e(1514,"po-radio-group"),t(),e(1515,", "),n(1516,"code"),e(1517,"po-multiselect"),t(),e(1518,", "),n(1519,"code"),e(1520,"po-combo"),t(),e(1521,`,
`),n(1522,"code"),e(1523,"po-lookup"),t(),e(1524," e "),n(1525,"code"),e(1526,"po-textarea"),t(),e(1527," n\xE3o \xE9 necess\xE1rio passar a propriedade "),n(1528,"code"),e(1529,"requiredFieldErrorMessage"),t(),e(1530,"."),t()(),n(1531,"p")(1532,"strong"),e(1533,"Componentes compat\xEDveis:"),t(),n(1534,"code"),e(1535,"po-checkbox-group"),t(),e(1536,", "),n(1537,"code"),e(1538,"po-combo"),t(),e(1539,", "),n(1540,"code"),e(1541,"po-datepicker"),t(),e(1542,", "),n(1543,"code"),e(1544,"po-datepicker-range"),t(),e(1545,", "),n(1546,"code"),e(1547,"po-decimal"),t(),e(1548,", "),n(1549,"code"),e(1550,"po-input"),t(),e(1551,", "),n(1552,"code"),e(1553,"po-lookup"),t(),e(1554,", "),n(1555,"code"),e(1556,"po-multiselect"),t(),e(1557,", "),n(1558,"code"),e(1559,"po-number"),t(),e(1560,", "),n(1561,"code"),e(1562,"po-password"),t(),e(1563,", "),n(1564,"code"),e(1565,"po-radio-group"),t(),e(1566,", "),n(1567,"code"),e(1568,"po-select"),t(),e(1569,", "),n(1570,"code"),e(1571,"po-switch"),t(),e(1572,", "),n(1573,"code"),e(1574,"po-textarea"),t(),e(1575,"."),t()()(),n(1576,"tr",13)(1577,"td",14)(1578,"div",15)(1579,"span",16),e(1580," fieldLabel"),i(1581,"br"),t()()(),n(1582,"td",17)(1583,"code",18),e(1584,"string"),t()(),n(1585,"td",20)(1586,"em")(1587,"strong"),e(1588,"(opcional)"),t()(),n(1589,"p"),e(1590,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),t(),n(1591,"p"),e(1592,"O valor padr\xE3o \xE9: "),n(1593,"code"),e(1594,"label"),t(),e(1595,"."),t(),n(1596,"blockquote")(1597,"p"),e(1598,"Esta propriedade pode ser utilizada em conjunto com: "),n(1599,"code"),e(1600,"options"),t(),e(1601,", "),n(1602,"code"),e(1603,"optionsService"),t(),e(1604," e "),n(1605,"code"),e(1606,"searchService"),t(),e(1607,"."),t()()()(),n(1608,"tr",13)(1609,"td",14)(1610,"div",15)(1611,"span",16),e(1612," fieldValue"),i(1613,"br"),t()()(),n(1614,"td",17)(1615,"code",18),e(1616,"string"),t()(),n(1617,"td",20)(1618,"em")(1619,"strong"),e(1620,"(opcional)"),t()(),n(1621,"p"),e(1622,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),t(),n(1623,"p"),e(1624,"O valor padr\xE3o \xE9: "),n(1625,"code"),e(1626,"value"),t(),e(1627,"."),t(),n(1628,"blockquote")(1629,"p"),e(1630,"Esta propriedade pode ser utilizada em conjunto com: "),n(1631,"code"),e(1632,"options"),t(),e(1633,", "),n(1634,"code"),e(1635,"optionsService"),t(),e(1636," e "),n(1637,"code"),e(1638,"searchService"),t(),e(1639,"."),t()()()(),n(1640,"tr",13)(1641,"td",14)(1642,"div",15)(1643,"span",16),e(1644," filterMinlength"),i(1645,"br"),t()()(),n(1646,"td",17)(1647,"code",41),e(1648,"number"),t()(),n(1649,"td",20)(1650,"em")(1651,"strong"),e(1652,"(opcional)"),t()(),n(1653,"p"),e(1654,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),n(1655,"code"),e(1656,"po-combo"),t(),e(1657,"."),t()()(),n(1658,"tr",13)(1659,"td",14)(1660,"div",15)(1661,"span",16),e(1662," filterMode"),i(1663,"br"),t()()(),n(1664,"td",17)(1665,"code",48),e(1666,"PoMultiselectFilterMode"),t()(),n(1667,"td",20)(1668,"em")(1669,"strong"),e(1670,"(opcional)"),t()(),n(1671,"p"),e(1672,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),n(1673,"code"),e(1674,"startsWith"),t(),e(1675,", "),n(1676,"code"),e(1677,"contains"),t(),e(1678," ou "),n(1679,"code"),e(1680,"endsWith"),t(),e(1681,"."),t(),n(1682,"blockquote")(1683,"p"),e(1684,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),t()(),n(1685,"p")(1686,"strong"),e(1687,"Componentes compat\xEDveis:"),t(),n(1688,"code"),e(1689,"po-multiselect"),t(),e(1690,"."),t()()(),n(1691,"tr",13)(1692,"td",14)(1693,"div",15)(1694,"span",16),e(1695," forceBooleanComponentType"),i(1696,"br"),t()()(),n(1697,"td",17)(1698,"code",49),e(1699,"ForceBooleanComponentEnum"),t()(),n(1700,"td",20)(1701,"em")(1702,"strong"),e(1703,"(opcional)"),t()(),n(1704,"p"),e(1705,"Valores aceitos:"),t(),n(1706,"ul")(1707,"li"),e(1708,"ForceBooleanComponentEnum.switch"),t(),n(1709,"li"),e(1710,"ForceBooleanComponentEnum.checkbox"),t()()()(),n(1711,"tr",13)(1712,"td",14)(1713,"div",15)(1714,"span",16),e(1715," forceOptionsComponentType"),i(1716,"br"),t()()(),n(1717,"td",17)(1718,"code",50),e(1719,"ForceOptionComponentEnum"),t()(),n(1720,"td",20)(1721,"em")(1722,"strong"),e(1723,"(opcional)"),t()(),n(1724,"p"),e(1725,"pode ser utilizada em conjunto com a propriedade "),n(1726,"code"),e(1727,"options"),t(),e(1728," for\xE7ando o componente a renderizar um "),n(1729,"code"),e(1730,"po-select"),t(),e(1731," ou "),n(1732,"code"),e(1733,"po-radio-group"),t(),e(1734,"."),t(),n(1735,"p"),e(1736,"Valores aceitos:"),t(),n(1737,"ul")(1738,"li"),e(1739,"ForceOptionComponentEnum.radioGroup"),t(),n(1740,"li"),e(1741,"ForceOptionComponentEnum.select"),t()(),n(1742,"blockquote")(1743,"p"),e(1744,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),n(1745,"code"),e(1746,"optionsMulti"),t(),e(1747," e "),n(1748,"code"),e(1749,"optionsService"),t(),e(1750,"."),t()()()(),n(1751,"tr",13)(1752,"td",14)(1753,"div",15)(1754,"span",16),e(1755," formField"),i(1756,"br"),t()()(),n(1757,"td",17)(1758,"code",18),e(1759,"string"),t()(),n(1760,"td",20)(1761,"em")(1762,"strong"),e(1763,"(opcional)"),t()(),n(1764,"p"),e(1765,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),n(1766,"code"),e(1767,"url"),t(),e(1768,"."),t(),n(1769,"blockquote")(1770,"p"),e(1771,"O valor default \xE9 "),n(1772,"code"),e(1773,"files"),t()()(),n(1774,"p")(1775,"strong"),e(1776,"Componente compat\xEDvel"),t(),e(1777,": "),n(1778,"code"),e(1779,"po-upload"),t()()()(),n(1780,"tr",13)(1781,"td",14)(1782,"div",15)(1783,"span",16),e(1784," format"),i(1785,"br"),t()()(),n(1786,"td",17)(1787,"code",18),e(1788,"string "),t(),n(1789,"code",32),e(1790," Array<string>"),t()(),n(1791,"td",20)(1792,"em")(1793,"strong"),e(1794,"(opcional)"),t()(),n(1795,"p"),e(1796,"Formato de exibi\xE7\xE3o no campo."),t(),n(1797,"p"),e(1798,"Ao utilizar esta propriedade com o "),n(1799,"code"),e(1800,"type"),t(),n(1801,"em"),e(1802,"PoDynamicFieldType.Date"),t(),e(1803," ou "),n(1804,"em"),e(1805,"PoDynamicFieldType.DateTime"),t(),e(1806,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),t(),n(1807,"p"),e(1808,"Valores v\xE1lidos:"),t(),n(1809,"ul")(1810,"li"),e(1811,"dd/mm/yyyy"),t(),n(1812,"li"),e(1813,"mm/dd/yyyy"),t(),n(1814,"li"),e(1815,"yyyy/mm/dd"),t()(),n(1816,"p"),e(1817,"Tamb\xE9m pode-se utilizar em conjunto com "),n(1818,"code"),e(1819,"searchService"),t(),e(1820,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),t()()(),n(1821,"tr",13)(1822,"td",14)(1823,"div",15)(1824,"span",16),e(1825," formatModel"),i(1826,"br"),t()()(),n(1827,"td",17)(1828,"code",28),e(1829,"boolean"),t()(),n(1830,"td",20)(1831,"em")(1832,"strong"),e(1833,"(opcional)"),t()(),n(1834,"p"),e(1835,"Indica se o "),n(1836,"code"),e(1837,"model"),t(),e(1838," receber\xE1 o valor formatado pelas propriedades "),n(1839,"code"),e(1840,"p-label-on"),t(),e(1841," e "),n(1842,"code"),e(1843,"p-label-off"),t(),e(1844,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),t(),n(1845,"p"),e(1846,"O valor padr\xE3o \xE9: "),n(1847,"code"),e(1848,"false"),t(),e(1849,"."),t(),n(1850,"blockquote")(1851,"p"),e(1852,"Esta propriedade est\xE1 disponivel apenas para o "),n(1853,"code"),e(1854,"swicth"),t(),e(1855,"."),t()()()(),n(1856,"tr",13)(1857,"td",14)(1858,"div",15)(1859,"span",16),e(1860," gridColumns"),i(1861,"br"),t()()(),n(1862,"td",17)(1863,"code",41),e(1864,"number"),t()(),n(1865,"td",20)(1866,"em")(1867,"strong"),e(1868,"(opcional)"),t()(),n(1869,"p"),e(1870,"Tamanho de exibi\xE7\xE3o do campo em telas."),t(),n(1871,"p"),e(1872,"Deve ser usado o sistema de "),n(1873,"strong"),e(1874,"grid"),t(),e(1875," do PO (1 ... 12 colunas)."),t(),n(1876,"blockquote")(1877,"p"),e(1878,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),t()()()(),n(1879,"tr",13)(1880,"td",14)(1881,"div",15)(1882,"span",16),e(1883," gridLgColumns"),i(1884,"br"),t()()(),n(1885,"td",17)(1886,"code",41),e(1887,"number"),t()(),n(1888,"td",20)(1889,"em")(1890,"strong"),e(1891,"(opcional)"),t()(),n(1892,"p"),e(1893,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),n(1894,"p"),e(1895,"Deve ser usado o sistema de "),n(1896,"strong"),e(1897,"grid"),t(),e(1898," do PO (1 ... 12 colunas)."),t(),n(1899,"blockquote")(1900,"p"),e(1901,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(1902,"code"),e(1903,"gridColumns"),t(),e(1904,"."),t()()()(),n(1905,"tr",13)(1906,"td",14)(1907,"div",15)(1908,"span",16),e(1909," gridLgPull"),i(1910,"br"),t()()(),n(1911,"td",17)(1912,"code",41),e(1913,"number"),t()(),n(1914,"td",20)(1915,"em")(1916,"strong"),e(1917,"(opcional)"),t()(),n(1918,"p"),e(1919,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),t(),n(1920,"p"),e(1921,"Deve ser usado o sistema de "),n(1922,"strong"),e(1923,"grid"),t(),e(1924," do PO (1 ... 11 colunas)."),t(),n(1925,"blockquote")(1926,"p"),e(1927,"Esta propriedade n\xE3o funciona com a propriedade "),n(1928,"code"),e(1929,"gridColumns"),t(),e(1930,". Deve-se especificar o tamanho da tela."),t()()()(),n(1931,"tr",13)(1932,"td",14)(1933,"div",15)(1934,"span",16),e(1935," gridMdColumns"),i(1936,"br"),t()()(),n(1937,"td",17)(1938,"code",41),e(1939,"number"),t()(),n(1940,"td",20)(1941,"em")(1942,"strong"),e(1943,"(opcional)"),t()(),n(1944,"p"),e(1945,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),n(1946,"p"),e(1947,"Deve ser usado o sistema de "),n(1948,"strong"),e(1949,"grid"),t(),e(1950," do PO (1 ... 12 colunas)."),t(),n(1951,"blockquote")(1952,"p"),e(1953,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(1954,"code"),e(1955,"gridColumns"),t(),e(1956,"."),t()()()(),n(1957,"tr",13)(1958,"td",14)(1959,"div",15)(1960,"span",16),e(1961," gridMdPull"),i(1962,"br"),t()()(),n(1963,"td",17)(1964,"code",41),e(1965,"number"),t()(),n(1966,"td",20)(1967,"em")(1968,"strong"),e(1969,"(opcional)"),t()(),n(1970,"p"),e(1971,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),t(),n(1972,"p"),e(1973,"Deve ser usado o sistema de "),n(1974,"strong"),e(1975,"grid"),t(),e(1976," do PO (1 ... 11 colunas)."),t(),n(1977,"blockquote")(1978,"p"),e(1979,"Esta propriedade n\xE3o funciona com a propriedade "),n(1980,"code"),e(1981,"gridColumns"),t(),e(1982,". Deve-se especificar o tamanho da tela."),t()()()(),n(1983,"tr",13)(1984,"td",14)(1985,"div",15)(1986,"span",16),e(1987," gridSmColumns"),i(1988,"br"),t()()(),n(1989,"td",17)(1990,"code",41),e(1991,"number"),t()(),n(1992,"td",20)(1993,"em")(1994,"strong"),e(1995,"(opcional)"),t()(),n(1996,"p"),e(1997,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),n(1998,"p"),e(1999,"Deve ser usado o sistema de "),n(2e3,"strong"),e(2001,"grid"),t(),e(2002," do PO (1 ... 12 colunas)."),t(),n(2003,"blockquote")(2004,"p"),e(2005,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2006,"code"),e(2007,"gridColumns"),t(),e(2008,"."),t()()()(),n(2009,"tr",13)(2010,"td",14)(2011,"div",15)(2012,"span",16),e(2013," gridSmPull"),i(2014,"br"),t()()(),n(2015,"td",17)(2016,"code",41),e(2017,"number"),t()(),n(2018,"td",20)(2019,"em")(2020,"strong"),e(2021,"(opcional)"),t()(),n(2022,"p"),e(2023,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),t(),n(2024,"p"),e(2025,"Deve ser usado o sistema de "),n(2026,"strong"),e(2027,"grid"),t(),e(2028," do PO (1 ... 11 colunas)."),t(),n(2029,"blockquote")(2030,"p"),e(2031,"Esta propriedade n\xE3o funciona com a propriedade "),n(2032,"code"),e(2033,"gridColumns"),t(),e(2034,". Deve-se especificar o tamanho da tela."),t()()()(),n(2035,"tr",13)(2036,"td",14)(2037,"div",15)(2038,"span",16),e(2039," gridXlColumns"),i(2040,"br"),t()()(),n(2041,"td",17)(2042,"code",41),e(2043,"number"),t()(),n(2044,"td",20)(2045,"em")(2046,"strong"),e(2047,"(opcional)"),t()(),n(2048,"p"),e(2049,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),n(2050,"p"),e(2051,"Deve ser usado o sistema de "),n(2052,"strong"),e(2053,"grid"),t(),e(2054," do PO (1 ... 12 colunas)."),t(),n(2055,"blockquote")(2056,"p"),e(2057,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2058,"code"),e(2059,"gridColumns"),t(),e(2060,"."),t()()()(),n(2061,"tr",13)(2062,"td",14)(2063,"div",15)(2064,"span",16),e(2065," gridXlPull"),i(2066,"br"),t()()(),n(2067,"td",17)(2068,"code",41),e(2069,"number"),t()(),n(2070,"td",20)(2071,"em")(2072,"strong"),e(2073,"(opcional)"),t()(),n(2074,"p"),e(2075,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),t(),n(2076,"p"),e(2077,"Deve ser usado o sistema de "),n(2078,"strong"),e(2079,"grid"),t(),e(2080," do PO (1 ... 11 colunas)."),t(),n(2081,"blockquote")(2082,"p"),e(2083,"Esta propriedade n\xE3o funciona com a propriedade "),n(2084,"code"),e(2085,"gridColumns"),t(),e(2086,". Deve-se especificar o tamanho da tela."),t()()()(),n(2087,"tr",13)(2088,"td",14)(2089,"div",15)(2090,"span",16),e(2091," headers"),i(2092,"br"),t()()(),n(2093,"td",17)(2094,"code",51),e(2095,"{ [name: string]: string "),t(),n(2096,"code",52),e(2097,` Array<string>;
}`),t()(),n(2098,"td",20)(2099,"em")(2100,"strong"),e(2101,"(opcional)"),t()(),n(2102,"p"),e(2103,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t(),n(2104,"p")(2105,"strong"),e(2106,"Componente compat\xEDvel"),t(),e(2107,": "),n(2108,"code"),e(2109,"po-upload"),t()()()(),n(2110,"tr",13)(2111,"td",14)(2112,"div",15)(2113,"span",16),e(2114," help"),i(2115,"br"),t()()(),n(2116,"td",17)(2117,"code",18),e(2118,"string"),t()(),n(2119,"td",20)(2120,"em")(2121,"strong"),e(2122,"(opcional)"),t()(),n(2123,"p"),e(2124,"Texto de ajuda."),t()()(),n(2125,"tr",13)(2126,"td",14)(2127,"div",15)(2128,"span",16),e(2129," helper"),i(2130,"br"),t()()(),n(2131,"td",17)(2132,"code",18),e(2133,"string "),t(),n(2134,"code",53),e(2135," PoHelperOptions"),t()(),n(2136,"td",20)(2137,"em")(2138,"strong"),e(2139,"(opcional)"),t()(),n(2140,"p"),e(2141,"Texto simples que ser\xE1 apresentado como aux\xEDlio ao campo ou objeto com as defini\xE7\xF5es do po-helper."),t()()(),n(2142,"tr",13)(2143,"td",14)(2144,"div",15)(2145,"span",16),e(2146," hideLabelStatus"),i(2147,"br"),t()()(),n(2148,"td",17)(2149,"code",28),e(2150,"boolean"),t()(),n(2151,"td",20)(2152,"em")(2153,"strong"),e(2154,"(opcional)"),t()(),n(2155,"p"),e(2156,"Indica se o status do "),n(2157,"code"),e(2158,"model"),t(),e(2159," ser\xE1 escondido visualmente ao lado do switch"),t()()(),n(2160,"tr",13)(2161,"td",14)(2162,"div",15)(2163,"span",16),e(2164," hidePasswordPeek"),i(2165,"br"),t()()(),n(2166,"td",17)(2167,"code",28),e(2168,"boolean"),t()(),n(2169,"td",20)(2170,"em")(2171,"strong"),e(2172,"(opcional)"),t()(),n(2173,"p"),e(2174,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),n(2175,"code"),e(2176,"po-password"),t(),e(2177,"."),t()()(),n(2178,"tr",13)(2179,"td",14)(2180,"div",15)(2181,"span",16),e(2182," hideRestrictionsInfo"),i(2183,"br"),t()()(),n(2184,"td",17)(2185,"code",28),e(2186,"boolean"),t()(),n(2187,"td",20)(2188,"em")(2189,"strong"),e(2190,"(opcional)"),t()(),n(2191,"p"),e(2192,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t(),n(2193,"p")(2194,"strong"),e(2195,"Componente compat\xEDvel"),t(),e(2196,": "),n(2197,"code"),e(2198,"po-upload"),t()()()(),n(2199,"tr",13)(2200,"td",14)(2201,"div",15)(2202,"span",16),e(2203," hideSearch"),i(2204,"br"),t()()(),n(2205,"td",17)(2206,"code",28),e(2207,"boolean"),t()(),n(2208,"td",20)(2209,"em")(2210,"strong"),e(2211,"(opcional)"),t()(),n(2212,"p"),e(2213,"Esconde o campo de pesquisa existente dentro do dropdown do "),n(2214,"code"),e(2215,"po-multiselect"),t(),e(2216,"."),t()()(),n(2217,"tr",13)(2218,"td",14)(2219,"div",15)(2220,"span",16),e(2221," hideSelectAll"),i(2222,"br"),t()()(),n(2223,"td",17)(2224,"code",28),e(2225,"boolean"),t()(),n(2226,"td",20)(2227,"em")(2228,"strong"),e(2229,"(opcional)"),t()(),n(2230,"p"),e(2231,'Indica se o campo "Selecionar todos" do '),n(2232,"code"),e(2233,"po-multiselect"),t(),e(2234," ser\xE1 escondido."),t()()(),n(2235,"tr",13)(2236,"td",14)(2237,"div",15)(2238,"span",16),e(2239," hideSelectButton"),i(2240,"br"),t()()(),n(2241,"td",17)(2242,"code",28),e(2243,"boolean"),t()(),n(2244,"td",20)(2245,"em")(2246,"strong"),e(2247,"(opcional)"),t()(),n(2248,"p"),e(2249,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),n(2250,"blockquote")(2251,"p"),e(2252,"Caso o valor definido seja "),n(2253,"code"),e(2254,"true"),t(),e(2255,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(2256,"code"),e(2257,"selectFiles()"),t(),e(2258," para sele\xE7\xE3o de arquivos."),t()(),n(2259,"p")(2260,"strong"),e(2261,"Componente compat\xEDvel"),t(),e(2262,": "),n(2263,"code"),e(2264,"po-upload"),t()()()(),n(2265,"tr",13)(2266,"td",14)(2267,"div",15)(2268,"span",16),e(2269," hideSendButton"),i(2270,"br"),t()()(),n(2271,"td",17)(2272,"code",28),e(2273,"boolean"),t()(),n(2274,"td",20)(2275,"em")(2276,"strong"),e(2277,"(opcional)"),t()(),n(2278,"p"),e(2279,"Omite o bot\xE3o de envio de arquivos."),t(),n(2280,"blockquote")(2281,"p"),e(2282,"Caso o valor definido seja "),n(2283,"code"),e(2284,"true"),t(),e(2285,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(2286,"code"),e(2287,"sendFiles()"),t(),e(2288," para envio do(s) arquivo(s) selecionado(s)."),t()(),n(2289,"p")(2290,"strong"),e(2291,"Componente compat\xEDvel"),t(),e(2292,": "),n(2293,"code"),e(2294,"po-upload"),t()()()(),n(2295,"tr",13)(2296,"td",14)(2297,"div",15)(2298,"span",16),e(2299," icon"),i(2300,"br"),t()()(),n(2301,"td",17)(2302,"code",18),e(2303,"string "),t(),n(2304,"code",54),e(2305," TemplateRef<void>"),t()(),n(2306,"td",20)(2307,"em")(2308,"strong"),e(2309,"(opcional)"),t()(),n(2310,"p"),e(2311,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(2312,"blockquote")(2313,"p"),e(2314,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),t()(),n(2315,"ul")(2316,"li"),e(2317,"Input;"),t(),n(2318,"li"),e(2319,"Number;"),t(),n(2320,"li"),e(2321,"Decimal;"),t(),n(2322,"li"),e(2323,"Combo;"),t(),n(2324,"li"),e(2325,"Password;"),t()(),n(2326,"blockquote")(2327,"p"),e(2328,"Veja a disponibilidade de \xEDcones em "),n(2329,"a",55),e(2330,"biblioteca de \xEDcones"),t(),e(2331,"."),t()()()(),n(2332,"tr",13)(2333,"td",14)(2334,"div",15)(2335,"span",16),e(2336," infiniteScroll"),i(2337,"br"),t()()(),n(2338,"td",17)(2339,"code",28),e(2340,"boolean"),t()(),n(2341,"td",20)(2342,"em")(2343,"strong"),e(2344,"(opcional)"),t()(),n(2345,"p"),e(2346,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),t(),n(2347,"p")(2348,"strong"),e(2349,"Componentes compat\xEDveis:"),t(),n(2350,"code"),e(2351,"po-combo"),t(),e(2352,", "),n(2353,"code"),e(2354,"po-lookup"),t(),e(2355,"."),t()()(),n(2356,"tr",13)(2357,"td",14)(2358,"div",15)(2359,"span",16),e(2360," infiniteScrollDistance"),i(2361,"br"),t()()(),n(2362,"td",17)(2363,"code",41),e(2364,"number"),t()(),n(2365,"td",20)(2366,"em")(2367,"strong"),e(2368,"(opcional)"),t()(),n(2369,"p"),e(2370,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),n(2371,"strong"),e(2372,"Exemplos"),t(),n(2373,"code"),e(2374,"{ infiniteScrollDistance: 80 }"),t(),e(2375,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),t(),n(2376,"p")(2377,"strong"),e(2378,"Componente compat\xEDvel:"),t(),n(2379,"code"),e(2380,"po-combo"),t(),e(2381,"."),t()()(),n(2382,"tr",13)(2383,"td",14)(2384,"div",15)(2385,"span",16),e(2386," invalidValue"),i(2387,"br"),t()()(),n(2388,"td",17)(2389,"code",28),e(2390,"boolean"),t()(),n(2391,"td",20)(2392,"em")(2393,"strong"),e(2394,"(opcional)"),t()(),n(2395,"p"),e(2396,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),n(2397,"code"),e(2398,"p-field-error-message"),t(),e(2399,"."),t(),n(2400,"blockquote")(2401,"p"),e(2402,"Caso essa propriedade seja definida como "),n(2403,"code"),e(2404,"true"),t(),e(2405,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),t()(),n(2406,"p")(2407,"strong"),e(2408,"Componente compat\xEDvel"),t(),e(2409,": "),n(2410,"code"),e(2411,"po-switch"),t()()()(),n(2412,"tr",13)(2413,"td",14)(2414,"div",15)(2415,"span",16),e(2416," isoFormat"),i(2417,"br"),t()()(),n(2418,"td",17)(2419,"code",56),e(2420,"PoDatepickerIsoFormat"),t()(),n(2421,"td",20)(2422,"em")(2423,"strong"),e(2424,"(opcional)"),t()(),n(2425,"p"),e(2426,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),t(),n(2427,"blockquote")(2428,"p"),e(2429,"Veja os valores v\xE1lidos no "),n(2430,"code"),e(2431,"enumPoDatepickerIsoFormat"),t(),e(2432,"."),t()(),n(2433,"p")(2434,"strong"),e(2435,"Componente compat\xEDvel:"),t(),e(2436," po-datepicker"),t()()(),n(2437,"tr",13)(2438,"td",14)(2439,"div",15)(2440,"span",16),e(2441," key"),i(2442,"br"),t()()(),n(2443,"td",17)(2444,"code",28),e(2445,"boolean"),t()(),n(2446,"td",20)(2447,"em")(2448,"strong"),e(2449,"(opcional)"),t()(),n(2450,"p"),e(2451,"Identificador"),t()()(),n(2452,"tr",13)(2453,"td",14)(2454,"div",15)(2455,"span",16),e(2456," keydown"),i(2457,"br"),t()()(),n(2458,"td",17)(2459,"code",29),e(2460,"Function"),t()(),n(2461,"td",20)(2462,"em")(2463,"strong"),e(2464,"(opcional)"),t()(),n(2465,"p"),e(2466,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(2467,"code"),e(2468,"KeyboardEvent"),t(),e(2469," com informa\xE7\xF5es sobre a tecla."),t()()(),n(2470,"tr",13)(2471,"td",14)(2472,"div",15)(2473,"span",16),e(2474," label"),i(2475,"br"),t()()(),n(2476,"td",17)(2477,"code",18),e(2478,"string"),t()(),n(2479,"td",20)(2480,"em")(2481,"strong"),e(2482,"(opcional)"),t()(),n(2483,"p"),e(2484,"R\xF3tulo do campo exibido."),t(),n(2485,"p"),e(2486,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),n(2487,"code"),e(2488,"label"),t(),e(2489," o valor da propriedade "),n(2490,"code"),e(2491,"property"),t(),e(2492," com a primeira letra em mai\xFAsculo."),t()()(),n(2493,"tr",13)(2494,"td",14)(2495,"div",15)(2496,"span",16),e(2497," labelPosition"),i(2498,"br"),t()()(),n(2499,"td",17)(2500,"code",57),e(2501,"PoSwitchLabelPosition"),t()(),n(2502,"td",20)(2503,"em")(2504,"strong"),e(2505,"(opcional)"),t()(),n(2506,"p"),e(2507,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),t(),n(2508,"blockquote")(2509,"p"),e(2510,"Por padr\xE3o exibe \xE0 direita."),t()()()(),n(2511,"tr",13)(2512,"td",14)(2513,"div",15)(2514,"span",16),e(2515," listboxControlPosition"),i(2516,"br"),t()()(),n(2517,"td",17)(2518,"code",58),e(2519,"'top' "),t(),n(2520,"code",59),e(2521," 'bottom'"),t()(),n(2522,"td",20)(2523,"em")(2524,"strong"),e(2525,"(opcional)"),t()(),n(2526,"p"),e(2527,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),n(2528,"code"),e(2529,"listbox"),t(),e(2530," em rela\xE7\xE3o ao campo ("),n(2531,"code"),e(2532,"top"),t(),e(2533," ou "),n(2534,"code"),e(2535,"bottom"),t(),e(2536,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),t(),n(2537,"p")(2538,"strong"),e(2539,"Componentes compat\xEDveis:"),t(),n(2540,"code"),e(2541,"po-multiselect"),t(),e(2542,", "),n(2543,"code"),e(2544,"po-combo"),t(),e(2545,"."),t()()(),n(2546,"tr",13)(2547,"td",14)(2548,"div",15)(2549,"span",16),e(2550," literals"),i(2551,"br"),t()()(),n(2552,"td",17)(2553,"code",60),e(2554,"PoLookupLiterals "),t(),n(2555,"code",61),e(2556," PoMultiselectLiterals "),t(),n(2557,"code",62),e(2558," PoComboLiterals "),t(),n(2559,"code",63),e(2560," PoDatepickerRangeLiterals "),t(),n(2561,"code",64),e(2562," PoUploadLiterals"),t()(),n(2563,"td",20)(2564,"em")(2565,"strong"),e(2566,"(opcional)"),t()(),n(2567,"p"),e(2568,"Objeto com as literais usadas para os seguintes componentes: "),n(2569,"code"),e(2570,"po-lookup"),t(),e(2571,", "),n(2572,"code"),e(2573,"po-multiselect"),t(),e(2574,", "),n(2575,"code"),e(2576,"po-combo"),t(),e(2577," e "),n(2578,"code"),e(2579,"po-datepicker-range"),t(),e(2580,"."),t(),n(2581,"blockquote")(2582,"p"),e(2583,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),t()(),n(2584,"p")(2585,"strong"),e(2586,"Componentes compat\xEDveis:"),t(),n(2587,"code"),e(2588,"po-lookup"),t(),e(2589,", "),n(2590,"code"),e(2591,"po-multiselect"),t(),e(2592,", "),n(2593,"code"),e(2594,"po-combo"),t(),e(2595,", "),n(2596,"code"),e(2597,"po-datepicker-range"),t()()()(),n(2598,"tr",13)(2599,"td",14)(2600,"div",15)(2601,"span",16),e(2602," locale"),i(2603,"br"),t()()(),n(2604,"td",17)(2605,"code",18),e(2606,"string"),t()(),n(2607,"td",20)(2608,"em")(2609,"strong"),e(2610,"(opcional)"),t()(),n(2611,"p"),e(2612,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),n(2613,"a",65)(2614,"code"),e(2615,"I18n"),t()()(),n(2616,"p"),e(2617,"Exemplo de utiliza\xE7\xE3o:"),t(),n(2618,"pre")(2619,"code"),e(2620,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),t()(),n(2621,"blockquote")(2622,"p"),e(2623,"Para ver quais linguagens suportadas acesse "),n(2624,"a",65)(2625,"code"),e(2626,"I18n"),t()(),e(2627,`
A propriedade ser\xE1 repassada para os componentes que suportam a mesma.`),t()()()(),n(2628,"tr",13)(2629,"td",14)(2630,"div",15)(2631,"span",16),e(2632," mask"),i(2633,"br"),t()()(),n(2634,"td",17)(2635,"code",18),e(2636,"string"),t()(),n(2637,"td",20)(2638,"em")(2639,"strong"),e(2640,"(opcional)"),t()(),n(2641,"p"),e(2642,"M\xE1scara para o campo."),t(),n(2643,"p")(2644,"strong"),e(2645,"Componentes compat\xEDveis:"),t(),n(2646,"code"),e(2647,"po-input"),t(),e(2648,"."),t(),n(2649,"blockquote")(2650,"p"),e(2651,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),n(2652,"code"),e(2653,"type: time"),t(),e(2654,"."),t()()()(),n(2655,"tr",13)(2656,"td",14)(2657,"div",15)(2658,"span",16),e(2659," maskFormatModel"),i(2660,"br"),t()()(),n(2661,"td",17)(2662,"code",28),e(2663,"boolean"),t()(),n(2664,"td",20)(2665,"em")(2666,"strong"),e(2667,"(opcional)"),t()(),n(2668,"p"),e(2669,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),n(2670,"code"),e(2671,"false"),t(),e(2672,"."),t(),n(2673,"p")(2674,"strong"),e(2675,"Componentes compat\xEDveis:"),t(),n(2676,"code"),e(2677,"po-input"),t(),e(2678,"."),t(),n(2679,"blockquote")(2680,"p"),e(2681,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),n(2682,"code"),e(2683,"type: time"),t(),e(2684,"."),t()()()(),n(2685,"tr",13)(2686,"td",14)(2687,"div",15)(2688,"span",16),e(2689," maxLength"),i(2690,"br"),t()()(),n(2691,"td",17)(2692,"code",41),e(2693,"number"),t()(),n(2694,"td",20)(2695,"em")(2696,"strong"),e(2697,"(opcional)"),t()(),n(2698,"p"),e(2699,"Tamanho m\xE1ximo de caracteres."),t(),n(2700,"p")(2701,"strong"),e(2702,"Componentes compat\xEDveis:"),t(),n(2703,"code"),e(2704,"po-input"),t(),e(2705,", "),n(2706,"code"),e(2707,"po-number"),t(),e(2708,", "),n(2709,"code"),e(2710,"po-decimal"),t(),e(2711,", "),n(2712,"code"),e(2713,"po-textarea"),t(),e(2714,", "),n(2715,"code"),e(2716,"po-password"),t(),e(2717,"."),t()()(),n(2718,"tr",13)(2719,"td",14)(2720,"div",15)(2721,"span",16),e(2722," maxValue"),i(2723,"br"),t()()(),n(2724,"td",17)(2725,"code",18),e(2726,"string "),t(),n(2727,"code",41),e(2728," number"),t()(),n(2729,"td",20)(2730,"em")(2731,"strong"),e(2732,"(opcional)"),t()(),n(2733,"p"),e(2734,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),n(2735,"em"),e(2736,"number"),t(),e(2737,", "),n(2738,"em"),e(2739,"date"),t(),e(2740," ou "),n(2741,"em"),e(2742,"dateTime"),t(),e(2743,"."),t(),n(2744,"p")(2745,"strong"),e(2746,"Componentes compat\xEDveis:"),t(),n(2747,"code"),e(2748,"po-datepicker"),t(),e(2749,", "),n(2750,"code"),e(2751,"po-datepicker-range"),t(),e(2752,", "),n(2753,"code"),e(2754,"po-number"),t(),e(2755,", "),n(2756,"code"),e(2757,"po-decimal"),t()()()(),n(2758,"tr",13)(2759,"td",14)(2760,"div",15)(2761,"span",16),e(2762," minLength"),i(2763,"br"),t()()(),n(2764,"td",17)(2765,"code",41),e(2766,"number"),t()(),n(2767,"td",20)(2768,"em")(2769,"strong"),e(2770,"(opcional)"),t()(),n(2771,"p"),e(2772,"Tamanho m\xEDnimo de caracteres."),t(),n(2773,"p")(2774,"strong"),e(2775,"Componentes compat\xEDveis:"),t(),n(2776,"code"),e(2777,"po-input"),t(),e(2778,", "),n(2779,"code"),e(2780,"po-number"),t(),e(2781,", "),n(2782,"code"),e(2783,"po-decimal"),t(),e(2784,", "),n(2785,"code"),e(2786,"po-textarea"),t(),e(2787,", "),n(2788,"code"),e(2789,"po-password"),t(),e(2790,"."),t()()(),n(2791,"tr",13)(2792,"td",14)(2793,"div",15)(2794,"span",16),e(2795," minValue"),i(2796,"br"),t()()(),n(2797,"td",17)(2798,"code",18),e(2799,"string "),t(),n(2800,"code",41),e(2801," number"),t()(),n(2802,"td",20)(2803,"em")(2804,"strong"),e(2805,"(opcional)"),t()(),n(2806,"p"),e(2807,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),n(2808,"em"),e(2809,"number"),t(),e(2810,", "),n(2811,"em"),e(2812,"date"),t(),e(2813," ou "),n(2814,"em"),e(2815,"dateTime"),t(),e(2816,"."),t(),n(2817,"p")(2818,"strong"),e(2819,"Componentes compat\xEDveis:"),t(),n(2820,"code"),e(2821,"po-datepicker"),t(),e(2822,", "),n(2823,"code"),e(2824,"po-datepicker-range"),t(),e(2825,", "),n(2826,"code"),e(2827,"po-number"),t(),e(2828,", "),n(2829,"code"),e(2830,"po-decimal"),t()()()(),n(2831,"tr",13)(2832,"td",14)(2833,"div",15)(2834,"span",16),e(2835," multiple"),i(2836,"br"),t()()(),n(2837,"td",17)(2838,"code",28),e(2839,"boolean"),t()(),n(2840,"td",20)(2841,"em")(2842,"strong"),e(2843,"(opcional)"),t()(),n(2844,"p"),e(2845,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),n(2846,"p")(2847,"strong"),e(2848,"Componente compat\xEDvel:"),t(),n(2849,"code"),e(2850,"po-lookup"),t(),e(2851,", "),n(2852,"code"),e(2853,"po-upload"),t()()()(),n(2854,"tr",13)(2855,"td",14)(2856,"div",15)(2857,"span",16),e(2858," noAutocomplete"),i(2859,"br"),t()()(),n(2860,"td",17)(2861,"code",28),e(2862,"boolean"),t()(),n(2863,"td",20)(2864,"em")(2865,"strong"),e(2866,"(opcional)"),t()(),n(2867,"p"),e(2868,"Define a propriedade nativa "),n(2869,"code"),e(2870,"autocomplete"),t(),e(2871," do campo como off."),t(),n(2872,"p")(2873,"strong"),e(2874,"Componentes compat\xEDveis:"),t(),n(2875,"code"),e(2876,"po-datepicker"),t(),e(2877,", "),n(2878,"code"),e(2879,"po-datepicker-range"),t(),e(2880,", "),n(2881,"code"),e(2882,"po-input"),t(),e(2883,", "),n(2884,"code"),e(2885,"po-number"),t(),e(2886,", "),n(2887,"code"),e(2888,"po-decimal"),t(),e(2889,", "),n(2890,"code"),e(2891,"po-lookup"),t(),e(2892,", "),n(2893,"code"),e(2894,"po-password"),t()()()(),n(2895,"tr",13)(2896,"td",14)(2897,"div",15)(2898,"span",16),e(2899," offsetColumns"),i(2900,"br"),t()()(),n(2901,"td",17)(2902,"code",41),e(2903,"number"),t()(),n(2904,"td",20)(2905,"em")(2906,"strong"),e(2907,"(opcional)"),t()(),n(2908,"p"),e(2909,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),t(),n(2910,"p"),e(2911,"Deve ser usado o sistema de "),n(2912,"strong"),e(2913,"grid"),t(),e(2914," do PO (1 ... 12 colunas)."),t(),n(2915,"blockquote")(2916,"p"),e(2917,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),t()()()(),n(2918,"tr",13)(2919,"td",14)(2920,"div",15)(2921,"span",16),e(2922," offsetLgColumns"),i(2923,"br"),t()()(),n(2924,"td",17)(2925,"code",41),e(2926,"number"),t()(),n(2927,"td",20)(2928,"em")(2929,"strong"),e(2930,"(opcional)"),t()(),n(2931,"p"),e(2932,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),n(2933,"p"),e(2934,"Deve ser usado o sistema de "),n(2935,"strong"),e(2936,"grid"),t(),e(2937," do PO (1 ... 12 colunas)."),t(),n(2938,"blockquote")(2939,"p"),e(2940,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2941,"code"),e(2942,"offsetColumns"),t(),e(2943,"."),t()()()(),n(2944,"tr",13)(2945,"td",14)(2946,"div",15)(2947,"span",16),e(2948," offsetMdColumns"),i(2949,"br"),t()()(),n(2950,"td",17)(2951,"code",41),e(2952,"number"),t()(),n(2953,"td",20)(2954,"em")(2955,"strong"),e(2956,"(opcional)"),t()(),n(2957,"p"),e(2958,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),n(2959,"p"),e(2960,"Deve ser usado o sistema de "),n(2961,"strong"),e(2962,"grid"),t(),e(2963," do PO (1 ... 12 colunas)."),t(),n(2964,"blockquote")(2965,"p"),e(2966,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2967,"code"),e(2968,"offsetColumns"),t(),e(2969,"."),t()()()(),n(2970,"tr",13)(2971,"td",14)(2972,"div",15)(2973,"span",16),e(2974," offsetSmColumns"),i(2975,"br"),t()()(),n(2976,"td",17)(2977,"code",41),e(2978,"number"),t()(),n(2979,"td",20)(2980,"em")(2981,"strong"),e(2982,"(opcional)"),t()(),n(2983,"p"),e(2984,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),n(2985,"p"),e(2986,"Deve ser usado o sistema de "),n(2987,"strong"),e(2988,"grid"),t(),e(2989," do PO (1 ... 12 colunas)."),t(),n(2990,"blockquote")(2991,"p"),e(2992,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2993,"code"),e(2994,"offsetColumns"),t(),e(2995,"."),t()()()(),n(2996,"tr",13)(2997,"td",14)(2998,"div",15)(2999,"span",16),e(3e3," offsetXlColumns"),i(3001,"br"),t()()(),n(3002,"td",17)(3003,"code",41),e(3004,"number"),t()(),n(3005,"td",20)(3006,"em")(3007,"strong"),e(3008,"(opcional)"),t()(),n(3009,"p"),e(3010,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),n(3011,"p"),e(3012,"Deve ser usado o sistema de "),n(3013,"strong"),e(3014,"grid"),t(),e(3015," do PO (1 ... 12 colunas)."),t(),n(3016,"blockquote")(3017,"p"),e(3018,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(3019,"code"),e(3020,"offsetColumns"),t(),e(3021,"."),t()()()(),n(3022,"tr",13)(3023,"td",14)(3024,"div",15)(3025,"span",16),e(3026," onError"),i(3027,"br"),t()()(),n(3028,"td",17)(3029,"code",29),e(3030,"Function"),t()(),n(3031,"td",20)(3032,"em")(3033,"strong"),e(3034,"(opcional)"),t()(),n(3035,"p"),e(3036,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),n(3037,"blockquote")(3038,"p"),e(3039,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(3040,"code"),e(3041,"HttpErrorResponse"),t(),e(3042,"."),t()(),n(3043,"p")(3044,"strong"),e(3045,"Componente compat\xEDvel"),t(),e(3046,": "),n(3047,"code"),e(3048,"po-upload"),t()()()(),n(3049,"tr",13)(3050,"td",14)(3051,"div",15)(3052,"span",16),e(3053," onSuccess"),i(3054,"br"),t()()(),n(3055,"td",17)(3056,"code",29),e(3057,"Function"),t()(),n(3058,"td",20)(3059,"em")(3060,"strong"),e(3061,"(opcional)"),t()(),n(3062,"p"),e(3063,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),n(3064,"blockquote")(3065,"p"),e(3066,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(3067,"code"),e(3068,"HttpResponse"),t(),e(3069,"."),t()(),n(3070,"p")(3071,"strong"),e(3072,"Componente compat\xEDvel"),t(),e(3073,": "),n(3074,"code"),e(3075,"po-upload"),t()()()(),n(3076,"tr",13)(3077,"td",14)(3078,"div",15)(3079,"span",16),e(3080," onUpload"),i(3081,"br"),t()()(),n(3082,"td",17)(3083,"code",29),e(3084,"Function"),t()(),n(3085,"td",20)(3086,"em")(3087,"strong"),e(3088,"(opcional)"),t()(),n(3089,"p"),e(3090,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),n(3091,"pre")(3092,"code"),e(3093,`event.data = {id: 'id do usu\xE1rio'};
`),t()(),n(3094,"p")(3095,"strong"),e(3096,"Componente compat\xEDvel"),t(),e(3097,": "),n(3098,"code"),e(3099,"po-upload"),t()()()(),n(3100,"tr",13)(3101,"td",14)(3102,"div",15)(3103,"span",16),e(3104," optional"),i(3105,"br"),t()()(),n(3106,"td",17)(3107,"code",28),e(3108,"boolean"),t()(),n(3109,"td",20)(3110,"em")(3111,"strong"),e(3112,"(opcional)"),t()(),n(3113,"p"),e(3114,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(3115,"blockquote")(3116,"p"),e(3117,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),t()(),n(3118,"ul")(3119,"li"),e(3120,"O campo for "),n(3121,"code"),e(3122,"required"),t(),e(3123,", ou;"),t(),n(3124,"li"),e(3125,"N\xE3o possuir "),n(3126,"code"),e(3127,"help"),t(),e(3128," e "),n(3129,"code"),e(3130,"label"),t(),e(3131,"."),t()()()(),n(3132,"tr",13)(3133,"td",14)(3134,"div",15)(3135,"span",16),e(3136," options"),i(3137,"br"),t()()(),n(3138,"td",17)(3139,"code",32),e(3140,"Array<string> "),t(),n(3141,"code",66),e(3142," Array<PoSelectOption> "),t(),n(3143,"code",67),e(3144," Array<PoMultiselectOption> "),t(),n(3145,"code",68),e(3146," Array<PoCheckboxGroupOption> "),t(),n(3147,"code",69),e(3148," Array<any>"),t()(),n(3149,"td",20)(3150,"em")(3151,"strong"),e(3152,"(opcional)"),t()(),n(3153,"p"),e(3154,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),t(),n(3155,"p")(3156,"strong"),e(3157,"Componentes compat\xEDveis:"),t(),n(3158,"code"),e(3159,"po-select"),t(),e(3160,", "),n(3161,"code"),e(3162,"po-radio-group"),t(),e(3163,", "),n(3164,"code"),e(3165,"po-checkbox-group"),t(),e(3166,", "),n(3167,"code"),e(3168,"po-multiselect"),t(),e(3169,"."),t()()(),n(3170,"tr",13)(3171,"td",14)(3172,"div",15)(3173,"span",16),e(3174," optionsMulti"),i(3175,"br"),t()()(),n(3176,"td",17)(3177,"code",28),e(3178,"boolean"),t()(),n(3179,"td",20)(3180,"em")(3181,"strong"),e(3182,"(opcional)"),t()(),n(3183,"p"),e(3184,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),t()()(),n(3185,"tr",13)(3186,"td",14)(3187,"div",15)(3188,"span",16),e(3189," optionsService"),i(3190,"br"),t()()(),n(3191,"td",17)(3192,"code",18),e(3193,"string "),t(),n(3194,"code",70),e(3195," PoComboFilter "),t(),n(3196,"code",71),e(3197," PoMultiselectFilter"),t()(),n(3198,"td",20)(3199,"em")(3200,"strong"),e(3201,"(opcional)"),t()(),n(3202,"p"),e(3203,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),n(3204,"strong"),e(3205,"Importante"),t()(),n(3206,"blockquote")(3207,"p"),e(3208,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),n(3209,"a",72),e(3210,"guia de API do PO UI"),t(),e(3211,"."),t()()()(),n(3212,"tr",13)(3213,"td",14)(3214,"div",15)(3215,"span",16),e(3216," order"),i(3217,"br"),t()()(),n(3218,"td",17)(3219,"code",41),e(3220,"number"),t()(),n(3221,"td",20)(3222,"em")(3223,"strong"),e(3224,"(opcional)"),t()(),n(3225,"p"),e(3226,"Informa a ordem de exibi\xE7\xE3o do campo."),t(),n(3227,"p"),e(3228,"Exemplo de utiliza\xE7\xE3o:"),t(),n(3229,"p")(3230,"code"),e(3231,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),t()(),n(3232,"p"),e(3233,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),n(3234,"code"),e(3235,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),t()(),n(3236,"p"),e(3237,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),t(),n(3238,"p"),e(3239,"Campos sem "),n(3240,"code"),e(3241,"order"),t(),e(3242,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),t()()(),n(3243,"tr",13)(3244,"td",14)(3245,"div",15)(3246,"span",16),e(3247," params"),i(3248,"br"),t()()(),n(3249,"td",17)(3250,"code",33),e(3251,"any"),t()(),n(3252,"td",20)(3253,"em")(3254,"strong"),e(3255,"(opcional)"),t()(),n(3256,"p"),e(3257,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),n(3258,"code"),e(3259,"po-lookup"),t(),e(3260,` e
`),n(3261,"code"),e(3262,"po-combo"),t(),e(3263,"."),t(),n(3264,"p"),e(3265,"Por exemplo, para o par\xE2metro "),n(3266,"code"),e(3267,"{ age: 23 }"),t(),e(3268," a URL da requisi\xE7\xE3o ficaria:"),t(),n(3269,"p")(3270,"code"),e(3271,"url + ?age=23&filter=Peter"),t()()()(),n(3272,"tr",13)(3273,"td",14)(3274,"div",15)(3275,"span",16),e(3276," pattern"),i(3277,"br"),t()()(),n(3278,"td",17)(3279,"code",18),e(3280,"string"),t()(),n(3281,"td",20)(3282,"em")(3283,"strong"),e(3284,"(opcional)"),t()(),n(3285,"p"),e(3286,"Regex para valida\xE7\xE3o do campo."),t(),n(3287,"p")(3288,"strong"),e(3289,"Componentes compat\xEDveis:"),t(),n(3290,"code"),e(3291,"po-input"),t(),e(3292,", "),n(3293,"code"),e(3294,"po-password"),t(),e(3295,"."),t()()(),n(3296,"tr",13)(3297,"td",14)(3298,"div",15)(3299,"span",16),e(3300," placeholder"),i(3301,"br"),t()()(),n(3302,"td",17)(3303,"code",18),e(3304,"string"),t()(),n(3305,"td",20)(3306,"em")(3307,"strong"),e(3308,"(opcional)"),t()(),n(3309,"p"),e(3310,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),t()()(),n(3311,"tr",13)(3312,"td",14)(3313,"div",15)(3314,"span",16),e(3315," placeholderSearch"),i(3316,"br"),t()()(),n(3317,"td",17)(3318,"code",18),e(3319,"string"),t()(),n(3320,"td",20)(3321,"em")(3322,"strong"),e(3323,"(opcional)"),t()(),n(3324,"p"),e(3325,"Placeholder do campo de pesquisa do "),n(3326,"code"),e(3327,"po-multiselect"),t(),e(3328,"."),t(),n(3329,"blockquote")(3330,"p"),e(3331,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),t()()()(),n(3332,"tr",13)(3333,"td",14)(3334,"div",15)(3335,"span",16),e(3336," property"),i(3337,"br"),t()()(),n(3338,"td",17)(3339,"code",18),e(3340,"string"),t()(),n(3341,"td",20)(3342,"p"),e(3343,"Nome de refer\xEAncia do campo."),t()()(),n(3344,"tr",13)(3345,"td",14)(3346,"div",15)(3347,"span",16),e(3348," range"),i(3349,"br"),t()()(),n(3350,"td",17)(3351,"code",28),e(3352,"boolean"),t()(),n(3353,"td",20)(3354,"em")(3355,"strong"),e(3356,"(opcional)"),t()(),n(3357,"p"),e(3358,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),t(),n(3359,"blockquote")(3360,"p"),e(3361,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),t()()()(),n(3362,"tr",13)(3363,"td",14)(3364,"div",15)(3365,"span",16),e(3366," readonly"),i(3367,"br"),t()()(),n(3368,"td",17)(3369,"code",28),e(3370,"boolean"),t()(),n(3371,"td",20)(3372,"em")(3373,"strong"),e(3374,"(opcional)"),t()(),n(3375,"p"),e(3376,"Indica que o campo ser\xE1 somente leitura."),t(),n(3377,"p")(3378,"strong"),e(3379,"Componentes compat\xEDveis:"),t(),n(3380,"code"),e(3381,"po-datepicker"),t(),e(3382,", "),n(3383,"code"),e(3384,"po-datepicker-range"),t(),e(3385,", "),n(3386,"code"),e(3387,"po-input"),t(),e(3388,", "),n(3389,"code"),e(3390,"po-number"),t(),e(3391,", "),n(3392,"code"),e(3393,"po-decimal"),t(),e(3394,", "),n(3395,"code"),e(3396,"po-select"),t(),e(3397,", "),n(3398,"code"),e(3399,"po-textarea"),t(),e(3400,", "),n(3401,"code"),e(3402,"po-password"),t()()()(),n(3403,"tr",13)(3404,"td",14)(3405,"div",15)(3406,"span",16),e(3407," removeInitialFilter"),i(3408,"br"),t()()(),n(3409,"td",17)(3410,"code",28),e(3411,"boolean"),t()(),n(3412,"td",20)(3413,"em")(3414,"strong"),e(3415,"(opcional)"),t()(),n(3416,"p"),e(3417,"Define que o filtro no primeiro clique ser\xE1 removido."),t(),n(3418,"blockquote")(3419,"p"),e(3420,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),t()(),n(3421,"p")(3422,"strong"),e(3423,"Componente compat\xEDvel"),t(),e(3424,": "),n(3425,"code"),e(3426,"po-combo"),t()()()(),n(3427,"tr",13)(3428,"td",14)(3429,"div",15)(3430,"span",16),e(3431," required"),i(3432,"br"),t()()(),n(3433,"td",17)(3434,"code",28),e(3435,"boolean"),t()(),n(3436,"td",20)(3437,"em")(3438,"strong"),e(3439,"(opcional)"),t()(),n(3440,"p"),e(3441,"Define a obrigatoriedade do campo."),t()()(),n(3442,"tr",13)(3443,"td",14)(3444,"div",15)(3445,"span",16),e(3446," requiredFieldErrorMessage"),i(3447,"br"),t()()(),n(3448,"td",17)(3449,"code",28),e(3450,"boolean"),t()(),n(3451,"td",20)(3452,"em")(3453,"strong"),e(3454,"(opcional)"),t()(),n(3455,"p"),e(3456,"Exibe a mensagem setada na propriedade "),n(3457,"code"),e(3458,"errorMessage"),t(),e(3459," se o campo estiver vazio e for requerido."),t(),n(3460,"blockquote")(3461,"p"),e(3462,"Necess\xE1rio que a propriedade "),n(3463,"code"),e(3464,"required"),t(),e(3465," esteja habilitada."),t()(),n(3466,"p")(3467,"strong"),e(3468,"Componentes compat\xEDveis:"),t(),n(3469,"code"),e(3470,"po-datepicker"),t(),e(3471,", "),n(3472,"code"),e(3473,"po-input"),t(),e(3474,", "),n(3475,"code"),e(3476,"po-number"),t(),e(3477,", "),n(3478,"code"),e(3479,"po-decimal"),t(),e(3480,", "),n(3481,"code"),e(3482,"po-password"),t(),e(3483,"."),t()()(),n(3484,"tr",13)(3485,"td",14)(3486,"div",15)(3487,"span",16),e(3488," restrictions"),i(3489,"br"),t()()(),n(3490,"td",17)(3491,"code",73),e(3492,"PoUploadFileRestrictions"),t()(),n(3493,"td",20)(3494,"em")(3495,"strong"),e(3496,"(opcional)"),t()(),n(3497,"p"),e(3498,"Objeto que segue a defini\xE7\xE3o da interface "),n(3499,"code"),e(3500,"PoUploadFileRestrictions"),t(),e(3501,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t(),n(3502,"p")(3503,"strong"),e(3504,"Componente compat\xEDvel"),t(),e(3505,": "),n(3506,"code"),e(3507,"po-upload"),t()()()(),n(3508,"tr",13)(3509,"td",14)(3510,"div",15)(3511,"span",16),e(3512," rows"),i(3513,"br"),t()()(),n(3514,"td",17)(3515,"code",41),e(3516,"number"),t()(),n(3517,"td",20)(3518,"em")(3519,"strong"),e(3520,"(opcional)"),t()(),n(3521,"p"),e(3522,"Quantidade de linhas exibidas no "),n(3523,"code"),e(3524,"po-textarea"),t(),e(3525,"."),t()()(),n(3526,"tr",13)(3527,"td",14)(3528,"div",15)(3529,"span",16),e(3530," searchService"),i(3531,"br"),t()()(),n(3532,"td",17)(3533,"code",18),e(3534,"string "),t(),n(3535,"code",74),e(3536," PoLookupFilter"),t()(),n(3537,"td",20)(3538,"em")(3539,"strong"),e(3540,"(opcional)"),t()(),n(3541,"p"),e(3542,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),n(3543,"code"),e(3544,"columns"),t(),e(3545,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),n(3546,"strong"),e(3547,"Importante:"),t()(),n(3548,"blockquote")(3549,"p"),e(3550,"Caso utilizar a propriedade "),n(3551,"code"),e(3552,"optionsService"),t(),e(3553,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),n(3554,"a",72),e(3555,"guia de API do PO UI"),t(),e(3556,"."),t()()()(),n(3557,"tr",13)(3558,"td",14)(3559,"div",15)(3560,"span",16),e(3561," secret"),i(3562,"br"),t()()(),n(3563,"td",17)(3564,"code",28),e(3565,"boolean"),t()(),n(3566,"td",20)(3567,"em")(3568,"strong"),e(3569,"(opcional)"),t()(),n(3570,"p"),e(3571,"Esconde a informa\xE7\xE3o estilo "),n(3572,"em"),e(3573,"password"),t(),e(3574,", pode ser utilizado quando o tipo de dado for "),n(3575,"em"),e(3576,"string"),t(),e(3577,"."),t()()(),n(3578,"tr",13)(3579,"td",14)(3580,"div",15)(3581,"span",16),e(3582," showRequired"),i(3583,"br"),t()()(),n(3584,"td",17)(3585,"code",28),e(3586,"boolean"),t()(),n(3587,"td",20)(3588,"em")(3589,"strong"),e(3590,"(opcional)"),t()(),n(3591,"p"),e(3592,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(3593,"blockquote")(3594,"p"),e(3595,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(3596,"ul")(3597,"li"),e(3598,"N\xE3o possuir "),n(3599,"code"),e(3600,"p-help"),t(),e(3601," e/ou "),n(3602,"code"),e(3603,"p-label"),t(),e(3604,"."),t()()()(),n(3605,"tr",13)(3606,"td",14)(3607,"div",15)(3608,"span",16),e(3609," size"),i(3610,"br"),t()()(),n(3611,"td",17)(3612,"code",18),e(3613,"string"),t()(),n(3614,"td",20)(3615,"em")(3616,"strong"),e(3617,"(opcional)"),t()(),n(3618,"p"),e(3619,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),t(),n(3620,"ul")(3621,"li")(3622,"code"),e(3623,"small"),t(),e(3624,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(3625,"li")(3626,"code"),e(3627,"medium"),t(),e(3628,": aplica a medida medium de cada componente."),t(),n(3629,"li")(3630,"code"),e(3631,"large"),t(),e(3632,": aplica a medida large de cada componente (dispon\xEDvel para "),n(3633,"code"),e(3634,"po-checkbox"),t(),e(3635," e "),n(3636,"code"),e(3637,"po-radio-group"),t(),e(3638,")."),n(3639,"blockquote")(3640,"p"),e(3641,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(3642,"code"),e(3643,"medium"),t(),e(3644,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(3645,"a",21),e(3646,"po-theme"),t(),e(3647,"."),t()()()()()(),n(3648,"tr",13)(3649,"td",14)(3650,"div",15)(3651,"span",16),e(3652," sort"),i(3653,"br"),t()()(),n(3654,"td",17)(3655,"code",28),e(3656,"boolean"),t()(),n(3657,"td",20)(3658,"em")(3659,"strong"),e(3660,"(opcional)"),t()(),n(3661,"p"),e(3662,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),t(),n(3663,"p")(3664,"strong"),e(3665,"Componentes compat\xEDveis:"),t(),n(3666,"code"),e(3667,"po-combo"),t(),e(3668,", po-multiselect"),t()()(),n(3669,"tr",13)(3670,"td",14)(3671,"div",15)(3672,"span",16),e(3673," step"),i(3674,"br"),t()()(),n(3675,"td",17)(3676,"code",41),e(3677,"number"),t()(),n(3678,"td",20)(3679,"em")(3680,"strong"),e(3681,"(opcional)"),t()(),n(3682,"p"),e(3683,"Intervalo utilizado no "),n(3684,"code"),e(3685,"po-number"),t(),e(3686,"."),t()()(),n(3687,"tr",13)(3688,"td",14)(3689,"div",15)(3690,"span",16),e(3691," thousandMaxlength"),i(3692,"br"),t()()(),n(3693,"td",17)(3694,"code",41),e(3695,"number"),t()(),n(3696,"td",20)(3697,"em")(3698,"strong"),e(3699,"(opcional)"),t()(),n(3700,"p"),e(3701,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),t(),n(3702,"blockquote")(3703,"p"),e(3704,"Esta propriedade s\xF3 pode ser utilizada quando o "),n(3705,"code"),e(3706,"type"),t(),e(3707," for "),n(3708,"em"),e(3709,"currency"),t(),e(3710," ou "),n(3711,"em"),e(3712,"decimal"),t(),e(3713,"."),t()()()(),n(3714,"tr",13)(3715,"td",14)(3716,"div",15)(3717,"span",16),e(3718," type"),i(3719,"br"),t()()(),n(3720,"td",17)(3721,"code",18),e(3722,"string "),t(),n(3723,"code",75),e(3724," PoDynamicFieldType"),t()(),n(3725,"td",20)(3726,"em")(3727,"strong"),e(3728,"(opcional)"),t()(),n(3729,"p"),e(3730,"Tipo do valor campo."),t(),n(3731,"p"),e(3732,"Valores v\xE1lidos:"),t(),n(3733,"ul")(3734,"li")(3735,"code"),e(3736,"boolean"),t(),e(3737,": Valores "),n(3738,"em"),e(3739,"booleanos"),t(),e(3740,"."),t(),n(3741,"li")(3742,"code"),e(3743,"currency"),t(),e(3744,": Valores monet\xE1rios."),t(),n(3745,"li")(3746,"code"),e(3747,"decimal"),t(),e(3748,": Valores decimais."),t(),n(3749,"li")(3750,"code"),e(3751,"date"),t(),e(3752,": Valores de datas."),n(3753,"ul")(3754,"li"),e(3755,"Aceita os tipos "),n(3756,"strong"),e(3757,"string"),t(),e(3758," e "),n(3759,"strong"),e(3760,"Date"),t(),e(3761,` padr\xE3o do Javascript,
por exemplo: `),n(3762,"code"),e(3763,"'2017-11-28'"),t(),e(3764," ou "),n(3765,"code"),e(3766,"new Date(2017, 10, 28)"),t(),e(3767,"."),t()()(),n(3768,"li")(3769,"code"),e(3770,"dateTime"),t(),e(3771,": Valor de data com hor\xE1rio."),n(3772,"ul")(3773,"li"),e(3774,"Aceita o tipo "),n(3775,"em"),e(3776,"string"),t(),e(3777," no formato "),n(3778,"strong"),e(3779,"ISO-8601"),t(),e(3780," extendido "),n(3781,"strong"),e(3782,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(3783,`
e o tipo `),n(3784,"strong"),e(3785,"Date"),t(),e(3786," padr\xE3o do Javascript, por exemplo: "),n(3787,"code"),e(3788,"'2017-11-28T00:00:00-02:00'"),t(),e(3789," ou "),n(3790,"code"),e(3791,"new Date(2017, 10, 28)"),t(),e(3792,"."),t()()(),n(3793,"li")(3794,"code"),e(3795,"number"),t(),e(3796,": Valores num\xE9ricos."),t(),n(3797,"li")(3798,"code"),e(3799,"string"),t(),e(3800,": Textos."),t(),n(3801,"li")(3802,"code"),e(3803,"time"),t(),e(3804,": Valor do hor\xE1rio."),n(3805,"ul")(3806,"li"),e(3807,"Aceita o tipo "),n(3808,"strong"),e(3809,"string"),t(),e(3810," nos formatos "),n(3811,"strong"),e(3812,"'HH:mm:ss'"),t(),e(3813," ou "),n(3814,"strong"),e(3815,"'HH:mm:ss.ffffff'"),t(),e(3816,", por exemplo: "),n(3817,"code"),e(3818,"'23:12:45'"),t(),e(3819,"."),t()()()()()(),n(3820,"tr",13)(3821,"td",14)(3822,"div",15)(3823,"span",16),e(3824," url"),i(3825,"br"),t()()(),n(3826,"td",17)(3827,"code",18),e(3828,"string"),t()(),n(3829,"td",20)(3830,"em")(3831,"strong"),e(3832,"(opcional)"),t()(),n(3833,"p"),e(3834,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t(),n(3835,"p")(3836,"strong"),e(3837,"Componente compat\xEDvel"),t(),e(3838,": "),n(3839,"code"),e(3840,"po-upload"),t()()()(),n(3841,"tr",13)(3842,"td",14)(3843,"div",15)(3844,"span",16),e(3845," validate"),i(3846,"br"),t()()(),n(3847,"td",17)(3848,"code",18),e(3849,"string "),t(),n(3850,"code",29),e(3851," Function"),t()(),n(3852,"td",20)(3853,"em")(3854,"strong"),e(3855,"(opcional)"),t()(),n(3856,"p"),e(3857,"Fun\xE7\xE3o ou servi\xE7o para validar as "),n(3858,"strong"),e(3859,"mudan\xE7as do campo"),t(),e(3860,"."),t(),n(3861,"ul")(3862,"li"),e(3863,"A propriedade aceita os seguintes tipos:"),t()(),n(3864,"ul")(3865,"li")(3866,"strong"),e(3867,"String"),t(),e(3868,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),n(3869,"code"),e(3870,"POST"),t(),e(3871,"."),t(),n(3872,"li")(3873,"strong"),e(3874,"Function"),t(),e(3875,": M\xE9todo que ser\xE1 executado."),t()(),n(3876,"p"),e(3877,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),n(3878,"code"),e(3879,"PoDynamicFormFieldChanged"),t(),e(3880,":"),t(),n(3881,"p")(3882,"code"),e(3883,"{ property: 'property name', value: 'new value' }"),t()(),n(3884,"p"),e(3885,"O retorno desta fun\xE7\xE3o deve ser do tipo "),n(3886,"a",76),e(3887,"PoDynamicFormFieldValidation"),t(),e(3888,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),t(),n(3889,"pre")(3890,"code"),e(3891,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),t()(),n(3892,"p"),e(3893,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),n(3894,"code"),e(3895,"bind"),t(),e(3896,`, por exemplo:
`),n(3897,"code"),e(3898,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),t()()()(),n(3899,"tr",13)(3900,"td",14)(3901,"div",15)(3902,"span",16),e(3903," visible"),i(3904,"br"),t()()(),n(3905,"td",17)(3906,"code",28),e(3907,"boolean"),t()(),n(3908,"td",20)(3909,"em")(3910,"strong"),e(3911,"(opcional)"),t()(),n(3912,"p"),e(3913,"Indica se o campo ser\xE1 vis\xEDvel."),t()()()(),n(3914,"h4",38)(3915,"code",5),e(3916,"PoDynamicFormLoad"),t()(),n(3917,"div",2)(3918,"p"),i(3919,"a",77),t(),n(3920,"p"),e(3921,"Estrutura de retorno no carregamento do formul\xE1rio."),t()(),n(3922,"h4",9),e(3923,"Propriedades"),t(),n(3924,"table",10)(3925,"tr",11)(3926,"th",12),e(3927,"Nome"),t(),n(3928,"th",12),e(3929,"Tipo"),t(),n(3930,"th",12),e(3931,"Descri\xE7\xE3o"),t()(),n(3932,"tr",13)(3933,"td",14)(3934,"div",15)(3935,"span",16),e(3936," fields"),i(3937,"br"),t()()(),n(3938,"td",17)(3939,"code",22),e(3940,"Array<PoDynamicFormField>"),t()(),n(3941,"td",20)(3942,"em")(3943,"strong"),e(3944,"(opcional)"),t()(),n(3945,"p"),e(3946,"Lista com as novas defini\xE7\xF5es dos campos."),t(),n(3947,"blockquote")(3948,"p"),e(3949,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que precisam ser alteradas ou adicionadas."),t()()()(),n(3950,"tr",13)(3951,"td",14)(3952,"div",15)(3953,"span",16),e(3954," focus"),i(3955,"br"),t()()(),n(3956,"td",17)(3957,"code",18),e(3958,"string"),t()(),n(3959,"td",20)(3960,"em")(3961,"strong"),e(3962,"(opcional)"),t()(),n(3963,"p"),e(3964,"Nome do campo que receber\xE1 o foco."),t(),n(3965,"p"),e(3966,"Exemplo:"),t(),n(3967,"pre")(3968,"code"),e(3969,`focus: 'name'
`),t()()()(),n(3970,"tr",13)(3971,"td",14)(3972,"div",15)(3973,"span",16),e(3974," value"),i(3975,"br"),t()()(),n(3976,"td",17)(3977,"code",33),e(3978,"any"),t()(),n(3979,"td",20)(3980,"em")(3981,"strong"),e(3982,"(opcional)"),t()(),n(3983,"p"),e(3984,"Objeto contendo os novos valores."),t(),n(3985,"p"),e(3986,"Exemplo:"),t(),n(3987,"pre")(3988,"code"),e(3989,`{
  name: 'new name',
  age: 10
}
`),t()(),n(3990,"blockquote")(3991,"p"),e(3992,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),t()()()()(),n(3993,"h4",38)(3994,"code",5),e(3995,"PoDynamicFormFieldChanged"),t()(),n(3996,"div",2)(3997,"p"),e(3998,"Estrutura dos valores que ser\xE3o disparados quando houver uma mudan\xE7a em um campo ou no formul\xE1rio."),t()(),n(3999,"h4",9),e(4e3,"Propriedades"),t(),n(4001,"table",10)(4002,"tr",11)(4003,"th",12),e(4004,"Nome"),t(),n(4005,"th",12),e(4006,"Tipo"),t(),n(4007,"th",12),e(4008,"Descri\xE7\xE3o"),t()(),n(4009,"tr",13)(4010,"td",14)(4011,"div",15)(4012,"span",16),e(4013," property"),i(4014,"br"),t()()(),n(4015,"td",17)(4016,"code",18),e(4017,"string"),t()(),n(4018,"td",20)(4019,"p"),e(4020,"Valor da propriedade do campo."),t()()(),n(4021,"tr",13)(4022,"td",14)(4023,"div",15)(4024,"span",16),e(4025," value"),i(4026,"br"),t()()(),n(4027,"td",17)(4028,"code",33),e(4029,"any"),t()(),n(4030,"td",20)(4031,"p"),e(4032,"Novo valor do campo."),t()()()(),n(4033,"h4",38)(4034,"code",5),e(4035,"PoDynamicFormFieldValidation"),t()(),n(4036,"div",2)(4037,"p"),i(4038,"a",78),t(),n(4039,"p"),e(4040,"Estrutura de retorno da valida\xE7\xE3o de um campo."),t()(),n(4041,"h4",9),e(4042,"Propriedades"),t(),n(4043,"table",10)(4044,"tr",11)(4045,"th",12),e(4046,"Nome"),t(),n(4047,"th",12),e(4048,"Tipo"),t(),n(4049,"th",12),e(4050,"Descri\xE7\xE3o"),t()(),n(4051,"tr",13)(4052,"td",14)(4053,"div",15)(4054,"span",16),e(4055," field"),i(4056,"br"),t()()(),n(4057,"td",17)(4058,"code",79),e(4059,"PoDynamicFormField"),t()(),n(4060,"td",20)(4061,"em")(4062,"strong"),e(4063,"(opcional)"),t()(),n(4064,"p"),e(4065,"Novas defini\xE7\xF5es das propriedades do campo."),t(),n(4066,"blockquote")(4067,"p"),e(4068,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades, apenas as que foram alteradas."),t()()()(),n(4069,"tr",13)(4070,"td",14)(4071,"div",15)(4072,"span",16),e(4073," focus"),i(4074,"br"),t()()(),n(4075,"td",17)(4076,"code",28),e(4077,"boolean"),t()(),n(4078,"td",20)(4079,"em")(4080,"strong"),e(4081,"(opcional)"),t()(),n(4082,"p"),e(4083,"Coloca o foco no campo ap\xF3s a valida\xE7\xE3o."),t()()(),n(4084,"tr",13)(4085,"td",14)(4086,"div",15)(4087,"span",16),e(4088," value"),i(4089,"br"),t()()(),n(4090,"td",17)(4091,"code",33),e(4092,"any"),t()(),n(4093,"td",20)(4094,"em")(4095,"strong"),e(4096,"(opcional)"),t()(),n(4097,"p"),e(4098,"Novo valor do campo"),t()()()(),n(4099,"h4",38)(4100,"code",5),e(4101,"PoDynamicFormValidation"),t()(),n(4102,"div",2)(4103,"p"),i(4104,"a",80),t(),n(4105,"p"),e(4106,"Estrutura de retorno da valida\xE7\xE3o do formul\xE1rio."),t()(),n(4107,"h4",9),e(4108,"Propriedades"),t(),n(4109,"table",10)(4110,"tr",11)(4111,"th",12),e(4112,"Nome"),t(),n(4113,"th",12),e(4114,"Tipo"),t(),n(4115,"th",12),e(4116,"Descri\xE7\xE3o"),t()(),n(4117,"tr",13)(4118,"td",14)(4119,"div",15)(4120,"span",16),e(4121," fields"),i(4122,"br"),t()()(),n(4123,"td",17)(4124,"code",22),e(4125,"Array<PoDynamicFormField>"),t()(),n(4126,"td",20)(4127,"em")(4128,"strong"),e(4129,"(opcional)"),t()(),n(4130,"p"),e(4131,"Lista com as novas defini\xE7\xF5es dos campos."),t(),n(4132,"blockquote")(4133,"p"),e(4134,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que foram alteradas."),t()()()(),n(4135,"tr",13)(4136,"td",14)(4137,"div",15)(4138,"span",16),e(4139," focus"),i(4140,"br"),t()()(),n(4141,"td",17)(4142,"code",18),e(4143,"string"),t()(),n(4144,"td",20)(4145,"em")(4146,"strong"),e(4147,"(opcional)"),t()(),n(4148,"p"),e(4149,"Nome do campo que receber\xE1 o foco."),t(),n(4150,"p"),e(4151,"Exemplo:"),t(),n(4152,"pre")(4153,"code"),e(4154,`focus: 'name'
`),t()()()(),n(4155,"tr",13)(4156,"td",14)(4157,"div",15)(4158,"span",16),e(4159," value"),i(4160,"br"),t()()(),n(4161,"td",17)(4162,"code",33),e(4163,"any"),t()(),n(4164,"td",20)(4165,"em")(4166,"strong"),e(4167,"(opcional)"),t()(),n(4168,"p"),e(4169,"Objeto contendo os novos valores."),t(),n(4170,"p"),e(4171,"Exemplo:"),t(),n(4172,"pre")(4173,"code"),e(4174,`{
  name: 'new name',
  age: 10
}
`),t()(),n(4175,"blockquote")(4176,"p"),e(4177,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),t()()()()(),n(4178,"h4",38)(4179,"code",5),e(4180,"ErrorAsyncProperties"),t()(),n(4181,"div",2)(4182,"p"),e(4183,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(4184,"h4",9),e(4185,"Propriedades"),t(),n(4186,"table",10)(4187,"tr",11)(4188,"th",12),e(4189,"Nome"),t(),n(4190,"th",12),e(4191,"Tipo"),t(),n(4192,"th",12),e(4193,"Descri\xE7\xE3o"),t()(),n(4194,"tr",13)(4195,"td",14)(4196,"div",15)(4197,"span",16),e(4198," errorAsync"),i(4199,"br"),t()()(),n(4200,"td",17)(4201,"code",46),e(4202,"(value) => Observable<boolean>"),t()(),n(4203,"td",20)(4204,"p"),e(4205,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(4206,"code"),e(4207,"change"),t(),e(4208," ou "),n(4209,"code"),e(4210,"change-model"),t(),e(4211,", dependendo do valor da propriedade "),n(4212,"code"),e(4213,"triggerMode"),t(),e(4214,"."),t()()(),n(4215,"tr",13)(4216,"td",14)(4217,"div",15)(4218,"span",16),e(4219," triggerMode"),i(4220,"br"),t()()(),n(4221,"td",17)(4222,"code",81),e(4223,"'change' "),t(),n(4224,"code",82),e(4225," 'changeModel'"),t()(),n(4226,"td",20)(4227,"em")(4228,"strong"),e(4229,"(opcional)"),t()(),n(4230,"p"),e(4231,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(4232,"code"),e(4233,"change"),t(),e(4234," ou "),n(4235,"code"),e(4236,"change-model"),t(),e(4237,"."),t()()()(),n(4238,"h3"),e(4239,"Enums"),t(),n(4240,"h4",4)(4241,"code",5),e(4242,"ForceBooleanComponentEnum"),t()(),n(4243,"div",2)(4244,"p"),e(4245,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),t()(),n(4246,"h4",9),e(4247,"Propriedades"),t(),n(4248,"table",10)(4249,"tr",11)(4250,"th",12),e(4251,"Nome"),t(),n(4252,"th",12),e(4253,"Descri\xE7\xE3o"),t()(),n(4254,"tr",13)(4255,"td",14)(4256,"div",15)(4257,"span",16),e(4258," switch"),i(4259,"br"),t()()(),n(4260,"td",20)(4261,"p"),e(4262,"For\xE7a a renderiza\xE7\xE3o de um po-switch"),t()()(),n(4263,"tr",13)(4264,"td",14)(4265,"div",15)(4266,"span",16),e(4267," checkbox"),i(4268,"br"),t()()(),n(4269,"td",20)(4270,"p"),e(4271,"For\xE7a a renderiza\xE7\xE3o de um po-checkbox"),t()()()(),n(4272,"h4",4)(4273,"code",5),e(4274,"ForceOptionComponentEnum"),t()(),n(4275,"div",2)(4276,"p"),e(4277,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),t()(),n(4278,"h4",9),e(4279,"Propriedades"),t(),n(4280,"table",10)(4281,"tr",11)(4282,"th",12),e(4283,"Nome"),t(),n(4284,"th",12),e(4285,"Descri\xE7\xE3o"),t()(),n(4286,"tr",13)(4287,"td",14)(4288,"div",15)(4289,"span",16),e(4290," radioGroup"),i(4291,"br"),t()()(),n(4292,"td",20)(4293,"p"),e(4294,"For\xE7a a renderiza\xE7\xE3o de um po-radio-group independente da quantidade do op\xE7\xF5es"),t()()(),n(4295,"tr",13)(4296,"td",14)(4297,"div",15)(4298,"span",16),e(4299," select"),i(4300,"br"),t()()(),n(4301,"td",20)(4302,"p"),e(4303,"For\xE7a a renderiza\xE7\xE3o de um po-select independente da quantidade do op\xE7\xF5es"),t()()()(),n(4304,"h4",4)(4305,"code",5),e(4306,"PoDynamicFieldType"),t()(),n(4307,"div",2)(4308,"p"),e(4309,"Enum para defini\xE7\xE3o do tipo de campo que ser\xE1 criado dinamicamente."),t()(),n(4310,"h4",9),e(4311,"Propriedades"),t(),n(4312,"table",10)(4313,"tr",11)(4314,"th",12),e(4315,"Nome"),t(),n(4316,"th",12),e(4317,"Descri\xE7\xE3o"),t()(),n(4318,"tr",13)(4319,"td",14)(4320,"div",15)(4321,"span",16),e(4322," Boolean"),i(4323,"br"),t()()(),n(4324,"td",20)(4325,"p"),e(4326,"Valor booleano."),t()()(),n(4327,"tr",13)(4328,"td",14)(4329,"div",15)(4330,"span",16),e(4331," Currency"),i(4332,"br"),t()()(),n(4333,"td",20)(4334,"p"),e(4335,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),t()()(),n(4336,"tr",13)(4337,"td",14)(4338,"div",15)(4339,"span",16),e(4340," Decimal"),i(4341,"br"),t()()(),n(4342,"td",20)(4343,"p"),e(4344,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),t()()(),n(4345,"tr",13)(4346,"td",14)(4347,"div",15)(4348,"span",16),e(4349," Date"),i(4350,"br"),t()()(),n(4351,"td",20)(4352,"p"),e(4353,"Valor para data."),t()()(),n(4354,"tr",13)(4355,"td",14)(4356,"div",15)(4357,"span",16),e(4358," DateTime"),i(4359,"br"),t()()(),n(4360,"td",20)(4361,"p"),e(4362,"Valor para data e hora."),t()()(),n(4363,"tr",13)(4364,"td",14)(4365,"div",15)(4366,"span",16),e(4367," Time"),i(4368,"br"),t()()(),n(4369,"td",20)(4370,"p"),e(4371,"Utilizado para informar/exibir hora."),t()()(),n(4372,"tr",13)(4373,"td",14)(4374,"div",15)(4375,"span",16),e(4376," Number"),i(4377,"br"),t()()(),n(4378,"td",20)(4379,"p"),e(4380,"Valor num\xE9rico."),t()()(),n(4381,"tr",13)(4382,"td",14)(4383,"div",15)(4384,"span",16),e(4385," String"),i(4386,"br"),t()()(),n(4387,"td",20)(4388,"p"),e(4389,"Texto."),t()()(),n(4390,"tr",13)(4391,"td",14)(4392,"div",15)(4393,"span",16),e(4394," Upload"),i(4395,"br"),t()()(),n(4396,"td",20)(4397,"p"),e(4398,"Utilizado para fazer uploads de arquivos."),t()()()()())},dependencies:[b],encapsulation:2})}return o})();var ie=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(O(K),O(X))};static \u0275cmp=s({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Dynamic Form",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),c("p-click",function(){return l.changeTab("doc")}),i(3,"sample-po-dynamic-form-doc"),t(),n(4,"po-tab",3),c("p-click",function(){return l.changeTab("web")}),i(5,"sample-po-dynamic-form-basic-view")(6,"sample-po-dynamic-form-register-view")(7,"sample-po-dynamic-form-container-view"),t()()()),a&2&&(p("p-actions",l.actions),d(2),p("p-active",l.activeTab==="doc"),d(2),p("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"))},dependencies:[J,x,S,Q,$,te,ne],encapsulation:2})}return o})();var ye=[{path:"",component:ie}],oe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=T({type:o});static \u0275inj=P({imports:[L.forChild(ye),L]})}return o})();var et=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=T({type:o});static \u0275inj=P({imports:[W,oe]})}return o})();export{et as DocPoDynamicFormModule};
