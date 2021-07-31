<script>
	import { Router, Route } from "svelte-routing";
	import Home from "./routes/Home.svelte";
	import About from "./routes/About.svelte";
	import Challenge from "./routes/Challenge.svelte";
	import Sidemenu from './components/Sidemenu.svelte';
	import { PasswordGenerator } from './lib/PasswordGenerator.js';

	export let url = "";
	const pg = new PasswordGenerator();
</script>

<style>
	.page {
		display: flex;
		height: 100%;
	}
</style>

  
<Router url="{url}">
	<div class="page">
		<Sidemenu/>
		<div class="content-box bg-blue">
			<Route path="/"><Home pg={pg} /></Route>
			<Route path="challenge" component="{Challenge}" />
			<Route path="about" component="{About}" />
		</div>
	</div>
</Router>