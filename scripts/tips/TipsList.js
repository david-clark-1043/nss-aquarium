import { getTravelTips } from "../database.js"


export const TravelTipList = () => {
    const travelTips = getTravelTips()

    let htmlString = `            <section class="travel header">
    <h2>Travel Quotes</h2>
    </section>
    <section class="travel-quote-list">
    <ul>
`

    for(const tip of travelTips){
        htmlString += `                    <li>"<i>${tip.quote}</i>" - ${tip.author}</li>
    `
    }
    htmlString += `</ul>
    </section>`
    //console.log(htmlString);
    return htmlString
}

/* Goal Formatting:
<section class="travel header">
<h2>Travel Quotes</h2>
</section>
<section class="travel-quote-list">
<ul>
    <li>"<i>There's always a bigger fish.</i>" - Martin</li>
    <li>"<i>Why does it always have to be piranhas.</i>" - Martin</li>
</ul>
</section> */