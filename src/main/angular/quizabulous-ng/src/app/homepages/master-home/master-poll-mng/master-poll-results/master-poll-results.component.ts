import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-poll-results',
  templateUrl: './master-poll-results.component.html',
  styleUrls: ['./master-poll-results.component.css']
})
export class MasterPollResultsComponent implements OnInit {

  @Input()
  private pollResults: any;

  resultMap: Map<string, string> = new Map();

  constructor() { }

  ngOnInit(): void {
    const keys: string[] = Object.keys(this.pollResults);
    keys.forEach(k => {
      const v: number = this.pollResults[k];
      this.resultMap.set(k, v.toString());
    })
  }

}
