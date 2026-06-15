// Fazer validação para checar se o historico existe
const Historico = require('../model/historico');

async function checkHistoricoExists(id){
    if(!id) return null;
    const found = await Historico.findById(id);
    return found;
}

module.exports = { checkHistoricoExists }