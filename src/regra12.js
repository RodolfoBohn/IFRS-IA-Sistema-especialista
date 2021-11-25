import { useQuestion } from './question/use-question'
import { msgEntradaInvalida } from './common'
import { menu } from './menu'
import { resultado } from './resultado'

const msgRegra12 = `
******** BEM-VINDO AO ESCOLHE MINHA CERVEJA ********* 
*                                                   *
*  VOCÊ PREFERE SABOR SUAVE OU INTENSO DE LÚPULO?   *
*                                                   *
*           1 - SUAVE                               *
*           2 - INTENSO                             *
*           3- VOLTAR AO MENU PRINCIPAL             *
*                                                   *
*****************************************************
\n`

export async function regra12() {
    let programaAtivo = true
    while (programaAtivo) {
        const response = await useQuestion(msgRegra12)
        switch (response) {
            case '1':
                programaAtivo = false
                resultado('american dark lager')
                break
            case '2':
                programaAtivo = false
                resultado('red ale')
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
