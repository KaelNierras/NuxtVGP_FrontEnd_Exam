<template>
    <div class="nav">
			<div class="logo">
				<v-icon icon="mdi-vuetify" class="icon" />
				<h3 class="logo-text">
					SpaceX
				</h3>
			</div>
			<div class="nav-links">
				<div class="nav-link">
					<v-icon icon="mdi-rocket" class="icon" />
					<NuxtLink :to="{ path: '/rocket' }" class="link-text">Rockets</NuxtLink>
				</div>
				<div class="nav-link">
					<v-icon icon="mdi-rocket-launch" class="icon" />
					<NuxtLink :to="{ path: '/launches' }"  class="link-text">Launches</NuxtLink>
				</div>
				<div class="nav-link">
					<v-icon icon="mdi-star" class="icon" />
					<NuxtLink :to="{ path: '/favorite' }"  class="link-text">Favorite</NuxtLink>
				</div>
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
	font-weight: bold;
	display: flex;
	align-items: center;
	justify-content: center;
}

.link-text{
	text-decoration: none;
	color: black;

}

.nav-links {
	display: flex;
	gap: 20px;
}

.logo-text {
    margin-left: 10px;
    font-size:x-large;
}

.icon{
    font-size: 30px;
    color: black;
}

.nav-link:hover {
    transition: background-color 0.5s ease, color 0.5s ease;
	background-color: grey;
	opacity: 0.8;
}


@media (max-width: 768px) {
	.nav {
		flex-direction: column;
	}
	
	.logo {
		margin-bottom: 20px;
	}

	.link-text{
		display: none;
	}
}
</style>