<template>
	<nav class="menu">
        <ul>
            <li v-for="(link, index) in menu" :key="index">
            	<router-link :to="link.href">{{ link.title }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
	export default {
		data() {
			return {
				menu: [
					{
						href: '/Retail',
						title: 'Retail'
					},
					{
						href: '/SME',
						title: 'SME'
					},
					{
						href: '/Corporate',
						title: 'Corporate'
					},
					{
						href: '/About Us',
						title: 'About Us'
					},
					{
						href: '/Covid 19',
						title: 'Covid 19'
					},
					{
						href: '/Campgains',
						title: 'Campgains'
					}
				]
			}
		}
	}
</script>

<style lang="scss">
	.menu {
        ul {
            display: flex;
            list-style: none;
        }
        ul li + li {margin-left: 45px;}
        ul a {
            display: inline-block;
            font-size: 15px;
            text-transform: uppercase;
            letter-spacing: 2px;
            text-decoration: none;
            color: #010101;
            transition: all 0.3s;
        }
        ul a:hover {opacity: 0.3;}
    }
</style>