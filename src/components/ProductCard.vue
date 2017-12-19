<template>
	<section class="card" :product="product">
		<div class="card-image">
			<figure class="image is-128x128">
						<img v-if="product.image" :src="product.image" alt="product photo" width='auto' height='300px'>
						<img v-else src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image">
					</figure>
		</div>
		<div class="card-content">
			<div class="media">
				<div class="media-content">
					<p class="title is-4">{{product.name}} </p>
					<p class="subtitle is-5">USD {{product.price}}</p>
				</div>
			</div>
		</div>
		<footer class="card-footer">
			<span class="card-footer-item">USD {{product.price}}</span>
			<span class="card-footer-item">
				<span class="buttons has-addons is-centered">
			  <i class="fa fa-plus button" aria-hidden="true"></i>
			  <i class="fa fa-shopping-basket" aria-hidden="true"></i>
			  <i class="fa fa-minus button" aria-hidden="true"></i>
</span></span>
		</footer>
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
	.card-image {
		margin: 5%;
	}

</style>