<template>
  <b-card :title="cardData.name" :img-src="cardData.image" img-alt="Image" img-top>
    <b-card-body>
      <b-card-text class="mb-2">price:{{ cardData.price }}</b-card-text>
      <b-card-text> quantity:{{ cardData.quantity }} </b-card-text>
    </b-card-body>
    <template #footer>
      <small class="text-muted"
        >Last updated 3 mins ago
        <font-awesome-icon icon="fa-solid fa-pen-to-square" />
        <font-awesome-icon icon="fa-solid fa-trash-can" />
      </small>
    </template>
  </b-card>
</template>
<script>
export default {
  name: "ProductCard",
  props: {
    cardData: Object,
  },

  mounted() {},
};
</script>
<style scoped lang="scss">
.card-img-top {
  height: 200px;
  object-fit: contain;
}
.fa-trash-can {
    cursor: pointer;
  &:hover {
    color: rgb(233, 49, 42);
  }
}
.fa-pen-to-square {
    cursor: pointer;
  &:hover {
    color: #008080;
  }
}
</style>
