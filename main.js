
function get_fable() {
  let i = (Math.floor(Math.random() * fable.length/2) + 1) * 2
  let text = fable[i+1]
  let header = fable[i]
  output.value = text
}

