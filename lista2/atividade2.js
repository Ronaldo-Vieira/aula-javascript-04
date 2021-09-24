var listaTime = [
    "Santos",
    "Sport",
    "Santa Cruz", 
    "Vasco", 
    "Chapecó"
]
listaTime.push("Flamengo")
listaTime.shift()
listaTime.unshift("Palmeiras")
listaTime.push("Grêmio")
listaTime.unshift("São Paulo", "Santos")
listaTime.pop()

console.log(listaTime.length)
console.log(listaTime.sort())