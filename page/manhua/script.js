fetch("https://jikan1.p.rapidapi.com/top/manga/1/manhua", {
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

function airingDetail(details) {
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
			      <th scope="row" style="font-size: 36px; color: #888;" class="rk">${details.rank}</th>
			      <td>
			      	<div class="container-fluid">
		              <div class="row mt-3">
		                <div class="col-md-3">
		                  <img src="${details.image_url}" class="img-fluid" alt="${details.title}">
		                </div>
		                <div class="col-md">
		                  <h4 style="font-size: 14px; margin-right: 20px;" class="h4">${details.title}</h5>
		                  <p style="color:#7f7f7f; font-size:12px;">${details.type}<br><br>${details.start_date} - ${details.end_date}<br>${details.members}  Members</p>
		                  <p style="color:#7f7f7f; font-size:12px;"></p>
		                </div>
		              </div>
		            </div>
           </div>

			      </td>
			      <td class="score">${details.score}</td>
			      <td class="score">N/A</td>
			    </tr>
			  </tbody>
			</table>`;
}