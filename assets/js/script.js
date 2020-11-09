let sky = document.body;
let data = new Date()
let hora = data.getHours()

hora = 2

if (hora >= 6 && hora <= 7 || hora >= 17 && hora <= 18) {
  sky.style.backgroundColor = '#f0b52b'
} else if (hora >= 7 && hora <= 16) {
  sky.style.backgroundColor = '#4aa4f7'
} else {
  sky.style.backgroundColor = '#000c5e'
}