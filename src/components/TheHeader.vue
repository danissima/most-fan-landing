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
			<AppLinkDropdown title="Resources" :items="resourcesItems" />
			<AppButton>Sign up</AppButton>
		</div>
	</header>
</template>

<script lang="ts" setup>
import AppButton from '@/components/AppButton.vue'
import AppLinkDropdown, { IDropdownItem } from '@/components/AppLinkDropdown.vue'

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

const resourcesItems: IDropdownItem[] = [
	{
		href: '#',
		title: 'Roadmap',
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

		&__logo > a {
			display: flex;
			transition: transform $transition;

			@include hover {
				transform: scale(1.1);
			}
		}

		&__list {
			gap: 48px;
			display: flex;
		}

		&__list > li {
			font-size: 14px;
			font-weight: 300;
			line-height: 19px;
		}

		&__link {
			transition: color $transition;
			padding: 0 4px;
			color: $color-link;

			@include hover {
				color: darken($color-link, 50%);
			}

			&:active {
				color: $color-primary;
			}
		}

		&__controls {
			gap: 32px;
			align-items: center;
			display: flex;
		}
	}
</style>
