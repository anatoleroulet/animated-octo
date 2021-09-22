function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second
    var rotateAngleR = Math.PI / 2 * delta * -2;

    if (keyboard.pressed("left"))
        player1.turnLeft(rotateAngle);
    if (keyboard.pressed("right"))
        player1.turnRight(rotateAngleR);
    if (keyboard.pressed("up"))
        player1.accelerate(moveDistance);
    if (keyboard.pressed("down"))
        player1.decelerate(moveDistance);

    if (enemy1.graphic.position.x < maxX  && enemy1.graphic.position.x > minX)
    {
    enemy1.accelerate(moveDistance)
    }
    else 
    {enemy1.turnLeft(Math.PI / 2 * 1 * 2)}


    if (enemy2.graphic.position.x < maxX  && enemy2.graphic.position.x > minX)
    {
    enemy2.accelerate(moveDistance)
    }
    else 
    {enemy2.turnLeft(Math.PI / 2 * 1 * 2)}



    player1.move();
    enemy2.move();
    enemy1.move();
    controls.update();
}