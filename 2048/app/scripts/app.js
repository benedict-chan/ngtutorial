'use strict';

angular
  //.module('twentyfourtyeightApp', ['ngCookies'])
  .module('twentyfourtyeightApp', ['Game'])
  .controller('GameController', function(GameManager){
  		this.game = GameManager;
  });
