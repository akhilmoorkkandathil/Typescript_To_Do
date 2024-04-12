export interface Item {
  id: string;
  item: string;
  checked: boolean;
}

export default class ListItem implements Item {
  constructor(
    private _id: string = "",
    private _item: string = "",
    private _cheked: boolean = false
  ) {}

  get id(): string {
    return this._id;
  }
  set id(id: string) {
    this._id = id;
  }
  get item(): string {
    return this._item;
  }
  set item(item: string) {
    this._item = item;
  }
  get checked(): boolean {
    return this._cheked;
  }
  set checked(checked: boolean) {
    this._cheked = checked;
  }
}