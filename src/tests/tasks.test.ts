import {
    addFriends,
    calc,
    copyStudent,
    deepCopyStudent,
    restSum,
    StudentsType,
    StudentType,
    sum
} from "./tasks";
import {getSum, getTriangleType, isEvenIndexSumGreater, numbersSum} from "./tasks2";


test('sum of numbers', () => {
    // 1- тестовые данные
    const a: number = 5
    const b: number = 7
    // 2 - выполнение тестируемого кода с тестовыми данными
    const result = sum(a, b)
    //3 - проверка ожидаемого результата
    expect(result).toBe(12)
});

test('sum of some numbers', () => {
    // 1- тестовые данные
    const a: number = 5
    const b: number = 7
    const c: number = 10
    const d: number = 8
    // 2 - выполнение тестируемого кода с тестовыми данными
    const result = restSum(a, b, c, d)
    const result1 = restSum(a, b, d)
    const result2 = restSum(a, d)
    //3 - проверка ожидаемого результата
    expect(result).toBe(30)
    expect(result1).toBe(20)
    expect(result2).toBe(13)
});

let student: StudentType
beforeEach(() =>
    student = {
        name: "Pavel",
        isStudent: false,
        friends: ["Natali", "Artyom", "Viktor"],
    })

test('shallow copy comparison', () => {
    const resultOfCopyStudent = copyStudent(student)
    expect(resultOfCopyStudent === student).toBe(false)
    expect(resultOfCopyStudent.name === student.name).toBe(true)
    expect(resultOfCopyStudent.friends === student.friends).toBe(true)
});

test('deep copy comparison', () => {
    const resultOfCopyStudent = deepCopyStudent(student)
    expect(resultOfCopyStudent === student).toBe(false)
    expect(resultOfCopyStudent.name === student.name).toBe(true)
    expect(resultOfCopyStudent.friends === student.friends).toBe(false)
});

test('action check', () => {
    expect(calc(10, 2, "sum")).toBe(12)
    expect(calc(10, 2,  "mult")).toBe(20)
    expect(calc(10, 2, "div")).toBe(5)
    expect(calc(10, 2,  "sub")).toBe(8)
});

const students:StudentsType[] = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];
test('expection students', () =>{
    let newStudentsArr = addFriends(students)
    expect(students === newStudentsArr).toBe(false)
    expect(newStudentsArr[0].friends === newStudentsArr[1].friends).toBe(false)
    expect(newStudentsArr[0].friends[0] === newStudentsArr[1].name).toBe(true)
    expect(newStudentsArr[0].friends[0]).toContain("Alex")
})
{/******************************************************************************/}

test ("sum of the numbers", () => {
    expect(numbersSum(3,1,10,2,15)).toBe(31)
})

test("get Triangle Type", ()=> {
    expect(getTriangleType(1, 1, 1)).toBe("10")
    expect(getTriangleType(3, 2, 3)).toBe("01")
    expect(getTriangleType(6, 5, 4)).toBe("11")
    expect(getTriangleType(10, 5, 5)).toBe("00")
})

test("get Sum ", ()=> {
    expect(getSum(1000)).toBe(1)
    expect(getSum(0)).toBe(0)
    expect(getSum(1234)).toBe(10)
    expect(getSum(9999)).toBe(36)
})

test("is Even Sum Greater", ()=> {
    expect(isEvenIndexSumGreater([1, 100, 2, 200])).toBe(false)
    expect(isEvenIndexSumGreater([100, 1, 200, 2])).toBe(true)
})

/*
test("is Square Greater Than Circle", ()=> {
    const sCr = 3.14
    const sSq = 4
    const result = isSquareGreater(sCr, sSq)
    expect(result).toBe(true)
})

test("get banknote list", ()=> {
    const result1500 = getBanknoteList(1500)
    const result23 = getBanknoteList(23)
    expect(result1500[0]).toBe(1000)
    expect(result1500[1]).toBe(500)
    expect(result23[0]).toBe(20)
    expect(result23[1]).toBe(2)
    expect(result23[2]).toBe(1)

*/
