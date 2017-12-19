<template>
	<section class="card" :product="product">
		<div class="card-image">
			<figure class="image">
						<img v-if="product.image" :src="product.image" alt="product photo" width='auto' height='auto'>
						<img v-else src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image">
					</figure>
		</div>
		<div class="card-content">
			<div class="media">
				<div class="media-content">
					<p class="title is-4">{{product.name}} </p>
					<p class="subtitle is-5">RUB{{product.price}}</p>
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
	.card {
		flex-basis: 25%;
	}

</style>