import { useQuestion } from './question/use-question'
import { msgEntradaInvalida } from './common'
import { menu } from './menu'
import { regra12 } from './regra12'
import { regra13 } from './regra13'

const msgRegra11 = `
******** BEM-VINDO AO ESCOLHE MINHA CERVEJA ********* 
*                                                   *
*   VOCÊ GOSTA DA PRESENÇA DE AROMAS DE CARAMELO?   *
*                                                   *
*           1 - SIM                                 *
*           2 - NÃO                                 *
*           3- VOLTAR AO MENU PRINCIPAL             *
*                                                   *
*****************************************************
\n`

export async function regra11() {
    let programaAtivo = true
    while (programaAtivo) {
        const response = await useQuestion(msgRegra11)
        switch (response) {
            case '1':
                programaAtivo = false
                regra12()
                break
            case '2':
                programaAtivo = false
                regra13()
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
