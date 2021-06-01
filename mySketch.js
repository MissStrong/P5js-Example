function setup() {
	createCanvas(800, 600);
	background(255);
	let x = 0;
	let y = 0;
	countdown = 40;
	while (0 < countdown) {
		line(x, 0, x, 600);
		line(0, y, 800, y);
		x += 50;
		y += 50;
		countdown--;
	}
	// wait = true;
	// setTimeout(stopWaiting, 3000);
}

// function stopWaiting() {
// 	wait = false;
// }

function draw() {
	// if (!wait) {
	fill(int(random(256)), int(random(256)), int(random(256)));
	let x = 50 * int(random(40));
	let y = 50 * int(random(30));
	rect(x, y, 50, 50);
	// }
}

