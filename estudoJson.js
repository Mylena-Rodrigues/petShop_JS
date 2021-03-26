let arquivoJson = require("./dadosPet.json")
let pets = arquivoJson.pets;
const atenderCliente = (pet, servico) => {
    console.log(`Olá, ${pet.nome}`);
    servico ? servico() : console.log("Só vim dar uma olhadinha");
    console.log(`Tchau, até mais!`);
}

const darBanho = () => {
    console.log('Dando banho no pet... ');
}

atenderCliente(pets[0], darBanho); //Não passar função com parâmetro se não ela executará naquele momento
atenderCliente(pets[2]);