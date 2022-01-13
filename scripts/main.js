import { FishList } from './fish/FishList.js'
// import { mostHolyFish } from './fish/FishList.js'
// import { soldierFish } from './fish/FishList.js'
// import { nonHolyFish } from './fish/FishList.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".fish-collection")

parentHTMLElement.innerHTML = FishList()

// let holyFish = mostHolyFish()
// console.log("Holy Fish", holyFish);
// let soldiers = soldierFish()
// console.log("Soldier Fish", soldiers);
// let unHolyFish = nonHolyFish()
// console.log("UnHoly Fish",unHolyFish);