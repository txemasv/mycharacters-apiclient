import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  private apiUrl = 'http://localhost:8080/characters';
  data: any = {};

  constructor(private http: Http) {
    console.log('hello');
    this.getItems();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json());
  }
  getItems() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
}
