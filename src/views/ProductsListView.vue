<template>
  <section id="productsListPage">
    <div class="page-title">
      <h2>products List</h2>
    </div>
    <div class="row">
      <div v-for="card in productsList" v-bind:key="card._id" class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 my-2">
        <ProductCard :cardData="card"></ProductCard>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 my-2">
        <div @click="addProduct" class="card add-product-card">
          <span>add new product</span>
          <font-awesome-icon icon="fa-solid fa-square-plus" size="6x" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import ProductCard from "@/components/ProductCard.vue";
import productService from "@/services/productService";

export default {
  name: "ProductsListView",
  components: { ProductCard },
  props: {
    cardsList: Array,
  },
  data: () => ({
    productsList: [],
  }),
  computed: {},
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
  methods: {
    addProduct() {
      this.$router.push({ name: "addProduct" });
    },
  },
};
</script>
<style scoped lang="scss">
.card {
  height: 400px;
  border: 2px solid #32325f77;
  &.add-product-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.fa-square-plus {
  cursor: pointer;
  color: #32325f;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
}
</style>
