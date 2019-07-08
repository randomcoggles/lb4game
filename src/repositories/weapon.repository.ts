import {DefaultCrudRepository, BelongsToAccessor, repository} from '@loopback/repository';
import {Weapon, Character} from '../models';
import {MongoDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import { CharacterRepository } from './character.repository';

export class WeaponRepository extends DefaultCrudRepository<
  Weapon,
  typeof Weapon.prototype.id
> {

  public readonly character: BelongsToAccessor<
    Character,
    typeof Weapon.prototype.id
  >;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource
    @repository.getter('CharacterRepository')
    protected characterRepositoryGetter: Getter<CharacterRepository>
  ) {
    super(Weapon, dataSource);
    this.character = this.createBelongsToAccessorFor('character',characterRepositoryGetter);
  }
  }
}
