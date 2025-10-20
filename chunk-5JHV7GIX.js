import{o as D,p as be}from"./chunk-AFRMAFNN.js";import{Ca as P,Fa as ce,Ka as X,O as de,Q as me,Qa as ue,Ra as $,S as se,U as _,Va as W,a as K,lb as ge,sa as Z,v as N,xb as x,yb as k}from"./chunk-TRMMOLUM.js";import{$a as A,Ca as C,Cc as ie,Eb as w,Fc as L,Gc as F,Hc as J,Ic as O,Jc as B,Ka as t,La as n,M as Q,Ma as a,Mc as ae,Nc as oe,P as I,Qa as V,Ra as b,Rb as Y,Rc as le,T as c,U as u,Wc as re,Yc as pe,Za as H,_a as z,_c as ne,ab as U,bb as e,db as y,fb as f,gb as E,hb as h,ia as p,ja as te,nb as R,pa as S,qa as G,tb as T,wb as q,za as s}from"./chunk-TTO7B3JZ.js";var Se=(()=>{class l{static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","datepickerRange","p-label","PO Datepicker Range"]],template:function(o,i){o&1&&a(0,"po-datepicker-range",0)},dependencies:[P],encapsulation:2})}return l})();var Pe=l=>({"docs-sample-code-tabs":l}),fe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Range Basic"),n(),t(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-range-basic/sample-po-datepicker-range-basic.component.html"),n(),t(13,"pre",7),e(14,`<po-datepicker-range name="datepickerRange" p-label="PO Datepicker Range"> </po-datepicker-range>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-range-basic/sample-po-datepicker-range-basic.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-range-basic',
  templateUrl: './sample-po-datepicker-range-basic.component.html',
  standalone: false
})
export class SamplePoDatepickerRangeBasicComponent {}
`),n()()()()(),t(21,"div",10),a(22,"sample-po-datepicker-range-basic"),n(),a(23,"hr")),o&2&&(p(5),C("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",R(4,Pe,i.hideSampleCodeTabs)))},dependencies:[w,D,x,k,Se],encapsulation:2})}return l})();var he=(()=>{class l{additionalHelpTooltip;clean;customLiterals;datepickerRange;endDate;event;help;label;literals;properties;fieldErrorMessage;startDate;maxDate;minDate;locale;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];localeOptions=[{label:"English",value:"en"},{label:"Espa\xF1ol",value:"es"},{label:"Portugu\xEAs",value:"pt"},{label:"P\u0443\u0441\u0441\u043A\u0438\u0439",value:"ru"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}getDatepickerRange(){return JSON.stringify(this.datepickerRange)}restore(){this.additionalHelpTooltip="",this.clean=void 0,this.customLiterals=void 0,this.endDate=void 0,this.event=void 0,this.help=void 0,this.label=void 0,this.literals=void 0,this.properties=[],this.fieldErrorMessage="",this.startDate=void 0,this.maxDate=void 0,this.minDate=void 0,this.locale=void 0,this.size="medium",setTimeout(()=>this.datepickerRange=void 0)}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-labs"]],standalone:!1,decls:20,vars:38,consts:[["f","ngForm"],["name","datepickerRange",1,"po-sm-12",3,"ngModelChange","p-change","p-keydown","ngModel","p-additional-help-tooltip","p-clean","p-disabled","p-end-date","p-help","p-label","p-literals","p-max-date","p-min-date","p-no-autocomplete","p-optional","p-readonly","p-required","p-field-error-message","p-show-required","p-start-date","p-locale","p-size","p-label-text-wrap","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minDate","p-clean","","p-label","Min date",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date"],["name","maxDate","p-clean","","p-label","Max date",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","literals","p-help",'Ex.: { "invalidFormat": "Date in inconsistent format", "startDateGreaterThanEndDate": "End date less than start date" }',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","locale","p-label","Locale",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(o,i){if(o&1){let d=V();t(0,"po-datepicker-range",1),h("ngModelChange",function(r){return c(d),E(i.datepickerRange,r)||(i.datepickerRange=r),u(r)}),b("p-change",function(){return c(d),u(i.changeEvent("p-change"))})("p-keydown",function(){return c(d),u(i.changeEvent("p-keydown"))}),n(),a(1,"hr"),t(2,"div",2),a(3,"po-info",3)(4,"po-info",4),n(),a(5,"hr"),t(6,"form",null,0)(8,"po-input",5),h("ngModelChange",function(r){return c(d),E(i.label,r)||(i.label=r),u(r)}),n(),t(9,"po-input",6),h("ngModelChange",function(r){return c(d),E(i.help,r)||(i.help=r),u(r)}),n(),t(10,"po-input",7),h("ngModelChange",function(r){return c(d),E(i.additionalHelpTooltip,r)||(i.additionalHelpTooltip=r),u(r)}),n(),t(11,"po-datepicker",8),h("ngModelChange",function(r){return c(d),E(i.minDate,r)||(i.minDate=r),u(r)}),n(),t(12,"po-datepicker",9),h("ngModelChange",function(r){return c(d),E(i.maxDate,r)||(i.maxDate=r),u(r)}),n(),t(13,"po-input",10),h("ngModelChange",function(r){return c(d),E(i.literals,r)||(i.literals=r),u(r)}),b("p-change",function(){return c(d),u(i.changeLiterals())}),n(),t(14,"po-input",11),h("ngModelChange",function(r){return c(d),E(i.fieldErrorMessage,r)||(i.fieldErrorMessage=r),u(r)}),n(),t(15,"po-select",12),h("ngModelChange",function(r){return c(d),E(i.locale,r)||(i.locale=r),u(r)}),n(),t(16,"po-checkbox-group",13),h("ngModelChange",function(r){return c(d),E(i.properties,r)||(i.properties=r),u(r)}),n(),t(17,"po-radio-group",14),h("ngModelChange",function(r){return c(d),E(i.size,r)||(i.size=r),u(r)}),n(),t(18,"div",2)(19,"po-button",15),b("p-click",function(){return c(d),u(i.restore())}),n()()()}o&2&&(f("ngModel",i.datepickerRange),s("p-additional-help-tooltip",i.additionalHelpTooltip)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-end-date",i.endDate)("p-help",i.help)("p-label",i.label)("p-literals",i.customLiterals)("p-max-date",i.maxDate)("p-min-date",i.minDate)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-start-date",i.startDate)("p-locale",i.locale)("p-size",i.size)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),p(3),s("p-value",i.getDatepickerRange()),p(),s("p-value",i.event),p(4),f("ngModel",i.label),p(),f("ngModel",i.help),p(),f("ngModel",i.additionalHelpTooltip),p(),f("ngModel",i.minDate),s("p-max-date",i.maxDate),p(),f("ngModel",i.maxDate),s("p-min-date",i.minDate),p(),f("ngModel",i.literals),p(),f("ngModel",i.fieldErrorMessage),p(),f("ngModel",i.locale),s("p-options",i.localeOptions),p(),f("ngModel",i.properties),s("p-options",i.propertiesOptions),p(),f("ngModel",i.size),s("p-options",i.sizeOptions))},dependencies:[B,L,F,O,J,N,de,me,se,P,ce,ue,W],encapsulation:2})}return l})();var Te=l=>({"docs-sample-code-tabs":l}),ve=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Range Labs"),n(),t(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-range-labs/sample-po-datepicker-range-labs.component.html"),n(),t(13,"pre",7),e(14,`<po-datepicker-range
  class="po-sm-12"
  name="datepickerRange"
  [(ngModel)]="datepickerRange"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-end-date]="endDate"
  [p-help]="help"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-max-date]="maxDate"
  [p-min-date]="minDate"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-start-date]="startDate"
  [p-locale]="locale"
  [p-size]="size"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-datepicker-range>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="getDatepickerRange()"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input
    class="po-md-6"
    name="additionalHelpTooltip"
    [(ngModel)]="additionalHelpTooltip"
    p-clean
    p-label="Additional Help"
  >
  </po-input>

  <po-datepicker class="po-md-6" name="minDate" [(ngModel)]="minDate" p-clean p-label="Min date" [p-max-date]="maxDate">
  </po-datepicker>

  <po-datepicker class="po-md-6" name="maxDate" [(ngModel)]="maxDate" p-clean p-label="Max date" [p-min-date]="minDate">
  </po-datepicker>

  <po-input
    class="po-md-12 po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: { "invalidFormat": "Date in inconsistent format", "startDateGreaterThanEndDate": "End date less than start date" }'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-select class="po-md-6" name="locale" p-label="Locale" [(ngModel)]="locale" [p-options]="localeOptions">
  </po-select>

  <po-checkbox-group
    class="po-md-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-md-12"
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" name="restore" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-range-labs/sample-po-datepicker-range-labs.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoDatepickerRange,
  PoDatepickerRangeLiterals,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-range-labs',
  templateUrl: './sample-po-datepicker-range-labs.component.html',
  standalone: false
})
export class SamplePoDatepickerRangeLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  clean: boolean;
  customLiterals: PoDatepickerRangeLiterals;
  datepickerRange: PoDatepickerRange;
  endDate: string | Date;
  event: string;
  help: string;
  label: string;
  literals: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  startDate: string | Date;
  maxDate: string | Date;
  minDate: string | Date;
  locale: string;
  size: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' }
  ];

  public readonly localeOptions: Array<PoSelectOption> = [
    { label: 'English', value: 'en' },
    { label: 'Espa\xF1ol', value: 'es' },
    { label: 'Portugu\xEAs', value: 'pt' },
    { label: 'P\u0443\u0441\u0441\u043A\u0438\u0439', value: 'ru' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  getDatepickerRange() {
    return JSON.stringify(this.datepickerRange);
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.clean = undefined;
    this.customLiterals = undefined;
    this.endDate = undefined;
    this.event = undefined;
    this.help = undefined;
    this.label = undefined;
    this.literals = undefined;
    this.properties = [];
    this.fieldErrorMessage = '';
    this.startDate = undefined;
    this.maxDate = undefined;
    this.minDate = undefined;
    this.locale = undefined;
    this.size = 'medium';
    setTimeout(() => (this.datepickerRange = undefined));
  }
}
`),n()()()()(),t(21,"div",10),a(22,"sample-po-datepicker-range-labs"),n(),a(23,"hr")),o&2&&(p(5),C("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",R(4,Te,i.hideSampleCodeTabs)))},dependencies:[w,D,x,k,he],encapsulation:2})}return l})();var Le=["formVacationSuggestion"],xe=(()=>{class l{poNotification=I(Z);formVacationSuggestion;poModal;datepickerRange;quantityOfDays=void 0;reason;cancel={action:()=>{this.poModal.close()},label:"Cancel"};submit={action:()=>{this.poModal.close(),this.formVacationSuggestion.reset(),this.poNotification.success("Vacation suggestion submitted!")},label:"Submit"};get validateForm(){return!(this.formVacationSuggestion.valid&&this.datepickerRange&&this.datepickerRange.start&&this.datepickerRange.end)}calculateQuantityOfVacationDays(){let m=new Date(this.datepickerRange.start),o=new Date(this.datepickerRange.end);this.quantityOfDays=Math.floor((Date.UTC(o.getFullYear(),o.getMonth(),o.getDate())-Date.UTC(m.getFullYear(),m.getMonth(),m.getDate()))/(1e3*60*60*24))}clean(){this.datepickerRange=void 0,this.quantityOfDays=void 0,this.reason=void 0}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-vacations"]],viewQuery:function(o,i){if(o&1&&(H(Le,7),H(_,7)),o&2){let d;z(d=A())&&(i.formVacationSuggestion=d.first),z(d=A())&&(i.poModal=d.first)}},standalone:!1,decls:21,vars:18,consts:[["formVacationSuggestion","ngForm"],["modalVacationSuggestion",""],["p-label","Vacation suggestion",1,"po-md-9"],[1,"po-row"],["name","datepickerRange","p-clean","","p-label","Select the period","p-required","",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","number","p-disabled","","p-label","Quantity of days","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","textarea","p-label","Reason",1,"po-md-9",3,"ngModelChange","ngModel"],["p-label","Clean",1,"po-md-2","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click"],["p-label","Submit",1,"po-md-2",3,"p-click","p-disabled"],["p-hide-close","","p-title","Confirm vacation suggestion",3,"p-primary-action","p-secondary-action"],["p-label","Initial period",1,"po-md-4",3,"p-value"],["p-label","Final period",1,"po-md-4",3,"p-value"],["p-label","Quantity of days",1,"po-md-4",3,"p-value"],["p-disabled","","p-label","Reason","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"]],template:function(o,i){if(o&1){let d=V();t(0,"form",null,0),a(2,"po-divider",2),t(3,"div",3)(4,"po-datepicker-range",4),h("ngModelChange",function(r){return c(d),E(i.datepickerRange,r)||(i.datepickerRange=r),u(r)}),b("p-change",function(){return c(d),u(i.calculateQuantityOfVacationDays())}),n(),t(5,"po-number",5),h("ngModelChange",function(r){return c(d),E(i.quantityOfDays,r)||(i.quantityOfDays=r),u(r)}),n()(),t(6,"div",3)(7,"po-textarea",6),h("ngModelChange",function(r){return c(d),E(i.reason,r)||(i.reason=r),u(r)}),n()(),t(8,"div",3)(9,"po-button",7),b("p-click",function(){return c(d),u(i.clean())}),n(),t(10,"po-button",8),b("p-click",function(){c(d);let r=U(12);return u(r.open())}),n()()(),t(11,"po-modal",9,1)(13,"div",3),a(14,"po-info",10),T(15,"date"),a(16,"po-info",11),T(17,"date"),a(18,"po-info",12),n(),t(19,"div",3)(20,"po-textarea",13),h("ngModelChange",function(r){return c(d),E(i.reason,r)||(i.reason=r),u(r)}),n()()()}o&2&&(p(4),f("ngModel",i.datepickerRange),p(),f("ngModel",i.quantityOfDays),p(2),f("ngModel",i.reason),p(3),s("p-disabled",i.validateForm),p(),s("p-primary-action",i.submit)("p-secondary-action",i.cancel),p(3),s("p-value",q(15,10,i.datepickerRange==null?null:i.datepickerRange.start,"longDate","+0000")),p(2),s("p-value",q(17,14,i.datepickerRange==null?null:i.datepickerRange.end,"longDate","+0000")),p(2),s("p-value",i.quantityOfDays),p(2),f("ngModel",i.reason))},dependencies:[B,L,F,O,J,N,K,P,X,$,W,_,Y],encapsulation:2})}return l})();var Oe=l=>({"docs-sample-code-tabs":l}),ke=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-vacations-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Range - Vacations Suggestion"),n(),t(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-range-vacations/sample-po-datepicker-range-vacations.component.html"),n(),t(13,"pre",7),e(14,`<form #formVacationSuggestion="ngForm">
  <po-divider class="po-md-9" p-label="Vacation suggestion"> </po-divider>

  <div class="po-row">
    <po-datepicker-range
      class="po-md-6"
      name="datepickerRange"
      [(ngModel)]="datepickerRange"
      p-clean
      p-label="Select the period"
      p-required
      (p-change)="calculateQuantityOfVacationDays()"
    >
    </po-datepicker-range>

    <po-number
      class="po-md-3"
      name="number"
      [(ngModel)]="quantityOfDays"
      p-disabled
      p-label="Quantity of days"
      p-required
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-9" name="textarea" [(ngModel)]="reason" p-label="Reason"> </po-textarea>
  </div>

  <div class="po-row">
    <po-button class="po-md-2 po-offset-md-5 po-offset-lg-5 po-offset-xl-5" p-label="Clean" (p-click)="clean()">
    </po-button>

    <po-button class="po-md-2" p-label="Submit" [p-disabled]="validateForm" (p-click)="modalVacationSuggestion.open()">
    </po-button>
  </div>
</form>

<po-modal
  #modalVacationSuggestion
  p-hide-close
  p-title="Confirm vacation suggestion"
  [p-primary-action]="submit"
  [p-secondary-action]="cancel"
>
  <div class="po-row">
    <po-info class="po-md-4" p-label="Initial period" [p-value]="datepickerRange?.start | date: 'longDate' : '+0000'">
    </po-info>

    <po-info class="po-md-4" p-label="Final period" [p-value]="datepickerRange?.end | date: 'longDate' : '+0000'">
    </po-info>

    <po-info class="po-md-4" p-label="Quantity of days" [p-value]="quantityOfDays"> </po-info>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-12" [(ngModel)]="reason" p-disabled p-label="Reason" p-required> </po-textarea>
  </div>
</po-modal>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-range-vacations/sample-po-datepicker-range-vacations.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, ViewChild, inject } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoDatepickerRange, PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-range-vacations',
  templateUrl: './sample-po-datepicker-range-vacations.component.html',
  standalone: false
})
export class SamplePoDatepickerRangeVacationsComponent {
  private poNotification = inject(PoNotificationService);

