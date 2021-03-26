let nomes = ['Mylena', 'Brenno', 'Gil', 'Vavá'];

nomes.push('Frida');
nomes.unshift('Mike');
const imprimirLista = () => {
for(let index = 0; index<nomes.length; index++){
    console.log(`${index}: ${nomes[index]}`);
}
}

if(!nomes.includes('Theodoro')){
    console.log("Theodoro não está no time!");
} else {
    console.log("Theodoro está no time!");
}
//let familiares = "Minha família são " + nomes.join(", "); //coloca apenas virgula como padrão, mas pode ser indicado
//let familiares = "Ultimo nome " + nomes.pop();
let familiares = "ID: " + nomes.indexOf('Mylena');
console.log(familiares);

//imprimirLista();