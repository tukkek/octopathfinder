import * as dungeon from '../model/dungeon.js'
import * as hero from '../model/hero.js'
import * as rpg from './rpg.js'

const VIEW=document.querySelector('#goals ol')
const CHAPTERS=4//bosses per hero story

function add(text){
  let li=document.createElement('li')
  li.textContent=text
  VIEW.appendChild(li)
}

export function setup(){
  let rolls=[]
  let nheroes=hero.heroes.length
  let ndungeons=0
  for(let t of dungeon.tiers) ndungeons+=t.length
  let nrolls=Math.round(ndungeons/CHAPTERS)
  for(let i=0;i<nrolls;i++) 
    rolls.push(rpg.roll(0,nheroes-1))
  let j=Math.min(...rolls)
  for(let i=0;i<nheroes;i++){
    if(i==j) add('Dungeons')
    add(`Storyline for ${hero.heroes[i]}`)
  }
  add("Journey's End")
}
