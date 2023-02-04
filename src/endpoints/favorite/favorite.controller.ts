import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  ParseUUIDPipe,
  HttpCode,
} from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { IdDto } from 'src/dto/id.dto';
import { FavoriteDto } from './dto/favorite.dto';

@Controller('favs')
export class FavoriteController {
  constructor(private readonly service: FavoriteService) {}
  @Get()
  getAllFavorites() {
    return this.service.getAllFavorites();
  }
  @Post('track/:id')
  addTrack(@Param('id', ParseUUIDPipe) id: IdDto) {
    return this.service.add(id, 'tracks');
  }
  @Delete('track/:id')
  deleteTrack(@Param('id', ParseUUIDPipe) id: IdDto) {
    return this.service.delete(id, 'tracks');
  }

  @Post('album/:id')
  addAlbum(@Param('id', ParseUUIDPipe) id: IdDto) {
    return this.service.add(id, 'albums');
  }
  @Delete('album/:id')
  deleteAlbum(@Param('id', ParseUUIDPipe) id: IdDto) {
    return this.service.delete(id, 'albums');
  }

  @Post('artist/:id')
  addArtist(@Param('id', ParseUUIDPipe) id: IdDto) {
    return this.service.add(id, 'artists');
  }
  @Delete('artist/:id')
  deleteArtist(@Param('id', ParseUUIDPipe) id: IdDto) {
    return this.service.delete(id, 'artists');
  }
}