  @ViewChild('formVacationSuggestion', { static: true }) formVacationSuggestion: UntypedFormControl;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  datepickerRange: PoDatepickerRange;
  quantityOfDays: number = undefined;
  reason: string;

  cancel: PoModalAction = {
    action: () => {
      this.poModal.close();
    },
    label: 'Cancel'
  };

  submit: PoModalAction = {
    action: () => {
      this.poModal.close();
      this.formVacationSuggestion.reset();
      this.poNotification.success('Vacation suggestion submitted!');
    },
    label: 'Submit'
  };

  get validateForm() {
    return !(
      this.formVacationSuggestion.valid &&
      this.datepickerRange &&
      this.datepickerRange.start &&
      this.datepickerRange.end
    );
  }

  calculateQuantityOfVacationDays() {
    const start = new Date(this.datepickerRange.start);
    const end = new Date(this.datepickerRange.end);

    this.quantityOfDays = Math.floor(
      (Date.UTC(end.getFullYear(), end.getMonth(), end.getDate()) -
        Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())) /
        (1000 * 60 * 60 * 24)
    );
  }

  clean() {
    this.datepickerRange = undefined;
    this.quantityOfDays = undefined;
    this.reason = undefined;
  }
}
`),n()()()()(),t(21,"div",10),a(22,"sample-po-datepicker-range-vacations"),n(),a(23,"hr")),o&2&&(p(5),C("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",R(4,Oe,i.hideSampleCodeTabs)))},dependencies:[w,D,x,k,xe],encapsulation:2})}return l})();var De=(()=>{class l{poNotification=I(Z);formBuilder=I(le);poModal;datepickerRange;formVacationSuggestion;quantityOfDays;reason;cancel={action:()=>{this.poModal.close()},label:"Cancel"};submit={action:()=>{this.poModal.close(),this.formVacationSuggestion.reset(),this.poNotification.success("Vacation suggestion submitted!")},label:"Submit"};get validateForm(){return!(this.formVacationSuggestion.valid&&this.formVacationSuggestion.get("datepickerRange").value.start&&this.formVacationSuggestion.get("datepickerRange").value.end)}ngOnInit(){this.formVacationSuggestion=this.formBuilder.group({datepickerRange:[void 0,ie.required],quantityOfDays:[void 0],reason:[void 0]})}calculateQuantityOfVacationDays(){let m=new Date(this.formVacationSuggestion.get("datepickerRange").value.start),o=new Date(this.formVacationSuggestion.get("datepickerRange").value.end),i=Math.floor((Date.UTC(o.getFullYear(),o.getMonth(),o.getDate())-Date.UTC(m.getFullYear(),m.getMonth(),m.getDate()))/(1e3*60*60*24));this.formVacationSuggestion.get("quantityOfDays").setValue(i)}clean(){this.formVacationSuggestion.reset()}submitForm(){this.datepickerRange=this.formVacationSuggestion.get("datepickerRange").value,this.reason=this.formVacationSuggestion.get("reason").value,this.quantityOfDays=this.formVacationSuggestion.get("quantityOfDays").value}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-vacations-reactive-form"]],viewQuery:function(o,i){if(o&1&&H(_,7),o&2){let d;z(d=A())&&(i.poModal=d.first)}},standalone:!1,decls:20,vars:16,consts:[["modalVacationSuggestion",""],[3,"formGroup"],["p-label","Vacation suggestion",1,"po-md-9"],[1,"po-row"],["formControlName","datepickerRange","p-clean","","p-label","Select the period","p-required","",1,"po-md-6",3,"p-change"],["formControlName","quantityOfDays","p-disabled","","p-label","Quantity of days","p-required","",1,"po-md-3"],["formControlName","reason","p-label","Reason",1,"po-md-9"],["p-label","Clean",1,"po-md-2","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click"],["p-label","Submit",1,"po-md-2",3,"p-click","p-disabled"],["p-hide-close","","p-title","Confirm vacation suggestion",3,"p-primary-action","p-secondary-action"],["p-label","Initial period",1,"po-md-4",3,"p-value"],["p-label","Final period",1,"po-md-4",3,"p-value"],["p-label","Quantity of days",1,"po-md-4",3,"p-value"],["p-disabled","","p-label","Reason","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"]],template:function(o,i){if(o&1){let d=V();t(0,"form",1),a(1,"po-divider",2),t(2,"div",3)(3,"po-datepicker-range",4),b("p-change",function(){return c(d),u(i.calculateQuantityOfVacationDays())}),n(),a(4,"po-number",5),n(),t(5,"div",3),a(6,"po-textarea",6),n(),t(7,"div",3)(8,"po-button",7),b("p-click",function(){return c(d),u(i.clean())}),n(),t(9,"po-button",8),b("p-click",function(){c(d);let r=U(11);return i.submitForm(),u(r.open())}),n()()(),t(10,"po-modal",9,0)(12,"div",3),a(13,"po-info",10),T(14,"date"),a(15,"po-info",11),T(16,"date"),a(17,"po-info",12),n(),t(18,"div",3)(19,"po-textarea",13),h("ngModelChange",function(r){return c(d),E(i.reason,r)||(i.reason=r),u(r)}),n()()()}o&2&&(s("formGroup",i.formVacationSuggestion),p(9),s("p-disabled",i.validateForm),p(),s("p-primary-action",i.submit)("p-secondary-action",i.cancel),p(3),s("p-value",q(14,8,i.datepickerRange==null?null:i.datepickerRange.start,"longDate","+0000")),p(2),s("p-value",q(16,12,i.datepickerRange==null?null:i.datepickerRange.end,"longDate","+0000")),p(2),s("p-value",i.quantityOfDays),p(2),f("ngModel",i.reason))},dependencies:[B,L,F,O,ae,oe,N,K,P,X,$,W,_,Y],encapsulation:2})}return l})();var We=l=>({"docs-sample-code-tabs":l}),Ce=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-vacations-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Range - Vacations Reactive Form"),n(),t(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-range-vacations-reactive-form/sample-po-datepicker-range-vacations-reactive-form.component.html"),n(),t(13,"pre",7),e(14,`<form [formGroup]="formVacationSuggestion">
  <po-divider class="po-md-9" p-label="Vacation suggestion"> </po-divider>

  <div class="po-row">
    <po-datepicker-range
      class="po-md-6"
      formControlName="datepickerRange"
      p-clean
      p-label="Select the period"
      p-required
      (p-change)="calculateQuantityOfVacationDays()"
    >
    </po-datepicker-range>

    <po-number class="po-md-3" formControlName="quantityOfDays" p-disabled p-label="Quantity of days" p-required>
    </po-number>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-9" formControlName="reason" p-label="Reason"> </po-textarea>
  </div>

  <div class="po-row">
    <po-button class="po-md-2 po-offset-md-5 po-offset-lg-5 po-offset-xl-5" p-label="Clean" (p-click)="clean()">
    </po-button>

    <po-button
      class="po-md-2"
      p-label="Submit"
      [p-disabled]="validateForm"
      (p-click)="submitForm(); modalVacationSuggestion.open()"
    >
    </po-button>
  </div>
