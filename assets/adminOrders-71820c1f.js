import{_ as m,o as a,c as i,e as t,F as u,h as b,t as o,n as g,g as k,J as v,k as x}from"./index-c7316edf.js";const{VITE_URL:h,VITE_PATH:_}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"tomyalan978",BASE_URL:"/vite-deploy-5",MODE:"production",DEV:!1,PROD:!0,SSR:!1};let p={};const y={data(){return{orders:[],product:{},products:[],final_total:0,qty:0,user:{},id:"",isChecked:!1,order_id:"",selectedOrders:[]}},methods:{getOrderAll(){this.$http(`${h}/v2/api/${_}/admin/orders`).then(e=>{console.log(e),this.orders=e.data.orders})},getOrder(e){this.$http(`${h}/v2/api/${_}/order/${e}`).then(l=>{this.products=l.data.order.products,this.user=this.user=l.data.order.user,console.log("products:",this.products)})},delteOrder(e){this.id=e,this.$http.delete(`${h}/v2/api/${_}/admin/order/${e}`).then(l=>{console.log(l),this.getOrderAll()})},deleteAllOrder(){this.$http.delete(`${h}v2/api/${_}/admin/orders/all`).then(e=>{console.log(e)})},openModal(e){this.getOrder(e),p.show(e)},handleCheckboxChange(e){this.order_id=e,this.isChecked=!this.isChecked},toggleCheckboxStyle(e){const l=this.selectedOrders.includes(e),c=document.querySelector(`input[value="${e}"]`);l?c.classList.add("selected-checkbox"):c.classList.remove("selected-checkbox")}},mounted(){var l;const e=(l=document.cookie.split("; ").find(c=>c.startsWith("allenToken=")))==null?void 0:l.split("=")[1];this.$http.defaults.headers.common.Authorization=e,this.getOrderAll(),p=new bootstrap.Modal(document.getElementById("orderModal"),{keyboard:!1})}},f={class:"container"},O={class:"text-end mt-4"},C={class:"card-body p-0 mt-4"},E={class:"table-responsive"},M={class:"table table-hover mb-0"},A=t("thead",{class:"bg-light"},[t("tr",{class:"align-middle"},[t("th",{scope:"col",class:"py-3"},"配送狀態"),t("th",{scope:"col",class:"py-3"},"訂單編號"),t("th",{scope:"col"},"Email"),t("th",{scope:"col"},"用戶姓名"),t("th",{scope:"col"},"付款狀態"),t("th",{scope:"col"},"購滿金額"),t("th",{scope:"col",class:"pe-4"},"編輯")])],-1),$={class:"text-nowrap"},V={scope:"row",class:"ps-4"},w=["value","onClick"],L={scope:"row"},S=t("td",null,"尚未付款",-1),T=t("td",{class:"text-start"},"900",-1),B={class:"pe-4"},D={class:"btn-group"},R=["onClick"],I=t("i",{class:"bi bi-pen"},null,-1),U=["onClick"],q={class:"modal fade",id:"orderModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},P={class:"modal-dialog"},z={class:"modal-content"},F=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},"Modal title"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),H={class:"modal-body"},N={class:"table table-borderless mb-5"},J=t("thead",{class:"bg-main-light"},[t("tr",null,[t("th",{class:""}," 品名 "),t("th",{class:"text-start"}," 數量 "),t("th",{class:"text-right"}," 總價 ")])],-1),W={class:"font-weight-bolder"},j={class:"text-start"},G={class:"text-right"},K=t("td",{colspan:"2",class:"text-right"}," 總計 ",-1),Q={class:"text-right"},X={class:"table mb-5"},Y=t("tr",null,[t("th",{width:"130"}," Email "),t("td",null,"tt1235478@gmail.com")],-1),Z=t("th",null,"姓名",-1),tt=t("th",null,"收件人電話",-1),et=t("th",null,"收件人地址",-1),st=t("th",null,"付款狀態",-1),lt={class:"text-danger"},ot=t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close")],-1);function dt(e,l,c,ct,d,n){return a(),i(u,null,[t("div",f,[t("div",O,[t("button",{class:"btn btn-primary",onClick:l[0]||(l[0]=(...s)=>n.deleteAllOrder&&n.deleteAllOrder(...s))}," 刪除所有訂單 ")]),t("div",C,[t("div",E,[t("table",M,[A,t("tbody",$,[(a(!0),i(u,null,b(d.orders,s=>(a(),i("tr",{class:g(["clickable",{"selected-checkbox":d.selectedOrders.includes(s.id)}]),key:s.id},[t("td",V,[k(t("input",{type:"checkbox",value:s.id,"onUpdate:modelValue":l[1]||(l[1]=r=>d.selectedOrders=r),onClick:r=>n.toggleCheckboxStyle(s.id)},null,8,w),[[v,d.selectedOrders]])]),t("td",L,o(s.create_at),1),t("td",null,o(s.user.email),1),t("td",null,o(s.user.name),1),S,T,t("td",B,[t("div",D,[t("a",{href:"#",class:"btn btn-sm btn-outline-dark",onClick:r=>n.openModal(s.id)},[x(" 編輯 "),I],8,R),t("a",{href:"#",class:"btn btn-sm btn-outline-danger text-danger",onClick:r=>n.delteOrder(s.id)}," 刪除訂單 ",8,U)])])],2))),128))])])])])]),t("div",q,[t("div",P,[t("div",z,[F,t("div",H,[t("table",N,[J,(a(!0),i(u,null,b(d.products,s=>(a(),i("tbody",{key:s.id},[t("tr",null,[t("td",W,o(s.product.title),1),t("td",j,o(s.qty),1),t("td",G,o(s.product.price),1)])]))),128)),t("tfoot",null,[t("tr",null,[K,t("td",Q,o(),1)])])]),t("table",X,[t("tbody",null,[Y,t("tr",null,[Z,t("td",null,o(d.user.name),1)]),t("tr",null,[tt,t("td",null,o(d.user.tel),1)]),t("tr",null,[et,t("td",null,o(d.user.address),1)]),t("tr",null,[st,t("td",lt,o(),1)])])])]),ot])])])],64)}const at=m(y,[["render",dt]]);export{at as default};