// Import the function that returns a copy of the fish array

import { mostHolyFish, nonHolyFish, soldierFish } from "../database.js"


export const FishList = () => {
    // Get the filtered lists of fish
    const fishes = []
    const holyFish = mostHolyFish()
    const soldiers = soldierFish()
    const unHolyFish = nonHolyFish()
    
    // put fish in worthiness order
    for(const fish of holyFish){
        fishes.push(fish)
    }
    for(const fish of soldiers){
        fishes.push(fish)
    }
    for(const fish of unHolyFish){
        fishes.push(fish)
    }

    // Start building a string filled with HTML syntax
    let htmlString = `<section class="fish header">
    <h2>Fish Collection</h2>
    </section>
    <section class="fish-list">
    `

    // Create HTNL representations of each fish and add to htmlstring
    for (const fish of fishes) {

        // Why is there a backtick used for this string? - Intrepolation
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
    htmlString += `</section>`
    console.log(htmlString);
    return htmlString
}

