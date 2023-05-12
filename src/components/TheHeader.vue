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
			<AppLinkDropdown class="header__resources" title="Resources" :items="resourcesItems" />
			<AppButton>Sign up</AppButton>
			<AppButton
				class="header__burger"
				kind="unstyled"
				@click="setIsBurgerMenuOpened(true)"
			>
				<AppIcon id="burger-menu" />
			</AppButton>
		</div>
	</header>
	<TheBurgerMenu
		:links="links"
		:resources-items="resourcesItems"
		:is-opened="isBurgerMenuOpened"
		@close="setIsBurgerMenuOpened(false)"
	/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import AppButton from '@/components/AppButton.vue'
import AppLinkDropdown, { IDropdownItem } from '@/components/AppLinkDropdown.vue'
import AppIcon from '@/components/AppIcon.vue'
import TheBurgerMenu from '@/components/TheBurgerMenu.vue'

export interface ILink {
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

const isBurgerMenuOpened = ref<boolean>(false)

function setIsBurgerMenuOpened(isOpened: boolean): void {
	isBurgerMenuOpened.value = isOpened
}
</script>

<style lang="scss">
	.header {
		justify-content: space-between;
		align-items: center;
		display: flex;
		padding: 12px 42px;

		@include break($xl) {
			padding: 12px 16px;
		}

		&__navigation {
			align-items: center;
			gap: 56px;
			display: flex;	
		}

		&__logo > a {
			display: flex;
			transition: transform $transition;

			@include hover {
				transform: scale(1.1);
			}
		}

		@include break($xl) {
			&__nav {
				display: none;
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

		@include break($xl) {
			&__resources {
				display: none;
			}
		}

		&__burger {
			display: none;

			@include break($xl) {
				display: flex;
			}
		}
	}
</style>
