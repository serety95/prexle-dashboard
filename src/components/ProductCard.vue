<template>
  <b-card :title="cardData.name" :img-src="cardData.image" img-alt="Image" img-top>
    <b-card-body>
      <b-card-text class="mb-2">price:{{ cardData.price }}</b-card-text>
      <b-card-text> quantity:{{ cardData.quantity }} </b-card-text>
    </b-card-body>
    <template #footer>
      <small class="text-muted"
        >Last updated in {{ calcUpdatedDate(cardData.updatedAt) }} days
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
  methods: {
    calcUpdatedDate(date) {
      let oldDate = new Date(date).getTime();
      let newDate = new Date().getTime();
      let difference = Math.abs(oldDate - newDate);
      let days = (difference / (1000 * 3600 * 24)).toFixed(0);
      return days;
    },
  },
};
</script>
<style scoped lang="scss">
.card-body {
  padding: 0;
  .card-title {
    background-color: #32325f !important;
    color: white;
    font-weight: 700;
    padding: 10px 0px;
    text-transform: capitalize;
  }
}
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
