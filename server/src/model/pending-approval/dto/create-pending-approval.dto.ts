export class CreatePendingApprovalDto {
  id?: number;
  type: EApprovalType;
  requestData: string;
  status?: EApprovalStatus;
  actionTakenBy: number;
  reason?: string;
  createdAt: Date;
}

export enum EApprovalStatus {
  Pending = 'Pending',
  Approved = 'Approved',
  Decline = 'Declined',
}

export enum EApprovalType {
  OrgCreationRequest = 'OrgCreationRequest',
}
