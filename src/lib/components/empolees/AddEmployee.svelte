<script lang="ts">
	import { db } from '$lib/db';
	import type { Employee, Computer } from '$lib/db';
	import { onMount } from 'svelte';
	let computersList: Computer[] = [];
	let selectedComputer: Computer | null = null;
	let employee: Employee = {
		firstName: '',
		lastName: '',
		mail: '',
		phone: '',
		computerId: null 
	};
	onMount(async () => {
		try {
			computersList = await getComputers();
		} catch (error) {
			console.log('Error fetching computers:', error);
		}
	});
	const getComputers = async () => {
		return await db.computers.toArray();
	};
	async function addEmployee(employee: Employee) {
		employee.computerId = selectedComputer?.id;
		try {
			const id = await db.employees.add(employee);
		} catch (error) {
			console.log('ℹ  ~ addEmployee ~ error:', error);
		}
	}
</script>

<form on:submit|preventDefault={() => addEmployee(employee)}>
	<fieldset>
		<input class="input" type="text" required bind:value={employee.firstName} />
		<input class="input" type="text" required bind:value={employee.lastName} />
		<input class="input" type="text" bind:value={employee.mail} />
		<input class="input" type="text" bind:value={employee.phone} />
		{#if computersList}
			<select name="computers" bind:value={selectedComputer}>
				{#each computersList as computer (computer.id)}
					<option value={computer}>{computer.name}</option>
				{/each}
			</select>
		{/if}
		<button class="btn variant-filled" type="submit">send</button>
	</fieldset>
</form>
