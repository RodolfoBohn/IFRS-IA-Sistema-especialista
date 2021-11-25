import { useQuestion } from './question/use-question'
import { msgEntradaInvalida } from './common'
import { regra02 } from './regra02'
import { regra08 } from './regra08'
import { menu } from './menu'

const msgRegra01 = `
******** BEM-VINDO AO ESCOLHE MINHA CERVEJA ********* 
*                                                   *
*      VOCÊ GOSTA DE CERVEJA COM MAIOR AMARGOR?     *
*                                                   *
*           1 - SIM                                 *
*           2 - NÃO                                 *
*           3- VOLTAR AO MENU PRINCIPAL             *
*                                                   *
*****************************************************
\n`

export async function regra01() {
    let programaAtivo = true
    while (programaAtivo) {
        const response = await useQuestion(msgRegra01)
        switch (response) {
            case '1':
                programaAtivo = false
                regra02()
                break
            case '2':
                programaAtivo = false
                regra08()
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
