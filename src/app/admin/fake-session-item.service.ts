import { Injectable } from '@angular/core';
import { SESSIONITEMS } from './sessions';

@Injectable()
export class FakeSessionItemService {

  constructor() { }
  getSession(id: number) {
    return SESSIONITEMS[id - 1];}
  get() { return SESSIONITEMS; }
  add(sessionItem: any) {
    sessionItem.id = SESSIONITEMS.length + 1;
    SESSIONITEMS.push(sessionItem);
    }
    delete(sessionItem: any) {
      let index;
      index = SESSIONITEMS.indexOf(sessionItem);
      if (SESSIONITEMS.indexOf(sessionItem) >= 0) {
      SESSIONITEMS.splice(index, 1);
      }
      }
}
