let message: string = "Help me, Obi-Wan"
console.log(message)

let episode: number = 4
console.log("This is episode "+ episode)

episode = episode + 1
console.log("Next is episode "+ episode)


let isEnoughToBeatMF = function (parsecs: number) : boolean {
    return parsecs < 12
}


let distance = 12

isEnoughToBeatMF(distance);



let call = (name: String) => console.log(`Do you copy, ${name}`)

