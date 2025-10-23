import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{B as i}from"./button.BJ-frA1V.js";import{CustomTooltip as o}from"./CustomTooltip.B8Vu8xGS.js";import{r as h}from"./index.CY-HDqYb.js";import{t as d}from"./index.DAZZgTnj.js";import{u as p}from"./utils.BdobHaEk.js";import{c as r}from"./createLucideIcon.DEVXufbm.js";import{G as m}from"./github.DJpjWS-C.js";import"./index.ALCAoJ65.js";import"./index.BoFeahe5.js";import"./index.BvNfZMHe.js";/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],f=r("check",x);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],k=r("file-text",u);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],y=r("linkedin",j);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],v=r("mail",g),w="https://www.linkedin.com/in/agustin-castets",b="https://github.com/cuter97",c="aguscastets@gmail.com",G=({lang:s})=>{const[n,a]=h.useState(!1),t=p(s),l=()=>{navigator.clipboard.writeText(c).then(()=>{a(!0),setTimeout(()=>a(!1),3e3)}),d(t("sonner.title"),{description:c,action:{label:"Undo",onClick:()=>console.log("Undo")}})};return e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsx(o,{asChild:!0,description:t("tooltips.copyEmail"),children:e.jsx(i,{variant:"ghost",size:"icon",onClick:l,className:n?"bg-chart-2  ":"",children:n?e.jsx(f,{className:"w-6 h-6 text-foreground"}):e.jsx(v,{className:"w-6 h-6 text-terciary"})})}),e.jsx(o,{description:t("tooltips.viewGithub"),children:e.jsx(i,{variant:"ghost",size:"icon",asChild:!0,children:e.jsx("a",{href:b,target:"_blank",rel:"noopener noreferrer",children:e.jsx(m,{className:"w-6 h-6 text-terciary"})})})}),e.jsx(o,{description:t("tooltips.viewLinkedin"),children:e.jsx(i,{variant:"ghost",size:"icon",asChild:!0,children:e.jsx("a",{href:w,target:"_blank",rel:"noopener noreferrer",children:e.jsx(y,{className:"w-6 h-6 text-terciary"})})})}),e.jsx(o,{description:t("tooltips.viewResume"),children:e.jsx(i,{variant:"ghost",size:"icon",asChild:!0,children:e.jsx("a",{href:s==="es"?"/pdf/cv-es.pdf":"/pdf/cv-en.pdf",target:"_blank",rel:"noopener noreferrer",children:e.jsx(k,{className:"w-6 h-6 text-terciary"})})})})]})};export{G as ButtonsInfo};
