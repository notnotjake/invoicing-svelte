<script>
	export let data
	
	function dateString ( d ) {
		return new Date(d).toLocaleString('en-us',{month:"short", day:"numeric", year:"numeric"})
	}
</script>

<div id="header" class="wrapper narrow">
	<h1 class="logo">Light<em>Dance</em></h1>
	
	<div class="info">
		<h2>{data.type}</h2>
		<p id="customer">{data.customer.id}</p>
		<p id="id"><strong>{data.project}</strong>{data.bill.id}</p>
		<p id="date" class="emphasis">{dateString(data.date)}</p>
	</div>
</div>

<style lang='scss'>
	
	h1.logo {
		padding-top: 1.35rem;
		padding-bottom: 2.8rem;
		text-align: center;
		font-style: italic;
		font-size: 1.5rem;
		font-weight: 800;
		letter-spacing: -0.017em;
		em {
			font-weight: 300;
		}
	}
	
	div.info {
		padding: 3.5rem 0 1.2rem;
		display: flex;
		align-items: flex-end;
		width: 100%;
		h2 {
			font-weight: 700;
			font-size: 1.6rem;
			margin-right: 1.4rem;
			letter-spacing: -0.0163em;
			text-transform: capitalize;
		}
		#customer, #id {
			font-family: 'Courier', 'Courier Prime', monospace;
			font-size: 1.25rem;
			padding: 0.8rem 0.29rem;
			border-radius: 0.3rem;
			background: #E4E4F0;
			/* align-self: center; */
		}
		#customer, #id, #id * {
			line-height: 0;
			align-self: center;
		}
		#customer {
			background: #E4E4F0;
			font-weight: bold;
			margin-right: 0.35rem;
		}
		#id {
			background: #EEEEF3;
			strong {
				font-weight: bold;
			}
		}
		
		#date {
			flex-grow: 1;
			font-size: 0.95rem;
			font-weight: 500;
			text-align: right;
		}
	}
	
	div.web-presentation {
		div.card {
			display: flex;
			flex-direction: column;
			max-width: 22rem;
			margin: auto;
			padding: 1.2rem 0.8rem;
			
			color: white;
			
			border-radius: 0.6rem;
			background: linear-gradient(to bottom, 
				hsla(211, 72%, 37%, 1.00) 0%, 
				#5E8CEB 100%
			);
			picture, img {
				mix-blend-mode: screen;
				opacity: 0.6;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
			}
			h1 {
				font-size: 1.45rem;
				margin-bottom: 0.5rem;
			}
			h2 {
				font-size: 1.05rem;
				font-weight: 600;
				line-height: 0.9;
			}
			p {
				font-size: 1rem;
				opacity: 0.9;
			}
		}
	}
	
	@media print {
		div.web-presentation {
			display: none;
		}
		h1.logo {
			padding-top: 0.5rem;
			padding-bottom: 0rem;
		}
		div.info {
			padding-top: 2.5rem;
		}
	}
</style>