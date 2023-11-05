<script>


import { mapState,mapActions } from 'pinia';
import { RouterLink } from 'vue-router';
const {VITE_URL, VITE_PATH} = import.meta.env;
import cartStore from '@/stores/cart.js';
import AOS from 'aos'
import 'aos/dist/aos.css'
export default{
    data(){
        return{
            product:{},
            products:[],
            perpage:9,
            currentPage:1
        }
    },
    methods:{
        getProducts(){
           const loader = this.$loading.show({
      // Optional parameters
            container: this.fullPage ? null : this.$refs.formContainer,
            canCancel: false,
            onCancel: this.onCancel
          })
            this.$http(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
            .then(res=>{
                this.products =res.data.products
                loader.hide()
               
            })
        },
        setPage(page) {
          if(page <= 0 || page > this.totalPage) {
              return
          }
          this.currentPage = page
        },
        ...mapActions(cartStore,['getCart','addToCart','deleteItem','updateCartItem','deleteCartsItem']),
       
    },
    components:{
      
      RouterLink,
      
    },
    computed:{
        ...mapState(cartStore,['carts','final_total','fullPage','loadingShow','productId','isProductLoad']),
        totalPage() {
        return Math.ceil(this.products.length / this.perpage)
        //Math.ceil()取最小整數
      },
        pageStart() {
        return (this.currentPage - 1) * this.perpage
        //取得該頁第一個值的index
      },
      pageEnd() {
          return this.currentPage * this.perpage
        //取得該頁最後一個值的index
      }
    },
    mounted (){
      
      AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 200, // offset (in px) from the original trigger point
  delay: 300, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
        this.getProducts()
       
    }
}
    

</script>

<template>
  <div >
    <div class="container" >
        <div class="row">
          <h1 class="text-center py-4">星杯冰淇淋</h1>
          <div class="col-md-12" data-aos="fade-up">
            <div class="row" >
              <div class="col-md-4" v-for="product in  products.slice(pageStart,pageEnd) " :key="product.id">
                <div class="card border-0  position-relative  ">
                  <RouterLink :to="`/products/${product.id}`">
                    <img :src="product.imageUrl" class="card-img-top rounded-0 object-cover " height="300" alt="...">
                    <div class="content position-absolute d-flex justify-content-center align-items-center">
                      <h1>商品資訊</h1>
                    </div>
                  </RouterLink>
                </div>
                <div class="card-body pt-0 mb-6 bg-primary ">
                    <h4 class="mb-2 pt-3 text-center">
                        {{ product.title }}
                    </h4>
                    <p class="card-text mb-2 text-center">NT$ {{ product.price }}</p>
                      <a href="#" class="text-nowrap btn btn-dark w-100 py-2 vl-parent  position-relative" 
                          @click.prevent="()=>addToCart(product.id)">加入購物車
                          <div class="loader" v-if = "isProductLoad && product.id=== productId">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav aria-label="Page navigation example ">
          <ul class="pagination justify-content-center mb-6">
            <li class="page-item" @click.prevent="setPage(currentPage-1)">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item" :class="{'active': (currentPage === (n))}"
                v-for="(n, index) in totalPage" :key="index" @click.prevent="setPage(n)">
              <a class="page-link" href="#">{{ n }}</a>
            </li>
            <li class="page-item" @click.prevent="setPage(currentPage+1)">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
       
    </div>
  </div>
      
</template>    