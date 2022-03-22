export class VaccinationRequest {

    vaccinationDates!: Date[]
    vaccination!: string
    fileName!: string
    uploadContent!: string
    fileType!: string

    name!: string
    userId!: string
    location!: string
    vaccinationRecords!: VaccinationRecordData[]
    attachments!: AttachmentData[]

    
}

export class VaccinationRecordData {
    vaccinationDate!: Date
    vaccineCode!: string
}

export class AttachmentData {
    fileName?: string
    fileType?: string
    uploadContent?: string
}


export class TestRequest {
    fileName!: string;
    fileType!: string;
    name!: string;
    userId!: string;
    location!: string;

    locationPhone!: string;
    testDate!: Date;
    testLocation!: string;
    testResult!: string;
    uploadContent!: string;
    attachments!: AttachmentData[];
}