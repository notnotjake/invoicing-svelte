<script>	
	export let bill
	export let currency
	export let billTotal
	
	let due = billTotal(bill.items, bill.credits)
	
</script>

<div class="wrapper narrow">
	{#each bill.credits as {label, date, subtotal, amount}}
		<div>
			<p>{label}<span>{date ? ' ' + date : ''}</span></p>
			{#if amount < 0}
				<p class="credit">({currency(amount * -1)})</p>
			{:else}
				<p>{currency(amount)}</p>
			{/if}
		</div>
	{/each}
	
	<div class="due">
		<p>Amount Due</p>
		<span>
			<svg height="3px" xmlns="http://www.w3.org/2000/svg">
			  <path fill-rule="evenodd" stroke-dasharray="4,10" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M2 1.5h9999"/>
			</svg>
		</span>
		<p class="amount">{currency(due)}</p>
	</div>
</div>

<style lang='scss'>
	div.wrapper {
		width: 100%;
		
		div {
			width: 100%;
			display: flex;
			justify-content: space-between;
			padding-bottom: 0.15rem;			
			p {
				font-size: 1rem;
				line-height: 1.2;
				letter-spacing: -0.014em;
				margin-bottom: 0.3rem;
				font-weight: 500;
			}
			span {
				font-style: italic;
				opacity: 0.6;
				font-weight: 400;
				font-size: 0.95rem;
			}
			p.credit {
				color: #09C726;
			}
		}
		div.due {
			padding: 1rem 0;
			display: flex;
			align-items: center;
			gap: 2.4rem;
			p {
				font-size: 1.2rem;
				font-weight: 600;
				letter-spacing: -0.011em;
				flex-shrink: 0;
			}
			p.amount {
				font-weight: 500;
				font-size: 1.25rem;
			}
			span {
				flex-grow: 1;
				svg {
					width: 100%;
					height: 8px;
					stroke: rgba(68, 68, 68, 0.35);
				}
			}
		}
	}
	@media print {
		div.wrapper {
			width: 24rem;
			margin-left: auto;
		}
		div.wrapper div.due {
			gap: 0.5rem;
		}
		div.wrapper p.credit {
			color: #078A00;
		}
	}
</style>