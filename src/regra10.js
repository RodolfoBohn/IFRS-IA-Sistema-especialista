import { useQuestion } from './question/use-question'
import { msgEntradaInvalida } from './common'
import { menu } from './menu'
import { regra14 } from './regra14'
import { resultado } from './resultado'

const msgRegra10 = `
******** BEM-VINDO AO ESCOLHE MINHA CERVEJA ********* 
*                                                   *
*     VOCÊ GOSTA DE SABOR MARCANTE DE LARANJA?      *
*                                                   *
*           1 - SIM                                 *
*           2 - NÃO                                 *
*           3- VOLTAR AO MENU PRINCIPAL             *
*                                                   *
*****************************************************
\n`

export async function regra10() {
    let programaAtivo = true
    while (programaAtivo) {
        const response = await useQuestion(msgRegra10)
        switch (response) {
            case '1':
                programaAtivo = false
                resultado('witbier')
                break
            case '2':
                programaAtivo = false
                regra14()
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
