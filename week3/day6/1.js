/**
 * ===========
 * MINE TYCOON
 * ===========
 *
 * Anggap Array 2 dimensi ini adalah sebuah tambang. Row merepresentasikan lantai dari tambang tersebut (dari lantai 0 sampai lantai N kebawah)
 * Tambang ini memiliki 4 mineral yang menjadi kekayaan alam tambang tersebut yaitu:
 *
 * - copper
 * - silver
 * - gold
 * - diamond
 *
 * 'steps' adalah jumlah langkah yang dapat di capai oleh si penambang, untuk menambang di penambangan,
 * lokasi yang sudah di lewati oleh penambang, akan menjadi kosong
 *
 * Jika penambang mendapatkan salah satu dari 4 mineral di atas, maka penambang akan menyimpannya.
 * Function akan mereturn mineral yang pernah di dapatkan oleh si penambang selama menambang.
 *
 * contoh:
 * #mine
 * [
 *  ['#', 'c', 's', '#', '#', '#', '#'],
 *  ['d', '#', 'c', '#', 'd', '#', '#'],
 *  ['#', '#', '#', 'g', '#', '#', '#']
 * ]
 * #steps: 11
 *
 * maka function akan mereturn:
 *  mineral:
 *    [[2, cooper], [1, silver], [1, diamond]]
 *
 * Dan jika variable mine yang di tambang di console.log maka penampakan terakhirnya adalah seperti ini:
 *    [
 *      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
 *      [' ', ' ', ' ', ' ', 'd', '#', '#'],
 *      ['#', '#', '#', 'g', '#', '#', '#']
 *    ]
 *
 * RULES:
 * - Wajib menuliskan Pseudocode!
 * - Dilarang menggunakan built-in function .reduce .filter .map .indexOf .lastIndexOf etc
 */

//  TODO: #PseudoCode:
// READ 'mine' and 'steps'
// STORE 'nCopper', 'nSilver', 'nGold', 'nDiamond' with 0
// STORE 'result' without value
// SET counter 'i' and 'j' with 0

// FOR 'i' < mine.length or row in the mine
// 	increment counter 'i'
// 		WHILE 'j' < mine[i].length or individual row in the mine AND 'j' < steps
// 			check IF we found copper THEN 
// 				nCopper plus 1
// 			ENDIF
// 			check IF we found silver THEN 
// 				nSilver plus 1
// 			ENDIF
// 			check IF we found gold THEN 
// 				nGold plus 1
// 			ENDIF
// 			check IF we found diamond THEN 
// 				nDiamond plus 1
// 			ENDIF
// 			increment counter 'j'
// 		ENDWHILE
// 	IF counter 'j' has reached mine[i].length or individual row in the mine
// 		steps substract mine[i].length then update it to the condition
// 		reset counter 'j' to 0
// 	ENDIF
// ENDFOR
// IF nCopper, nSilver, nGold, nDiamond is not equal to zero THEN
// 	GROUP them in 'result'
// ENDIF

// DISPLAY 'result'
		


const mineTycoon = (mine, steps) => {
	//implementasi function disini!
	let nCopper = 0, nSilver = 0, nGold = 0, nDiamond = 0, result = []
	let j = 0
		for (let i = 0; i < mine.length; i++) {
			if (j == mine[i].length) {
				steps = steps - mine[i].length
				j = 0
			}
			while(j < steps && j < mine[i].length) {
				mine[i][j] == 'c' ? nCopper += 1 	: null
				mine[i][j] == 's' ? nSilver += 1 	: null
				mine[i][j] == 'g' ? nGold += 1 		: null
				mine[i][j] == 'd' ? nDiamond += 1 : null
				j++
			}
		}
	nCopper 	!= 0 ? result.push([nCopper, 'copper']) 		: null
	nSilver 	!= 0 ? result.push([nSilver, 'silver']) 		: null
	nGold 		!= 0 ? result.push([nGold, 'gold']) 				: null
	nDiamond 	!= 0 ? result.push([nDiamond, 'diamond']) 	: null
	return result
}

var mine1 = [
	['#', 'h', 's', '#', '#', '#', 'g'],
	['u', '#', 'c', '#', 'd', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineTycoon(mine1, 10));
// [[1, copper] [1, silver] [1, gold]]

var mine2 = [
	['#', '#', '#', '#', '#', 'w', '#'],
	['r', '#', 'c', '#', 'd', '#', '#'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineTycoon(mine2, 20));
// [[2, copper], [1, diamond]]

var mine3 = [
	['d', 'c', '#', 's', '#', 'w', '#'],
	['r', 'b', 'c', '#', '#', '#', 'g'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#']
];
console.log(mineTycoon(mine3, 94));
// [ [ 3, 'copper' ], [ 2, 'silver' ], [ 2, 'gold' ], [ 1, 'diamond' ] ]