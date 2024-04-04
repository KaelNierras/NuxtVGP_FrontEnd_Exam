<template>
	<v-container>
		<h3 class="my-5">
			SpaceX Launches
		</h3>
		<div class="filters">
			<v-select v-model="selectedSort" :items="['Ascending', 'Descending']" label="Sort by launch date" />
			<v-select v-model="selectedYear" :items="years" label="Select a year" />
		</div>
		
		<div v-if="launches.length">
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
		<div v-else>
			Loading data...
		</div>

		<v-pagination v-model="currentPage" :length="totalPages" />
	</v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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

const itemsPerPage = ref(10); // Number of items per page
const currentPage = ref(1); // Current page

const selectedSort = ref('Acending')

const totalPages = computed(() => Math.ceil(launches.value.length / itemsPerPage.value)); // Total number of pages

const paginatedLaunches = computed(() => {
	const start = (currentPage.value - 1) * itemsPerPage.value;
	const end = start + itemsPerPage.value;
	return filteredAndSortedLaunches.value.slice(start, end);
});

let years = computed(() => {
	let launchYears = launches.value.map((launch: { launch_date_local: string | number | Date; }) => new Date(launch.launch_date_local).getFullYear())
	return ['All', ...new Set(launchYears)]
})

var selectedYear = ref(years.value[0]);

const toggleFavorite = (missionName: string) => {
  if (isFavorite(missionName)) {
    favorite.removeFromFavorites(missionName);
  } else {
    favorite.addToFavorites(missionName);
  }
};

const isFavorite = (missionName: string) => {
  return favorite.favorites.includes(missionName);
};

const filteredAndSortedLaunches = computed(() => {
  var result = [...launches.value];
  if (selectedYear.value !== 'All') {
    result = result.filter((launch: { launch_date_local: string | number | Date; }) => new Date(launch.launch_date_local).getFullYear() === Number(selectedYear.value));
  }
  if (selectedSort.value) {
    result = result.sort((a: { launch_date_local: string | number | Date; }, b: { launch_date_local: string | number | Date; }) => {
      const dateA = new Date(a.launch_date_local);
      const dateB = new Date(b.launch_date_local);
      return selectedSort.value === 'Ascending' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    });
  }
  return result;
});
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