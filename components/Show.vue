<template>
  <div class="media align-items-lg-center flex-column flex-lg-row p-3">
    <div class="media-body order-2 order-lg-1">
      <NuxtLink :to="`/show/${show.id}`">
        <h5 class="mt-0 font-weight-bold mb-2">{{ show.name }}</h5>
      </NuxtLink>
      <p class="font-italic text-muted mb-0 small">
        <span
          v-if="show.summary"
          v-html="`${show.summary.slice(0, textLimit).trim()}...`"
        ></span>
      </p>
      <div class="d-flex align-items-center justify-content-between mt-1">
        <h6 class="font-weight-bold my-2">{{ show.language }}</h6>
        <h6 class="font-weight-bold my-2">
          <span v-for="genre in show.genres" :key="genre.id"
            >{{ genre }}<br />
          </span>
        </h6>
        <Rating :value="show.rating.average"></Rating>
      </div>
    </div>
    <img
      :src="show.image?.medium"
      width="100"
      class="ml-lg-5 order-1 order-lg-2 col-sm-3"
    />
  </div>
</template>

<script>
export default {
  props: ['show'],
  data() {
    return {
      textLimit: 200,
    }
  },
}
</script>

<style></style>
