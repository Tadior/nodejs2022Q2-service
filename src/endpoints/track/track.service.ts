import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Param } from '@nestjs/common';
import { IdDto } from 'src/dto/id.dto';
import { Track } from 'src/types/apiTypes';
import { TrackDto } from './dto/track.dto';
import { TrackEntity } from './entity/track.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { DataBaseService } from 'src/database/database.service';
// import { isAlbumExist } from 'src/helpers/isAlbumExist';
// import { isArtistExist } from 'src/helpers/isArtistExist';

@Injectable()
export class TrackService {
  constructor(
    @InjectRepository(TrackEntity)
    private tracksRepository: Repository<TrackEntity>,
  ) {}
  //   private readonly tracks = this.DataBaseService.database.tracks;
  async getAll(): Promise<TrackEntity[]> {
    return await this.tracksRepository.find();
  }
  async getById(@Param() idDto: IdDto): Promise<TrackEntity> {
    const trackId = idDto as unknown as string;
    const track = await this.tracksRepository.findOneBy({ id: trackId });

    if (!track) {
      throw new HttpException(
        "Track with such id isn't found",
        HttpStatus.NOT_FOUND,
      );
    }

    return track;
  }
  async create(body: TrackDto): Promise<TrackEntity> {
    // if (body.albumId) {
    //   const isAlbumExist = await this.albumRepository.findOneBy({
    //     id: body.albumId,
    //   });
    //   if (!isAlbumExist) {
    //     throw new HttpException(
    //       'Album with such id is not foud',
    //       HttpStatus.NOT_FOUND,
    //     );
    //   }
    // }

    // if (body.artistId) {
    //   const isArtistExist = await this.artistsRepository.findOneBy({
    //     id: body.albumId,
    //   });
    //   if (!isArtistExist) {
    //     throw new HttpException(
    //       'Album with such id is not foud',
    //       HttpStatus.NOT_FOUND,
    //     );
    //   }
    // }

    const track = {
      name: body.name,
      artistId: body.artistId ? body.artistId : null,
      albumId: body.albumId ? body.albumId : null,
      duration: body.duration,
    };
    return await this.tracksRepository.save(track);
  }

  async update(@Param() idDto: IdDto, body: TrackDto): Promise<TrackEntity> {
    // if (body.albumId) {
    //   isAlbumExist(this.DataBaseService.database, body.albumId);
    // }
    // if (body.artistId) {
    //   isArtistExist(this.DataBaseService.database, body.artistId);
    // }
    const trackId = idDto as unknown as string;
    const track = await this.tracksRepository.findOneBy({ id: trackId });
    if (!track) {
      throw new HttpException(
        'Track with such id is not found',
        HttpStatus.NOT_FOUND,
      );
    }
    track.name = body.name;
    track.artistId = body.artistId ? body.artistId : track.artistId;
    track.albumId = body.albumId ? body.albumId : track.albumId;
    track.duration = body.duration;
    return await this.tracksRepository.save(track);
  }

  async delete(@Param() idDto: IdDto) {
    const trackId = idDto as unknown as string;
    const track = await this.tracksRepository.findOneBy({ id: trackId });
    if (!track) {
      throw new HttpException(
        'Track with such id is not found',
        HttpStatus.NOT_FOUND,
      );
    }
    await this.tracksRepository.remove(track);
  }
}
