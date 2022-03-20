//uma função que ela mesmo se chama de volta, como o for 

function recursiva (max, min) {
    if (max >= 1000 ) return
    max++
    console.log(max)
    recursiva(max)
}
recursiva(50)