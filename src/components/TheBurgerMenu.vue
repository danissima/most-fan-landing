<template>
    <div :class="classes">
        <header class="header burger-menu__header">
            <div class="header__navigation">
                <div class="header__logo">
                    <a href="/">
                        <img src="@/assets/images/logo.png" alt="A star">
                    </a>
                </div>
            </div>
            <div class="header__controls">
                <AppButton>Sign up</AppButton>
                <AppButton
                    class="header__burger"
                    kind="unstyled"
                    @click="closeBurgerMenu"
                >
                    <AppIcon id="cross" />
                </AppButton>
            </div>
        </header>
        <nav class="burger-menu__nav">
            <ul class="burger-menu__list">
                <li class="burger-menu__item"
                    v-for="item in props.links"
                    :key="item.href + item.title"
                >
                    <a :href="item.href" class="burger-menu__link">{{ item.title }}</a>
                </li>
            </ul>
            <ul class="burger-menu__list">
                <h4 class="burger-menu__subtitle">Resources</h4>
                <li class="burger-menu__item"
                    v-for="item in props.resourcesItems"
                    :key="item.href + item.title"
                >
                    <a :href="item.href" class="burger-menu__link">{{ item.title }}</a>
                </li>
            </ul>
        </nav>
        <footer class="footer burger-menu__footer">
            <ul class="footer__socials">
                <li
                    class="footer__social"
                    v-for="item in socials"
                    :key="item.href + item.icon"
                >
                    <a :href="item.href" target="_blank">
                        <AppIcon :id="item.icon" />
                    </a>
                </li>                
            </ul>
            <span class="footer__copyright">© 2022 MOSTFAN LTD. All rights reserved.</span>
        </footer>
    </div>
</template>

<script lang="ts" setup>
import { computed, watch } from 'vue'
import AppButton from '@/components/AppButton.vue'
import AppIcon from '@/components/AppIcon.vue'
import { ILink } from '@/components/TheHeader.vue'
import { IDropdownItem } from '@/components/AppLinkDropdown.vue'

interface ISocialLink {
    href: string
    icon: string
}

interface IProps {
    links: ILink[]
    resourcesItems: IDropdownItem[]
    isOpened: boolean
}

interface IEmits {
    (e: 'close'): void
}

const props = defineProps<IProps>()
const emits = defineEmits<IEmits>()

const socials: ISocialLink[] = [
	{
		href: '#',
		icon: 'twitter',
	},
	{
		href: '#',
		icon: 'linked-in',
	},
	{
		href: '#',
		icon: 'discord',
	},
	{
		href: '#',
		icon: 'telegram',
	},
]

const classes = computed<Record<string, boolean>>(() => {
	return {
		'burger-menu': true,
		'burger-menu_opened': props.isOpened,
	}
})

watch(() => props.isOpened, (newIsOpened) => {
	if (newIsOpened) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = 'auto'
	}
})

function closeBurgerMenu(): void {
	emits('close')
}

</script>

<style lang="scss">
.burger-menu {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    flex-direction: column;
    visibility: hidden;
    opacity: 0;
    transform: translateY(80px);
    display: flex;
    transition: opacity $transition, visibility $transition, transform $transition;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(25px);

    &_opened {
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
    }

    &__nav {
        overflow: auto;
        padding: 32px 0;
    }

    &__list {
        flex-direction: column;
        display: flex;
        padding: 0 16px;
    }

    &__list + &__list {
        margin-top: 48px;
    }

    &__subtitle {
        margin-bottom: 32px;
        font-size: 12px;
        font-weight: 400;
        line-height: 12px;
        text-transform: uppercase;
    }

    &__item {
        font-size: 18px;
        line-height: 24px;

        & + & {
            margin-top: 32px;
        }
    }

    &__link {
        transition: color $transition;
        padding: 0 4px;
        color: $color-link;

        &:active {
            color: $color-primary;
        }
    }

    &__footer {
        margin-top: auto;
    }
}

.footer {
    flex-direction: column;
    align-items: center;
    display: flex;
    padding: 32px 0;
    background-color: $color-dark;

    &__socials {
        display: flex;
        margin-bottom: 32px;
    }

    &__social {
        line-height: 19px;

        & + & {
            margin-left: 32px;
        }

        a {
            color: #fff;
        }
    }

    &__copyright {
        font-size: 14px;
        font-weight: 300;
        line-height: 19px;
        color: #5B5B5B;
    }
}
</style>
