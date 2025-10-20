import{o as y,p as Le}from"./chunk-AFRMAFNN.js";import{Fa as ke,Ha as q,J as K,O as fe,Q as X,Qa as H,Ra as ye,Va as N,lb as Pe,sa as Y,v as z,va as Ce,xb as C,yb as k,za as Z}from"./chunk-TRMMOLUM.js";import{Ca as P,Cc as oe,D as me,Eb as w,Fc as T,Ga as pe,Gc as V,Hc as $,Ic as A,Jc as I,Ka as i,L as O,La as t,M as G,Ma as n,Mc as Se,Nc as be,P as h,Pb as xe,Qa as J,Ra as x,Rc as ge,Sa as se,T as c,U as E,Wa as ne,Wc as ve,Yc as he,_c as ae,a as U,ab as ue,ac as j,bb as e,c as re,db as L,fb as b,gb as g,hb as v,ia as d,ja as ie,lb as _,mb as W,nb as F,o as te,pa as S,qa as Q,tb as ce,ub as Ee,va as de,za as u}from"./chunk-TTO7B3JZ.js";var Fe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","PO Lookup"]],template:function(l,o){l&1&&n(0,"po-lookup",0)},dependencies:[q],encapsulation:2})}return a})();var We=a=>({"docs-sample-code-tabs":a}),we=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup Basic"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-basic/sample-po-lookup-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-lookup
  name="lookup"
  p-field-label="label"
  p-field-value="value"
  p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  p-label="PO Lookup"
>
</po-lookup>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-basic/sample-po-lookup-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-lookup-basic',
  templateUrl: './sample-po-lookup-basic.component.html',
  standalone: false
})
export class SamplePoLookupBasicComponent {}
`),t()()()()(),i(21,"div",10),n(22,"sample-po-lookup-basic"),t(),n(23,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,We,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Fe],encapsulation:2})}return a})();var D=(()=>{class a{httpClient=h(j);url="https://po-sample-api.onrender.com/v1/heroes";getFilteredItems(r){let m=r,{filterParams:l,advancedFilters:o}=m,p=re(m,["filterParams","advancedFilters"]),s=U(U(U({},p),l),o);return this.httpClient.get(this.url,{params:s})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static \u0275fac=function(l){return new(l||a)};static \u0275prov=O({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var qe=(()=>{class a{sampleFilterService=h(D);additionalHelpTooltip;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;size;spacing=Ce.Medium;columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Name"},{value:"email",label:"Email"}];fieldLabelOptions=[{value:"label",label:"Label"},...this.columnsOptions];fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"infiniteScroll",label:"Infinite Scroll"},{value:"multiple",label:"Multiple"},{value:"autoHeight",label:"Auto Height"},{value:"hideColumnsManager",label:"Hide Columns Manager"},{value:"textWrap",label:"Text Wrap"},{value:"virtualScroll",label:"Virtual Sroll"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Name"},email:{property:"email",label:"Email"}};typeSpacing=[{label:"ExtraSmall",value:"extraSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(r){this.event=r}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r)}catch{this.fieldFormat=void 0}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters)}catch{this.customAdvancedFilters=void 0}}restore(){this.additionalHelpTooltip="",this.columnsName=["id","name"],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel="name",this.fieldValue="id",this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.customAdvancedFilters=[],this.size="medium"}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]))}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-labs"]],standalone:!1,features:[_([D])],decls:26,vars:52,consts:[["f","ngForm"],["name","lookup",3,"ngModelChange","p-change","p-error","p-keydown","p-selected","ngModel","p-additional-help-tooltip","p-advanced-filters","p-auto-height","p-clean","p-columns","p-disabled","p-field-format","p-field-label","p-filter-service","p-field-value","p-help","p-hide-columns-manager","p-infinite-scroll","p-label","p-literals","p-multiple","p-no-autocomplete","p-optional","p-placeholder","p-required","p-field-error-message","p-show-required","p-size","p-spacing","p-text-wrap","p-label-text-wrap","p-virtual-scroll","p-error-limit"],["p-no-border","true","p-no-padding","true"],[1,"po-row"],["p-label","Model",1,"po-md-12",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columnsName","p-columns","3","p-label","Columns",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6","po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/people","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }',"p-label","Literals",1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","spacing","p-columns","4","p-help","Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","advancedFilters","p-help",'Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]',"p-label","Advanced Filters","p-rows","4",1,"po-md-12","po-lg-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,o){if(l&1){let p=J();i(0,"po-lookup",1),v("ngModelChange",function(m){return c(p),g(o.lookup,m)||(o.lookup=m),E(m)}),x("p-change",function(){return c(p),E(o.changeEvent("p-change"))})("p-error",function(){return c(p),E(o.changeEvent("p-error"))})("p-keydown",function(){return c(p),E(o.changeEvent("p-keydown"))})("p-selected",function(){return c(p),E(o.changeEvent("p-selected"))}),t(),n(1,"hr"),i(2,"po-container",2)(3,"div",3),n(4,"po-info",4)(5,"po-info",5),t()(),n(6,"hr"),i(7,"form",null,0)(9,"po-input",6),v("ngModelChange",function(m){return c(p),g(o.label,m)||(o.label=m),E(m)}),t(),i(10,"po-checkbox-group",7),v("ngModelChange",function(m){return c(p),g(o.columnsName,m)||(o.columnsName=m),E(m)}),x("p-change",function(){return c(p),E(o.updateColumns())}),t(),i(11,"po-select",8),v("ngModelChange",function(m){return c(p),g(o.fieldLabel,m)||(o.fieldLabel=m),E(m)}),t(),i(12,"po-select",9),v("ngModelChange",function(m){return c(p),g(o.fieldValue,m)||(o.fieldValue=m),E(m)}),t(),i(13,"po-input",10),v("ngModelChange",function(m){return c(p),g(o.filterService,m)||(o.filterService=m),E(m)}),t(),i(14,"po-input",11),v("ngModelChange",function(m){return c(p),g(o.fieldErrorMessage,m)||(o.fieldErrorMessage=m),E(m)}),t(),i(15,"po-input",12),v("ngModelChange",function(m){return c(p),g(o.help,m)||(o.help=m),E(m)}),t(),i(16,"po-input",13),v("ngModelChange",function(m){return c(p),g(o.additionalHelpTooltip,m)||(o.additionalHelpTooltip=m),E(m)}),t(),i(17,"po-input",14),v("ngModelChange",function(m){return c(p),g(o.placeholder,m)||(o.placeholder=m),E(m)}),t(),i(18,"po-input",15),v("ngModelChange",function(m){return c(p),g(o.literals,m)||(o.literals=m),E(m)}),x("p-change",function(){return c(p),E(o.changeLiterals())}),t(),i(19,"po-input",16),v("ngModelChange",function(m){return c(p),g(o.formatField,m)||(o.formatField=m),E(m)}),x("p-change",function(m){return c(p),E(o.onFieldFormatChange(m))}),t(),i(20,"po-checkbox-group",17),v("ngModelChange",function(m){return c(p),g(o.properties,m)||(o.properties=m),E(m)}),t(),i(21,"po-radio-group",18),v("ngModelChange",function(m){return c(p),g(o.spacing,m)||(o.spacing=m),E(m)}),t(),i(22,"po-radio-group",19),v("ngModelChange",function(m){return c(p),g(o.size,m)||(o.size=m),E(m)}),t(),i(23,"po-textarea",20),v("ngModelChange",function(m){return c(p),g(o.advancedFilters,m)||(o.advancedFilters=m),E(m)}),x("p-change",function(){return c(p),E(o.changeAdvancedFilters())}),t(),i(24,"div",3)(25,"po-button",21),x("p-click",function(){return c(p),E(o.restore())}),t()()()}l&2&&(b("ngModel",o.lookup),u("p-additional-help-tooltip",o.additionalHelpTooltip)("p-advanced-filters",o.customAdvancedFilters)("p-auto-height",o.properties.includes("autoHeight"))("p-clean",o.properties.includes("clean"))("p-columns",o.columns)("p-disabled",o.properties.includes("disabled"))("p-field-format",o.fieldFormat)("p-field-label",o.fieldLabel)("p-filter-service",o.filterService||o.sampleFilterService)("p-field-value",o.fieldValue)("p-help",o.help)("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-infinite-scroll",o.properties.includes("infiniteScroll"))("p-label",o.label)("p-literals",o.customLiterals)("p-multiple",o.properties.includes("multiple"))("p-no-autocomplete",o.properties.includes("noAutocomplete"))("p-optional",o.properties.includes("optional"))("p-placeholder",o.placeholder)("p-required",o.properties.includes("required"))("p-field-error-message",o.fieldErrorMessage)("p-show-required",o.properties.includes("showRequired"))("p-size",o.size)("p-spacing",o.spacing)("p-text-wrap",o.properties.includes("textWrap"))("p-label-text-wrap",o.properties==null?null:o.properties.includes("labelTextWrap"))("p-virtual-scroll",o.properties.includes("virtualScroll"))("p-error-limit",o.properties==null?null:o.properties.includes("errorLimit")),d(4),u("p-value",o.lookup),d(),u("p-value",o.event),d(4),b("ngModel",o.label),d(),b("ngModel",o.columnsName),u("p-options",o.columnsOptions),d(),b("ngModel",o.fieldLabel),u("p-options",o.fieldLabelOptions),d(),b("ngModel",o.fieldValue),u("p-options",o.fieldValueOptions),d(),b("ngModel",o.filterService),d(),b("ngModel",o.fieldErrorMessage),d(),b("ngModel",o.help),d(),b("ngModel",o.additionalHelpTooltip),d(),b("ngModel",o.placeholder),d(),b("ngModel",o.literals),d(),b("ngModel",o.formatField),d(),b("ngModel",o.properties),u("p-options",o.propertiesOptions),d(),b("ngModel",o.spacing),u("p-options",o.typeSpacing),d(),b("ngModel",o.size),u("p-options",o.sizeOptions),d(),b("ngModel",o.advancedFilters))},dependencies:[I,T,V,A,$,z,K,fe,X,ke,q,H,ye,N],encapsulation:2})}return a})();var Qe=a=>({"docs-sample-code-tabs":a}),Me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-labs-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup Labs"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-labs/sample-po-lookup-labs.component.html"),t(),i(13,"pre",7),e(14,`<po-lookup
  name="lookup"
  [(ngModel)]="lookup"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-advanced-filters]="customAdvancedFilters"
  [p-auto-height]="properties.includes('autoHeight')"
  [p-clean]="properties.includes('clean')"
  [p-columns]="columns"
  [p-disabled]="properties.includes('disabled')"
  [p-field-format]="fieldFormat"
  [p-field-label]="fieldLabel"
  [p-filter-service]="filterService || sampleFilterService"
  [p-field-value]="fieldValue"
  [p-help]="help"
  [p-hide-columns-manager]="properties.includes('hideColumnsManager')"
  [p-infinite-scroll]="properties.includes('infiniteScroll')"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-multiple]="properties.includes('multiple')"
  [p-no-autocomplete]="properties.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-spacing]="spacing"
  [p-text-wrap]="properties.includes('textWrap')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-virtual-scroll]="properties.includes('virtualScroll')"
  (p-change)="changeEvent('p-change')"
  (p-error)="changeEvent('p-error')"
  (p-keydown)="changeEvent('p-keydown')"
  (p-selected)="changeEvent('p-selected')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-lookup>

<hr />

<po-container p-no-border="true" p-no-padding="true">
  <div class="po-row">
    <po-info class="po-md-12" p-label="Model" [p-value]="lookup"> </po-info>

    <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
  </div>
</po-container>

<hr />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-checkbox-group
    class="po-md-12 po-lg-6"
    name="columnsName"
    [(ngModel)]="columnsName"
    p-columns="3"
    p-label="Columns"
    [p-options]="columnsOptions"
    (p-change)="updateColumns()"
  >
  </po-checkbox-group>

  <po-select
    class="po-md-6 po-lg-12"
    name="fieldLabel"
    [(ngModel)]="fieldLabel"
    p-label="Field Label"
    p-required
    [p-options]="fieldLabelOptions"
  >
  </po-select>

  <po-select
    class="po-md-6"
    name="fieldValue"
    [(ngModel)]="fieldValue"
    p-label="Field Value"
    p-required
    [p-options]="fieldValueOptions"
  >
  </po-select>

  <po-input
    class="po-md-12 po-lg-6"
    name="filterService"
    [(ngModel)]="filterService"
    p-clean
    p-help="https://po-sample-api.onrender.com/v1/people"
    p-label="Filter Service"
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

  <po-input
    class="po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-input
    name="formatField"
    [(ngModel)]="formatField"
    class="po-lg-6"
    p-label="Field Format"
    p-help='Ex.: ["id", "name"]'
    (p-change)="onFieldFormatChange($event)"
  >
  </po-input>

  <po-checkbox-group
    class="po-lg-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-lg-12"
    name="spacing"
    [(ngModel)]="spacing"
    p-columns="4"
    p-help="Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    p-label="Spacing"
    [p-options]="typeSpacing"
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

  <po-textarea
    class="po-md-12 po-lg-12"
    name="advancedFilters"
    [(ngModel)]="advancedFilters"
    (p-change)="changeAdvancedFilters()"
    p-help='Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]'
    p-label="Advanced Filters"
    p-rows="4"
  >
  </po-textarea>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-labs/sample-po-lookup-labs.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoLookupColumn,
  PoLookupFilter,
  PoLookupLiterals,
  PoDynamicFormField,
  PoSelectOption,
  PoTableColumnSpacing,
  PoRadioGroupOption
} from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-labs',
  templateUrl: './sample-po-lookup-labs.component.html',
  providers: [SamplePoLookupService],
  standalone: false
})
export class SamplePoLookupLabsComponent implements OnInit {
  sampleFilterService = inject(SamplePoLookupService);

  additionalHelpTooltip: string;
  columns: Array<PoLookupColumn>;
  columnsName: Array<string>;
  customLiterals: PoLookupLiterals;
  event: string;
  fieldFormat: Array<string>;
  formatField: string;
  fieldLabel: string;
  fieldValue: string;
  filterService: PoLookupFilter | string;
  help: string;
  label: string;
  literals: string;
  lookup: any;
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  advancedFilters: string;
  customAdvancedFilters: Array<PoDynamicFormField>;
  size: string;
  spacing: PoTableColumnSpacing = PoTableColumnSpacing.Medium;

