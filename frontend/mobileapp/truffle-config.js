module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },

    advanced: {
      webscokets: true,
    },
  },

  contracts_build_directory: "./src/abis/",
  // Configure your compilers
  compilers: {
    solc: {
      optimizer: {
        enabled: false,
        runs: 200,
      },
    },
  },
};
