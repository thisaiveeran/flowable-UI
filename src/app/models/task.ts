export interface TaskList {
    data: Task[]
    total: number
    start: number
    sort: string
    order: string
    size: number
  }
  
  export interface Task {
    id: string
    assignee: string
    name: string
    createTime: string
    dueDate: string
    priority: number
    suspended: boolean
    taskDefinitionKey: string
    scopeDefinitionId: string
    scopeId: string
    scopeType: string
    tenantId: string
    formKey: string
    caseInstanceId: string
    caseDefinitionId: string
  }