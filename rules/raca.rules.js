exports.validar = async (entidade) => {

  let erros = [];
  let valido = true;

  if (!entidade.nome) {
    erros.push("Obrigátorio informar o nome !");
  }

  if (erros.length > 0) {
    valido = false;
  }

  return {
    valido: valido,
    erros: erros
  }

}

