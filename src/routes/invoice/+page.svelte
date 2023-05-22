<script>
	import Header from '$lib/components/invoice/Header.svelte'
	import Summary from '$lib/components/invoice/Summary.svelte'
	import LineItem from '$lib/components/invoice/LineItem.svelte'
	import Sum from '$lib/components/invoice/Sum.svelte'
	import Payments from '$lib/components/invoice/Payments.svelte'
	
	const width = '33rem' // 42rem is pretty good
	const context = 'web' // Options: web, mail, print
	
	const data = {
		info: {
			type: 'invoice',
			date: {
				iso: '9/20/2023',
				string: 'sep 20, 2023',
				due: 'oct 20, 2023'
			},
		},
		customer: {
			id: 'AH',
			name: 'Advance Automation & Security',
			address: '14543 Bud Lane, Glen Allen VA 23059',
			contact: '(305) 555 8888',
			paymentPref: 'online'
		},
		bill: {
			items: [
				{
					title: 'Web Hosting and Maintenance',
					description: 'Description of the work done',
					unit: 'Mo',
					qty: 1,
					unitNote: 'Monthly',
					price: 245.00
				}
			],
			sum: {
				subtotal: 123.00,
				payments: 0,
				due: 123.00
			}
		},
		payment: {
			url: 'payment url',
		}
	}
</script>

<div class="card" style="--width:{width};">
	<div class="card-accent">
		<div class="border"></div>
		<div class="gradient"></div>
	</div>
	<div class="container">
		<Header />
		<Summary />
		
		<div class="bill">
			<LineItem />
			<LineItem />
		</div>
		
		<Sum {data} />
		<!-- <Payments /> -->
		
		<p class="emphasis">Thank You!</p>
	</div>
</div>


<style lang='scss'>
	html, body {
		background: #F1F2F4;
	}
	
	.emphasis {
		text-transform: uppercase;
		color: #C17811;
		text-align: center;
		padding: 2.3rem 0;
	}
	
	div.card {
		/* max-width: 42rem; */
		/* max-width: var(--width); */
		width: 50vw;
		min-height: 100lvh;
		margin: auto;
		
		background: white;
		border-left: 1px solid hsla(0, 0%, 96%, 1.00);
		border-right: 1px solid hsla(0, 0%, 96%, 1.00);
		box-shadow: 0 0 0.05rem 0.05rem rgba(0,0,0,0.05);
		
		div.container {
			width: 100%;
			/* padding: 0 2.6rem; */
		}
		
		div.bill {
			padding: 1.8rem 2.5rem;
		}
		
		div.card-accent {
			position: absolute;
			top: 0;
			width: 100%;
			
			div {
				width: 100%;
				height: 100%;
			}
			div.border {
				height: 0.4rem;
				background: linear-gradient(270deg, 
					#9FCFFF 0%,
					#66B1F3 50%, 
					#9FCFFF 100%);
			}
			div.gradient {
				min-height: 7rem;
				height: 100%;
				max-height: 30rem;
				background: linear-gradient(to bottom, 
					hsl(214, 58%, 90%) 0%, 
					hsla(214, 58%, 90%, 0) 100%);
			}
		}
	}
</style>