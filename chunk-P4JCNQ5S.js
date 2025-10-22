import{o as y,p as we}from"./chunk-J2OK2TAB.js";import{Eb as $,Fa as W,Ka as xe,Na as T,O as ue,Oa as he,Q as ce,Qa as ge,Ra as X,U as Ee,Va as Z,c as se,lb as ve,ra as Se,sa as be,tb as fe,v as B,vb as Ce,xb as w,yb as _}from"./chunk-ER3PPZVH.js";import{$a as k,Ba as ne,Ca as P,Eb as C,Fc as L,Ga as K,Gc as z,Hc as R,Ic as O,Jc as j,Ka as n,La as t,M as H,Ma as o,Mc as le,Nc as re,P as Q,Qa as q,Qc as de,Ra as S,Sa as N,Sb as ae,T as s,U as u,Wc as pe,Yc as me,Za as D,_a as U,_c as te,ab as V,bb as e,db as M,fb as x,gb as h,hb as g,ia as m,ja as ee,mb as Y,nb as v,pa as b,qa as G,tb as ie,ub as oe,va as J,za as E}from"./chunk-TTO7B3JZ.js";var _e=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","upload","p-label","PO Upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile"]],template:function(r,i){r&1&&o(0,"po-upload",0)},dependencies:[T],encapsulation:2})}return a})();var We=a=>({"docs-sample-code-tabs":a}),ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload Basic"),t(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-basic/sample-po-upload-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-upload name="upload" p-label="PO Upload" p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"> </po-upload>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-basic/sample-po-upload-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-upload-basic',
  templateUrl: 'sample-po-upload-basic.component.html',
  standalone: false
})
export class SamplePoUploadBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-basic"),t(),o(23,"hr")),r&2&&(m(5),P("po-icon "+i.sampleCodeButtonIcon),m(),M(" ",i.sampleCodeButtonLabel,""),m(),E("ngClass",v(4,We,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,_e],encapsulation:2})}return a})();function Ne(a,je){if(a&1&&(n(0,"div")(1,"po-widget",22)(2,"form",23),o(3,"po-input",24)(4,"po-select",25)(5,"po-select",26)(6,"po-switch",27)(7,"po-switch",28),t()()()),a&2){let d=N();m(2),E("formGroup",d.actionForm),m(2),E("p-options",d.iconOptions),m(),E("p-options",d.typeOptions)}}var Me=(()=>{class a{fb=Q(de);helperText;allowedExtensions;customLiterals;dragDropHeight;event;formField;help;label;literals;modalActions;maxFiles;maxSize;minSize;properties;restrictions;upload;url;headers;headersLabs;action;customModalActions;actionForm;size;propertiesOptions=[{value:"autoupload",label:"Automatic upload"},{value:"directory",label:"Directory"},{value:"disabled",label:"Disabled"},{value:"disabledRemoveFile",label:"Disabled Remove File"},{value:"dragDrop",label:"Drag Drop"},{value:"requiredUrl",label:"required Url"},{value:"multiple",label:"Multiple upload"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"restrictionsInfo",label:"Hide Restrictions Info"},{value:"selectButton",label:"Hide Select Files Button"},{value:"sendButton",label:"Hide Send Files Button"},{value:"showCustomAction",label:"Add Custom Action to Progress"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"showThumbnail",label:"Show Thumbnail"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];iconOptions=[{value:"an an-download",label:"an an-download"},{value:"an an-Server",label:"an an-Server"},{value:"an an-upload",label:"an an-upload"},{value:"an an-share",label:"an an-share"}];constructor(){this.initializeActionForm()}initializeActionForm(){this.actionForm=this.fb.group({label:[""],icon:[""],type:["default"],visible:[!0],disabled:[!1]})}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(d=>{this.updateAction(d)})}updateAction(d){this.action=d}changeEvent(d){this.event=d}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}changeModalActions(){try{this.customModalActions=JSON.parse(this.modalActions)}catch{this.customModalActions=void 0}}onChangeHeaders(d){try{this.headers=JSON.parse(d)}catch{this.headers=void 0}}onChangeExtension(){let d=this.allowedExtensions.split(",").map(r=>r.trim());this.restrictions=Object.assign({},this.restrictions,{allowedExtensions:d})}onChangeMaxFiles(d){this.restrictions=Object.assign({},this.restrictions,{maxFiles:d})}onChangeMaxSize(d){this.restrictions=Object.assign({},this.restrictions,{maxFileSize:this.getValueInBytes(d)})}onChangeMinSize(d){this.restrictions=Object.assign({},this.restrictions,{minFileSize:this.getValueInBytes(d)})}restore(){this.helperText="",this.allowedExtensions=void 0,this.customLiterals=void 0,this.dragDropHeight=void 0,this.event=void 0,this.formField=void 0,this.label=void 0,this.help=void 0,this.literals="",this.modalActions="",this.maxFiles=void 0,this.maxSize=void 0,this.minSize=void 0,this.properties=[],this.restrictions={},this.upload=void 0,this.url="https://po-sample-api.onrender.com/v1/uploads/addFile",this.headers=void 0,this.headersLabs=void 0,this.actionForm.reset({type:"default",visible:!0}),this.action={label:"",type:"default"},this.customModalActions=[],this.size="medium"}getValueInBytes(d){return 1048576*d}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-labs"]],standalone:!1,decls:29,vars:51,consts:[["fRestrictions","ngForm"],["name","upload",3,"ngModelChange","p-custom-action-click","p-error","p-keydown","p-success","p-upload","p-open-modal-preview","p-remove","ngModel","p-helper","p-auto-upload","p-directory","p-disabled","p-required-url","p-disabled-remove-file","p-drag-drop","p-drag-drop-height","p-form-field","p-help","p-hide-select-button","p-hide-restrictions-info","p-hide-send-button","p-label","p-literals","p-multiple","p-optional","p-required","p-show-required","p-show-thumbnail","p-restrictions","p-size","p-url","p-headers","p-custom-action","p-label-text-wrap","p-custom-modal-actions"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","allowedExtensions","p-help","Digite as extens\xF5es permitidas separadas por v\xEDrgula","p-label","Allowed Extensions","p-placeholder",".png, .jpeg, .jpg",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","maxFiles","p-clean","","p-help","Requer p-multiple habilitado","p-label","Max Files",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","dragDropHeight","p-clean","","p-help","Altura da \xE1rea de arrastar e soltar","p-label","Drag Drop Height","p-min","160",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minSize","p-clean","","p-help","Em megabytes","p-label","Min File Size",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","maxSize","p-clean","","p-help","Em megabytes","p-label","Max File Size",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","formField","p-clean","","p-label","Form Field",1,"po-md-6",3,"ngModelChange","ngModel"],["name","url","p-clean","","p-label","URL","p-required","",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","headers","p-help",'Ex.: {"Authorization": "12312414"}',"p-label","Headers",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","literals","p-help",'Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","customModalActions","p-help",'Ex.: [{"label": "Label", "disabled": false}]',"p-label","Custom Modal Actions",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel","p-disabled"],["name","properties","p-columns","4","p-help","Select any options","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-row","po-mt-1"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["p-title","Action Button"],[1,"po-row",3,"formGroup"],["formControlName","label","p-label","Label",1,"po-md-6","po-lg-4"],["formControlName","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","type","p-label","Type",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","disabled","p-label","Disabled",1,"po-md-3","po-lg-2"],["formControlName","visible","p-label","Visible",1,"po-md-3","po-lg-2"]],template:function(r,i){if(r&1){let p=q();n(0,"po-upload",1),g("ngModelChange",function(l){return s(p),h(i.upload,l)||(i.upload=l),u(l)}),S("p-custom-action-click",function(){return s(p),u(i.changeEvent("p-custom-action-click"))})("p-error",function(){return s(p),u(i.changeEvent("p-error"))})("p-keydown",function(){return s(p),u(i.changeEvent("p-keydown"))})("p-success",function(){return s(p),u(i.changeEvent("p-success"))})("p-upload",function(){return s(p),u(i.changeEvent("p-upload"))})("p-upload",function(){return s(p),u(i.changeEvent("p-upload"))})("p-open-modal-preview",function(){return s(p),u(i.changeEvent("p-open-modal-preview"))})("p-remove",function(){return s(p),u(i.changeEvent("p-remove"))}),t(),o(1,"hr"),n(2,"div",2),o(3,"po-info",3),ie(4,"json"),o(5,"po-info",4),t(),o(6,"hr"),n(7,"div",2)(8,"form",null,0)(10,"po-input",5),g("ngModelChange",function(l){return s(p),h(i.allowedExtensions,l)||(i.allowedExtensions=l),u(l)}),S("p-change",function(){return s(p),u(i.onChangeExtension())}),t(),n(11,"po-number",6),g("ngModelChange",function(l){return s(p),h(i.maxFiles,l)||(i.maxFiles=l),u(l)}),S("p-change",function(){return s(p),u(i.onChangeMaxFiles(i.maxFiles))}),t(),n(12,"po-number",7),g("ngModelChange",function(l){return s(p),h(i.dragDropHeight,l)||(i.dragDropHeight=l),u(l)}),t(),n(13,"po-number",8),g("ngModelChange",function(l){return s(p),h(i.minSize,l)||(i.minSize=l),u(l)}),S("p-change",function(){return s(p),u(i.onChangeMinSize(i.minSize))}),t(),n(14,"po-number",9),g("ngModelChange",function(l){return s(p),h(i.maxSize,l)||(i.maxSize=l),u(l)}),S("p-change",function(){return s(p),u(i.onChangeMaxSize(i.maxSize))}),t(),o(15,"hr"),n(16,"po-input",10),g("ngModelChange",function(l){return s(p),h(i.label,l)||(i.label=l),u(l)}),t(),n(17,"po-input",11),g("ngModelChange",function(l){return s(p),h(i.help,l)||(i.help=l),u(l)}),t(),n(18,"po-input",12),g("ngModelChange",function(l){return s(p),h(i.helperText,l)||(i.helperText=l),u(l)}),t(),n(19,"po-input",13),g("ngModelChange",function(l){return s(p),h(i.formField,l)||(i.formField=l),u(l)}),t(),n(20,"po-input",14),g("ngModelChange",function(l){return s(p),h(i.url,l)||(i.url=l),u(l)}),t(),n(21,"po-input",15),g("ngModelChange",function(l){return s(p),h(i.headersLabs,l)||(i.headersLabs=l),u(l)}),S("p-change",function(l){return s(p),u(i.onChangeHeaders(l))}),t(),n(22,"po-input",16),g("ngModelChange",function(l){return s(p),h(i.literals,l)||(i.literals=l),u(l)}),S("p-change",function(){return s(p),u(i.changeLiterals())}),t(),n(23,"po-input",17),g("ngModelChange",function(l){return s(p),h(i.modalActions,l)||(i.modalActions=l),u(l)}),S("p-change",function(){return s(p),u(i.changeModalActions())}),t(),n(24,"po-checkbox-group",18),g("ngModelChange",function(l){return s(p),h(i.properties,l)||(i.properties=l),u(l)}),t(),J(25,Ne,8,3,"div"),n(26,"po-radio-group",19),g("ngModelChange",function(l){return s(p),h(i.size,l)||(i.size=l),u(l)}),t(),n(27,"div",20)(28,"po-button",21),S("p-click",function(){return s(p),u(i.restore())}),t()()()()}r&2&&(x("ngModel",i.upload),E("p-helper",i.helperText)("p-auto-upload",i.properties.includes("autoupload"))("p-directory",i.properties.includes("directory"))("p-disabled",i.properties.includes("disabled"))("p-required-url",i.properties.includes("requiredUrl"))("p-disabled-remove-file",i.properties.includes("disabledRemoveFile"))("p-drag-drop",i.properties.includes("dragDrop"))("p-drag-drop-height",i.dragDropHeight)("p-form-field",i.formField)("p-help",i.help)("p-hide-select-button",i.properties.includes("selectButton"))("p-hide-restrictions-info",i.properties.includes("restrictionsInfo"))("p-hide-send-button",i.properties.includes("sendButton"))("p-label",i.label)("p-literals",i.customLiterals)("p-multiple",i.properties.includes("multiple"))("p-optional",i.properties.includes("optional"))("p-required",i.properties.includes("required"))("p-show-required",i.properties.includes("showRequired"))("p-show-thumbnail",i.properties.includes("showThumbnail"))("p-restrictions",i.restrictions)("p-size",i.size)("p-url",i.url)("p-headers",i.headers)("p-custom-action",i.action)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-custom-modal-actions",i.customModalActions),m(3),E("p-value",oe(4,49,i.upload)),m(2),E("p-value",i.event),m(5),x("ngModel",i.allowedExtensions),m(),x("ngModel",i.maxFiles),m(),x("ngModel",i.dragDropHeight),m(),x("ngModel",i.minSize),m(),x("ngModel",i.maxSize),m(2),x("ngModel",i.label),m(),x("ngModel",i.help),m(),x("ngModel",i.helperText),m(),x("ngModel",i.formField),m(),x("ngModel",i.url),m(),x("ngModel",i.headersLabs),m(),x("ngModel",i.literals),m(),x("ngModel",i.modalActions),E("p-disabled",!i.properties.includes("showThumbnail")),m(),x("ngModel",i.properties),E("p-options",i.propertiesOptions),m(),K(i.properties.includes("showCustomAction")?25:-1),m(),x("ngModel",i.size),E("p-options",i.sizeOptions))},dependencies:[j,L,z,O,R,le,re,B,ue,ce,W,xe,ge,T,Se,Z,$,ae],encapsulation:2})}return a})();var Qe=a=>({"docs-sample-code-tabs":a}),Te=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload Labs"),t(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-labs/sample-po-upload-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-upload
  name="upload"
  [(ngModel)]="upload"
  [p-helper]="helperText"
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
  [p-show-thumbnail]="properties.includes('showThumbnail')"
  [p-restrictions]="restrictions"
  [p-size]="size"
  [p-url]="url"
  [p-headers]="headers"
  [p-custom-action]="action"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-custom-modal-actions]="customModalActions"
  (p-custom-action-click)="changeEvent('p-custom-action-click')"
  (p-error)="changeEvent('p-error')"
  (p-keydown)="changeEvent('p-keydown')"
  (p-success)="changeEvent('p-success')"
  (p-upload)="changeEvent('p-upload')"
  (p-upload)="changeEvent('p-upload')"
  (p-open-modal-preview)="changeEvent('p-open-modal-preview')"
  (p-remove)="changeEvent('p-remove')"
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
      name="helperText"
      [(ngModel)]="helperText"
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

    <po-input
      class="po-md-12 po-lg-6"
      name="customModalActions"
      [(ngModel)]="modalActions"
      [p-disabled]="!properties.includes('showThumbnail')"
      p-help='Ex.: [{"label": "Label", "disabled": false}]'
      p-label="Custom Modal Actions"
      (p-change)="changeModalActions()"
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
  PoUploadLiterals,
  PoModalAction
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-labs',
  templateUrl: './sample-po-upload-labs.component.html',
  standalone: false
})
export class SamplePoUploadLabsComponent implements OnInit {
  private fb = inject(FormBuilder);

