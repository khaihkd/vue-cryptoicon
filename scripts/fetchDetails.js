const symbols = require('./../manifest.json');
const axios = require('axios');
const fs = require('fs');
async function fetchData(symbol) {
  try {
    const { data } = await axios.get(
      `https://api.coinranking.com/v1/public/coins?symbols=${symbol}`
    );
    return data;
  } catch (error) {
    console.log(symbol, error);
    return {};
  }
}
async function processSymbol() {
  let details = [];
  for (const item of symbols) {
    const { data } = await fetchData(item.symbol);
    if (data && data.coins && data.coins.length > 0) {
      const coin = data.coins[0];
      if (coin) {
        let info = {
          id: coin.id,
          symbol: coin.symbol,
          name: coin.name,
          circulatingSupply: coin.circulatingSupply,
          totalSupply: coin.totalSupply,
          rank: coin.rank
        };
        details.push(info);
      } else {
        let info = {
          id: null,
          symbol: item.symbol,
          name: item.name,
          circulatingSupply: null,
          totalSupply: null,
          rank: null
        };
        details.push(info);
      }
    }
  }
  var stringifyData = JSON.stringify(details);
  fs.writeFile('src/data.json', stringifyData, 'utf8', function(err) {
    if (err) {
      return console.log(err);
    }
    console.log('The file was saved!');
  });
}

processSymbol();