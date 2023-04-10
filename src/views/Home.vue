<template>
	<div class="wrapper">
		<Header/>

		<!-- HOME -->
		<section class="home">
			<div class="center">
				<div class="home-content">
					<h1 class="animated">Chase Your<br>
					Dream with us</h1>
					<p>The harder you work for something, the greater you’ll<br> feel when you achieve it.</p>
					<div class="btn-group">
						<a href="#" class="btn">Apply Online</a>
						<a href="#" class="btn empty">Loan Caclulator</a>
					</div>

					<div class="social">
						<a href="#" class="tel">
							<svg><use xlink:href="#ic-tel"></use></svg>
							<span>+1 (650) 977-9749</span>
						</a>

						<a href="#" class="fb">
							<svg><use xlink:href="#ic-fb"></use></svg>
						</a>

						<a href="#" class="you">
							<svg><use xlink:href="#ic-you"></use></svg>
						</a>

						<a href="#" class="in">
							<svg><use xlink:href="#ic-in"></use></svg>
						</a>

						<a href="#" class="ins">
							<svg><use xlink:href="#ic-ins"></use></svg>
						</a>
					</div>
				</div>

				<div class="home-slider">
					<a href="#" class="btn-home btn-car">
						<svg><use xlink:href="#ic-car"></use></svg>
						<span>Car Loans</span>
					</a>

					<a href="#" class="btn-home btn-house">
						<svg><use xlink:href="#ic-home"></use></svg>
						<span>Car Loans</span>
					</a>

					<div class="slide">
						<Splide :options="{ type: 'fade', arrows: false, autoplay: true  }" aria-label="My Favorite Images">
						    <SplideSlide>
						    	<img src="../assets/img/slide-1.png" alt="">
						    </SplideSlide>
						    <SplideSlide>
						    	<img src="../assets/img/slide-1.png" alt="">
						    </SplideSlide>
						    <SplideSlide>
						    	<img src="../assets/img/slide-1.png" alt="">
						    </SplideSlide>
						</Splide>
					</div>
				</div>
			</div>
		</section>
		<!-- // HOME -->

		<!-- ADVENTAGE -->
		<section class="advantage">
			<div class="center">
				<div class="tx-c">
					<h2 class="title animated">Creating Extraordinary Customer Experience</h2>
					<p class="subtitle animated">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum eget morbi dignissim<br> eu pharetra consequat montes, sagittis.</p>
				</div>

				<ul class="advantage-icons">
					<li>
						<svg><use xlink:href="#ic-icon1"></use></svg>
						<h3 class="animated">Integrity</h3>
						<p class="animated">Displaying the highest<br> level of Integrity in the<br> way we conduct our<br> business</p>
					</li>

					<li>
						<svg><use xlink:href="#ic-icon2"></use></svg>
						<h3 class="animated">Demonstrate</h3>
						<p class="animated">Demonstrating a strong<br> Will to Win in the market<br> place</p>
					</li>

					<li>
						<svg><use xlink:href="#ic-icon3"></use></svg>
						<h3 class="animated">Diversity</h3>
						<p class="animated">Promoting Diversity in the<br> work place and community</p>
					</li>

					<li>
						<svg><use xlink:href="#ic-icon4"></use></svg>
						<h3 class="animated">Teamwork</h3>
						<p class="animated">Lorem ipsum dolor sit<br> amet, consectetur<br> adipiscing elit. A semper<br> aenean id pen</p>
					</li>

					<li>
						<svg><use xlink:href="#ic-icon1"></use></svg>
						<h3 class="animated">Collaboration</h3>
						<p class="animated">Displaying the highest<br> level of Integrity in the<br> way we conduct our<br> business</p>
					</li>

					<li>
						<svg><use xlink:href="#ic-icon5"></use></svg>
						<h3 class="animated">Technology</h3>
						<p class="animated">Harnessing the power of<br> Technology to deliver<br> better customer experience</p>
					</li>

					<li>
						<svg><use xlink:href="#ic-icon6"></use></svg>
						<h3 class="animated">Corporate</h3>
						<p class="animated">Setting the standard for<br> the best Corporate<br> Citizenship in the<br> communities we work</p>
					</li>

					<li>
						<svg><use xlink:href="#ic-icon6"></use></svg>
						<h3 class="animated">Digital</h3>
						<p class="animated">Setting the standard for<br> the best Corporate<br> Citizenship in the<br> communities we work</p>
					</li>
				</ul>
			</div>
		</section>
		<!-- // ADVENTAGE -->

		<!-- PARTNERS -->
		<section class="partners">
			<div class="center">
				<h2 class="title tx-c animated">BUSINESS PARTNERS</h2>
				<div class="slide">
					<Splide 
						:options="{
							type: 'loop',
							arrows: false,
							autoplay: true,
							perPage: 4,
						  	perMove: 1,
						  	gap: '140px',
						    breakpoints: {
						        991: {
						            perPage: 3,
						            gap: '0px',
						        },
						        750: {
						            perPage: 1,
						        }
						    }
						}">
					    <SplideSlide>
					    	<img src="../assets/img/partner-1.png" alt="">
					    </SplideSlide>
					    <SplideSlide>
					    	<img src="../assets/img/partner-2.png" alt="">
					    </SplideSlide>
					    <SplideSlide>
					    	<img src="../assets/img/partner-3.png" alt="">
					    </SplideSlide>
					    <SplideSlide>
					    	<img src="../assets/img/partner-4.png" alt="">
					    </SplideSlide>
					    <SplideSlide>
					    	<img src="../assets/img/partner-1.png" alt="">
					    </SplideSlide>
					    <SplideSlide>
					    	<img src="../assets/img/partner-2.png" alt="">
					    </SplideSlide>
					    <SplideSlide>
					    	<img src="../assets/img/partner-3.png" alt="">
					    </SplideSlide>
					    <SplideSlide>
					    	<img src="../assets/img/partner-4.png" alt="">
					    </SplideSlide>
					</Splide>
				</div>
			</div>
		</section>
		<!-- // PARTNERS -->

		<!-- READ -->
		<section class="read">
			<div class="center">
				<div class="read-background">
					<img src="../assets/img/bg-read.png" alt="">
				</div>

				<div class="read-content">
					<div>
						<h2 class="title animated">KAIZEN AT A GLANCE</h2>
						<p class="animated">Kaizen Financial is the first private sector financial institution of the country established in 1981 by a distinguished group of shareholders namely Kaizen Finance Corporation (KFC), USA, German Investment and Development Company (DEG), Germany, The Aga Khan Fund for Economic Development (AKFED), Switzerland, Commonwealth Development Corporation (CDC), UK and the Government of Bangladesh</p>
						<a href="#" class="btn-read animated">
							<span>Read More</span>
							<svg><use xlink:href="#ic-arr"></use></svg>
						</a>
					</div>
				</div>
			</div>
		</section>
		<!-- // READ -->

		<!-- SERVICES -->
		<section class="services">
			<div class="center">
				<div class="tx-c">
					<h2 class="title animated">Our Services</h2>
					<p class="subtitle animated">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor eleifend.</p>
				</div>

				<div class="services-list">
					<div class="item">
						<div class="image">
							<img src="../assets/img/service-1.png" alt="">
						</div>
						<a href="#" class="animated">
							<h3>Kaizen SAVING<br> SCHEMES</h3>
							<div>
								<svg><use xlink:href="#ic-arr"></use></svg>
							</div>
						</a>
					</div>

					<div class="item">
						<div class="image">
							<img src="../assets/img/service-2.png" alt="">
						</div>
						<a href="#" class="animated">
							<h3>Kaizen Personal<br> loan</h3>
							<div>
								<svg><use xlink:href="#ic-arr"></use></svg>
							</div>
						</a>
					</div>

					<div class="item">
						<div class="image">
							<img src="../assets/img/service-3.png" alt="">
						</div>
						<a href="#" class="animated">
							<h3>Kaizen Deposit<br> schemes</h3>
							<div>
								<svg><use xlink:href="#ic-arr"></use></svg>
							</div>
						</a>
					</div>

					<div class="item">
						<div class="image">
							<img src="../assets/img/service-4.png" alt="">
						</div>
						<a href="#" class="animated">
							<h3>Kaizen auto<br> loan</h3>
							<div>
								<svg><use xlink:href="#ic-arr"></use></svg>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>
		<!-- // SERVICES -->

		<!-- RESULTS -->
		<section class="results">
			<div class="center">
				<div class="tx-c">
					<h2 class="title animated">Our best results for the year</h2>
					<p class="subtitle animated">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel<br> feugiat erat tortor eleifend.</p>
				</div>

				<ul class="results-list">
					<li>
						<div class="number">57.6 bn</div>
						<h3 class="animated">LOAN PORTFOLIO</h3>
					</li>

					<li>
						<div class="number">0.95%</div>
						<h3 class="animated">CLASSIFIED LOAN<br> PORTFOLIO</h3>
					</li>

					<li>
						<div class="number">388.5%</div>
						<h3 class="animated">CLASSIFIED LOAN<br> Coverage</h3>
					</li>

					<li>
						<div class="number">50.4 bn</div>
						<h3 class="animated">Deposit</h3>
					</li>

					<li>
						<div class="number">6.1 bn</div>
						<h3 class="animated">Shareholders equity</h3>
					</li>

					<li>
						<div class="number">18.51%</div>
						<h3 class="animated">Capital Adequacy<br> Ratio</h3>
					</li>

					<li>
						<div class="number">8.5 bn</div>
						<h3 class="animated">Market<br> Capitalization</h3>
					</li>

					<li>
						<div class="number">AAA</div>
						<h3 class="animated">Credit Rating</h3>
					</li>
				</ul>
			</div>
		</section>
		<!-- // RESULTS -->

		<!-- NEWSLETTER -->
		<Newsletter/>
		<!-- // NEWSLETTER -->

		<!-- FOOTER -->
		<Footer/>
		<!-- // FOOTER -->
	</div>