</form>

<po-modal
  #modalVacationSuggestion
  p-hide-close
  p-title="Confirm vacation suggestion"
  [p-primary-action]="submit"
  [p-secondary-action]="cancel"
>
  <div class="po-row">
    <po-info class="po-md-4" p-label="Initial period" [p-value]="datepickerRange?.start | date: 'longDate' : '+0000'">
    </po-info>

    <po-info class="po-md-4" p-label="Final period" [p-value]="datepickerRange?.end | date: 'longDate' : '+0000'">
    </po-info>

    <po-info class="po-md-4" p-label="Quantity of days" [p-value]="quantityOfDays"> </po-info>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-12" [(ngModel)]="reason" p-disabled p-label="Reason" p-required> </po-textarea>
  </div>
</po-modal>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-range-vacations-reactive-form/sample-po-datepicker-range-vacations-reactive-form.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoDatepickerRange, PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-range-vacations-reactive-form',
  templateUrl: './sample-po-datepicker-range-vacations-reactive-form.component.html',
  standalone: false
})
export class SamplePoDatepickerRangeVacationsReactiveFormComponent implements OnInit {
  private poNotification = inject(PoNotificationService);
  private formBuilder = inject(UntypedFormBuilder);

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  datepickerRange: PoDatepickerRange;
  formVacationSuggestion: UntypedFormGroup;
  quantityOfDays: number;
  reason: string;

