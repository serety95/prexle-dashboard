<template>
  <b-container fluid="sm" class="px-5">
    <div class="login">
      <h1>welcome to login page</h1>

      <b-form @submit.prevent="submit">
        <b-row>
          <b-form-group
            class="col-12 d-flex justify-content-center flex-column align-items-start"
            :class="{ 'form-group--error': $v.email.$error }"
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            ><b-form-input
              id="input-1"
              type="email"
              required
              placeholder="Enter your Email"
              v-model.trim="$v.email.$model"
            ></b-form-input>
            <div class="error" v-if="!$v.email.required">Email is required</div>
            <div class="error" v-if="!$v.email.email">please enter a valid email</div>
          </b-form-group>
        </b-row>
        <b-row>
          <b-form-group
            :class="{ 'form-group--error': $v.password.$error }"
            id="input-group-2"
            label="password:"
            label-for="input-2"
            ><b-form-input
              id="input-2"
              type="password"
              required
              placeholder="Enter your password"
              v-model.trim="$v.password.$model"
            ></b-form-input>
            <div class="error" v-if="!$v.email.required">password is required</div>
          </b-form-group>
        </b-row>
        <b-button
          type="submit"
          :disabled="submitStatus === 'ERROR' || submitStatus === 'PENDING'"
          variant="outline-primary"
          >Login</b-button
        >

        <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
        <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
        <p>{{ submitStatus }}</p>
      </b-form>
    </div>
  </b-container>
</template>
<script>
import { required, email } from "vuelidate/lib/validators";
import userService from "../services/userService";
export default {
  data() {
    return {
      email: "",
      password: "",
      submitStatus: null,
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
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
        console.log(this.email, this.password);
        const res = await userService.login({
          email: this.email,
          password: this.password,
        });
        console.log(res.data);
        userService.setToken(res.data.data.token);

        this.submitStatus = res.data.message;
      }
    },
  },
};
</script>
