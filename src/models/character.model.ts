import {Entity, model, property, hasOne} from '@loopback/repository';
import {v4 as uuid} from 'uuid';
import {Armor} from './armor.model';
import {Weapon} from './weapon.model';
import {Skill} from '.';

@model()
export class Character extends Entity {
  @property({
    type: 'string',
    id: true,
    default: () => uuid(),
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
  })
  level?: number;

  @property({
    type: 'number',
  })
  nextLevelExp?: number;

  @property({
    type: 'number',
  })
  currentExp?: number;

  @property({
    type: 'number',
  })
  maxHealth?: number;

  @property({
    type: 'number',
  })
  currentHealth?: number;

  @property({
    type: 'number',
  })
  maxMana?: number;

  @property({
    type: 'number',
    default: 0,
  })
  currentMana?: number;

  @property({
    type: 'number',
  })
  attack?: number;

  @property({
    type: 'number',
  })
  defence?: number;

  @hasOne(() => Armor)
  armor: Armor;

  @hasOne(() => Weapon)
  weapon: Weapon;

  @hasOne(() => Skill)
  skill: Skill;

  constructor(data?: Partial<Character>) {
    super(data);
  }
}
