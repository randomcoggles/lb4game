import {
  DefaultCrudRepository,
  BelongsToAccessor,
  repository,
} from '@loopback/repository';
import {Armor, Character} from '../models';
import {MongoDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {CharacterRepository} from './character.repository';

export class ArmorRepository extends DefaultCrudRepository<
  Armor,
  typeof Armor.prototype.id
> {
  public readonly character: BelongsToAccessor<
    Character,
    typeof Armor.prototype.id
  >;
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
    @repository.getter('CharacterRepository')
    protected characterRepositoryGetter: Getter<CharacterRepository>,
  ) {
    super(Armor, dataSource);
    this.character = this.createBelongsToAccessorFor(
      'character',
      characterRepositoryGetter,
    );
  }
}
