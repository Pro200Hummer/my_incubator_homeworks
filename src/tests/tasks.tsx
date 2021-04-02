export const sum = (a: number, b: number) => {
    return a + b
};

export const restSum = (...numbers: Array<number>) => {
    return numbers.reduce((acc, el) => acc + el)
};

export type StudentType = {
    name: string
    isStudent: boolean
    friends: Array<string>
}
export type StudentsType = {
    name: string
    age: number
    isMarried: boolean
    scores: number
}

export function copyStudent(st: StudentType) {
    return {...st}
}

export function deepCopyStudent(st: StudentType) {
    return {...st, friends: [...st.friends]}
}


// "sum", "mult", "div", "sub"
export function calc(a: number, b: number, action: string) {
    switch (action) {
        case "sum":
            return a + b
        case "mult":
            return a * b
        case "div":
            return a / b
        case "sub":
            return a - b
        default:
            return "Unknown type action"
    }

}

export const addFriends = (students: StudentsType[]) => students.map(st => ({
    ...st,
    friends: students.map(s => s.name).filter(n => n !== st.name)
}))

{/*****************************************************************************************************/}
