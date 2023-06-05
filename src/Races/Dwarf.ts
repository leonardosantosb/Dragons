import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _createdRacesInstances = 0;
  constructor(n: string, d: number) {
    super(n, d);
    this._maxLifePoints = 80;
    Dwarf._createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return this._createdRacesInstances;
  }
}