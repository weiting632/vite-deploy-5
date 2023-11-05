<script>
import { mapState,mapActions } from 'pinia';
import {  RouterLink } from 'vue-router';
// const {VITE_URL, VITE_PATH} = import.meta.env;
import cartStore from '@/stores/cart.js'
export default{
    components:{
       RouterLink
    },
    computed:{
        ...mapState(cartStore,['carts','final_total'])
    },
    methods:{
        ...mapActions(cartStore,['getCart','addToCart','deleteItem','updateCartItem','changeCartItem','deleteCartsItem']),
        loaderCartview(){
          const loader = this.$loading.show({
              // Optional parameters
              container: this.fullPage ? null : this.$refs.formContainer,
              canCancel: true,
              onCancel: this.onCancel
          })
          this.getCart()
          loader.hide()
        },
        routerLook(){
          this.$router.push({path:`/products`})
        }
    },
    mounted(){
      this.loaderCartview()
        
        
    }
}
</script>


<template>
  <div class="">
    <div class="container">
    <div class="row">
      <div class=" d-flex justify-content-between my-4">
        <h3 class="mt-3 mb-4">購物車</h3>
        <button @click.prevent="()=>deleteCartsItem()" class="mt-3 mb-4 bg-success text-white" :class="{'d-none': carts.length ===0 }">清除購物車</button>
      </div>
      <!-- 如果購物車沒有產品顯示這個 -->
      <div class="col-md-12 text-center align-items-center" v-if="carts.length===0">
         <h2>購物車沒有產品</h2>
         <a href="#" class="btn btn-to-shop btn-outline  bg-success text-white px-7 mt-4 mb-8" @click="routerLook()" data-bs-dismiss="offcanvas">來去看看</a>
      </div>
      <!-- 有購物車友產品顯示下面的 -->
      <div class="col-md-8" v-else>
        <table class="table text-nowrap">
              <tbody>
                <tr  v-for="item in carts" :key="item.id" class="border-bottom border-top" >
                  <th scope="row" class="border-0 px-0 font-weight-normal py-4">
                    <img :src="item.product.imageUrl" style="width: 72px; height: 72px; object-fit: cover;" >
                    <p class="mb-0 fw-bold ms-3 d-inline-block ">{{item.product.title}}</p>
                  </th>
                  <td class="border-0 align-middle" style="max-width: 160px;">
                    <div class="input-group pe-5">
                      <div class="input-group-prepend">
                      </div>
                      <select name="" id="" class="form-control" v-model=" item.qty"
                        :disabled="item.id === loadingItem"
                        @change="changeCartItem(item)">
                        <option :value="i" v-for="i in 20" :key="i + '12345678'">{{i}}</option>
                      </select>
                      <div class="input-group-append">
                      </div>
                    </div>
                  </td>
                  <td class="border-0 align-middle"><p class="mb-0 ms-auto">{{carts.final_total}}</p></td>
                  <td class="border-0 align-middle">
                    <button type="button" class="btn btn-outline-success btn-sm " @click = "deleteItem(item)" :disabled="item.id === loadingItem">
                      <i class="bi bi-x-lg"></i>
                    </button>
                  </td>
                </tr>
               
              </tbody>
        </table>
      </div>
      <div class="col-md-4" :class="{'d-none': carts.length ===0 }" >
        <div class="border p-4 mb-4 bg-light">
              <h4 class="fw-bold mb-4 ">訂單摘要</h4>
              <table class="table text-muted border-bottom ">
                <tbody>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">小計</th>
                    <td class="text-end border-0 px-0 pt-4">{{ final_total }}</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">運費</th>
                    <td class="text-end border-0 px-0 pt-0 pb-4">NT$0</td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-between mt-4 ">
                <p class="mb-0 h4 fw-bold">總計</p>
                <p class="mb-0 h4 fw-bold">{{ final_total }}</p>
              </div>
              <RouterLink class ="btn btn-outline-success btn-lg w-100 my-4"  to="/form">下一頁</RouterLink>
            </div>
      </div>
    </div>
  </div>
  </div>
  
   
</template>