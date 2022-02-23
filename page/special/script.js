fetch("https://jikan1.p.rapidapi.com/top/anime/1/special", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "jikan1.p.rapidapi.com",
		"x-rapidapi-key": "1b1c062addmsh47f2c8da0788be3p178adbjsn735498bf086a"
	}
})
.then(response => response.json())
.then(response => {
	let top = document.querySelector('.top')
	let result = response.top;
	let cards = '';
	for(i = 0; i <= 49; i++) {
		cards += airingDetail(result[i])
		
	}
	top.innerHTML = cards;
})

function airingDetail(airingDetails) {
	return `<table class="table table-striped tabel">
			  <thead>
			    <tr  class="th">
			      <th scope="col">Rank</th>
			      <th scope="col">Title</th>
			      <th scope="col">Score</th>
			      <th scope="col">Your Score</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr>
			      <th scope="row" style="font-size: 36px; color: #888;" class="rk">${airingDetails.rank}</th>
			      <td>
			      	<div class="container-fluid">
		              <div class="row mt-3">
		                <div class="col-md-3">
		                  <img src="${airingDetails.image_url}" class="img-fluid" alt="${airingDetails.title}">
		                </div>
		                <div class="col-md">
		                  <h4 style="font-size: 14px; margin-right: 20px;" class="h4">${airingDetails.title}</h5>
		                  <p style="color:#7f7f7f; font-size:12px;">${airingDetails.type}<br>${airingDetails.members} Members<br>${airingDetails.start_date} - ${airingDetails.end_date}<br>${airingDetails.episodes} Episode</p>
		                  <p style="color:#7f7f7f; font-size:12px;"></p>
		                </div>
		              </div>
		            </div>
           </div>

			      </td>
			      <td class="score">${airingDetails.score}</td>
			      <td class="score">N/A</td>
			    </tr>
			  </tbody>
			</table>`;
}