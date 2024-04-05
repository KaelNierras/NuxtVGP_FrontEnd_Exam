<template>
	<v-container>
		<h3 class="my-5">
			SpaceX Rockets
		</h3>
		<v-select v-model="selectedSort" :items="['Ascending', 'Descending']" label="Sort by first flight date" />
		<v-table>
			<thead>
				<tr>
					<th class="text-left">Rocket Name</th>
					<th class="text-left">Description</th>
					<th class="text-left">First Flight</th>
					<th class="text-left">Height (feet)</th>
					<th class="text-left">Diameter (feet)</th>
					<th class="text-left">Mass (lb)</th>
					<th class="text-left">Stages</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="rocket in paginatedLaunches" :key="rocket.name">
					<td>{{ rocket.name }}</td>
					<td>{{ rocket.description }}</td>
					<td>{{ rocket.first_flight }}</td>
					<td>{{ rocket.height.feet }}</td>
					<td>{{ rocket.diameter.feet }}</td>
					<td>{{ rocket.mass.lb }}</td>
					<td>{{ rocket.stages }}</td>
				</tr>
			</tbody>
		</v-table>
		<v-pagination v-model="currentPage" :length="totalPages" />
	</v-container>
</template>

<script setup lang="ts">

useHead({
	title: 'NuxtVGP - SpaceX',
})

import { useRockets } from '../composables/useRockets'

const {
	currentPage,
	selectedSort,
	totalPages,
	paginatedLaunches } = useRockets();
	
</script>

<style scoped>
.details-column {
	max-width: 600px;
}
</style>