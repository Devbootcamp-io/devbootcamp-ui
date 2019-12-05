<template>
  <div>
    <h2>Hello World {{ message }}</h2>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

interface User {
  firstName: string
  lastName: number
}

export default Vue.extend({
  name: 'YourComponent',

  props: {
    user: {
      type: Object,
      required: true
    } as PropOptions<User>
  },

  data() {
    return {
      message: 'This is a message'
    }
  },

  computed: {
    fullName(): string {
      return `${this.user.firstName} ${this.user.lastName}`
    }
  }
})
</script>

<style lang="scss" scoped></style>
