import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})

export class CreateUserComponent implements OnInit {
  userData: any;
  localStorageData:any;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.localStorageData = JSON.parse(localStorage.getItem("data"));
this.userData = this.localStorageData.results;
  }

  register(form){
    console.log(form.value);
    let model = {
      user: {
        "gender": form.value.gender,
        "name" : {
          "title": form.value.title,
          "first": form.value.first,
          "last": form.value.last
                },
          "email":form.value.email,
          "username": form.value.username,
          "password": form.value.password,
         "dob": form.value.dob,
          "cell" : form.value.phone
      }

    }
    this.localStorageData.results.unshift(model);
    localStorage.removeItem("data");
    localStorage.setItem("data", JSON.stringify(this.localStorageData));
    alert("Successfully Added")
    this.router.navigate(['/userlist/userpage'])
  }
 
  
  
}
