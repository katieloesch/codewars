// Object
// Find the last number between 1 and n (inclusive) that survives the elimination process

// How It Works
// Start with the first number on the left then remove every other number moving right until you reach the the end,
// then from the numbers remaining start with the first number on the right and remove every other number moving left
// repeat the process alternating between left and right until only one number remains which you return as the "last man standing"

// Example
// given an input of `9` our set of numbers is `1 2 3 4 5 6 7 8 9`

// start by removing from the left    2   4   6   8
//                                  1   3   5   7   9


// then from the right                2       6
//                                        4       8


// then the left again                        6
//                                    2

// until we end with `6` as the last man standing

function lastManStanding(n){
    //create an array of numbers from 0 to n
    let arr = Array.from(Array(n+1).keys())

    // remove 0 from array
    arr.splice(0,1) 

    let last_man = false

    while (last_man === false) {
        //remove every other number from LEFT to RIGHT
        let ltr = arr.filter((e, i) => ( i % 2 !== 0))

        if (ltr.length > 1) {

            //remove every other number from RIGHT to LEFT

            let rtl

            if (ltr.length%2 === 0) {
                rtl = ltr.filter((e, i) => ( i % 2 === 0))
        
            } else {
                rtl = ltr.filter((e, i) => ( i % 2 !== 0))
            }

            arr = rtl
            last_man = arr.length > 1 ? false : rtl[0]

        } else {
            arr = ltr
            last_man = arr.length > 1 ? false : ltr[0]
        }
    }
    return last_man
}

console.log(lastManStanding(9))


