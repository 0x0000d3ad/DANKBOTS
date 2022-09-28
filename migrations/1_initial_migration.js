const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
  var res = deployer.deploy(Migrations);
};
