import { useQuestion } from './question/use-question'
import { msgEntradaInvalida } from './common'
import { menu } from './menu'
import { resultado } from './resultado'

const msgRegra07 = `
******** BEM-VINDO AO ESCOLHE MINHA CERVEJA ********* 
*                                                   *
*       VOCÊ GOSTA DE SABOR DE MALTE TORRADO,       *
*              REMETENDO A CARAMELO?                *
*                                                   *
*           1 - SIM                                 *
*           2 - NÃO                                 *
*           3- VOLTAR AO MENU PRINCIPAL             *
*                                                   *
*****************************************************
\n`

export async function regra07() {
    let programaAtivo = true
    while (programaAtivo) {
        const response = await useQuestion(msgRegra07)
        switch (response) {
            case '1':
                programaAtivo = false
                resultado('amber lager')
                break
            case '2':
                programaAtivo = false
                resultado('pilsen')
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
