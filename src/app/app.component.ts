import {Component} from '@angular/core';
import {PaginationService} from "./pagination.service";
import {BehaviorSubject, Observable, of, switchMap, tap} from "rxjs";
import {faGear} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  faGear = faGear;

  currentPage$ = new BehaviorSubject<number>(1);
  data$ = this.currentPage$.pipe(
    switchMap(page => this.paginationService.getPages(page)),
    tap(() => this.loading$.next(false))
  );

  loading$ = new BehaviorSubject<boolean>(true);

  constructor(private paginationService: PaginationService) {}

  onNext(){
    if (this.currentPage$.value <= 30){
      this.loading$.next(true)
      this.currentPage$.next(this.currentPage$.value + 1)
    }
  }

  onPrevious(){
    if (this.currentPage$.value > 1){
      this.loading$.next(true)
      this.currentPage$.next(this.currentPage$.value - 1)
    }
  }
}
