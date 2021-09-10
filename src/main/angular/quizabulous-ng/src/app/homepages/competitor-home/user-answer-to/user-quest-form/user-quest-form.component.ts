import { HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RestService } from 'src/app/rest-service';
import { QuestVO } from 'src/app/vo/QuestVO';

@Component({
  selector: 'app-user-quest-form',
  templateUrl: './user-quest-form.component.html',
  styleUrls: ['./user-quest-form.component.css']
})
export class UserQuestFormComponent {

  @Input()
  quest: QuestVO;
  @Input()
  private jwt: string;

  answer: string;

  @Output()
  answered: EventEmitter<boolean> = new EventEmitter();

  constructor(private rest: RestService) { }

  submitAnswer(): void {
    if (!this.answer) {
      window.alert("Seleziona una risposta!");
      return;
    }

    if (!window.confirm("Hai selezionato la risposta " + this.answer + " confermi l'invio?")) {
      return;
    }

    let sendAnswerUrl: string = "/user/answer-to";
    if (window.location.port === "4200") {
      sendAnswerUrl = "http://localhost/user/answer-to";
    }

    this.rest.sendPost(sendAnswerUrl, this.answer, new HttpHeaders({
      "Authorization": "Bearer " + this.jwt,
      "content-type": "text/plain"
    })).subscribe(() => {
      console.log("Risposta inviata");
      this.answered.emit(true);
    }, err => {
      if (err.status === 423) {
        alert("Mi dispiace, risposta nulla - tempo scaduto.\nIl master ha chiuso il poll.");
      } else {
        console.error(err);
      }
      this.answered.emit(true);
    })
  }

}
