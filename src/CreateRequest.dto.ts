import {
  IsEmail,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';

import IsNullable from 'src/IsNullable.decorator';

export default class CreateRequest {
  @IsNullable({ always: true })
  @IsString()
  @MaxLength(100)
  @MinLength(1)
  name: string | null;

  @IsNullable({ always: true })
  @IsString()
  @MaxLength(100)
  @MinLength(1)
  address: string | null;

  @IsNullable({ always: true })
  @IsString()
  @MaxLength(12)
  @MinLength(10)
  phone: string | null;

  @IsNullable({ always: true })
  @IsEmail()
  email: string | null;

  @IsNullable({ always: true })
  @IsString()
  @MaxLength(12)
  @MinLength(10)
  fax: string | null;

  @IsNullable({ always: true })
  @IsUrl()
  hpUrl: string | null;
}
