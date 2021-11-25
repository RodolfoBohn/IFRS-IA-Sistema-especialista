import { menu } from './menu'
import { msgEntradaInvalida, msgSair } from './common'
import { useQuestion } from './question/use-question'

const msgStout = `
******** BEM-VINDO AO ESCOLHE MINHA CERVEJA ********* 
*                                                   *
*            RECOMENDAMOS O TIPO STOUT!             *
*                                                   *
*  POSSUI MAIOR INTENSIDADE DA TOSTA, COM NOTAS DE  *
* CAFÉ INTENSAS, ALÉM DE NOTAS DE CHOCOLATE E CACAU.*
*                                                   *
*           1- VOLTAR AO MENU PRINCIPAL             *
*           2- SAIR                                 *
*                                                   *
*****************************************************
\n`

const msgPorter = `
******** BEM-VINDO AO ESCOLHE MINHA CERVEJA ********* 
*                                                   *
*           RECOMENDAMOS O TIPO PORTER!             *
*                                                   *
*  POSSUI DESTAQUE PARA AS NOTAS DO MALTE TORRADO,  *
*  LEMBRANDO CARAMELO, CHOCOLATE E UM SUAVE CAFÉ,   *
*     PORÉM SEM AROMAS TOSTADOS MUITO INTENSOS.     *
*      POSSUI AMARGOR E TEOR ALCOÓLICO MÉDIOS.      *
*                                                   *
*           1- VOLTAR AO MENU PRINCIPAL             *
*           2- SAIR                                 *
*                                                   *
*****************************************************
\n`

const msgStrongGoldenAle = `
******** BEM-VINDO AO ESCOLHE MINHA CERVEJA ********* 
*                                                   *
*      RECOMENDAMOS O TIPO STRONG GOLDEN ALE!       *
*                                                   *
*   POSSUI COLORAÇÃO AMARELO A COBRE, COM AROMAS E  *
*  SABORES DE FRUTAS EM PRIMEIRO PLANO, E TOQUES DE *
*    ESPECIARIAS OU FLORAIS. POSSUI AMARGOR MÉDIO   *
*     E GRADUAÇÃO ALCOÓLICA ALTA, CHEGANDO A 11%.   *
*                                                   *
*           1- VOLTAR AO MENU PRINCIPAL             *
*           2- SAIR                                 *
*                                                   *
*****************************************************
\n`

const msgIpa = `
******** BEM-VINDO AO ESCOLHE MINHA CERVEJA ********* 
*                                                   *
*    RECOMENDAMOS O TIPO IPA (INDIAN PALE ALE)!     *
*                                                   *
*  POSSUI COLORAÇÃO DOURADA OU COBRE, COM AROMAS E  *
* SABORES DE FRUTAS, FLORAIS E HERBÁCEOS DO LÚPULO, *
*   ALÉM DE AMARGOR E TEOR ALCOÓLICO MÉDIO A ALTO.  *
*                                                   *
*           1- VOLTAR AO MENU PRINCIPAL             *
*           2- SAIR                                 *
*                                                   *
*****************************************************
\n`

const msgBock = `
******** BEM-VINDO AO ESCOLHE MINHA CERVEJA ********* 
*                                                   *
*             RECOMENDAMOS O TIPO BOCK!             *
*                                                   *
* POSSUI PRESENÇA PREDOMINANTE DO MALTE NO AROMA E  *
*  SABOR, REMETENDO A CHOCOLATE E NOZES. A PRESENÇA *
* DOS AROMAS DE LÚPULO É REDUZIDA. O TEOR ALCOÓLICO *
*  PODE CHEGAR A 8% E SEU AMARGOR É EQUILIBRADO COM *
*                O DULÇOR DO MALTE.                 *
*                                                   *
*           1- VOLTAR AO MENU PRINCIPAL             *
*           2- SAIR                                 *
*                                                   *
*****************************************************
\n`

