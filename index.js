//process.stdout.write('hello\n');

/*
Sample Input
6
AAKKK 23456
KA225 33A47
AA225 44465
TT8A9 TTA89
A2345 23456
QQ2AT QQT2J

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
const handsRank = ["HIGHCARD", "PAIR", "TWOPAIR", "THREEOFAKIND", "STRAIGHT", "FULLHOUSE", "FOUROFAKIND"];
const cardValues = ["2","3","4","5","6","7","8","9","T","J","Q","K"];

let winner = "";

const example1 = "TTTA9";
const example2 = "TTTT2";

console.log(checkHand(example1));
console.log(checkHand(example2));

function checkHand(hand){
	//sort hand 
	const sortedHand = hand.split('').map(c => c[0]).sort();
	let rank = 0;
	//check for matches so we can narrow it down
	let matches = [];
	for(let i=1;i < sortedHand.length; i++){
		if(sortedHand[i] == sortedHand[i-1]){
			matches.push(sortedHand[i]+sortedHand[i-1]);
		} 
	}
	
	if (matches.length === 0) {
		//Either straight or high card
		rank = 0;

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
	//console.log(matches);
	return handsRank[rank];

}





//check for matches








