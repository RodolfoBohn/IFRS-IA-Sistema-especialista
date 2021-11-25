import { useQuestion } from './question/use-question'
import { msgEntradaInvalida } from './common'
import { regra05 } from './regra05'
import { regra06 } from './regra06'
import { menu } from './menu'

const msgRegra04 = `
******** BEM-VINDO AO ESCOLHE MINHA CERVEJA ********* 
*                                                   *
*    VOCÊ GOSTA DE CERVEJAS COM TONS DE FRUTAS?     *
*                                                   *
*           1 - SIM                                 *
*           2 - NÃO                                 *
*           3- VOLTAR AO MENU PRINCIPAL             *
*                                                   *
*****************************************************
\n`

export async function regra04() {
    let programaAtivo = true
    while (programaAtivo) {
        const response = await useQuestion(msgRegra04)
        switch (response) {
            case '1':
                programaAtivo = false
                regra05()
                break
            case '2':
                programaAtivo = false
                regra06()
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