const msgAmberLager = `
******** BEM-VINDO AO ESCOLHE MINHA CERVEJA ********* 
*                                                   *
*        RECOMENDAMOS O TIPO AMBER LAGER!           *
*                                                   *
*  POSSUI COLORAÇÃO DOURADA A COBRE, E NORMALMENTE  *
* CONTA COM A PRESENÇA DE AROMAS DO MALTE LEVEMENTE *
* TORRADO, REMETENDO AO CARAMELO. PODEM SE DESTACAR *
*  NOTAS DO LÚPULO. TEM AMARGOR MÉDIO A ALTO E TEOR *
*                ALCOÓLICO MÉDIO.                   *
*                                                   *
*           1- VOLTAR AO MENU PRINCIPAL             *
*           2- SAIR                                 *
*                                                   *
*****************************************************
\n`

const msgPilsen = `
******** BEM-VINDO AO ESCOLHE MINHA CERVEJA ********* 
*                                                   *
*            RECOMENDAMOS O TIPO PILSEN!            *
*                                                   *
*   POSSUI COLORAÇÃO CLARA, DESTACANDO OS AROMAS E  *
*    SABORES DE MALTE E LÚPULOS, SENDO SECA E COM   *
*             AMARGOR DE MÉDIO A ALTO.              *
*                                                   *
*           1- VOLTAR AO MENU PRINCIPAL             *
*           2- SAIR                                 *
*                                                   *
*****************************************************
\n`

const msgPremiumLager = `
******** BEM-VINDO AO ESCOLHE MINHA CERVEJA ********* 
*                                                   *
*        RECOMENDAMOS O TIPO PREMIUM LAGER!         *
*                                                   *
* POSSUI COLORAÇÃO CLARA, SENDO LEVE E REFRESCANTE. *
*       POSSUI NOTAS SUTIS DO MALTE NO AROMA E      *
*                   AMARGOR BAIXO.                  *
*                                                   *
*           1- VOLTAR AO MENU PRINCIPAL             *
*           2- SAIR                                 *
*                                                   *
*****************************************************
\n`

const msgAmericanDarkLager = `
******** BEM-VINDO AO ESCOLHE MINHA CERVEJA ********* 
*                                                   *
*     RECOMENDAMOS O TIPO AMERICAN DARK LAGER!      *
*                                                   *
*    POSSUI NOTAS SUTIS DE MALTE, QUE REMETEM A     *
*   CARAMELO,E LEVE AROMA DE LÚPULO. TEM AMARGOR    *
*           BAIXO E TEOR ALCOÓLICO MÉDIO.           *
*                                                   *
*           1- VOLTAR AO MENU PRINCIPAL             *
*           2- SAIR                                 *
*                                                   *
*****************************************************
\n`

const msgRedAle = `
******** BEM-VINDO AO ESCOLHE MINHA CERVEJA ********* 
*                                                   *
*           RECOMENDAMOS O TIPO RED ALE!            *
*                                                   *
*   POSSUI AROMAS DE CARAMELO E ATÉ ALGUMAS NOTAS   *
*    DE MALTE TOSTADO PREDOMINANTES NO AROMA, QUE   *
*     PODEM VIR SEGUIDAS DE AROMAS DE FRUTAS OU     *
*       HERBÁCEOS E TERROSOS VINDOS DO LÚPULO.      *
*                                                   *
*           1- VOLTAR AO MENU PRINCIPAL             *
*           2- SAIR                                 *
*                                                   *
*****************************************************
\n`

const msgStrongPaleLager = `
******** BEM-VINDO AO ESCOLHE MINHA CERVEJA ********* 
*                                                   *
*       RECOMENDAMOS O TIPO STRONG PALE ALE!        *
*                                                   *
*     POSSUI NOTAS SUTIS DE MALTE NO AROMA E SEU    *
*    DULÇOR NO SABOR. POSSUI TEOR ALCOÓLICO ALTO,   *
*            PODENDO CHEGAR ENTRE 8 E 9%.           *
*                                                   *
*           1- VOLTAR AO MENU PRINCIPAL             *
*           2- SAIR                                 *
*                                                   *
*****************************************************
\n`

