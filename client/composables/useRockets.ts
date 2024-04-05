export const useRockets = () => {
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

	// Extract the rockets from the data
	const rockets = computed(() => data.value?.rockets ?? [])

	// Pagination
	const itemsPerPage = ref(10)
	const currentPage = ref(1)

	// Sorting
	let selectedSort = ref('Ascending')

	// Sort the rockets by first flight date
	const sortedRockets = computed(() => {
		let sorted = [...rockets.value]
		sorted.sort((a, b) => new Date(a.first_flight).getTime() - new Date(b.first_flight).getTime())
		if (selectedSort.value === 'Descending') {
			sorted.reverse()
		}
		return sorted
	})

	// Total number of pages
	const totalPages = computed(() => Math.ceil(rockets.value.length / itemsPerPage.value))

	// Paginated rockets
	const paginatedLaunches = computed(() => {
		const start = (currentPage.value - 1) * itemsPerPage.value
		const end = start + itemsPerPage.value
		return sortedRockets.value.slice(start, end)
	})


    return {
        currentPage,
        selectedSort,
        totalPages,
        paginatedLaunches
    }
}
