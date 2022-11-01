<template>
  <div class="container">
    <div class="row">
      <div class="input-group mb-3 col-lg-8 mx-auto">
        <input
          v-model="query"
          type="text"
          class="form-control"
          placeholder="Search by name"
          aria-label="Search by name"
          @keyup.enter="searchBy(query)"
        />
        <div class="input-group-append">
          <button
            class="btn btn-success"
            @click="searchBy(query)"
            type="button"
          >
            <i class="fa fa-search text-light"></i>
          </button>
        </div>

        <select
          class="custom-select ml-1"
          v-model="ratingValue"
          id="inputGroupSelect01"
          placeholder="Filter by Rating"
        >
          <option selected value="">Filter by Rating</option>
          <option value="1">Rating >=1</option>
          <option value="2">Rating >=2</option>
          <option value="3">Rating >=3</option>
          <option value="4">Rating >=4</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <ul class="list-group shadow">
          <li
            class="list-group-item mb-1"
            div
            v-for="item in filteredShowList"
            :key="item.id"
          >
            <Show :show="item" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowList',
  data() {
    return {
      showList: {},
      query: '',
      ratingValue: '',
    }
  },
  mounted() {
    this.getShows()
  },
  computed: {
    filteredShowList() {
      console.dir(this.ratingValue)
      if (!this.ratingValue) {
        return this.showList
      } else {
        return this.showList?.filter(
          (e) => e.rating.average / 2 > this.ratingValue
        )
      }
    },
  },
  methods: {
    async getShows() {
      const data = await this.$axios.$get('https://api.tvmaze.com/shows')
      this.showList = data
    },
    async searchBy(value) {
      if (!value) {
        this.getShows()
      } else {
        const data = await this.$axios.$get(
          'https://api.tvmaze.com/search/shows?q=' + value
        )
        this.showList = data.map(({ show }) => show)
      }
    },
  },
}
</script>
