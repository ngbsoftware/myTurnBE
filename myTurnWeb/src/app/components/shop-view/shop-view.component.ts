import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Shop } from '../shop-list/shop';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateTurnComponent } from '../create-turn/create-turn.component';
import { Appointment } from '../../common/appointment';
import { dA } from '@fullcalendar/core/internal-common';

@Component({
  selector: 'app-shop-view',
  standalone: true,
  imports: [CommonModule, RouterLink, 
            FullCalendarModule
          ],
  providers: [HttpClient, NgbModal, DatePipe],
  templateUrl: './shop-view.component.html',
  styleUrl: './shop-view.component.css'
})
export class ShopViewComponent implements OnInit {

  shop: Shop | undefined;
  // hours: Appointment[] = this.generateAppointments();
  takenHours: Appointment[] = [];
  nextTourn: number = 15;
  todayStr: String | null;
  dictionary: Map<string, Appointment[]>;

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    selectable: true,  
    weekends: false,
    events: [
      { title: 'Meeting', start: new Date() }
    ]
  };

  constructor(private shopService: ShopService,
              private route: ActivatedRoute,
              private modalService: NgbModal,
              private datePipe: DatePipe) {
                this.todayStr = datePipe.transform(new Date(), 'MM, dd, yyyy');
                this.dictionary = new Map([]);
              }

  ngOnInit(): void {
    this.generateAppointments();
    this.route.paramMap.subscribe(() => {
      this.handleShopDetails();
    })
  }

  handleShopDetails() {
    const theShopId: number = +this.route.snapshot.params['id'];

    this.shopService.getShop(theShopId).subscribe(
      data => {
        this.shop = data;
        this.generateAppointments();
      }
    )
  }

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }

  public async open(hour: Appointment) {
    const modalRef = this.modalService.open(CreateTurnComponent)
    modalRef.componentInstance.model = hour;
    modalRef.componentInstance.shopName = this.shop?.name;

    modalRef.result.then((result) => {
      if (result) {
        console.log("The Hour: " + result.time + ", " + result.name + ", " + result.isTaken);
        this.updateTourn(result);
      }
    }, (reason) => {
      if (!hour.isTaken) {
        hour.name = "";
      }
    });
  }

  updateTourn(hour: Appointment) {
    let key = this.datePipe.transform(hour.time, 'EEEE, MMMM d')
    console.log("Key: " + key);
    let turns = this.dictionary.get(key ?? "") ?? [];
    console.log("Turns " + turns);
    let indexToUpdate = turns.findIndex(item => item.time === hour.time);

    turns[indexToUpdate].isTaken = !turns[indexToUpdate].isTaken;
    
    console.log(turns);
    console.log("After: " + turns[indexToUpdate].isTaken);
  }

  generateAppointments() {
    this.dictionary = new Map([]);
    console.log("Today is: " + this.datePipe.transform(new Date(), 'EEEE, MMMM d HH:mm'));
    // var date = new Date();
    for (let i = 0; i < 10; i++) {
      var date = new Date();
      date.setDate(date.getDate() + i);
      
      console.log("Hhour: " + this.datePipe.transform(date, 'EEEE, MMMM, d HH:mm' ))
      var appointments: Appointment[] = [];
      for (let index = this.timeToNumber(this.shop?.openTime ?? "7"); index < this.timeToNumber(this.shop?.closeTime ?? "9"); index++) {
        for (let y = 0; y < 60; y += 20) {
          let clone_Date = new Date( date.getTime() );
          clone_Date.setHours(index, y);
          appointments.push(new Appointment(0, "", clone_Date , false));
          console.log(date);
        }
      }

      this.dictionary.set(this.datePipe.transform(date, 'EEEE, MMMM d') ?? "", appointments);
    }

    // for (let key in this.dictionary.keys()) {
    //   let value = this.dictionary.get(key);
    //   // Use `key` and `value`
    //   console.log("Key: " + key + "Value: " + value);
    // }

    this.dictionary.forEach((value: Appointment[], key: string) => {
      console.log(key, value);

    });

    // var appointments: Appointment[] = [];
    // for (let index = 9; index < 10; index++) {
    //   for (let y = 0; y < 60; y += 20) {
    //     appointments.push(new Appointment(0, "", this.getTimeStringFor(index, y) , false));
    //   }
    // }
    // return appointments;
  }
  
  getTimeStringFor(hour: number, time: number):string {
    var toReturn = `${hour}:`;
    if (time == 0) {
      toReturn+= `00`;
    } else {
      toReturn+= `${time}`
    }
    return toReturn;
  }

  getKeys(){
    return Array.from(this.dictionary.keys());
  }

  getDateTime(date: Date):string {
    return this.datePipe.transform(date, 'HH:mm') ?? "" 
  }

  timeToNumber(time: string):number {
    var n = time.search(":");
    var hrPart = time.substring(0, n);
    return Number(hrPart);
  }
}

// @Pipe({name: 'mapToArray'})
// export class MapToArray implements PipeTransform {
//   transform(value:Appointment[], args:string[]) : any {
//     let arr = [];
//     for (let key in value) {
//       arr.push({key: key, value: value[key]});
//     }
//     return arr;
//   }
// }