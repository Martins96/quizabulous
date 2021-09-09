import { Component, Input, OnInit } from '@angular/core';
import { QuestVO } from 'src/app/vo/QuestVO';

@Component({
  selector: 'app-master-carousel-view',
  templateUrl: './master-carousel-view.component.html',
  styleUrls: ['./master-carousel-view.component.css']
})
export class MasterCarouselViewComponent implements OnInit {

  @Input()
  quest: QuestVO;

  constructor() { }

  ngOnInit(): void {
  }

  isCorrect(id: number): boolean {
    if (this.quest.correctAnswer === id) 
      return true;
    return false;
  }

}
