<template>
	<v-app>
		<Navigation /> 
		<v-main>
			<slot />
		</v-main>
	</v-app>
</template>
<script>
import Navigation from '../components/nav_bar.vue'

export default {
  name: 'DefaultLayout',
  components: {
    Navigation
  }
}
</script>
