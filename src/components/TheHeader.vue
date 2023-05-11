<template>
	<header class="header">
		<div class="header__navigation">
			<div class="header__logo">
				<a href="/">
					<img src="@/assets/images/logo.png" alt="A star">
				</a>
			</div>
			<nav class="header__nav">
				<ul class="header__list">
					<li v-for="link in links" :key="link.title">
						<a :href="link.href" class="header__link">{{ link.title }}</a>
					</li>
				</ul>
			</nav>
		</div>
		<div class="header__controls">
			<AppButton>Sign up</AppButton>
		</div>
	</header>
</template>

<script lang="ts" setup>
import AppButton from './AppButton.vue'

interface ILink {
	href: string
	title: string
}

const links: ILink[] = [
	{
		href: '#',
		title: 'Home',
	},
	{
		href: '#',
		title: 'Launchpad',
	},
	{
		href: '#',
		title: 'Exchange',
	},
	{
		href: '#',
		title: 'Marketplace',
	},
]
</script>

<style lang="scss">
	.header {
		justify-content: space-between;
		align-items: center;
		display: flex;
		padding: 12px 42px;

		&__navigation {
			align-items: center;
			display: flex;	
		}

		&__logo {
			margin-right: 56px;
		}

		&__list {
			gap: 48px;
			display: flex;
		}

		&__link {
			transition: $transition;
			padding: 0 4px;
			font-size: 14px;
			color: $link;

			@include hover {
				color: $link-hover;
			}

			&:active {
				color: $link-active;
			}
		}
	}
</style>