  helperText: string;
  allowedExtensions: string;
  customLiterals: PoUploadLiterals;
  dragDropHeight: number;
  event: string;
  formField: string;
  help: string;
  label: string;
  literals: string;
  modalActions: string;
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
  customModalActions: Array<PoModalAction>;
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
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'showThumbnail', label: 'Show Thumbnail' }
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

  changeModalActions() {
    try {
      this.customModalActions = JSON.parse(this.modalActions);
    } catch {
      this.customModalActions = undefined;
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
    this.helperText = '';
    this.allowedExtensions = undefined;
    this.customLiterals = undefined;
    this.dragDropHeight = undefined;
    this.event = undefined;
    this.formField = undefined;
    this.label = undefined;
    this.help = undefined;
    this.literals = '';
    this.modalActions = '';
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
    this.customModalActions = [];
    this.size = 'medium';
  }

  private getValueInBytes(value: number) {
    return 1048576 * value;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-labs"),t(),o(23,"hr")),r&2&&(m(5),P("po-icon "+i.sampleCodeButtonIcon),m(),M(" ",i.sampleCodeButtonLabel,""),m(),E("ngClass",v(4,Qe,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,Me],encapsulation:2})}return a})();var Je=["formOpportunity"],Ke=()=>({maxFileSize:"204800"}),Fe=(()=>{class a{poNotification=Q(be);formOpportunity;biograph;linkedin;name;resume;uploadedResume;ngOnInit(){this.uploadedResume=!1}apply(){this.formOpportunity.reset(),this.uploadedResume=!1,this.poNotification.success("You were applied successfully")}resumeUploadError(){this.uploadedResume=!1}resumeUploadSuccess(){this.uploadedResume=!0}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-resume"]],viewQuery:function(r,i){if(r&1&&D(Je,7),r&2){let p;U(p=k())&&(i.formOpportunity=p.first)}},standalone:!1,decls:12,vars:7,consts:[["formOpportunity","ngForm"],[1,"po-row"],["name","name","p-clean","","p-label","Full Name","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","biograph","p-label","Biograph","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","linkedin","p-clean","","p-label","LinkedIn URL",1,"po-md-12",3,"ngModelChange","ngModel"],["name","resume","p-label","Resume","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-md-12",3,"ngModelChange","p-error","p-success","ngModel","p-restrictions"],["p-label","Apply",1,"po-md-4",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let p=q();n(0,"form",null,0)(2,"div",1)(3,"po-input",2),g("ngModelChange",function(l){return s(p),h(i.name,l)||(i.name=l),u(l)}),t()(),n(4,"div",1)(5,"po-textarea",3),g("ngModelChange",function(l){return s(p),h(i.biograph,l)||(i.biograph=l),u(l)}),t()(),n(6,"div",1)(7,"po-url",4),g("ngModelChange",function(l){return s(p),h(i.linkedin,l)||(i.linkedin=l),u(l)}),t()(),n(8,"div",1)(9,"po-upload",5),g("ngModelChange",function(l){return s(p),h(i.resume,l)||(i.resume=l),u(l)}),S("p-error",function(){return s(p),u(i.resumeUploadError())})("p-success",function(){return s(p),u(i.resumeUploadSuccess())}),t()(),n(10,"div",1)(11,"po-button",6),S("p-click",function(){return s(p),u(i.apply())}),t()()()}if(r&2){let p=V(1);m(3),x("ngModel",i.name),m(2),x("ngModel",i.biograph),m(2),x("ngModel",i.linkedin),m(2),x("ngModel",i.resume),E("p-restrictions",Y(6,Ke)),m(2),E("p-disabled",p.invalid||!i.uploadedResume)}},dependencies:[j,L,z,O,R,B,W,X,T,he],encapsulation:2})}return a})();var Xe=a=>({"docs-sample-code-tabs":a}),qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-resume-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload - Resume"),t(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-resume/sample-po-upload-resume.component.html"),t(),n(13,"pre",7),e(14,`<form #formOpportunity="ngForm">
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
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-resume"),t(),o(23,"hr")),r&2&&(m(5),P("po-icon "+i.sampleCodeButtonIcon),m(),M(" ",i.sampleCodeButtonLabel,""),m(),E("ngClass",v(4,Xe,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,Fe],encapsulation:2})}return a})();var $e=["upload"],et=["stepper"],tt=["submitForm"],nt=["sucessData"],it=a=>({"po-invisible":a});function ot(a,je){if(a&1){let d=q();n(0,"div",8)(1,"div",9)(2,"p",11),e(3,"Confirm informations"),t()(),o(4,"po-info",28)(5,"po-info",29)(6,"po-info",30),n(7,"po-button",31),S("p-click",function(){s(d);let i=N();return u(i.confirmSubmit())}),t()()}if(a&2){let d=N();m(4),E("p-value",d.project[0].name||"N/D"),m(),E("p-value",d.title||"N/D"),m(),E("p-value",d.description||"N/D")}}var De=(()=>{class a{upload;stepper;submitForm;sucessData;confirm={action:()=>{this.sucessData.close()},label:"Return"};description;project=[];restrictions={allowedExtensions:[".zip",".7z",".tar",".wim"]};title;ngOnInit(){this.newSubmit()}canSubmitProject(){return!!(this.project&&this.project.length)&&this.title&&this.description}confirmSubmit(){this.sucessData.open(),this.newSubmit(),this.stepper.first()}submitProject(){this.upload.sendFiles(),this.stepper.next()}newSubmit(){this.project=[],this.title=void 0,this.description=void 0}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-rs"]],viewQuery:function(r,i){if(r&1&&(D($e,7),D(et,7),D(tt,7),D(nt,7)),r&2){let p;U(p=k())&&(i.upload=p.first),U(p=k())&&(i.stepper=p.first),U(p=k())&&(i.submitForm=p.first),U(p=k())&&(i.sucessData=p.first)}},standalone:!1,decls:47,vars:15,consts:[["stepper",""],["submitForm","ngForm"],["upload",""],["sucessData",""],[1,"po-row"],["p-orientation","vertical","p-step-icons","","p-step-size","42",1,"po-lg-10","po-offset-lg-2","po-offset-xl-2"],["p-label","Welcome"],["p-title","Realize & Show",1,"po-lg-8","po-mt-2"],[1,"tht-row"],[1,"po-sm-12"],[1,"po-font-title"],[1,"po-font-text-large"],["p-label","Yes!","p-kind","primary",1,"po-sm-12","po-mt-2",3,"p-click"],["p-label","Submit",3,"p-can-active-next-step"],[1,"po-lg-10"],[1,"po-font-subtitle"],[1,"po-font-text-small-bold"],[1,"po-font-title","po-lg-2"],["p-icon","an an-cloud-arrow-up",1,"po-clickable",3,"click"],["p-icon","an an-fill an-x-circle",1,"po-clickable",3,"click","ngClass"],[1,"po-sm-12","po-mt-3","po-font-text-bold"],["name","project","p-hide-select-button","","p-hide-send-button","","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-sm-12",3,"ngModelChange","ngModel","p-restrictions"],["name","title","p-label","Title","p-placeholder","Be creative","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["name","description","p-label","Description","p-maxlength","140","p-placeholder","Resume on few words","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["p-label","Done",1,"po-sm-12","po-mt-2",3,"p-click","p-disabled"],["p-label","Confirm"],["p-title","Confirmation",3,"p-primary-action"],[1,"po-sm-12","po-font-title"],["p-label","File name",1,"po-md-4",3,"p-value"],["p-label","Title",1,"po-md-4",3,"p-value"],["p-label","Description",1,"po-md-4",3,"p-value"],["p-label","Confirm",1,"po-sm-12","po-mt-2","po-mb-2",3,"p-click"]],template:function(r,i){if(r&1){let p=q();n(0,"div",4)(1,"po-stepper",5,0)(3,"po-step",6)(4,"po-widget",7)(5,"div",8)(6,"div",9)(7,"h1",10),e(8,"Welcome, TOTVER!"),t(),n(9,"p",11),e(10,"Let's submit your project?"),t()()(),n(11,"div",8)(12,"po-button",12),S("p-click",function(){s(p);let l=V(2);return u(l.next())}),t()()()(),n(13,"po-step",13)(14,"po-widget",7)(15,"form",null,1)(17,"div",4)(18,"div",14)(19,"div",4)(20,"p",15),e(21,"Please, select your project:"),t()(),n(22,"div",4)(23,"p",16),e(24,"*Upload a zip file containing your project."),t()()(),n(25,"div",17)(26,"po-icon",18),S("click",function(){s(p);let l=V(32);return u(l.selectFiles())}),t(),n(27,"po-icon",19),S("click",function(){s(p);let l=V(32);return u(l.clear())}),t()()(),n(28,"div",4)(29,"label",20),e(30,"Attached"),t(),n(31,"po-upload",21,2),g("ngModelChange",function(l){return s(p),h(i.project,l)||(i.project=l),u(l)}),t()(),n(33,"div",4)(34,"po-input",22),g("ngModelChange",function(l){return s(p),h(i.title,l)||(i.title=l),u(l)}),t()(),n(35,"div",4)(36,"po-textarea",23),g("ngModelChange",function(l){return s(p),h(i.description,l)||(i.description=l),u(l)}),t()(),n(37,"div",8)(38,"po-button",24),S("p-click",function(){return s(p),u(i.submitProject())}),t()()()()(),n(39,"po-step",25)(40,"po-widget",7),J(41,ot,8,3,"div",8),t()()()(),n(42,"po-modal",26,3)(44,"div",4)(45,"p",27),e(46,"Project successfully submited!"),t()()()}r&2&&(m(13),E("p-can-active-next-step",i.canSubmitProject.bind(i)),m(14),E("ngClass",v(13,it,i.project.length<1)),m(2),ne("po-invisible",i.project.length<1),m(2),x("ngModel",i.project),E("p-restrictions",i.restrictions),m(3),x("ngModel",i.title),E("p-disabled",i.project.length<1),m(2),x("ngModel",i.description),E("p-disabled",i.project.length<1),m(2),E("p-disabled",i.canSubmitProject()),m(3),K(i.canSubmitProject()?41:-1),m(),E("p-primary-action",i.confirm))},dependencies:[C,j,L,z,O,R,B,W,X,T,se,Z,Ee,fe,Ce,$],encapsulation:2})}return a})();var lt=a=>({"docs-sample-code-tabs":a}),Ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-rs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload - Realize & Show"),t(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-rs/sample-po-upload-rs.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-rs"),t(),o(23,"hr")),r&2&&(m(5),P("po-icon "+i.sampleCodeButtonIcon),m(),M(" ",i.sampleCodeButtonLabel,""),m(),E("ngClass",v(4,lt,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,De],encapsulation:2})}return a})();var ke=(()=>{class a{customAction={icon:"an an-download",type:"default",visible:!1};uploadSuccess(){this.customAction.visible=!0}onCustomActionClick(d){if(!d.rawFile){console.error("Arquivo inv\xE1lido ou n\xE3o encontrado.");return}this.downloadFile(d.rawFile)}downloadFile(d){let r=URL.createObjectURL(d),i=document.createElement("a");i.href=r,i.download=d.name,i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-download"]],standalone:!1,decls:1,vars:2,consts:[["name","upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",3,"p-custom-action-click","p-success","p-custom-action","p-multiple"]],template:function(r,i){r&1&&(n(0,"po-upload",0),S("p-custom-action-click",function(c){return i.onCustomActionClick(c)})("p-success",function(){return i.uploadSuccess()}),t()),r&2&&E("p-custom-action",i.customAction)("p-multiple",!0)},dependencies:[T],encapsulation:2})}return a})();var pt=a=>({"docs-sample-code-tabs":a}),Ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-download-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload - with Download Button"),t(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-download/sample-po-upload-download.component.html"),t(),n(13,"pre",7),e(14,`<po-upload
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
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-download"),t(),o(23,"hr")),r&2&&(m(5),P("po-icon "+i.sampleCodeButtonIcon),m(),M(" ",i.sampleCodeButtonLabel,""),m(),E("ngClass",v(4,pt,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,ke],encapsulation:2})}return a})();var st=()=>[".png",".jpg",".jpeg",".gif"],ut=a=>({allowedExtensions:a,maxFiles:5,maxFileSize:2057280}),Ve=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-preview"]],standalone:!1,decls:1,vars:6,consts:[["name","upload","p-label","PO Upload com Pr\xE9-visualiza\xE7\xE3o","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",3,"p-restrictions","p-show-thumbnail","p-multiple"]],template:function(r,i){r&1&&o(0,"po-upload",0),r&2&&E("p-restrictions",v(4,ut,Y(3,st)))("p-show-thumbnail",!0)("p-multiple",!0)},dependencies:[T],encapsulation:2})}return a})();var Et=a=>({"docs-sample-code-tabs":a}),Le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-preview-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload - with Preview"),t(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-preview/sample-po-upload-preview.component.html"),t(),n(13,"pre",7),e(14,`<po-upload
  name="upload"
  p-label="PO Upload com Pr\xE9-visualiza\xE7\xE3o"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-restrictions]="{ allowedExtensions: ['.png', '.jpg', '.jpeg', '.gif'], maxFiles: 5, maxFileSize: 2057280 }"
  [p-show-thumbnail]="true"
  [p-multiple]="true"
></po-upload>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-preview/sample-po-upload-preview.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';
import { PoProgressAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-preview',
  templateUrl: 'sample-po-upload-preview.component.html',
  standalone: false
})
export class SamplePoUploadPreviewComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-preview"),t(),o(23,"hr")),r&2&&(m(5),P("po-icon "+i.sampleCodeButtonIcon),m(),M(" ",i.sampleCodeButtonLabel,""),m(),E("ngClass",v(4,Et,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,Ve],encapsulation:2})}return a})();var ze=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-doc"]],standalone:!1,decls:2206,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-html"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","Array<PoModalAction>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoUploadComponent"),t()(),n(21,"div",2)(22,"p"),e(23,"O componente "),n(24,"code"),e(25,"po-upload"),t(),e(26,` permite que o usu\xE1rio envie arquivo(s) ao servidor e acompanhe o progresso.
Este componente tamb\xE9m possibilita algumas configura\xE7\xF5es como: \u2013 Envio de diret\xF3rios, onde ele acessa o diret\xF3rio selecionado assim como seus sub-diret\xF3rios;`),t(),n(27,"ul")(28,"li"),e(29,"M\xFAltipla sele\xE7\xE3o, onde o usu\xE1rio pode enviar mais de um arquivo ao servidor."),t(),n(30,"li"),e(31,`Auto envio, onde o arquivo \xE9 enviado imediatamente ap\xF3s a sele\xE7\xE3o do usu\xE1rio, n\xE3o necessitando que o usu\xE1rio
clique em enviar.`),t(),n(32,"li"),e(33,"Restri\xE7\xF5es de formatos de arquivo e tamanho."),t(),n(34,"li"),e(35,"Fun\xE7\xE3o de sucesso que ser\xE1 disparada quando os arquivos forem enviados com sucesso."),t(),n(36,"li"),e(37,"Fun\xE7\xE3o de erro que ser\xE1 disparada quando houver erro no envio dos arquivos."),t(),n(38,"li"),e(39,"Permite habilitar uma \xE1rea onde os arquivos podem ser arrastados."),t()(),n(40,"h4"),e(41,"Tokens customiz\xE1veis"),t(),n(42,"p"),e(43,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),n(44,"blockquote")(45,"p"),e(46,"Para maiores informa\xE7\xF5es, acesse o guia "),n(47,"a",6),e(48,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(49,"."),t()(),n(50,"table")(51,"thead")(52,"tr")(53,"th"),e(54,"Propriedade"),t(),n(55,"th"),e(56,"Descri\xE7\xE3o"),t(),n(57,"th"),e(58,"Valor Padr\xE3o"),t()()(),n(59,"tbody")(60,"tr")(61,"td")(62,"strong"),e(63,"TEXT SUPPORT"),t()(),o(64,"td")(65,"td"),t(),n(66,"tr")(67,"td")(68,"code"),e(69,"--font-family-text-support"),t()(),n(70,"td"),e(71,"Fam\xEDlia tipogr\xE1fica usada no texto de suporte"),t(),n(72,"td")(73,"code"),e(74,"var(--font-family-theme)"),t()()(),n(75,"tr")(76,"td")(77,"code"),e(78,"--text-color-text-support"),t()(),n(79,"td"),e(80,"Cor da fonte no texto de suporte"),t(),n(81,"td")(82,"code"),e(83,"var(--color-neutral-dark-90)"),t()()(),n(84,"tr")(85,"td")(86,"strong"),e(87,"UPLOAD CONTENT"),t()(),o(88,"td")(89,"td"),t(),n(90,"tr")(91,"td")(92,"code"),e(93,"--background-color-content"),t(),e(94," \xA0"),t(),n(95,"td"),e(96,"Cor de fundo"),t(),n(97,"td")(98,"code"),e(99,"var(--color-neutral-light-10)"),t()()(),n(100,"tr")(101,"td")(102,"code"),e(103,"--border-color-content"),t()(),n(104,"td"),e(105,"Cor da borda"),t(),n(106,"td")(107,"code"),e(108,"var(--color-neutral-light-20)"),t()()(),n(109,"tr")(110,"td")(111,"code"),e(112,"--border-radius-content"),t()(),n(113,"td"),e(114,"Cont\xE9m o valor do raio dos cantos do elemento"),t(),n(115,"td")(116,"code"),e(117,"var(--border-radius-md)"),t()()(),n(118,"tr")(119,"td")(120,"code"),e(121,"--text-color-file-name"),t()(),n(122,"td"),e(123,"Cor do texto do nome do arquivo"),t(),n(124,"td")(125,"code"),e(126,"var(--color-neutral-dark-90)"),t()()(),n(127,"tr")(128,"td")(129,"code"),e(130,"--font-family-file-name"),t()(),n(131,"td"),e(132,"Fam\xEDlia tipogr\xE1fica usada no texto do arquivo"),t(),n(133,"td")(134,"code"),e(135,"var(--font-family-theme)"),t()()(),n(136,"tr")(137,"td")(138,"code"),e(139,"--text-color-info-bar"),t()(),n(140,"td"),e(141,"Cor do texto de informa\xE7\xE3o"),t(),n(142,"td")(143,"code"),e(144,"var(--color-neutral-mid-60)"),t()()(),n(145,"tr")(146,"td")(147,"code"),e(148,"--font-family-info-bar"),t()(),n(149,"td"),e(150,"Fam\xEDlia tipogr\xE1fica usada no texto de informa\xE7\xE3o"),t(),n(151,"td")(152,"code"),e(153,"var(--font-family-theme)"),t()()(),n(154,"tr")(155,"td")(156,"strong"),e(157,"ERROR STATE"),t()(),o(158,"td")(159,"td"),t(),n(160,"tr")(161,"td")(162,"code"),e(163,"--background-color-content-error"),t()(),n(164,"td"),e(165,"Cor de fundo do container de erro"),t(),n(166,"td")(167,"code"),e(168,"var(--color-neutral-light-00)"),t()()(),n(169,"tr")(170,"td")(171,"code"),e(172,"--border-color-content-error"),t()(),n(173,"td"),e(174,"Cor da borda do container de erro"),t(),n(175,"td")(176,"code"),e(177,"var(--color-feedback-negative-base)"),t()()(),n(178,"tr")(179,"td")(180,"code"),e(181,"--text-color-error"),t()(),n(182,"td"),e(183,"Cor do texto do container de erro"),t(),n(184,"td")(185,"code"),e(186,"var(--color-feedback-negative-dark)"),t()()(),n(187,"tr")(188,"td")(189,"code"),e(190,"--color-icon-error"),t()(),n(191,"td"),e(192,"Cor do \xEDcone no estado de erro"),t(),n(193,"td")(194,"code"),e(195,"var(--color-feedback-negative-base)"),t()()(),n(196,"tr")(197,"td")(198,"code"),e(199,"--font-family-error"),t()(),n(200,"td"),e(201,"Fam\xEDlia tipogr\xE1fica usada no texto de erro"),t(),n(202,"td")(203,"code"),e(204,"var(--font-family-theme)"),t()()(),n(205,"tr")(206,"td")(207,"strong"),e(208,"UPLOADED STATE"),t()(),o(209,"td")(210,"td"),t(),n(211,"tr")(212,"td")(213,"code"),e(214,"--background-color-content-uploaded"),t()(),n(215,"td"),e(216,"Cor de fundo do container com status de enviado"),t(),n(217,"td")(218,"code"),e(219,"var(--color-neutral-light-00)"),t()()(),n(220,"tr")(221,"td")(222,"code"),e(223,"--border-color-content-uploaded"),t()(),n(224,"td"),e(225,"Cor da borda do container com status de enviado"),t(),n(226,"td")(227,"code"),e(228,"var(--color-neutral-light-20)"),t()()(),n(229,"tr")(230,"td")(231,"strong"),e(232,"INTERACTIVE STATE"),t()(),o(233,"td")(234,"td"),t(),n(235,"tr")(236,"td")(237,"code"),e(238,"--text-color-file-name-interactive"),t()(),n(239,"td"),e(240,"Cor do texto do nome do arquivo quando interativo"),t(),n(241,"td")(242,"code"),e(243,"var(--color-action-default)"),t()()(),n(244,"tr")(245,"td")(246,"strong"),e(247,"THUMBNAIL"),t()(),o(248,"td")(249,"td"),t(),n(250,"tr")(251,"td")(252,"code"),e(253,"--color-icon-thumbnail"),t()(),n(254,"td"),e(255,"Cor do \xEDcone na thumbnail"),t(),n(256,"td")(257,"code"),e(258,"var(--color-action-default)"),t()()(),n(259,"tr")(260,"td")(261,"code"),e(262,"--border-width-thumbnail"),t()(),n(263,"td"),e(264,"Tamanho da fonte na thumbnail"),t(),n(265,"td")(266,"code"),e(267,"var(--border-width-sm)"),t()()(),n(268,"tr")(269,"td")(270,"code"),e(271,"--border-radius-thumbnail"),t()(),n(272,"td"),e(273,"Cont\xE9m o valor do raio dos cantos na thumbnail"),t(),n(274,"td")(275,"code"),e(276,"var(--border-radius-md)"),t()()(),n(277,"tr")(278,"td")(279,"code"),e(280,"--background-color-thumbnail"),t()(),n(281,"td"),e(282,"Cor de fundo na thumbnail"),t(),n(283,"td")(284,"code"),e(285,"var(--color-neutral-light-05)"),t()()(),n(286,"tr")(287,"td")(288,"strong"),e(289,"Focused"),t()(),o(290,"td")(291,"td"),t(),n(292,"tr")(293,"td")(294,"code"),e(295,"--outline-color-focused"),t()(),n(296,"td"),e(297,"Cor do outline do estado de focus"),t(),n(298,"td")(299,"code"),e(300,"var(--color-action-focus)"),t()()()()()(),n(301,"div",7)(302,"h4",8),e(303,"Seletor"),t(),n(304,"pre",9),e(305,`<po-upload
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-upload="boolean"
    p-custom-action="PoProgressAction"
    (p-custom-action-click)="EventEmitter"
    p-custom-modal-actions="Array<PoModalAction>"
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
    (p-cancel)="EventEmitter"
    (p-error)="EventEmitter"
    (p-open-modal-preview)="EventEmitter"
    (p-remove)="EventEmitter"
    (p-success)="EventEmitter"
    (p-upload)="EventEmitter"
    p-optional="boolean"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    p-required-url="boolean"
    p-show-required="boolean"
    p-show-thumbnail="boolean"
    p-size="string"
    p-url="string" >
</po-upload>
`),t()(),n(306,"h4",10),e(307,"Propriedades"),t(),n(308,"table",11)(309,"tr",12)(310,"th",13),e(311,"Nome"),t(),n(312,"th",13),e(313,"Tipo"),t(),n(314,"th",13),e(315,"Padr\xE3o"),t(),n(316,"th",13),e(317,"Descri\xE7\xE3o"),t()(),n(318,"tr",14)(319,"td",15)(320,"div",16)(321,"span",17),e(322," (p-additional-help)"),o(323,"br"),t()(),n(324,"div",18),e(325,"Deprecated"),t()(),n(326,"td",19)(327,"code",20),e(328,"EventEmitter"),t()(),n(329,"td",21),e(330,"-"),t(),n(331,"td",22)(332,"em")(333,"strong"),e(334,"(opcional)"),t()(),n(335,"p"),e(336,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(337,"code"),e(338,"p-help"),t(),e(339,"."),t(),n(340,"blockquote")(341,"p"),e(342,"Essa propriedade est\xE1 "),n(343,"strong"),e(344,"depreciada"),t(),e(345," e ser\xE1 removida na vers\xE3o "),n(346,"code"),e(347,"23.x.x"),t(),e(348,". Recomendamos utilizar a propriedade "),n(349,"code"),e(350,"p-helper"),t(),e(351," que oferece mais recursos e flexibilidade."),t()()()(),n(352,"tr",14)(353,"td",15)(354,"div",23)(355,"span",24),e(356," p-additional-help-tooltip"),o(357,"br"),t()(),n(358,"div",18),e(359,"Deprecated"),t()(),n(360,"td",19)(361,"code",25),e(362,"string"),t()(),n(363,"td",21),e(364,"-"),t(),n(365,"td",22)(366,"em")(367,"strong"),e(368,"(opcional)"),t()(),n(369,"p"),e(370,"Exibe um \xEDcone de ajuda adicional ao "),n(371,"code"),e(372,"p-help"),t(),e(373,`, com o texto desta propriedade no tooltip.
Se o evento `),n(374,"code"),e(375,"p-additional-help"),t(),e(376,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(377,"strong"),e(378,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(379,"blockquote")(380,"p"),e(381,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(382,"blockquote")(383,"p"),e(384,"Essa propriedade est\xE1 "),n(385,"strong"),e(386,"depreciada"),t(),e(387," e ser\xE1 removida na vers\xE3o "),n(388,"code"),e(389,"23.x.x"),t(),e(390,". Recomendamos utilizar a propriedade "),n(391,"code"),e(392,"p-helper"),t(),e(393," que oferece mais recursos e flexibilidade."),t()()()(),n(394,"tr",14)(395,"td",15)(396,"div",23)(397,"span",24),e(398," p-append-in-body"),o(399,"br"),t()()(),n(400,"td",19)(401,"code",26),e(402,"boolean"),t()(),n(403,"td",21)(404,"p")(405,"code"),e(406,"false"),t()()(),n(407,"td",22)(408,"em")(409,"strong"),e(410,"(opcional)"),t()(),n(411,"p"),e(412,"Define que o popover ("),n(413,"code"),e(414,"p-helper"),t(),e(415,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(416,"blockquote")(417,"p"),e(418,"Quando utilizado com "),n(419,"code"),e(420,"p-helper"),t(),e(421,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),n(422,"tr",14)(423,"td",15)(424,"div",23)(425,"span",24),e(426," p-auto-focus"),o(427,"br"),t()()(),n(428,"td",19)(429,"code",26),e(430,"boolean"),t()(),n(431,"td",21)(432,"p")(433,"code"),e(434,"false"),t()()(),n(435,"td",22)(436,"em")(437,"strong"),e(438,"(opcional)"),t()(),n(439,"p"),e(440,"Aplica foco no elemento ao ser iniciado."),t(),n(441,"blockquote")(442,"p"),e(443,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(444,"tr",14)(445,"td",15)(446,"div",23)(447,"span",24),e(448," p-auto-upload"),o(449,"br"),t()()(),n(450,"td",19)(451,"code",26),e(452,"boolean"),t()(),n(453,"td",21)(454,"p")(455,"code"),e(456,"false"),t()()(),n(457,"td",22)(458,"em")(459,"strong"),e(460,"(opcional)"),t()(),n(461,"p"),e(462,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),n(463,"blockquote")(464,"p"),e(465,"Esta propriedade funciona somente se a propriedade "),n(466,"code"),e(467,"p-url"),t(),e(468," tiver um valor atribu\xEDdo."),t()()()(),n(469,"tr",14)(470,"td",15)(471,"div",23)(472,"span",24),e(473," p-custom-action"),o(474,"br"),t()()(),n(475,"td",19)(476,"code",27),e(477,"PoProgressAction"),t()(),n(478,"td",21),e(479,"-"),t(),n(480,"td",22)(481,"em")(482,"strong"),e(483,"(opcional)"),t()(),n(484,"p"),e(485,"Define uma a\xE7\xE3o personalizada no componente "),n(486,"code"),e(487,"po-upload"),t(),e(488,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),t(),n(489,"p"),e(490,"A a\xE7\xE3o deve implementar a interface "),n(491,"strong"),e(492,"PoProgressAction"),t(),e(493,", permitindo configurar propriedades como:"),t(),n(494,"ul")(495,"li")(496,"code"),e(497,"label"),t(),e(498,": Texto do bot\xE3o."),t(),n(499,"li")(500,"code"),e(501,"icon"),t(),e(502,": \xCDcone a ser exibido no bot\xE3o."),t(),n(503,"li")(504,"code"),e(505,"type"),t(),e(506,": Tipo de bot\xE3o (ex.: "),n(507,"code"),e(508,"danger"),t(),e(509," ou "),n(510,"code"),e(511,"default"),t(),e(512,")."),t(),n(513,"li")(514,"code"),e(515,"disabled"),t(),e(516,": Indica se o bot\xE3o deve estar desabilitado."),t(),n(517,"li")(518,"code"),e(519,"visible"),t(),e(520,": Indica se o bot\xE3o deve estar vis\xEDvel."),t()(),n(521,"p")(522,"strong"),e(523,"Exemplo de uso:"),t()(),n(524,"pre")(525,"code",28),e(526,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),t()(),n(527,"pre")(528,"code",29),e(529,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
}
`),t()()()(),n(530,"tr",14)(531,"td",15)(532,"div",16)(533,"span",17),e(534," (p-custom-action-click)"),o(535,"br"),t()()(),n(536,"td",19)(537,"code",20),e(538,"EventEmitter"),t()(),n(539,"td",21),e(540,"-"),t(),n(541,"td",22)(542,"em")(543,"strong"),e(544,"(opcional)"),t()(),n(545,"p"),e(546,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),n(547,"code"),e(548,"p-custom-action"),t(),e(549,"."),t(),n(550,"p"),e(551,`O evento retorna o arquivo associado \xE0 barra de progresso onde a a\xE7\xE3o foi clicada,
permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),t(),n(552,"p")(553,"strong"),e(554,"Exemplo de uso:"),t()(),n(555,"pre")(556,"code",28),e(557,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),t()(),n(558,"pre")(559,"code",29),e(560,`customAction: PoProgressAction = {
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
`),t()()()(),n(561,"tr",14)(562,"td",15)(563,"div",23)(564,"span",24),e(565," p-custom-modal-actions"),o(566,"br"),t()()(),n(567,"td",19)(568,"code",30),e(569,"Array<PoModalAction>"),t()(),n(570,"td",21),e(571,"-"),t(),n(572,"td",22)(573,"em")(574,"strong"),e(575,"(opcional)"),t()(),n(576,"p"),e(577,`Define uma ou duas a\xE7\xF5es personalizadas do modal de pr\xE9-visualiza\xE7\xE3o, adicionando um bot\xE3o ou dois bot\xF5es no canto inferior direito
do modal.`),t(),n(578,"p"),e(579,"A a\xE7\xE3o deve implementar a interface "),n(580,"strong"),e(581,"PoModalAction"),t(),e(582,", permitindo configurar propriedades como:"),t(),n(583,"ul")(584,"li")(585,"code"),e(586,"label"),t(),e(587,": Texto do bot\xE3o."),t(),n(588,"li")(589,"code"),e(590,"action"),t(),e(591,": \xCDcone a ser exibido no bot\xE3o."),t(),n(592,"li")(593,"code"),e(594,"danger"),t(),e(595,": Define a propriedade "),n(596,"code"),e(597,"p-danger"),t(),e(598," do bot\xE3o."),t(),n(599,"li")(600,"code"),e(601,"disabled"),t(),e(602,": Indica se o bot\xE3o deve estar desabilitado."),t(),n(603,"li")(604,"code"),e(605,"visible"),t(),e(606,": Indica se o bot\xE3o deve estar vis\xEDvel."),t()(),n(607,"p")(608,"strong"),e(609,"Exemplo de uso:"),t()(),n(610,"pre")(611,"code",28),e(612,`<po-upload
 [p-custom-modal-actions]="customActions"
</po-upload>
`),t()(),n(613,"pre")(614,"code",29),e(615,`customActions:  Array<PoModalAction> = [
 { label: 'Confirmar', action: this.confirmModal.bind(this) },
 { label: 'Cancelar', action: this.closeModal.bind(this) }
];
`),t()()()(),n(616,"tr",14)(617,"td",15)(618,"div",23)(619,"span",24),e(620," p-directory"),o(621,"br"),t()()(),n(622,"td",19)(623,"code",26),e(624,"boolean"),t()(),n(625,"td",21)(626,"p")(627,"code"),e(628,"false"),t()()(),n(629,"td",22)(630,"em")(631,"strong"),e(632,"(opcional)"),t()(),n(633,"p"),e(634,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),n(635,"blockquote")(636,"p"),e(637,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),n(638,"blockquote")(639,"p"),e(640,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),n(641,"strong"),e(642,"Internet Explorer"),t(),e(643,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()()()(),n(644,"tr",14)(645,"td",15)(646,"div",23)(647,"span",24),e(648," p-disabled"),o(649,"br"),t()()(),n(650,"td",19)(651,"code",26),e(652,"boolean"),t()(),n(653,"td",21),e(654,"-"),t(),n(655,"td",22)(656,"em")(657,"strong"),e(658,"(opcional)"),t()(),n(659,"p"),e(660,"Indica que o campo ser\xE1 desabilitado."),t()()(),n(661,"tr",14)(662,"td",15)(663,"div",23)(664,"span",24),e(665," p-disabled-remove-file"),o(666,"br"),t()()(),n(667,"td",19)(668,"code",26),e(669,"boolean"),t()(),n(670,"td",21)(671,"p")(672,"code"),e(673,"false"),t()()(),n(674,"td",22)(675,"em")(676,"strong"),e(677,"(opcional)"),t()(),n(678,"p"),e(679,"Desabilita bot\xE3o de remover o(s) arquivo(s) selecionado(s)."),t()()(),n(680,"tr",14)(681,"td",15)(682,"div",23)(683,"span",24),e(684," p-drag-drop"),o(685,"br"),t()()(),n(686,"td",19)(687,"code",26),e(688,"boolean"),t()(),n(689,"td",21)(690,"p")(691,"code"),e(692,"false"),t()()(),n(693,"td",22)(694,"em")(695,"strong"),e(696,"(opcional)"),t()(),n(697,"p"),e(698,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),n(699,"blockquote")(700,"p"),e(701,"Recomendamos utilizar apenas um "),n(702,"code"),e(703,"po-upload"),t(),e(704," com esta funcionalidade por tela."),t()()()(),n(705,"tr",14)(706,"td",15)(707,"div",23)(708,"span",24),e(709," p-drag-drop-height"),o(710,"br"),t()()(),n(711,"td",19)(712,"code",31),e(713,"number"),t()(),n(714,"td",21)(715,"p")(716,"code"),e(717,"320"),t()()(),n(718,"td",22)(719,"em")(720,"strong"),e(721,"(opcional)"),t()(),n(722,"p"),e(723,"Define em "),n(724,"em"),e(725,"pixels"),t(),e(726," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),n(727,"code"),e(728,"160px"),t(),e(729,"."),t(),n(730,"blockquote")(731,"p"),e(732,"Esta propriedade funciona somente se a propriedade "),n(733,"code"),e(734,"p-drag-drop"),t(),e(735," estiver habilitada."),t()()()(),n(736,"tr",14)(737,"td",15)(738,"div",23)(739,"span",24),e(740," p-restrictions"),o(741,"br"),t()()(),n(742,"td",19)(743,"code",32),e(744,"PoUploadFileRestrictions"),t()(),n(745,"td",21),e(746,"-"),t(),n(747,"td",22)(748,"em")(749,"strong"),e(750,"(opcional)"),t()(),n(751,"p"),e(752,"Objeto que segue a defini\xE7\xE3o da interface "),n(753,"code"),e(754,"PoUploadFileRestrictions"),t(),e(755,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t()()(),n(756,"tr",14)(757,"td",15)(758,"div",23)(759,"span",24),e(760," p-form-field"),o(761,"br"),t()()(),n(762,"td",19)(763,"code",25),e(764,"string"),t()(),n(765,"td",21)(766,"p")(767,"code"),e(768,"files"),t()()(),n(769,"td",22)(770,"em")(771,"strong"),e(772,"(opcional)"),t()(),n(773,"p"),e(774,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),n(775,"code"),e(776,"p-url"),t(),e(777,"."),t()()(),n(778,"tr",14)(779,"td",15)(780,"div",23)(781,"span",24),e(782," p-headers"),o(783,"br"),t()()(),n(784,"td",19)(785,"code",33),e(786,"{ [name: string]: string "),t(),n(787,"code",34),e(788,` Array<string>;
}`),t()(),n(789,"td",21),e(790,"-"),t(),n(791,"td",22)(792,"p"),e(793,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t()()(),n(794,"tr",14)(795,"td",15)(796,"div",23)(797,"span",24),e(798," p-help"),o(799,"br"),t()()(),n(800,"td",19)(801,"code",25),e(802,"string"),t()(),n(803,"td",21),e(804,"-"),t(),n(805,"td",22)(806,"em")(807,"strong"),e(808,"(opcional)"),t()(),n(809,"p"),e(810,"Texto de apoio para o campo."),t()()(),n(811,"tr",14)(812,"td",15)(813,"div",23)(814,"span",24),e(815," p-hide-restrictions-info"),o(816,"br"),t()()(),n(817,"td",19)(818,"code",26),e(819,"boolean"),t()(),n(820,"td",21)(821,"p")(822,"code"),e(823,"false"),t()()(),n(824,"td",22)(825,"em")(826,"strong"),e(827,"(opcional)"),t()(),n(828,"p"),e(829,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t()()(),n(830,"tr",14)(831,"td",15)(832,"div",23)(833,"span",24),e(834," p-hide-select-button"),o(835,"br"),t()()(),n(836,"td",19)(837,"code",26),e(838,"boolean"),t()(),n(839,"td",21)(840,"p")(841,"code"),e(842,"false"),t()()(),n(843,"td",22)(844,"em")(845,"strong"),e(846,"(opcional)"),t()(),n(847,"p"),e(848,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),n(849,"blockquote")(850,"p"),e(851,"Caso o valor definido seja "),n(852,"code"),e(853,"true"),t(),e(854,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(855,"code"),e(856,"selectFiles()"),t(),e(857," para sele\xE7\xE3o de arquivos."),t()()()(),n(858,"tr",14)(859,"td",15)(860,"div",23)(861,"span",24),e(862," p-hide-send-button"),o(863,"br"),t()()(),n(864,"td",19)(865,"code",26),e(866,"boolean"),t()(),n(867,"td",21)(868,"p")(869,"code"),e(870,"false"),t()()(),n(871,"td",22)(872,"em")(873,"strong"),e(874,"(opcional)"),t()(),n(875,"p"),e(876,"Omite o bot\xE3o de envio de arquivos."),t(),n(877,"blockquote")(878,"p"),e(879,"Caso o valor definido seja "),n(880,"code"),e(881,"true"),t(),e(882,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(883,"code"),e(884,"sendFiles()"),t(),e(885," para envio do(s) arquivo(s) selecionado(s)."),t()()()(),n(886,"tr",14)(887,"td",15)(888,"div",23)(889,"span",24),e(890," p-multiple"),o(891,"br"),t()()(),n(892,"td",19)(893,"code",26),e(894,"boolean"),t()(),n(895,"td",21),e(896,"-"),t(),n(897,"td",22)(898,"em")(899,"strong"),e(900,"(opcional)"),t()(),n(901,"p"),e(902,"Define se pode selecionar mais de um arquivo."),t(),n(903,"blockquote")(904,"p"),e(905,"Se utilizada a "),n(906,"code"),e(907,"p-directory"),t(),e(908,", habilita-se automaticamente esta propriedade."),t()()()(),n(909,"tr",14)(910,"td",15)(911,"div",16)(912,"span",17),e(913," (p-keydown)"),o(914,"br"),t()()(),n(915,"td",19)(916,"code",20),e(917,"EventEmitter"),t()(),n(918,"td",21),e(919,"-"),t(),n(920,"td",22)(921,"em")(922,"strong"),e(923,"(opcional)"),t()(),n(924,"p"),e(925,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(926,"code"),e(927,"KeyboardEvent"),t(),e(928," com informa\xE7\xF5es sobre a tecla."),t()()(),n(929,"tr",14)(930,"td",15)(931,"div",23)(932,"span",24),e(933," p-label"),o(934,"br"),t()()(),n(935,"td",19)(936,"code",25),e(937,"string"),t()(),n(938,"td",21),e(939,"-"),t(),n(940,"td",22)(941,"em")(942,"strong"),e(943,"(opcional)"),t()(),n(944,"p"),e(945,"R\xF3tulo do campo."),t()()(),n(946,"tr",14)(947,"td",15)(948,"div",23)(949,"span",24),e(950," p-label-text-wrap"),o(951,"br"),t()()(),n(952,"td",19)(953,"code",26),e(954,"boolean"),t()(),n(955,"td",21)(956,"p")(957,"code"),e(958,"false"),t()()(),n(959,"td",22)(960,"em")(961,"strong"),e(962,"(opcional)"),t()(),n(963,"p"),e(964,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(965,"code"),e(966,"p-label"),t(),e(967,". Quando "),n(968,"code"),e(969,"p-label-text-wrap"),t(),e(970,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(971,"tr",14)(972,"td",15)(973,"div",23)(974,"span",24),e(975," p-literals"),o(976,"br"),t()()(),n(977,"td",19)(978,"code",35),e(979,"PoUploadLiterals"),t()(),n(980,"td",21),e(981,"-"),t(),n(982,"td",22)(983,"em")(984,"strong"),e(985,"(opcional)"),t()(),n(986,"p"),e(987,"Objeto com as literais usadas no "),n(988,"code"),e(989,"po-upload"),t(),e(990,"."),t(),n(991,"p"),e(992,"Existem duas maneiras de customizar o componente:"),t(),n(993,"ul")(994,"li"),e(995,"passando um objeto implementando a interface "),n(996,"code"),e(997,"PoUploadLiterals"),t(),e(998," com todas as literais dispon\xEDveis;"),t(),n(999,"li"),e(1e3,"passando apenas as literais que deseja customizar:"),n(1001,"pre")(1002,"code"),e(1003,`const customLiterals: PoUploadLiterals = {
  folders: 'Pastas',
  selectFile: 'Buscar arquivo',
  startSending: 'Enviar'
};
`),t()()()(),n(1004,"p"),e(1005,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),t(),n(1006,"pre")(1007,"code"),e(1008,`<po-upload
  [p-literals]="customLiterals">
</po-upload>
`),t()(),n(1009,"blockquote")(1010,"p"),e(1011,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),n(1012,"em"),e(1013,"browser"),t(),e(1014," (pt, en, es, ru)."),t()()()(),n(1015,"tr",14)(1016,"td",15)(1017,"div",23)(1018,"span",24),e(1019," name"),o(1020,"br"),t()()(),n(1021,"td",19)(1022,"code",25),e(1023,"string"),t()(),n(1024,"td",21),e(1025,"-"),t(),n(1026,"td",22)(1027,"p"),e(1028,"Define o valor do atributo "),n(1029,"code"),e(1030,"name"),t(),e(1031," do componente."),t()()(),n(1032,"tr",14)(1033,"td",15)(1034,"div",16)(1035,"span",17),e(1036," (ngModelChange)"),o(1037,"br"),t()()(),n(1038,"td",19)(1039,"code",20),e(1040,"EventEmitter"),t()(),n(1041,"td",21),e(1042,"-"),t(),n(1043,"td",22)(1044,"em")(1045,"strong"),e(1046,"(opcional)"),t()(),n(1047,"p"),e(1048,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da "),n(1049,"em"),e(1050,"tag"),t(),n(1051,"code"),e(1052,"form"),t(),e(1053,"."),t(),n(1054,"p"),e(1055,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),n(1056,"code"),e(1057,"strictTemplates"),t(),e(1058,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),t(),n(1059,"pre")(1060,"code"),e(1061,`<po-upload ... [ngModel]="UploadModel" (ngModelChange)="uploadModel = $event"> </po-upload>
`),t()()()(),n(1062,"tr",14)(1063,"td",15)(1064,"div",16)(1065,"span",17),e(1066," (p-cancel)"),o(1067,"br"),t()()(),n(1068,"td",19)(1069,"code",20),e(1070,"EventEmitter"),t()(),n(1071,"td",21),e(1072,"-"),t(),n(1073,"td",22)(1074,"em")(1075,"strong"),e(1076,"(opcional)"),t()(),n(1077,"p"),e(1078,"Evento ser\xE1 disparado ao clicar no \xEDcone de fechar."),t(),n(1079,"blockquote")(1080,"p"),e(1081,"Por par\xE2metro ser\xE1 passado o objeto do arquivo."),t()()()(),n(1082,"tr",14)(1083,"td",15)(1084,"div",16)(1085,"span",17),e(1086," (p-error)"),o(1087,"br"),t()()(),n(1088,"td",19)(1089,"code",20),e(1090,"EventEmitter"),t()(),n(1091,"td",21),e(1092,"-"),t(),n(1093,"td",22)(1094,"em")(1095,"strong"),e(1096,"(opcional)"),t()(),n(1097,"p"),e(1098,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),n(1099,"blockquote")(1100,"p"),e(1101,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(1102,"code"),e(1103,"HttpErrorResponse"),t(),e(1104,"."),t()()()(),n(1105,"tr",14)(1106,"td",15)(1107,"div",16)(1108,"span",17),e(1109," (p-open-modal-preview)"),o(1110,"br"),t()()(),n(1111,"td",19)(1112,"code",20),e(1113,"EventEmitter"),t()(),n(1114,"td",21),e(1115,"-"),t(),n(1116,"td",22)(1117,"em")(1118,"strong"),e(1119,"(opcional)"),t()(),n(1120,"p"),e(1121,"Evento ser\xE1 disparado ao abrir o modal de pr\xE9-visualiza\xE7\xE3o."),t(),n(1122,"blockquote")(1123,"p"),e(1124,"Por par\xE2metro ser\xE1 passado o objeto do arquivo."),t()()()(),n(1125,"tr",14)(1126,"td",15)(1127,"div",16)(1128,"span",17),e(1129," (p-remove)"),o(1130,"br"),t()()(),n(1131,"td",19)(1132,"code",20),e(1133,"EventEmitter"),t()(),n(1134,"td",21),e(1135,"-"),t(),n(1136,"td",22)(1137,"em")(1138,"strong"),e(1139,"(opcional)"),t()(),n(1140,"p"),e(1141,"Evento ser\xE1 disparado ao clicar no \xEDcone de remover."),t(),n(1142,"blockquote")(1143,"p"),e(1144,"Por par\xE2metro ser\xE1 passado o objeto do arquivo."),t()()()(),n(1145,"tr",14)(1146,"td",15)(1147,"div",16)(1148,"span",17),e(1149," (p-success)"),o(1150,"br"),t()()(),n(1151,"td",19)(1152,"code",20),e(1153,"EventEmitter"),t()(),n(1154,"td",21),e(1155,"-"),t(),n(1156,"td",22)(1157,"em")(1158,"strong"),e(1159,"(opcional)"),t()(),n(1160,"p"),e(1161,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),n(1162,"blockquote")(1163,"p"),e(1164,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(1165,"code"),e(1166,"HttpResponse"),t(),e(1167,"."),t()()()(),n(1168,"tr",14)(1169,"td",15)(1170,"div",16)(1171,"span",17),e(1172," (p-upload)"),o(1173,"br"),t()()(),n(1174,"td",19)(1175,"code",20),e(1176,"EventEmitter"),t()(),n(1177,"td",21),e(1178,"-"),t(),n(1179,"td",22)(1180,"em")(1181,"strong"),e(1182,"(opcional)"),t()(),n(1183,"p"),e(1184,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e as propriedades data e extraFormData,
que ser\xE3o enviadas em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),n(1185,"blockquote")(1186,"p"),e(1187,"data, nesta propriedade pode ser informado algum dado"),t()(),n(1188,"pre")(1189,"code"),e(1190,`event.data = {id: 'id do usu\xE1rio'};
`),t()(),n(1191,"blockquote")(1192,"p"),e(1193,`extraFormData, nesta propriedade pode ser informado algum dado solicitado pela API
que n\xE3o possa estar no objeto `),n(1194,"code"),e(1195,"data"),t(),e(1196,`, assim o conte\xFAdo sar\xE1 extra\xEDdo do objeto e
enviado como par\xE2metro`),t()(),n(1197,"pre")(1198,"code"),e(1199,`event.extraFormData = {id: 'id do usu\xE1rio'};
`),t()()()(),n(1200,"tr",14)(1201,"td",15)(1202,"div",23)(1203,"span",24),e(1204," p-optional"),o(1205,"br"),t()()(),n(1206,"td",19)(1207,"code",26),e(1208,"boolean"),t()(),n(1209,"td",21)(1210,"p")(1211,"code"),e(1212,"false"),t()()(),n(1213,"td",22)(1214,"em")(1215,"strong"),e(1216,"(opcional)"),t()(),n(1217,"p"),e(1218,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(1219,"blockquote")(1220,"p"),e(1221,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1222,"ul")(1223,"li"),e(1224,"O campo conter "),n(1225,"code"),e(1226,"p-required"),t(),e(1227,";"),t(),n(1228,"li"),e(1229,"N\xE3o possuir "),n(1230,"code"),e(1231,"p-help"),t(),e(1232," e/ou "),n(1233,"code"),e(1234,"p-label"),t(),e(1235,"."),t()()()(),n(1236,"tr",14)(1237,"td",15)(1238,"div",23)(1239,"span",24),e(1240," p-helper"),o(1241,"br"),t()()(),n(1242,"td",19)(1243,"code",36),e(1244,"PoHelperOptions "),t(),n(1245,"code",25),e(1246," string"),t()(),n(1247,"td",21),e(1248,"-"),t(),n(1249,"td",22)(1250,"em")(1251,"strong"),e(1252,"(opcional)"),t()(),n(1253,"p"),e(1254,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),n(1255,"blockquote")(1256,"p"),e(1257,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),n(1258,"code"),e(1259,"p-additional-help-tooltip"),t(),e(1260," e "),n(1261,"code"),e(1262,"p-additional-help"),t(),e(1263,") ser\xE1 ignorado."),t()()()(),n(1264,"tr",14)(1265,"td",15)(1266,"div",23)(1267,"span",24),e(1268," p-required"),o(1269,"br"),t()()(),n(1270,"td",19)(1271,"code",26),e(1272,"boolean"),t()(),n(1273,"td",21)(1274,"p")(1275,"code"),e(1276,"false"),t()()(),n(1277,"td",22)(1278,"em")(1279,"strong"),e(1280,"(opcional)"),t()(),n(1281,"p"),e(1282,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),n(1283,"tr",14)(1284,"td",15)(1285,"div",23)(1286,"span",24),e(1287," p-required-url"),o(1288,"br"),t()()(),n(1289,"td",19)(1290,"code",26),e(1291,"boolean"),t()(),n(1292,"td",21)(1293,"p")(1294,"code"),e(1295,"true"),t()()(),n(1296,"td",22)(1297,"em")(1298,"strong"),e(1299,"(opcional)"),t()(),n(1300,"p"),e(1301,"Define se a propriedade "),n(1302,"code"),e(1303,"p-url"),t(),e(1304," \xE9 obrigat\xF3ria."),t(),n(1305,"p"),e(1306,"Caso a propriedade seja definida como "),n(1307,"code"),e(1308,"false"),t(),e(1309,":"),t(),n(1310,"ul")(1311,"li"),e(1312,'o bot\xE3o de "Selecionar arquivo" ficar\xE1 habilitado mesmo sem a propriedade '),n(1313,"code"),e(1314,"p-url"),t(),e(1315," definida."),t(),n(1316,"li"),e(1317,'o bot\xE3o "Iniciar envio" ficar\xE1 oculto at\xE9 que a propriedade '),n(1318,"code"),e(1319,"p-url"),t(),e(1320," seja definida."),t()(),n(1321,"blockquote")(1322,"p"),e(1323,"Se utilizada com a propriedade "),n(1324,"code"),e(1325,"p-auto-upload"),t(),e(1326," definida como "),n(1327,"code"),e(1328,"true"),t(),e(1329," ser\xE1 necess\xE1rio definir a propriedade "),n(1330,"code"),e(1331,"p-url"),t(),e(1332,"."),t()()()(),n(1333,"tr",14)(1334,"td",15)(1335,"div",23)(1336,"span",24),e(1337," p-show-required"),o(1338,"br"),t()()(),n(1339,"td",19)(1340,"code",26),e(1341,"boolean"),t()(),n(1342,"td",21),e(1343,"-"),t(),n(1344,"td",22)(1345,"p"),e(1346,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(1347,"blockquote")(1348,"p"),e(1349,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1350,"ul")(1351,"li"),e(1352,"N\xE3o possuir "),n(1353,"code"),e(1354,"p-help"),t(),e(1355," e/ou "),n(1356,"code"),e(1357,"p-label"),t(),e(1358,"."),t()()()(),n(1359,"tr",14)(1360,"td",15)(1361,"div",23)(1362,"span",24),e(1363," p-show-thumbnail"),o(1364,"br"),t()()(),n(1365,"td",19)(1366,"code",26),e(1367,"boolean"),t()(),n(1368,"td",21)(1369,"p")(1370,"code"),e(1371,"true"),t()()(),n(1372,"td",22)(1373,"em")(1374,"strong"),e(1375,"(opcional)"),t()(),n(1376,"p"),e(1377,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),t(),n(1378,"blockquote")(1379,"p"),e(1380,"Propriedade funciona apenas em arquivos de formato de imagem ("),n(1381,"code"),e(1382,".png"),t(),e(1383,", "),n(1384,"code"),e(1385,".jpg"),t(),e(1386,", "),n(1387,"code"),e(1388,".jpeg"),t(),e(1389," e "),n(1390,"code"),e(1391,".gif"),t(),e(1392,`).
Ser\xE1 ignorada em outros tipos de arquivo.`),t()()()(),n(1393,"tr",14)(1394,"td",15)(1395,"div",23)(1396,"span",24),e(1397," p-size"),o(1398,"br"),t()()(),n(1399,"td",19)(1400,"code",25),e(1401,"string"),t()(),n(1402,"td",21)(1403,"p")(1404,"code"),e(1405,"medium"),t()()(),n(1406,"td",22)(1407,"em")(1408,"strong"),e(1409,"(opcional)"),t()(),n(1410,"p"),e(1411,"Define o tamanho e as a\xE7\xF5es do componente:"),t(),n(1412,"ul")(1413,"li")(1414,"code"),e(1415,"small"),t(),e(1416,": altura do button como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1417,"li")(1418,"code"),e(1419,"medium"),t(),e(1420,": altura do button como 44px."),t()(),n(1421,"blockquote")(1422,"p"),e(1423,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1424,"code"),e(1425,"medium"),t(),e(1426,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1427,"a",37),e(1428,"po-theme"),t(),e(1429,"."),t()()()(),n(1430,"tr",14)(1431,"td",15)(1432,"div",23)(1433,"span",24),e(1434," p-url"),o(1435,"br"),t()()(),n(1436,"td",19)(1437,"code",25),e(1438,"string"),t()(),n(1439,"td",21),e(1440,"-"),t(),n(1441,"td",22)(1442,"p"),e(1443,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t()()()(),n(1444,"h3",10),e(1445,"M\xE9todos"),t(),n(1446,"table",38)(1447,"tr",14)(1448,"th",39)(1449,"div",23)(1450,"h4")(1451,"span",24),e(1452," clear "),t()()()()(),n(1453,"tr",22)(1454,"td",22)(1455,"p"),e(1456,"M\xE9todo respons\xE1vel por "),n(1457,"strong"),e(1458,"limpar"),t(),e(1459," o(s) arquivo(s) selecionado(s)."),t()()()(),o(1460,"br"),n(1461,"table",38)(1462,"tr",14)(1463,"th",39)(1464,"div",23)(1465,"h4")(1466,"span",24),e(1467," focus "),t()()()()(),n(1468,"tr",22)(1469,"td",22)(1470,"p"),e(1471,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1472,"p"),e(1473,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1474,"pre")(1475,"code"),e(1476,`import { PoUploadComponent } from '@po-ui/ng-components';

