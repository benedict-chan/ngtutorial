describe('Game module', function(){
	describe('Game Manager', function(){
		// Inject the Game module into this test
		beforeEach(module('Game'));

		// Our tests will go below here
		var gameManager;// instance of the GameManager
		beforeEach(inject(function(GameManager){
			gameManager = GameManager;
			
		}));
	});
});