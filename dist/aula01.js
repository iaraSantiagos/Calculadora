class Cliente {
    private nome: string;
    private email: string;
    private idade: number;
    protected id: number;
    private livros: string[] = [];

    constructor(nome: string, email: string, idade: number, id:number){
        this.nome = nome;
        this.email = email;
        this.idade = idade;
        this.id = id;
    }

    getNome(){
        return this.nome;
    }

    getEmail(){
        return this.email;
    }

    addBooks(livro: string){
        this.livros.push(livro);
    }

    getBooks(){
        return this.livros;
    }
}

const cliente = new Cliente('andre','andrezitos@email',23,7789);

console.log(cliente.getNome(), cliente.getEmail());

cliente.addBooks("java para iniciantes - volume 1");

console.log("\n---\n");
console.log(cliente.getBooks())

function iniciar(): void {
    cliente.addBooks("java para iniciantes - volume 2");
    console.log(cliente.getBooks());
}


//---

//Promise<Cliente>

//promise retorna um estado, pending(aguardando), fulfied (cumrpido), rejected(rejeitado)

//class Cafeteria{}

//async para converter a funçao em assincrona, ou seja, uma função que espera os dados chegarem, sem necessariamente parar
//o sistema

//na  programçao sicrona o programa para se não receber os dados esperados, ela não espera

// Promise<cliente>
// Promise retorna um estado: // // pending = aguardando // fulfilled = cumprido // rejected = rejeitado // // async transforma a função em assíncrona. // await espera a Promise ser resolvida.

async function cafe(): Promise<string>{
    //retorna um estado (promisse<tipo>)
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve("café pronto");
        }, 2000);
    });
}
async function cafeExemplo(){
    const resultado = cafe();
    console.log(resultado); //retorna o estado da promisse
    const resultadoAguardado = await cafe(); //esperando os dados chegarem
    console.log(resultadoAguardado);  //exibe o que tem dentro promisse
}

cafeExemplo();

//promise é uma caixa com os 3 estados, pending(aguardando), fulfied (cumprido), rejected(rejeitado).
//é necessario uma palavra chave para exibir esses estados


//--- CEP

type Cep = {
      cep: string,
      logradouro: string,
      complemento: string,
      unidade: string,
      bairro: string,
      localidade: string,
      uf: string,
      estado: string,
      regiao: string,
      ibge: string,
      gia: string,
      ddd: string,
      siafi: string
}

async function buscarCep(): Promise<Cep>{
    //fetch termo reservado para passar a API
    const response = await fetch("https://viacep.com.br/ws/01001000/json/");
    const dados = await response.json() as Cep; //retorna em formato de json como o tipo Cep
    return dados;
}

async function buscarCepExemplo() {
    const resultadoAguardado = await buscarCep();
    console.log(resultadoAguardado);
}

buscarCepExemplo();

setTimeout(cafeExemplo, 2000);

setTimeout(iniciar, 5000);



async function apagarcep(): promisse<void>{ // delete
    return
    const response = await fetch("https://viacep.com.br/ws/010010000/json/"{
        method: "delete"
        
});
if(response.ok){
    console.log("Cep apagado com sucesso");
}else{
    console.log("Erro ao apagar o cep");
}

}
