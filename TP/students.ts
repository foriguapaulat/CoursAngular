interface Student {
    name?: string;
    id: number;
}
const students : number[] = [12, 11, 123, 8, 9, 100, 90, 23, 22, 99, 198, 202, 11, 19, 78, 112] ;

function randomNumber (array: number[]){
    for (let i = 0; i < students.length; i++){
        const randomIndex = Math.floor(Math.random()*(16));
        return randomIndex
    }
}

const groups = [];
const groupeSize = 16; 

function createStudentGroups(students:number, groupeSize: number) {
    for (let i = 0; i < students.length; i++){
        return groups = 
    }
}
