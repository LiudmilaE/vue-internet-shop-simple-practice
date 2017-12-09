<template>
	<div>
		<section class="hero is-medium is-bold">
			<div class="hero-body" id="img-hero">
				<div class="container">
					<h1 class='title is-1'>Example Vue Internet Shop</h1>
					<h2 class="subtitle is-3">Lorem ipsum dolor sit amet, sea dictas animal nonumes ei, sea atqui vituperatoribus no. </h2>
				</div>
			</div>
			<section class="notification">
			<h3 class="title">Products list</h3>
			<div v-if="products && products.length>0" class="column">
				<product-card v-for="product in products" :product="product" :key="product.id"></product-card>
			</div>
			<p class="subtitle" v-else>No products found...</p>
		</section>
		</section>
	</div>
</template>

<script>
import ProductCard from '@/components/ProductCard'
import { productsDB } from '@/data/products'

export default {
	data () {
		return {
			products: []
		}
	},
	components: {
		ProductCard,
	}
}
	
</script>

<style scoped>
	@media screen and (min-width: 769px) {
		.notification {
			padding: 5% 15%;
		}
	}

#img-hero {
	background-color: #e3ebf7;
	color: #eaeced;
	background-image: url('../assets/fruits.jpg');
	background-repeat: no-repeat;
	background-position: center;
	background: cover;
}

h1, h2 {
 	text-shadow: 2px 2px 3px grey; 
 	color: white;
}
	
</style>