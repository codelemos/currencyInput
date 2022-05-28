/**
 * Naun Lemos Belo
 * 28/05/2022
 */

export function toDecimal(value){
    value = value.replace(/[^\d]/g, "").replace(/^0+/, '') //remove tudo que não é número
            
    if(value.length === 0){value = '000'}
    else if(value.length === 1){value = `00${value}`}
    else if(value.length === 2){value = `0${value}`}

    let cents = value.slice(-2) //os dois últimos dígitos são os centavos
    cents = cents.length > 0 ? cents : 0
    let integer = value.substr(0, value.length - 2) //obtém a parte inteira do valor
    integer = integer ?? 0

    let intText = ''
    let isMilhar = false
    while(integer.length > 3){
        intText += `.${integer.slice(-3)}`
        integer = integer.substr(0, integer.length - 3)
        isMilhar = true
    }

    intText = integer.length > 0 ? `${integer}${intText},${cents}` : `${intText},${cents}`
    value = `${intText}`

    return value
}
