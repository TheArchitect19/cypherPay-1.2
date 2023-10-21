const fetch = require('node-fetch');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;
async function scrapeWebPageEth(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch the page. Status code: ${response.status}`);
    }

    const html = await response.text();
    const { window } = new JSDOM(html);
    const lp = window.document.querySelector('#spanLowPrice').textContent;
    const ap = window.document.querySelector('#spanAvgPrice').textContent;
    const hp = window.document.querySelector('#spanHighPrice').textContent;

    const ans = (parseInt(lp , 10) + parseInt(ap , 10) + parseInt(hp , 10))/3;

    return {
      ans
    };
  } catch (error) {
    console.error('Error scraping the web page:', error);
    return null;
  }
}

async function scrapeWebPagePoly(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch the page. Status code: ${response.status}`);
    }

    const html = await response.text();
    const { window } = new JSDOM(html);
    const lp = window.document.querySelector('#standardgas').textContent;
    const ap = window.document.querySelector('#fastgas').textContent;
    const hp = window.document.querySelector('#rapidgas').textContent;

    const ans = (parseInt(lp , 10) + parseInt(ap , 10) + parseInt(hp , 10))/3;

    return {
      ans
    };
  } catch (error) {
    console.error('Error scraping the web page:', error);
    return null;
  }
}


async function scrapeWebPageAva(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch the page. Status code: ${response.status}`);
    }

    const html = await response.text();
    const { window } = new JSDOM(html);
    const lp = window.document.querySelector('#standardgas').textContent;
    const ap = window.document.querySelector('#fastgas').textContent;
    const hp = window.document.querySelector('#rapidgas').textContent;

    const ans = (parseInt(lp , 10) + parseInt(ap , 10) + parseInt(hp , 10))/3;

    return {
      ans
    };
  } catch (error) {
    console.error('Error scraping the web page:', error);
    return null;
  }
}

// Usage example
async function main() {
  const urlEth = 'https://etherscan.io/gastracker';
  const urlPoly = 'https://polygonscan.com/gastracker'
  const urlAva = 'https://snowtrace.io/gastracker';
  const scrapedDataEth = await scrapeWebPageEth(urlEth);
  const scrapedDataPoly = await scrapeWebPagePoly(urlPoly);
  const scrapedDataAva = await scrapeWebPageAva(urlAva);


  if (scrapedDataPoly !== null && scrapedDataAva && scrapedDataEth) {
    const a = scrapedDataEth.ans;
    const b = scrapedDataPoly.ans;
    const c = scrapedDataAva.ans ;
    var ans ;
    if(a < b && a<c){
      console.log("Eth is having lowest Congestion")
      ans = a
    }
    else if(b < a && b<c){
      console.log("Poly is having lowest Congestion")
      ans = b
    }
    else{
      console.log("Ava is having lowest Congestion")
      ans = 3
    }
    return{
      ans,
    }

  } else {
    console.log('Failed to scrape the web page.');
    return null ;
  }
}

const ans = main();

// export default ans ;
module.exports = ans;