import exp from "constants";

export interface IUsersInfo {
    userid: string,
    name: string,
    birthdate: string,
    age: number,
    organization: IOrganization,
}
export interface IOrganization {
    name: string,
    position: string
}


export let userInfoArray: IUsersInfo[] = [
    {
        userid: '127e4567-e89b-12d3-a458-426614174000',
            name: 'John',
        birthdate: '1982-02-17T21:00:00.000Z',
        age: 40,
        organization: {
        name: 'Amazon',
            position: 'General manager'
        }
    },
    {
        userid: '127e4567-e89a-12f3-a458-327395154000',
            name: 'Anna',
        birthdate: '1988-02-17T21:00:00.000Z',
        age: 34,
        organization: {
        name: 'Amazon',
            position: 'Manager'
        }
    }
]
console.log(userInfoArray);