  cancel: PoModalAction = {
    action: () => {
      this.poModal.close();
    },
    label: 'Cancel'
  };

  submit: PoModalAction = {
    action: () => {
      this.poModal.close();
      this.formVacationSuggestion.reset();
      this.poNotification.success('Vacation suggestion submitted!');
    },
    label: 'Submit'
  };

  get validateForm() {
    return !(
      this.formVacationSuggestion.valid &&
      this.formVacationSuggestion.get('datepickerRange').value.start &&
      this.formVacationSuggestion.get('datepickerRange').value.end
    );
  }

  ngOnInit() {
    this.formVacationSuggestion = this.formBuilder.group({
      datepickerRange: [undefined, Validators.required],
      quantityOfDays: [undefined],
      reason: [undefined]
    });
  }

  calculateQuantityOfVacationDays() {
    const start = new Date(this.formVacationSuggestion.get('datepickerRange').value.start);
    const end = new Date(this.formVacationSuggestion.get('datepickerRange').value.end);

    const result = Math.floor(
      (Date.UTC(end.getFullYear(), end.getMonth(), end.getDate()) -
        Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())) /
        (1000 * 60 * 60 * 24)
    );

    this.formVacationSuggestion.get('quantityOfDays').setValue(result);
  }

  clean() {
    this.formVacationSuggestion.reset();
  }

  submitForm() {
    this.datepickerRange = this.formVacationSuggestion.get('datepickerRange').value;
    this.reason = this.formVacationSuggestion.get('reason').value;
    this.quantityOfDays = this.formVacationSuggestion.get('quantityOfDays').value;
  }
}
`),n()()()()(),t(21,"div",10),a(22,"sample-po-datepicker-range-vacations-reactive-form"),n(),a(23,"hr")),o&2&&(p(5),C("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",R(4,We,i.hideSampleCodeTabs)))},dependencies:[w,D,x,k,De],encapsulation:2})}return l})();var ye=(()=>{class l{static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-doc"]],standalone:!1,decls:965,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","accepted-formats"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Date"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["href","/documentation/po-datepicker-range#accepted-formats"]],template:function(o,i){o&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),n(),t(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),t(10,"code"),e(11,"FormsModule"),n(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),t(13,"code"),e(14,"ReactiveFormsModule"),n(),e(15,", ambos nativos do Angular."),n()()(),t(16,"h3",3),e(17,"Componente"),n(),t(18,"h4",4)(19,"code",5),e(20,"PoDatepickerRangeComponent"),n()(),t(21,"div",2)(22,"p"),e(23,"O "),t(24,"code"),e(25,"po-datepicker-range"),n(),e(26,` \xE9 um componente para sele\xE7\xE3o de um per\xEDodo entre duas datas, onde \xE9 poss\xEDvel informar apenas
a data inicial ou a data final.`),n(),t(27,"p"),e(28,"O componente "),t(29,"code"),e(30,"[(ngModel)]"),n(),e(31," do "),t(32,"code"),e(33,"po-datepicker-range"),n(),e(34,` trabalha com um objeto que implementa a interface
`),t(35,"code"),e(36,"PoDatepickerRange"),n(),e(37,", contendo as seguintes propriedades:"),n(),t(38,"pre")(39,"code"),e(40,`{ "start": '2017-11-28', "end": '2017-11-30' }
`),n()(),t(41,"p"),a(42,"a",6),e(43,`
Este componente pode receber os seguintes formatos de data:`),n(),t(44,"ul")(45,"li")(46,"p")(47,"strong"),e(48,"Data e hora combinados (E8601DZw): yyyy-mm-ddThh:mm:ss+|-hh:mm"),n()(),t(49,"pre")(50,"code"),e(51,`'2017-11-28T00:00:00-02:00';
`),n()()(),t(52,"li")(53,"p")(54,"strong"),e(55,"Data (E8601DAw.): yyyy-mm-dd"),n()(),t(56,"pre")(57,"code"),e(58,`'2017-11-28';
`),n()()(),t(59,"li")(60,"p")(61,"strong"),e(62,"JavaScript Date Object:"),n()(),t(63,"pre")(64,"code"),e(65,`new Date(2017, 10, 28);
`),n()()()(),t(66,"blockquote")(67,"p"),e(68,"O componente respeitar\xE1 o formato passado para o "),t(69,"em"),e(70,"model"),n(),e(71,` via codifica\xE7\xE3o. Por\xE9m, caso seja feita altera\xE7\xE3o em algum
dos valores de data em tela, o componente atribuir\xE1 o formato `),t(72,"strong"),e(73,"Data (E8601DAw.): yyyy-mm-dd"),n(),e(74," ao model."),n()(),t(75,"p"),e(76,"Importante:"),n(),t(77,"ul")(78,"li"),e(79,"Quando preenchidas a data inicial e final, a data inicial deve ser sempre menor ou igual a data final;"),n(),t(80,"li"),e(81,"Ao passar uma data inv\xE1lida via codifica\xE7\xE3o, o valor ser\xE1 mantido no "),t(82,"em"),e(83,"model"),n(),e(84," e o "),t(85,"code"),e(86,"input"),n(),e(87," da tela aparecer\xE1 vazio;"),n(),t(88,"li"),e(89,"Permite trabalhar com as duas datas separadamente atrav\xE9s das propriedades "),t(90,"code"),e(91,"p-start-date"),n(),e(92," e "),t(93,"code"),e(94,"p-end-date"),n(),e(95,` no lugar do
`),t(96,"code"),e(97,"[(ngModel)]"),n(),e(98,", no entanto sem a valida\xE7\xE3o do formul\xE1rio;"),n(),t(99,"li"),e(100,"Para a valida\xE7\xE3o do formul\xE1rio, utilize o "),t(101,"code"),e(102,"[(ngModel)]"),n(),e(103,"."),n()()(),t(104,"div",7)(105,"h4",8),e(106,"Seletor"),n(),t(107,"pre",9),e(108,`<po-datepicker-range
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-clean="boolean"
    p-disabled="boolean"
    p-end-date="string | Date"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-literals="PoDatepickerRangeLiterals"
    p-locale="string"
    p-max-date="string | Date"
    p-min-date="string | Date"
    p-no-autocomplete="boolean"
    (p-change)="EventEmitter"
    p-optional="boolean"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string"
    p-start-date="string | Date" >
