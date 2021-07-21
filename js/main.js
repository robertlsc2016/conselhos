const fetch = require("node-fetch");

const URL_advice = "https://api.adviceslip.com/advice";

fetch(URL_advice, { "method": "GET" })
	.then(res => res.json())
	.then(json => {
		const conselho = json.slip.advice;
		
		const URL_Translated = `https://just-translated.p.rapidapi.com/?lang=pt&text=${conselho}`;
		fetch(URL_Translated, {
			"method": "GET",
			"headers": {
				"x-rapidapi-key": "d09b63fd6cmshecd47c538ab411ap1930f4jsn4dc17f63ad0f",
				"x-rapidapi-host": "just-translated.p.rapidapi.com"
			}
		})

			.then(response => response.json())
			.then(text => {
				const advice_traduzido = text.text;
				const advice_puro = json.slip.advice;
				
				console.log("english: " + advice_puro)
				console.log("portugues: "+ advice_traduzido)
			}
			)
			.catch(err => { console.error(err)});
	})

