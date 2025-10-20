import{o as C,p as de}from"./chunk-SOHZXOPY.js";import{Fa as O,O as ae,Q as le,Qa as j,R as K,S as _,Va as re,_ as H,lb as pe,sa as R,v as B,xb as v,yb as y}from"./chunk-FAXZO3CR.js";import{$a as X,Ca as k,Cc as T,Eb as P,Fc as q,Gc as A,Hc as z,Ic as I,Jc as V,Ka as n,La as t,M as L,Ma as a,Mc as ee,Nc as te,P as F,Qa as W,Ra as h,Rc as ne,T as c,U as u,Wc as ie,Yc as oe,Za as J,_a as Y,_c as Q,ab as $,bb as e,db as D,fb as f,gb as b,hb as g,ia as p,ja as U,nb as w,pa as S,qa as N,za as s}from"./chunk-TTO7B3JZ.js";var me=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","datepicker","p-label","PO Datepicker"]],template:function(r,i){r&1&&a(0,"po-datepicker",0)},dependencies:[_],encapsulation:2})}return l})();var De=l=>({"docs-sample-code-tabs":l}),se=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Basic"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-basic/sample-po-datepicker-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-datepicker name="datepicker" p-label="PO Datepicker"> </po-datepicker>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-basic/sample-po-datepicker-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-basic',
  templateUrl: './sample-po-datepicker-basic.component.html',
  standalone: false
})
export class SamplePoDatepickerBasicComponent {}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-datepicker-basic"),t(),a(23,"hr")),r&2&&(p(5),k("po-icon "+i.sampleCodeButtonIcon),p(),D(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",w(4,De,i.hideSampleCodeTabs)))},dependencies:[P,C,v,y,me],encapsulation:2})}return l})();var ue=(()=>{class l{additionalHelpTooltip;datepicker;maxDate;errorPattern;event;format;help;isoFormat;label;locale;placeholder;properties;minDate;size;isoFormatOptions=[{label:"Basic",value:K.Basic},{label:"Extended",value:K.Extended}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];formatOptions=[{label:"dd/mm/yyyy",value:"dd/mm/yyyy"},{label:"mm/dd/yyyy",value:"mm/dd/yyyy"},{label:"yyyy/mm/dd",value:"yyyy/mm/dd"}];localeOptions=[{label:"pt",value:"pt"},{label:"en",value:"en"},{label:"es",value:"es"},{label:"ru",value:"ru"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.additionalHelpTooltip="",this.datepicker=void 0,this.maxDate=void 0,this.event=void 0,this.errorPattern=void 0,this.format=void 0,this.help=void 0,this.isoFormat=void 0,this.label=void 0,this.locale=void 0,this.placeholder=void 0,this.properties=[],this.minDate=void 0,this.size="medium"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-labs"]],standalone:!1,decls:22,vars:45,consts:[["f","ngForm"],["name","datepicker",1,"po-sm-12",3,"ngModelChange","p-blur","p-change","p-keydown","ngModel","p-additional-help-tooltip","p-clean","p-disabled","p-max-date","p-error-pattern","p-format","p-help","p-iso-format","p-label","p-locale","p-min-date","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-label-text-wrap","p-size","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minDate","p-clean","","p-label","Min date",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date","p-format"],["name","maxDate","p-clean","","p-label","Max date",1,"po-md-6",3,"ngModelChange","ngModel","p-format","p-min-date"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locale","p-columns","4","p-label","Locale",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","format","p-columns","4","p-label","Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","isoFormat","p-columns","4","p-label","Iso Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let m=W();n(0,"po-datepicker",1),g("ngModelChange",function(o){return c(m),b(i.datepicker,o)||(i.datepicker=o),u(o)}),h("p-blur",function(){return c(m),u(i.changeEvent("p-blur"))})("p-change",function(){return c(m),u(i.changeEvent("p-change"))})("p-keydown",function(){return c(m),u(i.changeEvent("p-keydown"))}),t(),a(1,"hr"),n(2,"div",2),a(3,"po-info",3)(4,"po-info",4),t(),a(5,"hr"),n(6,"form",null,0)(8,"po-input",5),g("ngModelChange",function(o){return c(m),b(i.label,o)||(i.label=o),u(o)}),t(),n(9,"po-input",6),g("ngModelChange",function(o){return c(m),b(i.help,o)||(i.help=o),u(o)}),t(),n(10,"po-input",7),g("ngModelChange",function(o){return c(m),b(i.additionalHelpTooltip,o)||(i.additionalHelpTooltip=o),u(o)}),t(),n(11,"po-input",8),g("ngModelChange",function(o){return c(m),b(i.placeholder,o)||(i.placeholder=o),u(o)}),t(),n(12,"po-input",9),g("ngModelChange",function(o){return c(m),b(i.errorPattern,o)||(i.errorPattern=o),u(o)}),t(),n(13,"po-datepicker",10),g("ngModelChange",function(o){return c(m),b(i.minDate,o)||(i.minDate=o),u(o)}),t(),n(14,"po-datepicker",11),g("ngModelChange",function(o){return c(m),b(i.maxDate,o)||(i.maxDate=o),u(o)}),t(),n(15,"po-checkbox-group",12),g("ngModelChange",function(o){return c(m),b(i.properties,o)||(i.properties=o),u(o)}),t(),n(16,"po-radio-group",13),g("ngModelChange",function(o){return c(m),b(i.locale,o)||(i.locale=o),u(o)}),t(),n(17,"po-radio-group",14),g("ngModelChange",function(o){return c(m),b(i.format,o)||(i.format=o),u(o)}),t(),n(18,"po-radio-group",15),g("ngModelChange",function(o){return c(m),b(i.isoFormat,o)||(i.isoFormat=o),u(o)}),t(),n(19,"po-radio-group",16),g("ngModelChange",function(o){return c(m),b(i.size,o)||(i.size=o),u(o)}),t(),n(20,"div",2)(21,"po-button",17),h("p-click",function(){return c(m),u(i.restore())}),t()()()}r&2&&(f("ngModel",i.datepicker),s("p-additional-help-tooltip",i.additionalHelpTooltip)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-max-date",i.maxDate)("p-error-pattern",i.errorPattern)("p-format",i.format)("p-help",i.help)("p-iso-format",i.isoFormat)("p-label",i.label)("p-locale",i.locale)("p-min-date",i.minDate)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),p(3),s("p-value",i.datepicker),p(),s("p-value",i.event),p(4),f("ngModel",i.label),p(),f("ngModel",i.help),p(),f("ngModel",i.additionalHelpTooltip),p(),f("ngModel",i.placeholder),p(),f("ngModel",i.errorPattern),p(),f("ngModel",i.minDate),s("p-max-date",i.maxDate)("p-format",i.format),p(),f("ngModel",i.maxDate),s("p-format",i.format)("p-min-date",i.minDate),p(),f("ngModel",i.properties),s("p-options",i.propertiesOptions),p(),f("ngModel",i.locale),s("p-options",i.localeOptions),p(),f("ngModel",i.format),s("p-options",i.formatOptions),p(),f("ngModel",i.isoFormat),s("p-options",i.isoFormatOptions),p(),f("ngModel",i.size),s("p-options",i.sizeOptions))},dependencies:[V,q,A,I,z,B,ae,le,_,O,re],encapsulation:2})}return l})();var _e=l=>({"docs-sample-code-tabs":l}),Ee=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Labs"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-labs/sample-po-datepicker-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-datepicker
  class="po-sm-12"
  name="datepicker"
  [(ngModel)]="datepicker"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-max-date]="maxDate"
  [p-error-pattern]="errorPattern"
  [p-format]="format"
  [p-help]="help"
  [p-iso-format]="isoFormat"
  [p-label]="label"
  [p-locale]="locale"
  [p-min-date]="minDate"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-datepicker>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="datepicker"> </po-info>

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

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-datepicker
    class="po-md-6"
    name="minDate"
    [(ngModel)]="minDate"
    p-clean
    p-label="Min date"
    [p-max-date]="maxDate"
    [p-format]="format"
  >
  </po-datepicker>

  <po-datepicker
    class="po-md-6"
    name="maxDate"
    [(ngModel)]="maxDate"
    p-clean
    p-label="Max date"
    [p-format]="format"
    [p-min-date]="minDate"
  >
  </po-datepicker>

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
    name="locale"
    [(ngModel)]="locale"
    p-columns="4"
    p-label="Locale"
    [p-options]="localeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-12"
    name="format"
    [(ngModel)]="format"
    p-columns="4"
    p-label="Format"
    [p-options]="formatOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-12"
    name="isoFormat"
    [(ngModel)]="isoFormat"
    p-columns="4"
    p-label="Iso Format"
    [p-options]="isoFormatOptions"
  >
  </po-radio-group>

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
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-labs/sample-po-datepicker-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoDatepickerIsoFormat, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-labs',
  templateUrl: './sample-po-datepicker-labs.component.html',
  standalone: false
})
export class SamplePoDatepickerLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  datepicker: string | Date;
  maxDate: string | Date;
  errorPattern: string;
  event: string;
  format: string;
  help: string;
  isoFormat: PoDatepickerIsoFormat;
  label: string;
  locale: string;
  placeholder: string;
  properties: Array<string>;
  minDate: string | Date;
  size: string;

  public readonly isoFormatOptions: Array<PoRadioGroupOption> = [
    { label: 'Basic', value: PoDatepickerIsoFormat.Basic },
    { label: 'Extended', value: PoDatepickerIsoFormat.Extended }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' }
  ];

  public readonly formatOptions: Array<PoRadioGroupOption> = [
    { label: 'dd/mm/yyyy', value: 'dd/mm/yyyy' },
    { label: 'mm/dd/yyyy', value: 'mm/dd/yyyy' },
    { label: 'yyyy/mm/dd', value: 'yyyy/mm/dd' }
  ];

  public readonly localeOptions: Array<PoRadioGroupOption> = [
    { label: 'pt', value: 'pt' },
    { label: 'en', value: 'en' },
    { label: 'es', value: 'es' },
    { label: 'ru', value: 'ru' }
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

  restore() {
    this.additionalHelpTooltip = '';
    this.datepicker = undefined;
    this.maxDate = undefined;
    this.event = undefined;
    this.errorPattern = undefined;
    this.format = undefined;
    this.help = undefined;
    this.isoFormat = undefined;
    this.label = undefined;
    this.locale = undefined;
    this.placeholder = undefined;
    this.properties = [];
    this.minDate = undefined;
    this.size = 'medium';
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-datepicker-labs"),t(),a(23,"hr")),r&2&&(p(5),k("po-icon "+i.sampleCodeButtonIcon),p(),D(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",w(4,_e,i.hideSampleCodeTabs)))},dependencies:[P,C,v,y,ue],encapsulation:2})}return l})();var Fe=["formAirfare"],fe=(()=>{class l{poDialog=F(H);poNotification=F(R);formAirfare;accompany=0;destination;endDate=new Date;origin;startDate=new Date;ticketClass="Economy";accompanyNumber=[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"}];ticketClassOptions=[{value:"Economy",label:"Economy"},{value:"Premium",label:"Premium"},{value:"Business",label:"Business"},{value:"First",label:"First"}];apply(){let d=`Would you like to confirm the ticket from ${this.origin} to ${this.destination} with departure date at
    ${this.getFormatedDate(this.startDate)} and return at ${this.getFormatedDate(this.endDate)} with ${this.accompany} companions in
    ${this.ticketClass} class?`;this.poDialog.confirm({title:"Confirm",message:d,confirm:()=>{this.poNotification.success("Booking Confirmed"),this.formAirfare.reset({accompany:0,endDate:new Date,startDate:new Date,ticketClass:"Economy"})},cancel:()=>{this.poNotification.warning("Booking Canceled")}})}getFormatedDate(d){return d&&d.slice(0,10)}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-airfare"]],viewQuery:function(r,i){if(r&1&&J(Fe,7),r&2){let m;Y(m=X())&&(i.formAirfare=m.first)}},standalone:!1,decls:13,vars:11,consts:[["formAirfare","ngForm"],[1,"po-row"],["name","startDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date start","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date"],["name","endDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date end","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","origin","p-placeholder","Flight origin","p-label","Origin","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","destination","p-label","Destination","p-placeholder","Flight destination","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["clas","po-row"],["name","ticketClass","p-label","Class","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","accompany","p-label","Accompany","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","applyButton","p-label","Apply",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let m=W();n(0,"form",null,0)(2,"div",1)(3,"po-datepicker",2),g("ngModelChange",function(o){return c(m),b(i.startDate,o)||(i.startDate=o),u(o)}),t(),n(4,"po-datepicker",3),g("ngModelChange",function(o){return c(m),b(i.endDate,o)||(i.endDate=o),u(o)}),t()(),n(5,"div",1)(6,"po-input",4),g("ngModelChange",function(o){return c(m),b(i.origin,o)||(i.origin=o),u(o)}),t(),n(7,"po-input",5),g("ngModelChange",function(o){return c(m),b(i.destination,o)||(i.destination=o),u(o)}),t()(),n(8,"div",6)(9,"po-select",7),g("ngModelChange",function(o){return c(m),b(i.ticketClass,o)||(i.ticketClass=o),u(o)}),t(),n(10,"po-select",8),g("ngModelChange",function(o){return c(m),b(i.accompany,o)||(i.accompany=o),u(o)}),t()(),n(11,"div",1)(12,"po-button",9),h("p-click",function(){return c(m),u(i.apply())}),t()()()}if(r&2){let m=$(1);p(3),f("ngModel",i.startDate),s("p-max-date",i.endDate),p(),f("ngModel",i.endDate),s("p-min-date",i.startDate),p(2),f("ngModel",i.origin),p(),f("ngModel",i.destination),p(2),f("ngModel",i.ticketClass),s("p-options",i.ticketClassOptions),p(),f("ngModel",i.accompany),s("p-options",i.accompanyNumber),p(2),s("p-disabled",m.invalid)}},dependencies:[V,q,A,I,z,B,_,O,j],encapsulation:2})}return l})();var qe=l=>({"docs-sample-code-tabs":l}),be=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-airfare-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker - Airfare"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.html"),t(),n(13,"pre",7),e(14,`<form #formAirfare="ngForm">
  <div class="po-row">
    <po-datepicker
      class="po-md-6"
      name="startDate"
      [(ngModel)]="startDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date start"
      p-required
      [p-max-date]="endDate"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="endDate"
      [(ngModel)]="endDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date end"
      p-required
      [p-min-date]="startDate"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="origin"
      [(ngModel)]="origin"
      p-placeholder="Flight origin"
      p-label="Origin"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="destination"
      [(ngModel)]="destination"
      p-label="Destination"
      p-placeholder="Flight destination"
      p-required
    >
    </po-input>
  </div>

  <div clas="po-row">
    <po-select
      class="po-md-6"
      name="ticketClass"
      [(ngModel)]="ticketClass"
      p-label="Class"
      p-required
      [p-options]="ticketClassOptions"
    >
    </po-select>

    <po-select
      class="po-md-6"
      name="accompany"
      [(ngModel)]="accompany"
      p-label="Accompany"
      p-required
      [p-options]="accompanyNumber"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3 po-offset-md-9 po-offset-lg-9"
      name="applyButton"
      p-label="Apply"
      [p-disabled]="formAirfare.invalid"
      (p-click)="apply()"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, ViewChild, inject } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoDialogService, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-airfare',
  templateUrl: './sample-po-datepicker-airfare.component.html',
  standalone: false
})
export class SamplePoDatepickerAirfareComponent {
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  @ViewChild('formAirfare', { static: true }) formAirfare: UntypedFormControl;

  accompany: number = 0;
  destination: string;
  endDate: string = <any>new Date();
  origin: string;
  startDate: string = <any>new Date();
  ticketClass: string = 'Economy';

  public readonly accompanyNumber: Array<PoSelectOption> = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' }
  ];

  public readonly ticketClassOptions: Array<PoSelectOption> = [
    { value: 'Economy', label: 'Economy' },
    { value: 'Premium', label: 'Premium' },
    { value: 'Business', label: 'Business' },
    { value: 'First', label: 'First' }
  ];

  apply() {
    const message = \`Would you like to confirm the ticket from \${this.origin} to \${
      this.destination
    } with departure date at
    \${this.getFormatedDate(this.startDate)} and return at \${this.getFormatedDate(this.endDate)} with \${
      this.accompany
    } companions in
    \${this.ticketClass} class?\`;

    this.poDialog.confirm({
      title: 'Confirm',
      message,
      confirm: () => {
        this.poNotification.success('Booking Confirmed');

        this.formAirfare.reset({
          accompany: 0,
          endDate: new Date(),
          startDate: new Date(),
          ticketClass: 'Economy'
        });
      },
      cancel: () => {
        this.poNotification.warning('Booking Canceled');
      }
    });
  }

  private getFormatedDate(date: string) {
    return date && date.slice(0, 10);
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-datepicker-airfare"),t(),a(23,"hr")),r&2&&(p(5),k("po-icon "+i.sampleCodeButtonIcon),p(),D(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",w(4,qe,i.hideSampleCodeTabs)))},dependencies:[P,C,v,y,fe],encapsulation:2})}return l})();var ge=(()=>{class l{formBuilder=F(ne);poDialog=F(H);poNotification=F(R);formAirfare;accompanyNumber=[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"}];ticketClassOptions=[{value:"Economy",label:"Economy"},{value:"Premium",label:"Premium"},{value:"Business",label:"Business"},{value:"First",label:"First"}];ngOnInit(){this.formAirfare=this.formBuilder.group({accompany:[0,T.required],destination:["",T.required],endDate:[new Date,T.required],origin:["",T.required],startDate:[new Date,T.required],ticketClass:["Economy",T.required]})}apply(d){let{accompany:r,destination:i,endDate:m,origin:E,ticketClass:o,startDate:ye}=d.value,Ce=`Would you like to confirm the ticket from ${E} to ${i} with departure date at
    ${this.getFormatedDate(ye)} and return at ${this.getFormatedDate(m)} with ${r} companions in
    ${o} class?`;this.poDialog.confirm({title:"Confirm",message:Ce,confirm:()=>{this.poNotification.success("Booking Confirmed"),this.formAirfare.reset({accompany:0,endDate:new Date,startDate:new Date,ticketClass:"Economy"})},cancel:()=>{this.poNotification.warning("Booking Canceled")}})}getFormatedDate(d){return d&&d.slice(0,10)}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-airfare-reactive-form"]],standalone:!1,decls:12,vars:6,consts:[[3,"formGroup"],[1,"po-row"],["formControlName","startDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date start",1,"po-md-6",3,"p-max-date"],["formControlName","endDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date end",1,"po-md-6",3,"p-min-date"],["formControlName","origin","p-placeholder","Flight origin","p-label","Origin",1,"po-md-6"],["formControlName","destination","p-label","Destination","p-placeholder","Flight destination",1,"po-md-6"],["clas","po-row"],["formControlName","ticketClass","p-label","Class",1,"po-md-6",3,"p-options"],["formControlName","accompany","p-label","Accompany",1,"po-md-6",3,"p-options"],["name","applyButton","p-label","Apply",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(r,i){r&1&&(n(0,"form",0)(1,"div",1),a(2,"po-datepicker",2)(3,"po-datepicker",3),t(),n(4,"div",1),a(5,"po-input",4)(6,"po-input",5),t(),n(7,"div",6),a(8,"po-select",7)(9,"po-select",8),t(),n(10,"div",1)(11,"po-button",9),h("p-click",function(){return i.apply(i.formAirfare)}),t()()()),r&2&&(s("formGroup",i.formAirfare),p(2),s("p-max-date",i.formAirfare.get("endDate").value),p(),s("p-min-date",i.formAirfare.get("startDate").value),p(5),s("p-options",i.ticketClassOptions),p(),s("p-options",i.accompanyNumber),p(2),s("p-disabled",i.formAirfare.invalid))},dependencies:[V,q,A,ee,te,B,_,O,j],encapsulation:2})}return l})();var Be=l=>({"docs-sample-code-tabs":l}),Se=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-airfare-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker - Airfare Reactive Form"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.html"),t(),n(13,"pre",7),e(14,`<form [formGroup]="formAirfare">
  <div class="po-row">
    <po-datepicker
      class="po-md-6"
      formControlName="startDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date start"
      [p-max-date]="formAirfare.get('endDate').value"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      formControlName="endDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date end"
      [p-min-date]="formAirfare.get('startDate').value"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" formControlName="origin" p-placeholder="Flight origin" p-label="Origin"> </po-input>

    <po-input class="po-md-6" formControlName="destination" p-label="Destination" p-placeholder="Flight destination">
    </po-input>
  </div>

  <div clas="po-row">
    <po-select class="po-md-6" formControlName="ticketClass" p-label="Class" [p-options]="ticketClassOptions">
    </po-select>

    <po-select class="po-md-6" formControlName="accompany" p-label="Accompany" [p-options]="accompanyNumber">
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3 po-offset-md-9 po-offset-lg-9"
      name="applyButton"
      p-label="Apply"
      [p-disabled]="formAirfare.invalid"
      (p-click)="apply(formAirfare)"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoDialogService, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-airfare-reactive-form',
  templateUrl: './sample-po-datepicker-airfare-reactive-form.component.html',
  standalone: false
})
export class SamplePoDatepickerAirfareReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  formAirfare: UntypedFormGroup;

  readonly accompanyNumber: Array<PoSelectOption> = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' }
  ];

  readonly ticketClassOptions: Array<PoSelectOption> = [
    { value: 'Economy', label: 'Economy' },
    { value: 'Premium', label: 'Premium' },
    { value: 'Business', label: 'Business' },
    { value: 'First', label: 'First' }
  ];

  ngOnInit() {
    this.formAirfare = this.formBuilder.group({
      accompany: [0, Validators.required],
      destination: ['', Validators.required],
      endDate: [new Date(), Validators.required],
      origin: ['', Validators.required],
      startDate: [new Date(), Validators.required],
      ticketClass: ['Economy', Validators.required]
    });
  }

  apply(formAirfare: UntypedFormGroup) {
    const { accompany, destination, endDate, origin, ticketClass, startDate } = formAirfare.value;

    const message = \`Would you like to confirm the ticket from \${origin} to \${destination} with departure date at
    \${this.getFormatedDate(startDate)} and return at \${this.getFormatedDate(endDate)} with \${accompany} companions in
    \${ticketClass} class?\`;

    this.poDialog.confirm({
      title: 'Confirm',
      message,
      confirm: () => {
        this.poNotification.success('Booking Confirmed');

        this.formAirfare.reset({
          accompany: 0,
          endDate: new Date(),
          startDate: new Date(),
          ticketClass: 'Economy'
        });
      },
      cancel: () => {
        this.poNotification.warning('Booking Canceled');
      }
    });
  }

  private getFormatedDate(date: string) {
    return date && date.slice(0, 10);
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-datepicker-airfare-reactive-form"),t(),a(23,"hr")),r&2&&(p(5),k("po-icon "+i.sampleCodeButtonIcon),p(),D(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",w(4,Be,i.hideSampleCodeTabs)))},dependencies:[P,C,v,y,ge],encapsulation:2})}return l})();var he=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-doc"]],standalone:!1,decls:1128,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3schools.com/js/js_dates.asp"],["href","https://www.w3schools.com/jsref/jsref_setfullyear.asp"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","/documentation/po-i18n"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","Date"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoDatepickerComponent"),t()(),n(21,"div",2)(22,"p"),e(23,"O "),n(24,"code"),e(25,"po-datepicker"),t(),e(26," \xE9 um componente espec\xEDfico para manipula\xE7\xE3o de datas permitindo a digita\xE7\xE3o e / ou sele\xE7\xE3o."),t(),n(27,"p"),e(28,`O formato de exibi\xE7\xE3o da data, ou seja, o formato que \xE9 apresentado ao usu\xE1rio \xE9 o dd/mm/yyyy,
mas podem ser definidos outros padr\xF5es (veja mais na propriedade `),n(29,"code"),e(30,"p-format"),t(),e(31,")."),t(),n(32,"p"),e(33,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),n(34,"code"),e(35,"p-locale"),t(),e(36,"."),t(),n(37,"p"),e(38,`O datepicker aceita tr\xEAs formatos de data: o E8601DZw (yyyy-mm-ddThh:mm:ss+|-hh:mm), o E8601DAw (yyyy-mm-dd) e o
Date padr\xE3o do Javascript.`),t(),n(39,"blockquote")(40,"p"),e(41,"Por padr\xE3o, o formato de sa\xEDda do "),n(42,"em"),e(43,"model"),t(),e(44,` se ajustar\xE1 conforme o formato de entrada. Se por acaso precisar controlar o valor de sa\xEDda,
a propriedade `),n(45,"code"),e(46,"p-iso-format"),t(),e(47," prov\xEA esse controle independentemente do formato de entrada. Veja abaixo os formatos dispon\xEDveis:"),t()(),n(48,"ul")(49,"li")(50,"p"),e(51,"Formato de entrada e sa\xEDda (E8601DZw) - "),n(52,"code"),e(53,"'2017-11-28T00:00:00-02:00'"),t(),e(54,";"),t()(),n(55,"li")(56,"p"),e(57,"Formato de entrada e sa\xEDda (E8601DAw) - "),n(58,"code"),e(59,"'2017-11-28'"),t(),e(60,";"),t()(),n(61,"li")(62,"p"),e(63,"Formato de entrada (Date) - "),n(64,"code"),e(65,"new Date(2017, 10, 28)"),t(),e(66," e sa\xEDda (E8601DAw) - "),n(67,"code"),e(68,"'2017-11-28'"),t(),e(69,";"),t()()(),n(70,"p")(71,"strong"),e(72,"Importante:"),t()(),n(73,"ul")(74,"li"),e(75,"Para utilizar datas com ano inferior a 100, verificar o comportamento do "),n(76,"a",6)(77,"code"),e(78,"new Date"),t()(),e(79,`
e utilizar o m\xE9todo `),n(80,"a",7)(81,"code"),e(82,"setFullYear"),t()(),e(83,"."),t(),n(84,"li"),e(85,"Caso a data esteja inv\xE1lida, o "),n(86,"code"),e(87,"model"),t(),e(88," receber\xE1 "),n(89,"strong"),e(90,"'Data inv\xE1lida'"),t(),e(91,"."),t(),n(92,"li"),e(93,"Caso o "),n(94,"code"),e(95,"input"),t(),e(96," esteja passando um "),n(97,"code"),e(98,"[(ngModel)]"),t(),e(99,", mas n\xE3o tenha um "),n(100,"code"),e(101,"name"),t(),e(102,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),n(103,"code"),e(104,'[ngModelOptions]="{standalone: true}"'),t(),e(105,")."),t()(),n(106,"p"),e(107,"Exemplo:"),t(),n(108,"pre")(109,"code"),e(110,`<po-datepicker
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}"
</po-datepicker>
`),t()(),n(111,"blockquote")(112,"p"),e(113,"N\xE3o esque\xE7a de importar o "),n(114,"code"),e(115,"FormsModule"),t(),e(116," em seu m\xF3dulo, tal como para utilizar o "),n(117,"code"),e(118,"input default"),t(),e(119,"."),t()(),n(120,"h4"),e(121,"Tokens customiz\xE1veis"),t(),n(122,"p"),e(123,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),a(124,"br"),e(125,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(126,"code"),e(127,".po-input"),t()(),n(128,"blockquote")(129,"p"),e(130,"Para maiores informa\xE7\xF5es, acesse o guia "),n(131,"a",8),e(132,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(133,"."),t()(),n(134,"table")(135,"thead")(136,"tr")(137,"th"),e(138,"Propriedade"),t(),n(139,"th"),e(140,"Descri\xE7\xE3o"),t(),n(141,"th"),e(142,"Valor Padr\xE3o"),t()()(),n(143,"tbody")(144,"tr")(145,"td")(146,"strong"),e(147,"Default Values"),t()(),a(148,"td")(149,"td"),t(),n(150,"tr")(151,"td")(152,"code"),e(153,"--font-family"),t()(),n(154,"td"),e(155,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(156,"td")(157,"code"),e(158,"var(--font-family-theme)"),t()()(),n(159,"tr")(160,"td")(161,"code"),e(162,"--font-size"),t()(),n(163,"td"),e(164,"Tamanho da fonte"),t(),n(165,"td")(166,"code"),e(167,"var(--font-size-default)"),t()()(),n(168,"tr")(169,"td")(170,"code"),e(171,"--text-color-placeholder"),t(),e(172," \xA0"),t(),n(173,"td"),e(174,"Cor principal do texto do placeholder"),t(),n(175,"td")(176,"code"),e(177,"var(--color-neutral-light-30)"),t()()(),n(178,"tr")(179,"td")(180,"code"),e(181,"--color"),t()(),n(182,"td"),e(183,"Cor principal do datepicker"),t(),n(184,"td")(185,"code"),e(186,"var(--color-neutral-dark-70)"),t()()(),n(187,"tr")(188,"td")(189,"code"),e(190,"--background"),t()(),n(191,"td"),e(192,"Cor de background"),t(),n(193,"td")(194,"code"),e(195,"var(--color-neutral-light-05)"),t()()(),n(196,"tr")(197,"td")(198,"code"),e(199,"--padding"),t()(),n(200,"td"),e(201,"Preenchimento"),t(),n(202,"td")(203,"code"),e(204,"0 0.5rem"),t()()(),n(205,"tr")(206,"td")(207,"code"),e(208,"--text-color"),t()(),n(209,"td"),e(210,"Cor do texto"),t(),n(211,"td")(212,"code"),e(213,"var(--color-neutral-dark-90)"),t()()(),n(214,"tr")(215,"td")(216,"strong"),e(217,"Hover"),t()(),a(218,"td")(219,"td"),t(),n(220,"tr")(221,"td")(222,"code"),e(223,"--color-hover"),t()(),n(224,"td"),e(225,"Cor principal no estado hover"),t(),n(226,"td")(227,"code"),e(228,"var(--color-brand-01-dark)"),t()()(),n(229,"tr")(230,"td")(231,"code"),e(232,"--background-hover"),t()(),n(233,"td"),e(234,"Cor de background no estado hover"),t(),n(235,"td")(236,"code"),e(237,"var(--color-brand-01-lightest)"),t()()(),n(238,"tr")(239,"td")(240,"strong"),e(241,"Focused"),t()(),a(242,"td")(243,"td"),t(),n(244,"tr")(245,"td")(246,"code"),e(247,"--color-focused"),t()(),n(248,"td"),e(249,"Cor principal no estado de focus"),t(),n(250,"td")(251,"code"),e(252,"var(--color-action-default)"),t()()(),n(253,"tr")(254,"td")(255,"code"),e(256,"--outline-color-focused"),t()(),n(257,"td"),e(258,"Cor do outline do estado de focus"),t(),n(259,"td")(260,"code"),e(261,"var(--color-action-focus)"),t()()(),n(262,"tr")(263,"td")(264,"strong"),e(265,"Disabled"),t()(),a(266,"td")(267,"td"),t(),n(268,"tr")(269,"td")(270,"code"),e(271,"--color-disabled"),t()(),n(272,"td"),e(273,"Cor principal no estado disabled"),t(),n(274,"td")(275,"code"),e(276,"var(--color-neutral-light-30)"),t()()(),n(277,"tr")(278,"td")(279,"code"),e(280,"--background-disabled"),t()(),n(281,"td"),e(282,"Cor de background no estado disabled \xA0"),t(),n(283,"td")(284,"code"),e(285,"var(--color-neutral-light-20)"),t()()(),n(286,"tr")(287,"td")(288,"code"),e(289,"--text-color-disabled"),t()(),n(290,"td"),e(291,"Cor do texto no estado disabled"),t(),n(292,"td")(293,"code"),e(294,"var(--color-neutral-dark-70)"),t()()()()()(),n(295,"div",9)(296,"h4",10),e(297,"Seletor"),t(),n(298,"pre",11),e(299,`<po-datepicker
    p-locale="string"
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-clean="boolean"
    p-disabled="boolean"
    p-error-async="(value) => Observable<boolean>"
    p-error-limit="boolean"
    p-error-pattern="string"
    p-format="string"
    p-help="string"
    p-iso-format="PoDatepickerIsoFormat"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-max-date="string | Date"
    p-min-date="string | Date"
    p-no-autocomplete="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-required-field-error-message="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-datepicker>
`),t()(),n(300,"h4",12),e(301,"Propriedades"),t(),n(302,"table",13)(303,"tr",14)(304,"th",15),e(305,"Nome"),t(),n(306,"th",15),e(307,"Tipo"),t(),n(308,"th",15),e(309,"Padr\xE3o"),t(),n(310,"th",15),e(311,"Descri\xE7\xE3o"),t()(),n(312,"tr",16)(313,"td",17)(314,"div",18)(315,"span",19),e(316,"p-locale"),a(317,"br"),t()()(),n(318,"td",20)(319,"code",21),e(320,"string"),t()(),n(321,"td",22),e(322,"-"),t(),n(323,"td",23)(324,"em")(325,"strong"),e(326,"(opcional)"),t()(),n(327,"p"),e(328,"Idioma do Datepicker."),t(),n(329,"blockquote")(330,"p"),e(331,"O locale padr\xE3o sera recuperado com base no "),n(332,"a",24)(333,"code"),e(334,"PoI18nService"),t()(),e(335," ou "),n(336,"em"),e(337,"browser"),t(),e(338,"."),t()()()(),n(339,"tr",16)(340,"td",17)(341,"div",25)(342,"span",26),e(343," (p-additional-help)"),a(344,"br"),t()(),n(345,"div",27),e(346,"Deprecated"),t()(),n(347,"td",20)(348,"code",28),e(349,"EventEmitter"),t()(),n(350,"td",22),e(351,"-"),t(),n(352,"td",23)(353,"em")(354,"strong"),e(355,"(opcional)"),t()(),n(356,"p"),e(357,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(358,"code"),e(359,"p-help"),t(),e(360,"."),t(),n(361,"blockquote")(362,"p"),e(363,"Essa propriedade est\xE1 "),n(364,"strong"),e(365,"depreciada"),t(),e(366," e ser\xE1 removida na vers\xE3o "),n(367,"code"),e(368,"23.x.x"),t(),e(369,". Recomendamos utilizar a propriedade "),n(370,"code"),e(371,"p-helper"),t(),e(372," que oferece mais recursos e flexibilidade."),t()()()(),n(373,"tr",16)(374,"td",17)(375,"div",18)(376,"span",19),e(377," p-additional-help-tooltip"),a(378,"br"),t()(),n(379,"div",27),e(380,"Deprecated"),t()(),n(381,"td",20)(382,"code",21),e(383,"string"),t()(),n(384,"td",22),e(385,"-"),t(),n(386,"td",23)(387,"em")(388,"strong"),e(389,"(opcional)"),t()(),n(390,"p"),e(391,"Exibe um \xEDcone de ajuda adicional ao "),n(392,"code"),e(393,"p-help"),t(),e(394,`, com o texto desta propriedade no tooltip.
Se o evento `),n(395,"code"),e(396,"p-additional-help"),t(),e(397,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(398,"strong"),e(399,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(400,"blockquote")(401,"p"),e(402,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(403,"blockquote")(404,"p"),e(405,"Essa propriedade est\xE1 "),n(406,"strong"),e(407,"depreciada"),t(),e(408," e ser\xE1 removida na vers\xE3o "),n(409,"code"),e(410,"23.x.x"),t(),e(411,". Recomendamos utilizar a propriedade "),n(412,"code"),e(413,"p-helper"),t(),e(414," que oferece mais recursos e flexibilidade."),t()()()(),n(415,"tr",16)(416,"td",17)(417,"div",18)(418,"span",19),e(419," p-append-in-body"),a(420,"br"),t()()(),n(421,"td",20)(422,"code",29),e(423,"boolean"),t()(),n(424,"td",22)(425,"p")(426,"code"),e(427,"false"),t()()(),n(428,"td",23)(429,"em")(430,"strong"),e(431,"(opcional)"),t()(),n(432,"p"),e(433,"Define que o "),n(434,"code"),e(435,"calendar"),t(),e(436," e/ou tooltip ("),n(437,"code"),e(438,"p-additional-help-tooltip"),t(),e(439," e/ou "),n(440,"code"),e(441,"p-error-limit"),t(),e(442,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),n(443,"blockquote")(444,"p"),e(445,"Quando utilizado com "),n(446,"code"),e(447,"p-additional-help-tooltip"),t(),e(448,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(449,"tr",16)(450,"td",17)(451,"div",18)(452,"span",19),e(453," p-auto-focus"),a(454,"br"),t()()(),n(455,"td",20)(456,"code",29),e(457,"boolean"),t()(),n(458,"td",22)(459,"p")(460,"code"),e(461,"false"),t()()(),n(462,"td",23)(463,"em")(464,"strong"),e(465,"(opcional)"),t()(),n(466,"p"),e(467,"Aplica foco no elemento ao ser iniciado."),t(),n(468,"blockquote")(469,"p"),e(470,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(471,"tr",16)(472,"td",17)(473,"div",18)(474,"span",19),e(475,"p-clean"),a(476,"br"),t()()(),n(477,"td",20)(478,"code",29),e(479,"boolean"),t()(),n(480,"td",22),e(481,"-"),t(),n(482,"td",23)(483,"em")(484,"strong"),e(485,"(opcional)"),t()(),n(486,"p"),e(487,"Habilita a\xE7\xE3o para limpar o campo."),t()()(),n(488,"tr",16)(489,"td",17)(490,"div",18)(491,"span",19),e(492,"p-disabled"),a(493,"br"),t()()(),n(494,"td",20)(495,"code",29),e(496,"boolean"),t()(),n(497,"td",22),e(498,"-"),t(),n(499,"td",23)(500,"em")(501,"strong"),e(502,"(opcional)"),t()(),n(503,"p"),e(504,"Desabilita o campo."),t()()(),n(505,"tr",16)(506,"td",17)(507,"div",18)(508,"span",19),e(509," p-error-async"),a(510,"br"),t()()(),n(511,"td",20)(512,"code",30),e(513,"(value) => Observable<boolean>"),t()(),n(514,"td",22),e(515,"-"),t(),n(516,"td",23)(517,"em")(518,"strong"),e(519,"(opcional)"),t()(),n(520,"p"),e(521,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(522,"code"),e(523,"change"),t(),e(524,"."),t()()(),n(525,"tr",16)(526,"td",17)(527,"div",18)(528,"span",19),e(529," p-error-limit"),a(530,"br"),t()()(),n(531,"td",20)(532,"code",29),e(533,"boolean"),t()(),n(534,"td",22)(535,"p")(536,"code"),e(537,"false"),t()()(),n(538,"td",23)(539,"em")(540,"strong"),e(541,"(opcional)"),t()(),n(542,"p"),e(543,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(544,"blockquote")(545,"p"),e(546,"Caso essa propriedade seja definida como "),n(547,"code"),e(548,"true"),t(),e(549,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(550,"tr",16)(551,"td",17)(552,"div",18)(553,"span",19),e(554," p-error-pattern"),a(555,"br"),t()()(),n(556,"td",20)(557,"code",21),e(558,"string"),t()(),n(559,"td",22),e(560,"-"),t(),n(561,"td",23)(562,"em")(563,"strong"),e(564,"(opcional)"),t()(),n(565,"p"),e(566,"Mensagem apresentada quando a data for inv\xE1lida ou fora do per\xEDodo."),t(),n(567,"blockquote")(568,"p"),e(569,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(570,"code"),e(571,"p-required-field-error-message"),t(),e(572," em conjunto."),t()()()(),n(573,"tr",16)(574,"td",17)(575,"div",18)(576,"span",19),e(577," p-format"),a(578,"br"),t()()(),n(579,"td",20)(580,"code",21),e(581,"string"),t()(),n(582,"td",22)(583,"p")(584,"code"),e(585,"dd/mm/yyyy"),t()()(),n(586,"td",23)(587,"em")(588,"strong"),e(589,"(opcional)"),t()(),n(590,"p"),e(591,"Formato de exibi\xE7\xE3o da data."),t(),n(592,"p"),e(593,"Valores v\xE1lidos:"),t(),n(594,"ul")(595,"li")(596,"code"),e(597,"dd/mm/yyyy"),t()(),n(598,"li")(599,"code"),e(600,"mm/dd/yyyy"),t()(),n(601,"li")(602,"code"),e(603,"yyyy/mm/dd"),t()()()()(),n(604,"tr",16)(605,"td",17)(606,"div",18)(607,"span",19),e(608," p-help"),a(609,"br"),t()()(),n(610,"td",20)(611,"code",21),e(612,"string"),t()(),n(613,"td",22),e(614,"-"),t(),n(615,"td",23)(616,"em")(617,"strong"),e(618,"(opcional)"),t()(),n(619,"p"),e(620,"Texto de apoio do campo."),t()()(),n(621,"tr",16)(622,"td",17)(623,"div",18)(624,"span",19),e(625," p-iso-format"),a(626,"br"),t()()(),n(627,"td",20)(628,"code",31),e(629,"PoDatepickerIsoFormat"),t()(),n(630,"td",22),e(631,"-"),t(),n(632,"td",23)(633,"em")(634,"strong"),e(635,"(opcional)"),t()(),n(636,"p"),e(637,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do "),n(638,"em"),e(639,"model"),t(),e(640,", independentemente do formato de entrada."),t(),n(641,"blockquote")(642,"p"),e(643,"Veja os valores v\xE1lidos no "),n(644,"em"),e(645,"enum"),t(),n(646,"code"),e(647,"PoDatepickerIsoFormat"),t(),e(648,"."),t()()()(),n(649,"tr",16)(650,"td",17)(651,"div",25)(652,"span",26),e(653," (p-keydown)"),a(654,"br"),t()()(),n(655,"td",20)(656,"code",28),e(657,"EventEmitter"),t()(),n(658,"td",22),e(659,"-"),t(),n(660,"td",23)(661,"em")(662,"strong"),e(663,"(opcional)"),t()(),n(664,"p"),e(665,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(666,"code"),e(667,"KeyboardEvent"),t(),e(668," com informa\xE7\xF5es sobre a tecla."),t()()(),n(669,"tr",16)(670,"td",17)(671,"div",18)(672,"span",19),e(673," p-label"),a(674,"br"),t()()(),n(675,"td",20)(676,"code",21),e(677,"string"),t()(),n(678,"td",22),e(679,"-"),t(),n(680,"td",23)(681,"em")(682,"strong"),e(683,"(opcional)"),t()(),n(684,"p"),e(685,"R\xF3tulo do campo."),t()()(),n(686,"tr",16)(687,"td",17)(688,"div",18)(689,"span",19),e(690," p-label-text-wrap"),a(691,"br"),t()()(),n(692,"td",20)(693,"code",29),e(694,"boolean"),t()(),n(695,"td",22)(696,"p")(697,"code"),e(698,"false"),t()()(),n(699,"td",23)(700,"em")(701,"strong"),e(702,"(opcional)"),t()(),n(703,"p"),e(704,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(705,"code"),e(706,"p-label"),t(),e(707,". Quando "),n(708,"code"),e(709,"p-label-text-wrap"),t(),e(710,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(711,"tr",16)(712,"td",17)(713,"div",18)(714,"span",19),e(715," p-max-date"),a(716,"br"),t()()(),n(717,"td",20)(718,"code",21),e(719,"string "),t(),n(720,"code",32),e(721," Date"),t()(),n(722,"td",22),e(723,"-"),t(),n(724,"td",23)(725,"em")(726,"strong"),e(727,"(opcional)"),t()(),n(728,"p"),e(729,"Define uma data m\xE1xima para o "),n(730,"code"),e(731,"po-datepicker"),t(),e(732,"."),t()()(),n(733,"tr",16)(734,"td",17)(735,"div",18)(736,"span",19),e(737," p-min-date"),a(738,"br"),t()()(),n(739,"td",20)(740,"code",21),e(741,"string "),t(),n(742,"code",32),e(743," Date"),t()(),n(744,"td",22),e(745,"-"),t(),n(746,"td",23)(747,"em")(748,"strong"),e(749,"(opcional)"),t()(),n(750,"p"),e(751,"Define uma data m\xEDnima para o "),n(752,"code"),e(753,"po-datepicker"),t(),e(754,"."),t()()(),n(755,"tr",16)(756,"td",17)(757,"div",18)(758,"span",19),e(759," p-no-autocomplete"),a(760,"br"),t()()(),n(761,"td",20)(762,"code",29),e(763,"boolean"),t()(),n(764,"td",22)(765,"p")(766,"code"),e(767,"false"),t()()(),n(768,"td",23)(769,"em")(770,"strong"),e(771,"(opcional)"),t()(),n(772,"p"),e(773,"Define a propriedade nativa "),n(774,"code"),e(775,"autocomplete"),t(),e(776," do campo como "),n(777,"code"),e(778,"off"),t(),e(779,"."),t()()(),n(780,"tr",16)(781,"td",17)(782,"div",25)(783,"span",26),e(784," (p-blur)"),a(785,"br"),t()()(),n(786,"td",20)(787,"code",28),e(788,"EventEmitter"),t()(),n(789,"td",22),e(790,"-"),t(),n(791,"td",23)(792,"em")(793,"strong"),e(794,"(opcional)"),t()(),n(795,"p"),e(796,"Evento disparado ao sair do campo."),t()()(),n(797,"tr",16)(798,"td",17)(799,"div",25)(800,"span",26),e(801," (p-change)"),a(802,"br"),t()()(),n(803,"td",20)(804,"code",28),e(805,"EventEmitter"),t()(),n(806,"td",22),e(807,"-"),t(),n(808,"td",23)(809,"em")(810,"strong"),e(811,"(opcional)"),t()(),n(812,"p"),e(813,"Evento disparado ao alterar valor do campo."),t()()(),n(814,"tr",16)(815,"td",17)(816,"div",18)(817,"span",19),e(818," p-optional"),a(819,"br"),t()()(),n(820,"td",20)(821,"code",29),e(822,"boolean"),t()(),n(823,"td",22)(824,"p")(825,"code"),e(826,"false"),t()()(),n(827,"td",23)(828,"em")(829,"strong"),e(830,"(opcional)"),t()(),n(831,"p"),e(832,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(833,"blockquote")(834,"p"),e(835,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(836,"ul")(837,"li"),e(838,"O campo conter "),n(839,"code"),e(840,"p-required"),t(),e(841,";"),t(),n(842,"li"),e(843,"N\xE3o possuir "),n(844,"code"),e(845,"p-help"),t(),e(846," e/ou "),n(847,"code"),e(848,"p-label"),t(),e(849,"."),t()()()(),n(850,"tr",16)(851,"td",17)(852,"div",18)(853,"span",19),e(854," p-placeholder"),a(855,"br"),t()()(),n(856,"td",20)(857,"code",21),e(858,"string"),t()(),n(859,"td",22),e(860,"-"),t(),n(861,"td",23)(862,"em")(863,"strong"),e(864,"(opcional)"),t()(),n(865,"p"),e(866,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(867,"tr",16)(868,"td",17)(869,"div",18)(870,"span",19),e(871," p-helper"),a(872,"br"),t()()(),n(873,"td",20)(874,"code",33),e(875,"PoHelperOptions "),t(),n(876,"code",21),e(877," string"),t()(),n(878,"td",22),e(879,"-"),t(),n(880,"td",23)(881,"em")(882,"strong"),e(883,"(opcional)"),t()(),n(884,"p"),e(885,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),n(886,"blockquote")(887,"p"),e(888,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),n(889,"code"),e(890,"p-additional-help-tooltip"),t(),e(891," e "),n(892,"code"),e(893,"p-additional-help"),t(),e(894,") ser\xE1 ignorado."),t()()()(),n(895,"tr",16)(896,"td",17)(897,"div",18)(898,"span",19),e(899,"p-readonly"),a(900,"br"),t()()(),n(901,"td",20)(902,"code",29),e(903,"boolean"),t()(),n(904,"td",22),e(905,"-"),t(),n(906,"td",23)(907,"em")(908,"strong"),e(909,"(opcional)"),t()(),n(910,"p"),e(911,"Torna o elemento somente leitura."),t()()(),n(912,"tr",16)(913,"td",17)(914,"div",18)(915,"span",19),e(916,"p-required"),a(917,"br"),t()()(),n(918,"td",20)(919,"code",29),e(920,"boolean"),t()(),n(921,"td",22)(922,"p")(923,"code"),e(924,"false"),t()()(),n(925,"td",23)(926,"em")(927,"strong"),e(928,"(opcional)"),t()(),n(929,"p"),e(930,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),n(931,"tr",16)(932,"td",17)(933,"div",18)(934,"span",19),e(935," p-required-field-error-message"),a(936,"br"),t()()(),n(937,"td",20)(938,"code",29),e(939,"boolean"),t()(),n(940,"td",22)(941,"p")(942,"code"),e(943,"false"),t()()(),n(944,"td",23)(945,"em")(946,"strong"),e(947,"(opcional)"),t()(),n(948,"p"),e(949,"Exibe a mensagem setada na propriedade "),n(950,"code"),e(951,"p-error-pattern"),t(),e(952," se o campo estiver vazio e for requerido."),t(),n(953,"blockquote")(954,"p"),e(955,"Necess\xE1rio que a propriedade "),n(956,"code"),e(957,"p-required"),t(),e(958," esteja habilitada."),t()()()(),n(959,"tr",16)(960,"td",17)(961,"div",18)(962,"span",19),e(963," p-show-required"),a(964,"br"),t()()(),n(965,"td",20)(966,"code",29),e(967,"boolean"),t()(),n(968,"td",22),e(969,"-"),t(),n(970,"td",23)(971,"p"),e(972,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(973,"blockquote")(974,"p"),e(975,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(976,"ul")(977,"li"),e(978,"N\xE3o possuir "),n(979,"code"),e(980,"p-help"),t(),e(981," e/ou "),n(982,"code"),e(983,"p-label"),t(),e(984,"."),t()()()(),n(985,"tr",16)(986,"td",17)(987,"div",18)(988,"span",19),e(989," p-size"),a(990,"br"),t()()(),n(991,"td",20)(992,"code",21),e(993,"string"),t()(),n(994,"td",22)(995,"p")(996,"code"),e(997,"medium"),t()()(),n(998,"td",23)(999,"em")(1e3,"strong"),e(1001,"(opcional)"),t()(),n(1002,"p"),e(1003,"Define o tamanho do componente:"),t(),n(1004,"ul")(1005,"li")(1006,"code"),e(1007,"small"),t(),e(1008,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1009,"li")(1010,"code"),e(1011,"medium"),t(),e(1012,": altura do input como 44px."),t()(),n(1013,"blockquote")(1014,"p"),e(1015,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1016,"code"),e(1017,"medium"),t(),e(1018,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1019,"a",34),e(1020,"po-theme"),t(),e(1021,"."),t()()()()(),n(1022,"h3",12),e(1023,"M\xE9todos"),t(),n(1024,"table",35)(1025,"tr",16)(1026,"th",36)(1027,"div",18)(1028,"h4")(1029,"span",19),e(1030," focus "),t()()()()(),n(1031,"tr",23)(1032,"td",23)(1033,"p"),e(1034,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1035,"p"),e(1036,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1037,"pre")(1038,"code"),e(1039,`import { PoDatepickerComponent } from '@po-ui/ng-components';

...

@ViewChild(PoDatepickerComponent, { static: true }) datepicker: PoDatepickerComponent;

focusDatepicker() {
  this.datepicker.focus();
}
`),t()()()()(),a(1040,"br"),n(1041,"table",35)(1042,"tr",16)(1043,"th",36)(1044,"div",18)(1045,"h4")(1046,"span",19),e(1047," showAdditionalHelp "),t()()()()(),n(1048,"tr",23)(1049,"td",23)(1050,"p"),e(1051,"M\xE9todo que exibe "),n(1052,"code"),e(1053,"p-additionalHelpTooltip"),t(),e(1054," ou executa a a\xE7\xE3o definida em "),n(1055,"code"),e(1056,"p-additionalHelp"),t(),e(1057,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1058,"code"),e(1059,"p-keydown"),t(),e(1060,"."),t(),n(1061,"blockquote")(1062,"p"),e(1063,"Exibe ou oculta o conte\xFAdo do componente "),n(1064,"code"),e(1065,"po-helper"),t(),e(1066," quando o componente estiver com foco e com label vis\xEDvel."),t()(),n(1067,"pre")(1068,"code"),e(1069,`<po-datepicker
 #datepicker
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, datepicker)"
></po-datepicker>
`),t()(),n(1070,"pre")(1071,"code"),e(1072,`// Exemplo com p-label e p-helper
<po-datepicker
 #datepicker
 ...
 p-label="Label do datepicker"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datepicker)"
