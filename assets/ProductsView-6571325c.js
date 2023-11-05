import{_ as m,b as g,a as f,m as v,r as P,o as n,c as r,e,F as d,h as u,f as l,d as C,w as b,t as c,k,i as y,n as x}from"./index-c7316edf.js";import{c as p}from"./cart-84756834.js";import{A as E}from"./aos-d71fc3a2.js";import"./sweetalert2.all-aa99cbf5.js";const{VITE_URL:w,VITE_PATH:L}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"tomyalan978",BASE_URL:"/vite-deploy-5",MODE:"production",DEV:!1,PROD:!0,SSR:!1},S={data(){return{product:{},products:[],perpage:9,currentPage:1}},methods:{getProducts(){const s=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:!1,onCancel:this.onCancel});this.$http(`${w}/v2/api/${L}/products/all`).then(a=>{this.products=a.data.products,s.hide()})},setPage(s){s<=0||s>this.totalPage||(this.currentPage=s)},...g(p,["getCart","addToCart","deleteItem","updateCartItem","deleteCartsItem"])},components:{RouterLink:f},computed:{...v(p,["carts","final_total","fullPage","loadingShow","productId","isProductLoad"]),totalPage(){return Math.ceil(this.products.length/this.perpage)},pageStart(){return(this.currentPage-1)*this.perpage},pageEnd(){return this.currentPage*this.perpage}},mounted(){E.init({disable:!1,startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:200,delay:300,duration:1e3,easing:"ease",once:!0,mirror:!1,anchorPlacement:"top-bottom"}),this.getProducts()}},T={class:"container"},V={class:"row"},I=e("h1",{class:"text-center py-4"},"星杯冰淇淋",-1),N={class:"col-md-12","data-aos":"fade-up"},R={class:"row"},D={class:"card border-0 position-relative"},A=["src"],M=e("div",{class:"content position-absolute d-flex justify-content-center align-items-center"},[e("h1",null,"商品資訊")],-1),O={class:"card-body pt-0 mb-6 bg-primary"},B={class:"mb-2 pt-3 text-center"},U={class:"card-text mb-2 text-center"},$=["onClick"],j={key:0,class:"loader"},F=e("span",null,null,-1),H=e("span",null,null,-1),z=e("span",null,null,-1),q=[F,H,z],G={"aria-label":"Page navigation example "},J={class:"pagination justify-content-center mb-6"},K=e("a",{class:"page-link",href:"#","aria-label":"Previous"},[e("span",{"aria-hidden":"true"},"«")],-1),Q=[K],W=["onClick"],X={class:"page-link",href:"#"},Y=e("a",{class:"page-link",href:"#","aria-label":"Next"},[e("span",{"aria-hidden":"true"},"»")],-1),Z=[Y];function ee(s,a,te,se,i,o){const h=P("RouterLink");return n(),r("div",null,[e("div",T,[e("div",V,[I,e("div",N,[e("div",R,[(n(!0),r(d,null,u(i.products.slice(o.pageStart,o.pageEnd),t=>(n(),r("div",{class:"col-md-4",key:t.id},[e("div",D,[C(h,{to:`/products/${t.id}`},{default:b(()=>[e("img",{src:t.imageUrl,class:"card-img-top rounded-0 object-cover",height:"300",alt:"..."},null,8,A),M]),_:2},1032,["to"])]),e("div",O,[e("h4",B,c(t.title),1),e("p",U,"NT$ "+c(t.price),1),e("a",{href:"#",class:"text-nowrap btn btn-dark w-100 py-2 vl-parent position-relative",onClick:l(()=>s.addToCart(t.id),["prevent"])},[k("加入購物車 "),s.isProductLoad&&t.id===s.productId?(n(),r("div",j,q)):y("",!0)],8,$)])]))),128))])])]),e("nav",G,[e("ul",J,[e("li",{class:"page-item",onClick:a[0]||(a[0]=l(t=>o.setPage(i.currentPage-1),["prevent"]))},Q),(n(!0),r(d,null,u(o.totalPage,(t,_)=>(n(),r("li",{class:x(["page-item",{active:i.currentPage===t}]),key:_,onClick:l(ae=>o.setPage(t),["prevent"])},[e("a",X,c(t),1)],10,W))),128)),e("li",{class:"page-item",onClick:a[1]||(a[1]=l(t=>o.setPage(i.currentPage+1),["prevent"]))},Z)])])])])}const le=m(S,[["render",ee]]);export{le as default};