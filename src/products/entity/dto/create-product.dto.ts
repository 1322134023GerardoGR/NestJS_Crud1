import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre del producto es obligatorio.' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'La descripción del producto es obligatoria.' })
  description: string;

  @IsNumber({}, { message: 'El precio del producto debe ser un número.' })
  price: number;
}
