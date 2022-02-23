async function getMovies(keyword) {
	await fetch(`https://jikan1.p.rapidapi.com/search/anime?q=${keyword}&sort=asc`, {
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
		
			konten.innerHTML = cards;
		}
			
		
		


	})
}

let button = document.querySelector('.inputButton');

button.addEventListener('click', function() {
	
	let inputText = document.querySelector('.inputText').value;

	getMovies(inputText);
})


function animeDetails(anmDetail) {
	return `<div class="col-md-3 my-3">
              <div class="card">
              <img src="${anmDetail.image_url}" class="card-img-top float-left" alt="${anmDetail.title}">
              <div class="card-body overflow-auto" style="height:150px;">
                <h5 class="card-title">${anmDetail.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Score : ${anmDetail.score}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Episode : ${anmDetail.episodes} Eps</h6>
                <h6 class="card-subtitle mb-2 text-muted">Type : ${anmDetail.type}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Rated : ${anmDetail.rated}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Synopsis : ${anmDetail.synopsis}</h6>
                <a href="${anmDetail.url}" class="btn btn-primary" target="_blank">More Detail</a>
              </div>
            </div>
            </div>`
}

function modal(modalDetails) {
	return `<div class="container-fluid">
              <div class="row">
                <div class="col-md">
                  <img src="${modalDetails.image_url}" class="img-fluid" alt="${modalDetails.title}">
                </div>
                <div class="col-md overflow-auto" style="height:250px">
                  <ul class="list-group">
                    <li class="list-group-item"><h4>${modalDetails.title}</h4></li>
                    <li class="list-group-item eps"><strong>Episodes : </strong>${modalDetails.episodes}</li>
                    <li class="list-group-item"><strong>Score : </strong> ${modalDetails.score} </li>
                    <li class="list-group-item"><strong>Members : </strong> ${modalDetails.members}</li>
                    <li class="list-group-item"><strong>Source : </strong>${modalDetails.source}</li>
                    <li class="list-group-item"><strong>Synopsis : </strong>${modalDetails.synopsis}</li>
                  </ul>
                </div>
              </div>
            </div>`
}
