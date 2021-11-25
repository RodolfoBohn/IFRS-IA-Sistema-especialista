import { useQuestion } from './question/use-question'
import { msgEntradaInvalida } from './common'
import { menu } from './menu'
import { regra09 } from './regra09'
import { resultado } from './resultado'

const msgRegra08 = `
******** BEM-VINDO AO ESCOLHE MINHA CERVEJA ********* 
*                                                   *
*        VOCÊ PREFERE UMA CERVEJA MAIS LEVE?        *
*                                                   *
*           1 - SIM                                 *
*           2 - NÃO                                 *
*           3- VOLTAR AO MENU PRINCIPAL             *
*                                                   *
*****************************************************
\n`

export async function regra08() {
    let programaAtivo = true
    while (programaAtivo) {
        const response = await useQuestion(msgRegra08)
        switch (response) {
            case '1':
                programaAtivo = false
                resultado('premium lager')
                break
            case '2':
                programaAtivo = false
                regra09()
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
