
const button = document.getElementById("button")

function get_fable() {
  const header = document.getElementById("iheader")
  const body = document.getElementById("ibody")
  let i = (Math.floor(Math.random() * fable.length/2) + 1) * 2
  body.innerHTML = fable[i+1]
  header.innerHTML = fable[i]
}

get_fable()
