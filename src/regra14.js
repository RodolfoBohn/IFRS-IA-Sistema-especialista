import { useQuestion } from './question/use-question'
import { msgEntradaInvalida } from './common'
import { menu } from './menu'
import { resultado } from './resultado'

const msgRegra14 = `
******** BEM-VINDO AO ESCOLHE MINHA CERVEJA ********* 
*                                                   *
*        VOCÊ PREFERE ARMOAS MAIS COMPLEXOS?        *
*                                                   *
*           1 - SIM                                 *
*           2 - NÃO                                 *
*           3- VOLTAR AO MENU PRINCIPAL             *
*                                                   *
*****************************************************
\n`

export async function regra14() {
    let programaAtivo = true
    while (programaAtivo) {
        const response = await useQuestion(msgRegra14)
        switch (response) {
            case '1':
                programaAtivo = false
                resultado('strong dark ale')
                break
            case '2':
                programaAtivo = false
                resultado('belgian pale ale')
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
