
var canvas=new fabric.Canvas("myCanvas")

//Set initial positions for ball and hole images.
var ballx = 15
var bally = 20
var holex = 600
var holey = 400
var ballheight = 50
var ballwidth = 50
var ball = ""
var golf = ""


block_image_width = 5;
block_image_height = 5;

function loadimg(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-h.png",function(img){

        golf=img

		golf.scaleToWidth(100)
        golf.scaleToHeight(100)
        golf.set({
            top:holey,
            left:holex
        })
        canvas.add(golf)
    })
}
	new_image();


function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png",function(img){

        ball=img

		ball.scaleToWidth(ballheight)
        ball.scaleToHeight(ballwidth)
        ball.set({
            top:bally,
            left:ballx
        })
        canvas.add(ball)
})

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
		if(bally>0){
			bally=bally - 10
			canvas.remove(ball)
			new_image()
		}
	}

	function down()
	{
		if(bally<550){
			bally=bally + 20
			canvas.remove(ball)
			new_image()
		}
		// Write a code to move ball downward.
	}

	function left()
	{
		if(ballx >5)
		{
		ballx=ballx - 20
        canvas.remove(ball)
        new_image()
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ballx <=750)
		{
			ballx=ballx + 20
        canvas.remove(ball)
        new_image()
			
			// Write a code to move ball right side.
		}
	}
	
}

