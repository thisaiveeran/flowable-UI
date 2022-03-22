import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TaskList, Task } from 'src/app/models/task';
import { TaskListService } from 'src/app/services/task-list.service';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent implements OnInit {

  displayedColumns = ['name', 'createTime', 'assignee', 'suspended', 'actions'];

  tasks!:  Task[] ;
  totalItems: number =0;
  batchSize: number = 10;
  dialogRef: any;
  sortStr: string;
  order: string;

  dataSource = new MatTableDataSource(this.tasks);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, {}) sort!: MatSort;
  
  constructor(private taskListService: TaskListService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.taskListService.getTasks(0,this.batchSize)
  }

  taskListSub = this.taskListService.taskListSubject.subscribe(
    (response: TaskList | null)=>{
      console.log(response)
      if(response != null){
        this.totalItems = response.total
        this.sortStr = response.sort
        this.order = response.order
        this.dataSource.data = response['data']
        console.log(this.tasks)
      }

    }
  )

  reviewTask(data: Task){
    console.log(data);
  }

}
