import { useQuestion } from './question/use-question'
import { msgEntradaInvalida } from './common'
import { regra07 } from './regra07'
import { menu } from './menu'
import { resultado } from './resultado'

const msgRegra06 = `
******** BEM-VINDO AO ESCOLHE MINHA CERVEJA ********* 
*                                                   *
*    VOCÊ GOSTA DE CERVEJAS COM NOTAS DE LÚPULO?    *
*                                                   *
*           1 - SIM                                 *
*           2 - NÃO                                 *
*           3- VOLTAR AO MENU PRINCIPAL             *
*                                                   *
*****************************************************
\n`

export async function regra06() {
    let programaAtivo = true
    while (programaAtivo) {
        const response = await useQuestion(msgRegra06)
        switch (response) {
            case '1':
                programaAtivo = false
                regra07()
                break
            case '2':
                programaAtivo = false
                resultado('bock')
                break
            case '3':
                programaAtivo = false
                menu()
                break
            default:
                console.log(msgEntradaInvalida)
        }
    }
}
