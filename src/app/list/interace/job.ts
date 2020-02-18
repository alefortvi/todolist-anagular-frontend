export class Job {
  // tslint:disable-next-line:variable-name
  private _state;
  // tslint:disable-next-line:variable-name
  private _description;
  get getState() {
    return this._state;
  }

  set setState(value) {
    this._state = value;
  }

  get getDescription() {
    return this._description;
  }

  set setDescription(value) {
    this._description = value;
  }
}
