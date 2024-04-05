<template>
	<v-container>
		<h3 class="my-5">
			SpaceX Launches
		</h3>
		<div class="filters">
			<v-select v-model="selectedSort" :items="['Ascending', 'Descending']" label="Sort by launch date" />
			<v-select v-model="selectedYear" :items="years" label="Select a year" />
		</div>
		
		<div>
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
					<tr v-for="launch in paginatedLaunches" :key="launch.id">
						<td>{{ launch.mission_name }}</td>
						<td>{{ launch.rocket.rocket_name }}</td>
						<td>{{ launch.launch_date_local }}</td>
						<td>{{ launch.launch_site ? launch.launch_site.site_name : 'N/A' }}</td>
						<td class="details-column">{{ launch.details }}</td>
						<td class="details-column" @click="toggleFavorite(launch.mission_name)">
							<v-icon v-if="isFavorite(launch.mission_name)" icon="mdi-star" class="icon" />
							<v-icon v-else icon="mdi-star-outline" class="icon" />
						</td>
					</tr>
				</tbody>
			</v-table>

		</div>

		<v-pagination v-model="currentPage" :length="totalPages" />
	</v-container>
</template>

<script setup lang="ts">

import { useLaunches } from '../composables/useLaunches'

const { paginatedLaunches, toggleFavorite, isFavorite, currentPage, selectedSort, totalPages, years, selectedYear } = useLaunches();

useHead({
	title: 'NuxtVGP - SpaceX',
})

</script>

<style scoped>
.details-column {
	max-width: 600px;
}

.icon {
	cursor: pointer;
}

.filters{
	display: flex;
	justify-content: space-between;
	gap: 20px;
}
</style>