import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MustMatch } from 'src/app/_helpers/must-match.validator';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
    public user: User;
    public titles = ['Madame', 'Mademoiselle', 'Monsieur'];
    userForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) {
        this.user = {
            id: null,
            username: null,
            firstname: null,
            lastname: null,
            title: null,
        };
    }

    ngOnInit() {
        // this.userForm = new FormGroup({
        //     username: new FormControl(null, Validators.required), // on ne met pas required() car on veut juste une référence à la méthode
        //     email: new FormControl(null, [Validators.required, Validators.email]),
        //     title: new FormControl('Monsieur'),
        // });
        this.userForm = this.formBuilder.group(
            {
                title: ['', Validators.required],
                firstname: ['', Validators.required],
                lastname: ['', Validators.required],
                username: ['', Validators.required],
                email: ['', [Validators.required, Validators.email]],
                password1: ['', [Validators.required, Validators.minLength(8)]],
                password2: ['', Validators.required],
            },
            {
                validator: MustMatch('password1', 'password2'),
            },
        );
        // console.log('test', this.user);
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.userForm.controls;
    }

    onSubmit() {
        console.log(this.userForm);
        this.submitted = true;

        // stop here if form is invalid
        if (this.userForm.invalid) {
            return;
        }
    }
}
