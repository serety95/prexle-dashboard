<template>
  <section id="addProductPage" >
    <div class="page-title">
      <h2>add new product</h2>
    </div>

    <form class="form-card" @submit.prevent="addProduct">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="form-group">
              <label for="name">name:</label>
              <input class="form-control" id="name" v-model.trim="name" placeholder="enter product name" type="text" />
              <small class="form-text text-muted" v-if="!$v.name.required">product name is required</small>
              <small class="form-text text-muted" v-if="!$v.name.minLength">product name min Length is 6 chars</small>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="form-group">
              <label for="img-link">image link:</label>
              <input
                class="form-control"
                id="img-link"
                v-model.trim="image"
                placeholder="enter product's img link"
                type="url"
              />
              <small class="form-text text-muted" v-if="!$v.image.required">product image is required</small>
              <small class="form-text text-muted" v-if="!$v.image.url">product img link is not valid</small>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="form-group">
              <label for="price">price:</label>
              <input
                class="form-control"
                id="price"
                v-model.number="price"
                placeholder="enter product price"
                type="number"
              />
              <small class="form-text text-muted" v-if="!$v.price.required">product price is required</small>
              <small class="form-text text-muted" v-if="!$v.price.minValue">product price min value is 1</small>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="form-group">
              <label for="quantity">quantity:</label>
              <input
                class="form-control"
                id="quantity"
                v-model.number="quantity"
                placeholder="enter product quantity"
                type="number"
              />
              <small class="form-text text-muted" v-if="!$v.quantity.required">product quantity is required</small>
              <small class="form-text text-muted" v-if="!$v.quantity.minValue">product quantity min value is 1</small>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-6 mx-auto">
            <button type="submit" :disabled="$v.$invalid" class="w-100 btn btn-outline-primary">add product</button>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import { required, minLength, minValue, url } from "vuelidate/lib/validators";
export default {
  name: "AddProductView",
  components: {},
  data() {
    return {
      name: "",
      image: "",
      price: 0,
      quantity: 0,
      submitStatus: null,
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(6),
    },
    image: {
      required,
      url,
    },
    price: {
      required,
      minValue: minValue(1),
    },
    quantity: {
      required,
      minValue: minValue(1),
    },
  },
  methods: {
    async addProduct() {
      console.log("submit!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";
        console.log(this.$v);
      }
    },
  },
};
</script>
<style scoped lang="scss">


</style>
