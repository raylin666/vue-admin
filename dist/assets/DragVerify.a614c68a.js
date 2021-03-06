var e=Object.assign;import{j as t,e as s,s as i,q as n,as as a,an as o,k as r,cK as c,w as l,aY as u,n as d,cJ as f,cC as p,ew as g}from"./index.0c6f5acb.js";import{u as y}from"./useExpose.d6750c0d.js";const{t:h}=t(),m={value:{type:Boolean,default:!1},isSlot:{type:Boolean,default:!1},text:{type:[String],default:h("component.verify.dragText")},successText:{type:[String],default:h("component.verify.successText")},height:{type:[Number,String],default:40},width:{type:[Number,String],default:220},circle:{type:Boolean,default:!1},wrapStyle:{type:Object,default:{}},contentStyle:{type:Object,default:{}},barStyle:{type:Object,default:{}},actionStyle:{type:Object,default:{}}},v=e(e({},m),{src:{type:String},imgWidth:{type:Number,default:260},imgWrapStyle:{type:Object,default:{}},minDegree:{type:Number,default:90},maxDegree:{type:Number,default:270},diffDegree:{type:Number,default:20}});var x=s({name:"BaseDargVerify",props:m,emits:["success","update:value","change","start","move","end"],setup(t,{emit:s,slots:h}){const m=i({isMoving:!1,isPassing:!1,moveDistance:0,toLeft:!1,startTime:0,endTime:0}),v=n(null),x=n(null),w=n(null),b=n(null);a((()=>m.isPassing),(e=>{if(e){const{startTime:t,endTime:i}=m;s("success",{isPassing:e,time:((i-t)/1e3).toFixed(1)}),s("update:value",e),s("change",e)}})),o((()=>{m.isPassing=!!t.value}));const S=r((()=>{const{height:s,actionStyle:i}=t,n=`${parseInt(s)}px`;return e({left:0,width:n,height:n},i)})),T=r((()=>{const{height:s,width:i,circle:n,wrapStyle:a}=t,o=parseInt(s),r=`${parseInt(i)}px`;return e({width:r,height:`${o}px`,lineHeight:`${o}px`,borderRadius:n?o/2+"px":0},a)})),D=r((()=>{const{height:s,circle:i,barStyle:n}=t,a=parseInt(s);return e({height:`${a}px`,borderRadius:i?a/2+"px 0 0 "+a/2+"px":0},n)})),M=r((()=>{const{height:s,width:i,contentStyle:n}=t,a=`${parseInt(s)}px`,o=`${parseInt(i)}px`;return e({height:a,width:o},n)}));function I(e){return e.pageX||e.touches[0].pageX}function j(e){if(m.isPassing)return;const t=l(b);t&&(s("start",e),m.moveDistance=I(e)-parseInt(t.style.left.replace("px",""),10),m.startTime=(new Date).getTime(),m.isMoving=!0)}function P(e){const s=parseInt(e.style.width),{width:i}=t,n=parseInt(i);return{offset:n-s-6,widthNum:n,actionWidth:s}}function $(e){const{isMoving:i,moveDistance:n}=m;if(i){const i=l(b),a=l(x);if(!i||!a)return;const{offset:o,widthNum:r,actionWidth:c}=P(i),u=I(e)-n;s("move",{event:e,moveDistance:n,moveX:u}),u>0&&u<=o?(i.style.left=`${u}px`,a.style.width=`${u+c/2}px`):u>o&&(i.style.left=r-c+"px",a.style.width=r-c/2+"px",t.isSlot||O())}}function N(e){const{isMoving:i,isPassing:n,moveDistance:a}=m;if(i&&!n){s("end",e);const i=l(b),n=l(x);if(!i||!n)return;const o=I(e)-a,{offset:r,widthNum:c,actionWidth:u}=P(i);o<r?t.isSlot?setTimeout((()=>{if(t.value){const e=l(w);e&&(e.style.width=`${parseInt(n.style.width)}px`)}else L()}),0):L():(i.style.left=c-u+"px",n.style.width=c-u/2+"px",O()),m.isMoving=!1}}function O(){t.isSlot?L():(m.endTime=(new Date).getTime(),m.isPassing=!0,m.isMoving=!1)}function L(){m.isMoving=!1,m.isPassing=!1,m.moveDistance=0,m.toLeft=!1,m.startTime=0,m.endTime=0;const e=l(b),t=l(x),s=l(w);e&&t&&s&&(m.toLeft=!0,u((()=>{m.toLeft=!1,e.style.left="0",t.style.width="0"}),300),s.style.width=l(M).width)}return c({el:document,name:"mouseup",listener:()=>{m.isMoving&&L()}}),y({resume:L}),()=>d("div",{class:"darg-verify",ref:v,style:l(T),onMousemove:$,onTouchmove:$,onMouseleave:N,onMouseup:N,onTouchend:N},[(()=>{const e=["darg-verify-bar"];return m.toLeft&&e.push("to-left"),d("div",{class:e,ref:x,style:l(D)},null)})(),(()=>{const e=["darg-verify-content"],{isPassing:s}=m,{text:i,successText:n}=t;return s&&e.push("success"),d("div",{class:e,ref:w,style:l(M)},[f(h,"text",s)||(s?n:i)])})(),(()=>{const e=["darg-verify-action"],{toLeft:t,isPassing:s}=m;return t&&e.push("to-left"),d("div",{class:e,onMousedown:j,onTouchstart:j,style:l(S),ref:b},[f(h,"actionIcon",s)||d(s?p:g,{class:"darg-verify-action__icon"},null)])})()])}}),w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:x});export{x as B,w as D,v as r};
