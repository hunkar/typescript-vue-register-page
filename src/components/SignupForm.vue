<template>
  <section class="col-sm-4 col-10 m-auto">
    <!-- Form -->
    <form @submit.prevent="onSubmit">
      <!-- Email -->
      <div class="mb-3" :class="{ error: v$.form.email.$errors.length }">
        <input
          id="email"
          class="form-control"
          type="email"
          v-model="v$.form.email.$model"
          :placeholder="$t('placeholders.email')"
        />
        <!-- error message -->
        <div
          class="input-errors"
          v-for="(error, index) of v$.form.email.$errors"
          :key="index"
        >
          <div class="error-msg invalid-feedback">{{ error.$message }}</div>
        </div>
      </div>

      <!-- First name -->
      <div class="mb-3" :class="{ error: v$.form.firstName.$errors.length }">
        <input
          id="firstName"
          class="form-control"
          type="firstName"
          v-model="v$.form.firstName.$model"
          :placeholder="$t('placeholders.firstName')"
        />
        <!-- error message -->
        <div
          class="input-errors"
          v-for="(error, index) of v$.form.firstName.$errors"
          :key="index"
        >
          <div class="error-msg invalid-feedback">{{ error.$message }}</div>
        </div>
      </div>

      <!-- Last name -->
      <div class="mb-3" :class="{ error: v$.form.lastName.$errors.length }">
        <input
          id="lastName"
          class="form-control"
          type="lastName"
          v-model="v$.form.lastName.$model"
          :placeholder="$t('placeholders.lastName')"
        />
        <!-- error message -->
        <div
          class="input-errors"
          v-for="(error, index) of v$.form.lastName.$errors"
          :key="index"
        >
          <div class="error-msg invalid-feedback">{{ error.$message }}</div>
        </div>
      </div>

      <!-- Password -->
      <div
        class="mb-3 password-input-container"
        :class="{ error: v$.form.password.$errors.length }"
      >
        <!-- Password field as a password input -->
        <input
          v-if="showPassword"
          id="password"
          class="form-control"
          type="text"
          v-model="v$.form.password.$model"
          :placeholder="$t('placeholders.password')"
        />
        <!-- Password field as an text input -->
        <input
          v-else
          id="password"
          class="form-control"
          type="password"
          v-model="v$.form.password.$model"
          :placeholder="$t('placeholders.password')"
        />
        <!-- Icon for the showing/hiding password -->
        <font-awesome-icon
          id="passwordVisibilityIcon"
          class="password-eye-icon"
          @click="toggleShow"
          :icon="showPassword ? 'fa-eye-slash' : 'fa-eye'"
        />

        <!-- error message -->
        <div
          class="input-errors"
          v-for="(error, index) of v$.form.password.$errors"
          :key="index"
        >
          <div class="error-msg invalid-feedback">{{ error.$message }}</div>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="mb-3">
        <button
          :disabled="v$.form.$invalid"
          class="btn btn-primary"
          id="registerSubmitBtn"
        >
          {{ $t("labels.registerButton") }}
        </button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import i18n from "@/i18n";
import { library } from "@fortawesome/fontawesome-svg-core";
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  alphaNum,
  helpers,
} from "@vuelidate/validators";

//Add icons to library
library.add(faEye, faEyeSlash);

export default defineComponent({
  //Setup validation
  setup: () => {
    return {
      v$: useVuelidate(),
    };
  },
  //Set initial data
  data: () => {
    return {
      showPassword: false,
      form: {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
      },
    };
  },
  //Set validation
  validations: () => {
    return {
      form: {
        //Email should be formatted and not empty
        email: {
          required: helpers.withMessage(
            i18n.global.t("errors.notEmpty"),
            required
          ),
          email: helpers.withMessage(
            i18n.global.t("errors.emailFormat"),
            email
          ),
        },
        //First name should be alpha numeric and not empty
        firstName: {
          required: helpers.withMessage(
            i18n.global.t("errors.notEmpty"),
            required
          ),
          alphaNum: helpers.withMessage(
            i18n.global.t("errors.firstNameFormat"),
            alphaNum
          ),
        },
        //First name should be alpha numeric and not empty
        lastName: {
          required: helpers.withMessage(
            i18n.global.t("errors.notEmpty"),
            required
          ),
          alphaNum: helpers.withMessage(
            i18n.global.t("errors.lastNameFormat"),
            alphaNum
          ),
        },
        //Passwod should be more than 6 character and not empty
        password: {
          required: helpers.withMessage(
            i18n.global.t("errors.notEmpty"),
            required
          ),
          min: helpers.withMessage(
            i18n.global.t("errors.passwordFormat"),
            minLength(6)
          ),
        },
      },
    };
  },
  methods: {
    //Emit submit event for the parent component
    onSubmit() {
      this.$emit("submit-form", {
        ...this.$data.form,
      });
    },
    //Toggle password show/hide value
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
  //Submit emit for the parent
  emits: ["submit-form"],
  props: {
    method: {
      type: Function,
    },
  },
  //Add font-awesome
  components: {
    "font-awesome-icon": FontAwesomeIcon,
  },
});
</script>
<style scoped>
.btn {
  border-radius: 0px;
  width: 100%;
}

.form-control {
  border-radius: 0px;
}

.invalid-feedback {
  display: block;
  text-align: start;
}

.mb-3 {
  min-height: 65px;
}
.password-eye-icon {
  cursor: pointer;
  position: absolute;
  right: 12px;
  top: 12px;
}

.password-input-container {
  position: relative;
}
</style>
