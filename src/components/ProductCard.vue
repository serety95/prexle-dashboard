<template>
  <b-card :title="cardData.name" :img-src="cardData.image" img-alt="Image" img-top>

    <b-card-body>

      <b-card-text class="mb-2">price:{{ cardData.price }}</b-card-text>
      <b-card-text>
       quantity:{{ cardData.quantity }}
      </b-card-text>
    </b-card-body>

    <template #footer>
      <small class="text-muted">Last updated 3 mins ago</small>
    </template>
  </b-card>
</template>
<script>
export default {
  name: "ProductCard",
  props: {
    cardData: Object,
  },

  mounted() {
    
  },
};
</script>
<style scoped lang="scss">
.card-img-top {
  height: 300px;
  object-fit: contain;
}
</style>
