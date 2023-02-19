import {IUser, usersArray} from './users';
import {IUsersInfo, userInfoArray, IOrganization} from  './userinfo';

interface IUserPosition {
    name: string,
    position: string,
    age: number,
    gender: string
}

function getUsersJobPositions(usersArray: IUser[]): IUserPosition[] {
    return (usersArray.map((user)=>
        {
            const userinfo:IUsersInfo|undefined = userInfoArray.find((userinfo)=>userinfo.userid===user.userid);
            return ({name:user.name,position:userinfo?.organization.position,age:userinfo?.age,gender:user?.gender} as IUserPosition)
        }))
}

const usersPosition: IUserPosition[] = getUsersJobPositions(usersArray);

console.log(usersPosition);

const usersPositions = getUsersJobPositions(usersArray);
