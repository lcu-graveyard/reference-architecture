export class Status {
  public Code: number;

  public get Metadata(): any {
    var meta = {};

    var self = <any>this;

    for (var prop in self) {
      if (prop != 'Code' && prop != 'Message' && prop != 'Metadata')
        meta[prop] = self[prop];
    }

    return meta;
  }

  public Message: string;
}

export function isStatusSuccess(status: Status) {
  return status && status.Code == 0;
}
