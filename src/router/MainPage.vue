<template>
	<div>
		<section class="hero is-bold">
			<div class="hero-body" id="img-hero">
				<div class="container">
					<h1 class='title is-1'>Example Vue Internet Shop</h1>
					<h2 class="subtitle is-3">Lorem ipsum dolor sit amet, sea dictas animal nonumes ei, sea atqui vituperatoribus no. </h2>
				</div>
			</div>
			<section class="notification">
			<h3 class="title">Products list</h3>
			<div v-if="products && products.length>0" class=" wrapper">
				<product-card v-for="product in products" :product="product" :key="product.name"></product-card>
			</div>
			<p class="subtitle" v-else>No products found...{{products}}</p>
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
			products: [
	{ "name": "Slippers", 
		"price": "50", 
		"image": "src/assets/totoro-slippers.jpg",
		"description": "My Neighbor Totoro Cartoon Plush Indoor Bedroom Winter Warm Slipper"
	},
	{ "name": "Hamster Toy", 
		"price": "2", 
		"image": "src/assets/webkinz-ick-azin-hamster.jpg",
		"description": "Join Mazin Hamster World. Great gifts for kids of all ages"
	},
	{ "name": "Minion Toy", 
		"price": "15",
		"image": "src/assets/minion-banana.jpg", 
		"description": "Pull down his arm until it clicks,press to release. He wears a removable banana hat."
	},
	{ "name": "Pusheen", 
		"price": "12",
		"image": "src/assets/pusheen.jpg",
		"description": "Made from soft, huggable material that meets famous GUND quality standards"
	},
	{ "name": "Reindeer Toy", 
		"price": "15",
		"image": "src/assets/reindeer.jpg", 
		"description": "Webkinz pets are very special plush animals"
	},
	{ "name": "Pikachu", 
		"price": "15", 
		"image": "src/assets/pikachu.jpg",
		"description": "Take your favorite Pokémon wherever you go!"
	},
	{ "name": "Wisamiz Dog", 
		"price": "15",
		"image": "src/assets/wisamiz-dog.jpg",
		"description": "Family Board Game. Develop patience and frustration tolerance. Interesting and intelligence toys."
	},
	{ "name": "Pop Up Pirate", 
		"price": "13",
		"image": "src/assets/pop-up-pirate.jpg",
		"description": "Kids love the popping action of the pirate flying out of the barrel"
	}
] 
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
			padding: 5% 10%;
		}
	}

	.notification {
			padding: 3% 8%;
		}

	.wrapper {
		display: flex;
		flex-wrap: wrap;
	}

	#img-hero {
		background-color: #656b7e;
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