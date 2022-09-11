function some(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y necessitam ser do tipo número');
    }

    return x + y;
}

try {
    console.log(some(144, 277));
    console.log(some('1', 2));    
} catch (error) {
    console.log("Erro referente ao tipo do dado informado ao sisitema.")
}
