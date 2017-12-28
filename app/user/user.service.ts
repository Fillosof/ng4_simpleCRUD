import { Injectable } from '@angular/core';
import { User } from './user';
import { USER_ITEMS } from './user-data';
import { findIndex } from 'lodash'

@Injectable()
export class UserService {
    private userItms = USER_ITEMS;

    getUsersFromData(): User[] {
        return this.userItms        
    }

    addUser( user: User ) {
        this.userItms.push(user);
    }

    updateUser(user: User){
        let index = findIndex(this.userItms, (u: User) =>{
            return u.id === user.id;
        })
        this.userItms[index] = user;
        
    }

    deleteUser(user: User) {
        this.userItms.splice(this.userItms.indexOf(user), 1)                
        console.log(this.userItms);
    }


    
}