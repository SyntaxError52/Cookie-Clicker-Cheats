  //////////////////////////////////
 // Put this code in the console //
//////////////////////////////////

//Auto Clicker
document.addEventListener('mousemove', () => {
  Game.cookies += 1;
});

//Spawn Golden Cookie
var newShimmer=new Game.shimmer("golden");

//OP HACK - THIS WILL DESTROY THE FUN OF THE GAME
document.addEventListener('mousemove', () => {
  var newShimmer=new Game.shimmer("golden");
  Game.cookies += 100;
});
