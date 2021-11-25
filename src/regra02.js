import { useQuestion } from './question/use-question'
import { msgEntradaInvalida } from './common'
import { regra03 } from './regra03'
import { regra04 } from './regra04'
import { menu } from './menu'

const msgRegra02 = `
******** BEM-VINDO AO ESCOLHE MINHA CERVEJA ********* 
*                                                   *
*      VOCÊ GOSTA DE CERVEJA COM TONS DE CAFÉ?      *
*                                                   *
*           1 - SIM                                 *
*           2 - NÃO                                 *
*           3- VOLTAR AO MENU PRINCIPAL             *
*                                                   *
*****************************************************
\n`


export async function regra02() {
    let programaAtivo = true
    while (programaAtivo) {
        const response = await useQuestion(msgRegra02)
        switch (response) {
            case '1':
                programaAtivo=false
                regra03()
                break
            case '2':
                programaAtivo=false
                regra04()
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