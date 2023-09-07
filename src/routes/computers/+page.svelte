<script lang="ts">
	import { Modal, getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
</script>

<div>
	<div id="title">
		<h1>Computers</h1>
		<a href="/computers/add"><button type="button">Add</button></a>
        <!-- https://www.skeleton.dev/utilities/modals -->
	</div>
</div>

<style>
	#title {
		@apply flex flex-row justify-between;
	}

	#title button {
		@apply btn btn-sm variant-filled-primary order-last me-2;
	}
</style>
