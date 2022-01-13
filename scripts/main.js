import { FishList } from './fish/FishList.js'
import { LocationList } from './locations/LocationList.js'
import { TravelTipList } from './tips/TipsList.js'


// import { mostHolyFish } from './fish/FishList.js'
// import { soldierFish } from './fish/FishList.js'
// import { nonHolyFish } from './fish/FishList.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const fishCollection = document.querySelector(".fish-collection")
fishCollection.innerHTML = FishList()

const locationsSection = document.querySelector(".locations-subsec")
locationsSection.innerHTML = LocationList()

const tipSection = document.querySelector(".travel-section")
tipSection.innerHTML = TravelTipList()

// let holyFish = mostHolyFish()
// console.log("Holy Fish", holyFish);
// let soldiers = soldierFish()
// console.log("Soldier Fish", soldiers);
// let unHolyFish = nonHolyFish()
// console.log("UnHoly Fish",unHolyFish);