const bancoDados = require("./dadosPet.json")
const moment = require('moment');
//console.log(JSON.stringify(bancoDados));
//console.log(JSON.stringify(dadosJson));

let pets = bancoDados.pets;

const nomePetshop = "PETSHOP DECOLA";
var n_vacinados = 0;


//function () {} vira () => {}
const listarPets = () => {
    for(let pet of pets){
        console.log(`O nome do pet é ${pet.nome}, o nome do tutor do pet é ${pet.tutor} e ${pet.vacinado ? 'foi vacinado' : 'não foi vacinado'}`);
    }
}   

const vacinarPet = (nome) => {
    for(let pet of pets){
        if (nome == pet.nome){
        if (pet.vacinado == false){
            pet.vacinado = true;
            console.log(`${pet.nome} foi vacinado com sucesso`);
        } else {
            console.log(`Ops, ${pet.nome} já está vacinado`);
        }
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
/*const darBanhoPet = () => {
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
}*/

const darBanhoPet = (pet) => {
    pet.servicos.push({
        serviço:'banho',
        data: moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está de banho tomado!`);
};

const tosarPet = pet => {
    pet.servicos.push({
        serviço:'tosa',
        data : moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está com cabelinho na régua :)`);
};

const apararUnhasPet = pet => {
    pet.servicos.push({
        serviço:'corte de unhas',
        data: moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está de unhas aparadas!`);
};

const atenderCliente = (pet, servico) => {
    console.log(`Olá, ${pet.nome}`);
    servico ? servico() : console.log("Só vim dar uma olhadinha");
    //servico(pet);
    console.log(`Tchau, até mais!`);
}

atenderCliente(pets[0], darBanhoPet);

/*console.log('LISTA DE PETS');
listarPets();
console.log('');

console.log('PET VACINADO');
vacinarPet('Frida');
console.log('');

console.log('CAMPANHA DE VACINAÇÃO');
campanhaVacina();
console.log('');

console.log('NOVA CLIENTE');
adicionarPet();
console.log('');

console.log('DANDO BANHO');
darBanhoPet(pets[0]);
console.log('');

console.log('TOSANDO');
tosarPet(pets[0]);
console.log('');

console.log('PATACURE');
apararUnhasPet(pets[0]);
console.log('');

console.log('NOVA LISTA');
listarPets();
//adicionarPet('nome');
//console.log(pet);*/