alert('Welcome to MyAnimeDatabase!\n\n For better experience, I suggest you to use the Desktop Device\n')



//accordion
const acc = document.querySelectorAll(".accordion");

for(let i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', function() {
		this.classList.toggle("active");

		let panel = this.nextElementSibling;
		if (panel.style.display === 'block') {

			panel.style.display = 'none'


		} else {

			panel.style.display = 'block'
			
		}
	})
};


//winter Anime 2022
let winter22 = document.querySelector('.winter-2022')

winter22.addEventListener('click', function() {

	fetch("https://jikan1.p.rapidapi.com/season/2022/winter", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "jikan1.p.rapidapi.com",
		"x-rapidapi-key": "1b1c062addmsh47f2c8da0788be3p178adbjsn735498bf086a"
	}
})
.then(response => response.json())
.then(response => {
	let data = response.anime;
	let cards = '';
	let anmWinter = document.querySelector('.w22');
	for(let i = 0; i <= 14; i++) {


		cards += winterDetail(data[i])
	}
	anmWinter.innerHTML = cards;
})

})

//Winter 2021
let winter21 = document.querySelector('.winter-2021')

winter21.addEventListener('click', function() {

	fetch("https://jikan1.p.rapidapi.com/season/2021/winter", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "jikan1.p.rapidapi.com",
		"x-rapidapi-key": "1b1c062addmsh47f2c8da0788be3p178adbjsn735498bf086a"
	}
})
.then(response => response.json())
.then(response => {
	let data = response.anime;
	let cards = '';
	let anmWinter = document.querySelector('.w21');
	for(let i = 0; i <= 14; i++) {

		cards += winterDetail(data[i])
	}
	anmWinter.innerHTML = cards;
})

})

//winter 2020
let winter20 = document.querySelector('.winter-2020')

winter20.addEventListener('click', function() {

	fetch("https://jikan1.p.rapidapi.com/season/2020/winter", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "jikan1.p.rapidapi.com",
		"x-rapidapi-key": "1b1c062addmsh47f2c8da0788be3p178adbjsn735498bf086a"
	}
})
.then(response => response.json())
.then(response => {
	let data = response.anime;
	let cards = '';
	let anmWinter = document.querySelector('.w20');
	for(let i = 0; i <= 14; i++) {

		cards += winterDetail(data[i])
	}
	anmWinter.innerHTML = cards;
})

})


//Top Airing Anime
	fetch("https://jikan1.p.rapidapi.com/top/anime/1/airing", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "jikan1.p.rapidapi.com",
			"x-rapidapi-key": "1b1c062addmsh47f2c8da0788be3p178adbjsn735498bf086a"
		}
	})
	.then(response =>response.json())
	.then(response => {
		let top = response.top;
		let konten = document.querySelector('.jadwall'); 
		let cards = '';

		
		for(let i = 0; i < 6; i++) {
			cards += jdwl(top[i])
				          
				         
		}
		konten.innerHTML = cards;

	})
//Top Upcoming Anime
fetch("https://jikan1.p.rapidapi.com/top/anime/1/upcoming", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "jikan1.p.rapidapi.com",
		"x-rapidapi-key": "1b1c062addmsh47f2c8da0788be3p178adbjsn735498bf086a"
	}
})
.then(response =>response.json())
.then(response => {
	let top2 = response.top;
	let konten = document.querySelector('.jadwall2'); 
	let cards = '';


	for(let i = 0; i < 6; i++) {
		cards += jdwl(top2[i])
			          
			         
	}
	konten.innerHTML = cards;

})
//top manga
fetch("https://jikan1.p.rapidapi.com/top/manga/1/manga", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "jikan1.p.rapidapi.com",
		"x-rapidapi-key": "1b1c062addmsh47f2c8da0788be3p178adbjsn735498bf086a"
	}
})
.then(response =>response.json())
.then(response => {
	let top2 = response.top;
	let konten = document.querySelector('.manga'); 
	let cards = '';


	for(let i = 0; i < 6; i++) {
		cards += manga(top2[i])
			          
			         
	}
	konten.innerHTML = cards;

})

//top novels
fetch("https://jikan1.p.rapidapi.com/top/manga/1/novels", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "jikan1.p.rapidapi.com",
		"x-rapidapi-key": "1b1c062addmsh47f2c8da0788be3p178adbjsn735498bf086a"
	}
})
.then(response =>response.json())
.then(response => {
	let top2 = response.top;
	let konten = document.querySelector('.novels'); 
	let cards = '';


	for(let i = 0; i < 6; i++) {
		cards += manga(top2[i])
			          
			         
	}
	konten.innerHTML = cards;

})
//anime News

let konten2 = document.querySelector('.animeNews')
let konten3 = document.querySelector('.mangaNews')


