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

make array of hands ranked lowest to highest
go through cards and find matching
if no pairs, HIGHCARD
if 2 match, TWOPAIR
if 3 match, THREEOFAKIND
5 cards in order, STRAIGHT
2 pair, 3 match, FULLHOUSE
if 4 match, FOUROFAKIND

get index of hand from hand array

*/


