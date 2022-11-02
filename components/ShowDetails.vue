<template>
  <div class="container mt-5 mb-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-10">
        <div class="card">
          <div class="row">
            <div class="col-md-6">
              <div class="images p-3">
                <div class="text-center p-4">
                  <img
                    id="main-image"
                    :src="showInfo.image.medium"
                    width="250"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="product p-4">
                <div class="d-flex justify-content-between align-items-center">
                  <NuxtLink to="/">
                    <div class="d-flex align-items-center">
                      <i class="fa fa-long-arrow-left"></i>
                      <span class="ml-1">Back</span>
                    </div>
                  </NuxtLink>
                </div>
                <div class="mt-4 mb-3">
                  <h5 class="text-uppercase">{{ showInfo.name }}</h5>
                  <div class="price d-flex flex-row align-items-center">
                    <div class="ml-2">
                      <span v-for="genre in showInfo.genres" :key="genre.id"
                        >{{ genre }}
                      </span>
                    </div>
                  </div>
                </div>
                <p class="about" v-html="showInfo.summary"></p>
                <h6 class="font-weight-bold my-2">
                  Language: {{ showInfo.language }}
                </h6>
                <Rating :value="showInfo.rating.average" />
                <NuxtLink :to="showInfo.officialSite">
                  <h6 class="font-weight-bold my-2">
                    {{ showInfo.officialSite }}
                  </h6>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showInfo'],
}
</script>

<style></style>
