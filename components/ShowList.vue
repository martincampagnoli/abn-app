<template>
  <div class="container py-5">
    <div class="row text-center text-white mb-5">
      <div class="col-lg-7 mx-auto">
        <h1 class="display-4">ABN AMRO Assessment</h1>
        <p class="lead mb-0">Display a list of popular TV shows</p>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-8 mx-auto">
        <ul class="list-group shadow">
          <li
            class="list-group-item mb-1"
            div
            v-for="item in showList"
            :key="item.id"
          >
            <show :show="item" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ShowList',
  data() {
    return {
      showList: {},
    }
  },
  mounted() {
    this.getShows()
  },
  methods: {
    getShows() {
      axios.get('https://api.tvmaze.com/shows').then((response) => {
        this.showList = response.data
      })
    },
  },
}
</script>
