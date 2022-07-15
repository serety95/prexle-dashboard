<template>
  <div class="products">
    <h1>welcome to products</h1>
    <div v-if="isLoggedIn" class="container">
      <div class="row">
        <div v-for="card in productsList" v-bind:key="card._id" class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 my-2">
          <ProductCard :cardData="card"></ProductCard>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 my-2">
          <div class="card add-product-card">
            <span>add new product</span>
            <font-awesome-icon icon="fa-solid fa-square-plus" size="6x" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from "@/components/ProductCard.vue";
import productService from "@/services/productService";
export default {
  name: "ProductsView",
  components: { ProductCard },
  props: {
    cardsList: Array,
  },
  data: () => ({
    productsList: [],
    user: null,
  }),
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  mounted() {
    productService
      .getAllProducts()
      .then((res) => {
        this.productsList = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style scoped lang="scss">
.card {
  height: 400px;
  &.add-product-card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.fa-square-plus {
  cursor: pointer;
  &:hover {
    color: #008080;
  }
}
</style>
