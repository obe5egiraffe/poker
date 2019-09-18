//
/*
Sample Input
6
AAKKK 23456
KA225 33A47
AA225 44465
TT8A9 TTA89
A2345 23456
QQ2AT QQT2J

T6734

Sample Output
FULLHOUSE STRAIGHT a
PAIR PAIR b
TWOPAIR THREEOFAKIND b
PAIR PAIR ab
STRAIGHT STRAIGHT b
PAIR PAIR a

The program must read from STDIN and write to STDOUT.

make array of hands ranked lowest to highest
go through cards and find matching
if no pairs, HIGHCARD or STRAIGHT
if 2 match, TWOPAIR
if 3 match, THREEOFAKIND
5 cards in order, STRAIGHT
2 pair, 3 match, FULLHOUSE
if 4 match, FOUROFAKIND

get index of hand from hand array

*/
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const handsRank = ["HIGHCARD", "PAIR", "TWOPAIR", "THREEOFAKIND", "STRAIGHT", "FULLHOUSE", "FOUROFAKIND"];
const cardValues = ["2","3","4","5","6","7","8","9","T","J","Q","K","A"];

let inputs = [];
let hands = [];
let output = [];

rl.prompt();

rl.on('line', function(data) {
	inputs.push(data);
});


rl.on('close', function(data){
	for(let i = 1;i < inputs.length;i++){
		hands.push(inputs[i]);
	}
	console.log(inputs[0]);
	hands.forEach(hand => {
		const pair = hand.split("  ");
		let winner;
		const a = pair[0];
		const b = pair[1];
		const rankA = checkHands(a);
		const rankB = checkHands(b);
		if(rankA > rankB){
			winner = "a";
		} else if(rankA < rankB) {
			winner = "b";
		} else if(rankA === rankB){
			if(getHighCard(a) > getHighCard(b)){
				winner = "a";
			} else if(getHighCard(a) < getHighCard(b)){
				winner = "b";
			} else {
				winner = "ab";
			}
		} else {
			winner = "ab";
		}
		console.log(`${handsRank[rankA]}  ${handsRank[rankB]} ${winner}` );
	});

	process.exit(0);
});

function checkHands(hand){
	//sort hand 
	let rank = 0;
	const sortedHand = hand.split('').map(c => c[0]).sort();

	//check for matches so we can narrow it down
	let matches = [];
	for(let i=1;i < sortedHand.length; i++){
		if(sortedHand[i] == sortedHand[i-1]){
			matches.push(sortedHand[i]+sortedHand[i-1]);
		} 
	}
	
	if (matches.length === 0) {
		//Either straight or high card
		checkStraight(sortedHand);

	} else if(matches.length === 1){
		rank = 1;

	} else if (matches.length === 2){
		if(matches[0] === matches[1]){
			rank = 3;
		} else {
			rank = 2;
		}
	} else if (matches.length === 3){
		if(matches[0] == matches[1] && matches[0] == matches[2]){
			rank = 6;
		} else {
			rank = 5;
		}
		
		
	}

	return rank;

}

function getHighCard(hand){
	let highNum = 0;
	const sortedHand = hand.split('').map(c => c[0]).sort();
	sortedHand.map(card => {
		if(cardValues.indexOf(card) > highNum){
			highNum = cardValues.indexOf(card);
		}
	})

	return highNum;

}
function checkStraight(hand){
	let indexes = [];
	let inOrder = true;

	//get indexes of card from cardValues array
	hand.map(card => {
		indexes.push(cardValues.indexOf(card));
	});
	
	for(let i = 1; i < indexes.length; i++){
		if(indexes[i - 1] != indexes[i] - 1){
			inOrder = false;
		}
	}
	rank = inOrder ? 4 : 0; 
}











