let real = prompt("Infome o valor R$")
let wons = 0.0040
let dolar = 5.78
let euro = 6.23
alert("Seu valor em R$ real convertido para wons é igual a ₩" + real * wons + " wons\n" + "Seu valor em R$ real convertido para dolares é USD$" + (real / dolar).toFixed(2) + " dolares\n" + "Seu valor em real convertido para euro é igual a €" + (euro * real).toFixed(2) + " euros\n")