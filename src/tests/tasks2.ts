// 1. Функция принимает параметром целые положительные числа и возвращает
// их сумму.

export const numbersSum = (...numbers: Array<number>) => {
    return numbers.reduce((acc, el) => acc + el)
}

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "01", если треугольник равнобедренный,
//  - "10", если треугольник равносторонний,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export const getTriangleType = (a: number, b: number, c: number) => {
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && a === c && b === c) {
            return "10"
        } else if (a === b || b === c || a === c) {
            return "01"
        } else {
            return "11"
        }
    } else {
        return "00"
    }
}

export const getSum = (num: number) => {
    return num.toString()
        .split('')
        .reduce((acc, el) => acc + Number(el), 0)
}

/*export function isEvenIndexSumGreater(array: number[]) {
    let odd = 0
    let even = 0
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            even += array[i]
        } else {
            odd += array[i]
        }
    }
    return even > odd
}*/

/*export const isEvenIndexSumGreater = (arr: Array<number>) => {
    let even = 0
    let odd = 0
    arr.reduce((acc, el, index) => index % 2 === 0 ? even += el : odd += el)
    return even > odd
}*/

export const isEvenIndexSumGreater = (arr: Array<number>) => {
    let even = 0
    let odd = 0
    arr.map((item, index) => {
        index % 2 === 0 ? even += item : odd += item
    })
    return even > odd
}

// 5. Функция isSquareGreater принимает два параметра: площадь круга и
// площадь квадрата. Функция должна возвращать true если круг поместится в
// квадрате и false в противном случае.

// 6. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]

