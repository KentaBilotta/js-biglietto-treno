alert("Benvenuto. Questo sistema ti permetterà di calcorare il prezzo del biglietto del tuo treno");

let distance = prompt("Scrivi il numero di KM che devi percorrere");
document.getElementById("distance").innerHTML = "Distanza in km: " + distance + " km";

let age = prompt("Scrivi la tua età");
document.getElementById("age").innerHTML = "Età: " + age;

let total = distance * 0.21;
document.getElementById("final-price").innerHTML = total;

let under = total - ((total * 20) / 100);
let over = total -((total * 40) / 100);

if (age < 18){
    document.getElementById("final-price").innerHTML = under;
} else {
    if(age > 65){
        document.getElementById("final-price").innerHTML = over;
    }
}

