<template>
  <div class="home">
    <div class="container">
      <div class="data-container">
        <h1>why prexle</h1>
        <p>
          Prexle is a Cloud-Based Point-of-Sale (Cashier) System, designed specifically to meet the needs of the retail
          sector in sales operations and inventory management in order to achieve business goals smoothly and safely,
          wherever you may be.
        </p>
      </div>
      <div class="img-container">
        <img src="https://prexle.com/wp-content/uploads/2021/10/ipad.png" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
<style scoped lang="scss">
.home {
  background: linear-gradient(to right, #32325f 0%, #4989f5 100%);
  height: calc(100vh - 66px);
  .container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .data-container {
      h1 {
        color: white;
        font-size: 64px;
        margin-bottom: 30px;
      }
      p{
        color: white;
        line-height: 2;
      }
    }
    .img-container{
      img{
        max-height: 400px;
      }
    }
  }
}
</style>
