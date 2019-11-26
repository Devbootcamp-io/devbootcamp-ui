<template>
  <v-app-bar app>
    <Logo />
    <v-spacer />
    <nuxt-link to="/bootcamps">
      Bootcamps
    </nuxt-link>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from './Logo.vue'

export default Vue.extend({
  components: {
    Logo
  }
})
</script>

<style lang="scss" scoped></style>
