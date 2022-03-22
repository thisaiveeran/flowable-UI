import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { apis } from '../consts/services';
import { TaskList } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  public taskListSubject : BehaviorSubject<TaskList | null> = new BehaviorSubject<TaskList | null>(null);

  constructor(private router: Router,
    private http: HttpClient) { }


  getTasks(startIndex: number, batchSize: number){
    const params = new HttpParams()
    .set('start', startIndex)
    .set('size',10);
    this.http.get<TaskList>(apis.TASK_LIST,{
      params: params
    }).subscribe(
      (response: TaskList) => {
        this.taskListSubject.next(response)
      }
    )
  }
  
}
