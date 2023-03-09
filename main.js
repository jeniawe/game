for (let i = 0; i<100;i++) {
  document.getElementById('game').innerHTML+='<div class="block"></div>'
}
let allBlocks = document.getElementsByClassName('block');
createShips();
let count = 0;
let aim = 0;
document.getElementById('game').onclick = function (event) {
  if (event.target.className === 'block' && event.target.innerHTML===' ') {
    event.target.innerHTML = 'X'
    console.log(event.target)
    aroundX(Array.prototype.indexOf.call(allBlocks, event.target), "X","O")
    aim++
    count++
  }
  document.getElementById('field').innerHTML = "Ships is destroyed: "+aim;
  if (aim===7) location.reload()
  if (event.target.className === 'block' && event.target.innerHTML !=='X' &&(event.target.innerHTML !== 'O' || event.target.innerHTML === '  ')) {
    event.target.innerHTML = 'O'
    count++
  }
  document.getElementById('counter').innerHTML = "Step: "+count;
}

function aroundX(index, scope1,scope2) {
  if (index % 10 !== 9) {
    allBlocks[index].innerHTML = scope1
    allBlocks[index + 1].innerHTML = scope2
  }
  if (index % 10 !== 0) {
    allBlocks[index].innerHTML = scope1
    allBlocks[index - 1].innerHTML = scope2
  }
  if (index > 9) {
    allBlocks[index].innerHTML = scope1
    allBlocks[index - 10].innerHTML = scope2
  }
  if (index < 90) {
    allBlocks[index].innerHTML = scope1
    allBlocks[index + 10].innerHTML = scope2
  }
  if (index > 9 && index % 10 !== 0) {
    allBlocks[index].innerHTML = scope1
    allBlocks[index - 11].innerHTML = scope2
  }
  if (index < 90 && index % 10 !== 9) {
    allBlocks[index].innerHTML = scope1
    allBlocks[index + 11].innerHTML = scope2
  }
  if (index > 9 && index % 10 !== 9) {
    allBlocks[index].innerHTML = scope1
    allBlocks[index - 9].innerHTML = scope2
  }
  if (index < 90 && index % 10 !== 0) {
    allBlocks[index].innerHTML = scope1
    allBlocks[index + 9].innerHTML = scope2
  }
}

function createShips() {
  let attempt = 8;
  for (let i = 0; i < attempt; i++) {
    let randX = Math.floor(Math.random() * 10);
    let randY = Math.floor(Math.random() * 10);
    let index = randY * 10 + randX;
    if (allBlocks[index].innerHTML === " "|| allBlocks[index].innerHTML === "  " ) attempt++;
    aroundX(index, " ", "  ");
  }
}


