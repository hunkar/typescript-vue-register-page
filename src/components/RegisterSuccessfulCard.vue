<template>
  <!-- If there is a user, it shows user. Otherwise it shows error text -->
  <div id="userSuccessfulText" v-if="user">
    {{ $t("labels.successfullRegister", { user }) }}
  </div>
  <div v-else>{{ $t("labels.errorOccured") }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    user: null,
  },
});
</script>
