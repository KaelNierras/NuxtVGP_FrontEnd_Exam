<template>
	<v-container>
		<div class="header">
			<v-icon icon="mdi-vuetify" />
			<h2>
				Welcome to the Space Explorer
			</h2>
		</div>

		<v-card class="mx-auto my-12 p-5">
			<v-card-text class="large-text">
				Explore the vastness of space with our Space Explorer app. Discover fascinating celestial bodies, learn
				about astronomical events, and stay updated with the latest discoveries in the universe.
			</v-card-text>
		</v-card>

		<div>
			<h3 class="my-5">
				Discover the Universe
			</h3>
			<p>
				Explore the universe with our Space Explorer app. Discover fascinating celestial bodies, learn about
				astronomical events, and stay updated with the latest discoveries in the universe.
			</p>
		</div>

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
		


	</v-container>
</template>

<script lang="ts" setup>
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

<style scoped>
.header {
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	font-size: xx-large;
}

.large-text {
	font-size: 1.5em;
	/* Adjust this value to your liking */
	line-height: 50px !important;
}

.c-container {
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.icon{
	font-size: 50px;
	color: black;
	margin-left: 30px;
	margin-right: 30px;

}


.carousel {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 90%; /* Static width */
	height: 650px; /* Static height */
}

.slides {
	display: flex;
	overflow: hidden;
	width: 100%; /* Full width */
	height: 100%; /* Full height */
	border-radius: 30px;

}

.slides div {
	display: none; /* Hide all slides */
	width: 100%; /* Full width */
	height: 100%; /* Full height */
}

.slides .active {
	display: flex; /* Show active slide */
}

.image {
	width: 100%; /* Full width */
	height: 100%; /* Full height */
	object-fit: cover; /* Resize the image to cover the container while maintaining its aspect ratio */
	
}


@media (max-width: 768px) {
	.carousel {
	width: 100%; /* Static width */
	height: 400px; /* Static height */
}
.icon{
	font-size: 25px;
	margin-left: 10px;
	margin-right: 10px;

}
}
</style>