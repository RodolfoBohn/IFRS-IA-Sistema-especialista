import { useQuestion } from './question/use-question'
import { msgEntradaInvalida } from './common'
import { menu } from './menu'
import { regra11 } from './regra11'
import { regra10 } from './regra10'

const msgRegra09 = `
******** BEM-VINDO AO ESCOLHE MINHA CERVEJA ********* 
*                                                   *
*     VOCÊ GOSTA DE CERVEJA COM NOTAS DE MALTE?     *
*                                                   *
*           1 - SIM                                 *
*           2 - NÃO                                 *
*           3- VOLTAR AO MENU PRINCIPAL             *
*                                                   *
*****************************************************
\n`

export async function regra09() {
    let programaAtivo = true
    while (programaAtivo) {
        const response = await useQuestion(msgRegra09)
        switch (response) {
            case '1':
                programaAtivo = false
                regra11()
                break
            case '2':
                programaAtivo = false
                regra10()
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
