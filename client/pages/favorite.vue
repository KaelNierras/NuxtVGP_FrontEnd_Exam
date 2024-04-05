<template>
    <v-container>
        <h3 class="my-5">
			SpaceX Favorite Launch
		</h3>
        <v-table>
			<thead>
				<tr>
					<th class="text-left">Mission Name</th>
					<th class="text-left">Rocket Name</th>
					<th class="text-left">Launch Date</th>
					<th class="text-left">Launch Site</th>
					<th class="text-left details-column">Details</th>
					<th class="text-left details-column">Action</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="launch in paginatedFavorites" :key="launch.id">
					<td>{{ launch.mission_name }}</td>
					<td>{{ launch.rocket.rocket_name }}</td>
					<td>{{ launch.launch_date_local }}</td>
					<td>{{ launch.launch_site ? launch.launch_site.site_name : 'N/A' }}</td>
					<td class="details-column">{{ launch.details }}</td>
					<td class="favorite" @click="favorite.removeFromFavorites(launch.mission_name)"><v-icon icon="mdi-star-minus" class="icon" /></td>
				</tr>
			</tbody>
		</v-table>
		<v-pagination v-model="currentPage" :length="totalPages" />
    </v-container>
</template>


<script setup lang="ts">
import { useFavorite } from '../composables/useFavorite';

useHead({
	title: 'NuxtVGP - SpaceX',
})

const  { currentPage, favorite, totalPages, paginatedFavorites } = useFavorite(); 


</script>

<style scoped>
.details-column {
	max-width: 600px;
}

.icon{
	cursor: pointer;
}

</style>