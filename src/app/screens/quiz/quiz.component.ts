import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  code: string = "";
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(dsThamSo => {
      this.code = dsThamSo['code'];
    })
  }

}
