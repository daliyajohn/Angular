import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      email: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required]
    });
  }
  // submit data
  onSubmit(userData) {
    this.submitted = true;
    console.log('>>>>>>>>>>>>>>>', userData);
    if (this.userForm.invalid) {
        return;
    }
  }

  onReset() {
    this.submitted = false;
    this.userForm.reset();
  }
}
