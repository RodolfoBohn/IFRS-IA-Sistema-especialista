import { useQuestion } from './question/use-question'
import { msgEntradaInvalida } from './common'
import { menu } from './menu'
import { resultado } from './resultado'

const msgRegra13 = `
******** BEM-VINDO AO ESCOLHE MINHA CERVEJA ********* 
*                                                   *
*   VOCÊ GOSTA DE UM TEOR ALCOÓLICO MAIS ELEVADO?   *
*                                                   *
*           1 - SIM                                 *
*           2 - NÃO                                 *
*           3- VOLTAR AO MENU PRINCIPAL             *
*                                                   *
*****************************************************
\n`

export async function regra13() {
    let programaAtivo = true
    while (programaAtivo) {
        const response = await useQuestion(msgRegra13)
        switch (response) {
            case '1':
                programaAtivo = false
                resultado('strong pale lager')
                break
            case '2':
                programaAtivo = false
                resultado('vienna lager')
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
