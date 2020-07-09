require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remind purity hover process off trash'; 
let testAccounts = [
"0x8c780945693485ea7660f112a7fd49d1b366c5c2a57a0df33455456297f772d4",
"0xf3d1f8ff8f517c04cf6f2214bdf95bf49eabdc387dbb05f7350470d4b327e589",
"0x05b5f2a18d3100aa71da207971b6ff7cf1aeae627247c306af29f9e44a7a9dd8",
"0xff09ef760b2bec4abf68ed59cd562c6a3a3c87a145e16441d1964fcd3c0eb394",
"0x1c33ad734a6fc09e712b9ba4ceec66c6715de9541bb610efb5fdc9afcdda0cb1",
"0x223429dc4db4c8617a211f4c250bccfef6e8b0b563c7f60a1510ab7a73228af9",
"0x75fdc554e21a32ac19c123832001cbaf9168d9c184ebd5627c4e41b67d20ce9b",
"0x5e0a8a7aeb0a51bfd4988d91957d7f4a626667a45d49caa5d9d6b1e8867ef4c6",
"0x01c761b01cee6950d31dec14991c8eb678af04dfe4dfc9da895294a7aae59cab",
"0xb755548d3fb33366cbdf6ced2efc82748a86c3f3c13e9234198971095438d590"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
