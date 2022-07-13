<template>
  <div v-if="user" class="container">
    <div class="row">
      <div class="col-12">
        <h1>hello to profile</h1>
        <h2>welcome back {{ user.fullname }}</h2>
      </div>
    </div>
    <div  class="row">
      <div class="col-3">
        <div class="row py-3">
            <div class="card"> img</div>
        </div>
      </div>
      <div class="col-9">
        <div class="row p-3">
          <div class="card">
            <div class="col-12">fullname:{{ user.fullname }}</div>
            <div class="col-12">email:{{ user.email }}</div>
            <div class="col-12">gender:{{ user.gender }}</div>
            <div class="col-12">createdAt:{{ user.createdAt }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import userService from "@/services/userService";
export default {
  name: "UserProfile",
  data() {
    return {
      user: null,
    };
  },
  async mounted() {
    let res = await userService.getUserByToken();
    this.user = res.data.data;
    console.log(this.user);
  },
};
</script>
