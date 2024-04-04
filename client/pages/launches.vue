<template>
	<v-container>
		<h3 class="my-5">
			SpaceX Launches
		</h3>	
		<v-select v-model="selectedSort" :items="['Ascending', 'Descending']" label="Sort by launch date" />
		<v-select v-model="selectedYear" :items="years" label="Select a year" />
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
				<tr v-for="launch in filteredAndSortedLaunches" :key="launch.id">
					<td>{{ launch.mission_name }}</td>
					<td>{{ launch.rocket.rocket_name }}</td>
					<td>{{ launch.launch_date_local }}</td>
					<td>{{ launch.launch_site ? launch.launch_site.site_name : 'N/A' }}</td>
					<td class="details-column">{{ launch.details }}</td>
					<td class="details-column" @click="favorite.addToFavorites(launch.mission_name)"><v-icon icon="mdi-star" class="icon" /></td>
				</tr>
			</tbody>
		</v-table>
	</v-container>
</template>

<script setup lang="ts">
const query = gql`
query Launches {
  launches {
	mission_name
	launch_site {
	  site_name
	}
	rocket {
	  rocket_name
	}
	details
	launch_date_local
  }
}
`

const { data } = useAsyncQuery<{
	launches: {
		id: string
		mission_name: string
		launch_date_local: string
		launch_site: {
			site_name: string
		}
		rocket: {
			rocket_name: string
		}
		details: string
	}[]
}>(query)

const favorite = favoriteStore()

const launches = computed(() => data.value?.launches ?? [])

const selectedSort = ref('Acending')

let years = computed(() => {
    let launchYears = launches.value.map((launch: { launch_date_local: string | number | Date; }) => new Date(launch.launch_date_local).getFullYear())
    return ['All', ...new Set(launchYears)]
})

var selectedYear = ref(years.value[0]);

const filteredAndSortedLaunches = computed(() => {
    var result = launches.value
    if (selectedYear.value !== 'All') {
        result = result.filter((launch: { launch_date_local: string | number | Date; }) => new Date(launch.launch_date_local).getFullYear() === Number(selectedYear.value))
    }
    if (selectedSort.value) {
        result = result.sort((a: { launch_date_local: string | number | Date; }, b: { launch_date_local: string | number | Date; }) => {
            const dateA = new Date(a.launch_date_local)
            const dateB = new Date(b.launch_date_local)
            return selectedSort.value === 'Ascending' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime()
        })
    }
    return result
})
</script>

<style scoped>
.details-column {
	max-width: 600px;
}
</style>