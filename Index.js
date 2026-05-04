let heroi = "Avatar Aang";
let xp = 7500
let nivel = Number(xp);
if (xp < 1000) {
    console.log( "O herói " + heroi + " está no nível de ferro.")
}
else if (xp >= 1000 && xp < 2000) {
    console.log( "O herói " + heroi + " está no nível de bronze.")
}
else if (xp >= 2000 && xp < 5000) {
    console.log( "O herói " + heroi + " está no nível de prata.")
}
else if (xp >= 5000 && xp < 6000) {
    console.log( "O herói " + heroi + " está no nível de ouro.")
}
else if (xp >= 6000 && xp < 7000) {
    console.log( "O herói " + heroi + " está no nível de platina.")
}
else if (xp >= 7000 && xp < 8000) {
    console.log( "O herói " + heroi + " está no nível de Ascendente.")
}
else if (xp >= 8000 && xp < 10000) {
    console.log( "O herói " + heroi + " está no nível de Imortal.")
}
else {
    console.log( "O herói " + heroi + " está no nível de Radiante.")
}
console.log("O herói de nome " + heroi + " está no nível de " + xp + ".")