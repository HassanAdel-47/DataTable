import{L as T,U as S,O as c,_ as s,a9 as x,ac as V,ad as U,$ as _,N as C,i as v,a0 as j,t as w,v as O,x as L,Q as m,z as p,A as b,P as a,T as F,W as N,X as M,a1 as H,ae as R}from"./entry.7951bc73.js";import{s as $,a as W}from"./index.esm.639c4f6b.js";var q=`
@layer primevue {
    .p-orderlist {
        display: flex;
    }

    .p-orderlist-controls {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .p-orderlist-list-container {
        flex: 1 1 auto;
    }

    .p-orderlist-list {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: auto;
        min-height: 12rem;
        max-height: 24rem;
    }

    .p-orderlist-item {
        cursor: pointer;
        overflow: hidden;
        position: relative;
    }

    .p-orderlist.p-state-disabled .p-orderlist-item,
    .p-orderlist.p-state-disabled .p-button {
        cursor: default;
    }

    .p-orderlist.p-state-disabled .p-orderlist-list {
        overflow: hidden;
    }
}
`,z={root:function(t){var n=t.props;return["p-orderlist p-component",{"p-orderlist-striped":n.stripedRows}]},controls:"p-orderlist-controls",header:"p-orderlist-header",container:"p-orderlist-list-container",list:"p-orderlist-list",item:function(t){var n=t.instance,i=t.item,r=t.id;return["p-orderlist-item",{"p-highlight":n.isSelected(i),"p-focus":r===n.focusedOptionId}]}},G=T.extend({name:"orderlist",css:q,classes:z}),Q={name:"BaseOrderList",extends:C,props:{modelValue:{type:Array,default:null},selection:{type:Array,default:null},dataKey:{type:String,default:null},listStyle:{type:null,default:null},metaKeySelection:{type:Boolean,default:!0},responsive:{type:Boolean,default:!0},breakpoint:{type:String,default:"960px"},stripedRows:{type:Boolean,default:!1},tabindex:{type:Number,default:0},listProps:{type:null,default:null},moveUpButtonProps:{type:null,default:null},moveTopButtonProps:{type:null,default:null},moveDownButtonProps:{type:null,default:null},moveBottomButtonProps:{type:null,default:null},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},style:G,provide:function(){return{$parentInstance:this}}};function l(e){return Z(e)||Y(e)||J(e)||X()}function X(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(e,t){if(e){if(typeof e=="string")return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return K(e,t)}}function Y(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Z(e){if(Array.isArray(e))return K(e)}function K(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var ee={name:"OrderList",extends:Q,emits:["update:modelValue","reorder","update:selection","selection-change","focus","blur"],itemTouched:!1,reorderDirection:null,styleElement:null,list:null,data:function(){return{id:this.$attrs.id,d_selection:this.selection,focused:!1,focusedOptionIndex:-1}},watch:{"$attrs.id":function(t){this.id=t||S()}},beforeUnmount:function(){this.destroyStyle()},updated:function(){this.reorderDirection&&(this.updateListScroll(),this.reorderDirection=null)},mounted:function(){this.id=this.id||S(),this.responsive&&this.createStyle()},methods:{getItemKey:function(t,n){return this.dataKey?c.resolveFieldData(t,this.dataKey):n},getPTOptions:function(t,n,i){return this.ptm(n,{context:{active:this.isSelected(t),focused:"".concat(this.id,"_").concat(i)===this.focusedOptionId}})},isSelected:function(t){return c.findIndexInList(t,this.d_selection)!=-1},onListFocus:function(t){var n=s.findSingle(this.list,'[data-p-highlight="true"]');if(n){var i=c.findIndexInList(n,this.list.children);this.focused=!0;var r=this.focusedOptionIndex!==-1?this.focusedOptionIndex:n?i:-1;this.changeFocusedOptionIndex(r),this.$emit("focus",t)}},onListBlur:function(t){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",t)},onListKeyDown:function(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Enter":this.onEnterKey(t);break;case"Space":this.onSpaceKey(t);break;case"KeyA":t.ctrlKey&&(this.d_selection=l(this.modelValue),this.$emit("update:selection",this.d_selection))}},onOptionMouseDown:function(t){this.focused=!0,this.focusedOptionIndex=t},onArrowDownKey:function(t){var n=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),t.shiftKey&&this.onEnterKey(t),t.preventDefault()},onArrowUpKey:function(t){var n=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),t.shiftKey&&this.onEnterKey(t),t.preventDefault()},onHomeKey:function(t){if(t.ctrlKey&&t.shiftKey){var n=s.find(this.list,'[data-pc-section="item"]'),i=s.findSingle(this.list,'[data-pc-section="item"][id='.concat(this.focusedOptionIndex,"]")),r=l(n).findIndex(function(o){return o===i});this.d_selection=l(this.modelValue).slice(0,r+1),this.$emit("update:selection",this.d_selection)}else this.changeFocusedOptionIndex(0);t.preventDefault()},onEndKey:function(t){if(t.ctrlKey&&t.shiftKey){var n=s.find(this.list,'[data-pc-section="item"]'),i=s.findSingle(this.list,'[data-pc-section="item"][id='.concat(this.focusedOptionIndex,"]")),r=l(n).findIndex(function(o){return o===i});this.d_selection=l(this.modelValue).slice(r,n.length),this.$emit("update:selection",this.d_selection)}else this.changeFocusedOptionIndex(s.find(this.list,'[data-pc-section="item"]').length-1);t.preventDefault()},onEnterKey:function(t){var n=s.find(this.list,'[data-pc-section="item"]'),i=s.findSingle(this.list,'[data-pc-section="item"][id='.concat(this.focusedOptionIndex,"]")),r=l(n).findIndex(function(o){return o===i});this.onItemClick(t,this.modelValue[r],r),t.preventDefault()},onSpaceKey:function(t){if(t.shiftKey){var n=s.find(this.list,'[data-pc-section="item"]'),i=c.findIndexInList(this.d_selection[0],l(this.modelValue)),r=s.findSingle(this.list,'[data-pc-section="item"][id='.concat(this.focusedOptionIndex,"]")),o=l(n).findIndex(function(d){return d===r});this.d_selection=l(this.modelValue).slice(Math.min(i,o),Math.max(i,o)+1),this.$emit("update:selection",this.d_selection)}else this.onEnterKey(t)},findNextOptionIndex:function(t){var n=s.find(this.list,'[data-pc-section="item"]'),i=l(n).findIndex(function(r){return r.id===t});return i>-1?i+1:0},findPrevOptionIndex:function(t){var n=s.find(this.list,'[data-pc-section="item"]'),i=l(n).findIndex(function(r){return r.id===t});return i>-1?i-1:0},changeFocusedOptionIndex:function(t){var n=s.find(this.list,'[data-pc-section="item"]'),i=t>=n.length?n.length-1:t<0?0:t;this.focusedOptionIndex=n[i]?n[i].getAttribute("id"):-1,this.scrollInView(this.focusedOptionIndex)},scrollInView:function(t){var n=s.findSingle(this.list,'[data-pc-section="item"][id="'.concat(t,'"]'));n&&n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"start"})},moveUp:function(t){if(this.d_selection){for(var n=l(this.modelValue),i=0;i<this.d_selection.length;i++){var r=this.d_selection[i],o=c.findIndexInList(r,n);if(o!==0){var d=n[o],u=n[o-1];n[o-1]=d,n[o]=u}else break}this.reorderDirection="up",this.$emit("update:modelValue",n),this.$emit("reorder",{originalEvent:t,value:n,direction:this.reorderDirection})}},moveTop:function(t){if(this.d_selection){for(var n=l(this.modelValue),i=0;i<this.d_selection.length;i++){var r=this.d_selection[i],o=c.findIndexInList(r,n);if(o!==0){var d=n.splice(o,1)[0];n.unshift(d)}else break}this.reorderDirection="top",this.$emit("update:modelValue",n),this.$emit("reorder",{originalEvent:t,value:n,direction:this.reorderDirection})}},moveDown:function(t){if(this.d_selection){for(var n=l(this.modelValue),i=this.d_selection.length-1;i>=0;i--){var r=this.d_selection[i],o=c.findIndexInList(r,n);if(o!==n.length-1){var d=n[o],u=n[o+1];n[o+1]=d,n[o]=u}else break}this.reorderDirection="down",this.$emit("update:modelValue",n),this.$emit("reorder",{originalEvent:t,value:n,direction:this.reorderDirection})}},moveBottom:function(t){if(this.d_selection){for(var n=l(this.modelValue),i=this.d_selection.length-1;i>=0;i--){var r=this.d_selection[i],o=c.findIndexInList(r,n);if(o!==n.length-1){var d=n.splice(o,1)[0];n.push(d)}else break}this.reorderDirection="bottom",this.$emit("update:modelValue",n),this.$emit("reorder",{originalEvent:t,value:n,direction:this.reorderDirection})}},onItemClick:function(t,n,i){this.itemTouched=!1;var r=c.findIndexInList(n,this.d_selection),o=r!=-1,d=this.itemTouched?!1:this.metaKeySelection,u=s.find(this.list,'[data-pc-section="item"]')[i].getAttribute("id");if(this.focusedOptionIndex=u,d){var I=t.metaKey||t.ctrlKey;o&&I?this.d_selection=this.d_selection.filter(function(D,y){return y!==r}):(this.d_selection=I?this.d_selection?l(this.d_selection):[]:[],c.insertIntoOrderedArray(n,i,this.d_selection,this.modelValue))}else o?this.d_selection=this.d_selection.filter(function(D,y){return y!==r}):(this.d_selection=this.d_selection?l(this.d_selection):[],c.insertIntoOrderedArray(n,i,this.d_selection,this.modelValue));this.$emit("update:selection",this.d_selection),this.$emit("selection-change",{originalEvent:t,value:this.d_selection})},onItemTouchEnd:function(){this.itemTouched=!0},findNextItem:function(t){var n=t.nextElementSibling;return n?s.getAttribute(n,"data-pc-section")!=="item"?this.findNextItem(n):n:null},findPrevItem:function(t){var n=t.previousElementSibling;return n?s.getAttribute(nextItem,"data-pc-section")!=="item"?this.findPrevItem(n):n:null},updateListScroll:function(){var t=s.find(this.list,'[data-pc-section="item"][data-p-highlight="true"]');if(t&&t.length)switch(this.reorderDirection){case"up":s.scrollInView(this.list,t[0]);break;case"top":this.list.scrollTop=0;break;case"down":s.scrollInView(this.list,t[t.length-1]);break;case"bottom":this.list.scrollTop=this.list.scrollHeight;break}},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var t;this.$el.setAttribute(this.attributeSelector,""),this.styleElement=document.createElement("style"),this.styleElement.type="text/css",s.setAttribute(this.styleElement,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.head.appendChild(this.styleElement);var n=`
@media screen and (max-width: `.concat(this.breakpoint,`) {
    .p-orderlist[`).concat(this.attributeSelector,`] {
        flex-direction: column;
    }

    .p-orderlist[`).concat(this.attributeSelector,`] .p-orderlist-controls {
        padding: var(--content-padding);
        flex-direction: row;
    }

    .p-orderlist[`).concat(this.attributeSelector,`] .p-orderlist-controls .p-button {
        margin-right: var(--inline-spacing);
        margin-bottom: 0;
    }

    .p-orderlist[`).concat(this.attributeSelector,`] .p-orderlist-controls .p-button:last-child {
        margin-right: 0;
    }
}
`);this.styleElement.innerHTML=n}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},moveDisabled:function(){if(!this.d_selection||!this.d_selection.length)return!0},listRef:function(t){this.list=t?t.$el:void 0}},computed:{attributeSelector:function(){return S()},focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null},moveUpAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.moveUp:void 0},moveTopAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.moveTop:void 0},moveDownAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.moveDown:void 0},moveBottomAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.moveBottom:void 0}},components:{OLButton:x,AngleUpIcon:V,AngleDownIcon:U,AngleDoubleUpIcon:$,AngleDoubleDownIcon:W},directives:{ripple:_}};function g(e){"@babel/helpers - typeof";return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(e)}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?E(Object(n),!0).forEach(function(i){te(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function te(e,t,n){return t=ne(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ne(e){var t=ie(e,"string");return g(t)==="symbol"?t:String(t)}function ie(e,t){if(g(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if(g(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var oe=["id","onClick","aria-selected","onMousedown","data-p-highlight","data-p-focused"];function re(e,t,n,i,r,o){var d=v("AngleUpIcon"),u=v("OLButton"),I=v("AngleDoubleUpIcon"),D=v("AngleDownIcon"),y=v("AngleDoubleDownIcon"),k=j("ripple");return w(),O("div",a({class:e.cx("root")},e.ptm("root")),[L("div",a({class:e.cx("controls")},e.ptm("controls")),[m(e.$slots,"controlsstart"),p(u,a({type:"button",onClick:o.moveUp,"aria-label":o.moveUpAriaLabel,disabled:o.moveDisabled(),pt:e.ptm("moveUpButton")},e.moveUpButtonProps,{"data-pc-section":"moveupbutton",unstyled:e.unstyled}),{icon:b(function(){return[m(e.$slots,"moveupicon",{},function(){return[p(d,a(e.ptm("moveUpButton").icon,{"data-pc-section":"moveupicon"}),null,16)]})]}),_:3},16,["onClick","aria-label","disabled","pt","unstyled"]),p(u,a({type:"button",onClick:o.moveTop,"aria-label":o.moveTopAriaLabel,disabled:o.moveDisabled(),pt:e.ptm("moveTopButton")},e.moveTopButtonProps,{"data-pc-section":"movetopbutton",unstyled:e.unstyled}),{icon:b(function(){return[m(e.$slots,"movetopicon",{},function(){return[p(I,a(e.ptm("moveTopButton").icon,{"data-pc-section":"movetopicon"}),null,16)]})]}),_:3},16,["onClick","aria-label","disabled","pt","unstyled"]),p(u,a({type:"button",onClick:o.moveDown,"aria-label":o.moveDownAriaLabel,disabled:o.moveDisabled(),pt:e.ptm("moveDownButton")},e.moveDownButtonProps,{"data-pc-section":"movedownbutton",unstyled:e.unstyled}),{icon:b(function(){return[m(e.$slots,"movedownicon",{},function(){return[p(D,a(e.ptm("moveDownButton").icon,{"data-pc-section":"movedownicon"}),null,16)]})]}),_:3},16,["onClick","aria-label","disabled","pt","unstyled"]),p(u,a({type:"button",onClick:o.moveBottom,"aria-label":o.moveBottomAriaLabel,disabled:o.moveDisabled(),pt:e.ptm("moveBottomButton")},e.moveBottomButtonProps,{"data-pc-section":"movebottombutton",unstyled:e.unstyled}),{icon:b(function(){return[m(e.$slots,"movebottomicon",{},function(){return[p(y,a(e.ptm("moveBottomButton").icon,{"data-pc-section":"movebottomicon"}),null,16)]})]}),_:3},16,["onClick","aria-label","disabled","pt","unstyled"]),m(e.$slots,"controlsend")],16),L("div",a({class:e.cx("container")},e.ptm("container")),[e.$slots.header?(w(),O("div",a({key:0,class:e.cx("header")},e.ptm("header")),[m(e.$slots,"header")],16)):F("",!0),p(R,a({ref:o.listRef,id:r.id+"_list",name:"p-orderlist-flip",tag:"ul",class:e.cx("list"),style:e.listStyle,role:"listbox","aria-multiselectable":"true",tabindex:e.tabindex,"aria-activedescendant":r.focused?o.focusedOptionId:void 0,"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,onFocus:o.onListFocus,onBlur:o.onListBlur,onKeydown:o.onListKeyDown},A(A(A({},e.listProps),e.ptm("list")),e.ptm("transition"))),{default:b(function(){return[(w(!0),O(N,null,M(e.modelValue,function(h,f){return H((w(),O("li",a({key:o.getItemKey(h,f),id:r.id+"_"+f,role:"option",class:e.cx("item",{item:h,id:"".concat(r.id,"_").concat(f)}),onClick:function(B){return o.onItemClick(B,h,f)},onTouchend:t[0]||(t[0]=function(){return o.onItemTouchEnd&&o.onItemTouchEnd.apply(o,arguments)}),"aria-selected":o.isSelected(h),onMousedown:function(B){return o.onOptionMouseDown(f)}},o.getPTOptions(h,"item",f),{"data-p-highlight":o.isSelected(h),"data-p-focused":"".concat(r.id,"_").concat(f)===o.focusedOptionId}),[m(e.$slots,"item",{item:h,index:f})],16,oe)),[[k]])}),128))]}),_:3},16,["id","class","style","tabindex","aria-activedescendant","aria-label","aria-labelledby","onFocus","onBlur","onKeydown"])],16)],16)}ee.render=re;export{ee as default};
