import{b as l,g as d,h as _,o as r,c as h,i as t,a as p,w as u,t as o,j as f,p as v,k as m}from"./index-6629620b.js";const e=a=>(v("data-v-c2f0d1ba"),a=a(),m(),a),b={class:"col-md-4"},x={class:"destination"},D=["src"],g=e(()=>t("div",{class:"icon d-flex justify-content-center align-items-center pos-center"},[t("span",{class:"icon-search2"})],-1)),k={class:"text p-3"},y={class:"d-flex"},S={class:"one"},w={class:"rate"},B=f('<i class="icon-star" data-v-c2f0d1ba></i><i class="icon-star" data-v-c2f0d1ba></i><i class="icon-star" data-v-c2f0d1ba></i><i class="icon-star" data-v-c2f0d1ba></i><i class="icon-star-o" data-v-c2f0d1ba></i>',5),I={class:"two"},N={class:"price per-price"},j=e(()=>t("hr",null,null,-1)),C=e(()=>t("p",{class:"bottom-area"},[t("span",{class:"book-now"},"Book Now")],-1)),V={__name:"index",props:{hotelData:Object},setup(a){const s=a,c=d();function n(){console.log(s.hotelData.id),c.fetchHotelById(s.hotelData.id)}return(H,E)=>{const i=_("router-link");return r(),h("div",b,[t("div",x,[p(i,{to:{name:"info",params:{id:s.hotelData.id}},onClick:n},{default:u(()=>[t("img",{class:"img img-2",src:s.hotelData.fullPath},null,8,D),g]),_:1},8,["to"]),t("div",k,[t("div",y,[t("div",S,[t("h3",null,o(s.hotelData.name)+", "+o(s.hotelData.country),1),t("p",w,[B,t("span",null,o(s.hotelData.rating),1)])])]),t("div",I,[t("span",N,o(s.hotelData.price)+"/night",1)]),t("p",null,o(s.hotelData.distance),1),j,C])])])}}},P=l(V,[["__scopeId","data-v-c2f0d1ba"]]);export{P as default};