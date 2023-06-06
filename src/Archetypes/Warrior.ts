import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _createdArchetypeInstances = 0;
    
  constructor(n: string) {
    super(n);
    Warrior._createdArchetypeInstances += 1;
  }

  get name(): string {
    return this.name;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static override createdArchetypeInstances(): number {
    return this._createdArchetypeInstances;
  }
}