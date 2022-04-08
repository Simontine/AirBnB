import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Place } from './places.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public places: Place[] = [
    {
      id: 'p1',
      name: 'LM Resort',
      price: 200,
      imgUrl:
        'https://images.pexels.com/photos/1628086/pexels-photo-1628086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'p2',
      name: 'MP Resort',
      price: 500,
      imgUrl:
        'https://images.pexels.com/photos/4306936/pexels-photo-4306936.jpeg?cs=srgb&dl=pexels-zachary-debottis-4306936.jpg&fm=jpg',
    }
    ,
    {
      id: 'p3',
      name: 'MP Resort',
      price: 500,
      imgUrl:
        'https://images.pexels.com/photos/4306936/pexels-photo-4306936.jpeg?cs=srgb&dl=pexels-zachary-debottis-4306936.jpg&fm=jpg',
    }
  ];

  constructor() {}

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (data.length == 1000) {
      //   event.target.disabled = true;
      // }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  doSomething() {
    console.log(this.places);
  }
}
