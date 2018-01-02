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
    // this.list();
  }

  getAll() {
    return this.http
      .get(this.apiUrl)
      .map(response => response.json() || []);
  }

  getOne(id: string) {
    return this.http
      .get(`${this.apiUrl}/${id}`)
      .map(response => response.json() || []);
  }

  deleteOne(id: string) {
    return this.http
      .delete(`${this.apiUrl}/${id}`)
      .map(response => response.json() || []);
  }

  list() {
    this.getAll().subscribe(data => {
      console.log(data);
      this.data = data;
    });
    this.getAll();
  }

}
