$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(100, 90, 20, 2000);
createPlatform(20, 450, 90, 40);
createPlatform(40,400, 25, 50);
createPlatform(10,200, 10, 45);
createPlatform(88,285, 10, 45);
createPlatform(20,200, 10, 45);
createPlatform(80,120, 10, 12);
createPlatform(250,500,100,40);
createPlatform(480, 470, 100, 40);
createPlatform(720, 470, 300, 40);
createPlatform(1150, 410, 200, 18);
createPlatform(1000, 280, 250, 14);
createPlatform(900, 180, 50, 14);





    // TODO 3 - Create Collectables
    createCollectable("steve", 1250, 360);
    createCollectable("diamond", 500, 440, 1, 0);
    createCollectable("diamond", 920, 140, 0.5, 0.7);

    
    // TODO 4 - Create Cannons

    createCannon("left", 600, 200);
    createCannon("bottom", 280, 1000);
    createCannon("right", 280, 700);
createCannon("bottom", 780, 1000);
createCannon("top", 300, 1200);
createCannon("bottom", 1100, 800);
createCannon("bottom", 500, 700);
    createCannon("left", 300, 10000);

    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
