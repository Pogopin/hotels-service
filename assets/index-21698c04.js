import{g,l as p,o as r,c as l,i as s,a as i,u as a,B as u,m,R as C,n as B,q as w,F as b,e as F,w as V,s as R,v as P}from"./index-4ceec496.js";const T=[{id:1,component:"BaseCheckBox",type:"checkbox",name:"exampleCheck1",propertyForSearch:"fiveStars",inSlot:`<i class="icon-star"></i><i class="icon-star"></i>
                <i class="icon-star"></i><i class="icon-star"></i>
                <i class="icon-star"></i>`},{id:2,component:"BaseCheckBox",type:"checkbox",name:"exampleCheck1",propertyForSearch:"fourStars",inSlot:`<i class="icon-star"></i><i class="icon-star"></i>
                <i class="icon-star"></i><i class="icon-star"></i>
                <i class="icon-star-o"></i>`},{id:3,component:"BaseCheckBox",type:"checkbox",name:"exampleCheck1",propertyForSearch:"threeStars",inSlot:`<i class="icon-star"></i><i class="icon-star"></i>
                <i class="icon-star"></i><i class="icon-star-o"></i>
                <i class="icon-star-o"></i>`},{id:4,component:"BaseCheckBox",type:"checkbox",name:"exampleCheck1",propertyForSearch:"twoStars",inSlot:`<i class="icon-star"></i><i class="icon-star"></i>
                <i class="icon-star-o"></i><i class="icon-star-o"></i>
                <i class="icon-star-o"></i>`},{id:5,component:"BaseCheckBox",type:"checkbox",name:"exampleCheck1",propertyForSearch:"oneStar",inSlot:`<i class="icon-star"></i><i class="icon-star-o"></i>
                <i class="icon-star-o"></i><i class="icon-star-o"></i>
                <i class="icon-star-o"></i>`}],_=[{country:"Россия",city:["Сочи","Анапа","Краснодар"]},{country:"Египет",city:["Каир","Хургада","Шарм-эль-Шейх"]},{country:"Тайланд",city:["Паттайя","Пхукет","Лампанг"]}],H={class:"col-lg-3 sidebar"},I={class:"sidebar-wrap bg-light"},E=s("h3",{class:"heading mb-4"},"Find City",-1),L={class:"form"},M={class:"fields"},U={class:"form-group"},q={class:"select-wrap one-third"},N=s("div",{class:"icon"},[s("span",{class:"ion-ios-arrow-down"})],-1),D={class:"form-group"},O={class:"select-wrap one-third"},j=s("div",{class:"icon"},[s("span",{class:"ion-ios-arrow-down"})],-1),z={class:"form-group"},A={class:"form-group"},G={class:"form-group"},J={class:"form-group"},K={class:"sidebar-wrap bg-light"},Q=s("h3",{class:"heading mb-4"},"Star Rating",-1),W={class:"star-rating"},X={class:"rate"},Y=["innerHTML"],ss={__name:"index",setup(Z){const y=g();function f(){y.filterHotels(c.value)}const d=p([]);function k(o,e){c.value.minPriceValue=o,c.value.maxPriceValue=e}function h(o,e){const t=o.target.id;P(t,n=>{c.value[e]=n})}function v(o){c.value.city=o}function x(o){c.value.country=o,_.forEach(e=>{e.country===o&&(d.value=e.city)}),_.forEach(e=>{if(e.country===o&&!e.city.includes(c.value.city)){const t=document.querySelector("#city-select");t.innerText="Выберите город",c.value.city=null}})}function S(o,e){c.value.starRating[e].checked=o}const c=p({city:"",country:"",dateFrom:"",dateTo:"",minPriceValue:0,maxPriceValue:1e3,starRating:{fiveStars:{checked:!1,num:5},fourStars:{checked:!1,num:4},threeStars:{checked:!1,num:3},twoStars:{checked:!1,num:2},oneStar:{checked:!1,num:1}}});return(o,e)=>(r(),l("div",H,[s("div",I,[E,s("form",L,[s("div",M,[s("div",U,[s("div",q,[N,i(a(u),{id:"country-select",class:"form-control",options:["Россия","Египет","Тайланд","Австрия"],selected:"Страна","onUpdate:select":x})])]),s("div",D,[s("div",O,[j,i(a(u),{id:"city-select",class:"form-control",options:d.value,selected:"Выберите город","onUpdate:select":v},null,8,["options"])])]),s("div",z,[i(a(m),{type:"text",class:"form-control",placeholder:"Дата с",id:"checkin_date_from",onFocus:e[0]||(e[0]=t=>h(t,"dateFrom"))})]),s("div",A,[i(a(m),{type:"text",id:"checkin_date_to",class:"form-control",placeholder:"Дата до",onFocus:e[1]||(e[1]=t=>h(t,"dateTo"))})]),s("div",G,[i(a(C),{type:"range",minValue:1e3,maxValue:12e4,step:500,"onUpdate:priceRange":k})]),s("div",J,[i(a(w),{text:"Search",modifyStyle:"btn-primary py-3 px-5",onClick:B(f,["prevent"])},null,8,["onClick"])])])])]),s("div",K,[Q,s("form",W,[(r(!0),l(b,null,F(a(T),t=>(r(),l("div",{key:t.id},[i(a(R),{type:t.type,name:t.name,id:"exampleCheck1",value:"four-stars","onChecked:value":n=>S(n,t.propertyForSearch)},{default:V(()=>[s("p",X,[s("span",{innerHTML:t.inSlot},null,8,Y)])]),_:2},1032,["type","name","onChecked:value"])]))),128))])])]))}};export{ss as default};