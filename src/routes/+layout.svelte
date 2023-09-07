<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl">LockIT</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail" />
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<ul>
			<li><a href="/computers">Computers</a></li>
			<li>Employees</li>
			<li>Printers</li>
			<li>Softwares</li>
			<li>Back-up Restore</li>
			<li>Get Data</li>
			<li>Locations</li>
		</ul>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
