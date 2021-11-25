import { useQuestion } from './question/use-question'
import { msgEntradaInvalida } from './common'
import { regra02 } from './regra02'
import { resultado } from './resultado'
import { menu } from './menu'

const msgRegra03 = `
******** BEM-VINDO AO ESCOLHE MINHA CERVEJA ********* 
*                                                   *
*       VOCÊ GOSTA DE CAFÉ INTENSOS OU SUAVES?      *
*                                                   *
*           1 - INTENSOS                            *
*           2 - SUAVES                              *
*           3- VOLTAR AO MENU PRINCIPAL             *
*                                                   *
*****************************************************
\n`

export async function regra03() {
    let programaAtivo = true
    const response = await useQuestion(msgRegra03)
    while (programaAtivo) {
        switch (response) {
            case '1':
                resultado('stout')
                break
            case '2':
                programaAtivo = false
                resultado('porter')
                break
            case '3':
                menu()
                break
            default:
                console.log(msgEntradaInvalida)
        }
    }
}
