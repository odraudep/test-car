let sky = document.body;
let data = new Date()
let hora = data.getHours()

// hora = 22

// start
if (hora >= 6 && hora <= 7 || hora >= 17 && hora <= 18) {
  sky.style.background = 'linear-gradient(to top, #f69026, #0189d6)'
  //day
} else if (hora >= 7 && hora <= 16) {
  sky.style.backgroundColor = '#0189d6'
  // night
} else {
  sky.style.backgroundColor = '#101f48'
}