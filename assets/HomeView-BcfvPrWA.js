import{c as h,o as t,a as g,w as y,b as e,t as u,u as p,R as v,_ as b,s as k,r as f,d as w,e as a,f as C,v as N,g as $,F as j,h as S,i as V,p as B,j as R,k as T}from"./index-BtAOUD_i.js";import{u as U}from"./course-C718dtxm.js";const D={class:"max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"},I=e("img",{class:"rounded-t-lg justify-center items-center bg-red-600 h-48 w-full object-cover",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDFq5wKktyhpmM9hOT06s-vEDuTaP_W_v0lw&s",alt:""},null,-1),F={class:"p-5"},M={href:"#"},q={class:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},L={class:"mb-3 font-normal text-gray-700 dark:text-gray-400"},E={__name:"CourseCard",props:{course:{type:Object,default:()=>({id:"0",faculty:"Unknown Faculty",code:"Unknown Code",title:"Unknown Title"}),required:!0}},setup(s){const r=s,c=h(()=>r.course.code.replace(/(\D)(\d)/,"$1 $2"));return(m,o)=>(t(),g(p(v),{to:`/course/${s.course.code}`},{default:y(()=>[e("div",D,[I,e("div",F,[e("a",M,[e("h5",q,u(c.value),1)]),e("p",L,u(s.course.title),1)])])]),_:1},8,["to"]))}},H=s=>(B("data-v-97f70b54"),s=s(),R(),s),O=H(()=>e("div",{className:"mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl  text-center items-center content-center justify-center bg-red-200 flex flex-col"},[e("span",{className:"text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"}," BIM at UBC "),e("div",{className:"lg:text-xl md:text-lg text-base font-semibold text-gray-700"},[T(" Course "),e("span",{className:"italic underline font-bold text-cyan-500"},"Review")])],-1)),A={action:"",class:"main-search"},G={key:0},K={key:1},P={key:2},Q={key:0,className:"w-full flex  justify-center items-center relative "},W={className:"items-center justify-center flex"},z={class:"md:grid md:grid-cols-3 gap-3 md:w-5/6 w-full space-y-4 md:space-y-0 justify-center items-center"},J={key:1},X={__name:"HomeView",setup(s){const r=U(),{courses:c,loading:m}=k(r),o=f(null),n=f(""),x=async()=>{o.value=null;try{await r.fetchCourses()}catch(i){o.value=i}},_=h(()=>n.value?c.value.filter(l=>l.code.includes(n.value.toUpperCase())):c.value);return w(()=>{x()}),(i,l)=>(t(),a("main",null,[O,e("div",null,[e("form",A,[C(e("input",{"onUpdate:modelValue":l[0]||(l[0]=d=>n.value=d),id:"search-course",type:"text",name:"search-course",placeholder:"Search course code",class:"main-search-text"},null,512),[[N,n.value]])])]),p(m)?(t(),a("p",G,"Loading...")):$("",!0),o.value?(t(),a("p",K,u(o.value.message),1)):(t(),a("div",P,[_.value.length!==0?(t(),a("div",Q,[e("div",W,[e("div",z,[(t(!0),a(j,null,S(_.value,d=>(t(),a("div",{class:"max-w-sm block",key:d.id},[V(E,{course:d},null,8,["course"])]))),128))])])])):(t(),a("p",J,"No courses found matching your search criteria"))]))]))}},ee=b(X,[["__scopeId","data-v-97f70b54"]]);export{ee as default};
