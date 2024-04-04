<template>
	<v-container>
		<div class="header">
			<v-icon icon="mdi-vuetify" />
			<h2>
				Welcome to
			</h2>
			<h1 class="header-sub">
				SpaceX
			</h1>
		</div>

		<div class="card">
			<v-card>
				<v-card-text class="large-text bordered-text">
					Explore the vastness of space with our Space Explorer Site. Discover fascinating celestial bodies,
					learn
					about astronomical events, and stay updated with the latest discoveries in the universe.
				</v-card-text>
			</v-card>
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

useHead({
	title: 'NuxtVGP - SpaceX',
})


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

.bordered-text {
	border-left: 5px solid #000;
	/* Adjust color and thickness as needed */
	padding-left: 20px;
	/* Adjust padding as needed */
}

.header-sub {
	margin-top: -80px;
	font-size: 150px;
}

.card {
	margin-top: 30px;
	margin-bottom: 30px;
	display: flex;
	align-items: center;
	padding: 0px 200px;
}


.large-text {
	font-size: 1.4em;
	line-height: 50px !important;
	padding: 0px 100px;
}

.c-container {
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.icon {
	font-size: 50px;
	color: black;
	margin-left: 30px;
	margin-right: 30px;

}


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
	width: 100%;
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


@media (max-width: 768px) {
	.carousel {
		width: 100%;
		height: 400px;
	}

	.icon {
		font-size: 25px;
		margin-left: 10px;
		margin-right: 10px;

	}

	.large-text {
		font-size: 1.2em;
	}

	.header {
		font-size: x-large;
		text-align: center;
	}

	.header-sub {
		margin-top: -40px;
		font-size: 80px;
	}

	.card {
		margin-top: 30px;
		margin-bottom: 30px;
		display: flex;
		align-items: center;
		padding: 0px 40px;
	}

	.large-text {
		font-size: 1.4em;
		line-height: 50px !important;
		padding: 0px 50px;
	}

}
</style>