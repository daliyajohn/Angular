import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private formBuilder: FormBuilder, private homeService: HomeService) { 
  }

  ngOnInit() {
    console.log('jdsbsjcfjscfbks;jdbcfn', this.userEditData);
    

    this.userForm = this.formBuilder.group({
      employee_name: ['', Validators.required],
      employee_salary: ['', Validators.required],
      employee_age: ['', Validators.required]
    });
  }
  // submit data
  onSubmit(userData) {
    this.submitted = true;
    // if (this.userForm.invalid) {
    //    this.homeService.createUser(userData)
    // }
console.log(this.userForm)

// const values = {
//   'data': this.userForm.value,
// };

console.log('dlmsdkcfmsl;dcfsdl;cf', userData);
    if (this.userForm.valid) {
      this.homeService.createUser(userData).subscribe(data => {
          if(data.status === 200) {
            alert('User updated successfully.');
          }else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
    }
  }

  onReset() {
    this.submitted = false;
    this.userForm.reset();
  }
}
