const { chromium } = require("playwright");
const fs = require('fs')

async function scraperTiobe(page) {
    await page.goto('https://www.tiobe.com/tiobe-index/', { waitUntil: 'networkidle' })
    

    const selector = '#top20 tbody tr'

    const dataExtraction = await page.$$eval(selector, items => 
        items.map(e => e.textContent.match(/[A-Za-z#+]+/g)[0])
    )


    return dataExtraction.slice(0, 10)
}

async function scraperCrossover(page) {
    await page.goto('https://www.crossover.com/blog/top-10-in-demand-programming-languages-for-2024', { waitUntil: 'networkidle' })

    const selector = 'h2'

    const dataExtraction = await page.$$eval(selector, items => 
        items.map(e => e.textContent.match(/[A-Za-z#+]+/g)[0])
    )


    return dataExtraction.slice(0, 10)
    
}



async function scraperPYPL(page) {
    await page.goto('https://pypl.github.io/PYPL.html#google_vignette', { waitUntil: 'networkidle' })

    const selector = '#table tbody tr'

    const dataExtraction = await page.$$eval(selector, items => 
        items.map(e => e.textContent.match(/[A-Za-z#+]+/g)[0])
    )


    return dataExtraction.slice(1, 11)
}



async function main() {
    const browser = await chromium.launch({
        headless: true
    })
    
    const page = await browser.newPage();

    const dataTiobe = await scraperTiobe(page)
    const dataCrossover = await scraperCrossover(page)
    const dataPYPL = await scraperPYPL(page)

    let csvContent = 'Rank TIOBE, Rank Crossover, Rank PYPL\n'

    for(let i = 0; i < 10; i++){
        csvContent += `${dataTiobe[i]},${dataCrossover[i]},${dataPYPL[i]}\n`
    }

    fs.writeFileSync('rankingLenguajes.csv', csvContent)

    browser.close()
}

main()