  public readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Id' },
    { value: 'name', label: 'Name' },
    { value: 'email', label: 'Email' }
  ];

  public readonly fieldLabelOptions: Array<PoSelectOption> = [
    { value: 'label', label: 'Label' },
    ...this.columnsOptions
  ];

  public readonly fieldValueOptions: Array<PoSelectOption> = [
    { value: 'value', label: 'Value' },
    ...this.columnsOptions
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'infiniteScroll', label: 'Infinite Scroll' },
    { value: 'multiple', label: 'Multiple' },
    { value: 'autoHeight', label: 'Auto Height' },
    { value: 'hideColumnsManager', label: 'Hide Columns Manager' },
    { value: 'textWrap', label: 'Text Wrap' },
    { value: 'virtualScroll', label: 'Virtual Sroll' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' }
  ];

  private readonly columnsDefinition = {
    id: <PoLookupColumn>{ property: 'id', label: 'Id' },
    name: <PoLookupColumn>{ property: 'name', label: 'Name' },
    email: <PoLookupColumn>{ property: 'email', label: 'Email' }
  };

  public readonly typeSpacing: Array<PoRadioGroupOption> = [
    { label: 'ExtraSmall', value: 'extraSmall' },
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit(): void {
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

  onFieldFormatChange(event) {
    try {
      this.fieldFormat = JSON.parse(event);
    } catch {
      this.fieldFormat = undefined;
    }
  }

  changeAdvancedFilters() {
    try {
      this.customAdvancedFilters = JSON.parse(this.advancedFilters);
    } catch {
      this.customAdvancedFilters = undefined;
    }
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.columnsName = ['id', 'name'];
    this.customLiterals = undefined;
    this.updateColumns();

    this.fieldLabel = 'name';
    this.fieldValue = 'id';
    this.fieldFormat = undefined;
    this.formatField = undefined;
    this.event = undefined;
    this.filterService = undefined;
    this.label = undefined;
    this.literals = undefined;
    this.help = undefined;
    this.lookup = undefined;
    this.placeholder = '';
    this.properties = [];
    this.fieldErrorMessage = '';
    this.customAdvancedFilters = [];
    this.size = 'medium';
  }

  updateColumns() {
    this.columns = [];

    this.columnsName.forEach(column => this.columns.push(this.columnsDefinition[column]));
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-labs"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,Qe,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,qe],encapsulation:2})}return a})();var $e=()=>({modalTitle:"Heroes available for mission"}),Te=(()=>{class a{service=h(D);notification=h(Y);hero;vehicle;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];advancedFilters=[{property:"nickname",divider:"Hero Informations",optional:!0,gridColumns:6,label:"Hero"},{property:"name",optional:!0,gridColumns:6}];fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?"with vehicle: "+this.vehicle:""}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero"]],standalone:!1,features:[_([D])],decls:10,vars:11,consts:[["f","ngForm"],[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],["name","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-columns","p-field-format","p-filter-service","p-hide-columns-manager","p-advanced-filters","p-literals"],["name","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){if(l&1){let p=J();i(0,"div",1),n(1,"po-info",2),t(),n(2,"hr"),i(3,"form",null,0)(5,"div",1)(6,"po-lookup",3),v("ngModelChange",function(m){return c(p),g(o.hero,m)||(o.hero=m),E(m)}),t(),i(7,"po-select",4),v("ngModelChange",function(m){return c(p),g(o.vehicle,m)||(o.vehicle=m),E(m)}),t()(),i(8,"div",1)(9,"po-button",5),x("p-click",function(){return c(p),E(o.startMission())}),t()()()}if(l&2){let p=ue(4);d(6),b("ngModel",o.hero),u("p-columns",o.columns)("p-field-format",o.fieldFormat)("p-filter-service",o.service)("p-hide-columns-manager",!0)("p-advanced-filters",o.advancedFilters)("p-literals",W(10,$e)),d(),b("ngModel",o.vehicle),u("p-options",o.vehicles),d(2),u("p-disabled",p.form.invalid||p.form.pending)}},dependencies:[I,T,V,A,$,z,q,H,N],encapsulation:2})}return a})();var Xe=a=>({"docs-sample-code-tabs":a}),De=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Hero"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-hero/sample-po-lookup-hero.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-info class="po-lg-6" p-label="New mission found" p-value="Objective: Stop an asteroid collision on Earth">
  </po-info>
</div>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-lookup
      class="po-md-6"
      name="hero"
      [(ngModel)]="hero"
      p-field-label="label"
      p-field-value="label"
      p-help="Select hero for mission"
      p-label="Hero"
      p-required
      [p-columns]="columns"
      [p-field-format]="fieldFormat"
      [p-filter-service]="service"
      [p-hide-columns-manager]="true"
      [p-advanced-filters]="advancedFilters"
      [p-literals]="{ 'modalTitle': 'Heroes available for mission' }"
    >
    </po-lookup>

    <po-select
      class="po-md-6"
      name="vehicle"
      [(ngModel)]="vehicle"
      p-help="Select a vehicle for the hero"
      p-label="Vehicle"
      p-placeholder="None"
      [p-options]="vehicles"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6"
      p-label="Start Mission"
      [p-disabled]="f.form.invalid || f.form.pending"
      (p-click)="startMission()"
    >
    </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-hero/sample-po-lookup-hero.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';

import { PoLookupColumn, PoSelectOption } from '@po-ui/ng-components';

import { PoNotificationService, PoDynamicFormField } from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-hero',
  templateUrl: './sample-po-lookup-hero.component.html',
  providers: [SamplePoLookupService],
  standalone: false
})
export class SamplePoLookupHeroComponent {
  service = inject(SamplePoLookupService);
  notification = inject(PoNotificationService);

  hero: string;
  vehicle: string;

  public readonly columns: Array<PoLookupColumn> = [
    { property: 'nickname', label: 'Hero' },
    { property: 'name', label: 'Name' }
  ];

  public readonly vehicles: Array<PoSelectOption> = [
    { label: 'Airplane', value: 'airplane' },
    { label: 'Boat', value: 'boat' },
    { label: 'Car', value: 'car' },
    { label: 'Helicopter', value: 'helicopter' },
    { label: 'Motorcycle', value: 'motorcycle' },
    { label: 'Rocket', value: 'rocket' },
    { label: 'Spaceship', value: 'spaceship' },
    { label: 'Submarine', value: 'submarine' },
    { label: 'Truck', value: 'truck' }
  ];

  advancedFilters: Array<PoDynamicFormField> = [
    { property: 'nickname', divider: 'Hero Informations', optional: true, gridColumns: 6, label: 'Hero' },
    { property: 'name', optional: true, gridColumns: 6 }
  ];

  fieldFormat(value) {
    return \`\${value.nickname} - \${value.label}\`;
  }

  startMission() {
    if (this.hero.length % 2 === 0) {
      this.notification.success(
        \`Mission started with hero \${this.hero} \${this.vehicle ? 'with vehicle: ' + this.vehicle : ''}.\`
      );
    } else {
      this.notification.error(\`Choose another hero because \${this.hero} is in other mission.\`);
    }

    this.hero = undefined;
    this.vehicle = undefined;
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-hero"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,Xe,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Te],encapsulation:2})}return a})();var Ze=()=>["nickname","label"],et=()=>({modalTitle:"Heroes available for mission"}),_e=(()=>{class a{service=h(D);notification=h(Y);formBuilder=h(ge);formMission;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,oe.required],vehicle:[null,oe.required]})}fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get("hero").value,l=this.formMission.get("vehicle").value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?"with vehicle: "+l:""}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset()}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero-reactive-form"]],standalone:!1,features:[_([D])],decls:9,vars:9,consts:[[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],[3,"formGroup"],["name","hero","formControlName","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"p-columns","p-field-format","p-filter-service","p-literals"],["name","vehicle","formControlName","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){l&1&&(i(0,"div",0),n(1,"po-info",1),t(),n(2,"hr"),i(3,"form",2)(4,"div",0),n(5,"po-lookup",3)(6,"po-select",4),t(),i(7,"div",0)(8,"po-button",5),x("p-click",function(){return o.startMission()}),t()()()),l&2&&(d(3),u("formGroup",o.formMission),d(2),u("p-columns",o.columns)("p-field-format",W(7,Ze))("p-filter-service",o.service)("p-literals",W(8,et)),d(),u("p-options",o.vehicles),d(2),u("p-disabled",o.formMission.invalid||o.formMission.pending))},dependencies:[I,T,V,Se,be,z,q,H,N],encapsulation:2})}return a})();var it=a=>({"docs-sample-code-tabs":a}),Ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero-reactive-form-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Hero Reactive Form"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-info class="po-lg-6" p-label="New mission found" p-value="Objective: Stop an asteroid collision on Earth">
  </po-info>
</div>

<hr />

<form [formGroup]="formMission">
  <div class="po-row">
    <po-lookup
      class="po-md-6"
      name="hero"
      formControlName="hero"
      p-field-label="label"
      p-field-value="label"
      p-help="Select hero for mission"
      p-label="Hero"
      p-required
      [p-columns]="columns"
      [p-field-format]="['nickname', 'label']"
      [p-filter-service]="service"
      [p-literals]="{ 'modalTitle': 'Heroes available for mission' }"
    >
    </po-lookup>

    <po-select
      class="po-md-6"
      name="vehicle"
      formControlName="vehicle"
      p-help="Select a vehicle for the hero"
      p-label="Vehicle"
      p-placeholder="None"
      [p-options]="vehicles"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6"
      p-label="Start Mission"
      [p-disabled]="formMission.invalid || formMission.pending"
      (p-click)="startMission()"
    >
    </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoLookupColumn, PoSelectOption } from '@po-ui/ng-components';

import { PoNotificationService } from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-hero-reactive-form',
  templateUrl: './sample-po-lookup-hero-reactive-form.component.html',
  providers: [SamplePoLookupService],
  standalone: false
})
export class SamplePoLookupHeroReactiveFormComponent implements OnInit {
  service = inject(SamplePoLookupService);
  notification = inject(PoNotificationService);
  private formBuilder = inject(UntypedFormBuilder);

  formMission: UntypedFormGroup;

  public readonly columns: Array<PoLookupColumn> = [
    { property: 'nickname', label: 'Hero' },
    { property: 'name', label: 'Name' }
  ];

  public readonly vehicles: Array<PoSelectOption> = [
    { label: 'Airplane', value: 'airplane' },
    { label: 'Boat', value: 'boat' },
    { label: 'Car', value: 'car' },
    { label: 'Helicopter', value: 'helicopter' },
    { label: 'Motorcycle', value: 'motorcycle' },
    { label: 'Rocket', value: 'rocket' },
    { label: 'Spaceship', value: 'spaceship' },
    { label: 'Submarine', value: 'submarine' },
    { label: 'Truck', value: 'truck' }
  ];

  ngOnInit(): void {
    this.formMission = this.formBuilder.group({
      hero: [null, Validators.required],
      vehicle: [null, Validators.required]
    });
  }

  fieldFormat(value) {
    return \`\${value.nickname} - \${value.label}\`;
  }

  startMission() {
    const heroName = this.formMission.get('hero').value;
    const heroVehicle = this.formMission.get('vehicle').value;

    if (heroName.length % 2 === 0) {
      this.notification.success(
        \`Mission started with hero \${heroName} \${heroVehicle ? 'with vehicle: ' + heroVehicle : ''}.\`
      );
    } else {
      this.notification.error(\`Choose another hero because \${heroName} is in other mission.\`);
    }

    this.formMission.reset();
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-hero-reactive-form"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,it,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,_e],encapsulation:2})}return a})();var le=(()=>{class a{http=h(j);baseUrl="https://swapi.dev/api";filmsUrl="https://swapi.dev/api/films/";getFilms(){return this.http.get(this.filmsUrl)}getFilteredItems({filter:r,page:l,filterParams:o}){let p={page:l.toString()};return r&&(p.search=r),this.http.get(`${this.baseUrl}/${o}`,{params:p}).pipe(te(s=>({items:s.results,hasNext:!!s.next})))}getObjectByValue(r,l){return this.http.get(`${this.baseUrl}/${l}/?search=${r}`).pipe(te(o=>o.results[0]))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=O({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function ot(a,ct){if(a&1&&(i(0,"div",0),n(1,"po-table",3),t()),a&2){let r=se();d(),u("p-columns",r.filmColumns)("p-items",r.filmItemsFiltered)("p-sort",!0)("p-hide-table-search",!1)}}var Oe=(()=>{class a{filterService=h(le);entity;filmItemsFiltered;filterParams="people";characterColumns=[{property:"name",label:"Name"},{property:"gender",label:"Gender"},{property:"height",label:"Height"},{property:"mass",label:"Mass"}];entities=[{label:"Character",value:"people"},{label:"Planet",value:"planets"},{label:"Starship",value:"starships"}];filmColumns=[{property:"episode_id",label:"Episode id"},{property:"title",label:"Title"},{property:"director",label:"Director"},{property:"producer",label:"Producer"},{property:"release_date",label:"Release date",type:"date"}];planetsColumns=[{property:"name",label:"Name"},{property:"diameter",label:"Diameter"},{property:"population",label:"Population"},{property:"climate",label:"Climate"}];starshipsColumns=[{property:"name",label:"Name"},{property:"passengers",label:"Passengers"},{property:"max_atmosphering_speed",label:"Max Speed"},{property:"consumables",label:"Consumables"}];filmItems;get entityColumns(){return this.getEntityColumns(this.filterParams)}get entityLabel(){return this.getLabelOfEntity(this.filterParams)}ngOnInit(){this.filterService.getFilms().subscribe(r=>{this.filmItems=r.results})}onSelected(r){this.filterService.getObjectByValue(r.name,this.filterParams).subscribe(l=>{this.filmItemsFiltered=this.filmItems.filter(o=>l?.films.includes(o.url))},l=>console.error(l))}getEntityColumns(r){switch(r){case"people":return this.characterColumns;case"planets":return this.planetsColumns;case"starships":return this.starshipsColumns}}getLabelOfEntity(r){switch(r){case"people":return"character";case"planets":return"planet";case"starships":return"starship"}}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-sw-films"]],standalone:!1,features:[_([le])],decls:7,vars:14,consts:[[1,"po-row"],["name","filterParams","p-label","Choose the entity of SW to search",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","entity","p-field-label","name","p-field-value","name",1,"po-md-12",3,"ngModelChange","p-selected","ngModel","p-help","p-label","p-columns","p-filter-params","p-filter-service","p-infinite-scroll"],[1,"po-sm-12",3,"p-columns","p-items","p-sort","p-hide-table-search"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"po-radio-group",1),v("ngModelChange",function(s){return g(o.filterParams,s)||(o.filterParams=s),s}),t()(),n(2,"hr"),i(3,"div",0)(4,"po-lookup",2),ce(5,"titlecase"),v("ngModelChange",function(s){return g(o.entity,s)||(o.entity=s),s}),x("p-selected",function(s){return o.onSelected(s)}),t()(),de(6,ot,2,4,"div",0)),l&2&&(d(),b("ngModel",o.filterParams),u("p-options",o.entities),d(3),ne("p-help","Select a ",o.entityLabel," to see the list of movies in which it participated"),ne("p-label","",Ee(5,12,o.entityLabel)," of Star Wars"),b("ngModel",o.entity),u("p-columns",o.entityColumns)("p-filter-params",o.filterParams)("p-filter-service",o.filterService)("p-infinite-scroll",!0),d(2),pe(o.filmItemsFiltered&&o.entity?6:-1))},dependencies:[T,A,X,q,Z,xe],encapsulation:2})}return a})();var lt=a=>({"docs-sample-code-tabs":a}),je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-sw-films-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Star Wars films"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-radio-group
    class="po-md-12"
    name="filterParams"
    [(ngModel)]="filterParams"
    p-label="Choose the entity of SW to search"
    [p-options]="entities"
  >
  </po-radio-group>
</div>

<hr />

<div class="po-row">
  <po-lookup
    class="po-md-12"
    name="entity"
    [(ngModel)]="entity"
    p-field-label="name"
    p-field-value="name"
    p-help="Select a { { entityLabel }} to see the list of movies in which it participated"
    p-label="{ { entityLabel | titlecase }} of Star Wars"
    [p-columns]="entityColumns"
    [p-filter-params]="filterParams"
    [p-filter-service]="filterService"
    [p-infinite-scroll]="true"
    (p-selected)="onSelected($event)"
  >
  </po-lookup>
</div>

@if (filmItemsFiltered && entity) {
  <div class="po-row">
    <po-table
      class="po-sm-12"
      [p-columns]="filmColumns"
      [p-items]="filmItemsFiltered"
      [p-sort]="true"
      [p-hide-table-search]="false"
    >
    </po-table>
  </div>
}
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { PoRadioGroupOption } from '@po-ui/ng-components';
import { SamplePoLookupSwFilmsService } from './sample-po-lookup-sw-films.service';

@Component({
  selector: 'sample-po-lookup-sw-films',
  templateUrl: './sample-po-lookup-sw-films.component.html',
  providers: [SamplePoLookupSwFilmsService],
  standalone: false
})
export class SamplePoLookupSwFilmsComponent implements OnInit {
  filterService = inject(SamplePoLookupSwFilmsService);

  entity;
  filmItemsFiltered;
  filterParams = 'people';

  readonly characterColumns = [
    { property: 'name', label: 'Name' },
    { property: 'gender', label: 'Gender' },
    { property: 'height', label: 'Height' },
    { property: 'mass', label: 'Mass' }
  ];

  readonly entities: Array<PoRadioGroupOption> = [
    { label: 'Character', value: 'people' },
    { label: 'Planet', value: 'planets' },
    { label: 'Starship', value: 'starships' }
  ];

  readonly filmColumns = [
    { property: 'episode_id', label: 'Episode id' },
    { property: 'title', label: 'Title' },
    { property: 'director', label: 'Director' },
    { property: 'producer', label: 'Producer' },
    { property: 'release_date', label: 'Release date', type: 'date' }
  ];

  readonly planetsColumns = [
    { property: 'name', label: 'Name' },
    { property: 'diameter', label: 'Diameter' },
    { property: 'population', label: 'Population' },
    { property: 'climate', label: 'Climate' }
  ];

  readonly starshipsColumns = [
    { property: 'name', label: 'Name' },
    { property: 'passengers', label: 'Passengers' },
    { property: 'max_atmosphering_speed', label: 'Max Speed' },
    { property: 'consumables', label: 'Consumables' }
  ];

  private filmItems;

  get entityColumns() {
    return this.getEntityColumns(this.filterParams);
  }

  get entityLabel() {
    return this.getLabelOfEntity(this.filterParams);
  }

  ngOnInit() {
    this.filterService.getFilms().subscribe((films: { results: Array<any> }) => {
      this.filmItems = films.results;
    });
  }

  onSelected(entity) {
    this.filterService.getObjectByValue(entity.name, this.filterParams).subscribe(
      result => {
        this.filmItemsFiltered = this.filmItems.filter(film => result?.films.includes(film.url));
      },
      err => console.error(err)
    );
  }

  private getEntityColumns(entity) {
    switch (entity) {
      case 'people':
        return this.characterColumns;
      case 'planets':
        return this.planetsColumns;
      case 'starships':
        return this.starshipsColumns;
    }
  }

  private getLabelOfEntity(entity): string {
    switch (entity) {
      case 'people':
        return 'character';
      case 'planets':
        return 'planet';
      case 'starships':
        return 'starship';
    }
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupResponseApi, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupSwFilmsService implements PoLookupFilter {
  private http = inject(HttpClient);

  private baseUrl = 'https://swapi.dev/api';
  private filmsUrl = 'https://swapi.dev/api/films/';

  getFilms() {
    return this.http.get(this.filmsUrl);
  }

  getFilteredItems({ filter, page, filterParams }: PoLookupFilteredItemsParams): Observable<PoLookupResponseApi> {
    const params = { page: page.toString() };

    if (filter) {
      params['search'] = filter;
    }

    return this.http.get(\`\${this.baseUrl}/\${filterParams}\`, { params }).pipe(
      map((response: { results: Array<any>; next: string }) => ({
        items: response.results,
        hasNext: !!response.next
      }))
    );
  }

  getObjectByValue(value: string, filterParams: any): Observable<any> {
    return this.http
      .get(\`\${this.baseUrl}/\${filterParams}/?search=\${value}\`)
      .pipe(map((response: { results: Array<any> }) => response.results[0]));
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-sw-films"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,lt,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Oe],encapsulation:2})}return a})();var Ve=(()=>{class a{http=h(j);getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(me("items"))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=O({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Ie=(()=>{class a{service=h(Ve);loading=!1;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:"value",label:"id"},{property:"label",label:"Name"}];changeOptions(r){this.loading=!0,this.service.getHeroes(r).subscribe(l=>{this.heroes=l},l=>console.error(l),()=>this.loading=!1)}openLink(r){window.open(`http://google.com/search?q=${r}`,"_blank")}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-multiple"]],standalone:!1,decls:4,vars:8,consts:[[1,"po-row"],["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-multiple"],[1,"po-md-6","po-mt-4"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-loading"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"po-lookup",1),v("ngModelChange",function(s){return g(o.multiLookup,s)||(o.multiLookup=s),s}),x("p-change",function(s){return o.changeOptions(s)}),t(),i(2,"po-container",2),n(3,"po-table",3),t()()),l&2&&(d(),b("ngModel",o.multiLookup),u("p-multiple",!0),d(2),u("p-columns",o.columns)("p-items",o.heroes)("p-height",220)("p-striped",!0)("p-hide-columns-manager",!0)("p-loading",o.loading))},dependencies:[T,A,K,q,Z],encapsulation:2})}return a})();var dt=a=>({"docs-sample-code-tabs":a}),ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-multiple-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Multiple"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-lookup
    class="po-md-6"
    name="lookup"
    [(ngModel)]="multiLookup"
    p-field-label="label"
    p-field-value="value"
    p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    p-label="Search a Hero"
    [p-multiple]="true"
    (p-change)="changeOptions($event)"
  ></po-lookup>
  <po-container class="po-md-6 po-mt-4">
    <po-table
      [p-columns]="columns"
      [p-items]="heroes"
      [p-height]="220"
      [p-striped]="true"
      [p-hide-columns-manager]="true"
      [p-loading]="loading"
    ></po-table>
  </po-container>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

import { SamplePoLookupMultipleService } from './sample-po-lookup-multiple.service';

@Component({
  selector: 'sample-po-lookup-multiple',
  templateUrl: './sample-po-lookup-multiple.component.html',
  styles: [],
  standalone: false
})
export class SamplePoLookupMultipleComponent {
  service = inject(SamplePoLookupMultipleService);

  loading: boolean = false;
  heroes: Array<any>;
  multiLookup: Array<any> = [1495831666871, 1405833068599];
  columns: Array<PoTableColumn> = [
    { property: 'value', label: 'id' },
    {
      property: 'label',
      label: 'Name'
    }
  ];

  changeOptions(event): void {
    this.loading = true;
    this.service.getHeroes(event).subscribe(
      result => {
        this.heroes = result;
      },
      err => console.error(err),
      () => (this.loading = false)
    );
  }

  openLink(value) {
    window.open(\`http://google.com/search?q=\${value}\`, '_blank');
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup-multiple/sample-po-lookup-multiple.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupMultipleService {
  http = inject(HttpClient);

  getHeroes(data): Observable<any> {
    const values = data?.length ? data.toString() : data;
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes?value=\${values}\`).pipe(pluck('items'));
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-multiple"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,dt,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Ie],encapsulation:2})}return a})();var He=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-doc"]],standalone:!1,decls:5372,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://angular.io/guide/form-validation#creating-asynchronous-validators"],["href","https://po-ui.io/guides/api"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","((value)","=>","string)"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","Array<object>"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),i(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),i(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),i(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),i(16,"h3",3),e(17,"Componente"),t(),i(18,"h4",4)(19,"code",5),e(20,"PoLookupComponent"),t()(),i(21,"div",2)(22,"p"),e(23,`Componente utilizado para abrir uma janela de busca com uma tabela que lista dados de um servi\xE7o. Nesta janela \xE9 poss\xEDvel buscar e
selecionar um ou mais registros que ser\xE3o enviados para o campo. O `),i(24,"code"),e(25,"po-lookup"),t(),e(26," permite que o usu\xE1rio digite um valor e pressione a tecla "),i(27,"em"),e(28,"TAB"),t(),e(29,` para
buscar um registro.`),t(),i(30,"blockquote")(31,"p"),e(32,`Caso o campo seja iniciado ou preenchido com um valor inexistente na busca, o mesmo ser\xE1 limpado.
No segundo caso ocorrer\xE1 ap\xF3s este perder o foco; ambos os casos o campo ficar\xE1 inv\xE1lido quando requerido.`),t()(),i(33,"blockquote")(34,"p"),e(35,`Enquanto o componente realiza a requisi\xE7\xE3o ao servidor, o componente ficar\xE1 desabilitado e com o status interno do
`),i(36,"a",6),e(37,"modelo"),t(),e(38," como "),i(39,"code"),e(40,"pending"),t(),e(41,"."),t()(),i(42,"p"),e(43,`Este componente n\xE3o \xE9 recomendado quando a busca dos dados possuir poucas informa\xE7\xF5es, para isso utilize outros componentes como o
`),i(44,"code"),e(45,"po-select"),t(),e(46," ou o "),i(47,"code"),e(48,"po-combo"),t(),e(49,`. Quando existe muitos dados o po-lookup por padr\xE3o traz apenas 10 itens na tabela e os demais s\xE3o carregados por demanda atrav\xE9s do
bot\xE3o 'Carregar mais resultados'. Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),i(50,"a",7),e(51,"Guia de implementa\xE7\xE3o das APIs TOTVS"),t(),e(52,"."),t(),i(53,"p"),e(54,"Importante:"),t(),i(55,"ul")(56,"li"),e(57,`Caso o po-lookup contenha o [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o ser\xE1 necess\xE1rio informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".`),i(58,"pre")(59,"code"),e(60,`<po-lookup
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-lookup>
`),t()()()(),i(61,"h4"),e(62,"Tokens customiz\xE1veis"),t(),i(63,"p"),e(64,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),i(65,"blockquote")(66,"p"),e(67,"Para maiores informa\xE7\xF5es, acesse o guia "),i(68,"a",8),e(69,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(70,"."),t()(),i(71,"table")(72,"thead")(73,"tr")(74,"th"),e(75,"Propriedade"),t(),i(76,"th"),e(77,"Descri\xE7\xE3o"),t(),i(78,"th"),e(79,"Valor Padr\xE3o"),t()()(),i(80,"tbody")(81,"tr")(82,"td")(83,"strong"),e(84,"Default Values"),t()(),n(85,"td")(86,"td"),t(),i(87,"tr")(88,"td")(89,"code"),e(90,"--font-family"),t()(),i(91,"td"),e(92,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(93,"td")(94,"code"),e(95,"var(--font-family-theme)"),t()()(),i(96,"tr")(97,"td")(98,"code"),e(99,"--font-size"),t()(),i(100,"td"),e(101,"Tamanho da fonte"),t(),i(102,"td")(103,"code"),e(104,"var(--font-size-default)"),t()()(),i(105,"tr")(106,"td")(107,"code"),e(108,"--text-color-placeholder"),t()(),i(109,"td"),e(110,"Cor do texto no placeholder"),t(),i(111,"td")(112,"code"),e(113,"var(--color-neutral-light-30)"),t()()(),i(114,"tr")(115,"td")(116,"code"),e(117,"--color"),t()(),i(118,"td"),e(119,"Cor principal do lookup"),t(),i(120,"td")(121,"code"),e(122,"var(--color-neutral-dark-70)"),t()()(),i(123,"tr")(124,"td")(125,"code"),e(126,"--border-radius"),t()(),i(127,"td"),e(128,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),t(),i(129,"td")(130,"code"),e(131,"var(--border-radius-md)"),t()()(),i(132,"tr")(133,"td")(134,"code"),e(135,"--background"),t()(),i(136,"td"),e(137,"Cor de background"),t(),i(138,"td")(139,"code"),e(140,"var(--color-neutral-light-05)"),t()()(),i(141,"tr")(142,"td")(143,"code"),e(144,"--text-color"),t()(),i(145,"td"),e(146,"Cor do texto"),t(),i(147,"td")(148,"code"),e(149,"var(--color-neutral-dark-90)"),t()()(),i(150,"tr")(151,"td")(152,"code"),e(153,"--color-clear"),t()(),i(154,"td"),e(155,"Cor principal do icone clear"),t(),i(156,"td")(157,"code"),e(158,"var(--color-action-default)"),t()()(),i(159,"tr")(160,"td")(161,"strong"),e(162,"Icon"),t()(),n(163,"td")(164,"td"),t(),i(165,"tr")(166,"td")(167,"code"),e(168,"--color-icon"),t()(),i(169,"td"),e(170,"Cor principal do icone pesquisar"),t(),i(171,"td")(172,"code"),e(173,"var(--color-action-default)"),t()()(),i(174,"tr")(175,"td")(176,"strong"),e(177,"Hover"),t()(),n(178,"td")(179,"td"),t(),i(180,"tr")(181,"td")(182,"code"),e(183,"--color-hover"),t()(),i(184,"td"),e(185,"Cor principal no estado hover"),t(),i(186,"td")(187,"code"),e(188,"var(--color-action-hover)"),t()()(),i(189,"tr")(190,"td")(191,"code"),e(192,"--background-hover"),t()(),i(193,"td"),e(194,"Cor de background no estado hover"),t(),i(195,"td")(196,"code"),e(197,"var(--color-brand-01-lightest)"),t()()(),i(198,"tr")(199,"td")(200,"strong"),e(201,"Focused"),t()(),n(202,"td")(203,"td"),t(),i(204,"tr")(205,"td")(206,"code"),e(207,"--color-focused"),t()(),i(208,"td"),e(209,"Cor principal no estado de focus"),t(),i(210,"td")(211,"code"),e(212,"var(--color-action-default)"),t()()(),i(213,"tr")(214,"td")(215,"code"),e(216,"--outline-color-focused"),t()(),i(217,"td"),e(218,"Cor do outline do estado de focus"),t(),i(219,"td")(220,"code"),e(221,"var(--color-action-focus)"),t()()(),i(222,"tr")(223,"td")(224,"strong"),e(225,"Disabled"),t()(),n(226,"td")(227,"td"),t(),i(228,"tr")(229,"td")(230,"code"),e(231,"--color-disabled"),t()(),i(232,"td"),e(233,"Cor principal no estado disabled"),t(),i(234,"td")(235,"code"),e(236,"var(--color-action-disabled)"),t()()(),i(237,"tr")(238,"td")(239,"code"),e(240,"--background-disabled"),t()(),i(241,"td"),e(242,"Cor de background no estado disabled"),t(),i(243,"td")(244,"code"),e(245,"var(--color-neutral-light-20)"),t()()(),i(246,"tr")(247,"td")(248,"code"),e(249,"--text-color-disabled"),t()(),i(250,"td"),e(251,"Cor do texto quando campo est\xE1 desabilitado"),t(),i(252,"td")(253,"code"),e(254,"var(--color-action-disabled)"),t()()(),i(255,"tr")(256,"td")(257,"strong"),e(258,"Error"),t()(),n(259,"td")(260,"td"),t(),i(261,"tr")(262,"td")(263,"code"),e(264,"--color-error"),t()(),i(265,"td"),e(266,"Cor de background no estado de requerido"),t(),i(267,"td")(268,"code"),e(269,"var(--color-feedback-negative-base)"),t()()()()()(),i(270,"div",9)(271,"h4",10),e(272,"Seletor"),t(),i(273,"pre",11),e(274,`<po-lookup
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-advanced-filters="Array<PoLookupAdvancedFilter>"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-height="boolean"
    (p-change)="EventEmitter"
    (p-change-visible-columns)="EventEmitter"
    p-clean="boolean"
    (p-restore-column-manager)="EventEmitter"
    p-columns="Array<PoLookupColumn>"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-format="((value) => string) | Array<string>"
    p-field-label="string"
    p-field-value="string"
    p-filter-params="any"
    p-filter-service="string | PoLookupFilter"
    p-help="string"
    p-hide-columns-manager="boolean"
    p-infinite-scroll="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-literals="PoLookupLiterals"
    p-multiple="boolean"
    name="string"
    p-no-autocomplete="boolean"
    (p-error)="EventEmitter"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    (p-selected)="EventEmitter"
    p-show-required="boolean"
    p-size="string"
    p-spacing="string"
    p-text-wrap="boolean"
    p-virtual-scroll="boolean" >
</po-lookup>
`),t()(),i(275,"h4",12),e(276,"Propriedades"),t(),i(277,"table",13)(278,"tr",14)(279,"th",15),e(280,"Nome"),t(),i(281,"th",15),e(282,"Tipo"),t(),i(283,"th",15),e(284,"Padr\xE3o"),t(),i(285,"th",15),e(286,"Descri\xE7\xE3o"),t()(),i(287,"tr",16)(288,"td",17)(289,"div",18)(290,"span",19),e(291," (p-additional-help)"),n(292,"br"),t()(),i(293,"div",20),e(294,"Deprecated"),t()(),i(295,"td",21)(296,"code",22),e(297,"EventEmitter"),t()(),i(298,"td",23),e(299,"-"),t(),i(300,"td",24)(301,"em")(302,"strong"),e(303,"(opcional)"),t()(),i(304,"p"),e(305,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),i(306,"code"),e(307,"p-help"),t(),e(308,"."),t(),i(309,"blockquote")(310,"p"),e(311,"Essa propriedade est\xE1 "),i(312,"strong"),e(313,"depreciada"),t(),e(314," e ser\xE1 removida na vers\xE3o "),i(315,"code"),e(316,"23.x.x"),t(),e(317,". Recomendamos utilizar a propriedade "),i(318,"code"),e(319,"p-helper"),t(),e(320," que oferece mais recursos e flexibilidade."),t()()()(),i(321,"tr",16)(322,"td",17)(323,"div",25)(324,"span",26),e(325," p-additional-help-tooltip"),n(326,"br"),t()(),i(327,"div",20),e(328,"Deprecated"),t()(),i(329,"td",21)(330,"code",27),e(331,"string"),t()(),i(332,"td",23),e(333,"-"),t(),i(334,"td",24)(335,"em")(336,"strong"),e(337,"(opcional)"),t()(),i(338,"p"),e(339,"Exibe um \xEDcone de ajuda adicional ao "),i(340,"code"),e(341,"p-help"),t(),e(342,`, com o texto desta propriedade no tooltip.
Se o evento `),i(343,"code"),e(344,"p-additional-help"),t(),e(345,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),i(346,"strong"),e(347,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(348,"blockquote")(349,"p"),e(350,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),i(351,"blockquote")(352,"p"),e(353,"Essa propriedade est\xE1 "),i(354,"strong"),e(355,"depreciada"),t(),e(356," e ser\xE1 removida na vers\xE3o "),i(357,"code"),e(358,"23.x.x"),t(),e(359,". Recomendamos utilizar a propriedade "),i(360,"code"),e(361,"p-helper"),t(),e(362," que oferece mais recursos e flexibilidade."),t()()()(),i(363,"tr",16)(364,"td",17)(365,"div",25)(366,"span",26),e(367," p-advanced-filters"),n(368,"br"),t()()(),i(369,"td",21)(370,"code",28),e(371,"Array<PoLookupAdvancedFilter>"),t()(),i(372,"td",23),e(373,"-"),t(),i(374,"td",24)(375,"em")(376,"strong"),e(377,"(opcional)"),t()(),i(378,"p"),e(379,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),i(380,"blockquote")(381,"p"),e(382,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),i(383,"p"),e(384,"Exemplo de URL com busca avan\xE7ada:"),t(),i(385,"pre")(386,"code"),e(387,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro
`),t()(),i(388,"p"),e(389,`Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula.
Exemplo:`),t(),i(390,"pre")(391,"code"),e(392,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan
`),t()()()(),i(393,"tr",16)(394,"td",17)(395,"div",25)(396,"span",26),e(397," p-append-in-body"),n(398,"br"),t()()(),i(399,"td",21)(400,"code",29),e(401,"boolean"),t()(),i(402,"td",23)(403,"p")(404,"code"),e(405,"false"),t()()(),i(406,"td",24)(407,"em")(408,"strong"),e(409,"(opcional)"),t()(),i(410,"p"),e(411,"Define que o tooltip ("),i(412,"code"),e(413,"p-additional-help-tooltip"),t(),e(414," e/ou "),i(415,"code"),e(416,"p-error-limit"),t(),e(417,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),i(418,"blockquote")(419,"p"),e(420,"Quando utilizado com "),i(421,"code"),e(422,"p-additional-help-tooltip"),t(),e(423,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),i(424,"tr",16)(425,"td",17)(426,"div",25)(427,"span",26),e(428," p-auto-focus"),n(429,"br"),t()()(),i(430,"td",21)(431,"code",29),e(432,"boolean"),t()(),i(433,"td",23)(434,"p")(435,"code"),e(436,"false"),t()()(),i(437,"td",24)(438,"em")(439,"strong"),e(440,"(opcional)"),t()(),i(441,"p"),e(442,"Aplica foco no elemento ao ser iniciado."),t(),i(443,"blockquote")(444,"p"),e(445,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),i(446,"tr",16)(447,"td",17)(448,"div",25)(449,"span",26),e(450," p-auto-height"),n(451,"br"),t()()(),i(452,"td",21)(453,"code",29),e(454,"boolean"),t()(),i(455,"td",23)(456,"p")(457,"code"),e(458,"false"),t()()(),i(459,"td",24)(460,"em")(461,"strong"),e(462,"(opcional)"),t()(),i(463,"p"),e(464,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),t()()(),i(465,"tr",16)(466,"td",17)(467,"div",18)(468,"span",19),e(469," (p-change)"),n(470,"br"),t()()(),i(471,"td",21)(472,"code",22),e(473,"EventEmitter"),t()(),i(474,"td",23),e(475,"-"),t(),i(476,"td",24)(477,"em")(478,"strong"),e(479,"(opcional)"),t()(),i(480,"p"),e(481,"Evento que ser\xE1 disparado ao alterar o model. Por par\xE2metro ser\xE1 passado o novo valor."),t()()(),i(482,"tr",16)(483,"td",17)(484,"div",18)(485,"span",19),e(486," (p-change-visible-columns)"),n(487,"br"),t()()(),i(488,"td",21)(489,"code",22),e(490,"EventEmitter"),t()(),i(491,"td",23),e(492,"-"),t(),i(493,"td",24)(494,"em")(495,"strong"),e(496,"(opcional)"),t()(),i(497,"p"),e(498,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),i(499,"p"),e(500,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t()()(),i(501,"tr",16)(502,"td",17)(503,"div",25)(504,"span",26),e(505," p-clean"),n(506,"br"),t()()(),i(507,"td",21)(508,"code",29),e(509,"boolean"),t()(),i(510,"td",23),e(511,"-"),t(),i(512,"td",24)(513,"p"),e(514,"Exibe um \xEDcone que permite limpar o campo."),t()()(),i(515,"tr",16)(516,"td",17)(517,"div",18)(518,"span",19),e(519," (p-restore-column-manager)"),n(520,"br"),t()()(),i(521,"td",21)(522,"code",22),e(523,"EventEmitter"),t()(),i(524,"td",23),e(525,"-"),t(),i(526,"td",24)(527,"em")(528,"strong"),e(529,"(opcional)"),t()(),i(530,"p"),e(531,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),i(532,"p"),e(533,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t()()(),i(534,"tr",16)(535,"td",17)(536,"div",25)(537,"span",26),e(538," p-columns"),n(539,"br"),t()()(),i(540,"td",21)(541,"code",30),e(542,"Array<PoLookupColumn>"),t()(),i(543,"td",23),e(544,"-"),t(),i(545,"td",24)(546,"em")(547,"strong"),e(548,"(opcional)"),t()(),i(549,"p"),e(550,`Lista das colunas da tabela.
Essa propriedade deve receber um array de objetos que implementam a interface PoLookupColumn.`),t()()(),i(551,"tr",16)(552,"td",17)(553,"div",25)(554,"span",26),e(555," p-disabled"),n(556,"br"),t()()(),i(557,"td",21)(558,"code",29),e(559,"boolean"),t()(),i(560,"td",23)(561,"p"),e(562,"false"),t()(),i(563,"td",24)(564,"em")(565,"strong"),e(566,"(opcional)"),t()(),i(567,"p"),e(568,"Indica que o campo ser\xE1 desabilitado."),t()()(),i(569,"tr",16)(570,"td",17)(571,"div",25)(572,"span",26),e(573," p-error-limit"),n(574,"br"),t()()(),i(575,"td",21)(576,"code",29),e(577,"boolean"),t()(),i(578,"td",23)(579,"p")(580,"code"),e(581,"false"),t()()(),i(582,"td",24)(583,"em")(584,"strong"),e(585,"(opcional)"),t()(),i(586,"p"),e(587,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(588,"blockquote")(589,"p"),e(590,"Caso essa propriedade seja definida como "),i(591,"code"),e(592,"true"),t(),e(593,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),i(594,"tr",16)(595,"td",17)(596,"div",25)(597,"span",26),e(598," p-field-error-message"),n(599,"br"),t()()(),i(600,"td",21)(601,"code",27),e(602,"string"),t()(),i(603,"td",23),e(604,"-"),t(),i(605,"td",24)(606,"em")(607,"strong"),e(608,"(opcional)"),t()(),i(609,"p"),e(610,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),i(611,"blockquote")(612,"p"),e(613,"Necess\xE1rio que a propriedade "),i(614,"code"),e(615,"p-required"),t(),e(616," esteja habilitada."),t()()()(),i(617,"tr",16)(618,"td",17)(619,"div",25)(620,"span",26),e(621," p-field-format"),n(622,"br"),t()()(),i(623,"td",21)(624,"code",31),e(625,"((value) => string) "),t(),i(626,"code",32),e(627," Array<string>"),t()(),i(628,"td",23),e(629,"-"),t(),i(630,"td",24)(631,"em")(632,"strong"),e(633,"(opcional)"),t()(),i(634,"p"),e(635,"Formato de exibi\xE7\xE3o do campo."),t(),i(636,"p"),e(637,"Recebe uma fun\xE7\xE3o que deve retornar uma "),i(638,"em"),e(639,"string"),t(),e(640," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),i(641,"pre")(642,"code"),e(643,"fieldFormat(obj) {\n  return `${obj.id} - ${obj.name}`;\n}\n"),t()(),i(644,"blockquote")(645,"p"),e(646,"Esta propriedade sobrep\xF5e o valor da propriedade "),i(647,"code"),e(648,"p-field-label"),t(),e(649," na descri\xE7\xE3o do campo."),t()(),i(650,"p"),e(651,"Pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo, Por exemplo:"),t(),i(652,"pre")(653,"code"),e(654,`<po-lookup
 ...
 [p-field-format]="['id','nickname']"
 ...
>

Objeto retornado:
  {
     id:123,
     name: 'Kakaroto',
     nickname: 'Goku',
  }
Apresenta\xE7\xE3o no campo: 123 - Goku
`),t()(),i(655,"blockquote")(656,"p"),e(657,"Ser\xE1 utilizado "),i(658,"code"),e(659,"-"),t(),e(660," como separador."),t()()()(),i(661,"tr",16)(662,"td",17)(663,"div",25)(664,"span",26),e(665," p-field-label"),n(666,"br"),t()()(),i(667,"td",21)(668,"code",27),e(669,"string"),t()(),i(670,"td",23),e(671,"-"),t(),i(672,"td",24)(673,"p"),e(674,"Indica a coluna que ser\xE1 utilizada como descri\xE7\xE3o do campo e como filtro dentro da janela."),t()()(),i(675,"tr",16)(676,"td",17)(677,"div",25)(678,"span",26),e(679," p-field-value"),n(680,"br"),t()()(),i(681,"td",21)(682,"code",27),e(683,"string"),t()(),i(684,"td",23),e(685,"-"),t(),i(686,"td",24)(687,"p"),e(688,"Indica a coluna que ser\xE1 utilizada como valor do campo."),t(),i(689,"blockquote")(690,"p"),e(691,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),t()()()(),i(692,"tr",16)(693,"td",17)(694,"div",25)(695,"span",26),e(696," p-filter-params"),n(697,"br"),t()()(),i(698,"td",21)(699,"code",33),e(700,"any"),t()(),i(701,"td",23),e(702,"-"),t(),i(703,"td",24)(704,"em")(705,"strong"),e(706,"(opcional)"),t()(),i(707,"p"),e(708,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),i(709,"code"),e(710,"PoLookupFilter"),t(),e(711,"."),t()()(),i(712,"tr",16)(713,"td",17)(714,"div",25)(715,"span",26),e(716," p-filter-service"),n(717,"br"),t()()(),i(718,"td",21)(719,"code",27),e(720,"string "),t(),i(721,"code",34),e(722," PoLookupFilter"),t()(),i(723,"td",23),e(724,"-"),t(),i(725,"td",24)(726,"p"),e(727,`Servi\xE7o respons\xE1vel por buscar os dados da tabela na janela. Pode ser informado um servi\xE7o que implemente a interface
`),i(728,"code"),e(729,"PoLookupFilter"),t(),e(730," ou uma URL."),t(),i(731,"p"),e(732,"Quando utilizada uma URL de um servi\xE7o, ser\xE1 concatenada nesta URL o valor que deseja-se filtrar, por exemplo:"),t(),i(733,"pre")(734,"code"),e(735,`url + ?page=1&pageSize=20&filter=Peter
`),t()(),i(736,"p"),e(737,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),i(738,"code"),e(739,"order"),t(),e(740,", por exemplo:"),t(),i(741,"ul")(742,"li")(743,"p"),e(744,"Coluna decrescente:"),t(),i(745,"pre")(746,"code"),e(747,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),t()()(),i(748,"li")(749,"p"),e(750,"Coluna ascendente:"),t(),i(751,"pre")(752,"code"),e(753,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),t()()()(),i(754,"p"),e(755,"Se for definido a propriedade "),i(756,"code"),e(757,"p-filter-params"),t(),e(758,`, o mesmo tamb\xE9m ser\xE1 concatenado. Por exemplo, para o
par\xE2metro `),i(759,"code"),e(760,"{ age: 23 }"),t(),e(761," a URL ficaria:"),t(),i(762,"pre")(763,"code"),e(764,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),t()(),i(765,"p"),e(766,"Ao iniciar o campo com valor, os registros ser\xE3o buscados da seguinte forma:"),t(),i(767,"pre")(768,"code"),e(769,`model = 1234;

GET url/1234
`),t()(),i(770,"p"),e(771,"Caso estiver com m\xFAltipla sele\xE7\xE3o habilitada:"),t(),i(772,"pre")(773,"code"),e(774,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),t()(),i(775,"blockquote")(776,"p"),e(777,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(778,"a",7),e(779,"API do PO UI"),t(),e(780,` e utiliza os valores
definidos nas propriedades `),i(781,"code"),e(782,"p-field-label"),t(),e(783," e "),i(784,"code"),e(785,"p-field-value"),t(),e(786," para a constru\xE7\xE3o do "),i(787,"code"),e(788,"po-lookup"),t(),e(789,"."),t()(),i(790,"p"),e(791,"Caso o usu\xE1rio digite um valor e pressione a tecla "),i(792,"em"),e(793,"TAB"),t(),e(794,` para realizar a busca de um registro espec\xEDfico, o valor que se
deseja filtrar ser\xE1 codificado utilizando a fun\xE7\xE3o `),i(795,"a",35),e(796,"encodeURIComponent"),t(),e(797,`
e concatenado na URL da seguinte forma:`),t(),i(798,"pre")(799,"code"),e(800,`url/valor%20que%20se%20deseja%20filtrar
`),t()(),i(801,"blockquote")(802,"p"),e(803,"Quando informado um servi\xE7o que implemente a interface "),i(804,"code"),e(805,"PoLookupFilter"),t(),e(806," o tratamento de encoding do valor a ser filtrado ficar\xE1 a cargo do desenvolvedor."),t()()()(),i(807,"tr",16)(808,"td",17)(809,"div",25)(810,"span",26),e(811," p-help"),n(812,"br"),t()()(),i(813,"td",21)(814,"code",27),e(815,"string"),t()(),i(816,"td",23),e(817,"-"),t(),i(818,"td",24)(819,"em")(820,"strong"),e(821,"(opcional)"),t()(),i(822,"p"),e(823,"Texto de apoio do campo."),t()()(),i(824,"tr",16)(825,"td",17)(826,"div",25)(827,"span",26),e(828," p-hide-columns-manager"),n(829,"br"),t()()(),i(830,"td",21)(831,"code",29),e(832,"boolean"),t()(),i(833,"td",23)(834,"p")(835,"code"),e(836,"false"),t()()(),i(837,"td",24)(838,"em")(839,"strong"),e(840,"(opcional)"),t()(),i(841,"p"),e(842,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),t()()(),i(843,"tr",16)(844,"td",17)(845,"div",25)(846,"span",26),e(847," p-infinite-scroll"),n(848,"br"),t()()(),i(849,"td",21)(850,"code",29),e(851,"boolean"),t()(),i(852,"td",23)(853,"p")(854,"code"),e(855,"false"),t()()(),i(856,"td",24)(857,"em")(858,"strong"),e(859,"(opcional)"),t()(),i(860,"p"),e(861,"Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta."),t()()(),i(862,"tr",16)(863,"td",17)(864,"div",18)(865,"span",19),e(866," (p-keydown)"),n(867,"br"),t()()(),i(868,"td",21)(869,"code",22),e(870,"EventEmitter"),t()(),i(871,"td",23),e(872,"-"),t(),i(873,"td",24)(874,"em")(875,"strong"),e(876,"(opcional)"),t()(),i(877,"p"),e(878,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),i(879,"code"),e(880,"KeyboardEvent"),t(),e(881," com informa\xE7\xF5es sobre a tecla."),t()()(),i(882,"tr",16)(883,"td",17)(884,"div",25)(885,"span",26),e(886," p-label"),n(887,"br"),t()()(),i(888,"td",21)(889,"code",27),e(890,"string"),t()(),i(891,"td",23),e(892,"-"),t(),i(893,"td",24)(894,"em")(895,"strong"),e(896,"(opcional)"),t()(),i(897,"p"),e(898,"Label do campo."),t(),i(899,"blockquote")(900,"p"),e(901,`Quando utilizar esta propriedade o seu valor ser\xE1 utilizado como t\xEDtulo da modal do componente caso n\xE3o tenha
sido definido um `),i(902,"code"),e(903,"modalTitle"),t(),e(904," na propriedade "),i(905,"code"),e(906,"p-literals"),t(),e(907,"."),t()()()(),i(908,"tr",16)(909,"td",17)(910,"div",25)(911,"span",26),e(912," p-label-text-wrap"),n(913,"br"),t()()(),i(914,"td",21)(915,"code",29),e(916,"boolean"),t()(),i(917,"td",23)(918,"p")(919,"code"),e(920,"false"),t()()(),i(921,"td",24)(922,"em")(923,"strong"),e(924,"(opcional)"),t()(),i(925,"p"),e(926,"Habilita a quebra autom\xE1tica do texto da propriedade "),i(927,"code"),e(928,"p-label"),t(),e(929,". Quando "),i(930,"code"),e(931,"p-label-text-wrap"),t(),e(932,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),i(933,"tr",16)(934,"td",17)(935,"div",25)(936,"span",26),e(937," p-literals"),n(938,"br"),t()()(),i(939,"td",21)(940,"code",36),e(941,"PoLookupLiterals"),t()(),i(942,"td",23),e(943,"-"),t(),i(944,"td",24)(945,"p"),e(946,"Objeto com as literais usadas no "),i(947,"code"),e(948,"po-lookup"),t(),e(949,"."),t(),i(950,"p"),e(951,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),i(952,"pre")(953,"code"),e(954,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select',
  modalSecondaryActionLabel: 'Cancel',
  modalPlaceholder: 'Search Value',
  modalTableNoColumns: 'No columns',
  modalTableNoData: 'No data',
  modalTableLoadingData: 'Loading data',
  modalTableLoadMoreData: 'Load more',
  modalTitle: 'Select a user',
  modalAdvancedSearch: 'Advanced search',
  modalAdvancedSearchTitle: 'Advanced search',
  modalAdvancedSearchPrimaryActionLabel: 'Filter',
  modalAdvancedSearchSecondaryActionLabel: 'Return',
  modalDisclaimerGroupTitle: 'Presenting results filtered by:'
};
`),t()(),i(955,"p"),e(956,"Ou passando apenas as literais que deseja customizar:"),t(),i(957,"pre")(958,"code"),e(959,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select'
};
`),t()(),i(960,"p"),e(961,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),i(962,"pre")(963,"code"),e(964,`<po-lookup
  [p-literals]="customLiterals">
</po-lookup>
`),t()(),i(965,"blockquote")(966,"p"),e(967,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),i(968,"a",37)(969,"code"),e(970,"PoI18nService"),t()(),e(971," ou do browser."),t()()()(),i(972,"tr",16)(973,"td",17)(974,"div",25)(975,"span",26),e(976," p-multiple"),n(977,"br"),t()()(),i(978,"td",21)(979,"code",29),e(980,"boolean"),t()(),i(981,"td",23)(982,"p")(983,"code"),e(984,"false"),t()()(),i(985,"td",24)(986,"em")(987,"strong"),e(988,"(opcional)"),t()(),i(989,"p"),e(990,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(991,"blockquote")(992,"p"),e(993,"Quando habilitado o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),i(994,"code"),e(995,"[ 12345, 67890 ]"),t()()()()(),i(996,"tr",16)(997,"td",17)(998,"div",25)(999,"span",26),e(1e3," name"),n(1001,"br"),t()()(),i(1002,"td",21)(1003,"code",27),e(1004,"string"),t()(),i(1005,"td",23),e(1006,"-"),t(),i(1007,"td",24)(1008,"p"),e(1009,"Nome e Id do componente."),t()()(),i(1010,"tr",16)(1011,"td",17)(1012,"div",25)(1013,"span",26),e(1014," p-no-autocomplete"),n(1015,"br"),t()()(),i(1016,"td",21)(1017,"code",29),e(1018,"boolean"),t()(),i(1019,"td",23)(1020,"p")(1021,"code"),e(1022,"false"),t()()(),i(1023,"td",24)(1024,"em")(1025,"strong"),e(1026,"(opcional)"),t()(),i(1027,"p"),e(1028,"Define a propriedade nativa "),i(1029,"code"),e(1030,"autocomplete"),t(),e(1031," do campo como "),i(1032,"code"),e(1033,"off"),t(),e(1034,"."),t()()(),i(1035,"tr",16)(1036,"td",17)(1037,"div",18)(1038,"span",19),e(1039," (p-error)"),n(1040,"br"),t()()(),i(1041,"td",21)(1042,"code",22),e(1043,"EventEmitter"),t()(),i(1044,"td",23),e(1045,"-"),t(),i(1046,"td",24)(1047,"p"),e(1048,`Evento ser\xE1 disparado quando ocorrer algum erro na requisi\xE7\xE3o de busca do item.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),t()()(),i(1049,"tr",16)(1050,"td",17)(1051,"div",25)(1052,"span",26),e(1053," p-optional"),n(1054,"br"),t()()(),i(1055,"td",21)(1056,"code",29),e(1057,"boolean"),t()(),i(1058,"td",23)(1059,"p")(1060,"code"),e(1061,"false"),t()()(),i(1062,"td",24)(1063,"em")(1064,"strong"),e(1065,"(opcional)"),t()(),i(1066,"p"),e(1067,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),i(1068,"blockquote")(1069,"p"),e(1070,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(1071,"ul")(1072,"li"),e(1073,"O campo conter "),i(1074,"code"),e(1075,"p-required"),t(),e(1076,";"),t(),i(1077,"li"),e(1078,"N\xE3o possuir "),i(1079,"code"),e(1080,"p-help"),t(),e(1081," e/ou "),i(1082,"code"),e(1083,"p-label"),t(),e(1084,"."),t()()()(),i(1085,"tr",16)(1086,"td",17)(1087,"div",25)(1088,"span",26),e(1089," p-placeholder"),n(1090,"br"),t()()(),i(1091,"td",21)(1092,"code",27),e(1093,"string"),t()(),i(1094,"td",23),e(1095,"-"),t(),i(1096,"td",24)(1097,"p"),e(1098,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),i(1099,"tr",16)(1100,"td",17)(1101,"div",25)(1102,"span",26),e(1103," p-helper"),n(1104,"br"),t()()(),i(1105,"td",21)(1106,"code",38),e(1107,"PoHelperOptions "),t(),i(1108,"code",27),e(1109," string"),t()(),i(1110,"td",23),e(1111,"-"),t(),i(1112,"td",24)(1113,"em")(1114,"strong"),e(1115,"(opcional)"),t()(),i(1116,"p"),e(1117,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),i(1118,"blockquote")(1119,"p"),e(1120,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),i(1121,"code"),e(1122,"p-additional-help-tooltip"),t(),e(1123," e "),i(1124,"code"),e(1125,"p-additional-help"),t(),e(1126,") ser\xE1 ignorado."),t()()()(),i(1127,"tr",16)(1128,"td",17)(1129,"div",25)(1130,"span",26),e(1131," p-required"),n(1132,"br"),t()()(),i(1133,"td",21)(1134,"code",29),e(1135,"boolean"),t()(),i(1136,"td",23)(1137,"p")(1138,"code"),e(1139,"false"),t()()(),i(1140,"td",24)(1141,"em")(1142,"strong"),e(1143,"(opcional)"),t()(),i(1144,"p"),e(1145,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),i(1146,"blockquote")(1147,"p"),e(1148,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),i(1149,"code"),e(1150,"(p-disabled)"),t(),e(1151,"."),t()()()(),i(1152,"tr",16)(1153,"td",17)(1154,"div",18)(1155,"span",19),e(1156," (p-selected)"),n(1157,"br"),t()()(),i(1158,"td",21)(1159,"code",22),e(1160,"EventEmitter"),t()(),i(1161,"td",23),e(1162,"-"),t(),i(1163,"td",24)(1164,"em")(1165,"strong"),e(1166,"(opcional)"),t()(),i(1167,"p"),e(1168,`Evento ser\xE1 disparado quando ocorrer alguma sele\xE7\xE3o.
Ser\xE1 passado por par\xE2metro o objeto com o valor selecionado.`),t()()(),i(1169,"tr",16)(1170,"td",17)(1171,"div",25)(1172,"span",26),e(1173," p-show-required"),n(1174,"br"),t()()(),i(1175,"td",21)(1176,"code",29),e(1177,"boolean"),t()(),i(1178,"td",23),e(1179,"-"),t(),i(1180,"td",24)(1181,"p"),e(1182,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE9 exibida."),t(),i(1183,"blockquote")(1184,"p"),e(1185,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(1186,"ul")(1187,"li"),e(1188,"N\xE3o possuir "),i(1189,"code"),e(1190,"p-help"),t(),e(1191," e/ou "),i(1192,"code"),e(1193,"p-label"),t(),e(1194,"."),t()()()(),i(1195,"tr",16)(1196,"td",17)(1197,"div",25)(1198,"span",26),e(1199," p-size"),n(1200,"br"),t()()(),i(1201,"td",21)(1202,"code",27),e(1203,"string"),t()(),i(1204,"td",23)(1205,"p")(1206,"code"),e(1207,"medium"),t()()(),i(1208,"td",24)(1209,"em")(1210,"strong"),e(1211,"(opcional)"),t()(),i(1212,"p"),e(1213,"Define o tamanho do componente:"),t(),i(1214,"ul")(1215,"li")(1216,"code"),e(1217,"small"),t(),e(1218,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(1219,"li")(1220,"code"),e(1221,"medium"),t(),e(1222,": altura do input como 44px."),t()(),i(1223,"blockquote")(1224,"p"),e(1225,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(1226,"code"),e(1227,"medium"),t(),e(1228,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(1229,"a",39),e(1230,"po-theme"),t(),e(1231,"."),t()()()(),i(1232,"tr",16)(1233,"td",17)(1234,"div",25)(1235,"span",26),e(1236," p-spacing"),n(1237,"br"),t()()(),i(1238,"td",21)(1239,"code",27),e(1240,"string"),t()(),i(1241,"td",23)(1242,"p")(1243,"code"),e(1244,"medium"),t()()(),i(1245,"td",24)(1246,"em")(1247,"strong"),e(1248,"(opcional)"),t()(),i(1249,"p"),e(1250,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table dentro do modal. Os
valores permitidos s\xE3o definidos pelo enum `),i(1251,"strong"),e(1252,"PoTableColumnSpacing"),t(),e(1253,"."),t(),i(1254,"blockquote")(1255,"p"),e(1256,"Em n\xEDvel de acessibilidade "),i(1257,"strong"),e(1258,"AA"),t(),e(1259,", caso o valor de "),i(1260,"code"),e(1261,"p-spacing"),t(),e(1262," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),i(1263,"code"),e(1264,"extraSmall"),t(),e(1265,`
nos seguintes cen\xE1rios:`),t(),i(1266,"ul")(1267,"li"),e(1268,"Quando o valor de "),i(1269,"code"),e(1270,"p-size"),t(),e(1271," for "),i(1272,"code"),e(1273,"small"),t(),e(1274,";"),t(),i(1275,"li"),e(1276,"Quando o valor padr\xE3o dos componentes for configurado como "),i(1277,"code"),e(1278,"small"),t(),e(1279,` no
`),i(1280,"a",39),e(1281,"servi\xE7o de tema"),t(),e(1282,"."),t()()()()(),i(1283,"tr",16)(1284,"td",17)(1285,"div",25)(1286,"span",26),e(1287," p-text-wrap"),n(1288,"br"),t()()(),i(1289,"td",21)(1290,"code",29),e(1291,"boolean"),t()(),i(1292,"td",23)(1293,"p")(1294,"code"),e(1295,"false"),t()()(),i(1296,"td",24)(1297,"em")(1298,"strong"),e(1299,"(opcional)"),t()(),i(1300,"p"),e(1301,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t(),i(1302,"p"),e(1303,"Esta propriedade aplica-se ao texto contido nas c\xE9lulas da tabela."),t(),i(1304,"blockquote")(1305,"p"),e(1306,"Incompat\xEDvel com "),i(1307,"code"),e(1308,"virtual-scroll"),t(),e(1309,", que requer altura fixa nas linhas."),t()()()(),i(1310,"tr",16)(1311,"td",17)(1312,"div",25)(1313,"span",26),e(1314," p-virtual-scroll"),n(1315,"br"),t()()(),i(1316,"td",21)(1317,"code",29),e(1318,"boolean"),t()(),i(1319,"td",23)(1320,"p")(1321,"code"),e(1322,"true"),t()()(),i(1323,"td",24)(1324,"em")(1325,"strong"),e(1326,"(opcional)"),t()(),i(1327,"p"),e(1328,"Habilita o "),i(1329,"code"),e(1330,"virtual-scroll"),t(),e(1331,` na tabela para melhorar a performance com grandes volumes de dados.
A altura da tabela j\xE1 \xE9 pr\xE9-definida, portanto o `),i(1332,"code"),e(1333,"virtual-scroll"),t(),e(1334," ser\xE1 ativado automaticamente."),t(),i(1335,"blockquote")(1336,"p"),e(1337,"Incompat\xEDvel com "),i(1338,"code"),e(1339,"p-text-wrap"),t(),e(1340," e "),i(1341,"code"),e(1342,"master-detail"),t(),e(1343,", pois o "),i(1344,"code"),e(1345,"virtual-scroll"),t(),e(1346," exige altura fixa nas linhas."),t()()()()(),i(1347,"h3",12),e(1348,"M\xE9todos"),t(),i(1349,"table",40)(1350,"tr",16)(1351,"th",41)(1352,"div",25)(1353,"h4")(1354,"span",26),e(1355," focus "),t()()()()(),i(1356,"tr",24)(1357,"td",24)(1358,"p"),e(1359,"Fun\xE7\xE3o que atribui foco ao componente."),t(),i(1360,"p"),e(1361,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),i(1362,"pre")(1363,"code"),e(1364,`import { PoLookupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;

focusLookup() {
  this.lookup.focus();
}
`),t()()()()(),n(1365,"br"),i(1366,"table",40)(1367,"tr",16)(1368,"th",41)(1369,"div",25)(1370,"h4")(1371,"span",26),e(1372," showAdditionalHelp "),t()()()()(),i(1373,"tr",24)(1374,"td",24)(1375,"p"),e(1376,"M\xE9todo que exibe "),i(1377,"code"),e(1378,"p-additionalHelpTooltip"),t(),e(1379," ou executa a a\xE7\xE3o definida em "),i(1380,"code"),e(1381,"p-additionalHelp"),t(),e(1382,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(1383,"code"),e(1384,"p-keydown"),t(),e(1385,"."),t(),i(1386,"blockquote")(1387,"p"),e(1388,"Exibe ou oculta o conte\xFAdo do componente "),i(1389,"code"),e(1390,"po-helper"),t(),e(1391," quando o componente estiver com foco e com label vis\xEDvel."),t()(),i(1392,"pre")(1393,"code"),e(1394,`<po-lookup
 #lookup
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, lookup)"
></po-lookup>
`),t()(),i(1395,"pre")(1396,"code"),e(1397,`// Exemplo com p-label e p-helper
<po-lookup
 #lookup
 ...
 p-label="Label do lookup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, lookup)"
></po-lookup>
`),t()(),i(1398,"pre")(1399,"code"),e(1400,`...
onKeyDown(event: KeyboardEvent, inp: PoLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),n(1401,"br"),i(1402,"h3"),e(1403,"Interfaces"),t(),i(1404,"h4",42)(1405,"code",5),e(1406,"PoLookupAdvancedFilter"),t()(),i(1407,"div",2)(1408,"p"),e(1409," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente. "),t()(),i(1410,"h4",12),e(1411,"Propriedades"),t(),i(1412,"table",13)(1413,"tr",14)(1414,"th",15),e(1415,"Nome"),t(),i(1416,"th",15),e(1417,"Tipo"),t(),i(1418,"th",15),e(1419,"Descri\xE7\xE3o"),t()(),i(1420,"tr",16)(1421,"td",17)(1422,"div",25)(1423,"span",26),e(1424," additionalHelp"),n(1425,"br"),t()()(),i(1426,"td",21)(1427,"code",43),e(1428,"Function"),t()(),i(1429,"td",24)(1430,"em")(1431,"strong"),e(1432,"(opcional)"),t()(),i(1433,"p"),e(1434,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),i(1435,"code"),e(1436,"p-help"),t(),e(1437,"."),t(),i(1438,"blockquote")(1439,"p"),e(1440,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),t()()()(),i(1441,"tr",16)(1442,"td",17)(1443,"div",25)(1444,"span",26),e(1445," additionalHelpTooltip"),n(1446,"br"),t()()(),i(1447,"td",21)(1448,"code",27),e(1449,"string"),t()(),i(1450,"td",24)(1451,"em")(1452,"strong"),e(1453,"(opcional)"),t()(),i(1454,"p"),e(1455,"Exibe um \xEDcone de ajuda adicional ao "),i(1456,"code"),e(1457,"p-help"),t(),e(1458,`, com o texto desta propriedade no tooltip.
Se o evento `),i(1459,"code"),e(1460,"p-additional-help"),t(),e(1461,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),i(1462,"strong"),e(1463,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(1464,"blockquote")(1465,"p"),e(1466,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),t()()()(),i(1467,"tr",16)(1468,"td",17)(1469,"div",25)(1470,"span",26),e(1471," advancedFilters"),n(1472,"br"),t()()(),i(1473,"td",21)(1474,"code",28),e(1475,"Array<PoLookupAdvancedFilter>"),t()(),i(1476,"td",24)(1477,"em")(1478,"strong"),e(1479,"(opcional)"),t()(),i(1480,"p"),e(1481,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),i(1482,"blockquote")(1483,"p"),e(1484,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),i(1485,"p"),e(1486,"Exemplo de URL com busca avan\xE7ada:"),t(),i(1487,"p")(1488,"code"),e(1489,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),t()(),i(1490,"p"),e(1491,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),t(),i(1492,"p")(1493,"code"),e(1494,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),t()()()(),i(1495,"tr",16)(1496,"td",17)(1497,"div",25)(1498,"span",26),e(1499," appendBox"),n(1500,"br"),t()()(),i(1501,"td",21)(1502,"code",29),e(1503,"boolean"),t()(),i(1504,"td",24)(1505,"em")(1506,"strong"),e(1507,"(opcional)"),t()(),i(1508,"p"),e(1509,"Define que o "),i(1510,"code"),e(1511,"listbox"),t(),e(1512," e/ou tooltip ("),i(1513,"code"),e(1514,"p-additional-help-tooltip"),t(),e(1515," e/ou "),i(1516,"code"),e(1517,"p-error-limit"),t(),e(1518,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),i(1519,"blockquote")(1520,"p"),e(1521,"Quando utilizado com "),i(1522,"code"),e(1523,"p-additional-help-tooltip"),t(),e(1524,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),i(1525,"tr",16)(1526,"td",17)(1527,"div",25)(1528,"span",26),e(1529," autoHeight"),n(1530,"br"),t()()(),i(1531,"td",21)(1532,"code",29),e(1533,"boolean"),t()(),i(1534,"td",24)(1535,"em")(1536,"strong"),e(1537,"(opcional)"),t()(),i(1538,"p"),e(1539,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),t(),i(1540,"p")(1541,"strong"),e(1542,"Componentes compat\xEDveis:"),t(),i(1543,"code"),e(1544,"po-multiselect"),t(),e(1545,", "),i(1546,"code"),e(1547,"po-lookup"),t(),e(1548,"."),t()()(),i(1549,"tr",16)(1550,"td",17)(1551,"div",25)(1552,"span",26),e(1553," autoUpload"),n(1554,"br"),t()()(),i(1555,"td",21)(1556,"code",29),e(1557,"boolean"),t()(),i(1558,"td",24)(1559,"em")(1560,"strong"),e(1561,"(opcional)"),t()(),i(1562,"p"),e(1563,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),i(1564,"p")(1565,"strong"),e(1566,"Componente compat\xEDvel"),t(),e(1567,": "),i(1568,"code"),e(1569,"po-upload"),t()()()(),i(1570,"tr",16)(1571,"td",17)(1572,"div",25)(1573,"span",26),e(1574," booleanFalse"),n(1575,"br"),t()()(),i(1576,"td",21)(1577,"code",27),e(1578,"string"),t()(),i(1579,"td",24)(1580,"em")(1581,"strong"),e(1582,"(opcional)"),t()(),i(1583,"p"),e(1584,"Texto exibido quando o valor do componente for "),i(1585,"em"),e(1586,"false"),t(),e(1587,"."),t()()(),i(1588,"tr",16)(1589,"td",17)(1590,"div",25)(1591,"span",26),e(1592," booleanTrue"),n(1593,"br"),t()()(),i(1594,"td",21)(1595,"code",27),e(1596,"string"),t()(),i(1597,"td",24)(1598,"em")(1599,"strong"),e(1600,"(opcional)"),t()(),i(1601,"p"),e(1602,"Texto exibido quando o valor do componente for "),i(1603,"em"),e(1604,"true"),t(),e(1605,"."),t()()(),i(1606,"tr",16)(1607,"td",17)(1608,"div",25)(1609,"span",26),e(1610," changeOnEnter"),n(1611,"br"),t()()(),i(1612,"td",21)(1613,"code",29),e(1614,"boolean"),t()(),i(1615,"td",24)(1616,"em")(1617,"strong"),e(1618,"(opcional)"),t()(),i(1619,"p"),e(1620,"Indica que o evento "),i(1621,"code"),e(1622,"p-change"),t(),e(1623,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),i(1624,"code"),e(1625,"po-combo"),t(),e(1626,"."),t()()(),i(1627,"tr",16)(1628,"td",17)(1629,"div",25)(1630,"span",26),e(1631," changeVisibleColumns"),n(1632,"br"),t()()(),i(1633,"td",21)(1634,"code",43),e(1635,"Function"),t()(),i(1636,"td",24)(1637,"em")(1638,"strong"),e(1639,"(opcional)"),t()(),i(1640,"p"),e(1641,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),i(1642,"p"),e(1643,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),i(1644,"p")(1645,"strong"),e(1646,"Componentes compat\xEDveis"),t(),e(1647,": "),i(1648,"code"),e(1649,"po-lookup"),t()()()(),i(1650,"tr",16)(1651,"td",17)(1652,"div",25)(1653,"span",26),e(1654," clean"),n(1655,"br"),t()()(),i(1656,"td",21)(1657,"code",29),e(1658,"boolean"),t()(),i(1659,"td",24)(1660,"em")(1661,"strong"),e(1662,"(opcional)"),t()(),i(1663,"p"),e(1664,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t(),i(1665,"p")(1666,"strong"),e(1667,"Componentes compat\xEDveis:"),t(),i(1668,"code"),e(1669,"po-datepicker"),t(),e(1670,", "),i(1671,"code"),e(1672,"po-datepicker-range"),t(),e(1673,", "),i(1674,"code"),e(1675,"po-input"),t(),e(1676,", "),i(1677,"code"),e(1678,"po-number"),t(),e(1679,", "),i(1680,"code"),e(1681,"po-decimal"),t(),e(1682,", "),i(1683,"code"),e(1684,"po-combo"),t(),e(1685,", "),i(1686,"code"),e(1687,"po-lookup"),t(),e(1688,", "),i(1689,"code"),e(1690,"po-password"),t()()()(),i(1691,"tr",16)(1692,"td",17)(1693,"div",25)(1694,"span",26),e(1695," columnRestoreManager"),n(1696,"br"),t()()(),i(1697,"td",21)(1698,"code",43),e(1699,"Function"),t()(),i(1700,"td",24)(1701,"em")(1702,"strong"),e(1703,"(opcional)"),t()(),i(1704,"p"),e(1705,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),i(1706,"p"),e(1707,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),i(1708,"p")(1709,"strong"),e(1710,"Componentes compat\xEDveis"),t(),e(1711,": "),i(1712,"code"),e(1713,"po-lookup"),t()()()(),i(1714,"tr",16)(1715,"td",17)(1716,"div",25)(1717,"span",26),e(1718," columns"),n(1719,"br"),t()()(),i(1720,"td",21)(1721,"code",30),e(1722,"Array<PoLookupColumn> "),t(),i(1723,"code",44),e(1724," number"),t()(),i(1725,"td",24)(1726,"em")(1727,"strong"),e(1728,"(opcional)"),t()(),i(1729,"p"),e(1730,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),i(1731,"code"),e(1732,"searchService"),t(),e(1733,`,
essa propriedade deve receber um array de objetos que implementam a interface `),i(1734,"a",45)(1735,"code"),e(1736,"PoLookupColumn"),t()(),e(1737,"."),t(),i(1738,"blockquote")(1739,"p"),e(1740,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),i(1741,"em"),e(1742,"label"),t(),e(1743," e "),i(1744,"em"),e(1745,"value"),t(),e(1746,` para valores
de tela e do model respectivamente.`),t()(),i(1747,"p")(1748,"strong"),e(1749,"Componentes compat\xEDveis:"),t(),i(1750,"code"),e(1751,"po-radio-group"),t(),e(1752,", "),i(1753,"code"),e(1754,"po-lookup"),t(),e(1755,", "),i(1756,"code"),e(1757,"po-checkbox-group"),t(),e(1758,"."),t()()(),i(1759,"tr",16)(1760,"td",17)(1761,"div",25)(1762,"span",26),e(1763," container"),n(1764,"br"),t()()(),i(1765,"td",21)(1766,"code",27),e(1767,"string"),t()(),i(1768,"td",24)(1769,"em")(1770,"strong"),e(1771,"(opcional)"),t()(),i(1772,"p"),e(1773,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),t(),i(1774,"p"),e(1775,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),t()()(),i(1776,"tr",16)(1777,"td",17)(1778,"div",25)(1779,"span",26),e(1780," customAction"),n(1781,"br"),t()()(),i(1782,"td",21)(1783,"code",46),e(1784,"PoProgressAction"),t()(),i(1785,"td",24)(1786,"em")(1787,"strong"),e(1788,"(opcional)"),t()(),i(1789,"p"),e(1790,"Define uma a\xE7\xE3o personalizada no componente "),i(1791,"code"),e(1792,"po-upload"),t(),e(1793,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),t(),i(1794,"p")(1795,"strong"),e(1796,"Componente compat\xEDvel"),t(),e(1797,": "),i(1798,"code"),e(1799,"po-upload"),t(),e(1800,","),t(),i(1801,"p")(1802,"strong"),e(1803,"Exemplo de configura\xE7\xE3o"),t(),e(1804,":"),t(),i(1805,"pre")(1806,"code",47),e(1807,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),t()()()(),i(1808,"tr",16)(1809,"td",17)(1810,"div",25)(1811,"span",26),e(1812," customActionClick"),n(1813,"br"),t()()(),i(1814,"td",21)(1815,"code",48),e(1816,"(file: PoUploadFile) => void"),t()(),i(1817,"td",24)(1818,"em")(1819,"strong"),e(1820,"(opcional)"),t()(),i(1821,"p"),e(1822,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),i(1823,"code"),e(1824,"p-custom-action"),t(),e(1825,"."),t(),i(1826,"p")(1827,"strong"),e(1828,"Componente compat\xEDvel"),t(),e(1829,": "),i(1830,"code"),e(1831,"po-upload"),t(),e(1832,","),t(),i(1833,"p"),e(1834,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),t(),i(1835,"p")(1836,"strong"),e(1837,"Par\xE2metro do evento"),t(),e(1838,":"),t(),i(1839,"ul")(1840,"li")(1841,"code"),e(1842,"file"),t(),e(1843,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),i(1844,"code"),e(1845,"PoUploadFile"),t(),e(1846," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),t()(),i(1847,"p")(1848,"strong"),e(1849,"Exemplo de uso"),t(),e(1850,":"),t(),i(1851,"pre")(1852,"code",47),e(1853,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),t()()()(),i(1854,"tr",16)(1855,"td",17)(1856,"div",25)(1857,"span",26),e(1858," debounceTime"),n(1859,"br"),t()()(),i(1860,"td",21)(1861,"code",44),e(1862,"number"),t()(),i(1863,"td",24)(1864,"em")(1865,"strong"),e(1866,"(opcional)"),t()(),i(1867,"p"),e(1868,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),i(1869,"code"),e(1870,"p-filter-service"),t(),e(1871,")."),t(),i(1872,"p")(1873,"strong"),e(1874,"Componentes compat\xEDveis:"),t(),i(1875,"code"),e(1876,"po-combo"),t(),e(1877,", "),i(1878,"code"),e(1879,"po-multiselect"),t(),e(1880,"."),t()()(),i(1881,"tr",16)(1882,"td",17)(1883,"div",25)(1884,"span",26),e(1885," decimalsLength"),n(1886,"br"),t()()(),i(1887,"td",21)(1888,"code",44),e(1889,"number"),t()(),i(1890,"td",24)(1891,"em")(1892,"strong"),e(1893,"(opcional)"),t()(),i(1894,"p"),e(1895,"Quantidade m\xE1xima de casas decimais."),t(),i(1896,"blockquote")(1897,"p"),e(1898,"Esta propriedade s\xF3 pode ser utilizada quando o "),i(1899,"code"),e(1900,"type"),t(),e(1901," for "),i(1902,"em"),e(1903,"currency"),t(),e(1904," ou "),i(1905,"em"),e(1906,"decimal"),t(),e(1907,"."),t()()()(),i(1908,"tr",16)(1909,"td",17)(1910,"div",25)(1911,"span",26),e(1912," directory"),n(1913,"br"),t()()(),i(1914,"td",21)(1915,"code",29),e(1916,"boolean"),t()(),i(1917,"td",24)(1918,"em")(1919,"strong"),e(1920,"(opcional)"),t()(),i(1921,"p"),e(1922,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),i(1923,"blockquote")(1924,"p"),e(1925,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),i(1926,"blockquote")(1927,"p"),e(1928,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),i(1929,"strong"),e(1930,"Internet Explorer"),t(),e(1931,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()(),i(1932,"p")(1933,"strong"),e(1934,"Componente compat\xEDvel"),t(),e(1935,": "),i(1936,"code"),e(1937,"po-upload"),t()()()(),i(1938,"tr",16)(1939,"td",17)(1940,"div",25)(1941,"span",26),e(1942," disabled"),n(1943,"br"),t()()(),i(1944,"td",21)(1945,"code",29),e(1946,"boolean"),t()(),i(1947,"td",24)(1948,"em")(1949,"strong"),e(1950,"(opcional)"),t()(),i(1951,"p"),e(1952,"Desabilita o campo caso informar o valor "),i(1953,"em"),e(1954,"true"),t(),e(1955,"."),t()()(),i(1956,"tr",16)(1957,"td",17)(1958,"div",25)(1959,"span",26),e(1960," disabledInitFilter"),n(1961,"br"),t()()(),i(1962,"td",21)(1963,"code",29),e(1964,"boolean"),t()(),i(1965,"td",24)(1966,"em")(1967,"strong"),e(1968,"(opcional)"),t()(),i(1969,"p"),e(1970,"Desabilita o filtro inicial no servi\xE7o do "),i(1971,"code"),e(1972,"po-combo"),t(),e(1973,", que \xE9 executado no primeiro clique no campo."),t()()(),i(1974,"tr",16)(1975,"td",17)(1976,"div",25)(1977,"span",26),e(1978," disabledTabFilter"),n(1979,"br"),t()()(),i(1980,"td",21)(1981,"code",29),e(1982,"boolean"),t()(),i(1983,"td",24)(1984,"em")(1985,"strong"),e(1986,"(opcional)"),t()(),i(1987,"p"),e(1988,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),i(1989,"code"),e(1990,"po-combo"),t(),e(1991,"."),t()()(),i(1992,"tr",16)(1993,"td",17)(1994,"div",25)(1995,"span",26),e(1996," divider"),n(1997,"br"),t()()(),i(1998,"td",21)(1999,"code",27),e(2e3,"string"),t()(),i(2001,"td",24)(2002,"em")(2003,"strong"),e(2004,"(opcional)"),t()(),i(2005,"p"),e(2006,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),t()()(),i(2007,"tr",16)(2008,"td",17)(2009,"div",25)(2010,"span",26),e(2011," dragDrop"),n(2012,"br"),t()()(),i(2013,"td",21)(2014,"code",29),e(2015,"boolean"),t()(),i(2016,"td",24)(2017,"em")(2018,"strong"),e(2019,"(opcional)"),t()(),i(2020,"p"),e(2021,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),i(2022,"blockquote")(2023,"p"),e(2024,"Recomendamos utilizar apenas um "),i(2025,"code"),e(2026,"po-upload"),t(),e(2027," com esta funcionalidade por tela."),t()(),i(2028,"p")(2029,"strong"),e(2030,"Componente compat\xEDvel"),t(),e(2031,": "),i(2032,"code"),e(2033,"po-upload"),t()()()(),i(2034,"tr",16)(2035,"td",17)(2036,"div",25)(2037,"span",26),e(2038," dragDropHeight"),n(2039,"br"),t()()(),i(2040,"td",21)(2041,"code",44),e(2042,"number"),t()(),i(2043,"td",24)(2044,"em")(2045,"strong"),e(2046,"(opcional)"),t()(),i(2047,"p"),e(2048,"Define em "),i(2049,"em"),e(2050,"pixels"),t(),e(2051," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),i(2052,"code"),e(2053,"160px"),t(),e(2054,"."),t(),i(2055,"blockquote")(2056,"p"),e(2057,"Esta propriedade funciona somente se a propriedade "),i(2058,"code"),e(2059,"p-drag-drop"),t(),e(2060," estiver habilitada."),t()(),i(2061,"p")(2062,"strong"),e(2063,"Componente compat\xEDvel"),t(),e(2064,": "),i(2065,"code"),e(2066,"po-upload"),t()()()(),i(2067,"tr",16)(2068,"td",17)(2069,"div",25)(2070,"span",26),e(2071," errorAsyncFunction"),n(2072,"br"),t()()(),i(2073,"td",21)(2074,"code",49),e(2075,"(value) => Observable<boolean>"),t()(),i(2076,"td",24)(2077,"em")(2078,"strong"),e(2079,"(opcional)"),t()(),i(2080,"p"),e(2081,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),i(2082,"code"),e(2083,"change"),t(),e(2084," ou "),i(2085,"code"),e(2086,"change-model"),t(),e(2087,", dependendo do valor da propriedade "),i(2088,"code"),e(2089,"triggerMode"),t(),e(2090,"."),t(),i(2091,"blockquote")(2092,"p"),e(2093,"Retorna "),i(2094,"code"),e(2095,"Observable com o valor true"),t(),e(2096," para sinalizar o erro "),i(2097,"code"),e(2098,"false"),t(),e(2099," para indicar que n\xE3o h\xE1 erro."),t()(),i(2100,"p")(2101,"strong"),e(2102,"Componente compat\xEDvel"),t(),e(2103,": "),i(2104,"code"),e(2105,"po-datepicker"),t()()()(),i(2106,"tr",16)(2107,"td",17)(2108,"div",25)(2109,"span",26),e(2110," errorAsyncProperties"),n(2111,"br"),t()()(),i(2112,"td",21)(2113,"code",50),e(2114,"ErrorAsyncProperties"),t()(),i(2115,"td",24)(2116,"em")(2117,"strong"),e(2118,"(opcional)"),t()(),i(2119,"p"),e(2120,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),t(),i(2121,"p")(2122,"strong"),e(2123,"Componentes compat\xEDveis:"),t(),i(2124,"code"),e(2125,"po-input"),t(),e(2126,", "),i(2127,"code"),e(2128,"po-number"),t(),e(2129,", "),i(2130,"code"),e(2131,"po-decimal"),t(),e(2132,", "),i(2133,"code"),e(2134,"po-password"),t(),e(2135,"."),t()()(),i(2136,"tr",16)(2137,"td",17)(2138,"div",25)(2139,"span",26),e(2140," errorLimit"),n(2141,"br"),t()()(),i(2142,"td",21)(2143,"code",29),e(2144,"boolean"),t()(),i(2145,"td",24)(2146,"em")(2147,"strong"),e(2148,"(opcional)"),t()(),i(2149,"p"),e(2150,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(2151,"blockquote")(2152,"p"),e(2153,"Caso essa propriedade seja definida como "),i(2154,"code"),e(2155,"true"),t(),e(2156,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()(),i(2157,"p")(2158,"strong"),e(2159,"Componentes compat\xEDveis:"),t(),i(2160,"code"),e(2161,"po-checkbox-group"),t(),e(2162,", "),i(2163,"code"),e(2164,"po-combo"),t(),e(2165,", "),i(2166,"code"),e(2167,"po-datepicker"),t(),e(2168,", "),i(2169,"code"),e(2170,"po-datepicker-range"),t(),e(2171,", "),i(2172,"code"),e(2173,"po-decimal"),t(),e(2174,", "),i(2175,"code"),e(2176,"po-input"),t(),e(2177,", "),i(2178,"code"),e(2179,"po-lookup"),t(),e(2180,", "),i(2181,"code"),e(2182,"po-multiselect"),t(),e(2183,", "),i(2184,"code"),e(2185,"po-number"),t(),e(2186,", "),i(2187,"code"),e(2188,"po-password"),t(),e(2189,", "),i(2190,"code"),e(2191,"po-radio-group"),t(),e(2192,", "),i(2193,"code"),e(2194,"po-select"),t(),e(2195,", "),i(2196,"code"),e(2197,"po-switch"),t(),e(2198,", "),i(2199,"code"),e(2200,"po-textarea"),t(),e(2201,"."),t()()(),i(2202,"tr",16)(2203,"td",17)(2204,"div",25)(2205,"span",26),e(2206," errorMessage"),n(2207,"br"),t()()(),i(2208,"td",21)(2209,"code",27),e(2210,"string"),t()(),i(2211,"td",24)(2212,"em")(2213,"strong"),e(2214,"(opcional)"),t()(),i(2215,"p"),e(2216,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),t(),i(2217,"p"),e(2218,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),t(),i(2219,"ul")(2220,"li"),e(2221,"pattern;"),t(),i(2222,"li"),e(2223,"minValue;"),t(),i(2224,"li"),e(2225,"maxValue;"),t(),i(2226,"li"),e(2227,"required;"),t()(),i(2228,"blockquote")(2229,"p"),e(2230,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),i(2231,"code"),e(2232,"po-datepicker"),t(),e(2233,", "),i(2234,"code"),e(2235,"po-input"),t(),e(2236,", "),i(2237,"code"),e(2238,"po-number"),t(),e(2239,", "),i(2240,"code"),e(2241,"po-decimal"),t(),e(2242,", "),i(2243,"code"),e(2244,"po-password"),t(),e(2245,`, \xE9 necess\xE1rio que a propriedade
`),i(2246,"code"),e(2247,"requiredFieldErrorMessage"),t(),e(2248," esteja como "),i(2249,"code"),e(2250,"true"),t(),e(2251,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),i(2252,"code"),e(2253,"po-datepicker-range"),t(),e(2254,", "),i(2255,"code"),e(2256,"po-select"),t(),e(2257,", "),i(2258,"code"),e(2259,"po-checkbox-group"),t(),e(2260,", "),i(2261,"code"),e(2262,"po-radio-group"),t(),e(2263,", "),i(2264,"code"),e(2265,"po-multiselect"),t(),e(2266,", "),i(2267,"code"),e(2268,"po-combo"),t(),e(2269,`,
`),i(2270,"code"),e(2271,"po-lookup"),t(),e(2272," e "),i(2273,"code"),e(2274,"po-textarea"),t(),e(2275," n\xE3o \xE9 necess\xE1rio passar a propriedade "),i(2276,"code"),e(2277,"requiredFieldErrorMessage"),t(),e(2278,"."),t()(),i(2279,"p")(2280,"strong"),e(2281,"Componentes compat\xEDveis:"),t(),i(2282,"code"),e(2283,"po-checkbox-group"),t(),e(2284,", "),i(2285,"code"),e(2286,"po-combo"),t(),e(2287,", "),i(2288,"code"),e(2289,"po-datepicker"),t(),e(2290,", "),i(2291,"code"),e(2292,"po-datepicker-range"),t(),e(2293,", "),i(2294,"code"),e(2295,"po-decimal"),t(),e(2296,", "),i(2297,"code"),e(2298,"po-input"),t(),e(2299,", "),i(2300,"code"),e(2301,"po-lookup"),t(),e(2302,", "),i(2303,"code"),e(2304,"po-multiselect"),t(),e(2305,", "),i(2306,"code"),e(2307,"po-number"),t(),e(2308,", "),i(2309,"code"),e(2310,"po-password"),t(),e(2311,", "),i(2312,"code"),e(2313,"po-radio-group"),t(),e(2314,", "),i(2315,"code"),e(2316,"po-select"),t(),e(2317,", "),i(2318,"code"),e(2319,"po-switch"),t(),e(2320,", "),i(2321,"code"),e(2322,"po-textarea"),t(),e(2323,"."),t()()(),i(2324,"tr",16)(2325,"td",17)(2326,"div",25)(2327,"span",26),e(2328," fieldLabel"),n(2329,"br"),t()()(),i(2330,"td",21)(2331,"code",27),e(2332,"string"),t()(),i(2333,"td",24)(2334,"em")(2335,"strong"),e(2336,"(opcional)"),t()(),i(2337,"p"),e(2338,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),t(),i(2339,"p"),e(2340,"O valor padr\xE3o \xE9: "),i(2341,"code"),e(2342,"label"),t(),e(2343,"."),t(),i(2344,"blockquote")(2345,"p"),e(2346,"Esta propriedade pode ser utilizada em conjunto com: "),i(2347,"code"),e(2348,"options"),t(),e(2349,", "),i(2350,"code"),e(2351,"optionsService"),t(),e(2352," e "),i(2353,"code"),e(2354,"searchService"),t(),e(2355,"."),t()()()(),i(2356,"tr",16)(2357,"td",17)(2358,"div",25)(2359,"span",26),e(2360," fieldValue"),n(2361,"br"),t()()(),i(2362,"td",21)(2363,"code",27),e(2364,"string"),t()(),i(2365,"td",24)(2366,"em")(2367,"strong"),e(2368,"(opcional)"),t()(),i(2369,"p"),e(2370,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),t(),i(2371,"p"),e(2372,"O valor padr\xE3o \xE9: "),i(2373,"code"),e(2374,"value"),t(),e(2375,"."),t(),i(2376,"blockquote")(2377,"p"),e(2378,"Esta propriedade pode ser utilizada em conjunto com: "),i(2379,"code"),e(2380,"options"),t(),e(2381,", "),i(2382,"code"),e(2383,"optionsService"),t(),e(2384," e "),i(2385,"code"),e(2386,"searchService"),t(),e(2387,"."),t()()()(),i(2388,"tr",16)(2389,"td",17)(2390,"div",25)(2391,"span",26),e(2392," filterMinlength"),n(2393,"br"),t()()(),i(2394,"td",21)(2395,"code",44),e(2396,"number"),t()(),i(2397,"td",24)(2398,"em")(2399,"strong"),e(2400,"(opcional)"),t()(),i(2401,"p"),e(2402,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),i(2403,"code"),e(2404,"po-combo"),t(),e(2405,"."),t()()(),i(2406,"tr",16)(2407,"td",17)(2408,"div",25)(2409,"span",26),e(2410," filterMode"),n(2411,"br"),t()()(),i(2412,"td",21)(2413,"code",51),e(2414,"PoMultiselectFilterMode"),t()(),i(2415,"td",24)(2416,"em")(2417,"strong"),e(2418,"(opcional)"),t()(),i(2419,"p"),e(2420,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),i(2421,"code"),e(2422,"startsWith"),t(),e(2423,", "),i(2424,"code"),e(2425,"contains"),t(),e(2426," ou "),i(2427,"code"),e(2428,"endsWith"),t(),e(2429,"."),t(),i(2430,"blockquote")(2431,"p"),e(2432,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),t()(),i(2433,"p")(2434,"strong"),e(2435,"Componentes compat\xEDveis:"),t(),i(2436,"code"),e(2437,"po-multiselect"),t(),e(2438,"."),t()()(),i(2439,"tr",16)(2440,"td",17)(2441,"div",25)(2442,"span",26),e(2443," forceBooleanComponentType"),n(2444,"br"),t()()(),i(2445,"td",21)(2446,"code",52),e(2447,"ForceBooleanComponentEnum"),t()(),i(2448,"td",24)(2449,"em")(2450,"strong"),e(2451,"(opcional)"),t()(),i(2452,"p"),e(2453,"Valores aceitos:"),t(),i(2454,"ul")(2455,"li"),e(2456,"ForceBooleanComponentEnum.switch"),t(),i(2457,"li"),e(2458,"ForceBooleanComponentEnum.checkbox"),t()()()(),i(2459,"tr",16)(2460,"td",17)(2461,"div",25)(2462,"span",26),e(2463," forceOptionsComponentType"),n(2464,"br"),t()()(),i(2465,"td",21)(2466,"code",53),e(2467,"ForceOptionComponentEnum"),t()(),i(2468,"td",24)(2469,"em")(2470,"strong"),e(2471,"(opcional)"),t()(),i(2472,"p"),e(2473,"pode ser utilizada em conjunto com a propriedade "),i(2474,"code"),e(2475,"options"),t(),e(2476," for\xE7ando o componente a renderizar um "),i(2477,"code"),e(2478,"po-select"),t(),e(2479," ou "),i(2480,"code"),e(2481,"po-radio-group"),t(),e(2482,"."),t(),i(2483,"p"),e(2484,"Valores aceitos:"),t(),i(2485,"ul")(2486,"li"),e(2487,"ForceOptionComponentEnum.radioGroup"),t(),i(2488,"li"),e(2489,"ForceOptionComponentEnum.select"),t()(),i(2490,"blockquote")(2491,"p"),e(2492,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),i(2493,"code"),e(2494,"optionsMulti"),t(),e(2495," e "),i(2496,"code"),e(2497,"optionsService"),t(),e(2498,"."),t()()()(),i(2499,"tr",16)(2500,"td",17)(2501,"div",25)(2502,"span",26),e(2503," formField"),n(2504,"br"),t()()(),i(2505,"td",21)(2506,"code",27),e(2507,"string"),t()(),i(2508,"td",24)(2509,"em")(2510,"strong"),e(2511,"(opcional)"),t()(),i(2512,"p"),e(2513,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),i(2514,"code"),e(2515,"url"),t(),e(2516,"."),t(),i(2517,"blockquote")(2518,"p"),e(2519,"O valor default \xE9 "),i(2520,"code"),e(2521,"files"),t()()(),i(2522,"p")(2523,"strong"),e(2524,"Componente compat\xEDvel"),t(),e(2525,": "),i(2526,"code"),e(2527,"po-upload"),t()()()(),i(2528,"tr",16)(2529,"td",17)(2530,"div",25)(2531,"span",26),e(2532," format"),n(2533,"br"),t()()(),i(2534,"td",21)(2535,"code",27),e(2536,"string "),t(),i(2537,"code",32),e(2538," Array<string>"),t()(),i(2539,"td",24)(2540,"em")(2541,"strong"),e(2542,"(opcional)"),t()(),i(2543,"p"),e(2544,"Formato de exibi\xE7\xE3o no campo."),t(),i(2545,"p"),e(2546,"Ao utilizar esta propriedade com o "),i(2547,"code"),e(2548,"type"),t(),i(2549,"em"),e(2550,"PoDynamicFieldType.Date"),t(),e(2551," ou "),i(2552,"em"),e(2553,"PoDynamicFieldType.DateTime"),t(),e(2554,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),t(),i(2555,"p"),e(2556,"Valores v\xE1lidos:"),t(),i(2557,"ul")(2558,"li"),e(2559,"dd/mm/yyyy"),t(),i(2560,"li"),e(2561,"mm/dd/yyyy"),t(),i(2562,"li"),e(2563,"yyyy/mm/dd"),t()(),i(2564,"p"),e(2565,"Tamb\xE9m pode-se utilizar em conjunto com "),i(2566,"code"),e(2567,"searchService"),t(),e(2568,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),t()()(),i(2569,"tr",16)(2570,"td",17)(2571,"div",25)(2572,"span",26),e(2573," formatModel"),n(2574,"br"),t()()(),i(2575,"td",21)(2576,"code",29),e(2577,"boolean"),t()(),i(2578,"td",24)(2579,"em")(2580,"strong"),e(2581,"(opcional)"),t()(),i(2582,"p"),e(2583,"Indica se o "),i(2584,"code"),e(2585,"model"),t(),e(2586," receber\xE1 o valor formatado pelas propriedades "),i(2587,"code"),e(2588,"p-label-on"),t(),e(2589," e "),i(2590,"code"),e(2591,"p-label-off"),t(),e(2592,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),t(),i(2593,"p"),e(2594,"O valor padr\xE3o \xE9: "),i(2595,"code"),e(2596,"false"),t(),e(2597,"."),t(),i(2598,"blockquote")(2599,"p"),e(2600,"Esta propriedade est\xE1 disponivel apenas para o "),i(2601,"code"),e(2602,"swicth"),t(),e(2603,"."),t()()()(),i(2604,"tr",16)(2605,"td",17)(2606,"div",25)(2607,"span",26),e(2608," gridColumns"),n(2609,"br"),t()()(),i(2610,"td",21)(2611,"code",44),e(2612,"number"),t()(),i(2613,"td",24)(2614,"em")(2615,"strong"),e(2616,"(opcional)"),t()(),i(2617,"p"),e(2618,"Tamanho de exibi\xE7\xE3o do campo em telas."),t(),i(2619,"p"),e(2620,"Deve ser usado o sistema de "),i(2621,"strong"),e(2622,"grid"),t(),e(2623," do PO (1 ... 12 colunas)."),t(),i(2624,"blockquote")(2625,"p"),e(2626,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),t()()()(),i(2627,"tr",16)(2628,"td",17)(2629,"div",25)(2630,"span",26),e(2631," gridLgColumns"),n(2632,"br"),t()()(),i(2633,"td",21)(2634,"code",44),e(2635,"number"),t()(),i(2636,"td",24)(2637,"em")(2638,"strong"),e(2639,"(opcional)"),t()(),i(2640,"p"),e(2641,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),i(2642,"p"),e(2643,"Deve ser usado o sistema de "),i(2644,"strong"),e(2645,"grid"),t(),e(2646," do PO (1 ... 12 colunas)."),t(),i(2647,"blockquote")(2648,"p"),e(2649,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2650,"code"),e(2651,"gridColumns"),t(),e(2652,"."),t()()()(),i(2653,"tr",16)(2654,"td",17)(2655,"div",25)(2656,"span",26),e(2657," gridLgPull"),n(2658,"br"),t()()(),i(2659,"td",21)(2660,"code",44),e(2661,"number"),t()(),i(2662,"td",24)(2663,"em")(2664,"strong"),e(2665,"(opcional)"),t()(),i(2666,"p"),e(2667,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),t(),i(2668,"p"),e(2669,"Deve ser usado o sistema de "),i(2670,"strong"),e(2671,"grid"),t(),e(2672," do PO (1 ... 11 colunas)."),t(),i(2673,"blockquote")(2674,"p"),e(2675,"Esta propriedade n\xE3o funciona com a propriedade "),i(2676,"code"),e(2677,"gridColumns"),t(),e(2678,". Deve-se especificar o tamanho da tela."),t()()()(),i(2679,"tr",16)(2680,"td",17)(2681,"div",25)(2682,"span",26),e(2683," gridMdColumns"),n(2684,"br"),t()()(),i(2685,"td",21)(2686,"code",44),e(2687,"number"),t()(),i(2688,"td",24)(2689,"em")(2690,"strong"),e(2691,"(opcional)"),t()(),i(2692,"p"),e(2693,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),i(2694,"p"),e(2695,"Deve ser usado o sistema de "),i(2696,"strong"),e(2697,"grid"),t(),e(2698," do PO (1 ... 12 colunas)."),t(),i(2699,"blockquote")(2700,"p"),e(2701,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2702,"code"),e(2703,"gridColumns"),t(),e(2704,"."),t()()()(),i(2705,"tr",16)(2706,"td",17)(2707,"div",25)(2708,"span",26),e(2709," gridMdPull"),n(2710,"br"),t()()(),i(2711,"td",21)(2712,"code",44),e(2713,"number"),t()(),i(2714,"td",24)(2715,"em")(2716,"strong"),e(2717,"(opcional)"),t()(),i(2718,"p"),e(2719,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),t(),i(2720,"p"),e(2721,"Deve ser usado o sistema de "),i(2722,"strong"),e(2723,"grid"),t(),e(2724," do PO (1 ... 11 colunas)."),t(),i(2725,"blockquote")(2726,"p"),e(2727,"Esta propriedade n\xE3o funciona com a propriedade "),i(2728,"code"),e(2729,"gridColumns"),t(),e(2730,". Deve-se especificar o tamanho da tela."),t()()()(),i(2731,"tr",16)(2732,"td",17)(2733,"div",25)(2734,"span",26),e(2735," gridSmColumns"),n(2736,"br"),t()()(),i(2737,"td",21)(2738,"code",44),e(2739,"number"),t()(),i(2740,"td",24)(2741,"em")(2742,"strong"),e(2743,"(opcional)"),t()(),i(2744,"p"),e(2745,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),i(2746,"p"),e(2747,"Deve ser usado o sistema de "),i(2748,"strong"),e(2749,"grid"),t(),e(2750," do PO (1 ... 12 colunas)."),t(),i(2751,"blockquote")(2752,"p"),e(2753,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2754,"code"),e(2755,"gridColumns"),t(),e(2756,"."),t()()()(),i(2757,"tr",16)(2758,"td",17)(2759,"div",25)(2760,"span",26),e(2761," gridSmPull"),n(2762,"br"),t()()(),i(2763,"td",21)(2764,"code",44),e(2765,"number"),t()(),i(2766,"td",24)(2767,"em")(2768,"strong"),e(2769,"(opcional)"),t()(),i(2770,"p"),e(2771,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),t(),i(2772,"p"),e(2773,"Deve ser usado o sistema de "),i(2774,"strong"),e(2775,"grid"),t(),e(2776," do PO (1 ... 11 colunas)."),t(),i(2777,"blockquote")(2778,"p"),e(2779,"Esta propriedade n\xE3o funciona com a propriedade "),i(2780,"code"),e(2781,"gridColumns"),t(),e(2782,". Deve-se especificar o tamanho da tela."),t()()()(),i(2783,"tr",16)(2784,"td",17)(2785,"div",25)(2786,"span",26),e(2787," gridXlColumns"),n(2788,"br"),t()()(),i(2789,"td",21)(2790,"code",44),e(2791,"number"),t()(),i(2792,"td",24)(2793,"em")(2794,"strong"),e(2795,"(opcional)"),t()(),i(2796,"p"),e(2797,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),i(2798,"p"),e(2799,"Deve ser usado o sistema de "),i(2800,"strong"),e(2801,"grid"),t(),e(2802," do PO (1 ... 12 colunas)."),t(),i(2803,"blockquote")(2804,"p"),e(2805,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2806,"code"),e(2807,"gridColumns"),t(),e(2808,"."),t()()()(),i(2809,"tr",16)(2810,"td",17)(2811,"div",25)(2812,"span",26),e(2813," gridXlPull"),n(2814,"br"),t()()(),i(2815,"td",21)(2816,"code",44),e(2817,"number"),t()(),i(2818,"td",24)(2819,"em")(2820,"strong"),e(2821,"(opcional)"),t()(),i(2822,"p"),e(2823,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),t(),i(2824,"p"),e(2825,"Deve ser usado o sistema de "),i(2826,"strong"),e(2827,"grid"),t(),e(2828," do PO (1 ... 11 colunas)."),t(),i(2829,"blockquote")(2830,"p"),e(2831,"Esta propriedade n\xE3o funciona com a propriedade "),i(2832,"code"),e(2833,"gridColumns"),t(),e(2834,". Deve-se especificar o tamanho da tela."),t()()()(),i(2835,"tr",16)(2836,"td",17)(2837,"div",25)(2838,"span",26),e(2839," headers"),n(2840,"br"),t()()(),i(2841,"td",21)(2842,"code",54),e(2843,"{ [name: string]: string "),t(),i(2844,"code",55),e(2845,` Array<string>;
}`),t()(),i(2846,"td",24)(2847,"em")(2848,"strong"),e(2849,"(opcional)"),t()(),i(2850,"p"),e(2851,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t(),i(2852,"p")(2853,"strong"),e(2854,"Componente compat\xEDvel"),t(),e(2855,": "),i(2856,"code"),e(2857,"po-upload"),t()()()(),i(2858,"tr",16)(2859,"td",17)(2860,"div",25)(2861,"span",26),e(2862," help"),n(2863,"br"),t()()(),i(2864,"td",21)(2865,"code",27),e(2866,"string"),t()(),i(2867,"td",24)(2868,"em")(2869,"strong"),e(2870,"(opcional)"),t()(),i(2871,"p"),e(2872,"Texto de ajuda."),t()()(),i(2873,"tr",16)(2874,"td",17)(2875,"div",25)(2876,"span",26),e(2877," helper"),n(2878,"br"),t()()(),i(2879,"td",21)(2880,"code",27),e(2881,"string "),t(),i(2882,"code",38),e(2883," PoHelperOptions"),t()(),i(2884,"td",24)(2885,"em")(2886,"strong"),e(2887,"(opcional)"),t()(),i(2888,"p"),e(2889,"Texto simples que ser\xE1 apresentado como aux\xEDlio ao campo ou objeto com as defini\xE7\xF5es do po-helper."),t()()(),i(2890,"tr",16)(2891,"td",17)(2892,"div",25)(2893,"span",26),e(2894," hideLabelStatus"),n(2895,"br"),t()()(),i(2896,"td",21)(2897,"code",29),e(2898,"boolean"),t()(),i(2899,"td",24)(2900,"em")(2901,"strong"),e(2902,"(opcional)"),t()(),i(2903,"p"),e(2904,"Indica se o status do "),i(2905,"code"),e(2906,"model"),t(),e(2907," ser\xE1 escondido visualmente ao lado do switch"),t()()(),i(2908,"tr",16)(2909,"td",17)(2910,"div",25)(2911,"span",26),e(2912," hidePasswordPeek"),n(2913,"br"),t()()(),i(2914,"td",21)(2915,"code",29),e(2916,"boolean"),t()(),i(2917,"td",24)(2918,"em")(2919,"strong"),e(2920,"(opcional)"),t()(),i(2921,"p"),e(2922,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),i(2923,"code"),e(2924,"po-password"),t(),e(2925,"."),t()()(),i(2926,"tr",16)(2927,"td",17)(2928,"div",25)(2929,"span",26),e(2930," hideRestrictionsInfo"),n(2931,"br"),t()()(),i(2932,"td",21)(2933,"code",29),e(2934,"boolean"),t()(),i(2935,"td",24)(2936,"em")(2937,"strong"),e(2938,"(opcional)"),t()(),i(2939,"p"),e(2940,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t(),i(2941,"p")(2942,"strong"),e(2943,"Componente compat\xEDvel"),t(),e(2944,": "),i(2945,"code"),e(2946,"po-upload"),t()()()(),i(2947,"tr",16)(2948,"td",17)(2949,"div",25)(2950,"span",26),e(2951," hideSearch"),n(2952,"br"),t()()(),i(2953,"td",21)(2954,"code",29),e(2955,"boolean"),t()(),i(2956,"td",24)(2957,"em")(2958,"strong"),e(2959,"(opcional)"),t()(),i(2960,"p"),e(2961,"Esconde o campo de pesquisa existente dentro do dropdown do "),i(2962,"code"),e(2963,"po-multiselect"),t(),e(2964,"."),t()()(),i(2965,"tr",16)(2966,"td",17)(2967,"div",25)(2968,"span",26),e(2969," hideSelectAll"),n(2970,"br"),t()()(),i(2971,"td",21)(2972,"code",29),e(2973,"boolean"),t()(),i(2974,"td",24)(2975,"em")(2976,"strong"),e(2977,"(opcional)"),t()(),i(2978,"p"),e(2979,'Indica se o campo "Selecionar todos" do '),i(2980,"code"),e(2981,"po-multiselect"),t(),e(2982," ser\xE1 escondido."),t()()(),i(2983,"tr",16)(2984,"td",17)(2985,"div",25)(2986,"span",26),e(2987," hideSelectButton"),n(2988,"br"),t()()(),i(2989,"td",21)(2990,"code",29),e(2991,"boolean"),t()(),i(2992,"td",24)(2993,"em")(2994,"strong"),e(2995,"(opcional)"),t()(),i(2996,"p"),e(2997,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),i(2998,"blockquote")(2999,"p"),e(3e3,"Caso o valor definido seja "),i(3001,"code"),e(3002,"true"),t(),e(3003,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),i(3004,"code"),e(3005,"selectFiles()"),t(),e(3006," para sele\xE7\xE3o de arquivos."),t()(),i(3007,"p")(3008,"strong"),e(3009,"Componente compat\xEDvel"),t(),e(3010,": "),i(3011,"code"),e(3012,"po-upload"),t()()()(),i(3013,"tr",16)(3014,"td",17)(3015,"div",25)(3016,"span",26),e(3017," hideSendButton"),n(3018,"br"),t()()(),i(3019,"td",21)(3020,"code",29),e(3021,"boolean"),t()(),i(3022,"td",24)(3023,"em")(3024,"strong"),e(3025,"(opcional)"),t()(),i(3026,"p"),e(3027,"Omite o bot\xE3o de envio de arquivos."),t(),i(3028,"blockquote")(3029,"p"),e(3030,"Caso o valor definido seja "),i(3031,"code"),e(3032,"true"),t(),e(3033,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),i(3034,"code"),e(3035,"sendFiles()"),t(),e(3036," para envio do(s) arquivo(s) selecionado(s)."),t()(),i(3037,"p")(3038,"strong"),e(3039,"Componente compat\xEDvel"),t(),e(3040,": "),i(3041,"code"),e(3042,"po-upload"),t()()()(),i(3043,"tr",16)(3044,"td",17)(3045,"div",25)(3046,"span",26),e(3047," icon"),n(3048,"br"),t()()(),i(3049,"td",21)(3050,"code",27),e(3051,"string "),t(),i(3052,"code",56),e(3053," TemplateRef<void>"),t()(),i(3054,"td",24)(3055,"em")(3056,"strong"),e(3057,"(opcional)"),t()(),i(3058,"p"),e(3059,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),i(3060,"blockquote")(3061,"p"),e(3062,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),t()(),i(3063,"ul")(3064,"li"),e(3065,"Input;"),t(),i(3066,"li"),e(3067,"Number;"),t(),i(3068,"li"),e(3069,"Decimal;"),t(),i(3070,"li"),e(3071,"Combo;"),t(),i(3072,"li"),e(3073,"Password;"),t()(),i(3074,"blockquote")(3075,"p"),e(3076,"Veja a disponibilidade de \xEDcones em "),i(3077,"a",57),e(3078,"biblioteca de \xEDcones"),t(),e(3079,"."),t()()()(),i(3080,"tr",16)(3081,"td",17)(3082,"div",25)(3083,"span",26),e(3084," infiniteScroll"),n(3085,"br"),t()()(),i(3086,"td",21)(3087,"code",29),e(3088,"boolean"),t()(),i(3089,"td",24)(3090,"em")(3091,"strong"),e(3092,"(opcional)"),t()(),i(3093,"p"),e(3094,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),t(),i(3095,"p")(3096,"strong"),e(3097,"Componentes compat\xEDveis:"),t(),i(3098,"code"),e(3099,"po-combo"),t(),e(3100,", "),i(3101,"code"),e(3102,"po-lookup"),t(),e(3103,"."),t()()(),i(3104,"tr",16)(3105,"td",17)(3106,"div",25)(3107,"span",26),e(3108," infiniteScrollDistance"),n(3109,"br"),t()()(),i(3110,"td",21)(3111,"code",44),e(3112,"number"),t()(),i(3113,"td",24)(3114,"em")(3115,"strong"),e(3116,"(opcional)"),t()(),i(3117,"p"),e(3118,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),i(3119,"strong"),e(3120,"Exemplos"),t(),i(3121,"code"),e(3122,"{ infiniteScrollDistance: 80 }"),t(),e(3123,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),t(),i(3124,"p")(3125,"strong"),e(3126,"Componente compat\xEDvel:"),t(),i(3127,"code"),e(3128,"po-combo"),t(),e(3129,"."),t()()(),i(3130,"tr",16)(3131,"td",17)(3132,"div",25)(3133,"span",26),e(3134," invalidValue"),n(3135,"br"),t()()(),i(3136,"td",21)(3137,"code",29),e(3138,"boolean"),t()(),i(3139,"td",24)(3140,"em")(3141,"strong"),e(3142,"(opcional)"),t()(),i(3143,"p"),e(3144,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),i(3145,"code"),e(3146,"p-field-error-message"),t(),e(3147,"."),t(),i(3148,"blockquote")(3149,"p"),e(3150,"Caso essa propriedade seja definida como "),i(3151,"code"),e(3152,"true"),t(),e(3153,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),t()(),i(3154,"p")(3155,"strong"),e(3156,"Componente compat\xEDvel"),t(),e(3157,": "),i(3158,"code"),e(3159,"po-switch"),t()()()(),i(3160,"tr",16)(3161,"td",17)(3162,"div",25)(3163,"span",26),e(3164," isoFormat"),n(3165,"br"),t()()(),i(3166,"td",21)(3167,"code",58),e(3168,"PoDatepickerIsoFormat"),t()(),i(3169,"td",24)(3170,"em")(3171,"strong"),e(3172,"(opcional)"),t()(),i(3173,"p"),e(3174,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),t(),i(3175,"blockquote")(3176,"p"),e(3177,"Veja os valores v\xE1lidos no "),i(3178,"code"),e(3179,"enumPoDatepickerIsoFormat"),t(),e(3180,"."),t()(),i(3181,"p")(3182,"strong"),e(3183,"Componente compat\xEDvel:"),t(),e(3184," po-datepicker"),t()()(),i(3185,"tr",16)(3186,"td",17)(3187,"div",25)(3188,"span",26),e(3189," key"),n(3190,"br"),t()()(),i(3191,"td",21)(3192,"code",29),e(3193,"boolean"),t()(),i(3194,"td",24)(3195,"em")(3196,"strong"),e(3197,"(opcional)"),t()(),i(3198,"p"),e(3199,"Identificador"),t()()(),i(3200,"tr",16)(3201,"td",17)(3202,"div",25)(3203,"span",26),e(3204," keydown"),n(3205,"br"),t()()(),i(3206,"td",21)(3207,"code",43),e(3208,"Function"),t()(),i(3209,"td",24)(3210,"em")(3211,"strong"),e(3212,"(opcional)"),t()(),i(3213,"p"),e(3214,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),i(3215,"code"),e(3216,"KeyboardEvent"),t(),e(3217," com informa\xE7\xF5es sobre a tecla."),t()()(),i(3218,"tr",16)(3219,"td",17)(3220,"div",25)(3221,"span",26),e(3222," label"),n(3223,"br"),t()()(),i(3224,"td",21)(3225,"code",27),e(3226,"string"),t()(),i(3227,"td",24)(3228,"em")(3229,"strong"),e(3230,"(opcional)"),t()(),i(3231,"p"),e(3232,"R\xF3tulo do campo exibido."),t(),i(3233,"p"),e(3234,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(3235,"code"),e(3236,"label"),t(),e(3237," o valor da propriedade "),i(3238,"code"),e(3239,"property"),t(),e(3240," com a primeira letra em mai\xFAsculo."),t()()(),i(3241,"tr",16)(3242,"td",17)(3243,"div",25)(3244,"span",26),e(3245," labelPosition"),n(3246,"br"),t()()(),i(3247,"td",21)(3248,"code",59),e(3249,"PoSwitchLabelPosition"),t()(),i(3250,"td",24)(3251,"em")(3252,"strong"),e(3253,"(opcional)"),t()(),i(3254,"p"),e(3255,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),t(),i(3256,"blockquote")(3257,"p"),e(3258,"Por padr\xE3o exibe \xE0 direita."),t()()()(),i(3259,"tr",16)(3260,"td",17)(3261,"div",25)(3262,"span",26),e(3263," listboxControlPosition"),n(3264,"br"),t()()(),i(3265,"td",21)(3266,"code",60),e(3267,"'top' "),t(),i(3268,"code",61),e(3269," 'bottom'"),t()(),i(3270,"td",24)(3271,"em")(3272,"strong"),e(3273,"(opcional)"),t()(),i(3274,"p"),e(3275,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),i(3276,"code"),e(3277,"listbox"),t(),e(3278," em rela\xE7\xE3o ao campo ("),i(3279,"code"),e(3280,"top"),t(),e(3281," ou "),i(3282,"code"),e(3283,"bottom"),t(),e(3284,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),t(),i(3285,"p")(3286,"strong"),e(3287,"Componentes compat\xEDveis:"),t(),i(3288,"code"),e(3289,"po-multiselect"),t(),e(3290,", "),i(3291,"code"),e(3292,"po-combo"),t(),e(3293,"."),t()()(),i(3294,"tr",16)(3295,"td",17)(3296,"div",25)(3297,"span",26),e(3298," literals"),n(3299,"br"),t()()(),i(3300,"td",21)(3301,"code",36),e(3302,"PoLookupLiterals "),t(),i(3303,"code",62),e(3304," PoMultiselectLiterals "),t(),i(3305,"code",63),e(3306," PoComboLiterals "),t(),i(3307,"code",64),e(3308," PoDatepickerRangeLiterals "),t(),i(3309,"code",65),e(3310," PoUploadLiterals"),t()(),i(3311,"td",24)(3312,"em")(3313,"strong"),e(3314,"(opcional)"),t()(),i(3315,"p"),e(3316,"Objeto com as literais usadas para os seguintes componentes: "),i(3317,"code"),e(3318,"po-lookup"),t(),e(3319,", "),i(3320,"code"),e(3321,"po-multiselect"),t(),e(3322,", "),i(3323,"code"),e(3324,"po-combo"),t(),e(3325," e "),i(3326,"code"),e(3327,"po-datepicker-range"),t(),e(3328,"."),t(),i(3329,"blockquote")(3330,"p"),e(3331,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),t()(),i(3332,"p")(3333,"strong"),e(3334,"Componentes compat\xEDveis:"),t(),i(3335,"code"),e(3336,"po-lookup"),t(),e(3337,", "),i(3338,"code"),e(3339,"po-multiselect"),t(),e(3340,", "),i(3341,"code"),e(3342,"po-combo"),t(),e(3343,", "),i(3344,"code"),e(3345,"po-datepicker-range"),t()()()(),i(3346,"tr",16)(3347,"td",17)(3348,"div",25)(3349,"span",26),e(3350," locale"),n(3351,"br"),t()()(),i(3352,"td",21)(3353,"code",27),e(3354,"string"),t()(),i(3355,"td",24)(3356,"em")(3357,"strong"),e(3358,"(opcional)"),t()(),i(3359,"p"),e(3360,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(3361,"a",66)(3362,"code"),e(3363,"I18n"),t()()(),i(3364,"p"),e(3365,"Exemplo de utiliza\xE7\xE3o:"),t(),i(3366,"pre")(3367,"code"),e(3368,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),t()(),i(3369,"blockquote")(3370,"p"),e(3371,"Para ver quais linguagens suportadas acesse "),i(3372,"a",66)(3373,"code"),e(3374,"I18n"),t()(),e(3375,`
A propriedade ser\xE1 repassada para os componentes que suportam a mesma.`),t()()()(),i(3376,"tr",16)(3377,"td",17)(3378,"div",25)(3379,"span",26),e(3380," mask"),n(3381,"br"),t()()(),i(3382,"td",21)(3383,"code",27),e(3384,"string"),t()(),i(3385,"td",24)(3386,"em")(3387,"strong"),e(3388,"(opcional)"),t()(),i(3389,"p"),e(3390,"M\xE1scara para o campo."),t(),i(3391,"p")(3392,"strong"),e(3393,"Componentes compat\xEDveis:"),t(),i(3394,"code"),e(3395,"po-input"),t(),e(3396,"."),t(),i(3397,"blockquote")(3398,"p"),e(3399,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),i(3400,"code"),e(3401,"type: time"),t(),e(3402,"."),t()()()(),i(3403,"tr",16)(3404,"td",17)(3405,"div",25)(3406,"span",26),e(3407," maskFormatModel"),n(3408,"br"),t()()(),i(3409,"td",21)(3410,"code",29),e(3411,"boolean"),t()(),i(3412,"td",24)(3413,"em")(3414,"strong"),e(3415,"(opcional)"),t()(),i(3416,"p"),e(3417,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),i(3418,"code"),e(3419,"false"),t(),e(3420,"."),t(),i(3421,"p")(3422,"strong"),e(3423,"Componentes compat\xEDveis:"),t(),i(3424,"code"),e(3425,"po-input"),t(),e(3426,"."),t(),i(3427,"blockquote")(3428,"p"),e(3429,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),i(3430,"code"),e(3431,"type: time"),t(),e(3432,"."),t()()()(),i(3433,"tr",16)(3434,"td",17)(3435,"div",25)(3436,"span",26),e(3437," maxLength"),n(3438,"br"),t()()(),i(3439,"td",21)(3440,"code",44),e(3441,"number"),t()(),i(3442,"td",24)(3443,"em")(3444,"strong"),e(3445,"(opcional)"),t()(),i(3446,"p"),e(3447,"Tamanho m\xE1ximo de caracteres."),t(),i(3448,"p")(3449,"strong"),e(3450,"Componentes compat\xEDveis:"),t(),i(3451,"code"),e(3452,"po-input"),t(),e(3453,", "),i(3454,"code"),e(3455,"po-number"),t(),e(3456,", "),i(3457,"code"),e(3458,"po-decimal"),t(),e(3459,", "),i(3460,"code"),e(3461,"po-textarea"),t(),e(3462,", "),i(3463,"code"),e(3464,"po-password"),t(),e(3465,"."),t()()(),i(3466,"tr",16)(3467,"td",17)(3468,"div",25)(3469,"span",26),e(3470," maxValue"),n(3471,"br"),t()()(),i(3472,"td",21)(3473,"code",27),e(3474,"string "),t(),i(3475,"code",44),e(3476," number"),t()(),i(3477,"td",24)(3478,"em")(3479,"strong"),e(3480,"(opcional)"),t()(),i(3481,"p"),e(3482,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),i(3483,"em"),e(3484,"number"),t(),e(3485,", "),i(3486,"em"),e(3487,"date"),t(),e(3488," ou "),i(3489,"em"),e(3490,"dateTime"),t(),e(3491,"."),t(),i(3492,"p")(3493,"strong"),e(3494,"Componentes compat\xEDveis:"),t(),i(3495,"code"),e(3496,"po-datepicker"),t(),e(3497,", "),i(3498,"code"),e(3499,"po-datepicker-range"),t(),e(3500,", "),i(3501,"code"),e(3502,"po-number"),t(),e(3503,", "),i(3504,"code"),e(3505,"po-decimal"),t()()()(),i(3506,"tr",16)(3507,"td",17)(3508,"div",25)(3509,"span",26),e(3510," minLength"),n(3511,"br"),t()()(),i(3512,"td",21)(3513,"code",44),e(3514,"number"),t()(),i(3515,"td",24)(3516,"em")(3517,"strong"),e(3518,"(opcional)"),t()(),i(3519,"p"),e(3520,"Tamanho m\xEDnimo de caracteres."),t(),i(3521,"p")(3522,"strong"),e(3523,"Componentes compat\xEDveis:"),t(),i(3524,"code"),e(3525,"po-input"),t(),e(3526,", "),i(3527,"code"),e(3528,"po-number"),t(),e(3529,", "),i(3530,"code"),e(3531,"po-decimal"),t(),e(3532,", "),i(3533,"code"),e(3534,"po-textarea"),t(),e(3535,", "),i(3536,"code"),e(3537,"po-password"),t(),e(3538,"."),t()()(),i(3539,"tr",16)(3540,"td",17)(3541,"div",25)(3542,"span",26),e(3543," minValue"),n(3544,"br"),t()()(),i(3545,"td",21)(3546,"code",27),e(3547,"string "),t(),i(3548,"code",44),e(3549," number"),t()(),i(3550,"td",24)(3551,"em")(3552,"strong"),e(3553,"(opcional)"),t()(),i(3554,"p"),e(3555,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),i(3556,"em"),e(3557,"number"),t(),e(3558,", "),i(3559,"em"),e(3560,"date"),t(),e(3561," ou "),i(3562,"em"),e(3563,"dateTime"),t(),e(3564,"."),t(),i(3565,"p")(3566,"strong"),e(3567,"Componentes compat\xEDveis:"),t(),i(3568,"code"),e(3569,"po-datepicker"),t(),e(3570,", "),i(3571,"code"),e(3572,"po-datepicker-range"),t(),e(3573,", "),i(3574,"code"),e(3575,"po-number"),t(),e(3576,", "),i(3577,"code"),e(3578,"po-decimal"),t()()()(),i(3579,"tr",16)(3580,"td",17)(3581,"div",25)(3582,"span",26),e(3583," multiple"),n(3584,"br"),t()()(),i(3585,"td",21)(3586,"code",29),e(3587,"boolean"),t()(),i(3588,"td",24)(3589,"em")(3590,"strong"),e(3591,"(opcional)"),t()(),i(3592,"p"),e(3593,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(3594,"p")(3595,"strong"),e(3596,"Componente compat\xEDvel:"),t(),i(3597,"code"),e(3598,"po-lookup"),t(),e(3599,", "),i(3600,"code"),e(3601,"po-upload"),t()()()(),i(3602,"tr",16)(3603,"td",17)(3604,"div",25)(3605,"span",26),e(3606," noAutocomplete"),n(3607,"br"),t()()(),i(3608,"td",21)(3609,"code",29),e(3610,"boolean"),t()(),i(3611,"td",24)(3612,"em")(3613,"strong"),e(3614,"(opcional)"),t()(),i(3615,"p"),e(3616,"Define a propriedade nativa "),i(3617,"code"),e(3618,"autocomplete"),t(),e(3619," do campo como off."),t(),i(3620,"p")(3621,"strong"),e(3622,"Componentes compat\xEDveis:"),t(),i(3623,"code"),e(3624,"po-datepicker"),t(),e(3625,", "),i(3626,"code"),e(3627,"po-datepicker-range"),t(),e(3628,", "),i(3629,"code"),e(3630,"po-input"),t(),e(3631,", "),i(3632,"code"),e(3633,"po-number"),t(),e(3634,", "),i(3635,"code"),e(3636,"po-decimal"),t(),e(3637,", "),i(3638,"code"),e(3639,"po-lookup"),t(),e(3640,", "),i(3641,"code"),e(3642,"po-password"),t()()()(),i(3643,"tr",16)(3644,"td",17)(3645,"div",25)(3646,"span",26),e(3647," offsetColumns"),n(3648,"br"),t()()(),i(3649,"td",21)(3650,"code",44),e(3651,"number"),t()(),i(3652,"td",24)(3653,"em")(3654,"strong"),e(3655,"(opcional)"),t()(),i(3656,"p"),e(3657,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),t(),i(3658,"p"),e(3659,"Deve ser usado o sistema de "),i(3660,"strong"),e(3661,"grid"),t(),e(3662," do PO (1 ... 12 colunas)."),t(),i(3663,"blockquote")(3664,"p"),e(3665,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),t()()()(),i(3666,"tr",16)(3667,"td",17)(3668,"div",25)(3669,"span",26),e(3670," offsetLgColumns"),n(3671,"br"),t()()(),i(3672,"td",21)(3673,"code",44),e(3674,"number"),t()(),i(3675,"td",24)(3676,"em")(3677,"strong"),e(3678,"(opcional)"),t()(),i(3679,"p"),e(3680,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),i(3681,"p"),e(3682,"Deve ser usado o sistema de "),i(3683,"strong"),e(3684,"grid"),t(),e(3685," do PO (1 ... 12 colunas)."),t(),i(3686,"blockquote")(3687,"p"),e(3688,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3689,"code"),e(3690,"offsetColumns"),t(),e(3691,"."),t()()()(),i(3692,"tr",16)(3693,"td",17)(3694,"div",25)(3695,"span",26),e(3696," offsetMdColumns"),n(3697,"br"),t()()(),i(3698,"td",21)(3699,"code",44),e(3700,"number"),t()(),i(3701,"td",24)(3702,"em")(3703,"strong"),e(3704,"(opcional)"),t()(),i(3705,"p"),e(3706,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),i(3707,"p"),e(3708,"Deve ser usado o sistema de "),i(3709,"strong"),e(3710,"grid"),t(),e(3711," do PO (1 ... 12 colunas)."),t(),i(3712,"blockquote")(3713,"p"),e(3714,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3715,"code"),e(3716,"offsetColumns"),t(),e(3717,"."),t()()()(),i(3718,"tr",16)(3719,"td",17)(3720,"div",25)(3721,"span",26),e(3722," offsetSmColumns"),n(3723,"br"),t()()(),i(3724,"td",21)(3725,"code",44),e(3726,"number"),t()(),i(3727,"td",24)(3728,"em")(3729,"strong"),e(3730,"(opcional)"),t()(),i(3731,"p"),e(3732,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),i(3733,"p"),e(3734,"Deve ser usado o sistema de "),i(3735,"strong"),e(3736,"grid"),t(),e(3737," do PO (1 ... 12 colunas)."),t(),i(3738,"blockquote")(3739,"p"),e(3740,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3741,"code"),e(3742,"offsetColumns"),t(),e(3743,"."),t()()()(),i(3744,"tr",16)(3745,"td",17)(3746,"div",25)(3747,"span",26),e(3748," offsetXlColumns"),n(3749,"br"),t()()(),i(3750,"td",21)(3751,"code",44),e(3752,"number"),t()(),i(3753,"td",24)(3754,"em")(3755,"strong"),e(3756,"(opcional)"),t()(),i(3757,"p"),e(3758,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),i(3759,"p"),e(3760,"Deve ser usado o sistema de "),i(3761,"strong"),e(3762,"grid"),t(),e(3763," do PO (1 ... 12 colunas)."),t(),i(3764,"blockquote")(3765,"p"),e(3766,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3767,"code"),e(3768,"offsetColumns"),t(),e(3769,"."),t()()()(),i(3770,"tr",16)(3771,"td",17)(3772,"div",25)(3773,"span",26),e(3774," onError"),n(3775,"br"),t()()(),i(3776,"td",21)(3777,"code",43),e(3778,"Function"),t()(),i(3779,"td",24)(3780,"em")(3781,"strong"),e(3782,"(opcional)"),t()(),i(3783,"p"),e(3784,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),i(3785,"blockquote")(3786,"p"),e(3787,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),i(3788,"code"),e(3789,"HttpErrorResponse"),t(),e(3790,"."),t()(),i(3791,"p")(3792,"strong"),e(3793,"Componente compat\xEDvel"),t(),e(3794,": "),i(3795,"code"),e(3796,"po-upload"),t()()()(),i(3797,"tr",16)(3798,"td",17)(3799,"div",25)(3800,"span",26),e(3801," onSuccess"),n(3802,"br"),t()()(),i(3803,"td",21)(3804,"code",43),e(3805,"Function"),t()(),i(3806,"td",24)(3807,"em")(3808,"strong"),e(3809,"(opcional)"),t()(),i(3810,"p"),e(3811,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),i(3812,"blockquote")(3813,"p"),e(3814,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),i(3815,"code"),e(3816,"HttpResponse"),t(),e(3817,"."),t()(),i(3818,"p")(3819,"strong"),e(3820,"Componente compat\xEDvel"),t(),e(3821,": "),i(3822,"code"),e(3823,"po-upload"),t()()()(),i(3824,"tr",16)(3825,"td",17)(3826,"div",25)(3827,"span",26),e(3828," onUpload"),n(3829,"br"),t()()(),i(3830,"td",21)(3831,"code",43),e(3832,"Function"),t()(),i(3833,"td",24)(3834,"em")(3835,"strong"),e(3836,"(opcional)"),t()(),i(3837,"p"),e(3838,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),i(3839,"pre")(3840,"code"),e(3841,`event.data = {id: 'id do usu\xE1rio'};
`),t()(),i(3842,"p")(3843,"strong"),e(3844,"Componente compat\xEDvel"),t(),e(3845,": "),i(3846,"code"),e(3847,"po-upload"),t()()()(),i(3848,"tr",16)(3849,"td",17)(3850,"div",25)(3851,"span",26),e(3852," optional"),n(3853,"br"),t()()(),i(3854,"td",21)(3855,"code",29),e(3856,"boolean"),t()(),i(3857,"td",24)(3858,"em")(3859,"strong"),e(3860,"(opcional)"),t()(),i(3861,"p"),e(3862,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),i(3863,"blockquote")(3864,"p"),e(3865,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),t()(),i(3866,"ul")(3867,"li"),e(3868,"O campo for "),i(3869,"code"),e(3870,"required"),t(),e(3871,", ou;"),t(),i(3872,"li"),e(3873,"N\xE3o possuir "),i(3874,"code"),e(3875,"help"),t(),e(3876," e "),i(3877,"code"),e(3878,"label"),t(),e(3879,"."),t()()()(),i(3880,"tr",16)(3881,"td",17)(3882,"div",25)(3883,"span",26),e(3884," options"),n(3885,"br"),t()()(),i(3886,"td",21)(3887,"code",32),e(3888,"Array<string> "),t(),i(3889,"code",67),e(3890," Array<PoSelectOption> "),t(),i(3891,"code",68),e(3892," Array<PoMultiselectOption> "),t(),i(3893,"code",69),e(3894," Array<PoCheckboxGroupOption> "),t(),i(3895,"code",70),e(3896," Array<any>"),t()(),i(3897,"td",24)(3898,"em")(3899,"strong"),e(3900,"(opcional)"),t()(),i(3901,"p"),e(3902,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),t(),i(3903,"p")(3904,"strong"),e(3905,"Componentes compat\xEDveis:"),t(),i(3906,"code"),e(3907,"po-select"),t(),e(3908,", "),i(3909,"code"),e(3910,"po-radio-group"),t(),e(3911,", "),i(3912,"code"),e(3913,"po-checkbox-group"),t(),e(3914,", "),i(3915,"code"),e(3916,"po-multiselect"),t(),e(3917,"."),t()()(),i(3918,"tr",16)(3919,"td",17)(3920,"div",25)(3921,"span",26),e(3922," optionsMulti"),n(3923,"br"),t()()(),i(3924,"td",21)(3925,"code",29),e(3926,"boolean"),t()(),i(3927,"td",24)(3928,"em")(3929,"strong"),e(3930,"(opcional)"),t()(),i(3931,"p"),e(3932,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),t()()(),i(3933,"tr",16)(3934,"td",17)(3935,"div",25)(3936,"span",26),e(3937," optionsService"),n(3938,"br"),t()()(),i(3939,"td",21)(3940,"code",27),e(3941,"string "),t(),i(3942,"code",71),e(3943," PoComboFilter "),t(),i(3944,"code",72),e(3945," PoMultiselectFilter"),t()(),i(3946,"td",24)(3947,"em")(3948,"strong"),e(3949,"(opcional)"),t()(),i(3950,"p"),e(3951,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),i(3952,"strong"),e(3953,"Importante"),t()(),i(3954,"blockquote")(3955,"p"),e(3956,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),i(3957,"a",7),e(3958,"guia de API do PO UI"),t(),e(3959,"."),t()()()(),i(3960,"tr",16)(3961,"td",17)(3962,"div",25)(3963,"span",26),e(3964," order"),n(3965,"br"),t()()(),i(3966,"td",21)(3967,"code",44),e(3968,"number"),t()(),i(3969,"td",24)(3970,"em")(3971,"strong"),e(3972,"(opcional)"),t()(),i(3973,"p"),e(3974,"Informa a ordem de exibi\xE7\xE3o do campo."),t(),i(3975,"p"),e(3976,"Exemplo de utiliza\xE7\xE3o:"),t(),i(3977,"p")(3978,"code"),e(3979,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),t()(),i(3980,"p"),e(3981,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),i(3982,"code"),e(3983,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),t()(),i(3984,"p"),e(3985,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),t(),i(3986,"p"),e(3987,"Campos sem "),i(3988,"code"),e(3989,"order"),t(),e(3990,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),t()()(),i(3991,"tr",16)(3992,"td",17)(3993,"div",25)(3994,"span",26),e(3995," params"),n(3996,"br"),t()()(),i(3997,"td",21)(3998,"code",33),e(3999,"any"),t()(),i(4e3,"td",24)(4001,"em")(4002,"strong"),e(4003,"(opcional)"),t()(),i(4004,"p"),e(4005,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),i(4006,"code"),e(4007,"po-lookup"),t(),e(4008,` e
`),i(4009,"code"),e(4010,"po-combo"),t(),e(4011,"."),t(),i(4012,"p"),e(4013,"Por exemplo, para o par\xE2metro "),i(4014,"code"),e(4015,"{ age: 23 }"),t(),e(4016," a URL da requisi\xE7\xE3o ficaria:"),t(),i(4017,"p")(4018,"code"),e(4019,"url + ?age=23&filter=Peter"),t()()()(),i(4020,"tr",16)(4021,"td",17)(4022,"div",25)(4023,"span",26),e(4024," pattern"),n(4025,"br"),t()()(),i(4026,"td",21)(4027,"code",27),e(4028,"string"),t()(),i(4029,"td",24)(4030,"em")(4031,"strong"),e(4032,"(opcional)"),t()(),i(4033,"p"),e(4034,"Regex para valida\xE7\xE3o do campo."),t(),i(4035,"p")(4036,"strong"),e(4037,"Componentes compat\xEDveis:"),t(),i(4038,"code"),e(4039,"po-input"),t(),e(4040,", "),i(4041,"code"),e(4042,"po-password"),t(),e(4043,"."),t()()(),i(4044,"tr",16)(4045,"td",17)(4046,"div",25)(4047,"span",26),e(4048," placeholder"),n(4049,"br"),t()()(),i(4050,"td",21)(4051,"code",27),e(4052,"string"),t()(),i(4053,"td",24)(4054,"em")(4055,"strong"),e(4056,"(opcional)"),t()(),i(4057,"p"),e(4058,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),t()()(),i(4059,"tr",16)(4060,"td",17)(4061,"div",25)(4062,"span",26),e(4063," placeholderSearch"),n(4064,"br"),t()()(),i(4065,"td",21)(4066,"code",27),e(4067,"string"),t()(),i(4068,"td",24)(4069,"em")(4070,"strong"),e(4071,"(opcional)"),t()(),i(4072,"p"),e(4073,"Placeholder do campo de pesquisa do "),i(4074,"code"),e(4075,"po-multiselect"),t(),e(4076,"."),t(),i(4077,"blockquote")(4078,"p"),e(4079,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),t()()()(),i(4080,"tr",16)(4081,"td",17)(4082,"div",25)(4083,"span",26),e(4084," property"),n(4085,"br"),t()()(),i(4086,"td",21)(4087,"code",27),e(4088,"string"),t()(),i(4089,"td",24)(4090,"p"),e(4091,"Nome de refer\xEAncia do campo."),t()()(),i(4092,"tr",16)(4093,"td",17)(4094,"div",25)(4095,"span",26),e(4096," range"),n(4097,"br"),t()()(),i(4098,"td",21)(4099,"code",29),e(4100,"boolean"),t()(),i(4101,"td",24)(4102,"em")(4103,"strong"),e(4104,"(opcional)"),t()(),i(4105,"p"),e(4106,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),t(),i(4107,"blockquote")(4108,"p"),e(4109,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),t()()()(),i(4110,"tr",16)(4111,"td",17)(4112,"div",25)(4113,"span",26),e(4114," readonly"),n(4115,"br"),t()()(),i(4116,"td",21)(4117,"code",29),e(4118,"boolean"),t()(),i(4119,"td",24)(4120,"em")(4121,"strong"),e(4122,"(opcional)"),t()(),i(4123,"p"),e(4124,"Indica que o campo ser\xE1 somente leitura."),t(),i(4125,"p")(4126,"strong"),e(4127,"Componentes compat\xEDveis:"),t(),i(4128,"code"),e(4129,"po-datepicker"),t(),e(4130,", "),i(4131,"code"),e(4132,"po-datepicker-range"),t(),e(4133,", "),i(4134,"code"),e(4135,"po-input"),t(),e(4136,", "),i(4137,"code"),e(4138,"po-number"),t(),e(4139,", "),i(4140,"code"),e(4141,"po-decimal"),t(),e(4142,", "),i(4143,"code"),e(4144,"po-select"),t(),e(4145,", "),i(4146,"code"),e(4147,"po-textarea"),t(),e(4148,", "),i(4149,"code"),e(4150,"po-password"),t()()()(),i(4151,"tr",16)(4152,"td",17)(4153,"div",25)(4154,"span",26),e(4155," removeInitialFilter"),n(4156,"br"),t()()(),i(4157,"td",21)(4158,"code",29),e(4159,"boolean"),t()(),i(4160,"td",24)(4161,"em")(4162,"strong"),e(4163,"(opcional)"),t()(),i(4164,"p"),e(4165,"Define que o filtro no primeiro clique ser\xE1 removido."),t(),i(4166,"blockquote")(4167,"p"),e(4168,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),t()(),i(4169,"p")(4170,"strong"),e(4171,"Componente compat\xEDvel"),t(),e(4172,": "),i(4173,"code"),e(4174,"po-combo"),t()()()(),i(4175,"tr",16)(4176,"td",17)(4177,"div",25)(4178,"span",26),e(4179," required"),n(4180,"br"),t()()(),i(4181,"td",21)(4182,"code",29),e(4183,"boolean"),t()(),i(4184,"td",24)(4185,"em")(4186,"strong"),e(4187,"(opcional)"),t()(),i(4188,"p"),e(4189,"Define a obrigatoriedade do campo."),t()()(),i(4190,"tr",16)(4191,"td",17)(4192,"div",25)(4193,"span",26),e(4194," requiredFieldErrorMessage"),n(4195,"br"),t()()(),i(4196,"td",21)(4197,"code",29),e(4198,"boolean"),t()(),i(4199,"td",24)(4200,"em")(4201,"strong"),e(4202,"(opcional)"),t()(),i(4203,"p"),e(4204,"Exibe a mensagem setada na propriedade "),i(4205,"code"),e(4206,"errorMessage"),t(),e(4207," se o campo estiver vazio e for requerido."),t(),i(4208,"blockquote")(4209,"p"),e(4210,"Necess\xE1rio que a propriedade "),i(4211,"code"),e(4212,"required"),t(),e(4213," esteja habilitada."),t()(),i(4214,"p")(4215,"strong"),e(4216,"Componentes compat\xEDveis:"),t(),i(4217,"code"),e(4218,"po-datepicker"),t(),e(4219,", "),i(4220,"code"),e(4221,"po-input"),t(),e(4222,", "),i(4223,"code"),e(4224,"po-number"),t(),e(4225,", "),i(4226,"code"),e(4227,"po-decimal"),t(),e(4228,", "),i(4229,"code"),e(4230,"po-password"),t(),e(4231,"."),t()()(),i(4232,"tr",16)(4233,"td",17)(4234,"div",25)(4235,"span",26),e(4236," restrictions"),n(4237,"br"),t()()(),i(4238,"td",21)(4239,"code",73),e(4240,"PoUploadFileRestrictions"),t()(),i(4241,"td",24)(4242,"em")(4243,"strong"),e(4244,"(opcional)"),t()(),i(4245,"p"),e(4246,"Objeto que segue a defini\xE7\xE3o da interface "),i(4247,"code"),e(4248,"PoUploadFileRestrictions"),t(),e(4249,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t(),i(4250,"p")(4251,"strong"),e(4252,"Componente compat\xEDvel"),t(),e(4253,": "),i(4254,"code"),e(4255,"po-upload"),t()()()(),i(4256,"tr",16)(4257,"td",17)(4258,"div",25)(4259,"span",26),e(4260," rows"),n(4261,"br"),t()()(),i(4262,"td",21)(4263,"code",44),e(4264,"number"),t()(),i(4265,"td",24)(4266,"em")(4267,"strong"),e(4268,"(opcional)"),t()(),i(4269,"p"),e(4270,"Quantidade de linhas exibidas no "),i(4271,"code"),e(4272,"po-textarea"),t(),e(4273,"."),t()()(),i(4274,"tr",16)(4275,"td",17)(4276,"div",25)(4277,"span",26),e(4278," searchService"),n(4279,"br"),t()()(),i(4280,"td",21)(4281,"code",27),e(4282,"string "),t(),i(4283,"code",34),e(4284," PoLookupFilter"),t()(),i(4285,"td",24)(4286,"em")(4287,"strong"),e(4288,"(opcional)"),t()(),i(4289,"p"),e(4290,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),i(4291,"code"),e(4292,"columns"),t(),e(4293,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),i(4294,"strong"),e(4295,"Importante:"),t()(),i(4296,"blockquote")(4297,"p"),e(4298,"Caso utilizar a propriedade "),i(4299,"code"),e(4300,"optionsService"),t(),e(4301,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),i(4302,"a",7),e(4303,"guia de API do PO UI"),t(),e(4304,"."),t()()()(),i(4305,"tr",16)(4306,"td",17)(4307,"div",25)(4308,"span",26),e(4309," secret"),n(4310,"br"),t()()(),i(4311,"td",21)(4312,"code",29),e(4313,"boolean"),t()(),i(4314,"td",24)(4315,"em")(4316,"strong"),e(4317,"(opcional)"),t()(),i(4318,"p"),e(4319,"Esconde a informa\xE7\xE3o estilo "),i(4320,"em"),e(4321,"password"),t(),e(4322,", pode ser utilizado quando o tipo de dado for "),i(4323,"em"),e(4324,"string"),t(),e(4325,"."),t()()(),i(4326,"tr",16)(4327,"td",17)(4328,"div",25)(4329,"span",26),e(4330," showRequired"),n(4331,"br"),t()()(),i(4332,"td",21)(4333,"code",29),e(4334,"boolean"),t()(),i(4335,"td",24)(4336,"em")(4337,"strong"),e(4338,"(opcional)"),t()(),i(4339,"p"),e(4340,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),i(4341,"blockquote")(4342,"p"),e(4343,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(4344,"ul")(4345,"li"),e(4346,"N\xE3o possuir "),i(4347,"code"),e(4348,"p-help"),t(),e(4349," e/ou "),i(4350,"code"),e(4351,"p-label"),t(),e(4352,"."),t()()()(),i(4353,"tr",16)(4354,"td",17)(4355,"div",25)(4356,"span",26),e(4357," size"),n(4358,"br"),t()()(),i(4359,"td",21)(4360,"code",27),e(4361,"string"),t()(),i(4362,"td",24)(4363,"em")(4364,"strong"),e(4365,"(opcional)"),t()(),i(4366,"p"),e(4367,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),t(),i(4368,"ul")(4369,"li")(4370,"code"),e(4371,"small"),t(),e(4372,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(4373,"li")(4374,"code"),e(4375,"medium"),t(),e(4376,": aplica a medida medium de cada componente."),t(),i(4377,"li")(4378,"code"),e(4379,"large"),t(),e(4380,": aplica a medida large de cada componente (dispon\xEDvel para "),i(4381,"code"),e(4382,"po-checkbox"),t(),e(4383," e "),i(4384,"code"),e(4385,"po-radio-group"),t(),e(4386,")."),i(4387,"blockquote")(4388,"p"),e(4389,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(4390,"code"),e(4391,"medium"),t(),e(4392,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(4393,"a",39),e(4394,"po-theme"),t(),e(4395,"."),t()()()()()(),i(4396,"tr",16)(4397,"td",17)(4398,"div",25)(4399,"span",26),e(4400," sort"),n(4401,"br"),t()()(),i(4402,"td",21)(4403,"code",29),e(4404,"boolean"),t()(),i(4405,"td",24)(4406,"em")(4407,"strong"),e(4408,"(opcional)"),t()(),i(4409,"p"),e(4410,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),t(),i(4411,"p")(4412,"strong"),e(4413,"Componentes compat\xEDveis:"),t(),i(4414,"code"),e(4415,"po-combo"),t(),e(4416,", po-multiselect"),t()()(),i(4417,"tr",16)(4418,"td",17)(4419,"div",25)(4420,"span",26),e(4421," step"),n(4422,"br"),t()()(),i(4423,"td",21)(4424,"code",44),e(4425,"number"),t()(),i(4426,"td",24)(4427,"em")(4428,"strong"),e(4429,"(opcional)"),t()(),i(4430,"p"),e(4431,"Intervalo utilizado no "),i(4432,"code"),e(4433,"po-number"),t(),e(4434,"."),t()()(),i(4435,"tr",16)(4436,"td",17)(4437,"div",25)(4438,"span",26),e(4439," thousandMaxlength"),n(4440,"br"),t()()(),i(4441,"td",21)(4442,"code",44),e(4443,"number"),t()(),i(4444,"td",24)(4445,"em")(4446,"strong"),e(4447,"(opcional)"),t()(),i(4448,"p"),e(4449,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),t(),i(4450,"blockquote")(4451,"p"),e(4452,"Esta propriedade s\xF3 pode ser utilizada quando o "),i(4453,"code"),e(4454,"type"),t(),e(4455," for "),i(4456,"em"),e(4457,"currency"),t(),e(4458," ou "),i(4459,"em"),e(4460,"decimal"),t(),e(4461,"."),t()()()(),i(4462,"tr",16)(4463,"td",17)(4464,"div",25)(4465,"span",26),e(4466," type"),n(4467,"br"),t()()(),i(4468,"td",21)(4469,"code",27),e(4470,"string "),t(),i(4471,"code",74),e(4472," PoDynamicFieldType"),t()(),i(4473,"td",24)(4474,"em")(4475,"strong"),e(4476,"(opcional)"),t()(),i(4477,"p"),e(4478,"Tipo do valor campo."),t(),i(4479,"p"),e(4480,"Valores v\xE1lidos:"),t(),i(4481,"ul")(4482,"li")(4483,"code"),e(4484,"boolean"),t(),e(4485,": Valores "),i(4486,"em"),e(4487,"booleanos"),t(),e(4488,"."),t(),i(4489,"li")(4490,"code"),e(4491,"currency"),t(),e(4492,": Valores monet\xE1rios."),t(),i(4493,"li")(4494,"code"),e(4495,"decimal"),t(),e(4496,": Valores decimais."),t(),i(4497,"li")(4498,"code"),e(4499,"date"),t(),e(4500,": Valores de datas."),i(4501,"ul")(4502,"li"),e(4503,"Aceita os tipos "),i(4504,"strong"),e(4505,"string"),t(),e(4506," e "),i(4507,"strong"),e(4508,"Date"),t(),e(4509,` padr\xE3o do Javascript,
por exemplo: `),i(4510,"code"),e(4511,"'2017-11-28'"),t(),e(4512," ou "),i(4513,"code"),e(4514,"new Date(2017, 10, 28)"),t(),e(4515,"."),t()()(),i(4516,"li")(4517,"code"),e(4518,"dateTime"),t(),e(4519,": Valor de data com hor\xE1rio."),i(4520,"ul")(4521,"li"),e(4522,"Aceita o tipo "),i(4523,"em"),e(4524,"string"),t(),e(4525," no formato "),i(4526,"strong"),e(4527,"ISO-8601"),t(),e(4528," extendido "),i(4529,"strong"),e(4530,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(4531,`
e o tipo `),i(4532,"strong"),e(4533,"Date"),t(),e(4534," padr\xE3o do Javascript, por exemplo: "),i(4535,"code"),e(4536,"'2017-11-28T00:00:00-02:00'"),t(),e(4537," ou "),i(4538,"code"),e(4539,"new Date(2017, 10, 28)"),t(),e(4540,"."),t()()(),i(4541,"li")(4542,"code"),e(4543,"number"),t(),e(4544,": Valores num\xE9ricos."),t(),i(4545,"li")(4546,"code"),e(4547,"string"),t(),e(4548,": Textos."),t(),i(4549,"li")(4550,"code"),e(4551,"time"),t(),e(4552,": Valor do hor\xE1rio."),i(4553,"ul")(4554,"li"),e(4555,"Aceita o tipo "),i(4556,"strong"),e(4557,"string"),t(),e(4558," nos formatos "),i(4559,"strong"),e(4560,"'HH:mm:ss'"),t(),e(4561," ou "),i(4562,"strong"),e(4563,"'HH:mm:ss.ffffff'"),t(),e(4564,", por exemplo: "),i(4565,"code"),e(4566,"'23:12:45'"),t(),e(4567,"."),t()()()()()(),i(4568,"tr",16)(4569,"td",17)(4570,"div",25)(4571,"span",26),e(4572," url"),n(4573,"br"),t()()(),i(4574,"td",21)(4575,"code",27),e(4576,"string"),t()(),i(4577,"td",24)(4578,"em")(4579,"strong"),e(4580,"(opcional)"),t()(),i(4581,"p"),e(4582,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t(),i(4583,"p")(4584,"strong"),e(4585,"Componente compat\xEDvel"),t(),e(4586,": "),i(4587,"code"),e(4588,"po-upload"),t()()()(),i(4589,"tr",16)(4590,"td",17)(4591,"div",25)(4592,"span",26),e(4593," validate"),n(4594,"br"),t()()(),i(4595,"td",21)(4596,"code",27),e(4597,"string "),t(),i(4598,"code",43),e(4599," Function"),t()(),i(4600,"td",24)(4601,"em")(4602,"strong"),e(4603,"(opcional)"),t()(),i(4604,"p"),e(4605,"Fun\xE7\xE3o ou servi\xE7o para validar as "),i(4606,"strong"),e(4607,"mudan\xE7as do campo"),t(),e(4608,"."),t(),i(4609,"ul")(4610,"li"),e(4611,"A propriedade aceita os seguintes tipos:"),t()(),i(4612,"ul")(4613,"li")(4614,"strong"),e(4615,"String"),t(),e(4616,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),i(4617,"code"),e(4618,"POST"),t(),e(4619,"."),t(),i(4620,"li")(4621,"strong"),e(4622,"Function"),t(),e(4623,": M\xE9todo que ser\xE1 executado."),t()(),i(4624,"p"),e(4625,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),i(4626,"code"),e(4627,"PoDynamicFormFieldChanged"),t(),e(4628,":"),t(),i(4629,"p")(4630,"code"),e(4631,"{ property: 'property name', value: 'new value' }"),t()(),i(4632,"p"),e(4633,"O retorno desta fun\xE7\xE3o deve ser do tipo "),i(4634,"a",75),e(4635,"PoDynamicFormFieldValidation"),t(),e(4636,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),t(),i(4637,"pre")(4638,"code"),e(4639,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),t()(),i(4640,"p"),e(4641,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),i(4642,"code"),e(4643,"bind"),t(),e(4644,`, por exemplo:
`),i(4645,"code"),e(4646,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),t()()()(),i(4647,"tr",16)(4648,"td",17)(4649,"div",25)(4650,"span",26),e(4651," visible"),n(4652,"br"),t()()(),i(4653,"td",21)(4654,"code",29),e(4655,"boolean"),t()(),i(4656,"td",24)(4657,"em")(4658,"strong"),e(4659,"(opcional)"),t()(),i(4660,"p"),e(4661,"Indica se o campo ser\xE1 vis\xEDvel."),t()()()(),i(4662,"h4",42)(4663,"code",5),e(4664,"PoLookupColumn"),t()(),i(4665,"div",2)(4666,"p"),e(4667,"Interface para configura\xE7\xE3o das colunas do po-lookup."),t()(),i(4668,"h4",12),e(4669,"Propriedades"),t(),i(4670,"table",13)(4671,"tr",14)(4672,"th",15),e(4673,"Nome"),t(),i(4674,"th",15),e(4675,"Tipo"),t(),i(4676,"th",15),e(4677,"Descri\xE7\xE3o"),t()(),i(4678,"tr",16)(4679,"td",17)(4680,"div",25)(4681,"span",26),e(4682," fieldLabel"),n(4683,"br"),t()()(),i(4684,"td",21)(4685,"code",29),e(4686,"boolean"),t()(),i(4687,"td",24)(4688,"em")(4689,"strong"),e(4690,"(opcional)"),t()(),i(4691,"p"),e(4692,"Indica que a coluna ser\xE1 utilizada como valor do campo e como filtro dentro da modal."),t(),i(4693,"p"),e(4694,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),t(),i(4695,"p"),e(4696,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),i(4697,"code"),e(4698,"p-field-format"),t(),e(4699," ou "),i(4700,"code"),e(4701,"p-field-label"),t(),e(4702," forem configurados no componente."),t()()(),i(4703,"tr",16)(4704,"td",17)(4705,"div",25)(4706,"span",26),e(4707," format"),n(4708,"br"),t()()(),i(4709,"td",21)(4710,"code",27),e(4711,"string"),t()(),i(4712,"td",24)(4713,"em")(4714,"strong"),e(4715,"(opcional)"),t()(),i(4716,"p"),e(4717,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),i(4718,"ul")(4719,"li"),e(4720,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),i(4721,"li"),e(4722,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),i(4723,"tr",16)(4724,"td",17)(4725,"div",25)(4726,"span",26),e(4727," label"),n(4728,"br"),t()()(),i(4729,"td",21)(4730,"code",27),e(4731,"string"),t()(),i(4732,"td",24)(4733,"em")(4734,"strong"),e(4735,"(opcional)"),t()(),i(4736,"p"),e(4737,"Texto para t\xEDtulo da coluna."),t(),i(4738,"p"),e(4739,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(4740,"em"),e(4741,"label"),t(),e(4742," o valor da propriedade "),i(4743,"em"),e(4744,"property"),t(),e(4745," com a primeira letra em mai\xFAsculo."),t()()(),i(4746,"tr",16)(4747,"td",17)(4748,"div",25)(4749,"span",26),e(4750," property"),n(4751,"br"),t()()(),i(4752,"td",21)(4753,"code",27),e(4754,"string"),t()(),i(4755,"td",24)(4756,"em")(4757,"strong"),e(4758,"(opcional)"),t()(),i(4759,"p"),e(4760,"Nome identificador da coluna."),t()()(),i(4761,"tr",16)(4762,"td",17)(4763,"div",25)(4764,"span",26),e(4765," type"),n(4766,"br"),t()()(),i(4767,"td",21)(4768,"code",27),e(4769,"string"),t()(),i(4770,"td",24)(4771,"em")(4772,"strong"),e(4773,"(opcional)"),t()(),i(4774,"p"),e(4775,"Tipo da coluna:"),t(),i(4776,"ul")(4777,"li"),e(4778,"string (padr\xE3o): textos"),t(),i(4779,"li"),e(4780,"number: valores num\xE9ricos"),t(),i(4781,"li"),e(4782,"date: data"),t(),i(4783,"li"),e(4784,"currency: valores monet\xE1rios"),t(),i(4785,"li"),e(4786,"dateTime: data e hora"),t()()()(),i(4787,"tr",16)(4788,"td",17)(4789,"div",25)(4790,"span",26),e(4791," width"),n(4792,"br"),t()()(),i(4793,"td",21)(4794,"code",27),e(4795,"string"),t()(),i(4796,"td",24)(4797,"em")(4798,"strong"),e(4799,"(opcional)"),t()(),i(4800,"p"),e(4801,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()(),i(4802,"h4",42)(4803,"code",5),e(4804,"PoLookupFilter"),t()(),i(4805,"div",2)(4806,"p"),e(4807,"Define o tipo de busca utilizado no po-lookup."),t()(),i(4808,"h4",12),e(4809,"M\xE9todos"),t(),i(4810,"table",40)(4811,"tr",16)(4812,"th",41)(4813,"div",25)(4814,"h4")(4815,"span",26),e(4816," getFilteredItems "),t()()()()(),i(4817,"tr",24)(4818,"td",24)(4819,"p"),e(4820,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),i(4821,"em"),e(4822,"Observable"),t(),e(4823," com a resposta da API no formato da interface "),i(4824,"code"),e(4825,"PoLookupResponseApi"),t(),e(4826,"."),t()()()(),i(4827,"h5")(4828,"b"),e(4829,"Par\xE2metros"),t()(),i(4830,"table",13)(4831,"tr",14)(4832,"th",15),e(4833,"Nome"),t(),i(4834,"th",15),e(4835,"Tipo"),t(),i(4836,"th",15),e(4837,"Descri\xE7\xE3o"),t()(),i(4838,"tr",16)(4839,"td",17),e(4840," params"),t(),i(4841,"td",21)(4842,"code",76),e(4843," PoLookupFilteredItemsParams "),t()(),i(4844,"td",24)(4845,"p"),e(4846,"Objeto enviado por par\xE2metro que implementa a interface "),i(4847,"code"),e(4848,"PoLookupFilteredItemsParams"),t(),e(4849,"."),t()()()(),n(4850,"br"),i(4851,"table",40)(4852,"tr",16)(4853,"th",41)(4854,"div",25)(4855,"h4")(4856,"span",26),e(4857," getObjectByValue "),t()()()()(),i(4858,"tr",24)(4859,"td",24)(4860,"p"),e(4861,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),i(4862,"p"),e(4863,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),t()()()(),i(4864,"h5")(4865,"b"),e(4866,"Par\xE2metros"),t()(),i(4867,"table",13)(4868,"tr",14)(4869,"th",15),e(4870,"Nome"),t(),i(4871,"th",15),e(4872,"Tipo"),t(),i(4873,"th",15),e(4874,"Descri\xE7\xE3o"),t()(),i(4875,"tr",16)(4876,"td",17),e(4877," value"),t(),i(4878,"td",21)(4879,"code",27),e(4880," string "),t(),i(4881,"code",70),e(4882," Array<any> "),t()(),i(4883,"td",24)(4884,"p"),e(4885,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),i(4886,"tr",16)(4887,"td",17),e(4888," filterParams"),t(),i(4889,"td",21)(4890,"code",76),e(4891," any "),t()(),i(4892,"td",24)(4893,"p"),e(4894,"Valor informado atrav\xE9s da propriedade "),i(4895,"code"),e(4896,"p-filter-params"),t(),e(4897,"."),t()()()(),n(4898,"br"),i(4899,"h4",42)(4900,"code",5),e(4901,"PoLookupFilteredItemsParams"),t()(),i(4902,"div",2)(4903,"p"),e(4904,"Interface do objeto enviado como par\xE2metro na fun\xE7\xE3o "),i(4905,"code"),e(4906,"getFilteredItems"),t(),e(4907,"."),t()(),i(4908,"h4",12),e(4909,"Propriedades"),t(),i(4910,"table",13)(4911,"tr",14)(4912,"th",15),e(4913,"Nome"),t(),i(4914,"th",15),e(4915,"Tipo"),t(),i(4916,"th",15),e(4917,"Descri\xE7\xE3o"),t()(),i(4918,"tr",16)(4919,"td",17)(4920,"div",25)(4921,"span",26),e(4922," advancedFilters"),n(4923,"br"),t()()(),i(4924,"td",21)(4925,"code",77),e(4926,`{ [key: string]: any;
}`),t()(),i(4927,"td",24)(4928,"em")(4929,"strong"),e(4930,"(opcional)"),t()(),i(4931,"p"),e(4932,"Valores informados nos campos de busca avan\xE7ada, que ser\xE3o utilizados para filtrar a lista de itens."),t()()(),i(4933,"tr",16)(4934,"td",17)(4935,"div",25)(4936,"span",26),e(4937," filter"),n(4938,"br"),t()()(),i(4939,"td",21)(4940,"code",27),e(4941,"string"),t()(),i(4942,"td",24)(4943,"em")(4944,"strong"),e(4945,"(opcional)"),t()(),i(4946,"p"),e(4947,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),i(4948,"tr",16)(4949,"td",17)(4950,"div",25)(4951,"span",26),e(4952," filterParams"),n(4953,"br"),t()()(),i(4954,"td",21)(4955,"code",33),e(4956,"any"),t()(),i(4957,"td",24)(4958,"em")(4959,"strong"),e(4960,"(opcional)"),t()(),i(4961,"p"),e(4962,"Valor informado atrav\xE9s da propriedade "),i(4963,"code"),e(4964,"p-filter-params"),t(),e(4965,"."),t()()(),i(4966,"tr",16)(4967,"td",17)(4968,"div",25)(4969,"span",26),e(4970," order"),n(4971,"br"),t()()(),i(4972,"td",21)(4973,"code",27),e(4974,"string"),t()(),i(4975,"td",24)(4976,"em")(4977,"strong"),e(4978,"(opcional)"),t()(),i(4979,"p"),e(4980,"Coluna que est\xE1 sendo ordenada na tabela."),t(),i(4981,"ul")(4982,"li"),e(4983,"Coluna decrescente ser\xE1 informada da seguinte forma: "),i(4984,"code"),e(4985,"-<colunaOrdenada>"),t(),e(4986,", por exemplo "),i(4987,"code"),e(4988,"-name"),t(),e(4989,"."),t(),i(4990,"li"),e(4991,"Coluna ascendente ser\xE1 informada da seguinte forma: "),i(4992,"code"),e(4993,"<colunaOrdenada>"),t(),e(4994,", por exemplo "),i(4995,"code"),e(4996,"name"),t(),e(4997,"."),t()()()(),i(4998,"tr",16)(4999,"td",17)(5e3,"div",25)(5001,"span",26),e(5002," page"),n(5003,"br"),t()()(),i(5004,"td",21)(5005,"code",44),e(5006,"number"),t()(),i(5007,"td",24)(5008,"em")(5009,"strong"),e(5010,"(opcional)"),t()(),i(5011,"p"),e(5012,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),i(5013,"tr",16)(5014,"td",17)(5015,"div",25)(5016,"span",26),e(5017," pageSize"),n(5018,"br"),t()()(),i(5019,"td",21)(5020,"code",44),e(5021,"number"),t()(),i(5022,"td",24)(5023,"em")(5024,"strong"),e(5025,"(opcional)"),t()(),i(5026,"p"),e(5027,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()(),i(5028,"h4",42)(5029,"code",5),e(5030,"PoLookupLiterals"),t()(),i(5031,"div",2)(5032,"p"),e(5033,"Interface para defini\xE7\xE3o das literais usadas no "),i(5034,"code"),e(5035,"po-lookup"),t(),e(5036,"."),t()(),i(5037,"h4",12),e(5038,"Propriedades"),t(),i(5039,"table",13)(5040,"tr",14)(5041,"th",15),e(5042,"Nome"),t(),i(5043,"th",15),e(5044,"Tipo"),t(),i(5045,"th",15),e(5046,"Descri\xE7\xE3o"),t()(),i(5047,"tr",16)(5048,"td",17)(5049,"div",25)(5050,"span",26),e(5051," clean"),n(5052,"br"),t()()(),i(5053,"td",21)(5054,"code",27),e(5055,"string"),t()(),i(5056,"td",24)(5057,"em")(5058,"strong"),e(5059,"(opcional)"),t()(),i(5060,"p"),e(5061,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de limpar."),t()()(),i(5062,"tr",16)(5063,"td",17)(5064,"div",25)(5065,"span",26),e(5066," modalAdvancedSearch"),n(5067,"br"),t()()(),i(5068,"td",21)(5069,"code",27),e(5070,"string"),t()(),i(5071,"td",24)(5072,"em")(5073,"strong"),e(5074,"(opcional)"),t()(),i(5075,"p"),e(5076,"Texto do link de busca avan\xE7ada."),t(),i(5077,"p"),e(5078,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),t()()(),i(5079,"tr",16)(5080,"td",17)(5081,"div",25)(5082,"span",26),e(5083," modalAdvancedSearchPrimaryActionLabel"),n(5084,"br"),t()()(),i(5085,"td",21)(5086,"code",27),e(5087,"string"),t()(),i(5088,"td",24)(5089,"em")(5090,"strong"),e(5091,"(opcional)"),t()(),i(5092,"p"),e(5093,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal de busca avan\xE7ada."),t()()(),i(5094,"tr",16)(5095,"td",17)(5096,"div",25)(5097,"span",26),e(5098," modalAdvancedSearchSecondaryActionLabel"),n(5099,"br"),t()()(),i(5100,"td",21)(5101,"code",27),e(5102,"string"),t()(),i(5103,"td",24)(5104,"em")(5105,"strong"),e(5106,"(opcional)"),t()(),i(5107,"p"),e(5108,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal de busca avan\xE7ada."),t()()(),i(5109,"tr",16)(5110,"td",17)(5111,"div",25)(5112,"span",26),e(5113," modalAdvancedSearchTitle"),n(5114,"br"),t()()(),i(5115,"td",21)(5116,"code",27),e(5117,"string"),t()(),i(5118,"td",24)(5119,"em")(5120,"strong"),e(5121,"(opcional)"),t()(),i(5122,"p"),e(5123,"Texto exibido no t\xEDtulo da modal de busca avan\xE7ada."),t()()(),i(5124,"tr",16)(5125,"td",17)(5126,"div",25)(5127,"span",26),e(5128," modalDisclaimerGroupTitle"),n(5129,"br"),t()()(),i(5130,"td",21)(5131,"code",27),e(5132,"string"),t()(),i(5133,"td",24)(5134,"em")(5135,"strong"),e(5136,"(opcional)"),t()(),i(5137,"p"),e(5138,"Texto exibido no t\xEDtulo do disclaimer."),t()()(),i(5139,"tr",16)(5140,"td",17)(5141,"div",25)(5142,"span",26),e(5143," modalPlaceholder"),n(5144,"br"),t()()(),i(5145,"td",21)(5146,"code",27),e(5147,"string"),t()(),i(5148,"td",24)(5149,"em")(5150,"strong"),e(5151,"(opcional)"),t()(),i(5152,"p"),e(5153,"Texto exibido no placeholder do input da modal."),t()()(),i(5154,"tr",16)(5155,"td",17)(5156,"div",25)(5157,"span",26),e(5158," modalPrimaryActionLabel"),n(5159,"br"),t()()(),i(5160,"td",21)(5161,"code",27),e(5162,"string"),t()(),i(5163,"td",24)(5164,"em")(5165,"strong"),e(5166,"(opcional)"),t()(),i(5167,"p"),e(5168,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),t()()(),i(5169,"tr",16)(5170,"td",17)(5171,"div",25)(5172,"span",26),e(5173," modalSecondaryActionLabel"),n(5174,"br"),t()()(),i(5175,"td",21)(5176,"code",27),e(5177,"string"),t()(),i(5178,"td",24)(5179,"em")(5180,"strong"),e(5181,"(opcional)"),t()(),i(5182,"p"),e(5183,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),t()()(),i(5184,"tr",16)(5185,"td",17)(5186,"div",25)(5187,"span",26),e(5188," modalTableLoadMoreData"),n(5189,"br"),t()()(),i(5190,"td",21)(5191,"code",27),e(5192,"string"),t()(),i(5193,"td",24)(5194,"em")(5195,"strong"),e(5196,"(opcional)"),t()(),i(5197,"p"),e(5198,"Label do "),i(5199,"code"),e(5200,"button"),t(),e(5201," que deve carregar mais resultados na tabela, ou seja, exibir mais itens."),t()()(),i(5202,"tr",16)(5203,"td",17)(5204,"div",25)(5205,"span",26),e(5206," modalTableLoadingData"),n(5207,"br"),t()()(),i(5208,"td",21)(5209,"code",27),e(5210,"string"),t()(),i(5211,"td",24)(5212,"em")(5213,"strong"),e(5214,"(opcional)"),t()(),i(5215,"p"),e(5216,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),t()()(),i(5217,"tr",16)(5218,"td",17)(5219,"div",25)(5220,"span",26),e(5221," modalTableNoColumns"),n(5222,"br"),t()()(),i(5223,"td",21)(5224,"code",27),e(5225,"string"),t()(),i(5226,"td",24)(5227,"em")(5228,"strong"),e(5229,"(opcional)"),t()(),i(5230,"p"),e(5231,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),t()()(),i(5232,"tr",16)(5233,"td",17)(5234,"div",25)(5235,"span",26),e(5236," modalTableNoData"),n(5237,"br"),t()()(),i(5238,"td",21)(5239,"code",27),e(5240,"string"),t()(),i(5241,"td",24)(5242,"em")(5243,"strong"),e(5244,"(opcional)"),t()(),i(5245,"p"),e(5246,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),t()()(),i(5247,"tr",16)(5248,"td",17)(5249,"div",25)(5250,"span",26),e(5251," modalTitle"),n(5252,"br"),t()()(),i(5253,"td",21)(5254,"code",27),e(5255,"string"),t()(),i(5256,"td",24)(5257,"em")(5258,"strong"),e(5259,"(opcional)"),t()(),i(5260,"p"),e(5261,"Texto exibido no t\xEDtulo da modal."),t()()(),i(5262,"tr",16)(5263,"td",17)(5264,"div",25)(5265,"span",26),e(5266," search"),n(5267,"br"),t()()(),i(5268,"td",21)(5269,"code",27),e(5270,"string"),t()(),i(5271,"td",24)(5272,"em")(5273,"strong"),e(5274,"(opcional)"),t()(),i(5275,"p"),e(5276,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de pesquisa."),t()()()(),i(5277,"h4",42)(5278,"code",5),e(5279,"PoLookupResponseApi"),t()(),i(5280,"div",2)(5281,"p"),e(5282,"Interface que representa a estrutura de resposta de uma cole\xE7\xE3o de itens. "),t()(),i(5283,"h4",12),e(5284,"Propriedades"),t(),i(5285,"table",13)(5286,"tr",14)(5287,"th",15),e(5288,"Nome"),t(),i(5289,"th",15),e(5290,"Tipo"),t(),i(5291,"th",15),e(5292,"Descri\xE7\xE3o"),t()(),i(5293,"tr",16)(5294,"td",17)(5295,"div",25)(5296,"span",26),e(5297," hasNext"),n(5298,"br"),t()()(),i(5299,"td",21)(5300,"code",29),e(5301,"boolean"),t()(),i(5302,"td",24)(5303,"p"),e(5304,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),i(5305,"tr",16)(5306,"td",17)(5307,"div",25)(5308,"span",26),e(5309," items"),n(5310,"br"),t()()(),i(5311,"td",21)(5312,"code",78),e(5313,"Array<object>"),t()(),i(5314,"td",24)(5315,"p"),e(5316,"Lista de itens retornados."),t()()()(),i(5317,"h3"),e(5318,"Enums"),t(),i(5319,"h4",4)(5320,"code",5),e(5321,"PoTableColumnSpacing"),t()(),i(5322,"div",2)(5323,"p"),e(5324,"Tipos de espa\xE7amento interno (padding) das c\xE9lulas ("),i(5325,"strong"),e(5326,"p-spacing"),t(),e(5327,") do po-table."),t()(),i(5328,"h4",12),e(5329,"Propriedades"),t(),i(5330,"table",13)(5331,"tr",14)(5332,"th",15),e(5333,"Nome"),t(),i(5334,"th",15),e(5335,"Descri\xE7\xE3o"),t()(),i(5336,"tr",16)(5337,"td",17)(5338,"div",25)(5339,"span",26),e(5340," ExtraSmall"),n(5341,"br"),t()()(),i(5342,"td",24)(5343,"p"),e(5344,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 1rem (horizontal)."),t()()(),i(5345,"tr",16)(5346,"td",17)(5347,"div",25)(5348,"span",26),e(5349," Small"),n(5350,"br"),t()()(),i(5351,"td",24)(5352,"p"),e(5353,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),t()()(),i(5354,"tr",16)(5355,"td",17)(5356,"div",25)(5357,"span",26),e(5358," Medium"),n(5359,"br"),t()()(),i(5360,"td",24)(5361,"p"),e(5362,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),t()()(),i(5363,"tr",16)(5364,"td",17)(5365,"div",25)(5366,"span",26),e(5367," Large"),n(5368,"br"),t()()(),i(5369,"td",24)(5370,"p"),e(5371,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),t()()()()())},dependencies:[y],encapsulation:2})}return a})();var Ne=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(ie(ve),ie(he))};static \u0275cmp=S({type:a,selectors:[["ng-component"]],standalone:!1,decls:11,vars:4,consts:[["p-title","Lookup",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),x("p-click",function(){return o.changeTab("doc")}),n(3,"sample-po-lookup-doc"),t(),i(4,"po-tab",3),x("p-click",function(){return o.changeTab("web")}),n(5,"sample-po-lookup-basic-view")(6,"sample-po-lookup-labs-view")(7,"sample-po-lookup-hero-view")(8,"sample-po-lookup-hero-reactive-form-view")(9,"sample-po-lookup-sw-films-view")(10,"sample-po-lookup-multiple-view"),t()()()),l&2&&(u("p-actions",o.actions),d(2),u("p-active",o.activeTab==="doc"),d(2),u("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[Pe,C,k,we,Me,De,Ae,je,ze,He],encapsulation:2})}return a})();var ut=[{path:"",component:Ne}],Be=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=Q({type:a});static \u0275inj=G({imports:[ae.forChild(ut),ae]})}return a})();var qi=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=Q({type:a});static \u0275inj=G({imports:[Le,Be]})}return a})();export{qi as DocPoLookupModule};
