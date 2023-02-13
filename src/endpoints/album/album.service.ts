import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Param } from '@nestjs/common';
import { IdDto } from 'src/dto/id.dto';
import { Album } from 'src/types/apiTypes';
import { AlbumDto } from './dto/album.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AlbumEntity } from './entity/album.entity';
import { Repository } from 'typeorm';
// import { DataBaseService } from 'src/database/database.service';
import { isArtistExist } from 'src/helpers/isArtistExist';

@Injectable()
export class AlbumService {
  constructor(
    @InjectRepository(AlbumEntity)
    private albumsRepository: Repository<AlbumEntity>,
  ) {}

  async getAll(): Promise<AlbumEntity[]> {
    return await this.albumsRepository.find();
  }

  async getById(@Param() idDto: IdDto): Promise<AlbumEntity> {
    const albumId = idDto as unknown as string;
    const album = await this.albumsRepository.findOneBy({ id: albumId });

    if (!album) {
      throw new HttpException(
        "Album with such id isn't found",
        HttpStatus.NOT_FOUND,
      );
    }

    return album;
  }

  async create(body: AlbumDto): Promise<AlbumEntity> {
    // if (body.artistId) {
    //   await isArtistExist(this.albumsRepository, body.artistId);
    // }
    const album = {
      name: body.name,
      year: body.year,
      artistId: body.artistId ? body.artistId : null,
    };

    return await this.albumsRepository.save(album);
  }

  async update(@Param() idDto: IdDto, body: AlbumDto): Promise<AlbumEntity> {
    // if (body.artistId) {
    //   isArtistExist(this.DataBaseService.database, body.artistId);
    // }

    const albumId = idDto as unknown as string;
    const album = await this.albumsRepository.findOneBy({ id: albumId });

    if (!album) {
      throw new HttpException(
        'Album with such id is not found',
        HttpStatus.NOT_FOUND,
      );
    }

    album.name = body.name;
    album.year = body.year;
    album.artistId = body.artistId ? body.artistId : album.artistId;

    return await this.albumsRepository.save(album);
  }

  async delete(@Param() idDto: IdDto) {
    const albumId = idDto as unknown as string;
    const album = await this.albumsRepository.findOneBy({ id: albumId });

    if (!album) {
      throw new HttpException(
        'Album with such id is not found',
        HttpStatus.NOT_FOUND,
      );
    }

    await this.albumsRepository.remove(album);
  }
}
