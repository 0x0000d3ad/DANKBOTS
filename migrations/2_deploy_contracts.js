const { time } = require( '@openzeppelin/test-helpers' );

var DankBots = artifacts.require( "DankBots.sol" );

module.exports = function( deployer ) {
	const addresses = web3.eth.getAccounts();
	var res2 = deployer.deploy( DankBots );
}