...

@ViewChild(PoUploadComponent, { static: true }) upload: PoUploadComponent;

focusUpload() {
  this.upload.focus();
}
`),t()()()()(),o(1477,"br"),n(1478,"table",38)(1479,"tr",14)(1480,"th",39)(1481,"div",23)(1482,"h4")(1483,"span",24),e(1484," closeModal "),t()()()()(),n(1485,"tr",22)(1486,"td",22)(1487,"p"),e(1488,"M\xE9todo respons\xE1vel por fechar o modal."),t()()()(),o(1489,"br"),n(1490,"table",38)(1491,"tr",14)(1492,"th",39)(1493,"div",23)(1494,"h4")(1495,"span",24),e(1496," selectFiles "),t()()()()(),n(1497,"tr",22)(1498,"td",22)(1499,"p"),e(1500,"M\xE9todo respons\xE1vel por "),n(1501,"strong"),e(1502,"abrir"),t(),e(1503," a janela para sele\xE7\xE3o de arquivo(s)."),t()()()(),o(1504,"br"),n(1505,"table",38)(1506,"tr",14)(1507,"th",39)(1508,"div",23)(1509,"h4")(1510,"span",24),e(1511," sendFiles "),t()()()()(),n(1512,"tr",22)(1513,"td",22)(1514,"p"),e(1515,"M\xE9todo respons\xE1vel por "),n(1516,"strong"),e(1517,"enviar"),t(),e(1518," o(s) arquivo(s) selecionado(s)."),t()()()(),o(1519,"br"),n(1520,"table",38)(1521,"tr",14)(1522,"th",39)(1523,"div",23)(1524,"h4")(1525,"span",24),e(1526," showAdditionalHelp "),t()()()()(),n(1527,"tr",22)(1528,"td",22)(1529,"p"),e(1530,"M\xE9todo que exibe "),n(1531,"code"),e(1532,"p-helper"),t(),e(1533," ou executa a a\xE7\xE3o definida em "),n(1534,"code"),e(1535,"p-helper{eventOnClick}"),t(),e(1536," ou em "),n(1537,"code"),e(1538,"p-additionalHelp"),t(),e(1539,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1540,"code"),e(1541,"p-keydown"),t(),e(1542,"."),t(),n(1543,"blockquote")(1544,"p"),e(1545,"Exibe ou oculta o conte\xFAdo do componente "),n(1546,"code"),e(1547,"po-helper"),t(),e(1548," quando o componente estiver com foco."),t()(),n(1549,"pre")(1550,"code"),e(1551,`//Exemplo com p-label e p-helper
<po-upload
 #upload
 ...
 p-label="Label do upload"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, upload)"
