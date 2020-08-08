import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  getDataVal: any;
  ngForm: any;
  constructor(private _service: ServiceService, private router: Router,) { }

  ngOnInit(): void {
    this.getdata();
  }

  register(form) {
    console.log(form.status);
    if (form.status === "VALID") {

      let k = this.getDataVal.results.filter(elm => {

        return elm.user.username == form.value.username
      })

      if (k && k.length) {
        if (form.value.password === k[0].user.password) {
          this.router.navigate(['/userlist/userpage'])
        }
        else {
          alert("Wrong Password")
        }
      }
      else {
        alert("No User Found")
      }
    }
    else{
      alert("Please fill all field correctly")
    }

  }

  getdata() {
    let url = `https://randomuser.me/api/0.8/?results=20`

    this._service.sendGetRequest(url).subscribe(data => {
      console.log("MMMMMMMMMMM", data);
      this.getDataVal = data;
      localStorage.setItem("data", JSON.stringify(this.getDataVal));

    })
  }

}
