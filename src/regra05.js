import { useQuestion } from './question/use-question'
import { msgEntradaInvalida } from './common'
import { menu } from './menu'
import { resultado } from './resultado'

const msgRegra05 = `
******** BEM-VINDO AO ESCOLHE MINHA CERVEJA ********* 
*                                                   *
*    VOCÊ GOSTA DE SABOR DE FRUTAS MAIS INTENSO?    *
*                                                   *
*           1 - SIM                                 *
*           2 - NÃO                                 *
*           3- VOLTAR AO MENU PRINCIPAL             *
*                                                   *
*****************************************************
\n`

export async function regra05() {
    let programaAtivo = true
    while (programaAtivo) {

        const response = await useQuestion(msgRegra05)
        switch (response) {
            case '1':
                programaAtivo = false
                resultado('strong golden ale')
                break
            case '2':
                programaAtivo = false
                resultado('ipa')
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
