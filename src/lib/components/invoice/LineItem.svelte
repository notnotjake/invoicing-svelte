<script>
	let price = '2,145.00'
</script>

<div class="item">
	<div class="product container">
		<h3>Web Hosting and Maintenance</h3>
		<p class="description">Description of the work performed</p>
	</div>
	<div class="price container">
		<div class="details">
			<h3>3<span class="unit">HRS</span></h3>
			<p class="description">$25/hr</p>
		</div>
		<h3>${price}</h3>
	</div>
</div>

<style lang="scss">
	div.item {
		--bottom-gap: 1.4rem;
		
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		
		padding-top: 1.2rem;
		margin-bottom: var(--bottom-gap);
		
		h3 {
			font-size: 1.05rem;
			line-height: 1.2;
			letter-spacing: -0.014em;
			margin-bottom: 0.3rem;
			font-weight: 500;
		}
		p.description {
			font-size: 0.9rem;
			letter-spacing: -0.01em;
			line-height: 1;
			opacity: 0.8;
		}
		span.unit {
			font-size: 0.85rem;
		}
		
		div.product {
			flex-basis: 55%;
			h3 {
				font-weight: 450;
			}
			h3, p {
				overflow: hidden;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
			}
		}
		div.price {
			display: flex;
			justify-content: space-between;
			flex-grow: 1;
			flex-wrap: wrap-reverse;
			
			text-align: right;
			
			div.details {
				display: flex;
				flex-direction: column;
				flex-wrap: wrap;
				flex-grow: 1;				
			}
			h3 {
				flex-grow: 2;
				margin-left: 1rem;
			}
		}
	}
	div.item::after {
		content: "";
		position: absolute;
		left: -0.2rem;
		bottom: calc(-1 * var(--bottom-gap));
		width: calc(100% + 0.4rem);
		height: 2px;
		border-radius: 1rem;
		background: hsla(0, 0%, 0%, 0.13);
	}
	@media (max-width:80rem) {
		div.item div.price div.details {
			flex-direction: row;
			align-items: flex-end;
			justify-content: flex-end;
			gap: 2rem;
			
		}
	}
</style>