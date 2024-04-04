<template>
	<div class="nav">
		<div class="logo">
			<v-icon icon="mdi-vuetify" class="icon" />
			<NuxtLink :to="{ path: '/' }" class="link-text-logo">
				<h3 class="logo-text">
					SpaceX
				</h3>
			</NuxtLink>

		</div>
		<div class="nav-links">
			<div class="nav-link">
				<NuxtLink :to="{ path: '/rocket' }">
					<v-icon icon="mdi-rocket" class="icon" />
				</NuxtLink>
				<NuxtLink :to="{ path: '/rocket' }" class="link-text">Rockets</NuxtLink>
			</div>
			<div class="nav-link">
				<NuxtLink :to="{ path: '/launches' }"> <v-icon icon="mdi-rocket-launch"
						class="icon" />
				</NuxtLink>
				<NuxtLink :to="{ path: '/launches' }" class="link-text">Launches</NuxtLink>
			</div>
			<div class="nav-link">
				<NuxtLink :to="{ path: '/favorite' }">				<v-icon icon="mdi-star" class="icon" />
</NuxtLink>
				<NuxtLink :to="{ path: '/favorite' }" class="link-text">Favorites</NuxtLink>
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
    padding: 10px 100px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px); 
    -webkit-backdrop-filter: blur(10px); 
    border: 1px solid rgba(255, 255, 255, 0.2); 
    position: sticky;
    top: 0; 
    z-index: 1000; 
}

.logo {
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

.link-text {
	text-decoration: none;
	color: black;

}

.link-text-logo {
	text-decoration: none;
	color: black;

}

.nav-links {
	display: flex;
	gap: 40px;
}

.logo-text {
	margin-left: 10px;
	font-size: x-large;
}

.icon {
	font-size: 30px;
	color: black;
	margin: 0px;
}

.nav-link:hover {
	transition: background-color 0.5s ease, color 0.5s ease;
	background-color: rgba(0, 0, 0, 0.103);
	cursor: pointer;
}


@media (max-width: 768px) {
	.nav {
		flex-direction: column;
	}

	.logo {
		margin-bottom: 20px;
	}

	.link-text {
		display: none;
	}

	.icon{
		flex-direction: row;
	}
	
}
</style>