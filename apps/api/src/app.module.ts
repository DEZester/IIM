import { Module } from '@nestjs/common';
import { SceneService } from './scene.service';
import { SceneController } from './scene.controller';

@Module({
  imports: [],
  controllers: [SceneController],
  providers: [SceneService],
})
export class AppModule {}
