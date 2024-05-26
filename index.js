function first() {
    let user = "";
    user = prompt("Who is first? ","noone atm");
    $("#text").html(`☝🥇first: ${user}`);
};

$(document).ready(() => {
    first();
    $("body").on("click", first);
  });