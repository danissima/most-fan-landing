<template>
	<button class="app-button" :type="props.type">
		<slot />
	</button>
</template>

<script lang="ts" setup>
import { ButtonHTMLAttributes } from 'vue'

interface IProps {
	type?: ButtonHTMLAttributes['type']
}

const props = withDefaults(defineProps<IProps>(), {
	type: 'button',
})
</script>

<style lang="scss">
.app-button {
	transition: $transition;
	border-radius: 32px;
	padding: 12px 32px;
	background-color: $color-primary;
	color: #fff;

	@include hover {
		background-color: darken($color-primary, 3%);
	}

	&:active {
		background-color: darken($color-primary, 7%);
	}
}
</style>
