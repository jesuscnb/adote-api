exports.validar = async (entidade) => {

  let erros = [];
  let valido = true;

  if (!entidade.nome) {
    erros.push("Obrigátorio informar o nome !");
  }

  if (!entidade.sexo) {
    erros.push("Obrigátorio informar o sexo !");
  }

  if (!entidade.especie) {
    erros.push("Obrigátorio informar a especie !");
  }

  if (!entidade.raca) {
    erros.push("Obrigátorio informar a raca !");
  }

  if (!entidade.responsavel) {
    erros.push("Obrigátorio informar o responsavel !");
  }

  if (!entidade.tipo) {
    erros.push("Obrigátorio informar o tipo !");
  }

  if (!entidade.porte) {
    erros.push("Obrigátorio informar o porte !");
  }

  if (erros.length > 0) {
    valido = false;
  }

  return {
    valido: valido,
    erros: erros
  }

}

