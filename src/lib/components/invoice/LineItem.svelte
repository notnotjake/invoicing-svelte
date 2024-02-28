<script>
	export let billItem	
	export let currency
	
	function total ( i ) {
		if ( i.price && i.price > 0) {
			return i.price
		}
		else {
			return i.unitPrice * i.qty
		}
		return 'error'
	}
	
</script>

<div class="item">
	<div class="product container">
		<h3>{billItem.title}</h3>
		<p class="description">{billItem.description}</p>
	</div>
	<div class="price container">
		<div class="details">
			<h3>{billItem.qty}<span class="unit">{billItem.unit}</span></h3>
			<p class="description">{billItem.unitNote}</p>
		</div>
		<h3 class="price">{currency(total(billItem))}</h3>
	</div>
</div>

<style lang="scss">
	div.item {
		--bottom-gap: 1.2rem;
		
		display: flex;
		justify-content: space-between;
		gap: 0.5rem;
		
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
			text-transform: uppercase;
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
			p.description {
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
		}
		div.price {
			display: flex;
			justify-content: flex-end;
			flex-grow: 1;
			flex-wrap: wrap-reverse;
			text-align: right;
			
			div.details {
				display: flex;
				flex-direction: column;
				flex-wrap: wrap;
				align-items: flex-end;
			}
			h3.price {
				flex-basis: 5.8rem;
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
	
	@media (max-width:50rem) {
		div.item div.price {
			flex-direction: column-reverse;
			h3.price {
				flex-basis: unset;
			}
			div.details {
				flex-direction: row;
				justify-content: flex-end;
				align-items: center;
				gap: 0.4rem;
				h3, p {
					/* height: 1.2rem; */
					line-height: 1;
					margin-bottom: 0;
				}
			}
		}
	}
	@media print {
		div.item div.price h3.price {
			flex-basis: 9rem;
		}
	}
</style>