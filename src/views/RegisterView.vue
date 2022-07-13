<template>
  <b-container fluid="sm" class="px-5">
    <div class="register">
      <h1>Register new Account</h1>

      <form class="card p-3" @submit.prevent="submit">
        <b-container fluid="md" class="container">
          <b-row>
            <b-col xl="6" lg="6" md="6" sm="12" cols="12">
              <div class="form-group">
                <label for="">fullname:</label>
                <input class="form-control" v-model.trim="fullname" type="text" />
                <small class="form-text text-muted" v-if="!$v.fullname.required">fullname is required</small>
                <small class="form-text text-muted" v-if="!$v.fullname.minLength">min length is 6 chars</small>
              </div>
            </b-col>
            <b-col xl="6" lg="6" md="6" sm="12" cols="12">
              <div class="form-group">
                <label for="">Email:</label>
                <input required placeholder="enter your email" class="form-control" v-model.trim="email" type="email" />
                <small class="form-text text-muted mr-2" v-if="!$v.email.required">Email is required</small>
                <small class="form-text text-muted" v-if="!$v.email.email">please enter a valid email</small>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col xl="6" lg="6" md="6" sm="12" cols="12">
              <div class="form-group">
                <label for="">Password:</label>
                <input
                  required
                  placeholder="Enter your password"
                  class="form-control"
                  v-model.trim="password"
                  type="password"
                />
                <small class="form-text text-muted" v-if="!$v.password.required">password is required</small>
                <small class="form-text text-muted" v-if="!$v.password.minLength">min length is 6 chars</small>
              </div>
            </b-col>
            <b-col xl="6" lg="6" md="6" sm="12" cols="12">
              <div class="form-group">
                <label for="">Confirm Password:</label>
                <input
                  required
                  placeholder="confirm your password"
                  class="form-control"
                  v-model.trim="confirmPassword"
                  type="password"
                />
                <small class="form-text text-muted pr-1" v-if="!$v.confirmPassword.required"
                  >confirm Password is required</small
                >
                <small class="form-text text-muted" v-if="!$v.confirmPassword.sameAsPassword"
                  >password dont match</small
                >
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col> </b-col>
          </b-row>
          <b-row class="mt-4">
            <b-col class="mx-auto" xl="6" lg="6" md="6" sm="12" cols="12">
              <b-button
              class="w-100"
                type="submit"
                :disabled="submitStatus === 'ERROR' || submitStatus === 'PENDING'"
                variant="outline-primary"
                >Login</b-button
              >
            </b-col>
          </b-row>
        </b-container>

        <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
        <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
        <p>{{ submitStatus }}</p>
      </form>
    </div>
  </b-container>
</template>
<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import userService from "../services/userService";
export default {
  data() {
    return {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      submitStatus: null,
    };
  },
  validations: {
    fullname: {
      required,
      minLength: minLength(6),
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
    },
    confirmPassword: {
      required,
      sameAsPassword: sameAs("password"),
    },
    gender: {
      required,
    },
  },
  methods: {
    async submit() {
      console.log("submit!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";
        console.log(this.$v);
        console.log(this.email, this.password, this.fullname);
        userService
          .registerUser({ email: this.email, password: this.password, fullname: this.fullname })
          .then((res) => {
            console.log(res);
            this.submitStatus = res.data.message;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>
<style scoped lang="scss">
.form-group {
  text-align: start;
  small {
    padding-right: 5px;
  }
}
</style>
