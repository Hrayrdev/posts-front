import{d as v,e as h,i as f,g as k,c as l,H as y,E as d,b as g,T as I,F as S,I as n,N as b,O as x,G as B,o as e,a as t,t as _,M as C,J as N,K as T}from"./index-DGK2mypv.js";import{u as w,_ as V}from"./_plugin-vue_export-helper-Ds-EQNLw.js";const p=s=>(N("data-v-825a4685"),s=s(),T(),s),D={class:"post-detail"},P={key:0,class:"post-detail__inner"},A={class:"post-detail__post-data"},E={class:"post-detail__title-wrap"},F={class:"post-detail__label"},M=p(()=>t("div",{class:"post-detail__title"},null,-1)),O=p(()=>t("div",{class:"post-detail__label"},"Описание:",-1)),G={class:"post-detail__description"},H=v({__name:"post-detail",setup(s){const o=h(!1),c=b(),r=w();setTimeout(()=>{o.value=!0}),f(()=>{console.log(c.params)});function u(){o.value=!1,setTimeout(()=>{x.push("/posts")},150)}const a=k(()=>{const i=c.params.id;if(!Array.isArray(i))return r.getPostById(i)});return(i,J)=>{const m=B("el-button");return e(),l("div",D,[y(m,{type:"success",class:"post-detail__link",onClick:u},{default:d(()=>[n("Вернутся к списку")]),_:1}),a.value?(e(),g(I,{key:0,name:"post-detail"},{default:d(()=>[o.value?(e(),l("div",P,[t("div",A,[t("div",E,[t("div",F,"Заголовок: "+_(a.value.title),1),M]),t("div",null,[O,t("div",G,_(a.value.description),1)])])])):C("",!0)]),_:1})):(e(),l(S,{key:1},[n("Пост не найден")],64))])}}}),j=V(H,[["__scopeId","data-v-825a4685"]]);export{j as default};
