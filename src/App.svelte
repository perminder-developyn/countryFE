<script>
	import axios from 'axios';
	import countryCodes from './data.js'

	let time;
	let comparisonTime;
	let population;
	let comparisonPopulation;
	let formattedHolidays = [];
	let formattedComparisonHolidays = [];
	let holidays;
	let comparisonHolidays;
	let countries = countryCodes;
	let countryName = '';
	let comparisonCountryName = '';
	let country = '';
	let comparisonCountry = '';
	let columns = ["Holiday Date", "Holiday Name"]; 
	let showHolidays = false;
	let showTime = false;
	let showPopulation = false;
	let comparison = false;
	
	$: axios.get(`https://drzg4vt217.execute-api.us-east-1.amazonaws.com/${country}`).then(x => time = x.data.slice(11,19))
	$: axios.get(`https://3u1yozhscl.execute-api.us-east-1.amazonaws.com/${country}`).then(x => population = x.data)
	$: axios.get(`https://phibbr4oo4.execute-api.us-east-1.amazonaws.com/${country}`).then(x => holidays = (x.data))
	$: axios.get(`https://drzg4vt217.execute-api.us-east-1.amazonaws.com/${comparisonCountry}`).then(x => comparisonTime = x.data.slice(11,19))
	$: axios.get(`https://3u1yozhscl.execute-api.us-east-1.amazonaws.com/${comparisonCountry}`).then(x => comparisonPopulation = x.data)
	$: axios.get(`https://phibbr4oo4.execute-api.us-east-1.amazonaws.com/${comparisonCountry}`).then(x => comparisonHolidays = (x.data))

	$: if (country) {
		formattedHolidays = [];
		 holidays.forEach(x => {
		formattedHolidays.push([x.date.slice(0,10), x.name.slice(0,30)])
		})
	}
	$: if (comparisonCountry) {
		formattedComparisonHolidays = [];
		 comparisonHolidays.forEach(x => {
		formattedComparisonHolidays.push([x.date.slice(0,10), x.name.slice(0,30)])
		})
	}



	$: country = Object.keys(countries).find(key => countries[key] === countryName)
	$: comparisonCountry = Object.keys(countries).find(key => countries[key] === comparisonCountryName)
	
	function compare() {
		comparison = true;
	}
</script>



<main>
		<select class="menu" 
						name="menu" 
						id="menu" 
						bind:value={countryName}>
			<option disabled selected value="">Select a country.</option>
			{#each Object.entries(countries) as [code, name]}
			<option>{name}</option>
			{/each}
			<option value="all">All Countries</option>
		</select>


		{#if comparison}
		<select class="menu" 
						name="menu" 
						id="menu" 
						bind:value={comparisonCountryName}>
			<option disabled selected value="">Select a country.</option>
			{#each Object.entries(countries) as [code, name]}
			<option>{name}</option>
			{/each}
			<option value="all">All Countries</option>
		</select>



		{/if}
		<input type=checkbox bind:checked={showTime}> Time
		<input type=checkbox bind:checked={showPopulation}> Population
		<input type=checkbox bind:checked={showHolidays}> Holidays
		{#if time}
		<button on:click={compare}>
			Compare
		</button>
		{/if}

<div>
	{#if country}
	<div class="first">
	<h1>{countryName}</h1>
	<table>
		{#if !showTime && time}
		<th>Time</th>
		<tr>{time}</tr>
		{/if}
		{#if population && !showPopulation}
		<th>Population</th>
		<tr>{population}</tr>
		{/if}
		{#if formattedHolidays.length && !showHolidays}
		<tr>
			{#each columns as column}
				<th>{column}</th>
			{/each}
		</tr>
		{#each formattedHolidays as row}
			<tr>
				{#each row as cell}
				<td contenteditable="true" bind:innerHTML={cell} />
				{/each}
			</tr>
		{/each}
		{/if}
		</table>
	</div>
	{/if}

	{#if comparisonCountry}
	<div class="second">
	<h1>{comparisonCountryName}</h1>
	<table>
		{#if !showTime && comparisonTime}
		<th>Time</th>
		<tr>{comparisonTime}</tr>
		{/if}
		{#if comparisonPopulation && !showPopulation}
		<th>Population</th>
		<tr>{comparisonPopulation}</tr>
		{/if}
		{#if formattedComparisonHolidays.length && !showHolidays}
		<tr>
			{#each columns as column}
				<th>{column}</th>
			{/each}
		</tr>
		{#each formattedComparisonHolidays as row}
			<tr>
				{#each row as cell}
				<td contenteditable="true" bind:innerHTML={cell} />
				{/each}
			</tr>
		{/each}
		{/if}
		</table>
	</div>
	{/if}
</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2rem;
		font-weight: 100;
	}
	.first, .second{
		padding: 1rem;
		display: inline-block;
		border: 1px solid grey;
		text-align: center;
	}
	.menu{
		margin-bottom: 5rem;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>