import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { IdDto } from 'src/dto/id.dto';
import { WhitelistPipe } from 'src/validation/whitelist.validation';
import { ArtistService } from './artist.service';
import { ArtistDto } from './dto/artist.dto';

@Controller('artist')
export class ArtistController {
  constructor(private readonly service: ArtistService) {}
  @Get()
  getAllTracks() {
    return this.service.getAll();
  }
  @Get(':id')
  getTrackById(@Param('id', ParseUUIDPipe) id: IdDto) {
    return this.service.getById(id);
  }
  @Post()
  createTrack(@Body(WhitelistPipe) body: ArtistDto) {
    return this.service.create(body);
  }
  @Put(':id')
  updateTrack(
    @Param('id', ParseUUIDPipe) id: IdDto,
    @Body(WhitelistPipe) body: ArtistDto,
  ) {
    return this.service.update(id, body);
  }
  @Delete(':id')
  @HttpCode(204)
  deleteTrack(@Param('id', ParseUUIDPipe) id: IdDto) {
    return this.service.delete(id);
  }
}