konten2.addEventListener('click', function() {
	fetch("https://jikan1.p.rapidapi.com/anime/16498/news", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "jikan1.p.rapidapi.com",
		"x-rapidapi-key": "1b1c062addmsh47f2c8da0788be3p178adbjsn735498bf086a"
		}
	})

	.then(response => response.json())
	.then(response => {
	let artikel = response.articles
	let cards = '';
	let konten = document.querySelector('.news')
	
	for(let i = 0; i <= 14; i++) {
		if(i === 9 || i === 10) continue;
		cards += news(artikel[i])

	}
	konten.innerHTML = cards;
})
})

//Anime News
konten3.addEventListener('click', function() {
	fetch("https://jikan1.p.rapidapi.com/manga/2/news", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "jikan1.p.rapidapi.com",
		"x-rapidapi-key": "1b1c062addmsh47f2c8da0788be3p178adbjsn735498bf086a"
	}
})
	.then(response => response.json())
	.then(response => {
	let artikel = response.articles
	let cards = '';
	let konten = document.querySelector('.news2')
	
	for(let i = 0; i <= 14; i++) {
		if(i === 9 || i === 10) continue;
		cards += news(artikel[i])

	}
	konten.innerHTML = cards;

})
})


function news(newsDetail) {
	return `<div class="container-fluid">
              <div class="row mt-3">
                <div class="col-md-2">
                  <img src="${newsDetail.image_url}" class="img-fluid" alt="${newsDetail.title}">
                </div>
                <div class="col-md">
                  <h4 style="font-size: 14px;" class="h4">${newsDetail.title}</h5>
                  <p>${newsDetail.intro}  <a href="${newsDetail.url}" target="_blank" style="display:inline-block; font-size:12px;">Read More</a></p>

                  <p style="color:#7f7f7f; font-size:12px;">${newsDetail.date} by | <span><a href="${newsDetail.author_url}"target="_blank" style="color: #1d439b; font-size: 14px; display: inline-block; text-decoration:none;">${newsDetail.author_name} </a></span></p>
                </div>
              </div>
            </div>
           </div>`;
}

function jdwl(animeDetail) {

	if(animeDetail.episodes == null) {
		setTimeout(() => {
			let eps = document.querySelector('.jk');
			eps.innerHTML = 'N/A Eps'
		},500)
	}
	return `<div class="container-fluid">
              <div class="row mt-3">
                <div class="col-md-5">
                  <img src="${animeDetail.image_url}" class="img-fluid" alt="${animeDetail.title}">
                </div>
                <div class="col-md">
                  <h5 style="font-size: 12px; color: #4f74c8; font-weight: 700;">${animeDetail.title}</h5>
                  <p style="font-size: 12px; color: #7f7f7f;">${animeDetail.type}, ${animeDetail.members} Members, Scored ${animeDetail.score}</p>
                  <p style="font-size: 12px; color: #7f7f7f;" class="jk">${animeDetail.episodes} Eps</p>
                </div>
              </div>
            </div>
           </div>`

	}
function manga(mangaDetail) {


	return `<div class="container-fluid">
              <div class="row mt-3">
                <div class="col-md-5">
                  <img src="${mangaDetail.image_url}" class="img-fluid" alt="${mangaDetail.title}">
                </div>
                <div class="col-md">
                  <h5 style="font-size: 12px; color: #4f74c8; font-weight: 700;">${mangaDetail.title}</h5>
                  <p style="font-size: 12px; color: #7f7f7f;">${mangaDetail.type},<br> ${mangaDetail.volumes} Vols<br> Scored ${mangaDetail.score}</p>
                  <p style="font-size: 12px; color: #7f7f7f;" class="jk">${mangaDetail.start_date} - ${mangaDetail.end_date}</p>
                </div>
              </div>
            </div>
           </div>`

	}

function winterDetail(wDetail) {
	if(wDetail.episodes == null) {
		setTimeout(() => {
			let eps = document.querySelector('.eps');
			eps.innerHTML = '<strong>Episodes : </strong> N/A'
		},500)
	}
	return `<div class="container-fluid">
              <div class="row mt-3">
                <div class="col-md">
                  <img src="${wDetail.image_url}" class="img-fluid" alt="${wDetail.title}">
                </div>
                <div class="col-md overflow-auto" style="height:250px">
                  <ul class="list-group">
                    <li class="list-group-item"><h4>${wDetail.title}</h4></li>
                    <li class="list-group-item eps"><strong>Episodes : </strong>${wDetail.episodes}</li>
                    <li class="list-group-item"><strong>Score : </strong> ${wDetail.score} </li>
                    <li class="list-group-item"><strong>Producer : </strong> ${wDetail.producers[0].name}</li>
                    <li class="list-group-item"><strong>Members : </strong> ${wDetail.members}</li>
                    <li class="list-group-item"><strong>Source : </strong>${wDetail.source}</li>
                    <li class="list-group-item"><strong>Synopsis : </strong>${wDetail.synopsis}</li>
                  </ul>
                </div>
              </div>
            </div>
           </div>`;
}
