<template>
  <v-container>
    <template v-if="item">
      <v-row>
        <v-col cols="12">
          <h1>{{ item.name }}</h1>
        </v-col>
        <v-col cols="12">
          <v-rating :value="item.overallRating" :readonly="true"></v-rating>
          Based on {{ item.reviews.length }} reviews
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h2>Locations</h2>
        </v-col>
        <v-col cols="12">
          <p>
            <template v-for="(location, index) in item.locations">
              {{
                index === item.locations.length - 1
                  ? location.city
                  : `${location.city},`
              }}
            </template>
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h2>Overview</h2>
        </v-col>
        <v-col cols="12">
          <p>{{ item.description }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h2>Courses</h2>
        </v-col>
        <v-col cols="12">
          <v-card
            v-for="(course, index) in item.courses"
            :key="index"
            class="mb-2"
          >
            <v-card-text>
              <h3 class="text--primary">
                {{ course.name }}
              </h3>
              <p class="text--primary">
                Cost: {{ course.price }}
                <br />
                Duration: {{ course.duration }} weeks
              </p>
              <div class="text--primary">
                {{ course.description }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h2>Reviews</h2>
        </v-col>
        <v-col cols="12">
          <v-card v-for="review in item.reviews" :key="review.id" class="mb-2">
            <v-card-text>
              <h3 class="text--primary">
                {{ review.name }}
              </h3>
              <div>
                <v-rating :value="review.rating" :readonly="true"></v-rating>
              </div>
              <div class="text--primary">
                {{ review.comment }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import api from '@/utils/api'

export default Vue.extend({
  data() {
    return {
      item: undefined
    }
  },

  mounted() {
    this.init()
  },

  methods: {
    async init() {
      const id = parseInt(this.$route.params.slug.split('-')[0])
      const storedList = this.$store.getters.bootcampList || []
      this.item = storedList.find((item: any) => item.id === id)
      if (!this.item) {
        try {
          this.item = await api.getBootcamp(id)
        } catch (e) {}
      }
    }
  }
})
</script>

<style lang="scss" scoped></style>
