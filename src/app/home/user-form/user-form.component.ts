import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../service/home.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() userEditData;
  userForm: FormGroup;
  submitted = false;
  @Output() cancelForm: EventEmitter<any> = new EventEmitter<any>();
  @Output() loadDataEvent: EventEmitter<any> = new EventEmitter<any>();
  popupTitle: any;
  popupButton: any;

  constructor(private formBuilder: FormBuilder, private homeService: HomeService) { 
  }

  ngOnInit() { 
    this.popupTitle = 'Add';
    this.popupButton = 'Add';
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      salary: ['', Validators.required],
      age: ['', Validators.required],
      id: ['']
    });

    if (this.userEditData && this.userEditData.id) {
      this.popupTitle = 'Edit';
      this.popupButton = 'Update';
      this.userForm.get('name').setValue(this.userEditData.employee_name ? this.userEditData.employee_name : '');
      this.userForm.get('salary').setValue(this.userEditData.employee_salary ? this.userEditData.employee_salary : '');
      this.userForm.get('age').setValue(this.userEditData.employee_age ? this.userEditData.employee_age : '');
      this.userForm.get('id').setValue(this.userEditData.id ? this.userEditData.id : '');
    }
  }

  // submit data
  onSubmit(userData) {
    this.submitted = true;
    if (this.userForm.valid  && !userData.id) {
      this.homeService.createUser(userData).subscribe(data => {
        this.cancelForm.emit(false);
        this.loadDataEvent.emit(true);
        if(data.status === 200) {
          var x = document.getElementById("snackbar");
          x.innerHTML = 'Add user successfully!'
          x.className = "show";
          setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        }
      },
      error => {
        alert(error);
      });
    }  
    if(this.userEditData && this.userEditData.id) {
      const dataFormat = {
        'name': userData.name,
        'salary': userData.salary,
        'age': userData.age,
        'id': userData.id
      }    
      this.homeService.updateUserData(dataFormat).subscribe(r => {
        this.cancelForm.emit(true);
        this.loadDataEvent.emit(true);
      })
    }
  }

  onReset() {
    this.submitted = false;
    this.userForm.reset();
  }
}
