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
					{{text}}
				</v-card-text>
			</v-card>
		</div>
		<div class="c-container">
			<Carousel/>
		</div>
	</v-container>
</template>

<script lang="ts" setup>
import Carousel from '../components/carousel.vue';

const text = ref('SpaceX is a private aerospace manufacturer and space transportation company founded by Elon Musk in 2002. The company has developed the Falcon 1, Falcon 9, Falcon Heavy, and Starship rockets, and the Dragon spacecraft.');

// definePageMeta({
//   middleware: [
// 	'launches'
//   ]
// });

useHead({
	title: 'NuxtVGP - SpaceX',
})

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
	padding-left: 20px;
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

@media (max-width: 1270px) {
    .card{
		padding: 0px 50px;
	}
}

@media (max-width: 768px) {
	.carousel {
		width: 100%;
		height: 400px;
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