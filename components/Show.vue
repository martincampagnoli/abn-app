<template>
  <div class="media align-items-lg-center flex-column flex-lg-row p-3">
    <div class="media-body order-2 order-lg-1">
      <h5 class="mt-0 font-weight-bold mb-2">{{ show.name }}</h5>
      <p class="font-italic text-muted mb-0 small">
        <span v-html="`${show.summary.slice(0, 200).trim()}...`"></span>
      </p>
      <div class="d-flex align-items-center justify-content-between mt-1">
        <h6 class="font-weight-bold my-2">{{ show.language }}</h6>
        <Rating :value="show.rating.average"></Rating>
      </div>
    </div>
    <img
      :src="show.image.medium"
      width="100"
      class="ml-lg-5 order-1 order-lg-2"
    />
  </div>
</template>

<script>
export default {
  props: ['show'],
  computed: {},
}
</script>

<style></style>
