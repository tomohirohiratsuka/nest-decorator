import {
  IsEmail,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';

import IsNullable from 'src/IsNullable.decorator';
import { Transform } from 'class-transformer';

export default class CreateRequest {
  @Transform(({ value }) => {
    return JSON.parse(value);
  })
  @IsNullable({ always: true })
  @IsString()
  @MaxLength(100)
  @MinLength(1)
  name: string | null;

  @Transform(({ value }) => {
    return JSON.parse(value);
  })
  @IsNullable({ always: true })
  @IsString()
  @MaxLength(100)
  @MinLength(1)
  address: string | null;

  @Transform(({ value }) => {
    return JSON.parse(value);
  })
  @IsNullable({ always: true })
  @IsString()
  @MaxLength(12)
  @MinLength(10)
  phone: string | null;

  @Transform(({ value }) => {
    return JSON.parse(value);
  })
  @IsNullable({ always: true })
  @IsEmail()
  email: string | null;

  @Transform(({ value }) => {
    return JSON.parse(value);
  })
  @IsNullable({ always: true })
  @IsString()
  @MaxLength(12)
  @MinLength(10)
  fax: string | null;

  @Transform(({ value }) => {
    console.log(typeof value);
    return JSON.parse(value);
  })
  @IsNullable({ always: true })
  @IsUrl()
  hpUrl: string | null;
}
