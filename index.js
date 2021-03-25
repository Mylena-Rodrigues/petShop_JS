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
console.log('LISTA DE PETS');
listarPets();
console.log('');
console.log('PETS VACINADOS');
vacinarPet();
console.log('');
console.log('CAMPANHA DE VACINAÇÃO');
campanhaVacina();
console.log('');
//console.log(pet);