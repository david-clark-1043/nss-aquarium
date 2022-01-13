import { getLocationList } from "../database.js"


export const LocationList = () => {
    const locations = getLocationList()

    let htmlString = `            <section class="locations-subsec">
    <section class="location header">
        <h2>Harvest Locations</h2>
    </section>
    <section class="locations-list">
`

    for(const location of locations){
        htmlString += `                    <section class="single-location">
        <section class="location-image">
            <img class="location-image-direct" src="${location.image}">
        </section>
        <section class="location-name">
            ${location.name}
        </section>
    </section>
    `
    }
    htmlString += `</section>`
    //console.log(htmlString);
    return htmlString
}