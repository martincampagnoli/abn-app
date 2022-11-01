<template>
  <ShowDetails :showInfo="show" />
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const show = await $axios.$get(`https://api.tvmaze.com/shows/${params.id}`)
    return { show }
  },
}
</script>
