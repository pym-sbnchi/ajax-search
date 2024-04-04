$(document).ready(function () {
  $.getJSON("data.json", function (data) {
    $("#search-name").keyup(function () {
      var searchFiled = $("#search-name").val();
      var output = `<div class="card" style="width: 18rem">`;
      $.each(data, function (index, val) {
        if (val.name.search(searchFiled) != -1) {
          output += `
                <img src="${val.image}" class="card-img-top p-4" />
                <div class="card-body bg-light">
                  <h5 class="card-title fs-4">${val.name}</h5>
                  <div class="d-flex flex-row justify-content-between">
                    <p class="card-text fs-5 text-secondary">${val.category}</p>
                    <p class="card-text f-5 text-danger fw-bold">${val.price}</p>
                  </div>
                </div>
            `;
        }
      });
      output += `</div>`;
      $(".show").html(output);
    });
    $("#search-category").keyup(function () {
      var searchFiled = $("#search-category").val();
      $(".show").html("");
      var output = `<div class="card" style="width: 18rem">`;
      $.each(data, function (index, val) {
        if (val.category.search(searchFiled) != -1) {
          output += `
                <img src="${val.image}" class="card-img-top p-4" />
                <div class="card-body bg-light">
                  <h5 class="card-title fs-4">${val.name}</h5>
                  <div class="d-flex flex-row justify-content-between">
                    <p class="card-text fs-5 text-secondary">${val.category}</p>
                    <p class="card-text f-5 text-danger fw-bold">${val.price}</p>
                  </div>
                </div>
            `;
        }
      });
      output += `</div>`;
      $(".show").html(output);
    });
    $("#search-price").keyup(function () {
      var searchFiled = $("#search-price").val();
      $(".show").html("");
      var output = `<div class="card" style="width: 18rem">`;
      $.each(data, function (index, val) {
        if (val.price.search(searchFiled) != -1) {
          output += `
                <img src="${val.image}" class="card-img-top p-4" />
                <div class="card-body bg-light">
                  <h5 class="card-title fs-4">${val.name}</h5>
                  <div class="d-flex flex-row justify-content-between">
                    <p class="card-text fs-5 text-secondary">${val.category}</p>
                    <p class="card-text f-5 text-danger fw-bold">${val.price}</p>
                  </div>
                </div>
            `;
        }
      });
      output += `</div>`;
      $(".show").html(output);
    });
  });
});
