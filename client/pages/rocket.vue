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
				<tr v-for="rocket in sortedRockets" :key="rocket.name">
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
	</v-container>
</template>

<script setup lang="ts">
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

let selectedSort = ref('Ascending')

const sortedRockets = computed(() => {
	let sorted = [...rockets.value]
	sorted.sort((a, b) => new Date(a.first_flight).getTime() - new Date(b.first_flight).getTime())
	if (selectedSort.value === 'Descending') {
		sorted.reverse()
	}
	return sorted
})

</script>

<style scoped>
.details-column {
	max-width: 600px;
}
</style>