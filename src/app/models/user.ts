//User Object


export class VaccinationInfo {
    vaccine?: any;
    dates?: string ;
    vaccinationDates?: Date[];
    status?: string ;
    statusCode?: string;
    nextVaccinationDate?: any;
}

export class TestingInfo {
    status?: string;
    statusCode?: string;
    nextTestDate?: string;
    lastTestedOn?: string;
    testLocation?: string;
    testResult?: string;
    currentTestResult? : string;

}

export class EtsInfo {
    status?: string;
    nextETSDate?: Date;
    lastEtsUpdatedOn?: Date;
}



export class Task {
    taskId!: string;
    taskName!: string;
    dueDate?: any;
    status?: any;
    assignedUser?: any;
    assignedGroup?: any;
    displayName!: string;
    contentId!: string;
    userId!: string;
    userInfo!: User;
}



export interface IdentityInfo {
    name: string;
    type: string;
    value: string;
    valueUrl: string;
}

export interface AdditionalProp1 {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
}

export interface AdditionalProp2 {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
}

export interface AdditionalProp3 {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
}

export interface Translations {
    additionalProp1: AdditionalProp1;
    additionalProp2: AdditionalProp2;
    additionalProp3: AdditionalProp3;
}

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    displayName: string;
    email: string;
    tenantId: string;
    avatarId: string;
    type: string;
    subType: string;
    state: string;
    subState: string;
    presence: string;
    language: string;
    theme: string;
    userDefinitionId: string;
    userDefinitionKey: string;
    userDefinitionName: string;
    creatorId: string;
    creationTime: string;
    updaterId: string;
    updateTime: string;
    identityInfo: IdentityInfo[];
    translations: Translations;
    allowedTabs: string[];
    allowedFeatures: string[];
    memberGroups: string[];
}
