const moment = require('moment');
const fs = require('fs');
let bancoDados = fs.readFileSync('./dadosPet.json');
bancoDados = JSON.parse(bancoDados);

const atualizarBanco = () => {
    let petsAtualizado = JSON.stringify(bancoDeDados, null, 2)

    fs.writeFileSync('dadosPet.json', petsAtualizado, 'utf-8');
}

const listarPets = () => {
    for (let pet of bancoDados.pets) {
        //template string
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca} ${pet.vacinado ? 'vacinado' : 'Não foi vacinado'}`);

        for (const servico of pet.servicos) {
            console.log(`${servico.data} - ${servico.nome}`);
        }
    }
}

const vacinarPet = pet => {
    if (!pet.vacinado) {
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinado com sucesso!`);
    } else {
        console.log(`Ops, ${pet.nome} já está vacinado!`);
    }
}

const campanhaVacina = () => {
    console.log("Campanha de vacina 2020");
    console.log("vacinando...");

    let petVacinadosCampanha = 0;
    for (let pet of bancoDados.pets) {
        if (!pet.vacinado) {
            vacinarPet(pet);
            petVacinadosCampanha++;
        }
    }
    console.log(`${petVacinadosCampanha} bancoDados.pets foram vaciados nessa campanha!`);
};

/*const adicionarPet = novoPet => {
    if (typeof novoPet == "object" && validarDados(novoPet)) {
        // adiciona o pet
        novoPet.nome = String(novoPet.nome);
        novoPet.idade = parseInt(novoPet.idade);

        if (!novoPet.servicos) {
            novoPet.servicos = [];
        }

        bancoDados.pets.push(novoPet);
    } else {
        console.log("Ops, insira um argumento valido!");
    }
}*/
const adicionarPet = novoPet => {
    bancoDados.pets.push(novoPet);
    atualizarBanco();
    console.log(`${novoPet.nome} foi adicionado com sucesso!`);
}

const darBanhoPet = (pet) => {
    pet.servicos.push({
        'nome':'banho',
        'data': moment().format('DD-MM-YYYY')
    });
    atualizarBanco();
    console.log(`${pet.nome} está de banho tomado!`);
};

const tosarPet = (pet) => {
    pet.servicos.push({
        'nome':'tosa',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está com cabelinho na régua :)`);
};

const apararUnhasPet = (pet) => {
    pet.servicos.push({
        'nome':'corte de unhas',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está de unhas aparadas!`);
};

const atenderCliente = (pet, servico) => {
    console.log(`Olá, bem-vindo, ${pet.nome}`);
    servico ? servico(pet) : console.log("Só vim dar uma olhadinha");
    //servico(pet);
    console.log(`Tchau, até mais!`);
}

atenderCliente(bancoDados.pets[0], darBanhoPet);


//darBanhoPet(bancoDados.pets[0]);
//darBanhoPet(bancoDados.pets[1]);
//apararUnhasPet(bancoDados.pets[2]);
console.log("-----------")
//listarPets();
adicionarPet({
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

// console.log(pets)
