import { c as create_ssr_component, a as each, e as escape, b as add_attribute } from "../../_app/immutable/chunks/index-9a1255b9.js";
import axios from "axios";
import countryCodes from "../endpoints/data.js";
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-a0xq77{text-align:center;padding:1em;margin:0 auto}h1.svelte-a0xq77{color:#ff3e00;text-transform:uppercase;font-size:2rem;font-weight:100}.first.svelte-a0xq77,.second.svelte-a0xq77{padding:1rem;display:inline-block;border:1px solid grey;text-align:center}.menu.svelte-a0xq77{margin-bottom:5rem}@media(min-width: 640px){main.svelte-a0xq77{max-width:none}}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let time = "";
  let comparisonTime;
  let population;
  let comparisonPopulation;
  let formattedHolidays = [];
  let formattedComparisonHolidays = [];
  let holidays;
  let comparisonHolidays;
  let countries = countryCodes;
  let countryName = "";
  let comparisonCountryName = "";
  let country = "";
  let comparisonCountry = "";
  let columns = ["Holiday Date", "Holiday Name"];
  let showHolidays = true;
  let showPopulation = true;
  $$result.css.add(css);
  country = Object.keys(countries).find((key) => countries[key] === countryName);
  {
    axios.get(`https://drzg4vt217.execute-api.us-east-1.amazonaws.com/${country}`).then((x) => time = x.data);
  }
  {
    axios.get(`https://3u1yozhscl.execute-api.us-east-1.amazonaws.com/${country}`).then((x) => population = x.data);
  }
  {
    axios.get(`https://phibbr4oo4.execute-api.us-east-1.amazonaws.com/${country}`).then((x) => holidays = x.data);
  }
  comparisonCountry = Object.keys(countries).find((key) => countries[key] === comparisonCountryName);
  {
    axios.get(`https://drzg4vt217.execute-api.us-east-1.amazonaws.com/${comparisonCountry}`).then((x) => comparisonTime = x.data);
  }
  {
    axios.get(`https://3u1yozhscl.execute-api.us-east-1.amazonaws.com/${comparisonCountry}`).then((x) => comparisonPopulation = x.data);
  }
  {
    axios.get(`https://phibbr4oo4.execute-api.us-east-1.amazonaws.com/${comparisonCountry}`).then((x) => comparisonHolidays = x.data);
  }
  {
    if (country) {
      formattedHolidays = [];
      holidays.forEach((x) => {
        formattedHolidays.push([x.date.slice(0, 10), x.name.slice(0, 30)]);
      });
    }
  }
  {
    if (comparisonCountry) {
      formattedComparisonHolidays = [];
      comparisonHolidays.forEach((x) => {
        formattedComparisonHolidays.push([x.date.slice(0, 10), x.name.slice(0, 30)]);
      });
    }
  }
  return `<main class="${"svelte-a0xq77"}"><select class="${"menu svelte-a0xq77"}" name="${"menu"}" id="${"menu"}"><option disabled selected value="${""}">Select a country.</option>${each(Object.entries(countries), ([code, name]) => {
    return `<option${add_attribute("value", name, 0)}>${escape(name)}</option>`;
  })}<option value="${"all"}">All Countries</option></select>


		${``}
		${``}
		${time ? `<button>Compare
		</button>` : ``}

<div>${country ? `<div class="${"first svelte-a0xq77"}"><h1 class="${"svelte-a0xq77"}">${escape(countryName)}</h1>
		<table>${time ? `<th>Time</th>
				<tr>${escape(time)}</tr>` : ``}
			${population && showPopulation ? `<th>Population</th>
				<tr>${escape(population)}</tr>` : ``}
			${formattedHolidays.length && showHolidays ? `<tr>${each(columns, (column) => {
    return `<th>${escape(column)}</th>`;
  })}</tr>
				${each(formattedHolidays, (row) => {
    return `<tr>${each(row, (cell) => {
      return `<td contenteditable="${"true"}">${(($$value) => $$value === void 0 ? `` : $$value)(cell)}</td>`;
    })}
					</tr>`;
  })}` : ``}</table></div>` : ``}

	${comparisonCountry ? `<div class="${"second svelte-a0xq77"}"><h1 class="${"svelte-a0xq77"}">${escape(comparisonCountryName)}</h1>
			<table>${comparisonTime ? `<th>Time</th>
					<tr>${escape(comparisonTime)}</tr>` : ``}
				${comparisonPopulation && showPopulation ? `<th>Population</th>
					<tr>${escape(comparisonPopulation)}</tr>` : ``}
				${formattedComparisonHolidays.length && showHolidays ? `<tr>${each(columns, (column) => {
    return `<th>${escape(column)}</th>`;
  })}</tr>
					${each(formattedComparisonHolidays, (row) => {
    return `<tr>${each(row, (cell) => {
      return `<td contenteditable="${"true"}">${(($$value) => $$value === void 0 ? `` : $$value)(cell)}</td>`;
    })}
						</tr>`;
  })}` : ``}</table></div>` : ``}</div>
</main>`;
});
export {
  Routes as default
};
