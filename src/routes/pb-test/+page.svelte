<script>
	export let data	
</script>

<ul>
	{#each data?.projects as project}
	<li>{project.project_id} - {project.name}</li>
	{/each}
</ul>