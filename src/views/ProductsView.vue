<template>
  <div class="products">
    <h1>welcome to products</h1>
    <div class="container">
      <div class="row">
        <div v-for="card in productsList" v-bind:key="card._id" class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 my-2">
          <ProductCard :cardData="card"></ProductCard>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 my-2">
          <div class="card">add product</div>
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
  mounted() {
    const loadProducts = async () => {
      try {
        const res = await productService.getAllProducts();
        this.productsList = res.data.data;
      } catch (err) {
        console.log(err);
      }
    };
    loadProducts();
  },
};
</script>
<style scoped>
.card {
  height: 500px;
}
</style>
