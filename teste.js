const valorA = [{nome: 'rafael', valor: 29}, {nome: 'diego', value: 21},{nome: 'tiago', value: 12}]

const valorB = [{nome: 'rafael', valor: 29}, {nome: 'diego', value: 21}]


const valorC = valorA.filter(valor => valorB.findIndex(vB => vB.nome === valor.nome) === -1);

console.log(JSON.stringify(valorC))