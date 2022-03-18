import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  monhoc = [
    {
      "id": 1,
      "Code": "ADAV",
      "Name": "Lập trình Android nâng cao",
      "Logo": "ADAV.jpg"
    },
    {
      "id": 2,
      "Code": "ADBS",
      "Name": "Lập trình Android cơ bản",
      "Logo": "ADBS.jpg"
    },
    {
      "id": 3,
      "Code": "ADTE",
      "Name": "Kiểm thử và triển khai ứng dụng Android",
      "Logo": "ADTE.jpg"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
