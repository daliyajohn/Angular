import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../service/home.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  @Input() userEditData;
  userEditForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private homeService: HomeService) { 
  }

  ngOnInit() { 
    this.userEditForm = this.formBuilder.group({
      employee_name: ['', Validators.required],
      employee_salary: ['', Validators.required],
      employee_age: ['', Validators.required]
    });
    if (this.userEditData && this.userEditData.id) {
      this.userEditForm.get('employee_name').setValue(this.userEditData.employee_name ? this.userEditData.employee_name : '');
      this.userEditForm.get('employee_salary').setValue(this.userEditData.employee_salary ? this.userEditData.employee_salary : '');
      this.userEditForm.get('employee_age').setValue(this.userEditData.employee_age ? this.userEditData.employee_age : '');
    }
  }

  updateUser() {
    //code
  }
  onReset() {
    this.submitted = false;
    this.userEditForm.reset();
  }
}