></po-datepicker>
`),t()(),n(1073,"pre")(1074,"code"),e(1075,`...
onKeyDown(event: KeyboardEvent, inp: PoDatepickerComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),a(1076,"br"),n(1077,"h3"),e(1078,"Enums"),t(),n(1079,"h4",4)(1080,"code",5),e(1081,"PoDatepickerIsoFormat"),t()(),n(1082,"div",2)(1083,"p")(1084,"em"),e(1085,"Enum"),t(),e(1086," que define o padr\xE3o de formata\xE7\xE3o das datas."),t(),n(1087,"blockquote")(1088,"p"),e(1089,"Caso um formato padr\xE3o seja definido, o mesmo n\xE3o ser\xE1 mais alterado de acordo com o formato de entrada."),t()()(),n(1090,"h4",12),e(1091,"Propriedades"),t(),n(1092,"table",13)(1093,"tr",14)(1094,"th",15),e(1095,"Nome"),t(),n(1096,"th",15),e(1097,"Descri\xE7\xE3o"),t()(),n(1098,"tr",16)(1099,"td",17)(1100,"div",18)(1101,"span",19),e(1102," Basic"),a(1103,"br"),t()()(),n(1104,"td",23)(1105,"p"),e(1106,"Padr\xE3o "),n(1107,"strong"),e(1108,"E8601DAw"),t(),e(1109," ("),n(1110,"em"),e(1111,"yyyy-mm-dd"),t(),e(1112,")."),t()()(),n(1113,"tr",16)(1114,"td",17)(1115,"div",18)(1116,"span",19),e(1117," Extended"),a(1118,"br"),t()()(),n(1119,"td",23)(1120,"p"),e(1121,"Padr\xE3o "),n(1122,"strong"),e(1123,"E8601DZw"),t(),e(1124," ("),n(1125,"em"),e(1126,"yyyy-mm-ddThh:mm:ss+|-hh:mm"),t(),e(1127,")."),t()()()()())},dependencies:[C],encapsulation:2})}return l})();var xe=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||l)(U(ie),U(oe))};static \u0275cmp=S({type:l,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Datepicker",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),h("p-click",function(){return i.changeTab("doc")}),a(3,"sample-po-datepicker-doc"),t(),n(4,"po-tab",3),h("p-click",function(){return i.changeTab("web")}),a(5,"sample-po-datepicker-basic-view")(6,"sample-po-datepicker-labs-view")(7,"sample-po-datepicker-airfare-view")(8,"sample-po-datepicker-airfare-reactive-form-view"),t()()()),r&2&&(s("p-actions",i.actions),p(2),s("p-active",i.activeTab==="doc"),p(2),s("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[pe,v,y,se,Ee,be,Se,he],encapsulation:2})}return l})();var Ne=[{path:"",component:xe}],ve=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=N({type:l});static \u0275inj=L({imports:[Q.forChild(Ne),Q]})}return l})();var vt=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=N({type:l});static \u0275inj=L({imports:[de,ve]})}return l})();export{vt as DocPoDatepickerModule};
