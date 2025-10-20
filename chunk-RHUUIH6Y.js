import{o as y,p as we}from"./chunk-AFRMAFNN.js";import{Eb as Z,Fa as B,Ka as ge,Na as M,O as ue,Oa as he,Q as ce,Qa as xe,Ra as Y,U as Ee,Va as X,c as me,lb as ve,ra as be,sa as Se,tb as fe,v as O,vb as Ce,xb as w,yb as _}from"./chunk-TRMMOLUM.js";import{$a as k,Ba as te,Ca as P,Eb as C,Fc as V,Ga as K,Gc as R,Hc as z,Ic as A,Jc as j,Ka as n,La as t,M as I,Ma as o,Mc as le,Nc as re,P as Q,Qa as T,Qc as pe,Ra as b,Sa as H,Sb as ae,T as m,U as u,Wc as de,Yc as se,Za as D,_a as U,_c as ee,ab as L,bb as e,db as F,fb as S,gb as g,hb as h,ia as s,ja as $,mb as ne,nb as f,pa as x,qa as G,tb as ie,ub as oe,va as J,za as E}from"./chunk-TTO7B3JZ.js";var _e=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","upload","p-label","PO Upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile"]],template:function(r,i){r&1&&o(0,"po-upload",0)},dependencies:[M],encapsulation:2})}return l})();var Oe=l=>({"docs-sample-code-tabs":l}),ye=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload Basic"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-basic/sample-po-upload-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-upload name="upload" p-label="PO Upload" p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"> </po-upload>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-basic/sample-po-upload-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-upload-basic',
  templateUrl: 'sample-po-upload-basic.component.html',
  standalone: false
})
export class SamplePoUploadBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-basic"),t(),o(23,"hr")),r&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),F(" ",i.sampleCodeButtonLabel,""),s(),E("ngClass",f(4,Oe,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,_e],encapsulation:2})}return l})();function We(l,Ae){if(l&1&&(n(0,"div")(1,"po-widget",21)(2,"form",22),o(3,"po-input",23)(4,"po-select",24)(5,"po-select",25)(6,"po-switch",26)(7,"po-switch",27),t()()()),l&2){let p=H();s(2),E("formGroup",p.actionForm),s(2),E("p-options",p.iconOptions),s(),E("p-options",p.typeOptions)}}var Fe=(()=>{class l{fb=Q(pe);additionalHelpTooltip;allowedExtensions;customLiterals;dragDropHeight;event;formField;help;label;literals;maxFiles;maxSize;minSize;properties;restrictions;upload;url;headers;headersLabs;action;actionForm;size;propertiesOptions=[{value:"autoupload",label:"Automatic upload"},{value:"directory",label:"Directory"},{value:"disabled",label:"Disabled"},{value:"disabledRemoveFile",label:"Disabled Remove File"},{value:"dragDrop",label:"Drag Drop"},{value:"requiredUrl",label:"required Url"},{value:"multiple",label:"Multiple upload"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"restrictionsInfo",label:"Hide Restrictions Info"},{value:"selectButton",label:"Hide Select Files Button"},{value:"sendButton",label:"Hide Send Files Button"},{value:"showCustomAction",label:"Add Custom Action to Progress"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];iconOptions=[{value:"an an-download",label:"an an-download"},{value:"an an-Server",label:"an an-Server"},{value:"an an-upload",label:"an an-upload"},{value:"an an-share",label:"an an-share"}];constructor(){this.initializeActionForm()}initializeActionForm(){this.actionForm=this.fb.group({label:[""],icon:[""],type:["default"],visible:[!0],disabled:[!1]})}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(p=>{this.updateAction(p)})}updateAction(p){this.action=p}changeEvent(p){this.event=p}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}onChangeHeaders(p){try{this.headers=JSON.parse(p)}catch{this.headers=void 0}}onChangeExtension(){let p=this.allowedExtensions.split(",").map(r=>r.trim());this.restrictions=Object.assign({},this.restrictions,{allowedExtensions:p})}onChangeMaxFiles(p){this.restrictions=Object.assign({},this.restrictions,{maxFiles:p})}onChangeMaxSize(p){this.restrictions=Object.assign({},this.restrictions,{maxFileSize:this.getValueInBytes(p)})}onChangeMinSize(p){this.restrictions=Object.assign({},this.restrictions,{minFileSize:this.getValueInBytes(p)})}restore(){this.additionalHelpTooltip="",this.allowedExtensions=void 0,this.customLiterals=void 0,this.dragDropHeight=void 0,this.event=void 0,this.formField=void 0,this.label=void 0,this.help=void 0,this.literals="",this.maxFiles=void 0,this.maxSize=void 0,this.minSize=void 0,this.properties=[],this.restrictions={},this.upload=void 0,this.url="https://po-sample-api.onrender.com/v1/uploads/addFile",this.headers=void 0,this.headersLabs=void 0,this.actionForm.reset({type:"default",visible:!0}),this.action={label:"",type:"default"},this.size="medium"}getValueInBytes(p){return 1048576*p}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-labs"]],standalone:!1,decls:28,vars:47,consts:[["fRestrictions","ngForm"],["name","upload",3,"ngModelChange","p-custom-action-click","p-error","p-keydown","p-success","p-upload","ngModel","p-additional-help-tooltip","p-auto-upload","p-directory","p-disabled","p-required-url","p-disabled-remove-file","p-drag-drop","p-drag-drop-height","p-form-field","p-help","p-hide-select-button","p-hide-restrictions-info","p-hide-send-button","p-label","p-literals","p-multiple","p-optional","p-required","p-show-required","p-restrictions","p-size","p-url","p-headers","p-custom-action","p-label-text-wrap"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","allowedExtensions","p-help","Digite as extens\xF5es permitidas separadas por v\xEDrgula","p-label","Allowed Extensions","p-placeholder",".png, .jpeg, .jpg",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","maxFiles","p-clean","","p-help","Requer p-multiple habilitado","p-label","Max Files",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","dragDropHeight","p-clean","","p-help","Altura da \xE1rea de arrastar e soltar","p-label","Drag Drop Height","p-min","160",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minSize","p-clean","","p-help","Em megabytes","p-label","Min File Size",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","maxSize","p-clean","","p-help","Em megabytes","p-label","Max File Size",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","formField","p-clean","","p-label","Form Field",1,"po-md-6",3,"ngModelChange","ngModel"],["name","url","p-clean","","p-label","URL","p-required","",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","headers","p-help",'Ex.: {"Authorization": "12312414"}',"p-label","Headers",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","literals","p-help",'Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","properties","p-columns","4","p-help","Select any options","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-row","po-mt-1"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["p-title","Action Button"],[1,"po-row",3,"formGroup"],["formControlName","label","p-label","Label",1,"po-md-6","po-lg-4"],["formControlName","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","type","p-label","Type",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","disabled","p-label","Disabled",1,"po-md-3","po-lg-2"],["formControlName","visible","p-label","Visible",1,"po-md-3","po-lg-2"]],template:function(r,i){if(r&1){let d=T();n(0,"po-upload",1),h("ngModelChange",function(a){return m(d),g(i.upload,a)||(i.upload=a),u(a)}),b("p-custom-action-click",function(){return m(d),u(i.changeEvent("p-custom-action-click"))})("p-error",function(){return m(d),u(i.changeEvent("p-error"))})("p-keydown",function(){return m(d),u(i.changeEvent("p-keydown"))})("p-success",function(){return m(d),u(i.changeEvent("p-success"))})("p-upload",function(){return m(d),u(i.changeEvent("p-upload"))}),t(),o(1,"hr"),n(2,"div",2),o(3,"po-info",3),ie(4,"json"),o(5,"po-info",4),t(),o(6,"hr"),n(7,"div",2)(8,"form",null,0)(10,"po-input",5),h("ngModelChange",function(a){return m(d),g(i.allowedExtensions,a)||(i.allowedExtensions=a),u(a)}),b("p-change",function(){return m(d),u(i.onChangeExtension())}),t(),n(11,"po-number",6),h("ngModelChange",function(a){return m(d),g(i.maxFiles,a)||(i.maxFiles=a),u(a)}),b("p-change",function(){return m(d),u(i.onChangeMaxFiles(i.maxFiles))}),t(),n(12,"po-number",7),h("ngModelChange",function(a){return m(d),g(i.dragDropHeight,a)||(i.dragDropHeight=a),u(a)}),t(),n(13,"po-number",8),h("ngModelChange",function(a){return m(d),g(i.minSize,a)||(i.minSize=a),u(a)}),b("p-change",function(){return m(d),u(i.onChangeMinSize(i.minSize))}),t(),n(14,"po-number",9),h("ngModelChange",function(a){return m(d),g(i.maxSize,a)||(i.maxSize=a),u(a)}),b("p-change",function(){return m(d),u(i.onChangeMaxSize(i.maxSize))}),t(),o(15,"hr"),n(16,"po-input",10),h("ngModelChange",function(a){return m(d),g(i.label,a)||(i.label=a),u(a)}),t(),n(17,"po-input",11),h("ngModelChange",function(a){return m(d),g(i.help,a)||(i.help=a),u(a)}),t(),n(18,"po-input",12),h("ngModelChange",function(a){return m(d),g(i.additionalHelpTooltip,a)||(i.additionalHelpTooltip=a),u(a)}),t(),n(19,"po-input",13),h("ngModelChange",function(a){return m(d),g(i.formField,a)||(i.formField=a),u(a)}),t(),n(20,"po-input",14),h("ngModelChange",function(a){return m(d),g(i.url,a)||(i.url=a),u(a)}),t(),n(21,"po-input",15),h("ngModelChange",function(a){return m(d),g(i.headersLabs,a)||(i.headersLabs=a),u(a)}),b("p-change",function(a){return m(d),u(i.onChangeHeaders(a))}),t(),n(22,"po-input",16),h("ngModelChange",function(a){return m(d),g(i.literals,a)||(i.literals=a),u(a)}),b("p-change",function(){return m(d),u(i.changeLiterals())}),t(),n(23,"po-checkbox-group",17),h("ngModelChange",function(a){return m(d),g(i.properties,a)||(i.properties=a),u(a)}),t(),J(24,We,8,3,"div"),n(25,"po-radio-group",18),h("ngModelChange",function(a){return m(d),g(i.size,a)||(i.size=a),u(a)}),t(),n(26,"div",19)(27,"po-button",20),b("p-click",function(){return m(d),u(i.restore())}),t()()()()}r&2&&(S("ngModel",i.upload),E("p-additional-help-tooltip",i.additionalHelpTooltip)("p-auto-upload",i.properties.includes("autoupload"))("p-directory",i.properties.includes("directory"))("p-disabled",i.properties.includes("disabled"))("p-required-url",i.properties.includes("requiredUrl"))("p-disabled-remove-file",i.properties.includes("disabledRemoveFile"))("p-drag-drop",i.properties.includes("dragDrop"))("p-drag-drop-height",i.dragDropHeight)("p-form-field",i.formField)("p-help",i.help)("p-hide-select-button",i.properties.includes("selectButton"))("p-hide-restrictions-info",i.properties.includes("restrictionsInfo"))("p-hide-send-button",i.properties.includes("sendButton"))("p-label",i.label)("p-literals",i.customLiterals)("p-multiple",i.properties.includes("multiple"))("p-optional",i.properties.includes("optional"))("p-required",i.properties.includes("required"))("p-show-required",i.properties.includes("showRequired"))("p-restrictions",i.restrictions)("p-size",i.size)("p-url",i.url)("p-headers",i.headers)("p-custom-action",i.action)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap")),s(3),E("p-value",oe(4,45,i.upload)),s(2),E("p-value",i.event),s(5),S("ngModel",i.allowedExtensions),s(),S("ngModel",i.maxFiles),s(),S("ngModel",i.dragDropHeight),s(),S("ngModel",i.minSize),s(),S("ngModel",i.maxSize),s(2),S("ngModel",i.label),s(),S("ngModel",i.help),s(),S("ngModel",i.additionalHelpTooltip),s(),S("ngModel",i.formField),s(),S("ngModel",i.url),s(),S("ngModel",i.headersLabs),s(),S("ngModel",i.literals),s(),S("ngModel",i.properties),E("p-options",i.propertiesOptions),s(),K(i.properties.includes("showCustomAction")?24:-1),s(),S("ngModel",i.size),E("p-options",i.sizeOptions))},dependencies:[j,V,R,A,z,le,re,O,ue,ce,B,ge,xe,M,be,X,Z,ae],encapsulation:2})}return l})();var Ne=l=>({"docs-sample-code-tabs":l}),Me=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload Labs"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-labs/sample-po-upload-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-upload
  name="upload"
  [(ngModel)]="upload"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-auto-upload]="properties.includes('autoupload')"
  [p-directory]="properties.includes('directory')"
  [p-disabled]="properties.includes('disabled')"
  [p-required-url]="properties.includes('requiredUrl')"
  [p-disabled-remove-file]="properties.includes('disabledRemoveFile')"
  [p-drag-drop]="properties.includes('dragDrop')"
  [p-drag-drop-height]="dragDropHeight"
  [p-form-field]="formField"
  [p-help]="help"
  [p-hide-select-button]="properties.includes('selectButton')"
  [p-hide-restrictions-info]="properties.includes('restrictionsInfo')"
  [p-hide-send-button]="properties.includes('sendButton')"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-multiple]="properties.includes('multiple')"
  [p-optional]="properties.includes('optional')"
  [p-required]="properties.includes('required')"
  [p-show-required]="properties.includes('showRequired')"
  [p-restrictions]="restrictions"
  [p-size]="size"
  [p-url]="url"
  [p-headers]="headers"
  [p-custom-action]="action"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  (p-custom-action-click)="changeEvent('p-custom-action-click')"
  (p-error)="changeEvent('p-error')"
  (p-keydown)="changeEvent('p-keydown')"
  (p-success)="changeEvent('p-success')"
  (p-upload)="changeEvent('p-upload')"
