const nomePetshop = "PETSHOP DECOLA";
var n_vacinados = 0;
let pets = [{
    nome: 'Mike',
    tipo: 'Cachorro',
    sexo: 'Masculina',
    idade: 8,
    raca: 'vira-lata',
    peso: 10,
    tutor: 'Mylena',
    contato: '(81) 98682-6693',
    vacinado: false,
    servicos: ['banho', 'patacure']
},
{
    nome: 'Theodoro',
    tipo: 'Gato',
    idade: 3,
    raca: 'vira-lata',
    peso: 4.5,
    sexo: 'Masculina',
    tutor: 'Gilvaneide',
    contato: '(81) 98675-6789',
    vacinado: true,
    servicos: ['tosa', 'exercicio']
},
{
    nome: 'Frida',
    tipo: 'Gato',
    idade: 8,
    raca: 'vira-lata',
    peso: 3,
    sexo: 'Feminino',
    tutor: 'Mylena',
    contato: '(81) 98682-6693',
    vacinado: true,
    servicos: ['banho', 'tosa']
}
];

//function () {} vira () => {}
const listarPets = () => {
    for(let pet of pets){
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
    }
}

const vacinarPet = ( ) => {
    for(let pet of pets){
        if (pet.vacinado == false){
            pet.vacinado = true;
            console.log(`${pet.nome} foi vacinado com sucesso`);
        } else {
            console.log(`Ops, ${pet.nome} já está vacinado`);
        }
    }
}
const adicionarPet = () => {
    pets.push({
    nome: 'Theodor',
    tipo: 'Cachorro',
    idade: 3,
    raca: 'Budogue',
    peso: 5,
    sexo: 'Masculina',
    tutor: 'Lucivaldo',
    contato: '(81) 98675-6789',
    vacinado: false,
    servicos: []
});
}
/*
const adicionarPet = (nome, tipo,idade,raca,peso,tutor,contato,vacinado,servicos) => {
    pets.push({
        nome: nome,
        tipo: tipo,
        idade: idade,
        raca: raca,
        peso: peso,
        tutor: tutor,
        contato: contato,
        vacinado: vacinado,
        servicos: servicos
    });
    for (let pet of pets) {
        console.log(pet.nome);
    }
}
*/

const campanhaVacina = () => {
    for(let pet of pets){
        if (pet.vacinado == false){
            pet.vacinado = true;
            n_vacinados++;
    }  
}
if(n_vacinados == 1){
    console.log(`${n_vacinados} foi vacinado`);
} else {
    console.log(`${n_vacinados} foram vacinados`);
}
}
const darBanhoPet = () => {
    for(let pet of pets){
            if((!(pet.servicos.includes('banho')))||(pet.servicos.length==0)){
                pet.servicos.push('banho');
                console.log(`${pet.nome} está de banho tomado!`);    
        }
    } 
}

const tosarPet = () => {
    for(let pet of pets){
            if((!(pet.servicos.includes('tosa')))||(pet.servicos.length==0)){
                pet.servicos.push('tosa');
                console.log(`${pet.nome} está com cabelinho na régua!`);    
        }
    } 
}
const apararUnhasPet = () => {
    for(let pet of pets){
            if((!(pet.servicos.includes('patacure')))||(pet.servicos.length==0)){
                pet.servicos.push('patacure');
                console.log(`${pet.nome} está de unhas aparadas!`);    
        }
    } 
}

console.log('LISTA DE PETS');
listarPets();
console.log('');
console.log('PETS VACINADOS');
vacinarPet();
console.log('');
console.log('CAMPANHA DE VACINAÇÃO');
campanhaVacina();
console.log('');
console.log('NOVA CLIENTE');
adicionarPet();
console.log('');
console.log('DANDO BANHO');
darBanhoPet();
console.log('');
console.log('TOSANDO');
tosarPet();
console.log('');
console.log('PATACURE');
apararUnhasPet();
console.log('');
console.log('NOVA LISTA');
listarPets();
//adicionarPet('nome');
//console.log(pet);