</po-datepicker-range>
`),n()(),t(109,"h4",10),e(110,"Propriedades"),n(),t(111,"table",11)(112,"tr",12)(113,"th",13),e(114,"Nome"),n(),t(115,"th",13),e(116,"Tipo"),n(),t(117,"th",13),e(118,"Padr\xE3o"),n(),t(119,"th",13),e(120,"Descri\xE7\xE3o"),n()(),t(121,"tr",14)(122,"td",15)(123,"div",16)(124,"span",17),e(125," (p-additional-help)"),a(126,"br"),n()(),t(127,"div",18),e(128,"Deprecated"),n()(),t(129,"td",19)(130,"code",20),e(131,"EventEmitter"),n()(),t(132,"td",21),e(133,"-"),n(),t(134,"td",22)(135,"em")(136,"strong"),e(137,"(opcional)"),n()(),t(138,"p"),e(139,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),t(140,"code"),e(141,"p-help"),n(),e(142,"."),n(),t(143,"blockquote")(144,"p"),e(145,"Essa propriedade est\xE1 "),t(146,"strong"),e(147,"depreciada"),n(),e(148," e ser\xE1 removida na vers\xE3o "),t(149,"code"),e(150,"23.x.x"),n(),e(151,". Recomendamos utilizar a propriedade "),t(152,"code"),e(153,"p-helper"),n(),e(154," que oferece mais recursos e flexibilidade."),n()()()(),t(155,"tr",14)(156,"td",15)(157,"div",23)(158,"span",24),e(159," p-additional-help-tooltip"),a(160,"br"),n()(),t(161,"div",18),e(162,"Deprecated"),n()(),t(163,"td",19)(164,"code",25),e(165,"string"),n()(),t(166,"td",21),e(167,"-"),n(),t(168,"td",22)(169,"em")(170,"strong"),e(171,"(opcional)"),n()(),t(172,"p"),e(173,"Exibe um \xEDcone de ajuda adicional ao "),t(174,"code"),e(175,"p-help"),n(),e(176,`, com o texto desta propriedade no tooltip.
Se o evento `),t(177,"code"),e(178,"p-additional-help"),n(),e(179,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),t(180,"strong"),e(181,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),n()(),t(182,"blockquote")(183,"p"),e(184,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),n()(),t(185,"blockquote")(186,"p"),e(187,"Essa propriedade est\xE1 "),t(188,"strong"),e(189,"depreciada"),n(),e(190," e ser\xE1 removida na vers\xE3o "),t(191,"code"),e(192,"23.x.x"),n(),e(193,". Recomendamos utilizar a propriedade "),t(194,"code"),e(195,"p-helper"),n(),e(196," que oferece mais recursos e flexibilidade."),n()()()(),t(197,"tr",14)(198,"td",15)(199,"div",23)(200,"span",24),e(201," p-append-in-body"),a(202,"br"),n()()(),t(203,"td",19)(204,"code",26),e(205,"boolean"),n()(),t(206,"td",21)(207,"p")(208,"code"),e(209,"false"),n()()(),t(210,"td",22)(211,"em")(212,"strong"),e(213,"(opcional)"),n()(),t(214,"p"),e(215,"Define que o "),t(216,"code"),e(217,"calendar"),n(),e(218," e/ou tooltip ("),t(219,"code"),e(220,"p-additional-help-tooltip"),n(),e(221," e/ou "),t(222,"code"),e(223,"p-error-limit"),n(),e(224,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),n(),t(225,"blockquote")(226,"p"),e(227,"Quando utilizado com "),t(228,"code"),e(229,"p-additional-help-tooltip"),n(),e(230,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),n()()()(),t(231,"tr",14)(232,"td",15)(233,"div",23)(234,"span",24),e(235," p-auto-focus"),a(236,"br"),n()()(),t(237,"td",19)(238,"code",26),e(239,"boolean"),n()(),t(240,"td",21)(241,"p")(242,"code"),e(243,"false"),n()()(),t(244,"td",22)(245,"em")(246,"strong"),e(247,"(opcional)"),n()(),t(248,"p"),e(249,"Aplica foco no elemento ao ser iniciado."),n(),t(250,"blockquote")(251,"p"),e(252,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),n()()()(),t(253,"tr",14)(254,"td",15)(255,"div",23)(256,"span",24),e(257," p-clean"),a(258,"br"),n()()(),t(259,"td",19)(260,"code",26),e(261,"boolean"),n()(),t(262,"td",21)(263,"p")(264,"code"),e(265,"false"),n()()(),t(266,"td",22)(267,"em")(268,"strong"),e(269,"(opcional)"),n()(),t(270,"p"),e(271,"Habilita a\xE7\xE3o para limpar o campo."),n()()(),t(272,"tr",14)(273,"td",15)(274,"div",23)(275,"span",24),e(276," p-disabled"),a(277,"br"),n()()(),t(278,"td",19)(279,"code",26),e(280,"boolean"),n()(),t(281,"td",21)(282,"p")(283,"code"),e(284,"false"),n()()(),t(285,"td",22)(286,"em")(287,"strong"),e(288,"(opcional)"),n()(),t(289,"p"),e(290,"Desabilita o campo."),n()()(),t(291,"tr",14)(292,"td",15)(293,"div",23)(294,"span",24),e(295," p-end-date"),a(296,"br"),n()()(),t(297,"td",19)(298,"code",25),e(299,"string "),n(),t(300,"code",27),e(301," Date"),n()(),t(302,"td",21),e(303,"-"),n(),t(304,"td",22)(305,"em")(306,"strong"),e(307,"(opcional)"),n()(),t(308,"p"),e(309,"Data final."),n()()(),t(310,"tr",14)(311,"td",15)(312,"div",23)(313,"span",24),e(314," p-error-limit"),a(315,"br"),n()()(),t(316,"td",19)(317,"code",26),e(318,"boolean"),n()(),t(319,"td",21)(320,"p")(321,"code"),e(322,"false"),n()()(),t(323,"td",22)(324,"em")(325,"strong"),e(326,"(opcional)"),n()(),t(327,"p"),e(328,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),n(),t(329,"blockquote")(330,"p"),e(331,"Caso essa propriedade seja definida como "),t(332,"code"),e(333,"true"),n(),e(334,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),n()()()(),t(335,"tr",14)(336,"td",15)(337,"div",23)(338,"span",24),e(339," p-field-error-message"),a(340,"br"),n()()(),t(341,"td",19)(342,"code",25),e(343,"string"),n()(),t(344,"td",21),e(345,"-"),n(),t(346,"td",22)(347,"em")(348,"strong"),e(349,"(opcional)"),n()(),t(350,"p"),e(351,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),n(),t(352,"blockquote")(353,"p"),e(354,"Necess\xE1rio que a propriedade "),t(355,"code"),e(356,"p-required"),n(),e(357," esteja habilitada."),n()()()(),t(358,"tr",14)(359,"td",15)(360,"div",23)(361,"span",24),e(362," p-help"),a(363,"br"),n()()(),t(364,"td",19)(365,"code",25),e(366,"string"),n()(),t(367,"td",21),e(368,"-"),n(),t(369,"td",22)(370,"em")(371,"strong"),e(372,"(opcional)"),n()(),t(373,"p"),e(374,"Texto de apoio do campo."),n()()(),t(375,"tr",14)(376,"td",15)(377,"div",16)(378,"span",17),e(379," (p-keydown)"),a(380,"br"),n()()(),t(381,"td",19)(382,"code",20),e(383,"EventEmitter"),n()(),t(384,"td",21),e(385,"-"),n(),t(386,"td",22)(387,"em")(388,"strong"),e(389,"(opcional)"),n()(),t(390,"p"),e(391,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),t(392,"code"),e(393,"KeyboardEvent"),n(),e(394," com informa\xE7\xF5es sobre a tecla."),n()()(),t(395,"tr",14)(396,"td",15)(397,"div",23)(398,"span",24),e(399," p-label"),a(400,"br"),n()()(),t(401,"td",19)(402,"code",25),e(403,"string"),n()(),t(404,"td",21),e(405,"-"),n(),t(406,"td",22)(407,"em")(408,"strong"),e(409,"(opcional)"),n()(),t(410,"p"),e(411,"R\xF3tulo do campo."),n()()(),t(412,"tr",14)(413,"td",15)(414,"div",23)(415,"span",24),e(416," p-label-text-wrap"),a(417,"br"),n()()(),t(418,"td",19)(419,"code",26),e(420,"boolean"),n()(),t(421,"td",21)(422,"p")(423,"code"),e(424,"false"),n()()(),t(425,"td",22)(426,"em")(427,"strong"),e(428,"(opcional)"),n()(),t(429,"p"),e(430,"Habilita a quebra autom\xE1tica do texto da propriedade "),t(431,"code"),e(432,"p-label"),n(),e(433,". Quando "),t(434,"code"),e(435,"p-label-text-wrap"),n(),e(436,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),n()()(),t(437,"tr",14)(438,"td",15)(439,"div",23)(440,"span",24),e(441," p-literals"),a(442,"br"),n()()(),t(443,"td",19)(444,"code",28),e(445,"PoDatepickerRangeLiterals"),n()(),t(446,"td",21),e(447,"-"),n(),t(448,"td",22)(449,"em")(450,"strong"),e(451,"(opcional)"),n()(),t(452,"p"),e(453,"Objeto com as literais usadas no "),t(454,"code"),e(455,"po-datepicker-range"),n(),e(456,"."),n(),t(457,"p"),e(458,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),n(),t(459,"pre")(460,"code"),e(461,`const customLiterals: PoDatepickerRangeLiterals = {
  invalidFormat: 'Date in inconsistent format',
  startDateGreaterThanEndDate: 'End date less than start date'
};
`),n()(),t(462,"p"),e(463,"Ou passando apenas as literais que deseja customizar:"),n(),t(464,"pre")(465,"code"),e(466,`const customLiterals: PoDatepickerRangeLiterals = {
  invalidFormat: 'Date in inconsistent format'
};
`),n()(),t(467,"p"),e(468,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),n(),t(469,"pre")(470,"code"),e(471,`<po-datepicker-range
  [p-literals]="customLiterals">
