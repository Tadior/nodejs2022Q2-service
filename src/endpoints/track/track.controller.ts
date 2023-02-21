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
import { TrackDto } from './dto/track.dto';
import { TrackService } from './track.service';

@Controller('track')
export class TrackController {
  constructor(private readonly service: TrackService) {}
  @Get()
  getAllTracks() {
    return this.service.getAll();
  }
  @Get(':id')
  getTrackById(@Param('id', ParseUUIDPipe) id: IdDto) {
    return this.service.getById(id);
  }
  @Post()
  createTrack(@Body(WhitelistPipe) body: TrackDto) {
    return this.service.create(body);
  }
  @Put(':id')
  updateTrack(
    @Param('id', ParseUUIDPipe) id: IdDto,
    @Body(WhitelistPipe) body: TrackDto,
  ) {
    return this.service.update(id, body);
  }
  @Delete(':id')
  @HttpCode(204)
  deleteTrack(@Param('id', ParseUUIDPipe) id: IdDto) {
    return this.service.delete(id);
  }
}
