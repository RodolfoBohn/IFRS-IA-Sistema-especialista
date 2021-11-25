import { useQuestion } from './question/use-question'
import { regra01 } from './regra01'
import { msgEntradaInvalida, msgSair } from './common'

const msgMenu = `
******** BEM-VINDO AO ESCOLHE MINHA CERVEJA ********* 
*                                                   *
*          ESTE É UM SISTEMA ESPECIALISTA           *
*      PARA LHE AUXILIAR A ESCOLHER SUA BEBIDA      *
* RESPONDA AS PERGUNTAS PARA RECEBER A RECOMENDAÇÃO *
*                                                   *
*           1 - COMEÇAR                             *
*           2 - SAIR                                *
*                                                   *
*****************************************************
\n`

export async function menu() {
    let programaAtivo = true

    while (programaAtivo) {
        const response = await useQuestion(msgMenu)
        switch (response) {
            case '1':
                programaAtivo = false
                regra01()
                break
            case '2':
                programaAtivo = false
                console.log(msgSair)
                break
            default:
                console.log(msgEntradaInvalida)
        }
    }
}