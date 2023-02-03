import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Param } from '@nestjs/common';
import { IdDto } from 'src/dto/id.dto';
import { Track } from 'src/types/apiTypes';
import { TrackDto } from './dto/track.dto';

@Injectable()
export class TrackService {
  private readonly tracks: Track[] = [];
  getAll(): Track[] {
    return this.tracks;
  }
  getById(@Param() idDto: IdDto): Track {
    const trackId = idDto as unknown as string;
    const track = this.tracks.find((track) => {
      if (track.id === trackId) {
        return track;
      }
    });
    if (!track) {
      throw new HttpException(
        "User with such id isn't found",
        HttpStatus.NOT_FOUND,
      );
    }
    return track;
  }
  create(body: TrackDto): Track {
    const track = {
      id: uuidv4(),
      name: body.name,
      artistId: body.artistId,
      albumId: body.albumId,
      duration: body.duration,
    };
    this.tracks.push(track);
    return track;
  }
  update(@Param() idDto: IdDto, body: TrackDto): Track {
    const trackId = idDto as unknown as string;
    const track = this.tracks.find((track) => {
      if (track.id === trackId) {
        return track;
      }
    });
    console.log(track);
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
    return track;
  }
  delete(@Param() idDto: IdDto) {
    const trackId = idDto as unknown as string;
    const trackIndex = this.tracks.findIndex((track) => {
      if (track.id === trackId) {
        return track;
      }
    });
    if (trackIndex === -1) {
      throw new HttpException(
        'Track with such id is not found',
        HttpStatus.NOT_FOUND,
      );
    }
    this.tracks.splice(trackIndex, 1);
  }
}
