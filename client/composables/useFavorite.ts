export const useFavorite = () => {
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
	const itemsPerPage = ref(10)
	const currentPage = ref(1)

	// Get the favorite store
	const favorite = favoriteStore()

	// Check if the launch is a favorite
	const filteredFavorite = computed(() => {
		var result = [...launches.value]
		return result.filter((launch) => favorite.favorites.includes(launch.mission_name))
	})

	// Get total Page
	const totalPages = computed(() => Math.ceil(launches.value.length / itemsPerPage.value)) // Total number of pages

	// Get the paginated favorites
	const paginatedFavorites = computed(() => {
		const start = (currentPage.value - 1) * itemsPerPage.value
		const end = start + itemsPerPage.value
		return filteredFavorite.value.slice(start, end)
	})


    return { currentPage, favorite, totalPages, paginatedFavorites }
}
