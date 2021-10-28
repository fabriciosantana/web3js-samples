require("@nomiclabs/hardhat-waffle");

const dotenv = require("dotenv");
dotenv.config();


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks:{
    ganache:{
      url: "http://127.0.0.1:8545",
    },
    ropsten: {
      url: `${process.env.INFURA_ROPSTEN_BASE_URL}${process.env.INFURA_API_KEY}`,
      chainId: 3,
      from: `${process.env.FROM_ADDRESS}`,
      gas: "auto",
      gasPrice: "auto",
      loggingEnabled: "false",
      accounts: [`${process.env.PRIVATE_KEY}`]
    },

    kovan: {
      url: `${process.env.INFURA_KOVAN_BASE_URL}${process.env.INFURA_API_KEY}`,
      chainId: 42,
      from: `${process.env.FROM_ADDRESS}`,
      gas: "auto",
      gasPrice: "auto",
      loggingEnabled: "false",
      accounts: [`${process.env.PRIVATE_KEY}`]
    },
  }
};
