function scanFirst() {
    return prompt("Who is first? ","noone atm");
};

document.getElementById("text").innerHTML = `☝🥇first: ${scanFirst()}`;