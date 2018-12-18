import { Status, isStatusSuccess } from '@lcu/common/lcu.api';

export class BaseResponse {
  public Status: Status;
}

export function isResultSuccess(result: BaseResponse) {
  return result && isStatusSuccess(result.Status);
}
