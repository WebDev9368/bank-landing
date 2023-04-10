<template>
	<section class="newsletter">
		<div class="center">
			<div class="tx-c">
				<h2 class="title animated">Newsletter</h2>
				<p class="subtitle animated">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget<br> ac quis aliquam arcu lacus.</p>
			</div>

			<form action="#" class="form-newsletter">
				<input type="emaiil" placeholder="Your email">
				<button type="submit" class="btn">Subscribe</button>
			</form>
		</div>
	</section>
</template>

<style lang="scss">
	.newsletter {
		padding: 100px 0;
		background: var(--pink);
	}

	.form-newsletter {
		max-width: 500px;
		display: grid;
		grid-template-columns: 1fr 115px;
		grid-gap: 10px;
		margin: 35px auto 0 auto;

		input {
			height: 46px;
			background: #FFFFFF;
			border: 1px solid #CCCCCC;
			color: #CCCCCC;
			border-radius: 4px;
			padding: 0 15px;
			font-family: var(--anaheim);
			font-size: 16px;
			outline: none;
		}
		input::placeholder {color: #CCCCCC;}
	}

	@media screen and (max-width: 991px) {
		.newsletter {padding: 50px 0;}
	}
</style>