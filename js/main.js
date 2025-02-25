export function add(numbersStr) {

    if (numbersStr.includes(',\n'))
        throw new Error('Invalid input')

    if (numbersStr.length === 0)
        return 0;

    //if (! isNaN(numbersStr))
        //return Number(numbersStr);

    let delimeter = getDelimeter(numbersStr);
    numbersStr = deleteDelimeter(numbersStr)

    let numbers = numbersStr.replaceAll(delimeter, ',')
                .replaceAll('\n', ',')
                .split(',')
                .map(Number)
                .filter(elem => elem <= 1000);

    let negatives = numbersStr.filter(elem => elem < 0);
    if (negatives.length > 0)
        throw Error(`Negatives not allowed. [${negatives.join(',')}]`)

    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}


function hasDelimeter(numbersStr) {
    return numbersStr.includes('//')
}

function getDelimeter(str) {
    if (hasDelimeter(str)) {
        return str.split('\n')
    }
    return ',';
}