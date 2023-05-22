<script>
	export let data
	
	const status = {
		paymentsHistory: 0,
		paid: true,
		due: 'OCT 20, 2023'
	}
	let totalComponents = [
		{
			text: 'Deposit (50%)',
			date: 'Feb 12',
			amount: '-245.00'
		}
	]
	let amountDue = 245.00
	
	
	const sum = {
		
	}
</script>

<!-- {#if status.paid }
	<p>Paid. Thanks</p>
{:else}
	
{/if} -->

<div class="container">
	{#each totalComponents as {text, date, amount}}
		{#if amount < 0}
			<div class="credit">
				<p>{text} <span>{date}</span></p>
				<p>({amount * -1})</p>
			</div>
		{:else}
			<div>
				<p>{text}</p>
				<p>{amount}</p>
			</div>
		{/if}
	{/each}
	
	<div>
		<p>Amount Due</p>
		<p>{data.bill.sum.due}</p>
	</div>
	
	<div>
		<p>Please pay before <span>{data.info.date.due}</span></p>
		
		<a href="{data.payment.url}">
			<div>
				<p>Pay Online</p>
				<p>Link in Email</p>
			</div>
		</a>
	</div>
</div>

<style lang='scss'>
	div.container {
		padding: 0 2.5rem;
		width: 100%;
		
		div {
			width: 100%;
			display: flex;
			justify-content: space-between;
		}
	}
	
	div.credit {
		color: green;
	}
</style>