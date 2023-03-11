/*
   Exercícios Com Classes
   Exercício 16
   https://wiki.python.org.br/ExerciciosClasses
*/

/*
Crie uma "porta escondida" no programa do programa do bichinho virtual que mostre os valores exatos dos atributos do objeto. Consiga isto mostrando o objeto quando uma opção secreta, não listada no menu, for informada na escolha do usuário. Dica: acrescente um método especial str() à classe Bichinho. 
*/

class BichinhoVirtual{
   constructor(nome, fome, saude, idade, humor){
      this._nome = nome;
      this._fome = fome;
      this._saude = saude;
      this._idade = idade;
      this._humor = humor;
   }

   get nome(){
      return `O nome do seu bicho é ${this._nome}`;
   }
   set nome(nome){
      this._nome = nome;
   }
   get fome(){
      if(this._fome <= 0){
         return `${this._nome} esta com fome. ${this._fome}`;
      }else{
         return `${this._nome} não esta com fome. ${this._fome}`;
      }
   }
   set fome(fome){//Opção não incluida no menu
      this._fome = fome;
   }
   get idade(){
      return `A idade do ${this._nome} é ${this._idade}.`;
   }
   set idade(idade){
      this._idade = idade;
   }
   get saude(){
      if(this._saude <= 0){
         return `${this._nome} esta doente. Saúde ${this._saude}`;
      }else{
         return `${this._nome} não esta doente. Saúde ${this._saude}`;
      }

   }
   set saude(saude){//Opção não incluido no menu
      this._saude = saude;
   }



   darRemedio(){
    this._saude = +20;
    return `Saudével. Saúde ${this._saude}`;
   }

   darComida(){
      let comida = parseInt(prompt('Qual a quantidade de comida: '))
       if(comida > 5){
          return `Você so pode dar até 5 de comida por vez. Fome ${this._fome}, saúde ${this._fome}.`
       }else if(this._fome < -5){
          this._saude = -20;
          return `${this._nome} esta doente, você deu muita comida para ele. Saude ${this._saude}`;
       }else{
          this._fome -= comida;
          return `Fome ${this._fome}, saúde ${this._saude}.`;
       }
   }

   brincar(){
      let minutos = parseInt(prompt('Quantos minutos você quer brincar com seu bicho virtual: '))
      if(minutos > 5){
          return `Você so pode brincar com ele 5 minutos por vez.`
      }else{
          this._humor += minutos;
          return `Humor ${this._humor}.`;
      }
   }

   setHumor(){
      this._humor = (-this._fome) + (+this._saude) + (this._humor);
   };

   getHumor(){
      if(this._humor <= 4){
         return 'Mal humorado! '+this._humor;
      }else if(this._humor > 4 && this._humor <= 6){
         return 'Intediado! '+this._humor;
      }else{
         return 'Bem humorado! '+this._humor;
      }
   }

   str(){
      return `Nome: ${this.nome} | Fome: ${this.fome} | Saúda: ${this.saude} | Idade: ${this.idade} | Humor: ${this.humor}`;
   }
}

let bicho = new BichinhoVirtual('Tamagushi', 5, 10, 1, 10);
let sair;
bicho.setHumor()
while(sair != true){
   
let opcao = parseInt(prompt('O que você deseja:\n[1 - ver o nome]\n[2 - mudar o nome]\n[3 - ver se esta com fome]\n[4 - ver a idade]\n[5 - mudar a idade]\n[6 - ver saúde]\n[7 - dar remedio]\n[8 - dar comida]\n[9 - brincar]\n[10 - ver o humor]\n[11 - sair]'));

   switch(opcao){
      case 1:
         alert(bicho.nome);
      break;
      case 2:
         bicho.nome = prompt('Informe o nome do seu bicho virtual: ');
         alert(bicho.nome)
      break;
      case 3:
         alert(bicho.fome);
      break;
      case 4:
         bicho.idade;
         alert(bicho.idade)
      break;
      case 5:
         bicho.idade = parseInt(prompt('Infor a idade do seu bicho: '));
         alert(bicho.idade)
      break;
      case 6:
         bicho.saude;
         alert(bicho.saude)
      break;
      case 7:
         alert(bicho.darRemedio())
      break;
      case 8:
        alert(bicho.darComida())
      break;
      case 9:
         alert(bicho.brincar())
      break;
      case 10:
         alert(bicho.getHumor())
      break;
      case 11: 
         sair = true;
      break;
      case 100:
         alert(bicho.str());
      break;
      default:
         console.log('Opção invalida.')
      break;
   }
}