class heroi{
    constructor(nome,idade,tipo,ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }
    
    atacar(){
        console.log(`O ${this.nome} atacou usado ${this.ataque}`)
                           
    }


}

let viniciusMago = new heroi ("Vinicius Mago","41" ,"mago","magia" )
let viniciusGuerreiro = new heroi ("Vinicius Guerreiro","40" ,"Guerreiro","espada" )
let viniciusMonge = new heroi ("Vinicius Monge","39" ,"Monge","marciais" )
let viniciusNinja = new heroi ("Vinicius Nija ","38" ,"Ninja","Shuriken" )



   viniciusMago.atacar()