</po-datepicker-range>
`),n()(),t(472,"blockquote")(473,"p"),e(474,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),t(475,"a",29)(476,"code"),e(477,"PoI18nService"),n()(),e(478," ou do browser."),n()()()(),t(479,"tr",14)(480,"td",15)(481,"div",23)(482,"span",24),e(483," p-locale"),a(484,"br"),n()()(),t(485,"td",19)(486,"code",25),e(487,"string"),n()(),t(488,"td",21),e(489,"-"),n(),t(490,"td",22)(491,"em")(492,"strong"),e(493,"(opcional)"),n()(),t(494,"p"),e(495,"Idioma que o calend\xE1rio utilizar\xE1 para exibir as datas."),n(),t(496,"blockquote")(497,"p"),e(498,"O locale padr\xE3o ser\xE1 recuperado com base no "),t(499,"a",29)(500,"code"),e(501,"PoI18nService"),n()(),e(502," ou "),t(503,"em"),e(504,"browser"),n(),e(505,"."),n()()()(),t(506,"tr",14)(507,"td",15)(508,"div",23)(509,"span",24),e(510," p-max-date"),a(511,"br"),n()()(),t(512,"td",19)(513,"code",25),e(514,"string "),n(),t(515,"code",27),e(516," Date"),n()(),t(517,"td",21),e(518,"-"),n(),t(519,"td",22)(520,"em")(521,"strong"),e(522,"(opcional)"),n()(),t(523,"p"),e(524,"Define uma data m\xE1xima para o "),t(525,"code"),e(526,"po-datepicker-range"),n(),e(527,"."),n()()(),t(528,"tr",14)(529,"td",15)(530,"div",23)(531,"span",24),e(532," p-min-date"),a(533,"br"),n()()(),t(534,"td",19)(535,"code",25),e(536,"string "),n(),t(537,"code",27),e(538," Date"),n()(),t(539,"td",21),e(540,"-"),n(),t(541,"td",22)(542,"em")(543,"strong"),e(544,"(opcional)"),n()(),t(545,"p"),e(546,"Define uma data m\xEDnima para o "),t(547,"code"),e(548,"po-datepicker-range"),n(),e(549,"."),n()()(),t(550,"tr",14)(551,"td",15)(552,"div",23)(553,"span",24),e(554," p-no-autocomplete"),a(555,"br"),n()()(),t(556,"td",19)(557,"code",26),e(558,"boolean"),n()(),t(559,"td",21)(560,"p")(561,"code"),e(562,"false"),n()()(),t(563,"td",22)(564,"em")(565,"strong"),e(566,"(opcional)"),n()(),t(567,"p"),e(568,"Define a propriedade nativa "),t(569,"code"),e(570,"autocomplete"),n(),e(571," do campo como "),t(572,"code"),e(573,"off"),n(),e(574,"."),n()()(),t(575,"tr",14)(576,"td",15)(577,"div",16)(578,"span",17),e(579," (p-change)"),a(580,"br"),n()()(),t(581,"td",19)(582,"code",20),e(583,"EventEmitter"),n()(),t(584,"td",21),e(585,"-"),n(),t(586,"td",22)(587,"em")(588,"strong"),e(589,"(opcional)"),n()(),t(590,"p"),e(591,"Evento disparado ao alterar valor do campo."),n()()(),t(592,"tr",14)(593,"td",15)(594,"div",23)(595,"span",24),e(596," p-optional"),a(597,"br"),n()()(),t(598,"td",19)(599,"code",26),e(600,"boolean"),n()(),t(601,"td",21)(602,"p")(603,"code"),e(604,"false"),n()()(),t(605,"td",22)(606,"em")(607,"strong"),e(608,"(opcional)"),n()(),t(609,"p"),e(610,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),n(),t(611,"blockquote")(612,"p"),e(613,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),n()(),t(614,"ul")(615,"li"),e(616,"O campo conter "),t(617,"code"),e(618,"p-required"),n(),e(619,";"),n(),t(620,"li"),e(621,"N\xE3o possuir "),t(622,"code"),e(623,"p-help"),n(),e(624," e/ou "),t(625,"code"),e(626,"p-label"),n(),e(627,"."),n()()()(),t(628,"tr",14)(629,"td",15)(630,"div",23)(631,"span",24),e(632," p-helper"),a(633,"br"),n()()(),t(634,"td",19)(635,"code",30),e(636,"PoHelperOptions "),n(),t(637,"code",25),e(638," string"),n()(),t(639,"td",21),e(640,"-"),n(),t(641,"td",22)(642,"em")(643,"strong"),e(644,"(opcional)"),n()(),t(645,"p"),e(646,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),n(),t(647,"blockquote")(648,"p"),e(649,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),t(650,"code"),e(651,"p-additional-help-tooltip"),n(),e(652," e "),t(653,"code"),e(654,"p-additional-help"),n(),e(655,") ser\xE1 ignorado."),n()()()(),t(656,"tr",14)(657,"td",15)(658,"div",23)(659,"span",24),e(660," p-readonly"),a(661,"br"),n()()(),t(662,"td",19)(663,"code",26),e(664,"boolean"),n()(),t(665,"td",21)(666,"p")(667,"code"),e(668,"false"),n()()(),t(669,"td",22)(670,"em")(671,"strong"),e(672,"(opcional)"),n()(),t(673,"p"),e(674,"Indica que o campo ser\xE1 somente leitura."),n()()(),t(675,"tr",14)(676,"td",15)(677,"div",23)(678,"span",24),e(679," p-required"),a(680,"br"),n()()(),t(681,"td",19)(682,"code",26),e(683,"boolean"),n()(),t(684,"td",21)(685,"p")(686,"code"),e(687,"false"),n()()(),t(688,"td",22)(689,"em")(690,"strong"),e(691,"(opcional)"),n()(),t(692,"p"),e(693,"Define que o campo ser\xE1 obrigat\xF3rio."),n()()(),t(694,"tr",14)(695,"td",15)(696,"div",23)(697,"span",24),e(698," p-show-required"),a(699,"br"),n()()(),t(700,"td",19)(701,"code",26),e(702,"boolean"),n()(),t(703,"td",21),e(704,"-"),n(),t(705,"td",22)(706,"p"),e(707,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),n(),t(708,"blockquote")(709,"p"),e(710,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),n()(),t(711,"ul")(712,"li"),e(713,"N\xE3o possuir "),t(714,"code"),e(715,"p-help"),n(),e(716," e/ou "),t(717,"code"),e(718,"p-label"),n(),e(719,"."),n()()()(),t(720,"tr",14)(721,"td",15)(722,"div",23)(723,"span",24),e(724," p-size"),a(725,"br"),n()()(),t(726,"td",19)(727,"code",25),e(728,"string"),n()(),t(729,"td",21)(730,"p")(731,"code"),e(732,"medium"),n()()(),t(733,"td",22)(734,"em")(735,"strong"),e(736,"(opcional)"),n()(),t(737,"p"),e(738,"Define o tamanho do componente:"),n(),t(739,"ul")(740,"li")(741,"code"),e(742,"small"),n(),e(743,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),n(),t(744,"li")(745,"code"),e(746,"medium"),n(),e(747,": altura do input como 44px."),n()(),t(748,"blockquote")(749,"p"),e(750,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(751,"code"),e(752,"medium"),n(),e(753,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(754,"a",31),e(755,"po-theme"),n(),e(756,"."),n()()()(),t(757,"tr",14)(758,"td",15)(759,"div",23)(760,"span",24),e(761," p-start-date"),a(762,"br"),n()()(),t(763,"td",19)(764,"code",25),e(765,"string "),n(),t(766,"code",27),e(767," Date"),n()(),t(768,"td",21),e(769,"-"),n(),t(770,"td",22)(771,"em")(772,"strong"),e(773,"(opcional)"),n()(),t(774,"p"),e(775,"Data inicial."),n()()()(),t(776,"h3",10),e(777,"M\xE9todos"),n(),t(778,"table",32)(779,"tr",14)(780,"th",33)(781,"div",23)(782,"h4")(783,"span",24),e(784," focus "),n()()()()(),t(785,"tr",22)(786,"td",22)(787,"p"),e(788,"Fun\xE7\xE3o que atribui foco ao componente."),n(),t(789,"p"),e(790,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),n(),t(791,"pre")(792,"code"),e(793,`import { PoDatepickerRangeComponent } from '@po-ui/ng-components';

