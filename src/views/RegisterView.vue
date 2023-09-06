<template>
  <!-- Navigation that shows title of page -->
  <nav class="header nav-bar">{{ $t("titles.account") }}</nav>
  <!-- Application body -->
  <div class="component-body">
    <!-- Register card container -->
    <div class="container">
      <h1 class="title">{{ $t("titles.register") }}</h1>

      <!-- Shows successful card if there is a user. Otherwise show form -->
      <RegisterSuccessfulCard v-if="user?.id" v-bind:user="user" />
      <SignupForm v-else @submit-form="onSubmit" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SignupForm from "@/components/SignupForm.vue";
import RegisterSuccessfulCard from "@/components/RegisterSuccessfulCard.vue";
import { UserType } from "@/types/User";

type LoginViewDataType = {
  user?: UserType;
};

export default defineComponent({
  //Component dependencies
  components: {
    SignupForm,
    RegisterSuccessfulCard,
  },
  //Set initial data
  data: (): LoginViewDataType => {
    return {
      user: undefined,
    };
  },
  //Give random id to user and set it
  //TODO backend call can be added when backend is available.
  methods: {
    onSubmit(data: UserType) {
      data.id = Date.now().toString();
      this.user = data;
    },
  },
});
</script>
<style scoped>
.component-body {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
}

.container {
  background-color: white;
  border: 1px var(--bs-border-color) solid;
  min-height: 550px;
  padding: 30px;
}
.header {
  align-items: center;
  background-color: red;
  color: white;
  display: flex;
  font-size: 25px;
  height: 75px;
  padding: 10px 50px;
  text-align: start;
}
.title {
  margin-bottom: 50px;
}
</style>
