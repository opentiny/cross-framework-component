<template>
  <tiny-carousel>
    <tiny-carousel-item v-for="item in 4" :key="item">
      <img
        :src="`https://picsum.photos/1350/900?random=${item}`"
        style="width: 100%"
      />
    </tiny-carousel-item>
  </tiny-carousel>
</template>

<style>
.tiny-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.tiny-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.tiny-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