</template>

<script>
	import Header from '@/components/Header';
	import Newsletter from '@/components/Newslatter';
	import Footer from '@/components/Footer';

	export default {
		components: {Header, Newsletter, Footer},
		mounted() {
            this.animScrollPage();
        },
        methods: {
            animScrollPage() {
                const elems = document.querySelectorAll('.animated');
                const options = {rootMargin: '0px'}

                const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting)
                            entry.target.classList.add('show');
                        else 
                            entry.target.classList.remove('show');
                    });
                }, options);
               
                elems.forEach(elem => {
                    observer.observe(elem);
                });
            }
        }
	}
</script>

<style lang="scss">
	/* --------------- HOME --------------- */
	.home {
		.center {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-auto-rows: min(682px);
		}
	}

	.home-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;

		h1 {
			font-weight: 400;
			font-size: 63px;
			line-height: 1.1;
			color: #010101;
		}

		p {
			color: #676767;
			margin: 20px 0 35px 0;
		}

		.btn-group {
			max-width: 334px;
			.btn {max-width: 157px;}
		}

		.social {
			position: absolute;
			top: 100%;
			left: 0;
			bottom: 0;
		}
	}

	.home-slider {
		background: var(--akcent2);
		position: absolute;
		top: 0;
		right: 0;
		width: 50%;
		min-height: 682px;

		.slide {
			position: absolute;
			left: -175px;
			right: 0;
			bottom: -90px;
		}
		.splide .splide__slide img {
			display: block;
			width: 100%;
		}

		& .splide__pagination {
			position: absolute !important;
			flex-direction: column;
			left: initial !important;
			right: 45px !important;
			padding: 0 !important;
			bottom: 200px !important;

			li {margin: 9px 0 !important;}
		}

		.btn-car {
			position: absolute;
			top: 145px;
			left: -70px;
			z-index: 10;
		}
		.btn-house {
			position: absolute;
			top: 50%;
			right: 80px;
			z-index: 10;
			transform: translateY(-50%);
			margin-top: -50px;
		}
	}

	.btn-home {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 180px;
		height: 71px;
		box-shadow: 4px 4px 58px rgba(0, 0, 0, 0.12);
		border-radius: 56px;
		font-size: 18px;
		background: #fff;
		color: #343434;
		text-decoration: none;
		transition: all 0.3s;

		&:hover {box-shadow: none;}

		svg {
			width: 30px;
			height: 30px;
			margin-right: 20px;
			fill: var(--akcent);
		}
	}

	/* --------------- ADVENTAGE --------------- */
	.advantage {padding: 150px 0 50px 0;}
	.advantage-icons {
		display: grid;
		grid-template-columns: repeat(4, 160px);
		justify-content: space-between;
		margin-top: 90px;
		list-style: none;

		li {
			margin-bottom: 50px;
			svg {
				width: 38px;
				height: 38px;
			}
			h3 {
				font-weight: normal;
				font-size: 22px;
				color: #363940;
				margin-top: 8px;
			}
			p {
				margin-top: 8px;
				font-size: 14px;
				line-height: 1.6;
				color: #999999;
			}
		}
	}
	
	/* --------------- PARTNERS --------------- */
	.partners {
		background: var(--pink);
		padding: 75px 0;

		.splide {
			margin-top: 70px;
		}
		.splide .splide__slide img {
			max-width: 185px;
		}
		.splide__pagination {margin-top: 65px;}
	}
	
	/* --------------- READ --------------- */
	.read {
		.center {
			display: grid;
			grid-template-columns: 1fr 1.2fr;
		}

		.btn-read {
			display: flex;
			align-items: center;
			color: var(--akcent);
			font-size: 19px;
			text-decoration: none;
			transition: all 0.3s;

			span {
				margin-right: 30px;
			}
			svg {
				width: 15px;
				height: 15px;
				fill: var(--akcent);
				transition: all 0.3s;
			}
			&:hover {color: #000;}
			&:hover svg {
				transform: translateX(10px);
				fill: #000;
			}
		}
	}

	.read-background {
		display: flex;
		margin-left: -15px;
		img {
			object-fit: cover;
			object-position: center;
		}
	}

	.read-content {
		display: grid;
		place-items: center;
		padding: 100px;
		p {
			color: #676767;
			line-height: 1.8;
			margin-bottom: 45px;
		}
	}

	/* --------------- SERVICES --------------- */
	.services {
		background: var(--pink);
		padding: 100px 0 130px 0;
	}

	.services-list {
		margin-top: 65px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 50px;

		.image {
			border-radius: 9px;
			overflow: hidden;
			img {
				display: block;
				width: 100%;
			}
		}
		
		a {
			display: flex;
			align-items: center;
			text-decoration: none;
			justify-content: space-between;
			color: #363940;
			margin-top: 20px;
			transition: all 0.3s;

			&:hover {color: var(--akcent);}

			h3 {
				font-size: 21px;
				letter-spacing: 1px;
				font-weight: normal;
				text-transform: uppercase;
			}

			& div {
				width: 30px;
				height: 30px;
				min-width: 30px;
				background: #FCE0EF;
				border-radius: 50%;
				display: inline-flex;
				align-items: center;
				justify-content: center;
			}

			& div svg {
				width: 15px;
				height: 15px;
				fill: var(--akcent);
			}
		}
	}
	
	/* --------------- RESULTS --------------- */
	.results {padding: 100px 0;}

	.results-list {
		list-style: none;
		display: grid;
		grid-template-columns: repeat(4, 170px);
		justify-content: space-between;
		grid-gap: 55px 20px;
		margin-top: 85px;

		.number {
			font-size: 40px;
			color: #343434;
		}
		h3 {
			font-weight: normal;
			font-size: 16px;
			color: #676767;
			letter-spacing: 1px;
			text-transform: uppercase;
		}
	}

	@media screen and (max-width: 991px) {
		/* HOME */
		.home .center {grid-auto-rows: min(500px);}
		.home-content h1 {font-size: 40px;}
		.home-slider {min-height: 500px;}
		.home-slider .slide {
		    left: -115px;
		    bottom: -45px;
		}
		.btn-home {
			min-width: 150px;
			height: 50px;
			font-size: 16px;
		}
		.btn-home svg {
			width: 25px;
		    height: 25px;
		    margin-right: 15px;
		}
		.home-slider .btn-car {top: 75px;}
		.home-slider .btn-house {
			right: 15px;
			margin-top: -100px;
		}

		.home-content .social {
			position: static;
			margin-top: 20px;
		}

		/* ADVANTEGE */
		.advantage {padding: 70px 0 20px 0;}
		.advantage-icons {
		    grid-template-columns: repeat(3, 160px);
		    margin-top: 50px;
		}
		.advantage-icons li {margin-bottom: 30px}

		/* PARTNERS */
		.partners {padding: 50px 0;}
		.partners .splide {margin-top: 30px;}
		.partners .splide .splide__slide {text-align: center;}
		.partners .splide__pagination {margin-top: 30px;}

		/* READ */
		.read-content {padding: 30px;}
		.read-content p {margin-bottom: 20px;}

		/* SERVICES */
		.services {padding: 50px 0 50px 0;}
		.services-list {
		    margin-top: 35px;
		    grid-gap: 15px;
		}
		.services-list a h3 {font-size: 15px;}

		/* RESULTS */
		.results {padding: 50px 0;}
		.results-list {
		    grid-template-columns: repeat(4, 140px);
		    grid-gap: 30px 15px;
		    margin-top: 30px;
		}
	}

	@media screen and (max-width: 750px) {
		/* HOME */
		.home .center {
			grid-template-columns: 1fr;
			grid-auto-rows: inherit;
		}
		.home-content {
			padding: 50px 0 0 0;
			order: 1;
			text-align: center;
		}
		.home-content p br {display: none;}
		.home-slider {
		    min-height: initial;
		    position: static;
		    width: initial;
		    margin-left: -15px;
		    margin-right: -15px;
		    padding-top: 150px;
		}
		.home-slider .slide {
			position: static;
			margin-bottom: -40px;
		}
		.home-slider .splide__pagination {
			bottom: 100px !important;
			right: 15px !important;
		}
		.home-slider .btn-house {
		    right: 15px;
		    top: 140px;
		    margin-top: 0;
		}
		.home-slider .btn-car {
		    top: 90px;
		    left: 15px;
		}

		/* ADVANTAGE */
		.advantage {padding: 50px 0 20px 0;}
		.advantage-icons {grid-template-columns: repeat(2, 160px);}

		/* READ */
		.read .center {grid-template-columns: 1fr;}
		.read-background {
		    margin-left: -15px;
		    margin-right: -15px;
		}
		.read-content {padding: 30px 0;}

		/* SERVICES */
		.services-list {
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 15px;
		}

		/* RESULTS */
		.results-list {grid-template-columns: repeat(2, 140px);}
	}
</style>