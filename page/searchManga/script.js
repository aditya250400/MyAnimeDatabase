async function getMovies(keyword) {
	await fetch(`https://jikan1.p.rapidapi.com/search/manga?q=${keyword}&sort=asc`, {
		"method": 'GET',
		"headers": {
		"x-rapidapi-host": "jikan1.p.rapidapi.com",
		"x-rapidapi-key": "1b1c062addmsh47f2c8da0788be3p178adbjsn735498bf086a"
		}
	})
	.then(response => response.json())
	.then(response => {
		let data = response.results;
		let konten = document.querySelector('.anime')
		let cards = '';
		let buttonn = document.querySelectorAll('.mDetail-button')
		for(let i = 0; i < 19; i ++ ) {
			cards += animeDetails(data[i])

		}
		konten.innerHTML = cards;


	})
}
const modalDetailButton = document.querySelectorAll('.mDetail-button');
modalDetailButton.forEach(btn => {
	btn.addEventListener('click', function() {

		let inputText = document.querySelector('.inputText').value;

		fetch(`https://jikan1.p.rapidapi.com/search/anime?q=${inputText}`, {
		"method": 'GET',
		"headers": {
		"x-rapidapi-host": "jikan1.p.rapidapi.com",
		"x-rapidapi-key": "1b1c062addmsh47f2c8da0788be3p178adbjsn735498bf086a"
		}
	})
	.then(response => response.json())
	.then(response => {
		let data5 = response.results;
		

	})
		
	})
})

let button = document.querySelector('.inputButton');

button.addEventListener('click', function() {
	
	let inputText = document.querySelector('.inputText').value;

	getMovies(inputText);
})


function animeDetails(anmDetail) {
	return `<div class="col-md-3 my-3">
              <div class="card">
              <img src="${anmDetail.image_url}" class="card-img-top float-left" alt="${anmDetail.title}">
              <div class="card-body overflow-auto" style="height:120px;">
                <h5 class="card-title">${anmDetail.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted"><strong>Score</strong> : ${anmDetail.score}</h6>
                <h6 class="card-subtitle mb-2 text-muted"><strong>Chapters</strong> : ${anmDetail.chapters}</h6>
                <h6 class="card-subtitle mb-2 text-muted"><strong>Type</strong> : ${anmDetail.type}</h6>
                <a href="${anmDetail.url}" target="_blank" class="btn btn-primary">More Detail</a>
              </div>
            </div>
            </div>`
}