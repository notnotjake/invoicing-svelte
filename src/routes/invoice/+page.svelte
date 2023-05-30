<script>
	import site from '$lib/site/data.json'
	import Header from '$lib/components/invoice/Header.svelte'
	import Summary from '$lib/components/invoice/Summary.svelte'
	import LineItem from '$lib/components/invoice/LineItem.svelte'
	import Sum from '$lib/components/invoice/Sum.svelte'
	import Payments from '$lib/components/invoice/Payments.svelte'
	
	// const width = '33rem' // 42rem is pretty good
	// let context = 'web' // Options: web, mail, print
	
	const data = {
		type: 'invoice',
		date: {
			iso: '5/22/2023',
			string: 'may 22, 2023'
		},
		customer: {
			id: 'AH',
			name: 'Advance Automation & Security',
			address: '14543 Bud Lane, Glen Allen VA 23059',
			contact: '(804) 687 6884',
			paymentPref: 'check'
		},
		project: 'L6',
		bill: {
			id: '005',
			items: [
				{
					title: 'Hosting and Maintenance',
					description: 'Email and Website',
					unit: 'Mo',
					qty: 1,
					unitNote: 'Billed Monthly',
					price: 245.00
				}
				// {
				// 	title: 'Tech Consulting',
				// 	description: 'Training and support on new platforms',
				// 	unit: 'Hrs',
				// 	qty: 2.5,
				// 	unitNote: '$70/hr',
				// 	price: 175
				// }
			],
			credits: [
				// {
				// 	label: '5% Discount',
				// 	subtotal: 522.5,
				// 	date: '',
				// 	amount: -25
				// },
				// {
				// 	label: 'Deposit (50%)',
				// 	date: 'Feb 12',
				// 	amount: -245
				// }
			],
			due: 245.00,
			dateDue: 'june 22, 2023'
		},
		payment: {
			url: '/',
			check: {
				valid: true,
				payable: 'LightDance Design',
				mailto: '14543 Bud Ln<br/>Glen Allen VA 23059'
			},
			ach: {
				bank: 'Capital One',
				routing: '424242424',
				account: '42424242424'
			}
		}
	}
	
	const currency = function ( n ) {
		let s = '$' + parseFloat(n).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})
		return s
	}
	
	
	
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	Rudamentary Drag/Drop
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	function handleDragStart (e) {
		console.log('test')
	}


	// const pageTitle = `${data.customer.id} ${data.project}${data.bill.id}`
</script>

<div class="card">
	<div class="card-accent">
		<div class="border"></div>
		<div class="gradient"></div>
	</div>
	<div class="container">
		<Header {data}  />
		<Summary {data} {currency} />
			
		
		<div class="bill wrapper narrow">
			{#each data.bill.items as billItem }
				<LineItem {billItem} {currency}  />
			{/each}
		</div>
		
		<Sum bill={data.bill} {currency} />
		<div class="spacer"></div>
		<Payments {data} />
		
		<p class="emphasis thank-you">Thank You!</p>
	</div>
</div>


<style lang='scss'>
	/* html, body {
		background: #F1F2F4;
	} */
	:global(.emphasis) {
		text-transform: uppercase;
		color: #C17811;
	}
	:global(div.wrapper.narrow) {
		padding-left: 2.5rem;
		padding-right: 2.5rem;
	}
	@media (max-width: 50rem) {
		:global(div.wrapper.narrow) {
			padding-left: 1rem;
			padding-right: 1rem;
		}
	}
	p.thank-you {
		text-align: center;
		padding: 2.3rem 0;
	}
	div.card {
		/* --width: 33rem; */
		max-width: 33rem;
		min-height: 100lvh;
		margin: auto;
		
		background: white;
		border-left: 1px solid hsla(0, 0%, 96%, 1.00);
		border-right: 1px solid hsla(0, 0%, 96%, 1.00);
		box-shadow: 0 0 0.05rem 0.05rem rgba(0,0,0,0.05);
		
		div.container {
			width: 100%;
		}
		div.bill {
			padding-top: 1.6rem;
			padding-bottom: 1rem;
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
	@media print {
		div.card {
			border: none;
			box-shadow: none;
			width: 500px;
			max-width: unset;
			min-height: 0px;
			height: 100vh;
			overflow: hidden;
		}
		div.card div.card-accent {
			display: none;
		}
		div.container {
			height: calc(100vh - 1in);
			display: flex;
			flex-direction: column;
		}
		div.spacer {
			flex-grow: 1;
		}
	}
</style>