const msgViennaLager = `
******** BEM-VINDO AO ESCOLHE MINHA CERVEJA ********* 
*                                                   *
*        RECOMENDAMOS O TIPO VIENNA LAGER!          *
*                                                   *
*     DESTACA O MALTE, TANTO NO AROMA, QUANTO NO    *
*    LEVE DULÇOR PRESENTE NO SABOR. CONTA TAMBÉM    *
*   COM LEVES NOTAS FLORAIS E HERBÁCEAS DO LÚPULO.  *
*                                                   *
*           1- VOLTAR AO MENU PRINCIPAL             *
*           2- SAIR                                 *
*                                                   *
*****************************************************
\n`

const msgWitbier = `
******** BEM-VINDO AO ESCOLHE MINHA CERVEJA ********* 
*                                                   *
*           RECOMENDAMOS O TIPO WITBIER!            *
*                                                   *
*     POSSUI NOTAS MARCANTES DE CASCA DE LARANJA    *
*    E SEMENTE DE COENTRO, QUE SÃO ADICIONADAS EM   *
*                  SUA FABRICAÇÃO.                  *
*                                                   *
*           1- VOLTAR AO MENU PRINCIPAL             *
*           2- SAIR                                 *
*                                                   *
*****************************************************
\n`

const msgStrongDarkAle = `
******** BEM-VINDO AO ESCOLHE MINHA CERVEJA ********* 
*                                                   *
*       RECOMENDAMOS O TIPO STRONG DARK ALE!        *
*                                                   *
*  POSSUI SABORES E AROMAS COMPLEXOS, REMETENDO A   *
*   FRUTAS SECAS E EM COMPOTA, JUNTO COM NOTAS DE   *
*    CARAMELO, CHOCOLATE, ESPECIARIAS OU FLORAIS.   *
*  CONTA COM AMARGOR BAIXO A MÉDIO E UMA GRADUAÇÃO  *
*       ALCOÓLICA ALTA, PODENDO CHEGAR A 11%.       *
*                                                   *
*           1- VOLTAR AO MENU PRINCIPAL             *
*           2- SAIR                                 *
*                                                   *
*****************************************************
\n`

const msgBelgianPaleAle = `
******** BEM-VINDO AO ESCOLHE MINHA CERVEJA ********* 
*                                                   *
*      RECOMENDAMOS O TIPO BELGIAN PALE ALE!        *
*                                                   *
*  POSSUI COLORAÇÃO CLARA, COM AROMAS E SABORES DE  *
*      FRUTAS, CONDIMENTOS E NOTAS DE LÚPULO,       *
*   PRINCIPALMENTE FLORAIS. POSSUI TEOR ALCOÓLICO   *
*        MÉDIO E AMARGOR ENTRE MÉDIO E BAIXO.       *
*                                                   *
*           1- VOLTAR AO MENU PRINCIPAL             *
*           2- SAIR                                 *
*                                                   *
*****************************************************
\n`

function selecionaMensagem(tipo) {
    if (tipo === 'stout') return msgStout
    if (tipo === 'porter') return msgPorter
    if (tipo === 'strong golden ale') return msgStrongGoldenAle
    if (tipo === 'ipa') return msgIpa
    if (tipo === 'bock') return msgBock
    if (tipo === 'amber lager') return msgAmberLager
    if (tipo === 'pilsen') return msgPilsen
    if (tipo === 'premium lager') return msgPremiumLager
    if (tipo === 'american dark lager') return msgAmericanDarkLager
    if (tipo === 'red ale') return msgRedAle
    if (tipo === 'strong pale lager') return msgStrongPaleLager
    if (tipo === 'vienna lager') return msgViennaLager
    if (tipo === 'witbier') return msgWitbier
    if (tipo === 'strong dark ale') return msgStrongDarkAle
    if (tipo === 'belgian pale ale') return msgBelgianPaleAle
}

export async function resultado(tipo) {
    const resultado = selecionaMensagem(tipo)
    let programaAtivo = true

    while (programaAtivo) {
        const response = await useQuestion(resultado)
        switch (response) {
            case '1':
                programaAtivo = false
                menu()
                break
            case '2':
                programaAtivo = false
                console.log(msgSair)
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