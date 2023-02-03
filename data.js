let data = JSON.parse(movies);
for (let val of data) {
    document.getElementById("result").innerHTML += `<div>
    <div class="card" style="width: 18rem;">
    <img src="${val.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${val.name}"</h5>
      <p class="card-text">${val.desecreotion}</p>
      <a href="#" class="btn btn-primary like-button" >Like</a>
     
    </div>
    </div>
  </div>`;

}