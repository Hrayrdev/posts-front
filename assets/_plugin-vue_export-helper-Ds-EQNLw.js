import{P as w,e as o,f as g,g as x}from"./index-DGK2mypv.js";const N=w("posts",()=>{const n=o(!1),s=g([{id:"1",title:"Lorem ipsum ",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, ipsum!"},{id:"2",title:"Lorem ipsum ",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, ipsum!"},{id:"3",title:"Lorem ipsum ",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, ipsum!"},{id:"4",title:"Lorem ipsum ",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, ipsum!"},{id:"5",title:"cLorem ipsum ",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, ipsum!"},{id:"6",title:"Lorem ipsum ",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, ipsum!"}]),i=o(),r=o(!1),c=g({x:0,y:0}),y=x(()=>`left: ${c.x}px; 
    top: ${c.y}px`),d=o("create"),p=o(""),m=o("title"),v=o("up"),a=o(5),f=o(1),L=x(()=>s.filter(e=>e.title.includes(p.value)||e.description.includes(p.value)).sort((e,t)=>{const l=m.value==="title"?e.title:e.description,I=m.value==="title"?t.title:t.description;return l>I?v.value==="up"?1:-1:l<I?v.value==="up"?-1:1:0})),P=x(()=>L.value.slice(a.value*f.value-a.value,a.value*f.value)),h=e=>{s.push({id:String(Date.now()),title:e.title,description:e.description})},F=e=>{if(i.value){const t=s.find(l=>l.id===i.value.id);t&&s.forEach(l=>{i.value&&l.id===i.value.id&&(t.title=e.title,t.description=e.description)})}},M=()=>{const e=s.findIndex(t=>{if(i.value&&t.id===i.value.id)return!0});s.splice(e,1),r.value=!1},S=(e,t)=>{c.x=e.x,c.y=e.y,r.value=!r.value,i.value=t},_=()=>{n.value=!n.value,d.value="create",u.title="",u.description=""},D=()=>{n.value=!0,d.value="update";const e=s.find(t=>{if(i.value&&t.id===i.value.id)return!0});e&&(u.title=e==null?void 0:e.title,u.description=e==null?void 0:e.description),r.value=!1},b=e=>s.find(t=>t.id===e),u=g({title:"",description:""});return{getPostById:b,openUpdateModal:D,getFilteredPosts:L,getSlicedPosts:P,searchModel:p,sortFieldName:m,sortDirection:v,pageSize:a,pageNumber:f,dialogType:d,showContextMenu:r,contextMenuStyles:y,dialogVisible:n,postUpdate:u,changeDialogVisible:_,changeContextMenu:S,createPost:h,updatePost:F,deletePost:M}}),U=(n,s)=>{const i=n.__vccOpts||n;for(const[r,c]of s)i[r]=c;return i};export{U as _,N as u};
