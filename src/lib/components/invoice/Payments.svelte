<script>
	export let data
</script>

<div class="wrapper narrow">
	<div class="reminder">
		<p>Please pay before <span>{data.bill.dateDue}</span></p>
	</div>
	
	<a class="primary" href="{data.payment.url}">Pay Now</a>
	<a href="javascript:window.print()">Print Invoice</a>
	<a href="mailto:billing@lightdance.design?subject=Invoice {data.customer.id}-{data.project}{data.bill.id} - Question">Contact</a>
	
	<details class="alternates">
		<summary class="label">
			<p>Alternate Payment Methods <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
				  <g stroke="#000" fill="none" fill-rule="evenodd">
					<circle stroke-width="1.5" cx="7" cy="7" r="6.25"/>
					<path stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" d="m3.893 5.9 3.181 3.02 3.181-3.02"/>
				  </g>
				</svg></p>
		</summary>
		<div class="details-expand">
			<div class="line"></div>
			<div class="container">
				<div class="check">
					<h3>Check</h3>
					<div>
						<p>Payable</p>
						<span>
							<svg height="3px" xmlns="http://www.w3.org/2000/svg">
							  <path fill-rule="evenodd" stroke-dasharray="4,10" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M2 1.5h9999"/>
							</svg>
						</span>
						<p>{data.payment.check.payable}</p>
					</div>
					<div>
						<p>Mailto</p>
						<span>
							<svg height="3px" xmlns="http://www.w3.org/2000/svg">
							  <path fill-rule="evenodd" stroke-dasharray="4,10" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M2 1.5h9999"/>
							</svg>
						</span>
						<p>{@html data.payment.check.mailto}</p>
					</div>
				</div>
				<div class="ach">
					<h3>ACH Bank Transfer</h3>
					<div>
						<p>Bank</p>
						<span>
							<svg height="3px" xmlns="http://www.w3.org/2000/svg">
							  <path fill-rule="evenodd" stroke-dasharray="4,10" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M2 1.5h9999"/>
							</svg>
						</span>
						<p>{data.payment.ach.bank}</p>
					</div>
					<div>
						<p>Routing</p>
						<span>
							<svg height="3px" xmlns="http://www.w3.org/2000/svg">
							  <path fill-rule="evenodd" stroke-dasharray="4,10" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M2 1.5h9999"/>
							</svg>
						</span>
						<p>{data.payment.ach.routing}</p>
					</div>
					<div>
						<p>Account</p>
						<span>
							<svg height="3px" xmlns="http://www.w3.org/2000/svg">
							  <path fill-rule="evenodd" stroke-dasharray="4,10" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M2 1.5h9999"/>
							</svg>
						</span>
						<p>{data.payment.ach.account}</p>
					</div>
				</div>
			</div>
		</div>
	</details>
	
	<div class="alternates print">
		<div class="label">
			<p>Alternate Payment Methods</p>
			<div class="line"></div>
		</div>
		<div class="container">
			<div class="check">
					<h3>Check</h3>
					<div>
						<p>Payable</p>
						<span>
							<svg height="3px" xmlns="http://www.w3.org/2000/svg">
							  <path fill-rule="evenodd" stroke-dasharray="4,10" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M2 1.5h9999"/>
							</svg>
						</span>
						<p>{data.payment.check.payable}</p>
					</div>
					<div>
						<p>Mailto</p>
						<span>
							<svg height="3px" xmlns="http://www.w3.org/2000/svg">
							  <path fill-rule="evenodd" stroke-dasharray="4,10" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M2 1.5h9999"/>
							</svg>
						</span>
						<p>{@html data.payment.check.mailto}</p>
					</div>
				</div>
			<div class="ach">
				<h3>ACH Bank Transfer</h3>
				<div>
					<p>Bank</p>
					<span>
						<svg height="3px" xmlns="http://www.w3.org/2000/svg">
						  <path fill-rule="evenodd" stroke-dasharray="4,10" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M2 1.5h9999"/>
						</svg>
					</span>
					<p>{data.payment.ach.bank}</p>
				</div>
				<div>
					<p>Routing</p>
					<span>
						<svg height="3px" xmlns="http://www.w3.org/2000/svg">
						  <path fill-rule="evenodd" stroke-dasharray="4,10" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M2 1.5h9999"/>
						</svg>
					</span>
					<p>{data.payment.ach.routing}</p>
				</div>
				<div>
					<p>Account</p>
					<span>
						<svg height="3px" xmlns="http://www.w3.org/2000/svg">
						  <path fill-rule="evenodd" stroke-dasharray="4,10" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M2 1.5h9999"/>
						</svg>
					</span>
					<p>{data.payment.ach.account}</p>
				</div>
			</div>
		</div>
	</div>