...

@ViewChild(PoDatepickerRangeComponent, { static: true }) datepickerRange: PoDatepickerRangeComponent;

focusDatepickerRange() {
  this.datepickerRange.focus();
}
`),n()()()()(),a(794,"br"),t(795,"table",32)(796,"tr",14)(797,"th",33)(798,"div",23)(799,"h4")(800,"span",24),e(801," showAdditionalHelp "),n()()()()(),t(802,"tr",22)(803,"td",22)(804,"p"),e(805,"M\xE9todo que exibe "),t(806,"code"),e(807,"p-additionalHelpTooltip"),n(),e(808," ou executa a a\xE7\xE3o definida em "),t(809,"code"),e(810,"p-additionalHelp"),n(),e(811,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),t(812,"code"),e(813,"p-keydown"),n(),e(814,"."),n(),t(815,"blockquote")(816,"p"),e(817,"Exibe ou oculta o conte\xFAdo do componente "),t(818,"code"),e(819,"po-helper"),n(),e(820," quando o componente estiver com foco e com label vis\xEDvel."),n()(),t(821,"pre")(822,"code"),e(823,`<po-datepicker-range
 #datepickerRange
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, datepickerRange)"
></po-datepicker-range>
`),n()(),t(824,"pre")(825,"code"),e(826,`// Exemplo com p-label e p-helper
<po-datepicker-range
 #datepickerRange
 ...
 p-label="Label do datepickerRange
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datepickerRange)"
></po-datepicker-range>
`),n()(),t(827,"pre")(828,"code"),e(829,`...
onKeyDown(event: KeyboardEvent, inp: PoDatepickerRangeComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),n()()()()(),a(830,"br"),t(831,"h3"),e(832,"Interfaces"),n(),t(833,"h4",34)(834,"code",5),e(835,"PoDatepickerRangeLiterals"),n()(),t(836,"div",2)(837,"p"),e(838,"Interface para defini\xE7\xE3o das literais usadas no "),t(839,"code"),e(840,"po-datepicker-range"),n(),e(841,"."),n()(),t(842,"h4",10),e(843,"Propriedades"),n(),t(844,"table",11)(845,"tr",12)(846,"th",13),e(847,"Nome"),n(),t(848,"th",13),e(849,"Tipo"),n(),t(850,"th",13),e(851,"Descri\xE7\xE3o"),n()(),t(852,"tr",14)(853,"td",15)(854,"div",23)(855,"span",24),e(856," dateOutOfPeriod"),a(857,"br"),n()()(),t(858,"td",19)(859,"code",25),e(860,"string"),n()(),t(861,"td",22)(862,"em")(863,"strong"),e(864,"(opcional)"),n()(),t(865,"p"),e(866,"Data fora do per\xEDodo."),n()()(),t(867,"tr",14)(868,"td",15)(869,"div",23)(870,"span",24),e(871," invalidDate"),a(872,"br"),n()()(),t(873,"td",19)(874,"code",25),e(875,"string"),n()(),t(876,"td",22)(877,"em")(878,"strong"),e(879,"(opcional)"),n()(),t(880,"p"),e(881,"Data inv\xE1lida."),n()()(),t(882,"tr",14)(883,"td",15)(884,"div",23)(885,"span",24),e(886," invalidFormat"),a(887,"br"),n()()(),t(888,"td",19)(889,"code",25),e(890,"string"),n()(),t(891,"td",22)(892,"em")(893,"strong"),e(894,"(opcional)"),n()(),t(895,"p"),e(896,"Data em formato inv\xE1lido."),n()()(),t(897,"tr",14)(898,"td",15)(899,"div",23)(900,"span",24),e(901," startDateGreaterThanEndDate"),a(902,"br"),n()()(),t(903,"td",19)(904,"code",25),e(905,"string"),n()(),t(906,"td",22)(907,"em")(908,"strong"),e(909,"(opcional)"),n()(),t(910,"p"),e(911,"Data inicial maior que data final."),n()()()(),t(912,"h4",34)(913,"code",5),e(914,"PoDatepickerRange"),n()(),t(915,"div",2)(916,"p"),e(917,"Interface para defini\xE7\xE3o do objeto com a data inicial e final usadas no "),t(918,"code"),e(919,"po-datepicker-range"),n(),e(920,"."),n(),t(921,"blockquote")(922,"p"),e(923,`Os formatos de data permitidos seguem os padr\xF5es definidos na
`),t(924,"a",35),e(925,"descri\xE7\xE3o do componente"),n(),e(926,"."),n()()(),t(927,"h4",10),e(928,"Propriedades"),n(),t(929,"table",11)(930,"tr",12)(931,"th",13),e(932,"Nome"),n(),t(933,"th",13),e(934,"Tipo"),n(),t(935,"th",13),e(936,"Descri\xE7\xE3o"),n()(),t(937,"tr",14)(938,"td",15)(939,"div",23)(940,"span",24),e(941," end"),a(942,"br"),n()()(),t(943,"td",19)(944,"code",25),e(945,"string "),n(),t(946,"code",27),e(947," Date"),n()(),t(948,"td",22)(949,"p"),e(950,"Data final"),n()()(),t(951,"tr",14)(952,"td",15)(953,"div",23)(954,"span",24),e(955," start"),a(956,"br"),n()()(),t(957,"td",19)(958,"code",25),e(959,"string "),n(),t(960,"code",27),e(961," Date"),n()(),t(962,"td",22)(963,"p"),e(964,"Data inicial"),n()()()()())},dependencies:[D],encapsulation:2})}return l})();var Re=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,o){this.route=m,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let o=m.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||l)(te(re),te(pe))};static \u0275cmp=S({type:l,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Datepicker Range",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),b("p-click",function(){return i.changeTab("doc")}),a(3,"sample-po-datepicker-range-doc"),n(),t(4,"po-tab",3),b("p-click",function(){return i.changeTab("web")}),a(5,"sample-po-datepicker-range-basic-view")(6,"sample-po-datepicker-range-labs-view")(7,"sample-po-datepicker-range-vacations-view")(8,"sample-po-datepicker-range-vacations-reactive-form-view"),n()()()),o&2&&(s("p-actions",i.actions),p(2),s("p-active",i.activeTab==="doc"),p(2),s("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[ge,x,k,fe,ve,ke,Ce,ye],encapsulation:2})}return l})();var ze=[{path:"",component:Re}],we=(()=>{class l{static \u0275fac=function(o){return new(o||l)};static \u0275mod=G({type:l});static \u0275inj=Q({imports:[ne.forChild(ze),ne]})}return l})();var yt=(()=>{class l{static \u0275fac=function(o){return new(o||l)};static \u0275mod=G({type:l});static \u0275inj=Q({imports:[be,we]})}return l})();export{yt as DocPoDatepickerRangeModule};
