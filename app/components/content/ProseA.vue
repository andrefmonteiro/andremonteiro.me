<script setup>
const props = defineProps({
	href: {
		type: String,
		default: '',
	},
})

const isExternalLink = computed(() => {
	return props.href.startsWith('http://') || props.href.startsWith('https://')
})

const shouldOpenInNewTab = computed(() => {
	return isExternalLink.value
})

const linkAttributes = computed(() => {
	if (shouldOpenInNewTab.value) {
		return {
			target: '_blank',
			rel: 'noopener noreferrer',
		}
	}
	return {}
})
</script>

<template>
	<NuxtLink
		v-if="!shouldOpenInNewTab"
		:to="href"
	>
		<slot />
	</NuxtLink>

	<a
		v-else
		:href="href"
		v-bind="linkAttributes"
	>
		<slot />
	</a>
</template>
