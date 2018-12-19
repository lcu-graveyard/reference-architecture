import { Status, isStatusSuccess } from '@lcu/common';

export class BaseResponse {
  public Status: Status;
}

export function isResultSuccess(result: BaseResponse) {
  return result && isStatusSuccess(result.Status);
}
