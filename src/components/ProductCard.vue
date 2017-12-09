<template>
	<section class="card" :product="product">
		<div class="card-content">
			<div class="media">
				<div class="media-left">
					<figure class="image is-128x128">
						<img v-if="user.image" :src="user.image" alt="profile photo" width='100' height='150'>
						<img v-else src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
					</figure>
				</div>
				<div class="media-content">
					<p class="title is-4">{{product.name}} </p>
					<p class="subtitle is-5">@{{user.price}}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data () {
			return {
			}
		},
		props: ['product'],
	}	
</script>

<style skoped>
</style>