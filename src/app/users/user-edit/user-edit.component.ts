import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
    public user: User;
    public titles = ['Madame', 'Mademoiselle', 'Monsieur'];
    userForm: FormGroup;

    constructor() {
        this.user = {
            id: null,
            username: null,
            firstname: null,
            lastname: null,
            title: null,
        };
    }

    ngOnInit() {
        this.userForm = new FormGroup({
            username: new FormControl(null, Validators.required), // on ne met pas required() car on veut juste une référence à la méthode
            email: new FormControl(null, [Validators.required, Validators.email]),
            title: new FormControl('Monsieur'),
        });
        // console.log('test', this.user);
    }

    onSubmit() {
        console.log(this.userForm);
    }
}
