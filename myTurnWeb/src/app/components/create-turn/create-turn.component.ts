import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Appointment } from '../../common/appointment';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-turn',
  standalone: true,
  imports: [FormsModule],
  providers: [],
  templateUrl: './create-turn.component.html',
  styleUrl: './create-turn.component.css'
})
export class CreateTurnComponent implements OnInit {
  time: Date = new Date();
  model = new Appointment(0, "", this.time, false)
  shopName = "Pepe Navaja";

  constructor(public activeModal: NgbActiveModal,
              private datePipe: DatePipe) {}

  ngOnInit(): void {
  }

  onSubmit() { 
    this.passBack();
    // console.log("form submited" + this.model.name + ", time: " + this.model.time);
  }

  passBack() {
    // this.model.isTaken = true;
    this.activeModal.close(this.model);
  }

  cancelTourn() {
    // this.model.name = "";
    // this.model.isTaken = !this.model.isTaken;
    this.activeModal.close(this.model);
  }

  turnTime():string {
    return this.datePipe.transform(this.model.time, "EEEE, MMMM d, hh:mm a") ?? "";
  }
}
