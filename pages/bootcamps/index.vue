<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Bootcamps</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-row v-for="item in dataList" :key="item.id">
          <v-col cols="1" class="d-flex align-center">
            {{ item.rank }}
          </v-col>
          <v-col cols="3" class="d-flex align-center">
            <nuxt-link
              :to="{
                name: 'bootcamps-slug',
                params: {
                  slug: `${item.id}-${item.name
                    .toLowerCase()
                    .replace(/ /g, '-')}`
                }
              }"
            >
              {{ item.name }}
            </nuxt-link>
          </v-col>
          <v-col cols="4" class="d-flex align-center">
            <v-rating :value="item.overallRating" :readonly="true" />
            {{ item.overallRating }} / 5
          </v-col>
          <v-col cols="4" class="d-flex align-center">
            {{ item.reviews.length }} Reviews
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import api from '@/utils/api'

export default Vue.extend({
  name: 'Bootcamps',

  data() {
    return {
      dataList: [] as any[]
    }
  },

  mounted() {
    this.init()
  },

  methods: {
    async init() {
      try {
        this.dataList = await api.getList()
        this.$store.dispatch('storeBootcamps', this.dataList)
      } catch (e) {}
    }
  }
})
</script>

<style lang="scss" scoped></style>
