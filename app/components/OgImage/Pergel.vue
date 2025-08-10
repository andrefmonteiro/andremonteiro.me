<script setup lang="ts">
/**
 * @credits Pergel <https://nuxtlabs.com/> // should i keep this? how does it work?
 */

defineProps<{
	parentRoute?: string
	title?: string
	description?: string
}>()
</script>

<template>
	<div class="w-full h-full flex flex-col justify-center bg-[#02120f]">
		<svg
			class="absolute top-0 right-0"
			width="1200"
			height="675"
			viewBox="0 0 1200 675"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g
				style="mix-blend-mode:overlay"
				opacity="0.4"
				filter="url(#filter0_f_448_25)"
			>
				<circle
					cx="901.5"
					cy="45.5"
					r="199.5"
					fill="#064e3b"
				/>
				<circle
					cx="600.5"
					cy="216.5"
					r="199.5"
					fill="#047857"
				/>
				<circle
					cx="179.5"
					cy="317.5"
					r="199.5"
					fill="#10b981"
				/>
			</g>
			<defs>
				<filter
					id="filter0_f_448_25"
					x="-240"
					y="-374"
					width="1561"
					height="1111"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood
						flood-opacity="0"
						result="BackgroundImageFix"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feGaussianBlur
						stdDeviation="110"
						result="effect1_foregroundBlur_448_25"
					/>
				</filter>
			</defs>
		</svg>

		<div class="w-[70vw] pl-[100px]">
			<p
				v-if="parentRoute"
				class="uppercase text-[24px] text-[#10b981] mb-4 font-semibold tracking-wide"
			>
				{{ parentRoute }}
			</p>
			<h1
				class="m-0 text-6xl font-semibold mb-4 text-[#f2f3f2]"
				style="display: block;"
			>
				{{ title }}
			</h1>
			<p
				class="text-[32px] text-[#E4E4E7] leading-tight"
				style="display: block; line-clamp: 3;"
			>
				{{ description }}
			</p>
		</div>
		<!-- SVG logo here -->
	</div>
</template>
