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
import { AlbumService } from './album.service';
import { AlbumDto } from './dto/album.dto';

@Controller('album')
export class AlbumController {
  constructor(private readonly service: AlbumService) {}
  @Get()
  getAllAlbums() {
    return this.service.getAll();
  }
  @Get(':id')
  getAlbumById(@Param('id', ParseUUIDPipe) id: IdDto) {
    return this.service.getById(id);
  }
  @Post()
  createAlbum(@Body(WhitelistPipe) body: AlbumDto) {
    return this.service.create(body);
  }
  @Put(':id')
  updateAlbum(
    @Param('id', ParseUUIDPipe) id: IdDto,
    @Body(WhitelistPipe) body: AlbumDto,
  ) {
    return this.service.update(id, body);
  }
  @Delete(':id')
  @HttpCode(204)
  deleteAlbum(@Param('id', ParseUUIDPipe) id: IdDto) {
    return this.service.delete(id);
  }
}
