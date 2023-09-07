<script lang="ts">
	import { db } from '$lib/db';
	import type { Employee, Computer, Printer, OfficeLocation, Software } from '$lib/db';
	import { onMount } from 'svelte';
	let computer: Computer = {
		name: '',
		ipAddress: '',
		macAddress: '',
		memory: null,
		processor: '',
		motherBoard: '',
		windowsVersion: '',
		installationDate: null,
		monitor: '',
		videoAdaptor: '',
		disk1: '',
		disk2: '',
		remoteConnectionId: '',
		remoteConnectionPass: '',
		OfficeLocationId: null,
		notes: '',
		softwareIDs: null,
		printerIDs: null
	};
	let locationsList: OfficeLocation[] = [];
	let printersList: Printer[] = [];
	let softwaresList: Software[] = [];
	let show = false;

	onMount(async () => {
		try {
			const locations = await getLocations();
			locationsList = locations;
			const printers = await getPrinters();
			printersList = printers;
			console.log('ℹ  ~ onMount ~ printersList:', printersList);

			const softwares = await getSoftwares();
			softwaresList = softwares;
		} catch (error) {
			console.log('ℹ  ~ onMount ~ error:', error);
		}
	});
	const getLocations = async () => {
		return await db.officeLocations.toArray();
	};
	const getPrinters = async () => {
		return await db.printers.toArray();
	};
	const getSoftwares = async () => {
		return await db.softwares.toArray();
	};
	async function addComputer(comp: Computer): Promise<void> {
		try {
			const id = await db.computers.add(comp);
		} catch (error) {
			console.log('ℹ  ~ addComputer ~ error:', error);
		}
	}
</script>

<section>
	<h2>Add New Computer</h2>
	<form on:submit|preventDefault={() => addComputer(computer)}>
		<fieldset>
			<label class="label" title="Name Input">
				<span>Name</span>
				<input class="input" type="text" id="name" bind:value={computer.name} />
			</label>
			<label class="label">
				<span>IP Address:</span>
				<input type="text" id="ipAddress" bind:value={computer.ipAddress} />
			</label>
			<label class="label">
				<span>Mac Address:</span>
				<input type="text" id="macAddress" bind:value={computer.macAddress} />
			</label>
			<label class="label">
				<span>Memory:</span>
				<input type="text" id="memory" bind:value={computer.memory} />
			</label>
			<label class="label">
				<span>Processor:</span>
				<input type="text" id="processor" bind:value={computer.processor} />
			</label>
			<label class="label">
				<span>Motherboard:</span>
				<input type="text" id="motherBoard" bind:value={computer.motherBoard} />
			</label>
			<label class="label">
				<span>Windows Version:</span>
				<input type="text" id="windowsVersion" bind:value={computer.windowsVersion} />
			</label>
			<label class="label">
				<span>Installation Date:</span>
				<input type="date" id="installationDate" bind:value={computer.installationDate} />
			</label>
			<label class="label">
				<span>Monitor:</span>
				<input type="text" id="monitor" bind:value={computer.monitor} />
			</label>
			<label class="label">
				<span>Video Adaptor:</span>
				<input type="text" id="videoAdaptor" bind:value={computer.videoAdaptor} />
			</label>
			<label class="label">
				<span>Disk 1:</span>
				<input type="text" id="disk1" bind:value={computer.disk1} />
			</label>
			<label class="label">
				<span>Disk 2:</span>
				<input type="text" id="disk2" bind:value={computer.disk2} />
			</label>
			<label class="label">
				<span>Remote Connection ID:</span>
				<input type="text" id="remoteConnectionId" bind:value={computer.remoteConnectionId} />
			</label>
			<label class="label">
				<span>Remote Connection Password:</span>

				{#if show}
					<input type="text" id="remoteConnectionPass" bind:value={computer.remoteConnectionPass} />
				{:else}
					<input
						type="password"
						id="remoteConnectionPass"
						bind:value={computer.remoteConnectionPass}
					/>
				{/if}

				<label>
					<input type="checkbox" bind:checked={show} /> Show Password
				</label>
			</label>
			{#if locationsList.length > 0}
				<label class="label">
					<span>Location in Office Area</span>
					<select id="locationId" bind:value={computer.OfficeLocationId}>
						{#each locationsList as location (location.id)}
							<option value={location.id}>{location.name}</option>
						{/each}
					</select>
				</label>
			{/if}
			{#if softwaresList.length > 0}
				<label class="label">
					<span>Softwares:</span>
					<select id="softwareid" bind:value={computer.softwareIDs}>
						{#each softwaresList as software (software.id)}
							<option value={software.id}>{software.name}</option>
						{/each}
					</select>
				</label>
			{/if}
			{#if printersList.length > 0}
				<label class="label">
					<span>Printers:</span>
					<select id="printerid" bind:value={computer.printerIDs}>
						{#each printersList as printer (printer.id)}
							<option value={printer.id}>{printer.name}</option>
						{/each}
					</select>
				</label>
			{/if}

			<label class="label">
				<span>Notes</span>
				<textarea
					class="textarea"
					rows="4"
					placeholder="Enter some long form content."
					id="notes"
					bind:value={computer.notes}
				/>
			</label>
			<button class="btn variant-filled" type="submit">send</button>
		</fieldset>
	</form>
</section>
