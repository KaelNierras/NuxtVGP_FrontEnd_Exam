<template>
    <div class="c-container">
        <div class="carousel">
            <button @click="prevSlide"><v-icon icon="mdi-chevron-left" class="icon" /></button>
            <div class="slides">
                <div v-for="(slide, index) in slides" :key="index" :class="{ active: index === currentIndex }">
                    <img v-show="index === currentIndex" :src="slide" class="image" alt="Slide image">
                </div>
            </div>
            <button @click="nextSlide"><v-icon icon="mdi-chevron-right" class="icon" /></button>
        </div>

    </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  
const slides = ref(["https://www.ibm.com/blog/wp-content/uploads/2021/01/leadspace3.jpg", "https://am.pictet/-/media/mega/mega-articles/banners/2022/future-of-space-exploration/stars_istock-1047229538_sitecore_1600x900.jpg", "https://d10lvax23vl53t.cloudfront.net/images/Article_Images/ImageForArticle_2358_16363728816453386.jpg", "https://www.brinknews.com/wp-content/uploads/2023/01/Spacex-1.jpg"]); // Add your slide content here
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
	width: 90%;
	height: 650px;
}

.slides {
	display: flex;
	overflow: hidden;
	width: 1000px;
	height: 100%;
	border-radius: 30px;

}

.slides div {
	display: none;
	width: 100%;
	height: 100%;
}

.slides .active {
	display: flex;
}

.image {
	width: 100%;
	height: 100%;
	object-fit: cover;

}

.icon {
	font-size: 50px;
	color: black;
	margin-left: 30px;
	margin-right: 30px;

}

@media (max-width: 1270px) {
    .slides{
        width: 100%;
    }

}


@media (max-width: 768px) {
	.icon {
		font-size: 25px;
		margin-left: 10px;
		margin-right: 10px;

    }

}
</style>