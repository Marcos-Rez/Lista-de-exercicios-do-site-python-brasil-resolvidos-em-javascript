/*
   Exercícios Com Classes
   Exercício 17
   https://wiki.python.org.br/ExerciciosClasses
*/


/*
Crie uma Fazenda de Bichinhos instanciando vários objetos bichinho e mantendo o controle deles através de uma lista. Imite o funcionamento do programa básico, mas ao invés de exigis que o usuário tome conta de um único bichinho, exija que ele tome conta da fazenda inteira. Cada opção do menu deveria permitir que o usuário executasse uma ação para todos os bichinhos (alimentar todos os bichinhos, brincar com todos os bichinhos, ou ouvir a todos os bichinhos). Para tornar o programa mais interessante, dê para cada bichinho um nivel inicial aleatório de fome e tédio. 
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
      return `${localStorage.getItem(this._nome)}`;
   }
   set nome(nome){
      localStorage.setItem(this._nome, nome);
      this._nome = nome;
      
     
   }
   get fome(){
      if(this._fome <= 0){
         return `${localStorage.getItem(this._nome)} esta com fome: ${localStorage.getItem(this._nome+'-fome')}`;
      }else{
         return `${localStorage.getItem(this._nome)} não esta com fome: ${localStorage.getItem(this._nome+'-fome')}`;
      }
   }
   set fome(fome){//Opção não incluida no menu
      localStorage.setItem(this._nome+'-fome', fome);
      this._fome = fome;
   }
   get idade(){
      return `A idade do ${localStorage.getItem(this._nome)} é ${localStorage.getItem(this._nome+'-idade')}.`;
   }
   set idade(idade){
      localStorage.setItem(this._nome+'-idade', idade)
      this._idade = idade;
   }
   get saude(){
      if(this._saude <= 0){
         return `${localStorage.getItem(this._nome)} esta doente. Saúde ${localStorage.getItem(this._nome+'-saude')}`;
      }else{
         return `${this._nome} não esta doente. Saúde ${localStorage.getItem(this._nome+'-saude')}`;
      }

   }
   set saude(saude){//Opção não incluido no menu
      localStorage.setItem(this._nome+'-saude', saude)
      this._saude = saude;
   }


   darRemedio(){
   
         let bicho = prompt(`O ${this._nome} esta doente [s - sim] ou [n - não]: `);
         if(bicho == 's' || bicho == 'S'){
            localStorage.setItem(bicho+'-saude', 10);
            return `${this._nome}. Saúde ${localStorage.getItem(this._nome+'-saude')}`;
         }
         
   

   }


   darComida(){
      let comida = parseInt(prompt(`${bicho.fome}. Qual a quantidade de comida: `))
       if(comida > 5){
          return `Você so pode dar até 5 de comida por vez. Fome ${ localStorage.getItem(this._nome+'-fome')}, saúde ${localStorage.getItem(this._nome+'-saude')}.`;
          return;
       }
       
       if(localStorage.getItem(this._nome+'-fome') < -5){
          this._saude = -20;
          localStorage.setItem(this._nome+'-saude', this._saude);
          return `${this._nome} esta doente, você deu muita comida para ele. Saude ${this._saude}`;
       } 
       if(comida <= 5){
          
          let fome = localStorage.getItem(this._nome+'-fome');
          fome = (Number(fome) + (Number(comida)));
          localStorage.setItem(this._nome+'-fome', fome);
          return `Fome ${localStorage.getItem(this._nome+'-fome')}, saúde ${localStorage.getItem(this._nome+'-saude')}.`;
       }
   }

   brincar(){
      let minutos = parseInt(prompt(`Humor do(a) ${this._nome}: ${localStorage.getItem(this._nome+'-humor')}Quantos minutos você quer brincar com ${this._nome}: `))
      if(minutos > 5){
          return `Você so pode brincar com ele 5 minutos por vez.`
      }else{
         let humor = Number(localStorage.getItem(this._nome+'-humor'));
          humor += minutos;
          return `O(a) ${this._nome} - humor: ${humor}.`;
      }
   }

   setHumor(humor){
      //this._humor = (-this._fome) + (+this._saude) + (this._humor);
      localStorage.setItem(this._nome+'-humor', humor);
   };

   getHumor(){
      if(localStorage.getItem(this._nome+'-humor') <= 4){
         return 'O(a) '+this._nome +' esta mal humorado(a)! Humor: '+localStorage.getItem(this._nome+'-humor');
      }else if(localStorage.getItem(this._nome+'-humor') > 4 && localStorage.getItem(this._nome+'-humor') <= 6){
         return 'O(a) '+this._nome+' esta intediado(a)! Humor: '+localStorage.getItem(this._nome+'-humor');
      }else{
         return 'O(a) '+this._nome+' bem humorado(a)! Humor: '+localStorage.getItem(this._nome+'-humor');
      }
   }

   str(){
      return `Nome: ${this._nome} | Fome: ${this._fome} | Saúda: ${this._saude} | Idade: ${this._idade} | Humor: ${this._humor}`;
   }
}


const fazenda = ['andorinha', 'bode', 'cavalo', 'vaca', 'porco', 'ovelha', 'boi', 'cachorro'];
const saude = [10, 10, 10, 10, 10, 10, 10, 10];
saude.forEach((animal, i)=>{
   localStorage.setItem(fazenda[i]+'-saude', animal);
})
let bicho;
fazenda.forEach((animal) =>{
   localStorage.setItem(animal, animal)
})

//let bicho = new BichinhoVirtual('Tamagushi', 5, 10, 1, 10);
let sair;

while(sair != true){
   
let opcao = parseInt(prompt('O que você deseja:\n[1 - ver o nome]\n[2 - mudar o nome]\n[3 - ver se esta com fome]\n[4 - ver a idade]\n[5 - mudar a idade]\n[6 - ver saúde]\n[7 - dar remedio]\n[8 - dar comida]\n[9 - brincar]\n[10 - ver o humor]\n[11 - sair]'));
for(let animal of fazenda){
   let fome = Math.floor(Math.random() * (10 - (-10)) + 1) + (-10);
   let humor = Math.floor(Math.random() * (10 - (-10)) + 1) + (-10);
   bicho = new BichinhoVirtual(animal, fome, 10, 1, humor);
   bicho.setHumor(humor)
   localStorage.setItem(bicho.nome+'-fome', fome);

   switch(opcao){

      case 1:
         alert("O nome do seu bicho é "+bicho.nome);
      break;
      case 2:
         bicho.nome = prompt(`Informe o novo nome do(a) ${bicho.nome}: `);
      break;
      case 3:
         alert(`${bicho.fome}`);
      break;
      case 4:
         bicho.idade;
         alert(bicho.idade)
      break;
      case 5:
         bicho.idade = parseInt(prompt(`Informe a idade do ${bicho.nome}: `));
         alert(bicho.idade)
      break;
      case 6:
         bicho.saude;
         alert(bicho.saude)
      break;
      case 7:
         alert(bicho.darRemedio(animal));

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
         console.log('Opção invalida.');
      break;
      }
   }
}