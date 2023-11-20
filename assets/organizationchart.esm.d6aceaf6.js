import{L as T,N as k,_ as b,aa as P,af as S,i as O,t as a,v as s,x as r,ag as v,P as i,S as y,Y as f,T as p,W as m,X as N,ah as D,z}from"./entry.7951bc73.js";var j=`
@layer primevue {
    .p-organizationchart-table {
        border-spacing: 0;
        border-collapse: separate;
        margin: 0 auto;
    }

    .p-organizationchart-table > tbody > tr > td {
        text-align: center;
        vertical-align: top;
        padding: 0 0.75rem;
    }

    .p-organizationchart-node-content {
        display: inline-block;
        position: relative;
    }

    .p-organizationchart-node-content .p-node-toggler {
        position: absolute;
        bottom: -0.75rem;
        margin-left: -0.75rem;
        z-index: 2;
        left: 50%;
        user-select: none;
        cursor: pointer;
        width: 1.5rem;
        height: 1.5rem;
        text-decoration: none;
    }

    .p-organizationchart-node-content .p-node-toggler .p-node-toggler-icon {
        position: relative;
        top: 0.25rem;
    }

    .p-organizationchart-line-down {
        margin: 0 auto;
        height: 20px;
        width: 1px;
    }

    .p-organizationchart-line-right {
        border-radius: 0px;
    }

    .p-organizationchart-line-left {
        border-radius: 0;
    }

    .p-organizationchart-selectable-node {
        cursor: pointer;
    }
}
`,x={root:"p-organizationchart p-component",table:"p-organizationchart-table",node:function(n){var t=n.instance;return["p-organizationchart-node-content",{"p-organizationchart-selectable-node":t.selectable,"p-highlight":t.selected}]},nodeToggler:"p-node-toggler",nodeTogglerIcon:"p-node-toggler-icon",lines:"p-organizationchart-lines",lineDown:"p-organizationchart-line-down",lineLeft:function(n){var t=n.index;return["p-organizationchart-line-left",{"p-organizationchart-line-top":t!==0}]},lineRight:function(n){var t=n.props,o=n.index;return["p-organizationchart-line-right",{"p-organizationchart-line-top":o!==t.node.children.length-1}]},nodes:"p-organizationchart-nodes"},M=T.extend({name:"organizationchart",css:j,classes:x}),I={name:"BaseOrganizationChart",extends:k,props:{value:{type:null,default:null},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null},collapsible:{type:Boolean,default:!1},collapsedKeys:{type:null,default:null}},style:M,provide:function(){return{$parentInstance:this}}},w={name:"OrganizationChartNode",hostName:"OrganizationChart",extends:k,emits:["node-click","node-toggle"],props:{node:{type:null,default:null},templates:{type:null,default:null},collapsible:{type:Boolean,default:!1},collapsedKeys:{type:null,default:null},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null}},methods:{getPTOptions:function(n){return this.ptm(n,{context:{expanded:this.expanded,selectable:this.selectable,selected:this.selected,toggleable:this.toggleable,active:this.selected}})},getNodeOptions:function(n,t){return this.ptm(t,{context:{lineTop:n}})},onNodeClick:function(n){b.getAttribute(n.target,"nodeToggler")||b.getAttribute(n.target,"nodeTogglerIcon")||this.selectionMode&&this.$emit("node-click",this.node)},onChildNodeClick:function(n){this.$emit("node-click",n)},toggleNode:function(){this.$emit("node-toggle",this.node)},onChildNodeToggle:function(n){this.$emit("node-toggle",n)},onKeydown:function(n){(n.code==="Enter"||n.code==="Space")&&(this.toggleNode(),n.preventDefault())}},computed:{leaf:function(){return this.node.leaf===!1?!1:!(this.node.children&&this.node.children.length)},colspan:function(){return this.node.children&&this.node.children.length?this.node.children.length*2:null},childStyle:function(){return{visibility:!this.leaf&&this.expanded?"inherit":"hidden"}},expanded:function(){return this.collapsedKeys[this.node.key]===void 0},selectable:function(){return this.selectionMode&&this.node.selectable!==!1},selected:function(){return this.selectable&&this.selectionKeys&&this.selectionKeys[this.node.key]===!0},toggleable:function(){return this.collapsible&&this.node.collapsible!==!1&&!this.leaf}},components:{ChevronDownIcon:P,ChevronUpIcon:S}},B=["colspan"],L=["colspan"],E=["colspan"];function R(e,n,t,o,c,l){var h=O("OrganizationChartNode",!0);return a(),s("table",i({class:e.cx("table")},e.ptm("table")),[r("tbody",v(D(e.ptm("body"))),[t.node?(a(),s("tr",v(i({key:0},e.ptm("row"))),[r("td",i({colspan:l.colspan},e.ptm("cell")),[r("div",i({class:[e.cx("node"),t.node.styleClass],onClick:n[2]||(n[2]=function(){return l.onNodeClick&&l.onNodeClick.apply(l,arguments)})},l.getPTOptions("node")),[(a(),y(f(t.templates[t.node.type]||t.templates.default),{node:t.node},null,8,["node"])),l.toggleable?(a(),s("a",i({key:0,tabindex:"0",class:e.cx("nodeToggler"),onClick:n[0]||(n[0]=function(){return l.toggleNode&&l.toggleNode.apply(l,arguments)}),onKeydown:n[1]||(n[1]=function(){return l.onKeydown&&l.onKeydown.apply(l,arguments)})},l.getPTOptions("nodeToggler")),[t.templates.togglericon?(a(),y(f(t.templates.togglericon),{key:0,expanded:l.expanded,class:"p-node-toggler-icon"},null,8,["expanded"])):(a(),y(f(l.expanded?"ChevronDownIcon":"ChevronUpIcon"),i({key:1,class:e.cx("nodeTogglerIcon")},l.getPTOptions("nodeTogglerIcon")),null,16,["class"]))],16)):p("",!0)],16)],16,B)],16)):p("",!0),r("tr",i({style:l.childStyle,class:e.cx("lines")},e.ptm("lines")),[r("td",i({colspan:l.colspan},e.ptm("lineCell")),[r("div",i({class:e.cx("lineDown")},e.ptm("lineDown")),null,16)],16,L)],16),r("tr",i({style:l.childStyle,class:e.cx("lines")},e.ptm("lines")),[t.node.children&&t.node.children.length===1?(a(),s("td",i({key:0,colspan:l.colspan},e.ptm("lineCell")),[r("div",i({class:e.cx("lineDown")},e.ptm("lineDown")),null,16)],16,E)):p("",!0),t.node.children&&t.node.children.length>1?(a(!0),s(m,{key:1},N(t.node.children,function(g,u){return a(),s(m,{key:g.key},[r("td",i({class:e.cx("lineLeft",{index:u})},l.getNodeOptions(u!==0,"lineLeft"))," ",16),r("td",i({class:e.cx("lineRight",{index:u})},l.getNodeOptions(u!==t.node.children.length-1,"lineRight"))," ",16)],64)}),128)):p("",!0)],16),r("tr",i({style:l.childStyle,class:e.cx("nodes")},e.ptm("nodes")),[(a(!0),s(m,null,N(t.node.children,function(g){return a(),s("td",i({key:g.key,colspan:"2"},e.ptm("nodeCell")),[z(h,{node:g,templates:t.templates,collapsedKeys:t.collapsedKeys,onNodeToggle:l.onChildNodeToggle,collapsible:t.collapsible,selectionMode:t.selectionMode,selectionKeys:t.selectionKeys,onNodeClick:l.onChildNodeClick,pt:e.pt,unstyled:e.unstyled},null,8,["node","templates","collapsedKeys","onNodeToggle","collapsible","selectionMode","selectionKeys","onNodeClick","pt","unstyled"])],16)}),128))],16)],16)],16)}w.render=R;function d(e){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},d(e)}function C(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),t.push.apply(t,o)}return t}function K(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?C(Object(t),!0).forEach(function(o){V(e,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})}return e}function V(e,n,t){return n=A(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function A(e){var n=U(e,"string");return d(n)==="symbol"?n:String(n)}function U(e,n){if(d(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var o=t.call(e,n||"default");if(d(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var F={name:"OrganizationChart",extends:I,emits:["node-unselect","node-select","update:selectionKeys","node-expand","node-collapse","update:collapsedKeys"],data:function(){return{d_collapsedKeys:this.collapsedKeys||{}}},watch:{collapsedKeys:function(n){this.d_collapsedKeys=n}},methods:{onNodeClick:function(n){var t=n.key;if(this.selectionMode){var o=this.selectionKeys?K({},this.selectionKeys):{};o[t]?(delete o[t],this.$emit("node-unselect",n)):(this.selectionMode==="single"&&(o={}),o[t]=!0,this.$emit("node-select",n)),this.$emit("update:selectionKeys",o)}},onNodeToggle:function(n){var t=n.key;this.d_collapsedKeys[t]?(delete this.d_collapsedKeys[t],this.$emit("node-expand",n)):(this.d_collapsedKeys[t]=!0,this.$emit("node-collapse",n)),this.d_collapsedKeys=K({},this.d_collapsedKeys),this.$emit("update:collapsedKeys",this.d_collapsedKeys)}},components:{OrganizationChartNode:w}};function H(e,n,t,o,c,l){var h=O("OrganizationChartNode");return a(),s("div",i({class:e.cx("root")},e.ptm("root")),[z(h,{node:e.value,templates:e.$slots,onNodeToggle:l.onNodeToggle,collapsedKeys:c.d_collapsedKeys,collapsible:e.collapsible,onNodeClick:l.onNodeClick,selectionMode:e.selectionMode,selectionKeys:e.selectionKeys,pt:e.pt,unstyled:e.unstyled},null,8,["node","templates","onNodeToggle","collapsedKeys","collapsible","onNodeClick","selectionMode","selectionKeys","pt","unstyled"])],16)}F.render=H;export{F as default};
