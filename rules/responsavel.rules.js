exports.validar = async (entidade) => {

  let erros = [];
  let valido = true;

  if (!entidade.nome) {
    erros.push("Obrigátorio informar o nome !");
  }

  if (!entidade.telefone) {
    erros.push("Obrigátorio informar o telefone !");
  }

  if (!entidade.email) {
    erros.push("Obrigátorio informar o email !");
  }

  if (!entidade.senha) {
    erros.push("Obrigátorio informar a senha !");
  }

  if (erros.length > 0) {
    valido = false;
  }

  return {
    valido: valido,
    erros: erros
  }

}

