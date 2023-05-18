import * as rpg from '../rpg.js'

const HEROES=rpg.shuffle([
  'Alfyn',
  'Cyrus',
  "H'aanit",
  'Olberic',
  'Ophilia',
  'Primrose',
  'Therion',
  'Tressa',
])
const VIEW=document.querySelector('#heroes ol')

export function setup(){
  for(let i=0;i<4;i++){
    let li=document.createElement('li')
    li.textContent=HEROES[i]
    VIEW.appendChild(li)
  }
}
