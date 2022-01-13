/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            name: "Freddi",
            food: "Mysteries",
            species: "Goldfish",
            length: 3,
            location: "Bermuda Triangle",
            image: "media/fish-images/freddi.png"
        },
        {
            name: "Bruce",
            food: "People",
            species: "Shark",
            length: 5,
            location: "Krakatoa",
            image: "media/fish-images/bruce.png"
        },
        {
            name: "Bart",
            food: "People",
            species: "Whale Shark",
            length: 7,
            location: "Krakatoa",
            image: "media/fish-images/bruce.png"
        }
    ],
    locations: [
        {
            name: "Bermuda Triangle",
            image: "media/location-images/Bermuda_Triangle.png"
        },
        {
            name: "Krakatoa",
            image: "media/location-images/krakatoa.jpg"
        }
    ],
    travelTips: [
        {
            id: 1,
            quote: "There's always a bigger fish.",
            author: "Martin"
        },
        {
            id: 2,
            quote: "Why does it always have to be piranhas?",
            author: "Martin"
        }
    ],
    tankTips: [
        {
            id: 1,
            quote: "Happiness is a clean fish tank.",
            author: "Martin"
        },
        {
            id: 2,
            quote: "Always use Martin's Superior Cleaning SoapTM.",
            author: "Martin"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    // get all fish list and create array for holyfish
    const fishes = getFish()
    const holyFish = []
    // filter fish of length that is a multiple of 3 and push to holyfish array
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

export const getLocationList = () => {
    return database.locations.map(location => ({...location}))
}

export const getTravelTips = () => {
    return database.travelTips.map(travelTip => ({...travelTip}))
}

// export const getTravelTips = () => {
//     return database.travelTips.map(travelTip => ({...travelTip}))
// }

// export const getTravelTips = () => {
//     return database.travelTips.map(travelTip => ({...travelTip}))
// }