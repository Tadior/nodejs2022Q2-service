import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './endpoints/user/user.module';
import { TrackModule } from './endpoints/track/track.module';
import { ArtistModule } from './endpoints/artist/artist.module';
import { AlbumModule } from './endpoints/album/album.module';
import { FavoriteModule } from './endpoints/favorite/favorite.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    TrackModule,
    ArtistModule,
    AlbumModule,
    FavoriteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
