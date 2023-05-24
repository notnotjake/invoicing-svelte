<script>
	export let data
	// export let currency
	
	let action = ''
	if (data.type === 'invoice') {
		action = 'billed to'
	}
	if (data.type === 'estimate') {
		action = 'estimate for'
	}
	
	function dollars ( s ) {
		let d = parseFloat(s).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})
		d = d.split('.')
		return d[0]
	}
	function cents ( s ) {
		let c = parseFloat(s).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})
		c = c.split('.')
		console.log(c)
		return c[1]
	}
</script>

<div>
	<span class="border">
		<svg xmlns="http://www.w3.org/2000/svg">
		  <path fill-rule="evenodd" stroke-dasharray="5,3" stroke-linecap="round" stroke-linejoin="round" d="M1 1h9999"/>
		</svg>
	</span>
	<div class="wrapper">
		<p class="amount"><span class="dollar">${dollars(data.bill.due)}.</span><span class="cent">{cents(data.bill.due)}</span> {action.toUpperCase()} <span class="customer">{data.customer.name}</span></p>
		<p class="customer-info">{data.customer.address} • {data.customer.contact}</p>
	</div>
	<span class="border">
		<svg xmlns="http://www.w3.org/2000/svg">
		  <path fill-rule="evenodd" stroke-dasharray="5,3" stroke-linecap="round" stroke-linejoin="round" d="M1 1h9999"/>
		</svg>
	</span>
</div>

<style lang='scss'>
	div {
		background: hsla(211, 85%, 93%, 0.16);
		letter-spacing: -0.017em;
		.wrapper {
			padding: 0.6rem 2.5rem;
		}
		span.border {
			--line-width: 0.06em;
			display: flex;
			align-items: flex-start;
			width: 100%;
			height: calc(2*var(--line-width));
			z-index: 2;
			svg {
				width: 100%;
				height: 2px;
				stroke: rgba(68, 68, 68, 0.2);
				stroke-width: var(--line-width);
			}
		}
		p.amount {
			font-size: 0.95rem;
		}
		p span.dollar {
			font-weight: 450;
			font-size: 1.15rem;
		}
		p span.cent {
			font-weight: 450;
		}
		p span.customer {
			font-weight: 450;
			font-size: 1.15rem;
		}
		p.customer-info {
			font-size: 0.85rem;
			opacity: 0.8;
		}
		
	}
</style>