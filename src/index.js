module.exports = function toReadable (number) {
    let numbero = ['zero','one', 'two','three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let numbers = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let tennum = [0,0,'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

  switch(String(number).length){
    case 1:
        return numbero[number]
    case 2:
        if (String(number)[0] == '1'){
            return numbers[Number(String(number)[1])]
        } else {
            if (String(number)[1] == '0'){
                return tennum[Number(String(number)[0])]
            }else{
                return tennum[Number(String(number)[0])] + " " + numbero[Number(String(number)[1])]
            }
        }
    case 3:
        if (String(number)[1] == '0' && String(number)[2] == '0'){
            return numbero[Number(String(number)[0])] + ' hundred'
        } else if (String(number)[1] == '1'){
            return numbero[Number(String(number)[0])] + ' hundred ' + numbers[Number(String(number)[2])]
        } else {
            if (String(number)[1] == '0'){
                return  numbero[Number(String(number)[0])] + ' hundred ' + numbero[Number(String(number)[2])]
            }else{
                if (String(number)[2] == '0'){
                    return numbero[Number(String(number)[0])]+ ' hundred ' + tennum[Number(String(number)[1])]
                } else {
                    return numbero[Number(String(number)[0])]+ ' hundred ' + tennum[Number(String(number)[1])] + " " + numbero[Number(String(number)[2])]
                }
            }
        }
      }
}
