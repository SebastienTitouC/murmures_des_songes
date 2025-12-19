<template>
	<button class="menu-btn" @click="onClick" aria-label="Menu Button">
		<svg viewBox="0 0 21 21" state="burger">
			<rect class="g_rect rect1" :class="{'active': model}" y="3" width="21" height="2" />
			<rect class="g_rect rect2" :class="{'active': model}" x="4" y="11" width="17" height="2" />
			<rect class="g_rect rect3" :class="{'active': model}" x="4" y="11" width="17" height="2" />
			<rect class="g_rect rect4" :class="{'active': model}" x="8" y="19" width="13" height="2" />
		</svg>
	</button>
</template>

<script lang="ts" setup>
const model = defineModel<boolean>()

const onClick = () => {
	model.value = !model.value
}
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
	padding: 1rem;

}

.menu-btn svg {
	color: inherit;
	height: 1.4rem;
	width: 1.4rem;
	fill: currentColor;
	overflow: visible;
	transition: .45s transform var(--ease-in-out-cubic);
}

.rect1,
.rect2,
.rect3 {
	transition: all .3s ease-in-out;
}

.g_rect.active {
	width: 21px;
	x: 0;
	transform-origin: center center;
}

.rect1.active {
	animation: animRect1 1.2s ease-in-out forwards;
}

.rect2.active {
	animation: animRect2 1.2s ease-in-out forwards;
}

.rect3.active {
	animation: animRect3 1.2s ease-in-out forwards;
}

.rect4.active {

	animation: animRect4 1.2s ease-in-out forwards;
}

@keyframes animRect1 {
	0% {
		transform: translateY(0px);
		opacity: 1;
	}

	70% {
		transform: translateY(8px);
		opacity: 1;
	}

	71% {
		opacity: 0;
	}

	100% {
		transform: translateY(8px);
		opacity: 0;
	}
}

@keyframes animRect2 {
	0% {
		transform: translateY(0px);
	}

	70% {
		transform: translateY(0px) rotate(0);
	}

	100% {
		transform: translateY(0px) rotate(225deg);
	}
}

@keyframes animRect3 {
	0% {
		transform: translateY(0px);
	}

	70% {
		transform: translateX(0px) rotate(0);
	}

	100% {
		transform: translateX(3px) rotate(135deg);
	}
}

@keyframes animRect4 {
	0% {
		transform: translateY(0px);
	}

	70% {
		transform: translateY(-8px) rotate(0);
		opacity: 1;
	}

	71% {
		opacity: 0;
	}

	100% {
		transform: translateY(-8px);
		opacity: 0;
	}
}
</style>