import { Expose, Type } from 'class-transformer';
import { FloorDto } from '../../floor/dtos/floor.dto';
export class BuildingDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  address: string;

  @Expose()
  @Type(() => FloorDto)
  floors?: FloorDto[];
}
