<script>
	const action = "billed"
	let price = {
		dollar: '1,250',
		cents: '00'
	}
	let cust = {
		name: 'Advance Automation & Security',
		address: '14543 Bud Lane, Glen Allen, VA 23059',
		contact: '(804) 798 4606'
	}
</script>

<div>
	<span class="border">
		<svg xmlns="http://www.w3.org/2000/svg">
		  <path fill-rule="evenodd" stroke-dasharray="5,3" stroke-linecap="round" stroke-linejoin="round" d="M1 1h9999"/>
		</svg>
	</span>
	<div class="wrapper">
		<p class="amount"><span class="dollar">${price.dollar}.</span><span class="cent">{price.cents}</span> {action.toUpperCase()} TO <span class="customer">{cust.name}</span></p>
		<p class="customer-info">{cust.address} • {cust.contact}</p>
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