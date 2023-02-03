import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

interface ITrackDto {
  name: string;
  artistId: string | null;
  albumId: string | null;
  duration: number;
}

export class TrackDto implements ITrackDto {
  @IsString()
  name: string;
  @IsOptional()
  artistId: string | null;
  @IsOptional()
  albumId: string | null;
  @IsNumber()
  duration: number;
}
