import * as rpg from '../control/rpg.js'

const VIEW=document.querySelector('#heroes ol')

export var heroes=rpg.shuffle([
  'Alfyn',
  'Cyrus',
  "H'aanit",
  'Olberic',
  'Ophilia',
  'Primrose',
  'Therion',
  'Tressa',
])

export function setup(){
  for(let i=0;i<heroes.length;i++){
    let li=document.createElement('li')
    li.textContent=heroes[i]
    VIEW.appendChild(li)
  }
}
