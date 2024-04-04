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

definePageMeta({
	middleware: 'middleware_launches',
})


const query = gql`
query Rockets {
	rockets {
		name
		description
		first_flight
		height {
			feet
		}
		diameter {
			feet
		}
		mass {
			lb
		}
		stages
	}
}
`
const { data } = useAsyncQuery<{
	rockets: {
		name: string
		description: string
		first_flight: string
		height: {
			feet: number
		}
		diameter: {
			feet: number
		}
		mass: {
			lb: number
		}
		stages: number
	}[]
}>(query)

const rockets = computed(() => data.value?.rockets ?? [])

const itemsPerPage = ref(10); // Number of items per page
const currentPage = ref(1); // Current page


let selectedSort = ref('Ascending')

const sortedRockets = computed(() => {
	let sorted = [...rockets.value]
	sorted.sort((a, b) => new Date(a.first_flight).getTime() - new Date(b.first_flight).getTime())
	if (selectedSort.value === 'Descending') {
		sorted.reverse()
	}
	return sorted
})

const totalPages = computed(() => Math.ceil(rockets.value.length / itemsPerPage.value)); // Total number of pages

const paginatedLaunches = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return sortedRockets.value.slice(start, end);
});

</script>

<style scoped>
.details-column {
	max-width: 600px;
}
</style>