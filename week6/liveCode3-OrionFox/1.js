/**
 * Function maxSum menerima input berupa array berisi integer. 
 * maxSum akan mencari 'pasangan' integer yang akan menghasilkan jumlah terbesar jika
 * keduanya dijumlahkan. Pasangan integer ini tidak boleh terdiri dari integer yang sama ([9,9], [3,3] tidak boleh!)
 * 
 * Output yang diharapkan adalah sebuah array berisi kedua angka tersebut. 
 * Jika input merupakan kumpulan angka yang sama maka output adalah angka tersebut dalam sebuah array. (Ini karena tidak ada pasangan angka di dalam array tersebut).
 * Lihatlah contoh test case untuk lebih jelasnya. Tuliskanlah Pseudocode kalian diatas code tersebut.
 * 
 * Contoh:
 * -Input: [1,2,3]
 * -Output: [2,3]
 * 
 * -Input:[1]
 * -Output[1]
 * 
 * 
 * Rules:
 * -Tulislah Pseudocode diatas Code kalian
 * -Dilarang menggunakan built-in function selain .push()
 * 
 */

//Write pseudocode here

function maxSum(array) {
    //implementasikan function disini
    let result = []
    for (let i = 0; i < array.length; i++){
        for (let j = i+1; j < array.length; j ++) {
            result.push([array[i], array[j],[array[i] + array[j]]])
        }
    }
    let final = []
    for (let i = 0; i < result.length; i++) {
        // console.log(result[i][2] , '<<<<<<')
        for (let j = 0; j < result.length-1; j++) {
            let temp
            if (result[j][2][0] > result[j+1][2][0]) {
                temp = result[j]
                result[j] = result[j+1]
                result[j+1] = temp
            }
        }
        // console.log(result[i])
    }
    final.push(result[result.length-1][0], result[result.length-1][1])
    // let akhir = []
    // akhir.push(final[0][0])
    return result
}

console.log(maxSum([1, 3, 5, 1, 9])) //[5,9]
// console.log(maxSum([1])) //[1]
console.log(maxSum([5, 5, 5, 4])) //[5,4]
console.log(maxSum([5, 5, 5, 5])) //[5]