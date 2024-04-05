//import Toast from '../components/Toast.vue'


export const useLaunches = () => {
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

	//Get the favorite store
	const favorite = favoriteStore()

	//Get the launches
	const launches = computed(() => data.value?.launches ?? [])

	//Pagination
	const itemsPerPage = ref(10)
	const currentPage = ref(1) // Current page

	//Sort and filter
	const selectedSort = ref('Acending')

	//Get the total number of pages
	const totalPages = computed(() => Math.ceil(launches.value.length / itemsPerPage.value)) // Total number of pages

	//Get the paginated launches
	const paginatedLaunches = computed(() => {
		const start = (currentPage.value - 1) * itemsPerPage.value
		const end = start + itemsPerPage.value
		return filteredAndSortedLaunches.value.slice(start, end)
	})

	//Get the years
	let years = computed(() => {
		let launchYears = launches.value.map((launch: { launch_date_local: string | number | Date }) =>
			new Date(launch.launch_date_local).getFullYear(),
		)
		return ['All', ...new Set(launchYears)]
	})

	//Selected year
	var selectedYear = ref(years.value[0])

	//Toggle favorite
	const toggleFavorite = (missionName: string) => {
		if (isFavorite(missionName)) {
			favorite.removeFromFavorites(missionName)
		} else {
			favorite.addToFavorites(missionName)
		}
	}

	//Check if the mission is favorite
	const isFavorite = (missionName: string) => {
		return favorite.favorites.includes(missionName)
	}

	//Filter and sort the launches
	const filteredAndSortedLaunches: ComputedRef<any> = computed(() => {
		var result = [...launches.value]
		if (selectedYear.value !== 'All') {
			result = result.filter(
				(launch: { launch_date_local: string | number | Date }) =>
					new Date(launch.launch_date_local).getFullYear() === Number(selectedYear.value),
			)
		}
		if (selectedSort.value) {
			result = result.sort(
				(
					a: { launch_date_local: string | number | Date },
					b: { launch_date_local: string | number | Date },
				) => {
					const dateA = new Date(a.launch_date_local)
					const dateB = new Date(b.launch_date_local)
					return selectedSort.value === 'Ascending'
						? dateA.getTime() - dateB.getTime()
						: dateB.getTime() - dateA.getTime()
				},
			)
		}
		return result
	})

	return {
		launches,
		paginatedLaunches,
		itemsPerPage,
		currentPage,
		totalPages,
		selectedSort,
		years,
		selectedYear,
		toggleFavorite,
		isFavorite,
	}
}
