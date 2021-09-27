var a = [3,3,2,2,1,5,5]

a.map(item => {
    var count = 0
    a.map(number => {
        if(number === item){
            count++
        } 
    })
    if(count < 2) {
        console.log(item)
    }
})