import { Component, OnInit } from '@angular/core';
import { User } from './user'
import { UserService } from './user.service';
import { clone } from 'lodash';


@Component({
    moduleId: module.id,
    templateUrl: 'user.template.html'
})

export class UserComponent implements OnInit { 
    users: User[];
    newUserForm: boolean = false;
    editUserForm: boolean = false;
    isNewForm: boolean;
    newUser: any = {};
    editedUser: any = {};
    
    // private JsonURL = "https://jsonplaceholder.typicode.com/users";

    // data: any = {};

    // getJSON(){
    //     data = get(this.JsonURL).map(());
        
    // }


    constructor(private _userServise: UserService) {}

    ngOnInit(){
        this.getUsers();
    }

    getUsers() {
        this.users = this._userServise.getUsersFromData();
    }

    showEditUserForm(user: User) {
        if(!user){
            this.newUserForm = false;
            return;
        }
        this.editUserForm = true;
        this.editedUser = clone(user);
    }

    showAddUserForm() {
        if(this.users.length) {
            this.newUser = {};
        }
        this.newUserForm = true;
        this.isNewForm = true;
    }

    saveUser(user: User) {
        if(this.isNewForm) {
            this._userServise.addUser(user);
        }
        this.newUserForm = false;
    }

    cancelNewUser() {
        this.newUser = {};
        this.newUserForm = false;        
    }

    updateUser() {
        this._userServise.updateUser(this.editedUser);
        this.editUserForm = false;
        this.editedUser = {};
    }

    removeUser(user: User){
        this._userServise.deleteUser(user);
    }

    cancelEdits() {
        this.editedUser = {};
        this.editUserForm = false;
    }
}