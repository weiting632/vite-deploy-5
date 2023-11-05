import{S as C,a as P,A as T}from"./autoplay-e3b706fc.js";import{_ as S,m as k,b as $,r as c,o as a,c as d,d as h,e as t,t as n,f as l,w as _,F as m,h as V,l as A,k as L,i as B}from"./index-c7316edf.js";import{c as f}from"./cart-84756834.js";import"./sweetalert2.all-aa99cbf5.js";const{VITE_URL:r,VITE_PATH:p}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"tomyalan978",BASE_URL:"/vite-deploy-5",MODE:"production",DEV:!1,PROD:!0,SSR:!1},E={data(){return{product:[],products:[]}},components:{Swiper:C,SwiperSlide:P},setup(){return{modules:[T]}},computed:{...k(f,["productId","isProductLoad","loadingShow"])},methods:{getProducts(){this.$http(`${r}/v2/api/${p}/products/all`).then(e=>{this.products=e.data.products})},getProduct(){const e=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:!1,onCancel:this.onCancel}),{id:o}=this.$route.params;this.$http(`${r}/v2/api/${p}/product/${o}`).then(u=>{this.product=u.data.product,e.hide()})},newProduct(e){this.$http(`${r}/v2/api/${p}/product/${e}`).then(o=>{this.product=o.data.product})},...$(f,["detailProductAddToCart","addToCart"])},watch:{"$route.params.id":function(e,o){e!==o&&this.$router.go(0)}},mounted(){this.getProduct(),this.getProducts(),console.log(this.$route)}},I={class:"container"},N={class:"row align-items-center mt-4","data-aos":"fade-up"},U={class:"col-md-8"},x=["src"],R={class:"col-md-4 detail-product"},D={class:"d-flex align-items-center"},O={class:"fw-bold h1 mb-5 me-2"},j={class:"h4 fw-bold text-end mb-5"},F={class:"mb-6"},H={class:"row align-items-center"},M={class:"col-md-6"},q={class:"pt-5","data-aos":"fade-up"},z=t("h2",{class:"text-center pb-5"},"熱銷商品",-1),G={class:"container"},J={class:"row"},K={class:"w-100"},Q={class:"card border-0 position-relative"},W=["onClick"],X=["src"],Y=t("div",{class:"content position-absolute d-flex justify-content-center align-items-center"},[t("h1",null,"商品資訊")],-1),Z={class:"card-body pt-0 mb-6 bg-primary"},tt={class:"mb-2 pt-3 text-center"},et={class:"card-text mb-2 text-center"},ot=["onClick"],st={key:0,class:"loader"},it=t("span",null,null,-1),nt=t("span",null,null,-1),at=t("span",null,null,-1),ct=[it,nt,at];function dt(e,o,u,w,i,v){const g=c("loading"),b=c("swiper-slide"),y=c("swiper");return a(),d(m,null,[h(g,{active:e.loadingShow,"onUpdate:active":o[0]||(o[0]=s=>e.loadingShow=s),"can-cancel":!0,color:e.color,"on-cancel":e.onCancel,"is-full-page":e.fullPage},null,8,["active","color","on-cancel","is-full-page"]),t("div",I,[t("div",N,[t("div",U,[t("img",{src:i.product.imageUrl,alt:"",class:"img-fluid"},null,8,x)]),t("div",R,[t("div",D,[t("h2",O,n(i.product.title),1),t("p",j,"NT"+n(i.product.price),1)]),t("h4",F,n(i.product.description),1),t("div",H,[t("div",M,[t("a",{href:"#",class:"text-nowrap btn btn-dark w-100 py-2 vl-parent",onClick:o[1]||(o[1]=l(()=>e.detailProductAddToCart(i.product.id),["prevent"]))},"加入購物車 ")])])])])]),t("section",q,[z,t("div",G,[t("div",J,[h(y,{spaceBetween:30,loop:!0,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},modules:w.modules,onAutoplayTimeLeft:e.onAutoplayTimeLeft,breakpoints:{640:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:3,spaceBetween:40}},class:"mySwiper"},{default:_(()=>[(a(!0),d(m,null,V(i.products,s=>(a(),A(b,{key:s.id},{default:_(()=>[t("div",K,[t("div",Q,[t("a",{href:"#",onClick:l(()=>v.newProduct(s.id),["prevent"])},[t("img",{src:s.imageUrl,class:"card-img-top rounded-0 object-cover",height:"300",alt:"..."},null,8,X),Y],8,W)]),t("div",Z,[t("h4",tt,n(s.title),1),t("p",et,"NT$ "+n(s.price),1),t("a",{href:"#",class:"text-nowrap btn btn-dark w-100 py-2 vl-parent position-relative",onClick:l(()=>e.addToCart(s.id),["prevent"])},[L("加入購物車 "),e.isProductLoad&&s.id===e.productId?(a(),d("div",st,ct)):B("",!0)],8,ot)])])]),_:2},1024))),128))]),_:1},8,["modules","onAutoplayTimeLeft"])])])])],64)}const ht=S(E,[["render",dt]]);export{ht as default};