>
</po-upload>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="upload | json"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<div class="po-row">
  <form #fRestrictions="ngForm">
    <po-input
      class="po-md-6"
      name="allowedExtensions"
      [(ngModel)]="allowedExtensions"
      p-help="Digite as extens\xF5es permitidas separadas por v\xEDrgula"
      p-label="Allowed Extensions"
      p-placeholder=".png, .jpeg, .jpg"
      (p-change)="onChangeExtension()"
    >
    </po-input>

    <po-number
      class="po-md-6 po-lg-3"
      name="maxFiles"
      [(ngModel)]="maxFiles"
      p-clean
      p-help="Requer p-multiple habilitado"
      p-label="Max Files"
      (p-change)="onChangeMaxFiles(maxFiles)"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="dragDropHeight"
      [(ngModel)]="dragDropHeight"
      p-clean
      p-help="Altura da \xE1rea de arrastar e soltar"
      p-label="Drag Drop Height"
      p-min="160"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="minSize"
      [(ngModel)]="minSize"
      p-clean
      p-help="Em megabytes"
      p-label="Min File Size"
      (p-change)="onChangeMinSize(minSize)"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="maxSize"
      [(ngModel)]="maxSize"
      p-clean
      p-help="Em megabytes"
      p-label="Max File Size"
      (p-change)="onChangeMaxSize(maxSize)"
    >
    </po-number>

    <hr />

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

    <po-input class="po-md-6" name="formField" [(ngModel)]="formField" p-clean p-label="Form Field"> </po-input>

    <po-input class="po-md-12 po-lg-6" name="url" [(ngModel)]="url" p-clean p-label="URL" p-required> </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="headers"
      [(ngModel)]="headersLabs"
      p-help='Ex.: {"Authorization": "12312414"}'
      p-label="Headers"
      (p-change)="onChangeHeaders($event)"
    >
    </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="4"
      p-help="Select any options"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    @if (properties.includes('showCustomAction')) {
      <div>
        <po-widget p-title="Action Button">
          <form [formGroup]="actionForm" class="po-row">
            <po-input class="po-md-6 po-lg-4" formControlName="label" p-label="Label" />
            <po-select class="po-md-6 po-lg-3" formControlName="icon" p-label="Icon" [p-options]="iconOptions" />
            <po-select class="po-md-6 po-lg-3" formControlName="type" p-label="Type" [p-options]="typeOptions" />
            <po-switch class="po-md-3 po-lg-2" formControlName="disabled" p-label="Disabled" />
            <po-switch class="po-md-3 po-lg-2" formControlName="visible" p-label="Visible" />
          </form>
        </po-widget>
      </div>
    }

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

    <div class="po-row po-mt-1">
      <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-labs/sample-po-upload-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {
  PoCheckboxGroupOption,
  PoProgressAction,
  PoSelectOption,
  PoRadioGroupOption,
  PoUploadFileRestrictions,
  PoUploadLiterals
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-labs',
  templateUrl: './sample-po-upload-labs.component.html',
  standalone: false
})
export class SamplePoUploadLabsComponent implements OnInit {
  private fb = inject(FormBuilder);