></po-upload>
`),t()(),n(1552,"pre")(1553,"code"),e(1554,`...
onKeyDown(event: KeyboardEvent, inp: PoUploadComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),o(1555,"br"),n(1556,"h3"),e(1557,"Interfaces"),t(),n(1558,"h4",40)(1559,"code",5),e(1560,"PoUploadFileRestrictions"),t()(),n(1561,"div",2)(1562,"p"),e(1563,`Interface que define as restri\xE7\xF5es dos arquivos a serem selecionados com base em regras predefinidas
para o seu tamanho, extens\xE3o e quantidade.`),t()(),n(1564,"h4",10),e(1565,"Propriedades"),t(),n(1566,"table",11)(1567,"tr",12)(1568,"th",13),e(1569,"Nome"),t(),n(1570,"th",13),e(1571,"Tipo"),t(),n(1572,"th",13),e(1573,"Descri\xE7\xE3o"),t()(),n(1574,"tr",14)(1575,"td",15)(1576,"div",23)(1577,"span",24),e(1578," allowedExtensions"),o(1579,"br"),t()()(),n(1580,"td",19)(1581,"code",41),e(1582,"Array<string>"),t()(),n(1583,"td",22)(1584,"em")(1585,"strong"),e(1586,"(opcional)"),t()(),n(1587,"p"),e(1588,"Extens\xF5es permitidas de arquivos que ser\xE3o enviados ao servidor, devendo ser informada uma cole\xE7\xE3o de extens\xF5es, por exemplo:"),t(),n(1589,"pre")(1590,"code"),e(1591,`allowedExtensions = ['.png', '.jpg', '.pdf'];
`),t()()()(),n(1592,"tr",14)(1593,"td",15)(1594,"div",23)(1595,"span",24),e(1596," maxFileSize"),o(1597,"br"),t()()(),n(1598,"td",19)(1599,"code",31),e(1600,"number"),t()(),n(1601,"td",22)(1602,"em")(1603,"strong"),e(1604,"(opcional)"),t()(),n(1605,"p"),e(1606,"Tamanho m\xE1ximo do arquivo a ser enviado ao servidor."),t(),n(1607,"p"),e(1608,"Deve ser informado um valor em "),n(1609,"em"),e(1610,"bytes"),t(),e(1611,", por exemplo: "),n(1612,"code"),e(1613,"31457280"),t(),e(1614," (30MB)."),t(),n(1615,"blockquote")(1616,"p"),e(1617,"Por padr\xE3o o valor \xE9 "),n(1618,"code"),e(1619,"30 MB"),t(),e(1620,"."),t()()()(),n(1621,"tr",14)(1622,"td",15)(1623,"div",23)(1624,"span",24),e(1625," maxFiles"),o(1626,"br"),t()()(),n(1627,"td",19)(1628,"code",31),e(1629,"number"),t()(),n(1630,"td",22)(1631,"em")(1632,"strong"),e(1633,"(opcional)"),t()(),n(1634,"p"),e(1635,"Quantidade m\xE1xima de arquivos para o "),n(1636,"em"),e(1637,"upload"),t(),e(1638,"."),t(),n(1639,"blockquote")(1640,"p"),e(1641,"Esta propriedade ser\xE1 v\xE1lida somente se a propriedade "),n(1642,"code"),e(1643,"p-multiple"),t(),e(1644," estiver habilitada e seu valor for maior do que zero."),t()()()(),n(1645,"tr",14)(1646,"td",15)(1647,"div",23)(1648,"span",24),e(1649," minFileSize"),o(1650,"br"),t()()(),n(1651,"td",19)(1652,"code",31),e(1653,"number"),t()(),n(1654,"td",22)(1655,"em")(1656,"strong"),e(1657,"(opcional)"),t()(),n(1658,"p"),e(1659,"Tamanho m\xEDnimo em "),n(1660,"em"),e(1661,"bytes"),t(),e(1662," do arquivo que ser\xE1 enviado ao servidor."),t(),n(1663,"blockquote")(1664,"p"),e(1665,"Por padr\xE3o o valor \xE9 "),n(1666,"code"),e(1667,"0"),t(),e(1668,"."),t()()()()(),n(1669,"h4",40)(1670,"code",5),e(1671,"PoUploadLiterals"),t()(),n(1672,"div",2)(1673,"p"),e(1674,"Interface para defini\xE7\xE3o das literais usadas no "),n(1675,"code"),e(1676,"po-upload"),t(),e(1677,"."),t()(),n(1678,"h4",10),e(1679,"Propriedades"),t(),n(1680,"table",11)(1681,"tr",12)(1682,"th",13),e(1683,"Nome"),t(),n(1684,"th",13),e(1685,"Tipo"),t(),n(1686,"th",13),e(1687,"Descri\xE7\xE3o"),t()(),n(1688,"tr",14)(1689,"td",15)(1690,"div",23)(1691,"span",24),e(1692," close"),o(1693,"br"),t()()(),n(1694,"td",19)(1695,"code",25),e(1696,"string"),t()(),n(1697,"td",22)(1698,"em")(1699,"strong"),e(1700,"(opcional)"),t()(),n(1701,"p"),e(1702,"Texto do leitor de tela ao focar no \xEDcone de fechar."),t()()(),n(1703,"tr",14)(1704,"td",15)(1705,"div",23)(1706,"span",24),e(1707," continue"),o(1708,"br"),t()()(),n(1709,"td",19)(1710,"code",25),e(1711,"string"),t()(),n(1712,"td",22)(1713,"em")(1714,"strong"),e(1715,"(opcional)"),t()(),n(1716,"p"),e(1717,"Texto do bot\xE3o padr\xE3o do modal de pr\xE9-visualizar."),t()()(),n(1718,"tr",14)(1719,"td",15)(1720,"div",23)(1721,"span",24),e(1722," doneText"),o(1723,"br"),t()()(),n(1724,"td",19)(1725,"code",25),e(1726,"string"),t()(),n(1727,"td",22)(1728,"em")(1729,"strong"),e(1730,"(opcional)"),t()(),n(1731,"p"),e(1732,"Texto a ser exibido no container de informa\xE7\xE3o quando o estado for de sucesso."),t()()(),n(1733,"tr",14)(1734,"td",15)(1735,"div",23)(1736,"span",24),e(1737," dragFilesHere"),o(1738,"br"),t()()(),n(1739,"td",19)(1740,"code",25),e(1741,"string"),t()(),n(1742,"td",22)(1743,"em")(1744,"strong"),e(1745,"(opcional)"),t()(),n(1746,"p"),e(1747,"Texto indicativo para a \xE1rea onde os arquivos devem ser arrastados quando utilizada a propriedade "),n(1748,"code"),e(1749,"p-drag-drop"),t(),e(1750,"."),t()()(),n(1751,"tr",14)(1752,"td",15)(1753,"div",23)(1754,"span",24),e(1755," dragFoldersHere"),o(1756,"br"),t()()(),n(1757,"td",19)(1758,"code",25),e(1759,"string"),t()(),n(1760,"td",22)(1761,"em")(1762,"strong"),e(1763,"(opcional)"),t()(),n(1764,"p"),e(1765,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser arrastados quando utilizada a propriedade "),n(1766,"code"),e(1767,"p-drag-drop"),t(),e(1768,"."),t()()(),n(1769,"tr",14)(1770,"td",15)(1771,"div",23)(1772,"span",24),e(1773," dropFilesHere"),o(1774,"br"),t()()(),n(1775,"td",19)(1776,"code",25),e(1777,"string"),t()(),n(1778,"td",22)(1779,"em")(1780,"strong"),e(1781,"(opcional)"),t()(),n(1782,"p"),e(1783,"Texto indicativo para a \xE1rea onde os arquivos devem ser soltos quando utilizada a propriedade "),n(1784,"code"),e(1785,"p-drag-drop"),t()()()(),n(1786,"tr",14)(1787,"td",15)(1788,"div",23)(1789,"span",24),e(1790," dropFoldersHere"),o(1791,"br"),t()()(),n(1792,"td",19)(1793,"code",25),e(1794,"string"),t()(),n(1795,"td",22)(1796,"em")(1797,"strong"),e(1798,"(opcional)"),t()(),n(1799,"p"),e(1800,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser soltos quando utilizada a propriedade "),n(1801,"code"),e(1802,"p-drag-drop"),t(),e(1803,"."),t()()(),n(1804,"tr",14)(1805,"td",15)(1806,"div",23)(1807,"span",24),e(1808," errorOccurred"),o(1809,"br"),t()()(),n(1810,"td",19)(1811,"code",25),e(1812,"string"),t()(),n(1813,"td",22)(1814,"em")(1815,"strong"),e(1816,"(opcional)"),t()(),n(1817,"p"),e(1818,"Texto a ser exibido quando ocorrer erro no envio do arquivo."),t()()(),n(1819,"tr",14)(1820,"td",15)(1821,"div",23)(1822,"span",24),e(1823," files"),o(1824,"br"),t()()(),n(1825,"td",19)(1826,"code",25),e(1827,"string"),t()(),n(1828,"td",22)(1829,"em")(1830,"strong"),e(1831,"(opcional)"),t()(),n(1832,"p"),e(1833,"Par\xE2metro "),n(1834,"em"),e(1835,"files"),t(),e(1836," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),n(1837,"em"),e(1838,"dragDrop"),t(),e(1839,"."),t()()(),n(1840,"tr",14)(1841,"td",15)(1842,"div",23)(1843,"span",24),e(1844," folders"),o(1845,"br"),t()()(),n(1846,"td",19)(1847,"code",25),e(1848,"string"),t()(),n(1849,"td",22)(1850,"em")(1851,"strong"),e(1852,"(opcional)"),t()(),n(1853,"p"),e(1854,"Par\xE2metro "),n(1855,"em"),e(1856,"folders"),t(),e(1857," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),n(1858,"em"),e(1859,"dragDrop"),t(),e(1860,"."),t()()(),n(1861,"tr",14)(1862,"td",15)(1863,"div",23)(1864,"span",24),e(1865," invalidDropArea"),o(1866,"br"),t()()(),n(1867,"td",19)(1868,"code",25),e(1869,"string"),t()(),n(1870,"td",22)(1871,"em")(1872,"strong"),e(1873,"(opcional)"),t()(),n(1874,"p"),e(1875,"Texto exibido caso o usu\xE1rio arrastar um arquivo para um local inv\xE1lido ao utilizar a op\xE7\xE3o de "),n(1876,"em"),e(1877,"dragDrop"),t(),e(1878,"."),t()()(),n(1879,"tr",14)(1880,"td",15)(1881,"div",23)(1882,"span",24),e(1883," preview"),o(1884,"br"),t()()(),n(1885,"td",19)(1886,"code",25),e(1887,"string"),t()(),n(1888,"td",22)(1889,"em")(1890,"strong"),e(1891,"(opcional)"),t()(),n(1892,"p"),e(1893,"T\xEDtulo do modal de pr\xE9-visualizar."),t()()(),n(1894,"tr",14)(1895,"td",15)(1896,"div",23)(1897,"span",24),e(1898," selectFile"),o(1899,"br"),t()()(),n(1900,"td",19)(1901,"code",25),e(1902,"string"),t()(),n(1903,"td",22)(1904,"em")(1905,"strong"),e(1906,"(opcional)"),t()(),n(1907,"p"),e(1908,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos."),t()()(),n(1909,"tr",14)(1910,"td",15)(1911,"div",23)(1912,"span",24),e(1913," selectFiles"),o(1914,"br"),t()()(),n(1915,"td",19)(1916,"code",25),e(1917,"string"),t()(),n(1918,"td",22)(1919,"em")(1920,"strong"),e(1921,"(opcional)"),t()(),n(1922,"p"),e(1923,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),n(1924,"code"),e(1925,"p-multiple"),t(),e(1926,"."),t()()(),n(1927,"tr",14)(1928,"td",15)(1929,"div",23)(1930,"span",24),e(1931," selectFilesOnComputer"),o(1932,"br"),t()()(),n(1933,"td",19)(1934,"code",25),e(1935,"string"),t()(),n(1936,"td",22)(1937,"em")(1938,"strong"),e(1939,"(opcional)"),t()(),n(1940,"p"),e(1941,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de arquivos na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),n(1942,"em"),e(1943,"dragDrop"),t(),e(1944,"."),t()()(),n(1945,"tr",14)(1946,"td",15)(1947,"div",23)(1948,"span",24),e(1949," selectFolder"),o(1950,"br"),t()()(),n(1951,"td",19)(1952,"code",25),e(1953,"string"),t()(),n(1954,"td",22)(1955,"em")(1956,"strong"),e(1957,"(opcional)"),t()(),n(1958,"p"),e(1959,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),n(1960,"code"),e(1961,"p-directory"),t(),e(1962,"."),t()()(),n(1963,"tr",14)(1964,"td",15)(1965,"div",23)(1966,"span",24),e(1967," selectFolderOnComputer"),o(1968,"br"),t()()(),n(1969,"td",19)(1970,"code",25),e(1971,"string"),t()(),n(1972,"td",22)(1973,"em")(1974,"strong"),e(1975,"(opcional)"),t()(),n(1976,"p"),e(1977,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de diret\xF3rio na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),n(1978,"em"),e(1979,"dragDrop"),t(),e(1980,"."),t()()(),n(1981,"tr",14)(1982,"td",15)(1983,"div",23)(1984,"span",24),e(1985," sentWithSuccess"),o(1986,"br"),t()()(),n(1987,"td",19)(1988,"code",25),e(1989,"string"),t()(),n(1990,"td",22)(1991,"em")(1992,"strong"),e(1993,"(opcional)"),t()(),n(1994,"p"),e(1995,"Texto a ser exibido quando o envio do arquivo for realizado com sucesso."),t()()(),n(1996,"tr",14)(1997,"td",15)(1998,"div",23)(1999,"span",24),e(2e3," startSending"),o(2001,"br"),t()()(),n(2002,"td",19)(2003,"code",25),e(2004,"string"),t()(),n(2005,"td",22)(2006,"em")(2007,"strong"),e(2008,"(opcional)"),t()(),n(2009,"p"),e(2010,"Texto exibido no label do bot\xE3o para iniciar o envio dos arquivos."),t()()(),n(2011,"tr",14)(2012,"td",15)(2013,"div",23)(2014,"span",24),e(2015," thumbnail"),o(2016,"br"),t()()(),n(2017,"td",19)(2018,"code",25),e(2019,"string"),t()(),n(2020,"td",22)(2021,"em")(2022,"strong"),e(2023,"(opcional)"),t()(),n(2024,"p"),e(2025,"Texto do leitor da miniatura da imagem."),t()()(),n(2026,"tr",14)(2027,"td",15)(2028,"div",23)(2029,"span",24),e(2030," tryAgain"),o(2031,"br"),t()()(),n(2032,"td",19)(2033,"code",25),e(2034,"string"),t()(),n(2035,"td",22)(2036,"em")(2037,"strong"),e(2038,"(opcional)"),t()(),n(2039,"p"),e(2040,"Texto de Tente novamente ao ocorrer erro ao enviar."),t()()(),n(2041,"tr",14)(2042,"td",15)(2043,"div",23)(2044,"span",24),e(2045," uploadingText"),o(2046,"br"),t()()(),n(2047,"td",19)(2048,"code",25),e(2049,"string"),t()(),n(2050,"td",22)(2051,"em")(2052,"strong"),e(2053,"(opcional)"),t()(),n(2054,"p"),e(2055,"Texto a ser exibido no container de informa\xE7\xE3o quando o estado for enviando."),t()()()(),n(2056,"h4",40)(2057,"code",5),e(2058,"PoProgressAction"),t()(),n(2059,"div",2)(2060,"p"),e(2061,"Interface para as a\xE7\xF5es dos componentes po-progress e po-upload."),t()(),n(2062,"h4",10),e(2063,"Propriedades"),t(),n(2064,"table",11)(2065,"tr",12)(2066,"th",13),e(2067,"Nome"),t(),n(2068,"th",13),e(2069,"Tipo"),t(),n(2070,"th",13),e(2071,"Descri\xE7\xE3o"),t()(),n(2072,"tr",14)(2073,"td",15)(2074,"div",23)(2075,"span",24),e(2076," disabled"),o(2077,"br"),t()()(),n(2078,"td",19)(2079,"code",26),e(2080,"boolean "),t(),n(2081,"code",42),e(2082," Function"),t()(),n(2083,"td",22)(2084,"em")(2085,"strong"),e(2086,"(opcional)"),t()(),n(2087,"p"),e(2088,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),t(),n(2089,"p"),e(2090,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),t()()(),n(2091,"tr",14)(2092,"td",15)(2093,"div",23)(2094,"span",24),e(2095," icon"),o(2096,"br"),t()()(),n(2097,"td",19)(2098,"code",25),e(2099,"string "),t(),n(2100,"code",43),e(2101," TemplateRef<void>"),t()(),n(2102,"td",22)(2103,"em")(2104,"strong"),e(2105,"(opcional)"),t()(),n(2106,"p"),e(2107,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),t(),n(2108,"p"),e(2109,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(2110,"a",44),e(2111,"Biblioteca de \xEDcones"),t(),e(2112,". conforme exemplo abaixo:"),t(),n(2113,"pre")(2114,"code"),e(2115,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),t()(),n(2116,"p"),e(2117,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),t(),n(2118,"pre")(2119,"code"),e(2120,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),t()(),n(2121,"p"),e(2122,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(2123,"code"),e(2124,"TemplateRef"),t(),e(2125,`, conforme exemplo abaixo:
component.html:`),t(),n(2126,"pre")(2127,"code"),e(2128,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),t()(),n(2129,"p"),e(2130,"component.ts:"),t(),n(2131,"pre")(2132,"code"),e(2133,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),t()()()(),n(2134,"tr",14)(2135,"td",15)(2136,"div",23)(2137,"span",24),e(2138," label"),o(2139,"br"),t()()(),n(2140,"td",19)(2141,"code",25),e(2142,"string"),t()(),n(2143,"td",22)(2144,"em")(2145,"strong"),e(2146,"(opcional)"),t()(),n(2147,"p"),e(2148,"R\xF3tulo da a\xE7\xE3o."),t()()(),n(2149,"tr",14)(2150,"td",15)(2151,"div",23)(2152,"span",24),e(2153," type"),o(2154,"br"),t()()(),n(2155,"td",19)(2156,"code",25),e(2157,"string"),t()(),n(2158,"td",22)(2159,"em")(2160,"strong"),e(2161,"(opcional)"),t()(),n(2162,"p"),e(2163,"Define a cor do item, sendo "),n(2164,"code"),e(2165,"default"),t(),e(2166," o padr\xE3o."),t(),n(2167,"p"),e(2168,"Valores v\xE1lidos:"),t(),n(2169,"ul")(2170,"li")(2171,"code"),e(2172,"default"),t()(),n(2173,"li")(2174,"code"),e(2175,"danger"),t(),e(2176," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),t()()()(),n(2177,"tr",14)(2178,"td",15)(2179,"div",23)(2180,"span",24),e(2181," visible"),o(2182,"br"),t()()(),n(2183,"td",19)(2184,"code",26),e(2185,"boolean "),t(),n(2186,"code",42),e(2187," Function"),t()(),n(2188,"td",22)(2189,"em")(2190,"strong"),e(2191,"(opcional)"),t()(),n(2192,"p"),e(2193,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),t(),n(2194,"blockquote")(2195,"p"),e(2196,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),t()(),n(2197,"p"),e(2198,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),t(),n(2199,"ul")(2200,"li")(2201,"p"),e(2202,"Fun\xE7\xE3o que deve retornar um booleano."),t()(),n(2203,"li")(2204,"p"),e(2205,"Informar diretamente um valor booleano."),t()()()()()()())},dependencies:[y],encapsulation:2})}return a})();var Re=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||a)(ee(pe),ee(me))};static \u0275cmp=b({type:a,selectors:[["ng-component"]],standalone:!1,decls:11,vars:4,consts:[["p-title","Upload",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),S("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-upload-doc"),t(),n(4,"po-tab",3),S("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-upload-basic-view")(6,"sample-po-upload-labs-view")(7,"sample-po-upload-resume-view")(8,"sample-po-upload-rs-view")(9,"sample-po-upload-download-view")(10,"sample-po-upload-preview-view"),t()()()),r&2&&(E("p-actions",i.actions),m(2),E("p-active",i.activeTab==="doc"),m(2),E("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[ve,w,_,ye,Te,qe,Ue,Ae,Le,ze],encapsulation:2})}return a})();var xt=[{path:"",component:Re}],Oe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=G({type:a});static \u0275inj=H({imports:[te.forChild(xt),te]})}return a})();var rn=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=G({type:a});static \u0275inj=H({imports:[we,Oe]})}return a})();export{rn as DocPoUploadModule};
