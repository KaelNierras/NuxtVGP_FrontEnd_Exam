<template>
    <div class="nav">
			<div class="logo">
				<v-icon icon="mdi-vuetify" class="icon" />
				<h3 class="logo-text">
					SpaceX
				</h3>
			</div>
			<div>
				<NuxtLink :to="{ path: '/rocket' }" class="nav-link">Rockets</NuxtLink>
				<NuxtLink :to="{ path: '/launches' }" class="nav-link">Launches</NuxtLink>
				<NuxtLink :to="{ path: '/favorite' }" class="nav-link">Favorite</NuxtLink>
			</div>

		</div>
		<hr>
</template>

<style scoped>
.nav {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 100px;
}

.logo{
	display: flex;
	align-items: center;
}

.nav-link {
	border-radius: 5px;
	padding: 10px;
	border: 2px solid black;
	margin-left: 20px;
	text-decoration: none;
	color: black;
	font-weight: bold;
}

.logo-text {
    margin-left: 10px;
    font-size:x-large;
}

.icon{
    font-size: 40px;
    color: black;
}

.nav-link:hover {
    transition: background-color 0.5s ease, color 0.5s ease;
	background-color: black;
	color: white;
}
</style>