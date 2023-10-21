const axios = require('axios');

async function getEthereumGasFees() {
  try {
    const response = await axios.get('https://api.etherscan.io/api', {
      params: {
        module: 'gastracker',
        action: 'gasoracle',
        apikey: 'WCAHBVAXM5VM9F144YFU1F79BUFUJ6JGI9', // Replace with your Etherscan API key
      },
    });

    const gasFeeData = response.data.result;
    
    // Extract and return the gas fees
    return {
      safeGasPrice: gasFeeData.SafeGasPrice / 1e9,
      proposeGasPrice: gasFeeData.ProposeGasPrice /1e9,
      fastGasPrice: gasFeeData.FastGasPrice/1e9,
    };
  } catch (error) {
    console.error('Error fetching Ethereum gas fee data:', error);
    return null;
  }
}

async function main() {
  const ethereumGasFees = await getEthereumGasFees();

  if (ethereumGasFees !== null) {
    console.log('Ethereum Gas Fees:');
    console.log('SafeGasPrice (Rs):', ethereumGasFees.safeGasPrice * 50000);
    console.log('ProposeGasPrice (Rs):', ethereumGasFees.proposeGasPrice * 50000);
    console.log('FastGasPrice (Rs):', ethereumGasFees.fastGasPrice * 50000) ;
  } else {
    console.log('Failed to fetch Ethereum gas fee data.');
  }
}

main()
