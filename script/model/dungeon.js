import * as rpg from '../control/rpg.js'

const HIGH=[
  "Everhold Tunnels, West Everhold Pass",
  "Loch of the Lost King, West Grandport Coast",
  "Marsalim Catacombs, Eastern Marsalim Sands",
  "Maw of the Ice Dragon, Southern Northreach Wilds",
  "Refuge Ruins, North Riverford Traverse",
]
const MID=[
  "Derelict Mine, South Quarrycrest Pass",
  "Farshore, East Saintsbridge Traverse",
  "The Hollow Throne, Western Noblecourt Flats",
  "Tomb of the Imperator, Western Stillsnow Wilds",
]
const LOW=[
  "Carrion Caves, South Bolderfall Pass",
  "Path of Beasts, West S'warkii Trail",
  "The Whistlewood, North Atlasdam Flats",
  "Twin Falls, South Clearbrook Traverse",
  "Whistling Cavern, Eastern Sunshade Sands",
]
const TIERS=[LOW,MID,HIGH]
const VIEW=document.querySelector('#dungeons ol')

export var paths=Math.round((HIGH.length+MID.length+LOW.length)/3)

export function setup(){
  for(let t of TIERS){
    let li=document.createElement('li')
    li.textContent=rpg.pick(t)
    VIEW.appendChild(li)
  }
}
