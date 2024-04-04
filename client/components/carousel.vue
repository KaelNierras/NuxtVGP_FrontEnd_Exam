<template>
    <div class="carousel">
      <button @click="prevSlide">Previous</button>
      <div class="slides">
        <div v-for="(slide, index) in slides" :key="index" :class="{ active: index === currentIndex }">
          {{ slide }}
        </div>
      </div>
      <button @click="nextSlide">Next</button>
    </div>
  </template>
  
  <script setup lang="ys">
  import { ref } from 'vue';
  
  const slides = ref(["Slide 1", "Slide 2", "Slide 3"]); // Add your slide content here
  const currentIndex = ref(0);
  
  const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % slides.value.length;
  };
  
  const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length;
  };
  </script>
  
  <style>
  .carousel {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .slides {
    display: flex;
    overflow: hidden;
  }
  
  .slides div {
    flex: 0 0 auto;
    width: 300px; /* Set your slide width */
    height: 200px; /* Set your slide height */
    margin-right: 10px;
    background: #ccc; /* Set your slide background */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .slides .active {
    background: #333; /* Set your active slide background */
    color: #fff; /* Set your active slide text color */
  }
  </style>
  