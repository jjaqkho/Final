var growGreen = 0;
var growRed = 0;
var growOrange = 0;
var speedRed = 0;
var speedGreen = 0;
var speedOrange = 0;
var pageToShow = "intro";
var addedValueEmpathy = 0;
var addedValueAfterlife = 0;
var addedValueProselytism = 0;
var won = "CONGRATULATIONS! YOU WON!!";
var lost = "TRY AGAIN!!";


function preload() {
	imgMask = loadImage("images/Mask.png");
	imgBackdrop = loadImage("images/Backdrop.png");
	imgMap = loadImage("images/Map.png");
	imgIntro1 = loadImage("images/Intro1.png");
	imgIntro2 = loadImage("images/Intro2.png");
	imgIntro3 = loadImage("images/Intro3.png");
	imgLastPage = loadImage("images/LastPage.png");
}



function setup() {
	createCanvas(5100, 3300);
}

function mousePressed() {

	if (pageToShow === "intro") {
		pageToShow = "intro2";

	} else if (pageToShow === "intro2") {
		pageToShow = "intro3";

	} else if (pageToShow === "intro3") {
		speedRed = 2;
		speedGreen = 2;
		speedOrange = 2;
		image(imgMap, 0, 0);
		pageToShow = "growing";

	} else if (pageToShow === "growing" && (growGreen > 2000 || growRed > 2000 ||
			growOrange > 2000)) {
		pageToShow = "LastPage";
	}
}



function draw() {

	if (pageToShow === "intro") {
		image(imgIntro1, 0, 0);
		cursor(HAND);


	} else if (pageToShow === "intro2") {
		image(imgIntro2, 0, 0);
		cursor(HAND);


	} else if (pageToShow === "intro3") {
		image(imgIntro3, 0, 0);
		frameRate(5);
		//buttonEmpathyIncrease
		if (
			mouseX > 2628 &&
			mouseX < 2872 &&
			mouseY > 1620 &&
			mouseY < 1852) {
			addedValueEmpathy += 1;
		}
		//buttonAfterlifeIncrease
		if (
			mouseX > 2628 &&
			mouseX < 2872 &&
			mouseY > 2060 &&
			mouseY < 2300) {
			addedValueAfterlife += 1;
		}
		//buttonProselytismIncrease
		if (
			mouseX > 2628 &&
			mouseX < 2872 &&
			mouseY > 2512 &&
			mouseY < 2760) {
			addedValueProselytism += 1;
		}

		//buttonEmpathyDecrease
		if (
			mouseX > 3312 &&
			mouseX < 3552 &&
			mouseY > 1620 &&
			mouseY < 1852) {
			addedValueEmpathy -= 1;
		}
		//buttonAfterlifeDecrease
		if (
			mouseX > 3312 &&
			mouseX < 3552 &&
			mouseY > 2060 &&
			mouseY < 2300) {
			addedValueAfterlife -= 1;
		}
		//buttonProselytismDecrease
		if (
			mouseX > 3312 &&
			mouseX < 3552 &&
			mouseY > 2512 &&
			mouseY < 2760) {
			addedValueProselytism -= 1;
		}

		//restrictionValue
		if (addedValueEmpathy < 0) {
			addedValueEmpathy = 0;
		}

		if (addedValueAfterlife < 0) {
			addedValueAfterlife = 0;
		}

		if (addedValueProselytism < 0) {
			addedValueProselytism = 0;
		}


		//empathyDisplayValue
		fill(0);
		textFont("Helvetica");
		textSize(200);
		text(addedValueEmpathy, 3000, 1800);
		//afterlifeDisplayValue
		fill(0);
		textFont("Helvetica");
		textSize(200);
		text(addedValueAfterlife, 3000, 2250);
		//proselytismDisplayValue
		fill(0);
		textFont("Helvetica");
		textSize(200);
		text(addedValueProselytism, 3000, 2700);



	} else if (pageToShow === "growing") {

		frameRate(400);

		growRed = growRed + speedRed + addedValueEmpathy + (addedValueAfterlife) / 4 +
			(addedValueProselytism) / 2;

		growGreen = growGreen + speedGreen + (addedValueEmpathy) / 2 +
			addedValueProselytism;

		growOrange = growOrange + speedOrange + addedValueAfterlife + (
			addedValueProselytism) * 2;

		noStroke();
		fill(141, 198, 63, 10);
		ellipse(1476, 2336, growGreen, growGreen);
		fill(237, 28, 36, 10);
		ellipse(2400, 1000, growRed, growRed);
		fill(246, 142, 86, 10);
		ellipse(3900, 2604, growOrange, growOrange);

		//values
		image(imgMask, 0, 10);
		image(imgBackdrop, 0, 0);

		fill(0);
		textFont("Helvetica");
		textSize(100);
		text(growGreen, 320, 220);

		fill(0);
		textFont("Helvetica");
		textSize(100);
		text(growRed, 320, 390);

		fill(0);
		textFont("Helvetica");
		textSize(100);
		text(growOrange, 320, 580);

		//growthRestriction
		if (growGreen > 3000 || growRed > 3000 ||
			growOrange > 3000) {
			speedGreen = 0;
			speedRed = 0;
			speedOrange = 0;
			addedValueEmpathy = 0;
			addedValueAfterlife = 0;
			addedValueProselytism = 0;
		}

		if (speedGreen < 1 || speedRed < 1 ||
			speedOrange < 1) {
			cursor(HAND);
		} else {
			cursor(ARROW);
		}
	}



	if (pageToShow === "LastPage") {
		image(imgLastPage, 0, 0);

		fill(0);
		textFont("Helvetica");
		textSize(100);
		text("IF YOUR RELIGION COVERS THE MOST AREA, CONGRATULATIONS!!", 900, 1344);

		if (mouseX > 1888 &&
			mouseX < 3180 &&
			mouseY > 1908 &&
			mouseY < 2316) {
			cursor(HAND);
		} else {
			cursor(ARROW);
		}

		if (mouseIsPressed &&
			mouseX > 1888 &&
			mouseX < 3180 &&
			mouseY > 1908 &&
			mouseY < 2316) {
			pageToShow = "intro3";
			growGreen = 0;
			growRed = 0;
			growOrange = 0;
			addedValueEmpathy = 0;
			addedValueAfterlife = 0;
			addedValueProselytism = 0;
			//reset "growing"
		}

	}
}
