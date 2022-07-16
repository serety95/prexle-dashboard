<template>
  <section id="loginPage">
    <b-container fluid="sm" class="px-5">
      <div class="login">
        <h1>User Login</h1>

        <form class="card form-card p-3" @submit.prevent="submit">
          <b-container fluid="md" class="container">
            <b-row>
              <b-col cols="12">
                <div class="form-group">
                  <label for="">Email:</label>
                  <input
                    required
                    placeholder="enter your email"
                    class="form-control"
                    v-model.trim="email"
                    type="email"
                  />
                  <small class="form-text mr-2" v-if="!$v.email.required">Email is required</small>
                  <small class="form-text" v-if="!$v.email.email">please enter a valid email</small>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12">
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
                  <small class="form-text" v-if="!$v.password.required">password is required</small>
                </div>
              </b-col>
            </b-row>

            <b-row class="mt-4">
              <b-col class="mx-auto" xl="6" lg="6" md="6" sm="12" cols="12">
                <b-button class="w-100" type="submit" :disabled="$v.$invalid" variant="outline-primary">Login</b-button>
              </b-col>
            </b-row>
          </b-container>

          <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
        </form>
      </div>
    </b-container>
  </section>
</template>
<script>
import { required, email } from "vuelidate/lib/validators";

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
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        const actionPayload = {
          email: this.email,
          password: this.password,
        };
        this.$store.dispatch("login", actionPayload).then(() => {
          this.$router.push({ path: "/products" });
        });
      }
    },
  },
};
</script>
<style scoped lang="scss">
.form-card {
  background-color: #32325f;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(50, 50, 95, 0.4);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(50, 50, 95, 0.4);
  }
  color: white;
  small {
    color: rgb(244, 234, 253);
  }
  .btn-outline-primary {
    &:disabled {
      cursor: not-allowed;
    }
    font-weight: 700;
    border-color: #6698ff !important;
    color: white;
    &:hover {
      background-color: #6698ff !important;
    }
    &:active {
      outline: none !important;
    }
  }
}

.form-group {
  text-align: start;
  small {
    padding-right: 5px;
  }
}
</style>
