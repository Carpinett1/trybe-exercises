let clientesTrybeBank = ['Ada', 'John', 'Gus'];



function encontrarCliente(cliente) {
  let clienteEncontrado = false;
  for (let index = 0; index < clientesTrybeBank.length; index += 1) {
    if (cliente === clientesTrybeBank[index]) {
        clienteEncontrado = true;
    } else {
      return 'Cliente não encontrado'
    }
  } 
}

function isString(cliente) {
  let clienteString = false;
  if (typeof cliente === 'string') {
    clienteString = true;
  } else {
    return 'O parâmetro passado deve ser do tipo "string"!';
  }
}


function removeCliente(cliente) {

  let existeCliente = encontrarCliente(cliente);
  let existeString = isString(cliente);

  if (existeCliente && existeString) {
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
      if (cliente === clientesTrybeBank[index]) {
        clientesTrybeBank.splice(index, 1);
        return 'Cliente excluída(o) com sucesso.';
      }
    }
  }
}
console.log(removeCliente("Gus"));
console.log(clientesTrybeBank);
