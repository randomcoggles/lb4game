import {Entity, model, property} from '@loopback/repository';
import {Character} from './character.model';

@model()
export class Skill extends Entity {
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
    required: true,
  })
  attack: number;

  @property({
    type: 'number',
    required: true,
  })
  defence: number;

  @belongsTo(() => Character)
  characterId: string;
  constructor(data?: Partial<Skill>) {
    super(data);
  }
}
