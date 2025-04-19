<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
  slidesPerView: {
    type: Number,
    default: 1,
  },
  spaceBetween: {
    type: Number,
    default: 10,
  },
  navigation: {
    type: [Boolean, Object],
    default: false,
  },
  pagination: {
    type: [Boolean, Object],
    default: false,
  },
  autoplay: {
    type: [Boolean, Object],
    default: false, // Có thể truyền `true` hoặc object `{ delay: 3000, disableOnInteraction: false }`
  },
  breakpoints: {
    type: Object,
    default: () => ({}), // Truyền object breakpoints tùy chỉnh
  }
});

// Chỉ thêm module nếu props được bật
const swiperModules = [];
if (props.navigation) swiperModules.push(Navigation);
if (props.pagination) swiperModules.push(Pagination);
if (props.autoplay) swiperModules.push(Autoplay);
</script>

<template>
  <Swiper
    :modules="swiperModules"
    :slides-per-view="slidesPerView"
    :space-between="spaceBetween"
    :navigation="navigation"
    :pagination="pagination"
    :autoplay="autoplay"
    :breakpoints="breakpoints"
  >
    <SwiperSlide v-for="(slide, index) in slides" :key="index">
      <slot :slide="slide" :index="index"></slot>
    </SwiperSlide>
    <div v-if="pagination && pagination.el" :class="pagination.el.replace('.', '')"></div>
  </Swiper>
</template>
