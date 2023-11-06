interface User {
    name: string;
    id: number;
    status?: string; // attribut facultatif
}
function showStatus(user: User):  undefined | string {

    return user.status;
}

const user1 : User = {
    name: "Alice",
    id: 1,
    status: "connected",
};

console.log(showStatus(user1));