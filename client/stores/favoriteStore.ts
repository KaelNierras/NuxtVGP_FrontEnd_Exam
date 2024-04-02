export const favoriteStore = defineStore('favorite', {
	state: () => ({ 
		count: 0,
		favorites: [] as string[] // or any other type you want to store in favorites
	}),
	actions: {
		increment() {
			this.count++
		},
		addToFavorites(item: string) { // replace string with the type of the items you want to add to favorites
			this.favorites.push(item)
		},
		removeFromFavorites(item: string) { // replace string with the type of the items you want to remove from favorites
			this.favorites = this.favorites.filter(favorite => favorite !== item)
		}
	},
})