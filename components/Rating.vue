<template>
  <div class="media align-items-lg-center flex-column flex-lg-row p-3">
    <ul class="list-inline small">
      <li
        class="list-inline-item m-0"
        v-for="index in ratingNumber"
        :key="index"
      >
        <i class="fa fa-star text-success"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['value'],
  computed: {
    ratingNumber: function () {
      return this.value ? Math.trunc(this.value / 2) : 0
    },
  },
}
</script>

<style></style>
