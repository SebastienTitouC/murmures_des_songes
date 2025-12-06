<template>
	<button class="menu-btn">
		<svg viewBox="0 0 21 21" state="burger">
			<rect y="3" width="21" height="2" />
			<rect x="4" y="11" width="17" height="2" />
			<rect x="8" y="19" width="13" height="2" />
		</svg>
	</button>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.menu-btn {
	align-items: center;
	background: none;
	border: none;
	cursor: pointer;
	display: flex;
	grid-area: menu;
	justify-content: center;
	justify-self: end;
	position: relative;

}

.menu-btn svg {
	color: inherit;
	height: 1rem;
	width: 1rem;
	fill: currentColor;
	overflow: visible;
	transition: .45s transform var(--ease-in-out-cubic);
}
</style>