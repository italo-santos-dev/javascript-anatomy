const conta = (...args)=>{
    console.log(`Argumentos que foram passados: ${args}`)  
    for (let valor of args) {
        console.log(`${valor} * 2 = ${valor*2} `)
    } 
}

conta(1,2,3)