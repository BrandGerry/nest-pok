import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from './entities/pokemon.entity';
import { isValidObjectId, Model } from 'mongoose';
import { Paginationdto } from './dto/pagination.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PokemonService {
  //INYECCION DE DEPENDENCIAS PARA LA BD
  private defaultLimit: number;
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    //AQUI VA LA CONFIG DE ENV
    private readonly configService: ConfigService,
  ) {
    //PARA ADQUIRIR LAS VARIABLES DE ENTORNO
    this.defaultLimit = configService.get<number>('defaultLimit')!;
  }

  async create(createPokemonDto: CreatePokemonDto) {
    try {
      createPokemonDto.name = createPokemonDto.name.toLocaleLowerCase();
      const pokemon = await this.pokemonModel.create(createPokemonDto);
      return pokemon;
    } catch (error: any) {
      this.handleExeptios(error);
    }
  }

  findAll(paginationdto: Paginationdto) {
    const { limit = this.defaultLimit, offset = 0 } = paginationdto;
    return this.pokemonModel.find().limit(limit).skip(offset).sort({ no: 1 });
  }

  async findOne(term: string) {
    let pokemon: Pokemon | null = null;

    if (!isNaN(+term)) {
      pokemon = await this.pokemonModel.findOne({ no: +term });
    }

    if (!pokemon && isValidObjectId(term)) {
      pokemon = await this.pokemonModel.findById(term);
    }

    if (!pokemon) {
      pokemon = await this.pokemonModel.findOne({
        name: term.toLocaleLowerCase().trim(),
      });
    }

    if (!pokemon) {
      throw new NotFoundException(`Pokemon not found`);
    }
    return pokemon;
  }

  async update(term: string, updatePokemonDto: UpdatePokemonDto) {
    const pokemon = await this.findOne(term);

    if (updatePokemonDto.name)
      updatePokemonDto.name = updatePokemonDto.name.toLocaleLowerCase();
    try {
      await pokemon.updateOne(updatePokemonDto);
      console.log('updatePokemonDto', updatePokemonDto);
      return { ...pokemon.toJSON(), ...updatePokemonDto };
    } catch (error: any) {
      this.handleExeptios(error);
    }
  }

  async remove(id: string) {
    //const pokemon = await this.findOne(id);
    // await pokemon.deleteOne();
    // return {
    //   message: 'POKEMON ELIMINADO',
    // };
    //const result = await this.pokemonModel.findByIdAndDelete(id)
    const { deletedCount } = await this.pokemonModel.deleteOne({ _id: id });
    if (deletedCount === 0) {
      throw new BadRequestException('POKEMON ID NOT FOUND');
    }
    return {
      message: 'POKEMON ELIMINADO',
    };
  }

  //METODO PARA ERRORES
  private handleExeptios(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `POKEMON YA EXISTE ${JSON.stringify(error.keyValue)}`,
      );
    }
    console.log(error);
    throw new InternalServerErrorException(`NO SE PUEDE CREAR CHECA LOS LOGS`);
  }
}
