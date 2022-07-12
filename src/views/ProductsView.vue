<template>
  <div class="products">
    <h1>welcome to products</h1>
    <div class="container">
      <div class="row">
        <div v-for="card in cardsList" v-bind:key="card._id" class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 my-2">
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
export default {
  name: "ProductsView",
  components: { ProductCard },
  data: () => ({
    cardsList: [
      {
        _id: "60b4dd6c722c1315a8e1e124",
        image: "https://res.cloudinary.com/dylpruvgb/image/upload/v1622547314/kbnuby45zoellhrtrger.jpg",
        cloudinary_id: "kbnuby45zoellhrtrger",
        name: "clam knife",
        price: 3500,
        quantity: 9,
        createdAt: "2021-05-31T12:58:20.122Z",
        updatedAt: "2021-06-21T17:30:24.760Z",
        __v: 0,
      },
      {
        _id: "60b4e7b41239a11ff4139d4a",
        image: "https://res.cloudinary.com/dylpruvgb/image/upload/v1622468536/ysdzchqrbcxd7mj3nhxg.jpg",
        cloudinary_id: "ysdzchqrbcxd7mj3nhxg",
        name: "meat cleaver",
        price: 2000,
        quantity: 3,
        createdAt: "2021-05-31T13:42:12.706Z",
        updatedAt: "2021-05-31T13:42:12.706Z",
        __v: 0,
      },
      {
        _id: "60b613c239f8d201c4859beb",
        image: "https://res.cloudinary.com/dylpruvgb/image/upload/v1622545350/yuvtlgmvmb8vgaccmuba.jpg",
        cloudinary_id: "yuvtlgmvmb8vgaccmuba",
        name: "meat cleaver",
        price: 2000,
        quantity: 3,
        createdAt: "2021-06-01T11:02:26.046Z",
        updatedAt: "2021-06-01T11:02:26.046Z",
        __v: 0,
      },
      {
        _id: "60b614fd7fff7d3474f9e8ab",
        image: "https://res.cloudinary.com/dylpruvgb/image/upload/v1622545666/nv7pazxnjn3dwtbm0pob.jpg",
        cloudinary_id: "nv7pazxnjn3dwtbm0pob",
        name: "meat cleaver",
        price: 2000,
        quantity: 3,
        createdAt: "2021-06-01T11:07:41.943Z",
        updatedAt: "2021-06-01T11:07:41.943Z",
        __v: 0,
      },
      {
        _id: "60c0965547a8bc36e402363b",
        image: "https://res.cloudinary.com/dylpruvgb/image/upload/v1623234133/yzzdlsm34wqpjxswagj5.jpg",
        cloudinary_id: "yzzdlsm34wqpjxswagj5",
        name: "chef's knife",
        price: 1400,
        quantity: 3,
        createdAt: "2021-06-09T10:22:13.421Z",
        updatedAt: "2021-06-09T10:22:13.421Z",
        __v: 0,
      },
      {
        _id: "60c0ef8e76d28527a405e2d3",
        image: "https://res.cloudinary.com/dylpruvgb/image/upload/v1623256974/odzcedupjvetprqkidai.jpg",
        cloudinary_id: "odzcedupjvetprqkidai",
        name: "chef's knife",
        price: 1400,
        quantity: 3,
        createdAt: "2021-06-09T16:42:54.527Z",
        updatedAt: "2021-06-09T16:42:54.527Z",
        __v: 0,
      },
      {
        _id: "60c1d92891f43604d0d943c7",
        image: "https://res.cloudinary.com/dylpruvgb/image/upload/v1623316776/hechvshu6iuxcnn3sfkf.jpg",
        cloudinary_id: "hechvshu6iuxcnn3sfkf",
        name: "chef's knife",
        price: 1400,
        quantity: 3,
        createdAt: "2021-06-10T09:19:36.120Z",
        updatedAt: "2021-06-10T09:19:36.120Z",
        __v: 0,
      },
      {
        _id: "60c22880f4c8fc07d8e99078",
        image: "https://res.cloudinary.com/dylpruvgb/image/upload/v1623337088/rqfui0pso9nqtuwvilfh.jpg",
        cloudinary_id: "rqfui0pso9nqtuwvilfh",
        name: "chef's knife",
        price: 1400,
        quantity: 3,
        createdAt: "2021-06-10T14:58:08.250Z",
        updatedAt: "2021-06-10T14:58:08.250Z",
        __v: 0,
      },
      {
        _id: "60d0cc889640721e88eba2dd",
        image: "https://res.cloudinary.com/dylpruvgb/image/upload/v1624296585/nwbuj3dbvl2i7jurlof7.jpg",
        cloudinary_id: "nwbuj3dbvl2i7jurlof7",
        name: "chef's knife",
        price: 1400,
        quantity: 3,
        createdAt: "2021-06-21T17:29:44.923Z",
        updatedAt: "2021-06-21T17:29:44.923Z",
        __v: 0,
      },
    ],
    user: null,
  }),
};
</script>
<style scoped >
.card{
    height: 500px;
}
</style>