  additionalHelpTooltip: string;
  allowedExtensions: string;
  customLiterals: PoUploadLiterals;
  dragDropHeight: number;
  event: string;
  formField: string;
  help: string;
  label: string;
  literals: string;
  maxFiles: number;
  maxSize: number;
  minSize: number;
  properties: Array<string>;
  restrictions: PoUploadFileRestrictions;
  upload: Array<any>;
  url: string;
  headers: { [name: string]: string | Array<string> };
  headersLabs: string;
  action: PoProgressAction;
  actionForm: FormGroup;
  size: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'autoupload', label: 'Automatic upload' },
    { value: 'directory', label: 'Directory' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'disabledRemoveFile', label: 'Disabled Remove File' },
    { value: 'dragDrop', label: 'Drag Drop' },
    { value: 'requiredUrl', label: 'required Url' },
    { value: 'multiple', label: 'Multiple upload' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'restrictionsInfo', label: 'Hide Restrictions Info' },
    { value: 'selectButton', label: 'Hide Select Files Button' },
    { value: 'sendButton', label: 'Hide Send Files Button' },
    { value: 'showCustomAction', label: 'Add Custom Action to Progress' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-download', label: 'an an-download' },
    { value: 'an an-Server', label: 'an an-Server' },
    { value: 'an an-upload', label: 'an an-upload' },
    { value: 'an an-share', label: 'an an-share' }
  ];

  constructor() {
    this.initializeActionForm();
  }

  initializeActionForm() {
    this.actionForm = this.fb.group({
      label: [''],
      icon: [''],
      type: ['default'],
      visible: [true],
      disabled: [false]
    });
  }

  ngOnInit() {
    this.restore();
    this.actionForm.valueChanges.subscribe(formValue => {
      this.updateAction(formValue);
    });
  }

  updateAction(formValue: any) {
    this.action = formValue;
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

  onChangeHeaders(headers) {
    try {
      this.headers = JSON.parse(headers);
    } catch {
      this.headers = undefined;
    }
  }
  onChangeExtension() {
    const allowedExtensions = this.allowedExtensions.split(',').map(allowedExtension => allowedExtension.trim());
    this.restrictions = Object.assign({}, this.restrictions, { allowedExtensions });
  }

  onChangeMaxFiles(maxFiles: number) {
    this.restrictions = Object.assign({}, this.restrictions, { maxFiles });
  }

  onChangeMaxSize(maxSize: number) {
    this.restrictions = Object.assign({}, this.restrictions, { maxFileSize: this.getValueInBytes(maxSize) });
  }

  onChangeMinSize(minSize: number) {
    this.restrictions = Object.assign({}, this.restrictions, { minFileSize: this.getValueInBytes(minSize) });
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.allowedExtensions = undefined;
    this.customLiterals = undefined;
    this.dragDropHeight = undefined;
    this.event = undefined;
    this.formField = undefined;
    this.label = undefined;
    this.help = undefined;
    this.literals = '';
    this.maxFiles = undefined;
    this.maxSize = undefined;
    this.minSize = undefined;
    this.properties = [];
    this.restrictions = {};
    this.upload = undefined;
    this.url = 'https://po-sample-api.onrender.com/v1/uploads/addFile';
    this.headers = undefined;
    this.headersLabs = undefined;
    this.actionForm.reset({ type: 'default', visible: true });
    this.action = { label: '', type: 'default' };
    this.size = 'medium';
  }

  private getValueInBytes(value: number) {
    return 1048576 * value;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-labs"),t(),o(23,"hr")),r&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),F(" ",i.sampleCodeButtonLabel,""),s(),E("ngClass",f(4,Ne,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,Fe],encapsulation:2})}return l})();var Qe=["formOpportunity"],Ge=()=>({maxFileSize:"204800"}),qe=(()=>{class l{poNotification=Q(Se);formOpportunity;biograph;linkedin;name;resume;uploadedResume;ngOnInit(){this.uploadedResume=!1}apply(){this.formOpportunity.reset(),this.uploadedResume=!1,this.poNotification.success("You were applied successfully")}resumeUploadError(){this.uploadedResume=!1}resumeUploadSuccess(){this.uploadedResume=!0}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-resume"]],viewQuery:function(r,i){if(r&1&&D(Qe,7),r&2){let d;U(d=k())&&(i.formOpportunity=d.first)}},standalone:!1,decls:12,vars:7,consts:[["formOpportunity","ngForm"],[1,"po-row"],["name","name","p-clean","","p-label","Full Name","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","biograph","p-label","Biograph","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","linkedin","p-clean","","p-label","LinkedIn URL",1,"po-md-12",3,"ngModelChange","ngModel"],["name","resume","p-label","Resume","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-md-12",3,"ngModelChange","p-error","p-success","ngModel","p-restrictions"],["p-label","Apply",1,"po-md-4",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let d=T();n(0,"form",null,0)(2,"div",1)(3,"po-input",2),h("ngModelChange",function(a){return m(d),g(i.name,a)||(i.name=a),u(a)}),t()(),n(4,"div",1)(5,"po-textarea",3),h("ngModelChange",function(a){return m(d),g(i.biograph,a)||(i.biograph=a),u(a)}),t()(),n(6,"div",1)(7,"po-url",4),h("ngModelChange",function(a){return m(d),g(i.linkedin,a)||(i.linkedin=a),u(a)}),t()(),n(8,"div",1)(9,"po-upload",5),h("ngModelChange",function(a){return m(d),g(i.resume,a)||(i.resume=a),u(a)}),b("p-error",function(){return m(d),u(i.resumeUploadError())})("p-success",function(){return m(d),u(i.resumeUploadSuccess())}),t()(),n(10,"div",1)(11,"po-button",6),b("p-click",function(){return m(d),u(i.apply())}),t()()()}if(r&2){let d=L(1);s(3),S("ngModel",i.name),s(2),S("ngModel",i.biograph),s(2),S("ngModel",i.linkedin),s(2),S("ngModel",i.resume),E("p-restrictions",ne(6,Ge)),s(2),E("p-disabled",d.invalid||!i.uploadedResume)}},dependencies:[j,V,R,A,z,O,B,Y,M,he],encapsulation:2})}return l})();var Ke=l=>({"docs-sample-code-tabs":l}),Te=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-resume-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload - Resume"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-resume/sample-po-upload-resume.component.html"),t(),n(13,"pre",7),e(14,`<form #formOpportunity="ngForm">
  <div class="po-row">
    <po-input class="po-md-12" name="name" [(ngModel)]="name" p-clean p-label="Full Name" p-required> </po-input>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-12" name="biograph" [(ngModel)]="biograph" p-label="Biograph" p-required> </po-textarea>
  </div>

  <div class="po-row">
    <po-url class="po-md-12" name="linkedin" [(ngModel)]="linkedin" p-clean p-label="LinkedIn URL"> </po-url>
  </div>

  <div class="po-row">
    <po-upload
      class="po-md-12"
      name="resume"
      [(ngModel)]="resume"
      p-label="Resume"
      p-required
      p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
      [p-restrictions]="{ maxFileSize: '204800' }"
      (p-error)="resumeUploadError()"
      (p-success)="resumeUploadSuccess()"
    >
    </po-upload>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4"
      p-label="Apply"
      [p-disabled]="formOpportunity.invalid || !uploadedResume"
      (p-click)="apply()"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-resume/sample-po-upload-resume.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-resume',
  templateUrl: 'sample-po-upload-resume.component.html',
  standalone: false
})
export class SamplePoUploadResumeComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  @ViewChild('formOpportunity', { static: true }) formOpportunity: UntypedFormControl;

  biograph: string;
  linkedin: string;
  name: string;
  resume: string;
  uploadedResume: boolean;

  ngOnInit() {
    this.uploadedResume = false;
  }

  apply() {
    this.formOpportunity.reset();
    this.uploadedResume = false;

    this.poNotification.success('You were applied successfully');
  }

  resumeUploadError() {
    this.uploadedResume = false;
  }

  resumeUploadSuccess() {
    this.uploadedResume = true;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-resume"),t(),o(23,"hr")),r&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),F(" ",i.sampleCodeButtonLabel,""),s(),E("ngClass",f(4,Ke,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,qe],encapsulation:2})}return l})();var Xe=["upload"],Ze=["stepper"],$e=["submitForm"],et=["sucessData"],tt=l=>({"po-invisible":l});function nt(l,Ae){if(l&1){let p=T();n(0,"div",8)(1,"div",9)(2,"p",11),e(3,"Confirm informations"),t()(),o(4,"po-info",28)(5,"po-info",29)(6,"po-info",30),n(7,"po-button",31),b("p-click",function(){m(p);let i=H();return u(i.confirmSubmit())}),t()()}if(l&2){let p=H();s(4),E("p-value",p.project[0].name||"N/D"),s(),E("p-value",p.title||"N/D"),s(),E("p-value",p.description||"N/D")}}var De=(()=>{class l{upload;stepper;submitForm;sucessData;confirm={action:()=>{this.sucessData.close()},label:"Return"};description;project=[];restrictions={allowedExtensions:[".zip",".7z",".tar",".wim"]};title;ngOnInit(){this.newSubmit()}canSubmitProject(){return!!(this.project&&this.project.length)&&this.title&&this.description}confirmSubmit(){this.sucessData.open(),this.newSubmit(),this.stepper.first()}submitProject(){this.upload.sendFiles(),this.stepper.next()}newSubmit(){this.project=[],this.title=void 0,this.description=void 0}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-rs"]],viewQuery:function(r,i){if(r&1&&(D(Xe,7),D(Ze,7),D($e,7),D(et,7)),r&2){let d;U(d=k())&&(i.upload=d.first),U(d=k())&&(i.stepper=d.first),U(d=k())&&(i.submitForm=d.first),U(d=k())&&(i.sucessData=d.first)}},standalone:!1,decls:47,vars:15,consts:[["stepper",""],["submitForm","ngForm"],["upload",""],["sucessData",""],[1,"po-row"],["p-orientation","vertical","p-step-icons","","p-step-size","42",1,"po-lg-10","po-offset-lg-2","po-offset-xl-2"],["p-label","Welcome"],["p-title","Realize & Show",1,"po-lg-8","po-mt-2"],[1,"tht-row"],[1,"po-sm-12"],[1,"po-font-title"],[1,"po-font-text-large"],["p-label","Yes!","p-kind","primary",1,"po-sm-12","po-mt-2",3,"p-click"],["p-label","Submit",3,"p-can-active-next-step"],[1,"po-lg-10"],[1,"po-font-subtitle"],[1,"po-font-text-small-bold"],[1,"po-font-title","po-lg-2"],["p-icon","an an-cloud-arrow-up",1,"po-clickable",3,"click"],["p-icon","an an-fill an-x-circle",1,"po-clickable",3,"click","ngClass"],[1,"po-sm-12","po-mt-3","po-font-text-bold"],["name","project","p-hide-select-button","","p-hide-send-button","","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-sm-12",3,"ngModelChange","ngModel","p-restrictions"],["name","title","p-label","Title","p-placeholder","Be creative","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["name","description","p-label","Description","p-maxlength","140","p-placeholder","Resume on few words","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["p-label","Done",1,"po-sm-12","po-mt-2",3,"p-click","p-disabled"],["p-label","Confirm"],["p-title","Confirmation",3,"p-primary-action"],[1,"po-sm-12","po-font-title"],["p-label","File name",1,"po-md-4",3,"p-value"],["p-label","Title",1,"po-md-4",3,"p-value"],["p-label","Description",1,"po-md-4",3,"p-value"],["p-label","Confirm",1,"po-sm-12","po-mt-2","po-mb-2",3,"p-click"]],template:function(r,i){if(r&1){let d=T();n(0,"div",4)(1,"po-stepper",5,0)(3,"po-step",6)(4,"po-widget",7)(5,"div",8)(6,"div",9)(7,"h1",10),e(8,"Welcome, TOTVER!"),t(),n(9,"p",11),e(10,"Let's submit your project?"),t()()(),n(11,"div",8)(12,"po-button",12),b("p-click",function(){m(d);let a=L(2);return u(a.next())}),t()()()(),n(13,"po-step",13)(14,"po-widget",7)(15,"form",null,1)(17,"div",4)(18,"div",14)(19,"div",4)(20,"p",15),e(21,"Please, select your project:"),t()(),n(22,"div",4)(23,"p",16),e(24,"*Upload a zip file containing your project."),t()()(),n(25,"div",17)(26,"po-icon",18),b("click",function(){m(d);let a=L(32);return u(a.selectFiles())}),t(),n(27,"po-icon",19),b("click",function(){m(d);let a=L(32);return u(a.clear())}),t()()(),n(28,"div",4)(29,"label",20),e(30,"Attached"),t(),n(31,"po-upload",21,2),h("ngModelChange",function(a){return m(d),g(i.project,a)||(i.project=a),u(a)}),t()(),n(33,"div",4)(34,"po-input",22),h("ngModelChange",function(a){return m(d),g(i.title,a)||(i.title=a),u(a)}),t()(),n(35,"div",4)(36,"po-textarea",23),h("ngModelChange",function(a){return m(d),g(i.description,a)||(i.description=a),u(a)}),t()(),n(37,"div",8)(38,"po-button",24),b("p-click",function(){return m(d),u(i.submitProject())}),t()()()()(),n(39,"po-step",25)(40,"po-widget",7),J(41,nt,8,3,"div",8),t()()()(),n(42,"po-modal",26,3)(44,"div",4)(45,"p",27),e(46,"Project successfully submited!"),t()()()}r&2&&(s(13),E("p-can-active-next-step",i.canSubmitProject.bind(i)),s(14),E("ngClass",f(13,tt,i.project.length<1)),s(2),te("po-invisible",i.project.length<1),s(2),S("ngModel",i.project),E("p-restrictions",i.restrictions),s(3),S("ngModel",i.title),E("p-disabled",i.project.length<1),s(2),S("ngModel",i.description),E("p-disabled",i.project.length<1),s(2),E("p-disabled",i.canSubmitProject()),s(3),K(i.canSubmitProject()?41:-1),s(),E("p-primary-action",i.confirm))},dependencies:[C,j,V,R,A,z,O,B,Y,M,me,X,Ee,fe,Ce,Z],encapsulation:2})}return l})();var ot=l=>({"docs-sample-code-tabs":l}),Ue=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-rs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload - Realize & Show"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-rs/sample-po-upload-rs.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-stepper
    #stepper
    class="po-lg-10 po-offset-lg-2 po-offset-xl-2"
    p-orientation="vertical"
    p-step-icons
    p-step-size="42"
  >
    <po-step p-label="Welcome">
      <po-widget class="po-lg-8 po-mt-2" p-title="Realize & Show">
        <div class="tht-row">
          <div class="po-sm-12">
            <h1 class="po-font-title">Welcome, TOTVER!</h1>
            <p class="po-font-text-large">Let's submit your project?</p>
          </div>
        </div>

        <div class="tht-row">
          <po-button class="po-sm-12 po-mt-2" p-label="Yes!" p-kind="primary" (p-click)="stepper.next()"> </po-button>
        </div>
      </po-widget>
    </po-step>

    <po-step p-label="Submit" [p-can-active-next-step]="canSubmitProject.bind(this)">
      <po-widget class="po-lg-8 po-mt-2" p-title="Realize & Show">
        <form #submitForm="ngForm">
          <div class="po-row">
            <div class="po-lg-10">
              <div class="po-row">
                <p class="po-font-subtitle">Please, select your project:</p>
              </div>

              <div class="po-row">
                <p class="po-font-text-small-bold">*Upload a zip file containing your project.</p>
              </div>
            </div>

            <div class="po-font-title po-lg-2">
              <po-icon p-icon="an an-cloud-arrow-up" class="po-clickable" (click)="upload.selectFiles()"></po-icon>
              <po-icon
                p-icon="an an-fill an-x-circle"
                class="po-clickable"
                [ngClass]="{ 'po-invisible': project.length < 1 }"
                (click)="upload.clear()"
              ></po-icon>
            </div>
          </div>

          <div class="po-row">
            <label class="po-sm-12 po-mt-3 po-font-text-bold" [class.po-invisible]="project.length < 1">Attached</label>
            <po-upload
              #upload
              class="po-sm-12"
              name="project"
              [(ngModel)]="project"
              p-hide-select-button
              p-hide-send-button
              p-required
              p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
              [p-restrictions]="restrictions"
            >
            </po-upload>
          </div>

          <div class="po-row">
            <po-input
              class="po-sm-12"
              name="title"
              [(ngModel)]="title"
              p-label="Title"
              p-placeholder="Be creative"
              p-required
              [p-disabled]="project.length < 1"
            >
            </po-input>
          </div>

          <div class="po-row">
            <po-textarea
              class="po-sm-12"
              name="description"
              [(ngModel)]="description"
              p-label="Description"
              p-maxlength="140"
              p-placeholder="Resume on few words"
              p-required
              [p-disabled]="project.length < 1"
            >
            </po-textarea>
          </div>

          <div class="tht-row">
            <po-button
              class="po-sm-12 po-mt-2"
              p-label="Done"
              [p-disabled]="canSubmitProject()"
              (p-click)="submitProject()"
            >
            </po-button>
          </div>
        </form>
      </po-widget>
    </po-step>

    <po-step p-label="Confirm">
      <po-widget class="po-lg-8 po-mt-2" p-title="Realize & Show">
        @if (canSubmitProject()) {
          <div class="tht-row">
            <div class="po-sm-12">
              <p class="po-font-text-large">Confirm informations</p>
            </div>
            <po-info class="po-md-4" p-label="File name" [p-value]="project[0].name || 'N/D'"> </po-info>
            <po-info class="po-md-4" p-label="Title" [p-value]="title || 'N/D'"> </po-info>
            <po-info class="po-md-4" p-label="Description" [p-value]="description || 'N/D'"> </po-info>
            <po-button class="po-sm-12 po-mt-2 po-mb-2" p-label="Confirm" (p-click)="confirmSubmit()"> </po-button>
          </div>
        }
      </po-widget>
    </po-step>
  </po-stepper>
</div>

<po-modal #sucessData p-title="Confirmation" [p-primary-action]="confirm">
  <div class="po-row">
    <p class="po-sm-12 po-font-title">Project successfully submited!</p>
  </div>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-rs/sample-po-upload-rs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoModalAction, PoModalComponent, PoStepperComponent, PoUploadComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-rs',
  templateUrl: 'sample-po-upload-rs.component.html',
  standalone: false
})
export class SamplePoUploadRsComponent implements OnInit {
  @ViewChild('upload', { static: true }) upload: PoUploadComponent;
  @ViewChild('stepper', { static: true }) stepper: PoStepperComponent;
  @ViewChild('submitForm', { static: true }) submitForm: NgForm;
  @ViewChild('sucessData', { static: true }) sucessData: PoModalComponent;

  confirm: PoModalAction = {
    action: () => {
      this.sucessData.close();
    },
    label: 'Return'
  };

  description: string;
  project: Array<any> = [];
  restrictions = { allowedExtensions: ['.zip', '.7z', '.tar', '.wim'] };
  title: string;

  ngOnInit() {
    this.newSubmit();
  }

  canSubmitProject() {
    return !!(this.project && this.project.length) && this.title && this.description;
  }

  confirmSubmit() {
    this.sucessData.open();
    this.newSubmit();
    this.stepper.first();
  }

  submitProject() {
    this.upload.sendFiles();
    this.stepper.next();
  }

  private newSubmit() {
    this.project = [];
    this.title = undefined;
    this.description = undefined;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-rs"),t(),o(23,"hr")),r&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),F(" ",i.sampleCodeButtonLabel,""),s(),E("ngClass",f(4,ot,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,De],encapsulation:2})}return l})();var ke=(()=>{class l{customAction={icon:"an an-download",type:"default",visible:!1};uploadSuccess(){this.customAction.visible=!0}onCustomActionClick(p){if(!p.rawFile){console.error("Arquivo inv\xE1lido ou n\xE3o encontrado.");return}this.downloadFile(p.rawFile)}downloadFile(p){let r=URL.createObjectURL(p),i=document.createElement("a");i.href=r,i.download=p.name,i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-download"]],standalone:!1,decls:1,vars:2,consts:[["name","upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",3,"p-custom-action-click","p-success","p-custom-action","p-multiple"]],template:function(r,i){r&1&&(n(0,"po-upload",0),b("p-custom-action-click",function(c){return i.onCustomActionClick(c)})("p-success",function(){return i.uploadSuccess()}),t()),r&2&&E("p-custom-action",i.customAction)("p-multiple",!0)},dependencies:[M],encapsulation:2})}return l})();var rt=l=>({"docs-sample-code-tabs":l}),Le=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-download-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload - with Download Button"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-download/sample-po-upload-download.component.html"),t(),n(13,"pre",7),e(14,`<po-upload
  name="upload"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-custom-action]="customAction"
  (p-custom-action-click)="onCustomActionClick($event)"
  [p-multiple]="true"
  (p-success)="uploadSuccess()"
