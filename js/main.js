let slotID = 'slot' + (Math.floor(Math.random() * 9) + 1);
let part1 = setInterval(() => {
	document.getElementById(slotID).innerHTML = '<img src="img/mole.png" onclick="finish()" draggable="false">';
	slotID = 'slot' + (Math.floor(Math.random() * 9) + 1);
}, 1000);
let part2 = setInterval(() => {
	setTimeout(() => {
		clearMoles();
	}, 500);
}, 1000);

function clearMoles() {
	for (var x = 1; x < 10; x++) {
		let slotID = 'slot' + x;
		document.getElementById(slotID).innerHTML = '';
	}
}

function finish() {
	clearInterval(part1);
	clearInterval(part2);
	document.getElementById('winnerText').innerHTML = '<h1 align="center">You win!</h1>';
}