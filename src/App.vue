<template>
	<div id="app">
		<nav class="navbar is-info" role="navigation" aria-label="main navigation" >
			<div class="navbar-brand">
				<router-link class="navbar-item" to="/">
					<img src="./assets/logo.png" id="logo" alt="Vue.js">
					Vue Shop 
				</router-link>
				<a class="gh-btn navbar-item" title="Github" id="gh-btn" target="_blank" aria-label="Star on GitHub" href="https://github.com/LiudmilaE/vue-internet-shop-simple-practice">
					<i class="fa fa-github fa-2" aria-hidden="true"></i>
				</a>
				<router-link to="/basket" class="navbar-item toggle-item">
					<span>  {{orderedProducts.length}} </span> <i class="fa fa-shopping-basket" aria-hidden="true"></i> Basket 
				</router-link>	
			</div>			
		</nav>
		
		<router-view/>
		<footer class="footer">
			<div class="container">
				<div class="content has-text-centered">
					<p> &copy;
						<strong>Simple example - Vue Internet Shop</strong> by <a href="https://www.linkedin.com/in/liudmyla-iefremova/" target="_blank">Liudmyla Iefremova</a>. The source code is available on
						<a href="https://github.com/LiudmilaE" target="_blank"><i class="fa fa-github" aria-hidden="true"></i>GitHub</a>. Powered by <a target="_blank" href="https://vuejs.org/" ><img src="./assets/logo.png" id="vue-logo" alt="Vue.js"></a>
					</p>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
export default {
	name: 'app',
	data() {
		return {
			products: [],
			orderedProducts: [],
		}
	}
}
</script>

<style>
@media screen and (max-width: 769px) {
		#gh-btn {
			display: none;
		}
	}


html {
	margin: 0;
	padding: 0;
	font-size: 20px;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
#vue-logo, #logo {
	height: 15px;
	width: 15px;
	margin-right: 5px;
}
i {
	margin-right: 7px;
	margin-left: 7px;
}
.container {
	padding-top: 40px;
	padding-bottom: 30px;
}

.navbar {
	font-size: 1.2rem;
}
</style>
