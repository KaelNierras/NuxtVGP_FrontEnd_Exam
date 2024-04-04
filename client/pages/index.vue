<template>
	<v-container>
		<div class="header">
			<v-icon icon="mdi-vuetify" />
			<h2>
				Welcome to the Space Explorer
			</h2>
		</div>

		<v-card class="mx-auto my-12 p-5" >
			<v-card-text class="large-text">
				Explore the vastness of space with our Space Explorer app. Discover fascinating celestial bodies, learn
				about astronomical events, and stay updated with the latest discoveries in the universe.
			</v-card-text>
		</v-card>
	</v-container>
</template>

<script lang="ts" setup>

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
	font-size: 1.5em; /* Adjust this value to your liking */
	line-height:50px !important;
}
</style>