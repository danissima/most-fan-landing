<template>
	<button class="app-button" :type="buttonType">
		<slot />
	</button>
</template>

<script lang="ts" setup>
import { ButtonHTMLAttributes, computed } from 'vue'

interface IProps {
	type?: ButtonHTMLAttributes['type']
}

const props = defineProps<IProps>()

const buttonType = computed(() => {
	return props.type || 'button'
})
</script>

<style lang="scss">
.app-button {
	transition: $transition;
	border-radius: 32px;
	padding: 12px 32px;
	background-color: $button;
	color: #fff;

	@include hover {
		background-color: darken($button, 3%);
	}

	&:active {
		background-color: darken($button, 7%);
	}
}
</style>
