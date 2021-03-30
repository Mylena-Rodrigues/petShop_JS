const moment = require('moment');
const fs = require('fs');
let bancoDados = fs.readFileSync('./dadosPet.json');
bancoDados = JSON.parse(bancoDados);

const atualizarBanco = () => {
    let petsAtualizado = JSON.stringify(bancoDados, null, 2)

    fs.writeFileSync('dadosPet.json', petsAtualizado, 'utf-8');
}

const listarPets = () => {
    bancoDados.pets.forEach((pet) => {
        //template string
        let {nome, idade, tipo, raca, vacinado} = pet;
        console.log(`${nome}, ${idade}, ${tipo}, ${raca} ${vacinado ? 'vacinado' : 'Não foi vacinado'}`);

        pet.servicos.forEach((servico) => {
            let {data, nome} = servico;
            console.log(`${data} - ${nome}`);
        })
    }
    )}
/*const vacinarPet = (pet) => {
    if (!pet.vacinado) {
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinado com sucesso!`);
    } else {
        console.log(`Ops, ${pet.nome} já está vacinado!`);
    }
});*/

const vacinarPet = (pet) => {
        pet.vacinado = true;
        atualizarBanco();
        console.log(`${pet.nome} foi vacinado com sucesso!`);
};

const campanhaVacina = () => {
    console.log("Campanha de vacina 2020");
    console.log("vacinando...");

    let petVacinadosCampanha = 0;

    bancoDados.pets = bancoDados.pets.map((pet) => {
        if (!pet.vacinado) {
            vacinarPet(pet);
            petVacinadosCampanha++;
        }

        return pet;
    });
    
    console.log(`${petVacinadosCampanha} pets foram vacinados nessa campanha!`);
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

const buscarPet = (nomePet) => {

    let petEncontrado = bancoDados.pets.find((pet) => {
        return pet.nome == nomePet;
    });

    return petEncontrado ? petEncontrado : `Nenhum pet encontrado com nome ${nomePet}`;
}

const filtrarTipoPet = (tipoPet) => {

    let petsEncontrados = bancoDados.pets.filter((pet) => {
        return pet.tipo == tipoPet;
    });

    return petsEncontrados;
}

const clientePremium = (pet) => {
    let {nome} = pet;
    let nServicos = pet.servicos.length;

    if (nServicos > 5) {
        console.log(`Olá, ${nome}! Você é um cliente especial e ganhou um descontão!`);
    } else {
        console.log(`Olá, ${nome}! Você ainda não tem descontos disponiveis!`);
    }
}
//Desestruturação
const contatoTutor = (pet) => {
    let {nome, tutor, contato} = pet;

    return `Tutor: ${tutor}
Contato: ${contato}
Pet: ${nome}`;
}

const filtrarTutor = (nomeTutor) => {
    let petsTutor = bancoDados.pets.filter((pet) => {
        return pet.tutor == nomeTutor;
    }) 
 
    console.log(`Pets do tutor ${nomeTutor}`);
    petsTutor.forEach((pet) => {
        console.log(`${pet.nome} - ${pet.tipo}`);
    })
}   

console.log(contatoTutor(bancoDados.pets[1]));
filtrarTutor('Mylena');

//clientePremium(bancoDados.pets[2]);

//atenderCliente(bancoDados.pets[3], apararUnhasPet);


//darBanhoPet(bancoDados.pets[0]);
//darBanhoPet(bancoDados.pets[1]);
//apararUnhasPet(bancoDados.pets[2]);
console.log("-----------")
listarPets();
/*
console.log("-----------")
console.log(filtrarTipoPet('Cachorro'));
console.log("-----------")
console.log(buscarPet('Juninho'));
console.log("-----------")
campanhaVacina();*/
/*adicionarPet({
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
});*/

// console.log(pets)
