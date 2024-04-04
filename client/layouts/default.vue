<template>
	<v-app>
		<Navigation /> 
		<v-main>
			<slot />
		</v-main>
		<Footer />
	</v-app>
</template>
<script>
import Navigation from '../components/nav_bar.vue'
import Footer from '../components/footer.vue'

export default {
  name: 'DefaultLayout',
  components: {
    Navigation
  }
}
</script>
