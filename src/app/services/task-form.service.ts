import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Model } from '@flowable/forms';
import { BehaviorSubject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { apis } from '../consts/services';
import { Case, CaseDefinitionResponse } from '../models/case';
import { FlowForm } from '../models/forms';

@Injectable({
  providedIn: 'root'
})
export class TaskFormService {

  public taskForm : BehaviorSubject<FlowForm | null> = new BehaviorSubject<FlowForm | null>(null);
  public taskVariables : BehaviorSubject<any | null> = new BehaviorSubject<any | null>(null);

  private caseDef = new Case();


  constructor( private router: Router,
    private http: HttpClient) { }

   // For Tasks 
    //   1 call to get the task from def   /tasks/{taskId}/form
      /// 2md call to get variables.      /tasks/{taskId}/variables

      // / POST: tasks/{taskId}/complete


    getTaskForm(taskId: string){
      return this.http.get<FlowForm>(apis.TASK+"/"+taskId+"/form")

             /*    .subscribe(
                     (startForm: FlowForm) =>{
                       console.log(startForm)
                       this.taskForm.next(startForm);
                     }
          )*/
                  
    }

    getTaskVariable(taskId: string){
       return this.http.get(apis.TASK+"/"+taskId+"/variables")
        /*  .subscribe(
            (variables: any) =>{
                console.log(variables)
                this.taskVariables.next(variables)
            }
        )*/
    }


    completeTask(taskId: string | undefined, payload: Model.Payload, result: any, navigationUrl?: string, outcome?: string) {
      payload['outcome'] = result
      this.http.post(apis.TASK+"/"+taskId+"/complete", payload).subscribe(
        (response: any) =>{
          this.router.navigate(["/taskQueue"]);
        }
      )
      
    }

}
