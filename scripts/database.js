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
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}