</div>


<style lang='scss'>
	div.wrapper {
		padding: 1.2rem 2.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		
		> * {
			width: 21rem;
		}
		a {
			display: block;
			height: 3.45rem;
			background: #E5E5E5;
			padding: 1.2rem 0;
			margin-bottom: 1.1rem;
			border-radius: 0.7rem;
			text-align: center;
			display: flex;
			align-items: center;
			justify-content: center;
			text-decoration: none;
			
			color: #000000;
			font-weight: 500;
		}
		a.primary {
			font-family: 'Unbounded Var', 'Inter Var', 'Inter', sans-serif;
			background: linear-gradient(to bottom, 
				#367CFF 0%, 
				#4166FF 50%, 
				#274BFF 100%);
			box-shadow:
				0 2px 0 0 rgba(0,0,0,0.26), 
				0 0 0 2px #234AF0, 
				0 2px 0 0 rgba(0,0,0,0.07), 
				inset 0 -1px 0 0 rgba(0,0,0,0.23), 
				inset 0 1px 0 0 rgba(255,255,255,0.13);
			color: white;
			font-weight: 500;
			font-size: 1.1rem;
		}
		
		div.reminder {
			opacity: 1;
			justify-content: center;
			padding: 0.5rem 0;
			text-align: center;
			p {
				font-weight: 400;
				font-size: 1rem;
				letter-spacing: -0.008em;
				opacity: 0.8;
			}
			span {
				font-weight: 500;
				opacity: 1;
				text-transform: uppercase;
				font-style: normal;
				color: #C17811;
			}
		}		
	}
	
	.alternates {
		margin-top: 6rem;
		.label p {
			font-weight: 500;
			text-align: center;
			cursor: pointer;
			height: 1.3rem;
		}
		div.line {
			width: calc(100% + 5rem);
			height: 0.15rem;
			background: linear-gradient(to right,
				hsla(0,0%,89%,0) 0%,
				hsla(0,0%,85%,1) 50%,
				hsla(0,0%,89%,0) 100%,
			);
			margin: 0.8rem 0 2rem -2.5rem;
		}
		div.container {
			display: flex;
			flex-wrap: wrap;
			gap: 0.6rem;
			letter-spacing: -0.01em;
			h3 {
				font-weight: 600;
			}
			> div {
				width: 100%;
				padding: 0.8rem 0.5rem;
				border: 0.18rem solid #C6C6C6;
				border-radius: 0.65rem;
				div {
					display: flex;
					gap: 0.7rem;
					width: 100%;
					justify-content: space-between;
					align-items: center;
					p:first-child {
						font-weight: 500;
						opacity: 0.7;
						font-size: 0.95rem;
					}
					p:last-child {
						font-weight: 500;
						font-size: 0.95rem;
						text-align: right;
						flex-shrink: 0;
					}
					span {
						flex-grow: 1;
						height: 1rem;
						display: flex;
						align-items: center;
						svg {
							width: 100%;
							height: 3px;
							stroke: rgba(68, 68, 68, 0.18);
						}
					}
				}
			}
		}
	}
	
	details {
		list-style: none;
		summary {
			list-style: none;
		}
		summary::-webkit-details-marker {
			display: none;
		}
		summary svg {
			display: inline;
		}
	}
	
	div.alternates.print {
		display: none;
	}
	
	@media print {
		div.wrapper > * {
			width: 100%;
		}
		div.wrapper a {
			display: none;
		}
		div.wrapper div.reminder {
			width: 100%;
			display: flex;
			justify-content: flex-end;
			p {
				width: 19rem;
			}
		}
		details { 
			display: none;
		}
		div.alternates.print {
			display: block;
			div.container {
				flex-direction: row;
				flex-wrap: nowrap;
				div {
					flex-shrink: 1;
				}
			}
		}
	}
</style>