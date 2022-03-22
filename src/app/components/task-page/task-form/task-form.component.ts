import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Model } from '@flowable/forms';
import { mergeMap } from 'rxjs';
import { FlowForm } from 'src/app/models/forms';
import { TaskFormService } from 'src/app/services/task-form.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  props: any = null
  payload: any = null
  taskId: string

  constructor(private taskFormService: TaskFormService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(
      (params: any)=>{
        console.log(params)
        //this.renderTaskForm(params['taskId'])
        const taskId = params['taskId']
        this.taskId = taskId
        
        
        this.taskFormService.getTaskVariable(taskId)
        .pipe(
          mergeMap((variables) => this.renderForm(this.taskId, variables)
          
          )
        )
        .subscribe(
          (form: FlowForm | null) =>{
            if(form != null)
              form.outcomes = form.outcomes || [{
                label: "Complete",
                value: "COMPLETE"
              }];
            this.props = {
              config: form,
              onOutcomePressed: (payload: Model.Payload, result: any, navigationUrl?: string, outcomeConfig?: Model.ResolvedColumn) => {
                console.log(payload);
                console.log("outcome ",outcomeConfig)
                //Make the API Call to Create a Case
                //this.caseService.submitCase(this.caseDefId,payload,navigationUrl,outcomeConfig?.value);
                this.taskFormService.completeTask(this.taskId,payload,outcomeConfig?.value)
               
      
              }
            }
          }
        )
      }
    )
  }

  renderForm(taskId: string, variables: any){
    this.payload = variables
    return this.taskFormService.getTaskForm(taskId)
     
  }

 


}
