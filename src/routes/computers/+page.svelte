<script lang="ts">
	import type { PageData } from './$types';
	import { superForm, setMessage, setError } from 'sveltekit-superforms/client';
	import AddComputer from '$lib/components/computers/AddComputer.svelte';
</script>

<div>
	<div id="title">
		<h1>Computers</h1>
		<!-- <a href="/computers/add"><button type="button">Add</button></a>
		https://www.skeleton.dev/utilities/modals -->
	</div>
	<AddComputer />
</div>

<style>
	#title {
		@apply flex flex-row justify-between;
	}

	/* 	#title button {
		@apply btn btn-sm variant-filled-primary order-last me-2;
	} */
</style>
