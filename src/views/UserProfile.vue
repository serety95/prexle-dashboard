<template>
  <div v-if="user" class="container px-5">
    <div class="row welcome-card">
      <div class="col-12">
        <h2>welcome back {{ user.fullname }}</h2>
      </div>
    </div>
    <div class="row profile-card">
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 px-0">
        <img class="avatar-img" src="https://www.jea.com/cdn/images/avatar/avatar-alt.svg" alt="" srcset="" />
      </div>
      <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 data-container">
        <div class="row">
          <h3 class="profile-title">profile Information</h3>
        </div>
        <div class="row p-3">
          <div class="col-12 data-col">
            <span class="title">full name:</span>
            <span class="value">{{ user.fullname }}</span>
          </div>

          <div class="col-12 data-col">
            <span class="title">email:</span>
            <span class="value">{{ user.email }}</span>
          </div>
          <div class="col-12 data-col">
            <span class="title">gender:</span>
            <span class="value">{{ user.gender == "M" ? "Male" : "Female" }}</span>
          </div>
          <div class="col-12 data-col">
            <span class="title">created At:</span>
            <span class="value">{{ formatDate(user.createdAt) }}</span>
          </div>
          <div class="col-12 data-col">
            <span class="title">updated At:</span>
            <span class="value">{{ formatDate(user.updatedAt) }}</span>
          </div>
          <div class="col-12 data-col">
            <span class="title">account type:</span>
            <span class="value">{{ user.isAdmin ? "Admin" : "User" }}</span>
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
  computed: {
    userInfo() {
      return this.$store.getters.userData;
    },
  },
  mounted() {
    console.log(this.$store.getters.userData);
    userService
      .getUserByToken()
      .then((res) => {
        this.user = res.data.data;
        console.log(this.user);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    formatDate(date) {
      let d = new Date(date);
      return d.toLocaleString();
    },
  },
};
</script>
<style scoped lang="scss">
.welcome-card {
  background: linear-gradient(to right, #32325f 0%, #4989f5 100%);
  border-radius: 15px;
  padding: 15px;
  overflow: hidden;
  margin-top: 20px;
  margin-bottom: 25px;
  box-shadow: 0 2px 4px 0 rgba(50, 50, 95, 0.4);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(50, 50, 95, 0.4);
  }
  h2 {
    letter-spacing: 3px;
    font-weight: 600;
    text-transform: uppercase;
    color: white;
  }
}
.profile-card {
  background-color: #32325f;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(50, 50, 95, 0.4);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(50, 50, 95, 0.4);
  }
  .data-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .profile-title {
      padding: 5px;
      text-transform: capitalize;
      font-weight: 600;
      color: rgb(244, 234, 253);
    }
    .data-col {
      display: flex;
      justify-content: flex-start;
      .title {
        text-transform: capitalize;
        font-size: 18px;
        font-weight: 700;
        color: white;
      }
      .value {
        padding-left: 5px;
        font-size: 18px;
        font-weight: 700;
        color: rgb(244, 234, 253);
      }
    }
  }
}

.avatar-img {
  width: 100%;
  object-fit: cover;
  height: 100%;
  max-height: 375px;
}
</style>