></po-upload>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-download/sample-po-upload-download.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';
import { PoProgressAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-download',
  templateUrl: 'sample-po-upload-download.component.html',
  standalone: false
})
export class SamplePoUploadDownloadComponent {
  customAction: PoProgressAction = {
    icon: 'an an-download',
    type: 'default',
    visible: false
  };

  uploadSuccess() {
    this.customAction.visible = true;
  }

  onCustomActionClick(file: { rawFile: File }) {
    if (!file.rawFile) {
      console.error('Arquivo inv\xE1lido ou n\xE3o encontrado.');
      return;
    }

    this.downloadFile(file.rawFile);
  }

  downloadFile(rawFile: File) {
    // Cria uma URL tempor\xE1ria para o arquivo
    const url = URL.createObjectURL(rawFile);

    // Cria um link <a> tempor\xE1rio para iniciar o download
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = rawFile.name; // Define o nome do arquivo para o download
    anchor.style.display = 'none';

    // Adiciona o link ao DOM, aciona o clique e remove o link
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    // Libera a mem\xF3ria utilizada pela URL tempor\xE1ria
    URL.revokeObjectURL(url);
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-download"),t(),o(23,"hr")),r&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),F(" ",i.sampleCodeButtonLabel,""),s(),E("ngClass",f(4,rt,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,ke],encapsulation:2})}return l})();var Ve=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-doc"]],standalone:!1,decls:1679,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-html"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoUploadComponent"),t()(),n(21,"div",2)(22,"p"),e(23,"O componente "),n(24,"code"),e(25,"po-upload"),t(),e(26,` permite que o usu\xE1rio envie arquivo(s) ao servidor e acompanhe o progresso.
Este componente tamb\xE9m possibilita algumas configura\xE7\xF5es como: \u2013 Envio de diret\xF3rios, onde ele acessa o diret\xF3rio selecionado assim como seus sub-diret\xF3rios;`),t(),n(27,"ul")(28,"li"),e(29,"M\xFAltipla sele\xE7\xE3o, onde o usu\xE1rio pode enviar mais de um arquivo ao servidor."),t(),n(30,"li"),e(31,`Auto envio, onde o arquivo \xE9 enviado imediatamente ap\xF3s a sele\xE7\xE3o do usu\xE1rio, n\xE3o necessitando que o usu\xE1rio
clique em enviar.`),t(),n(32,"li"),e(33,"Restri\xE7\xF5es de formatos de arquivo e tamanho."),t(),n(34,"li"),e(35,"Fun\xE7\xE3o de sucesso que ser\xE1 disparada quando os arquivos forem enviados com sucesso."),t(),n(36,"li"),e(37,"Fun\xE7\xE3o de erro que ser\xE1 disparada quando houver erro no envio dos arquivos."),t(),n(38,"li"),e(39,"Permite habilitar uma \xE1rea onde os arquivos podem ser arrastados."),t()()(),n(40,"div",6)(41,"h4",7),e(42,"Seletor"),t(),n(43,"pre",8),e(44,`<po-upload
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-upload="boolean"
    p-custom-action="PoProgressAction"
    (p-custom-action-click)="EventEmitter"
    p-directory="boolean"
    p-disabled="boolean"
    p-disabled-remove-file="boolean"
    p-drag-drop="boolean"
    p-drag-drop-height="number"
    p-restrictions="PoUploadFileRestrictions"
    p-form-field="string"
    p-headers="{
    [name: string]: string | Array<string>;
}"
    p-help="string"
    p-hide-restrictions-info="boolean"
    p-hide-select-button="boolean"
    p-hide-send-button="boolean"
    p-multiple="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-literals="PoUploadLiterals"
    name="string"
    (ng-model-change)="EventEmitter"
    (p-error)="EventEmitter"
    (p-success)="EventEmitter"
    (p-upload)="EventEmitter"
    p-optional="boolean"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    p-required-url="boolean"
    p-show-required="boolean"
    p-size="string"
    p-url="string" >
</po-upload>
`),t()(),n(45,"h4",9),e(46,"Propriedades"),t(),n(47,"table",10)(48,"tr",11)(49,"th",12),e(50,"Nome"),t(),n(51,"th",12),e(52,"Tipo"),t(),n(53,"th",12),e(54,"Padr\xE3o"),t(),n(55,"th",12),e(56,"Descri\xE7\xE3o"),t()(),n(57,"tr",13)(58,"td",14)(59,"div",15)(60,"span",16),e(61," (p-additional-help)"),o(62,"br"),t()(),n(63,"div",17),e(64,"Deprecated"),t()(),n(65,"td",18)(66,"code",19),e(67,"EventEmitter"),t()(),n(68,"td",20),e(69,"-"),t(),n(70,"td",21)(71,"em")(72,"strong"),e(73,"(opcional)"),t()(),n(74,"p"),e(75,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(76,"code"),e(77,"p-help"),t(),e(78,"."),t(),n(79,"blockquote")(80,"p"),e(81,"Essa propriedade est\xE1 "),n(82,"strong"),e(83,"depreciada"),t(),e(84," e ser\xE1 removida na vers\xE3o "),n(85,"code"),e(86,"23.x.x"),t(),e(87,". Recomendamos utilizar a propriedade "),n(88,"code"),e(89,"p-helper"),t(),e(90," que oferece mais recursos e flexibilidade."),t()()()(),n(91,"tr",13)(92,"td",14)(93,"div",22)(94,"span",23),e(95," p-additional-help-tooltip"),o(96,"br"),t()(),n(97,"div",17),e(98,"Deprecated"),t()(),n(99,"td",18)(100,"code",24),e(101,"string"),t()(),n(102,"td",20),e(103,"-"),t(),n(104,"td",21)(105,"em")(106,"strong"),e(107,"(opcional)"),t()(),n(108,"p"),e(109,"Exibe um \xEDcone de ajuda adicional ao "),n(110,"code"),e(111,"p-help"),t(),e(112,`, com o texto desta propriedade no tooltip.
Se o evento `),n(113,"code"),e(114,"p-additional-help"),t(),e(115,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(116,"strong"),e(117,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(118,"blockquote")(119,"p"),e(120,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(121,"blockquote")(122,"p"),e(123,"Essa propriedade est\xE1 "),n(124,"strong"),e(125,"depreciada"),t(),e(126," e ser\xE1 removida na vers\xE3o "),n(127,"code"),e(128,"23.x.x"),t(),e(129,". Recomendamos utilizar a propriedade "),n(130,"code"),e(131,"p-helper"),t(),e(132," que oferece mais recursos e flexibilidade."),t()()()(),n(133,"tr",13)(134,"td",14)(135,"div",22)(136,"span",23),e(137," p-append-in-body"),o(138,"br"),t()()(),n(139,"td",18)(140,"code",25),e(141,"boolean"),t()(),n(142,"td",20)(143,"p")(144,"code"),e(145,"false"),t()()(),n(146,"td",21)(147,"em")(148,"strong"),e(149,"(opcional)"),t()(),n(150,"p"),e(151,"Define que o tooltip ("),n(152,"code"),e(153,"p-additional-help-tooltip"),t(),e(154,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(155,"blockquote")(156,"p"),e(157,"Quando utilizado com "),n(158,"code"),e(159,"p-additional-help-tooltip"),t(),e(160,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(161,"tr",13)(162,"td",14)(163,"div",22)(164,"span",23),e(165," p-auto-focus"),o(166,"br"),t()()(),n(167,"td",18)(168,"code",25),e(169,"boolean"),t()(),n(170,"td",20)(171,"p")(172,"code"),e(173,"false"),t()()(),n(174,"td",21)(175,"em")(176,"strong"),e(177,"(opcional)"),t()(),n(178,"p"),e(179,"Aplica foco no elemento ao ser iniciado."),t(),n(180,"blockquote")(181,"p"),e(182,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(183,"tr",13)(184,"td",14)(185,"div",22)(186,"span",23),e(187," p-auto-upload"),o(188,"br"),t()()(),n(189,"td",18)(190,"code",25),e(191,"boolean"),t()(),n(192,"td",20)(193,"p")(194,"code"),e(195,"false"),t()()(),n(196,"td",21)(197,"em")(198,"strong"),e(199,"(opcional)"),t()(),n(200,"p"),e(201,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),n(202,"blockquote")(203,"p"),e(204,"Esta propriedade funciona somente se a propriedade "),n(205,"code"),e(206,"p-url"),t(),e(207," tiver um valor atribu\xEDdo."),t()()()(),n(208,"tr",13)(209,"td",14)(210,"div",22)(211,"span",23),e(212," p-custom-action"),o(213,"br"),t()()(),n(214,"td",18)(215,"code",26),e(216,"PoProgressAction"),t()(),n(217,"td",20),e(218,"-"),t(),n(219,"td",21)(220,"em")(221,"strong"),e(222,"(opcional)"),t()(),n(223,"p"),e(224,"Define uma a\xE7\xE3o personalizada no componente "),n(225,"code"),e(226,"po-upload"),t(),e(227,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),t(),n(228,"p"),e(229,"A a\xE7\xE3o deve implementar a interface "),n(230,"strong"),e(231,"PoProgressAction"),t(),e(232,", permitindo configurar propriedades como:"),t(),n(233,"ul")(234,"li")(235,"code"),e(236,"label"),t(),e(237,": Texto do bot\xE3o."),t(),n(238,"li")(239,"code"),e(240,"icon"),t(),e(241,": \xCDcone a ser exibido no bot\xE3o."),t(),n(242,"li")(243,"code"),e(244,"type"),t(),e(245,": Tipo de bot\xE3o (ex.: "),n(246,"code"),e(247,"danger"),t(),e(248," ou "),n(249,"code"),e(250,"default"),t(),e(251,")."),t(),n(252,"li")(253,"code"),e(254,"disabled"),t(),e(255,": Indica se o bot\xE3o deve estar desabilitado."),t(),n(256,"li")(257,"code"),e(258,"visible"),t(),e(259,": Indica se o bot\xE3o deve estar vis\xEDvel."),t()(),n(260,"p")(261,"strong"),e(262,"Exemplo de uso:"),t()(),n(263,"pre")(264,"code",27),e(265,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),t()(),n(266,"pre")(267,"code",28),e(268,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
}
`),t()()()(),n(269,"tr",13)(270,"td",14)(271,"div",15)(272,"span",16),e(273," (p-custom-action-click)"),o(274,"br"),t()()(),n(275,"td",18)(276,"code",19),e(277,"EventEmitter"),t()(),n(278,"td",20),e(279,"-"),t(),n(280,"td",21)(281,"em")(282,"strong"),e(283,"(opcional)"),t()(),n(284,"p"),e(285,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),n(286,"code"),e(287,"p-custom-action"),t(),e(288,"."),t(),n(289,"p"),e(290,`O evento retorna o arquivo associado \xE0 barra de progresso onde a a\xE7\xE3o foi clicada,
permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),t(),n(291,"p")(292,"strong"),e(293,"Exemplo de uso:"),t()(),n(294,"pre")(295,"code",27),e(296,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),t()(),n(297,"pre")(298,"code",28),e(299,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
  // L\xF3gica para download do arquivo
  this.downloadFile(file);
}

downloadFile(file: PoUploadFile) {
  // Exemplo de download
  console.log(\`Iniciando o download do arquivo: \${file.name}\`);
}
`),t()()()(),n(300,"tr",13)(301,"td",14)(302,"div",22)(303,"span",23),e(304," p-directory"),o(305,"br"),t()()(),n(306,"td",18)(307,"code",25),e(308,"boolean"),t()(),n(309,"td",20)(310,"p")(311,"code"),e(312,"false"),t()()(),n(313,"td",21)(314,"em")(315,"strong"),e(316,"(opcional)"),t()(),n(317,"p"),e(318,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),n(319,"blockquote")(320,"p"),e(321,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),n(322,"blockquote")(323,"p"),e(324,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),n(325,"strong"),e(326,"Internet Explorer"),t(),e(327,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()()()(),n(328,"tr",13)(329,"td",14)(330,"div",22)(331,"span",23),e(332," p-disabled"),o(333,"br"),t()()(),n(334,"td",18)(335,"code",25),e(336,"boolean"),t()(),n(337,"td",20),e(338,"-"),t(),n(339,"td",21)(340,"em")(341,"strong"),e(342,"(opcional)"),t()(),n(343,"p"),e(344,"Indica que o campo ser\xE1 desabilitado."),t()()(),n(345,"tr",13)(346,"td",14)(347,"div",22)(348,"span",23),e(349," p-disabled-remove-file"),o(350,"br"),t()()(),n(351,"td",18)(352,"code",25),e(353,"boolean"),t()(),n(354,"td",20)(355,"p")(356,"code"),e(357,"false"),t()()(),n(358,"td",21)(359,"em")(360,"strong"),e(361,"(opcional)"),t()(),n(362,"p"),e(363,"Desabilita bot\xE3o de remover o(s) arquivo(s) selecionado(s)."),t()()(),n(364,"tr",13)(365,"td",14)(366,"div",22)(367,"span",23),e(368," p-drag-drop"),o(369,"br"),t()()(),n(370,"td",18)(371,"code",25),e(372,"boolean"),t()(),n(373,"td",20)(374,"p")(375,"code"),e(376,"false"),t()()(),n(377,"td",21)(378,"em")(379,"strong"),e(380,"(opcional)"),t()(),n(381,"p"),e(382,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),n(383,"blockquote")(384,"p"),e(385,"Recomendamos utilizar apenas um "),n(386,"code"),e(387,"po-upload"),t(),e(388," com esta funcionalidade por tela."),t()()()(),n(389,"tr",13)(390,"td",14)(391,"div",22)(392,"span",23),e(393," p-drag-drop-height"),o(394,"br"),t()()(),n(395,"td",18)(396,"code",29),e(397,"number"),t()(),n(398,"td",20)(399,"p")(400,"code"),e(401,"320"),t()()(),n(402,"td",21)(403,"em")(404,"strong"),e(405,"(opcional)"),t()(),n(406,"p"),e(407,"Define em "),n(408,"em"),e(409,"pixels"),t(),e(410," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),n(411,"code"),e(412,"160px"),t(),e(413,"."),t(),n(414,"blockquote")(415,"p"),e(416,"Esta propriedade funciona somente se a propriedade "),n(417,"code"),e(418,"p-drag-drop"),t(),e(419," estiver habilitada."),t()()()(),n(420,"tr",13)(421,"td",14)(422,"div",22)(423,"span",23),e(424," p-restrictions"),o(425,"br"),t()()(),n(426,"td",18)(427,"code",30),e(428,"PoUploadFileRestrictions"),t()(),n(429,"td",20),e(430,"-"),t(),n(431,"td",21)(432,"em")(433,"strong"),e(434,"(opcional)"),t()(),n(435,"p"),e(436,"Objeto que segue a defini\xE7\xE3o da interface "),n(437,"code"),e(438,"PoUploadFileRestrictions"),t(),e(439,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t()()(),n(440,"tr",13)(441,"td",14)(442,"div",22)(443,"span",23),e(444," p-form-field"),o(445,"br"),t()()(),n(446,"td",18)(447,"code",24),e(448,"string"),t()(),n(449,"td",20)(450,"p")(451,"code"),e(452,"files"),t()()(),n(453,"td",21)(454,"em")(455,"strong"),e(456,"(opcional)"),t()(),n(457,"p"),e(458,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),n(459,"code"),e(460,"p-url"),t(),e(461,"."),t()()(),n(462,"tr",13)(463,"td",14)(464,"div",22)(465,"span",23),e(466," p-headers"),o(467,"br"),t()()(),n(468,"td",18)(469,"code",31),e(470,"{ [name: string]: string "),t(),n(471,"code",32),e(472,` Array<string>;
}`),t()(),n(473,"td",20),e(474,"-"),t(),n(475,"td",21)(476,"p"),e(477,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t()()(),n(478,"tr",13)(479,"td",14)(480,"div",22)(481,"span",23),e(482," p-help"),o(483,"br"),t()()(),n(484,"td",18)(485,"code",24),e(486,"string"),t()(),n(487,"td",20),e(488,"-"),t(),n(489,"td",21)(490,"em")(491,"strong"),e(492,"(opcional)"),t()(),n(493,"p"),e(494,"Texto de apoio para o campo."),t()()(),n(495,"tr",13)(496,"td",14)(497,"div",22)(498,"span",23),e(499," p-hide-restrictions-info"),o(500,"br"),t()()(),n(501,"td",18)(502,"code",25),e(503,"boolean"),t()(),n(504,"td",20)(505,"p")(506,"code"),e(507,"false"),t()()(),n(508,"td",21)(509,"em")(510,"strong"),e(511,"(opcional)"),t()(),n(512,"p"),e(513,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t()()(),n(514,"tr",13)(515,"td",14)(516,"div",22)(517,"span",23),e(518," p-hide-select-button"),o(519,"br"),t()()(),n(520,"td",18)(521,"code",25),e(522,"boolean"),t()(),n(523,"td",20)(524,"p")(525,"code"),e(526,"false"),t()()(),n(527,"td",21)(528,"em")(529,"strong"),e(530,"(opcional)"),t()(),n(531,"p"),e(532,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),n(533,"blockquote")(534,"p"),e(535,"Caso o valor definido seja "),n(536,"code"),e(537,"true"),t(),e(538,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(539,"code"),e(540,"selectFiles()"),t(),e(541," para sele\xE7\xE3o de arquivos."),t()()()(),n(542,"tr",13)(543,"td",14)(544,"div",22)(545,"span",23),e(546," p-hide-send-button"),o(547,"br"),t()()(),n(548,"td",18)(549,"code",25),e(550,"boolean"),t()(),n(551,"td",20)(552,"p")(553,"code"),e(554,"false"),t()()(),n(555,"td",21)(556,"em")(557,"strong"),e(558,"(opcional)"),t()(),n(559,"p"),e(560,"Omite o bot\xE3o de envio de arquivos."),t(),n(561,"blockquote")(562,"p"),e(563,"Caso o valor definido seja "),n(564,"code"),e(565,"true"),t(),e(566,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(567,"code"),e(568,"sendFiles()"),t(),e(569," para envio do(s) arquivo(s) selecionado(s)."),t()()()(),n(570,"tr",13)(571,"td",14)(572,"div",22)(573,"span",23),e(574," p-multiple"),o(575,"br"),t()()(),n(576,"td",18)(577,"code",25),e(578,"boolean"),t()(),n(579,"td",20),e(580,"-"),t(),n(581,"td",21)(582,"em")(583,"strong"),e(584,"(opcional)"),t()(),n(585,"p"),e(586,"Define se pode selecionar mais de um arquivo."),t(),n(587,"blockquote")(588,"p"),e(589,"Se utilizada a "),n(590,"code"),e(591,"p-directory"),t(),e(592,", habilita-se automaticamente esta propriedade."),t()()()(),n(593,"tr",13)(594,"td",14)(595,"div",15)(596,"span",16),e(597," (p-keydown)"),o(598,"br"),t()()(),n(599,"td",18)(600,"code",19),e(601,"EventEmitter"),t()(),n(602,"td",20),e(603,"-"),t(),n(604,"td",21)(605,"em")(606,"strong"),e(607,"(opcional)"),t()(),n(608,"p"),e(609,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(610,"code"),e(611,"KeyboardEvent"),t(),e(612," com informa\xE7\xF5es sobre a tecla."),t()()(),n(613,"tr",13)(614,"td",14)(615,"div",22)(616,"span",23),e(617," p-label"),o(618,"br"),t()()(),n(619,"td",18)(620,"code",24),e(621,"string"),t()(),n(622,"td",20),e(623,"-"),t(),n(624,"td",21)(625,"em")(626,"strong"),e(627,"(opcional)"),t()(),n(628,"p"),e(629,"R\xF3tulo do campo."),t()()(),n(630,"tr",13)(631,"td",14)(632,"div",22)(633,"span",23),e(634," p-label-text-wrap"),o(635,"br"),t()()(),n(636,"td",18)(637,"code",25),e(638,"boolean"),t()(),n(639,"td",20)(640,"p")(641,"code"),e(642,"false"),t()()(),n(643,"td",21)(644,"em")(645,"strong"),e(646,"(opcional)"),t()(),n(647,"p"),e(648,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(649,"code"),e(650,"p-label"),t(),e(651,". Quando "),n(652,"code"),e(653,"p-label-text-wrap"),t(),e(654,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(655,"tr",13)(656,"td",14)(657,"div",22)(658,"span",23),e(659," p-literals"),o(660,"br"),t()()(),n(661,"td",18)(662,"code",33),e(663,"PoUploadLiterals"),t()(),n(664,"td",20),e(665,"-"),t(),n(666,"td",21)(667,"em")(668,"strong"),e(669,"(opcional)"),t()(),n(670,"p"),e(671,"Objeto com as literais usadas no "),n(672,"code"),e(673,"po-upload"),t(),e(674,"."),t(),n(675,"p"),e(676,"Existem duas maneiras de customizar o componente:"),t(),n(677,"ul")(678,"li"),e(679,"passando um objeto implementando a interface "),n(680,"code"),e(681,"PoUploadLiterals"),t(),e(682," com todas as literais dispon\xEDveis;"),t(),n(683,"li"),e(684,"passando apenas as literais que deseja customizar:"),n(685,"pre")(686,"code"),e(687,`const customLiterals: PoUploadLiterals = {
  folders: 'Pastas',
  selectFile: 'Buscar arquivo',
  startSending: 'Enviar'
};
`),t()()()(),n(688,"p"),e(689,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),t(),n(690,"pre")(691,"code"),e(692,`<po-upload
  [p-literals]="customLiterals">
</po-upload>
`),t()(),n(693,"blockquote")(694,"p"),e(695,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),n(696,"em"),e(697,"browser"),t(),e(698," (pt, en, es, ru)."),t()()()(),n(699,"tr",13)(700,"td",14)(701,"div",22)(702,"span",23),e(703," name"),o(704,"br"),t()()(),n(705,"td",18)(706,"code",24),e(707,"string"),t()(),n(708,"td",20),e(709,"-"),t(),n(710,"td",21)(711,"p"),e(712,"Define o valor do atributo "),n(713,"code"),e(714,"name"),t(),e(715," do componente."),t()()(),n(716,"tr",13)(717,"td",14)(718,"div",15)(719,"span",16),e(720," (ngModelChange)"),o(721,"br"),t()()(),n(722,"td",18)(723,"code",19),e(724,"EventEmitter"),t()(),n(725,"td",20),e(726,"-"),t(),n(727,"td",21)(728,"em")(729,"strong"),e(730,"(opcional)"),t()(),n(731,"p"),e(732,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da "),n(733,"em"),e(734,"tag"),t(),n(735,"code"),e(736,"form"),t(),e(737,"."),t(),n(738,"p"),e(739,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),n(740,"code"),e(741,"strictTemplates"),t(),e(742,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),t(),n(743,"pre")(744,"code"),e(745,`<po-upload ... [ngModel]="UploadModel" (ngModelChange)="uploadModel = $event"> </po-upload>
`),t()()()(),n(746,"tr",13)(747,"td",14)(748,"div",15)(749,"span",16),e(750," (p-error)"),o(751,"br"),t()()(),n(752,"td",18)(753,"code",19),e(754,"EventEmitter"),t()(),n(755,"td",20),e(756,"-"),t(),n(757,"td",21)(758,"em")(759,"strong"),e(760,"(opcional)"),t()(),n(761,"p"),e(762,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),n(763,"blockquote")(764,"p"),e(765,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(766,"code"),e(767,"HttpErrorResponse"),t(),e(768,"."),t()()()(),n(769,"tr",13)(770,"td",14)(771,"div",15)(772,"span",16),e(773," (p-success)"),o(774,"br"),t()()(),n(775,"td",18)(776,"code",19),e(777,"EventEmitter"),t()(),n(778,"td",20),e(779,"-"),t(),n(780,"td",21)(781,"em")(782,"strong"),e(783,"(opcional)"),t()(),n(784,"p"),e(785,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),n(786,"blockquote")(787,"p"),e(788,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(789,"code"),e(790,"HttpResponse"),t(),e(791,"."),t()()()(),n(792,"tr",13)(793,"td",14)(794,"div",15)(795,"span",16),e(796," (p-upload)"),o(797,"br"),t()()(),n(798,"td",18)(799,"code",19),e(800,"EventEmitter"),t()(),n(801,"td",20),e(802,"-"),t(),n(803,"td",21)(804,"em")(805,"strong"),e(806,"(opcional)"),t()(),n(807,"p"),e(808,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e as propriedades data e extraFormData,
que ser\xE3o enviadas em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),n(809,"blockquote")(810,"p"),e(811,"data, nesta propriedade pode ser informado algum dado"),t()(),n(812,"pre")(813,"code"),e(814,`event.data = {id: 'id do usu\xE1rio'};
`),t()(),n(815,"blockquote")(816,"p"),e(817,`extraFormData, nesta propriedade pode ser informado algum dado solicitado pela API
que n\xE3o possa estar no objeto `),n(818,"code"),e(819,"data"),t(),e(820,`, assim o conte\xFAdo sar\xE1 extra\xEDdo do objeto e
enviado como par\xE2metro`),t()(),n(821,"pre")(822,"code"),e(823,`event.extraFormData = {id: 'id do usu\xE1rio'};
`),t()()()(),n(824,"tr",13)(825,"td",14)(826,"div",22)(827,"span",23),e(828," p-optional"),o(829,"br"),t()()(),n(830,"td",18)(831,"code",25),e(832,"boolean"),t()(),n(833,"td",20)(834,"p")(835,"code"),e(836,"false"),t()()(),n(837,"td",21)(838,"em")(839,"strong"),e(840,"(opcional)"),t()(),n(841,"p"),e(842,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(843,"blockquote")(844,"p"),e(845,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(846,"ul")(847,"li"),e(848,"O campo conter "),n(849,"code"),e(850,"p-required"),t(),e(851,";"),t(),n(852,"li"),e(853,"N\xE3o possuir "),n(854,"code"),e(855,"p-help"),t(),e(856," e/ou "),n(857,"code"),e(858,"p-label"),t(),e(859,"."),t()()()(),n(860,"tr",13)(861,"td",14)(862,"div",22)(863,"span",23),e(864," p-helper"),o(865,"br"),t()()(),n(866,"td",18)(867,"code",34),e(868,"PoHelperOptions "),t(),n(869,"code",24),e(870," string"),t()(),n(871,"td",20),e(872,"-"),t(),n(873,"td",21)(874,"em")(875,"strong"),e(876,"(opcional)"),t()(),n(877,"p"),e(878,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),n(879,"blockquote")(880,"p"),e(881,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),n(882,"code"),e(883,"p-additional-help-tooltip"),t(),e(884," e "),n(885,"code"),e(886,"p-additional-help"),t(),e(887,") ser\xE1 ignorado."),t()()()(),n(888,"tr",13)(889,"td",14)(890,"div",22)(891,"span",23),e(892," p-required"),o(893,"br"),t()()(),n(894,"td",18)(895,"code",25),e(896,"boolean"),t()(),n(897,"td",20)(898,"p")(899,"code"),e(900,"false"),t()()(),n(901,"td",21)(902,"em")(903,"strong"),e(904,"(opcional)"),t()(),n(905,"p"),e(906,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),n(907,"tr",13)(908,"td",14)(909,"div",22)(910,"span",23),e(911," p-required-url"),o(912,"br"),t()()(),n(913,"td",18)(914,"code",25),e(915,"boolean"),t()(),n(916,"td",20)(917,"p")(918,"code"),e(919,"true"),t()()(),n(920,"td",21)(921,"em")(922,"strong"),e(923,"(opcional)"),t()(),n(924,"p"),e(925,"Define se a propriedade "),n(926,"code"),e(927,"p-url"),t(),e(928," \xE9 obrigat\xF3ria."),t(),n(929,"p"),e(930,"Caso a propriedade seja definida como "),n(931,"code"),e(932,"false"),t(),e(933,":"),t(),n(934,"ul")(935,"li"),e(936,'o bot\xE3o de "Selecionar arquivo" ficar\xE1 habilitado mesmo sem a propriedade '),n(937,"code"),e(938,"p-url"),t(),e(939," definida."),t(),n(940,"li"),e(941,'o bot\xE3o "Iniciar envio" ficar\xE1 oculto at\xE9 que a propriedade '),n(942,"code"),e(943,"p-url"),t(),e(944," seja definida."),t()(),n(945,"blockquote")(946,"p"),e(947,"Se utilizada com a propriedade "),n(948,"code"),e(949,"p-auto-upload"),t(),e(950," definida como "),n(951,"code"),e(952,"true"),t(),e(953," ser\xE1 necess\xE1rio definir a propriedade "),n(954,"code"),e(955,"p-url"),t(),e(956,"."),t()()()(),n(957,"tr",13)(958,"td",14)(959,"div",22)(960,"span",23),e(961," p-show-required"),o(962,"br"),t()()(),n(963,"td",18)(964,"code",25),e(965,"boolean"),t()(),n(966,"td",20),e(967,"-"),t(),n(968,"td",21)(969,"p"),e(970,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(971,"blockquote")(972,"p"),e(973,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(974,"ul")(975,"li"),e(976,"N\xE3o possuir "),n(977,"code"),e(978,"p-help"),t(),e(979," e/ou "),n(980,"code"),e(981,"p-label"),t(),e(982,"."),t()()()(),n(983,"tr",13)(984,"td",14)(985,"div",22)(986,"span",23),e(987," p-size"),o(988,"br"),t()()(),n(989,"td",18)(990,"code",24),e(991,"string"),t()(),n(992,"td",20)(993,"p")(994,"code"),e(995,"medium"),t()()(),n(996,"td",21)(997,"em")(998,"strong"),e(999,"(opcional)"),t()(),n(1e3,"p"),e(1001,"Define o tamanho e as a\xE7\xF5es do componente:"),t(),n(1002,"ul")(1003,"li")(1004,"code"),e(1005,"small"),t(),e(1006,": altura do button como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1007,"li")(1008,"code"),e(1009,"medium"),t(),e(1010,": altura do button como 44px."),t()(),n(1011,"blockquote")(1012,"p"),e(1013,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1014,"code"),e(1015,"medium"),t(),e(1016,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1017,"a",35),e(1018,"po-theme"),t(),e(1019,"."),t()()()(),n(1020,"tr",13)(1021,"td",14)(1022,"div",22)(1023,"span",23),e(1024," p-url"),o(1025,"br"),t()()(),n(1026,"td",18)(1027,"code",24),e(1028,"string"),t()(),n(1029,"td",20),e(1030,"-"),t(),n(1031,"td",21)(1032,"p"),e(1033,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t()()()(),n(1034,"h3",9),e(1035,"M\xE9todos"),t(),n(1036,"table",36)(1037,"tr",13)(1038,"th",37)(1039,"div",22)(1040,"h4")(1041,"span",23),e(1042," clear "),t()()()()(),n(1043,"tr",21)(1044,"td",21)(1045,"p"),e(1046,"M\xE9todo respons\xE1vel por "),n(1047,"strong"),e(1048,"limpar"),t(),e(1049," o(s) arquivo(s) selecionado(s)."),t()()()(),o(1050,"br"),n(1051,"table",36)(1052,"tr",13)(1053,"th",37)(1054,"div",22)(1055,"h4")(1056,"span",23),e(1057," focus "),t()()()()(),n(1058,"tr",21)(1059,"td",21)(1060,"p"),e(1061,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1062,"p"),e(1063,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1064,"pre")(1065,"code"),e(1066,`import { PoUploadComponent } from '@po-ui/ng-components';

...

@ViewChild(PoUploadComponent, { static: true }) upload: PoUploadComponent;

focusUpload() {
  this.upload.focus();
}
`),t()()()()(),o(1067,"br"),n(1068,"table",36)(1069,"tr",13)(1070,"th",37)(1071,"div",22)(1072,"h4")(1073,"span",23),e(1074," selectFiles "),t()()()()(),n(1075,"tr",21)(1076,"td",21)(1077,"p"),e(1078,"M\xE9todo respons\xE1vel por "),n(1079,"strong"),e(1080,"abrir"),t(),e(1081," a janela para sele\xE7\xE3o de arquivo(s)."),t()()()(),o(1082,"br"),n(1083,"table",36)(1084,"tr",13)(1085,"th",37)(1086,"div",22)(1087,"h4")(1088,"span",23),e(1089," sendFiles "),t()()()()(),n(1090,"tr",21)(1091,"td",21)(1092,"p"),e(1093,"M\xE9todo respons\xE1vel por "),n(1094,"strong"),e(1095,"enviar"),t(),e(1096," o(s) arquivo(s) selecionado(s)."),t()()()(),o(1097,"br"),n(1098,"table",36)(1099,"tr",13)(1100,"th",37)(1101,"div",22)(1102,"h4")(1103,"span",23),e(1104," showAdditionalHelp "),t()()()()(),n(1105,"tr",21)(1106,"td",21)(1107,"p"),e(1108,"M\xE9todo que exibe "),n(1109,"code"),e(1110,"p-additionalHelpTooltip"),t(),e(1111," ou executa a a\xE7\xE3o definida em "),n(1112,"code"),e(1113,"p-additionalHelp"),t(),e(1114,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1115,"code"),e(1116,"p-keydown"),t(),e(1117,"."),t(),n(1118,"blockquote")(1119,"p"),e(1120,"Exibe ou oculta o conte\xFAdo do componente "),n(1121,"code"),e(1122,"po-helper"),t(),e(1123," quando o componente estiver com foco e com label vis\xEDvel."),t()(),n(1124,"pre")(1125,"code"),e(1126,`<po-upload
 #upload
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, upload)"
></po-upload>
`),t()(),n(1127,"pre")(1128,"code"),e(1129,`//Exemplo com p-label e p-helper
<po-upload
 #upload
 ...
 p-label="Label do upload"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, upload)"
></po-upload>
`),t()(),n(1130,"pre")(1131,"code"),e(1132,`...
onKeyDown(event: KeyboardEvent, inp: PoUploadComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),o(1133,"br"),n(1134,"h3"),e(1135,"Interfaces"),t(),n(1136,"h4",38)(1137,"code",5),e(1138,"PoUploadFileRestrictions"),t()(),n(1139,"div",2)(1140,"p"),e(1141,`Interface que define as restri\xE7\xF5es dos arquivos a serem selecionados com base em regras predefinidas
para o seu tamanho, extens\xE3o e quantidade.`),t()(),n(1142,"h4",9),e(1143,"Propriedades"),t(),n(1144,"table",10)(1145,"tr",11)(1146,"th",12),e(1147,"Nome"),t(),n(1148,"th",12),e(1149,"Tipo"),t(),n(1150,"th",12),e(1151,"Descri\xE7\xE3o"),t()(),n(1152,"tr",13)(1153,"td",14)(1154,"div",22)(1155,"span",23),e(1156," allowedExtensions"),o(1157,"br"),t()()(),n(1158,"td",18)(1159,"code",39),e(1160,"Array<string>"),t()(),n(1161,"td",21)(1162,"em")(1163,"strong"),e(1164,"(opcional)"),t()(),n(1165,"p"),e(1166,"Extens\xF5es permitidas de arquivos que ser\xE3o enviados ao servidor, devendo ser informada uma cole\xE7\xE3o de extens\xF5es, por exemplo:"),t(),n(1167,"pre")(1168,"code"),e(1169,`allowedExtensions = ['.png', '.jpg', '.pdf'];
`),t()()()(),n(1170,"tr",13)(1171,"td",14)(1172,"div",22)(1173,"span",23),e(1174," maxFileSize"),o(1175,"br"),t()()(),n(1176,"td",18)(1177,"code",29),e(1178,"number"),t()(),n(1179,"td",21)(1180,"em")(1181,"strong"),e(1182,"(opcional)"),t()(),n(1183,"p"),e(1184,"Tamanho m\xE1ximo do arquivo a ser enviado ao servidor."),t(),n(1185,"p"),e(1186,"Deve ser informado um valor em "),n(1187,"em"),e(1188,"bytes"),t(),e(1189,", por exemplo: "),n(1190,"code"),e(1191,"31457280"),t(),e(1192," (30MB)."),t(),n(1193,"blockquote")(1194,"p"),e(1195,"Por padr\xE3o o valor \xE9 "),n(1196,"code"),e(1197,"30 MB"),t(),e(1198,"."),t()()()(),n(1199,"tr",13)(1200,"td",14)(1201,"div",22)(1202,"span",23),e(1203," maxFiles"),o(1204,"br"),t()()(),n(1205,"td",18)(1206,"code",29),e(1207,"number"),t()(),n(1208,"td",21)(1209,"em")(1210,"strong"),e(1211,"(opcional)"),t()(),n(1212,"p"),e(1213,"Quantidade m\xE1xima de arquivos para o "),n(1214,"em"),e(1215,"upload"),t(),e(1216,"."),t(),n(1217,"blockquote")(1218,"p"),e(1219,"Esta propriedade ser\xE1 v\xE1lida somente se a propriedade "),n(1220,"code"),e(1221,"p-multiple"),t(),e(1222," estiver habilitada e seu valor for maior do que zero."),t()()()(),n(1223,"tr",13)(1224,"td",14)(1225,"div",22)(1226,"span",23),e(1227," minFileSize"),o(1228,"br"),t()()(),n(1229,"td",18)(1230,"code",29),e(1231,"number"),t()(),n(1232,"td",21)(1233,"em")(1234,"strong"),e(1235,"(opcional)"),t()(),n(1236,"p"),e(1237,"Tamanho m\xEDnimo em "),n(1238,"em"),e(1239,"bytes"),t(),e(1240," do arquivo que ser\xE1 enviado ao servidor."),t(),n(1241,"blockquote")(1242,"p"),e(1243,"Por padr\xE3o o valor \xE9 "),n(1244,"code"),e(1245,"0"),t(),e(1246,"."),t()()()()(),n(1247,"h4",38)(1248,"code",5),e(1249,"PoUploadLiterals"),t()(),n(1250,"div",2)(1251,"p"),e(1252,"Interface para defini\xE7\xE3o das literais usadas no "),n(1253,"code"),e(1254,"po-upload"),t(),e(1255,"."),t()(),n(1256,"h4",9),e(1257,"Propriedades"),t(),n(1258,"table",10)(1259,"tr",11)(1260,"th",12),e(1261,"Nome"),t(),n(1262,"th",12),e(1263,"Tipo"),t(),n(1264,"th",12),e(1265,"Descri\xE7\xE3o"),t()(),n(1266,"tr",13)(1267,"td",14)(1268,"div",22)(1269,"span",23),e(1270," dragFilesHere"),o(1271,"br"),t()()(),n(1272,"td",18)(1273,"code",24),e(1274,"string"),t()(),n(1275,"td",21)(1276,"em")(1277,"strong"),e(1278,"(opcional)"),t()(),n(1279,"p"),e(1280,"Texto indicativo para a \xE1rea onde os arquivos devem ser arrastados quando utilizada a propriedade "),n(1281,"code"),e(1282,"p-drag-drop"),t(),e(1283,"."),t()()(),n(1284,"tr",13)(1285,"td",14)(1286,"div",22)(1287,"span",23),e(1288," dragFoldersHere"),o(1289,"br"),t()()(),n(1290,"td",18)(1291,"code",24),e(1292,"string"),t()(),n(1293,"td",21)(1294,"em")(1295,"strong"),e(1296,"(opcional)"),t()(),n(1297,"p"),e(1298,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser arrastados quando utilizada a propriedade "),n(1299,"code"),e(1300,"p-drag-drop"),t(),e(1301,"."),t()()(),n(1302,"tr",13)(1303,"td",14)(1304,"div",22)(1305,"span",23),e(1306," dropFilesHere"),o(1307,"br"),t()()(),n(1308,"td",18)(1309,"code",24),e(1310,"string"),t()(),n(1311,"td",21)(1312,"em")(1313,"strong"),e(1314,"(opcional)"),t()(),n(1315,"p"),e(1316,"Texto indicativo para a \xE1rea onde os arquivos devem ser soltos quando utilizada a propriedade "),n(1317,"code"),e(1318,"p-drag-drop"),t()()()(),n(1319,"tr",13)(1320,"td",14)(1321,"div",22)(1322,"span",23),e(1323," dropFoldersHere"),o(1324,"br"),t()()(),n(1325,"td",18)(1326,"code",24),e(1327,"string"),t()(),n(1328,"td",21)(1329,"em")(1330,"strong"),e(1331,"(opcional)"),t()(),n(1332,"p"),e(1333,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser soltos quando utilizada a propriedade "),n(1334,"code"),e(1335,"p-drag-drop"),t(),e(1336,"."),t()()(),n(1337,"tr",13)(1338,"td",14)(1339,"div",22)(1340,"span",23),e(1341," errorOccurred"),o(1342,"br"),t()()(),n(1343,"td",18)(1344,"code",24),e(1345,"string"),t()(),n(1346,"td",21)(1347,"em")(1348,"strong"),e(1349,"(opcional)"),t()(),n(1350,"p"),e(1351,"Texto a ser exibido quando ocorrer erro no envio do arquivo."),t()()(),n(1352,"tr",13)(1353,"td",14)(1354,"div",22)(1355,"span",23),e(1356," files"),o(1357,"br"),t()()(),n(1358,"td",18)(1359,"code",24),e(1360,"string"),t()(),n(1361,"td",21)(1362,"em")(1363,"strong"),e(1364,"(opcional)"),t()(),n(1365,"p"),e(1366,"Par\xE2metro "),n(1367,"em"),e(1368,"files"),t(),e(1369," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),n(1370,"em"),e(1371,"dragDrop"),t(),e(1372,"."),t()()(),n(1373,"tr",13)(1374,"td",14)(1375,"div",22)(1376,"span",23),e(1377," folders"),o(1378,"br"),t()()(),n(1379,"td",18)(1380,"code",24),e(1381,"string"),t()(),n(1382,"td",21)(1383,"em")(1384,"strong"),e(1385,"(opcional)"),t()(),n(1386,"p"),e(1387,"Par\xE2metro "),n(1388,"em"),e(1389,"folders"),t(),e(1390," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),n(1391,"em"),e(1392,"dragDrop"),t(),e(1393,"."),t()()(),n(1394,"tr",13)(1395,"td",14)(1396,"div",22)(1397,"span",23),e(1398," invalidDropArea"),o(1399,"br"),t()()(),n(1400,"td",18)(1401,"code",24),e(1402,"string"),t()(),n(1403,"td",21)(1404,"em")(1405,"strong"),e(1406,"(opcional)"),t()(),n(1407,"p"),e(1408,"Texto exibido caso o usu\xE1rio arrastar um arquivo para um local inv\xE1lido ao utilizar a op\xE7\xE3o de "),n(1409,"em"),e(1410,"dragDrop"),t(),e(1411,"."),t()()(),n(1412,"tr",13)(1413,"td",14)(1414,"div",22)(1415,"span",23),e(1416," selectFile"),o(1417,"br"),t()()(),n(1418,"td",18)(1419,"code",24),e(1420,"string"),t()(),n(1421,"td",21)(1422,"em")(1423,"strong"),e(1424,"(opcional)"),t()(),n(1425,"p"),e(1426,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos."),t()()(),n(1427,"tr",13)(1428,"td",14)(1429,"div",22)(1430,"span",23),e(1431," selectFiles"),o(1432,"br"),t()()(),n(1433,"td",18)(1434,"code",24),e(1435,"string"),t()(),n(1436,"td",21)(1437,"em")(1438,"strong"),e(1439,"(opcional)"),t()(),n(1440,"p"),e(1441,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),n(1442,"code"),e(1443,"p-multiple"),t(),e(1444,"."),t()()(),n(1445,"tr",13)(1446,"td",14)(1447,"div",22)(1448,"span",23),e(1449," selectFilesOnComputer"),o(1450,"br"),t()()(),n(1451,"td",18)(1452,"code",24),e(1453,"string"),t()(),n(1454,"td",21)(1455,"em")(1456,"strong"),e(1457,"(opcional)"),t()(),n(1458,"p"),e(1459,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de arquivos na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),n(1460,"em"),e(1461,"dragDrop"),t(),e(1462,"."),t()()(),n(1463,"tr",13)(1464,"td",14)(1465,"div",22)(1466,"span",23),e(1467," selectFolder"),o(1468,"br"),t()()(),n(1469,"td",18)(1470,"code",24),e(1471,"string"),t()(),n(1472,"td",21)(1473,"em")(1474,"strong"),e(1475,"(opcional)"),t()(),n(1476,"p"),e(1477,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),n(1478,"code"),e(1479,"p-directory"),t(),e(1480,"."),t()()(),n(1481,"tr",13)(1482,"td",14)(1483,"div",22)(1484,"span",23),e(1485," selectFolderOnComputer"),o(1486,"br"),t()()(),n(1487,"td",18)(1488,"code",24),e(1489,"string"),t()(),n(1490,"td",21)(1491,"em")(1492,"strong"),e(1493,"(opcional)"),t()(),n(1494,"p"),e(1495,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de diret\xF3rio na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),n(1496,"em"),e(1497,"dragDrop"),t(),e(1498,"."),t()()(),n(1499,"tr",13)(1500,"td",14)(1501,"div",22)(1502,"span",23),e(1503," sentWithSuccess"),o(1504,"br"),t()()(),n(1505,"td",18)(1506,"code",24),e(1507,"string"),t()(),n(1508,"td",21)(1509,"em")(1510,"strong"),e(1511,"(opcional)"),t()(),n(1512,"p"),e(1513,"Texto a ser exibido quando o envio do arquivo for realizado com sucesso."),t()()(),n(1514,"tr",13)(1515,"td",14)(1516,"div",22)(1517,"span",23),e(1518," startSending"),o(1519,"br"),t()()(),n(1520,"td",18)(1521,"code",24),e(1522,"string"),t()(),n(1523,"td",21)(1524,"em")(1525,"strong"),e(1526,"(opcional)"),t()(),n(1527,"p"),e(1528,"Texto exibido no label do bot\xE3o para iniciar o envio dos arquivos."),t()()()(),n(1529,"h4",38)(1530,"code",5),e(1531,"PoProgressAction"),t()(),n(1532,"div",2)(1533,"p"),e(1534,"Interface para as a\xE7\xF5es dos componentes po-progress e po-upload."),t()(),n(1535,"h4",9),e(1536,"Propriedades"),t(),n(1537,"table",10)(1538,"tr",11)(1539,"th",12),e(1540,"Nome"),t(),n(1541,"th",12),e(1542,"Tipo"),t(),n(1543,"th",12),e(1544,"Descri\xE7\xE3o"),t()(),n(1545,"tr",13)(1546,"td",14)(1547,"div",22)(1548,"span",23),e(1549," disabled"),o(1550,"br"),t()()(),n(1551,"td",18)(1552,"code",25),e(1553,"boolean "),t(),n(1554,"code",40),e(1555," Function"),t()(),n(1556,"td",21)(1557,"em")(1558,"strong"),e(1559,"(opcional)"),t()(),n(1560,"p"),e(1561,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),t(),n(1562,"p"),e(1563,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),t()()(),n(1564,"tr",13)(1565,"td",14)(1566,"div",22)(1567,"span",23),e(1568," icon"),o(1569,"br"),t()()(),n(1570,"td",18)(1571,"code",24),e(1572,"string "),t(),n(1573,"code",41),e(1574," TemplateRef<void>"),t()(),n(1575,"td",21)(1576,"em")(1577,"strong"),e(1578,"(opcional)"),t()(),n(1579,"p"),e(1580,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),t(),n(1581,"p"),e(1582,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(1583,"a",42),e(1584,"Biblioteca de \xEDcones"),t(),e(1585,". conforme exemplo abaixo:"),t(),n(1586,"pre")(1587,"code"),e(1588,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),t()(),n(1589,"p"),e(1590,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),t(),n(1591,"pre")(1592,"code"),e(1593,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),t()(),n(1594,"p"),e(1595,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(1596,"code"),e(1597,"TemplateRef"),t(),e(1598,`, conforme exemplo abaixo:
component.html:`),t(),n(1599,"pre")(1600,"code"),e(1601,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),t()(),n(1602,"p"),e(1603,"component.ts:"),t(),n(1604,"pre")(1605,"code"),e(1606,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),t()()()(),n(1607,"tr",13)(1608,"td",14)(1609,"div",22)(1610,"span",23),e(1611," label"),o(1612,"br"),t()()(),n(1613,"td",18)(1614,"code",24),e(1615,"string"),t()(),n(1616,"td",21)(1617,"em")(1618,"strong"),e(1619,"(opcional)"),t()(),n(1620,"p"),e(1621,"R\xF3tulo da a\xE7\xE3o."),t()()(),n(1622,"tr",13)(1623,"td",14)(1624,"div",22)(1625,"span",23),e(1626," type"),o(1627,"br"),t()()(),n(1628,"td",18)(1629,"code",24),e(1630,"string"),t()(),n(1631,"td",21)(1632,"em")(1633,"strong"),e(1634,"(opcional)"),t()(),n(1635,"p"),e(1636,"Define a cor do item, sendo "),n(1637,"code"),e(1638,"default"),t(),e(1639," o padr\xE3o."),t(),n(1640,"p"),e(1641,"Valores v\xE1lidos:"),t(),n(1642,"ul")(1643,"li")(1644,"code"),e(1645,"default"),t()(),n(1646,"li")(1647,"code"),e(1648,"danger"),t(),e(1649," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),t()()()(),n(1650,"tr",13)(1651,"td",14)(1652,"div",22)(1653,"span",23),e(1654," visible"),o(1655,"br"),t()()(),n(1656,"td",18)(1657,"code",25),e(1658,"boolean "),t(),n(1659,"code",40),e(1660," Function"),t()(),n(1661,"td",21)(1662,"em")(1663,"strong"),e(1664,"(opcional)"),t()(),n(1665,"p"),e(1666,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),t(),n(1667,"blockquote")(1668,"p"),e(1669,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),t()(),n(1670,"p"),e(1671,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),t(),n(1672,"ul")(1673,"li")(1674,"p"),e(1675,"Fun\xE7\xE3o que deve retornar um booleano."),t()(),n(1676,"li")(1677,"p"),e(1678,"Informar diretamente um valor booleano."),t()()()()()()())},dependencies:[y],encapsulation:2})}return l})();var Re=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||l)($(de),$(se))};static \u0275cmp=x({type:l,selectors:[["ng-component"]],standalone:!1,decls:10,vars:4,consts:[["p-title","Upload",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),b("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-upload-doc"),t(),n(4,"po-tab",3),b("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-upload-basic-view")(6,"sample-po-upload-labs-view")(7,"sample-po-upload-resume-view")(8,"sample-po-upload-rs-view")(9,"sample-po-upload-download-view"),t()()()),r&2&&(E("p-actions",i.actions),s(2),E("p-active",i.activeTab==="doc"),s(2),E("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[ve,w,_,ye,Me,Te,Ue,Le,Ve],encapsulation:2})}return l})();var st=[{path:"",component:Re}],ze=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=G({type:l});static \u0275inj=I({imports:[ee.forChild(st),ee]})}return l})();var Kt=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=G({type:l});static \u0275inj=I({imports:[we,ze]})}return l})();export{Kt as DocPoUploadModule};
