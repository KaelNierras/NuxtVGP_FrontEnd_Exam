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

useHead({
	title: 'NuxtVGP - SpaceX',
})

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

// Launches Data
const launches = computed(() => data.value?.launches ?? [])

// Pagination
const itemsPerPage = ref(10); 
const currentPage = ref(1); 

// Get the favorite store
const favorite = favoriteStore();

// Check if the launch is a favorite
const filteredLaunches = computed(() => {
	var result = [...launches.value];
    return result.filter(launch => favorite.favorites.includes(launch.mission_name));
});

// Get total Page
const totalPages = computed(() => Math.ceil(launches.value.length / itemsPerPage.value)); // Total number of pages


// Get the paginated favorites
const paginatedFavorites = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredLaunches.value.slice(start, end);
});


</script>

<style scoped>
.details-column {
	max-width: 600px;
}

.icon{
	cursor: pointer;
}

</style>