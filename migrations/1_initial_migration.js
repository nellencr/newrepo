
var TodoList = artifacts.require('Migrations.sol');
module.exports = function(deployer) {
  deployer.deploy(Migrations.sol);

}
