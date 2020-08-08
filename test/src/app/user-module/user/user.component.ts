import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  paramValue: any;
  getDataVal: any;
  localStorageData: any;
  userData: any;
  constructor(private _service:ServiceService, private router: Router, private route: ActivatedRoute) { 

  }

  ngOnInit(): void {

    this.getdata();
  }

  onClick(){
    this.router.navigate(['/userlist/createuser'])

  }

  getdata(){
    let url =  `https://randomuser.me/api/0.8/?results=20`

this._service.sendGetRequest(url).subscribe(data =>{

this.getDataVal = data;
this.localStorageData = JSON.parse(localStorage.getItem("data"));
this.userData = this.localStorageData.results;
console.log(this.userData);
})
  }

  myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

}
