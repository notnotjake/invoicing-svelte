<script>
	import Fonts from '$lib/site/Fonts.svelte'
	import site from '$lib/site/data.json'
</script>

<!-- Site Info -->
<meta charset="utf-8">
<title>{site.name}</title>
{#if site.author }
<meta name="author" content="{site.author}">
{/if}
{#if site.description}
<meta name="description" content="{site.description}">
{/if}
{#if site.baseURL}
<link rel="canonical" href="{site.baseURL}">
{/if}
<!-- Site Info [End] -->


<!-- OpenGraph -->
<meta property="og:title" content="{site.name}">
<meta property="og:site_name" content="{site.name}">
<meta property="og:url" content="{site.baseURL}">
<meta property="og:type" content="website">
<meta property="og:description" content="{site.description}">
{#if site.image}
<meta property="og:image" content="{site.image}">
{/if}
<!-- OpenGraph [End] -->


<!-- Twitter Cards -->
<meta property="twitter:card" content="summary">
<meta property="twitter:site" content="{site.twitter}">
<meta property="twitter:creator" content="">
<meta property="twitter:title" content="{site.name}">
<meta property="twitter:description" content="{site.description}">
{#if site.image}
<meta property="twitter:image" content="{site.image}">
{/if}
<!-- Twitter Cards [End] -->


<!-- Fonts -->
<Fonts />

<link rel="preconnect" href="https://rsms.me/">
<link rel="stylesheet" href="https://rsms.me/inter/inter.css">
<!-- Fonts [End] -->


<!-- Appearance -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, viewport-fit=cover">

<style>
	* {margin: 0;padding:0;line-height: calc(1em + 0.5rem);position:relative;}
	*, *::before, *::after {box-sizing: border-box;}
	html, body {height: 100%;}
	// html:focus-within {scroll-behavior: smooth;}
	body {-webkit-font-smoothing: antialiased;min-height: 100vh;
		// text-rendering: optimizeSpeed;
	}
	p, h1, h2, h3, h4, h5, h6 {overflow-wrap: break-word;}
	input, button, textarea, select {font: inherit;}
	button {all: unset;}
	ul[role='list'], ol[role='list'] {list-style: none;padding:0;}
	a:not([class]) {text-decoration-skip-ink: auto;}
	img, picture, figure, video, canvas, svg {display: block;max-width: 100%;}
	@media (prefers-reduced-motion: reduce) {
		*, *::before, *::after {animation-duration: 0.01ms !important;animation-iteration-count: 1 !important;transition-duration: 0.01ms !important;scroll-behavior: auto !important;	
		}
	}
</style>
	
<link rel="apple-touch-icon" href="{site.favicon}">
<link rel="icon" type="image/png" sizes="271x271" href="{site.favicon}">
<!-- Appearance [End] -->


<!-- Feeds -->
{#if site.feed}
{site.feed}
{/if }
<!-- Feeds [End] -->


<!-- Fathom Analytics -->
{#if site.fathom.use}
<script src="{site.fathom.url}" data-site="{site.fathom.id}" defer></script>
{/if}
<!-- Fathom Analytics [End] -->