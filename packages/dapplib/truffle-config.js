require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remind pulp hunt loan outer slender'; 
let testAccounts = [
"0x3d0a38d9c6f2d4539f4e3bcca567b346014c0b8a47bb1e6eb0a6cc2b9761e899",
"0x37c2abcb08b2114070517e3a92332ec22688a6e9f472ebccc9485d4c2df0def5",
"0x7753880a12cb39fc25f781e04cf7c6b3d629451e209ded26c5a838b73408159f",
"0x1aa36e26d483037ab136dca890bd21355c02b5182e661dfc85ea63ee9af70534",
"0x9391bc9842c5859537923382697cb1643dd9821952506507087f2fb4368bc0c8",
"0xfeee6c926b8cf0764e12cc41dbca8180c614f7430ae981dc05dce7cec67ad41d",
"0x8bba162e733f7ab1f66365e6fa3af576f5dc2fdc965e7dbbf3879d7c3f80d595",
"0x77d6769a9ec7be805c2f1c6ff7c21c8ff5381a1294ccef306488046d02884fa3",
"0xfd8cf5cc017d73ef362160281211b181f846fe92b834701c333e1c0455476c41",
"0x548f2214c752d881847f9fe5c1cbc0aa0b0721721005abdde6e73c3b61879ce3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

