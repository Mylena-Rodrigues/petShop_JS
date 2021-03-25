const nomePetshop = "PETSHOP DECOLA";

let pets = [{
    nome: 'Mike',
    tipo: 'Cachorro',
    sexo: 'Masculina',
    idade: 8,
    raca: 'vira-lata',
    peso: 10,
    tutor: 'Mylena',
    contato: '(81) 98682-6693',
    vacinado: true,
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

listarPets();
//console.log(pet);