function getinput(id) {
  elm = document.getElementById(id)
  return elm.value
  
}
function getHTML(id) {
  elm = document.getElementById(id)
  return elm.innerhtml
}
function get(id) {
  elm = document.getElementById(id)
  return elm
}
function save(id, value) {
  elm = document.getElementById(id)
  elm.innerHTML = value
}
function saveinput(id, value) {
  elm = document.getElementById(id)
  elm.value = value
}
function savehref(id, value) {
  elm = document.getElementById(id)
  elm.href = value
  alert("HI")
}