import{_ as b,a as m,m as u,b as g,r as f,o as n,c as a,e as t,f as w,n as i,F as c,h as r,t as l,d as v,w as C,g as k,G as y,k as x}from"./index-c7316edf.js";import{c as h}from"./cart-84756834.js";import"./sweetalert2.all-aa99cbf5.js";const $={components:{RouterLink:m},computed:{...u(h,["carts","final_total"])},methods:{...g(h,["getCart","addToCart","deleteItem","updateCartItem","changeCartItem","deleteCartsItem"]),loaderCartview(){const s=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:!0,onCancel:this.onCancel});this.getCart(),s.hide()},routerLook(){this.$router.push({path:"/products"})}},mounted(){this.loaderCartview()}},I={class:""},L={class:"container"},V={class:"row"},N={class:"d-flex justify-content-between my-4"},S=t("h3",{class:"mt-3 mb-4"},"購物車",-1),j={key:0,class:"col-md-12 text-center align-items-center"},B=t("h2",null,"購物車沒有產品",-1),R={key:1,class:"col-md-8"},T={class:"table text-nowrap"},U={scope:"row",class:"border-0 px-0 font-weight-normal py-4"},q=["src"],D={class:"mb-0 fw-bold ms-3 d-inline-block"},F={class:"border-0 align-middle",style:{"max-width":"160px"}},M={class:"input-group pe-5"},z=t("div",{class:"input-group-prepend"},null,-1),A=["onUpdate:modelValue","disabled","onChange"],E=["value"],G=t("div",{class:"input-group-append"},null,-1),P={class:"border-0 align-middle"},H={class:"mb-0 ms-auto"},J={class:"border-0 align-middle"},K=["onClick","disabled"],O=t("i",{class:"bi bi-x-lg"},null,-1),Q=[O],W={class:"border p-4 mb-4 bg-light"},X=t("h4",{class:"fw-bold mb-4"},"訂單摘要",-1),Y={class:"table text-muted border-bottom"},Z=t("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"},"小計",-1),tt={class:"text-end border-0 px-0 pt-4"},st=t("tr",null,[t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"運費"),t("td",{class:"text-end border-0 px-0 pt-0 pb-4"},"NT$0")],-1),et={class:"d-flex justify-content-between mt-4"},ot=t("p",{class:"mb-0 h4 fw-bold"},"總計",-1),nt={class:"mb-0 h4 fw-bold"};function at(s,d,lt,dt,it,_){const p=f("RouterLink");return n(),a("div",I,[t("div",L,[t("div",V,[t("div",N,[S,t("button",{onClick:d[0]||(d[0]=w(()=>s.deleteCartsItem(),["prevent"])),class:i(["mt-3 mb-4 bg-success text-white",{"d-none":s.carts.length===0}])},"清除購物車",2)]),s.carts.length===0?(n(),a("div",j,[B,t("a",{href:"#",class:"btn btn-to-shop btn-outline bg-success text-white px-7 mt-4 mb-8",onClick:d[1]||(d[1]=e=>_.routerLook()),"data-bs-dismiss":"offcanvas"},"來去看看")])):(n(),a("div",R,[t("table",T,[t("tbody",null,[(n(!0),a(c,null,r(s.carts,e=>(n(),a("tr",{key:e.id,class:"border-bottom border-top"},[t("th",U,[t("img",{src:e.product.imageUrl,style:{width:"72px",height:"72px","object-fit":"cover"}},null,8,q),t("p",D,l(e.product.title),1)]),t("td",F,[t("div",M,[z,k(t("select",{name:"",id:"",class:"form-control","onUpdate:modelValue":o=>e.qty=o,disabled:e.id===s.loadingItem,onChange:o=>s.changeCartItem(e)},[(n(),a(c,null,r(20,o=>t("option",{value:o,key:o+"12345678"},l(o),9,E)),64))],40,A),[[y,e.qty]]),G])]),t("td",P,[t("p",H,l(s.carts.final_total),1)]),t("td",J,[t("button",{type:"button",class:"btn btn-outline-success btn-sm",onClick:o=>s.deleteItem(e),disabled:e.id===s.loadingItem},Q,8,K)])]))),128))])])])),t("div",{class:i(["col-md-4",{"d-none":s.carts.length===0}])},[t("div",W,[X,t("table",Y,[t("tbody",null,[t("tr",null,[Z,t("td",tt,l(s.final_total),1)]),st])]),t("div",et,[ot,t("p",nt,l(s.final_total),1)]),v(p,{class:"btn btn-outline-success btn-lg w-100 my-4",to:"/form"},{default:C(()=>[x("下一頁")]),_:1})])],2)])])])}const _t=b($,[["render",at]]);export{_t as default};
