<template>
  <section id="registerPage">
    <b-container fluid="sm" class="px-5">
      <div class="register">
        <div class="page-title">
          <h2>{{$t('Register new Account')}}</h2>
        </div>

        <form class="form-card" @submit.prevent="submit">
          <b-container fluid="md" class="container">
            <b-row>
              <b-col xl="6" lg="6" md="6" sm="12" cols="12">
                <div class="form-group">
                  <label for="">{{$t('fullname')}}</label>
                  <input
                    required
                    placeholder="enter your name"
                    class="form-control"
                    v-model.trim="fullname"
                    type="text"
                  />
                  <small class="form-text text-muted" v-if="!$v.fullname.required">fullname is required</small>
                  <small class="form-text text-muted" v-if="!$v.fullname.minLength">min length is 6 chars</small>
                </div>
              </b-col>
              <b-col xl="6" lg="6" md="6" sm="12" cols="12">
                <div class="form-group">
                  <label for="">{{$t("email")}}</label>
                  <input
                    required
                    placeholder="enter your email"
                    class="form-control"
                    v-model.trim="email"
                    type="email"
                  />
                  <small class="form-text text-muted mr-2" v-if="!$v.email.required">Email is required</small>
                  <small class="form-text text-muted" v-if="!$v.email.email">please enter a valid email</small>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col xl="6" lg="6" md="6" sm="12" cols="12">
                <div class="form-group">
                  <label for="password">Password:</label>
                  <input
                    id="password"
                    required
                    placeholder="enter your password"
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
                  <label for="confirmPassword">Confirm Password:</label>
                  <input
                    id="confirmPassword"
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
              <b-col>
                <b-form-group label="Gender:">
                  <b-form-radio
                    :inline="true"
                    v-for="genderOption in genderList"
                    v-bind:key="genderOption.value"
                    v-model="gender"
                    name="genderOption"
                    :value="genderOption.value"
                    >{{ genderOption.displayText }}</b-form-radio
                  >
                </b-form-group>
              </b-col>
            </b-row>
             <b-row class="mt-4">
              <b-col cols="12">
                <span>if you already have an account please <strong class="login-link" @click="login" >login</strong></span>
              </b-col>
            </b-row>
            <b-row class="mt-4">
              <b-col class="mx-auto" xl="6" lg="6" md="6" sm="12" cols="12">
                <b-button class="w-100" type="submit" :disabled="$v.$invalid" variant="outline-primary"
                  >Register</b-button
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
  </section>
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
      gender: "M",
      genderList: [
        { value: "M", displayText: "Male" },
        { value: "F", displayText: "Female" },
      ],
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
        userService
          .registerUser({ email: this.email, password: this.password, fullname: this.fullname, gender: this.gender })
          .then((res) => {
            console.log(res);
            this.submitStatus = res.data.message;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
     login(){
      this.$router.push({ path: "/login" });
    }
  },
};
</script>
<style scoped lang="scss">
.login-link{
  font-weight: 700;
  text-transform: capitalize;
  cursor: pointer;
}

</style>
