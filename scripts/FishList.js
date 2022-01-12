// Import the function that returns a copy of the fish array
import { getFish } from './database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = `<section class="fish header">
    <h2>Fish Collection</h2>
    </section>
    <article class="fish-list">
    `

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="single-fish">
            <div class="fish-image">
                <img  class="fish-image-direct" src="${fish.image}" />
            </div>
            <ul class="fish-info">
                <li><b>Fish Species:</b> ${fish.species}</li>
                <li><b>Fish Length:</b> ${fish.length}</li>
                <li><b>Fish Name:</b> ${fish.name}</li>
                <li><b>Harvest Location: </b> ${fish.location}</li>
                <li><b>Eats: </b> ${fish.food}</li>
            </ul>
        </section>
`
    }
    htmlString += `</article>`
    //console.log(htmlString);
    return htmlString
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const fishes = getFish()
    const holyFish = []

    for (const fish of fishes) {
        if(fish.length % 3 === 0){
            holyFish.push(fish)
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const fishes = getFish()
    const soldiers = []
    for (const fish of fishes) {
        if(fish.length % 5 === 0){
            soldiers.push(fish)
        }
    }

    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const fishes = getFish()
    const regularFish = []
    for (const fish of fishes) {
        if(fish.length % 3 != 0 && fish.length % 5 != 0) {
            regularFish.push(fish)
        }
    }
    return regularFish
}