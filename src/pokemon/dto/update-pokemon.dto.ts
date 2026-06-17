import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonDto } from './create-pokemon.dto';
//ESTO QUIERE DECIR
//EL UPDATED VA A TENER TODAS LAS PROPIEDADES CON LAS MISMAS CONDICIONES QUE EL CREATE CON LA CONDICION QUE SERAN OPCIONALES.
export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {}
