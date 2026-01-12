import { Body, Controller, Get, Post } from '@nestjs/common';
import { SceneService, SceneObject } from './scene.service';

@Controller('scene')
export class SceneController {
  constructor(private sceneService: SceneService) {}

  @Get()
  getAllObjects() {
    return this.sceneService.findAll();
  }

  @Post()
  addObject(@Body() newObject: SceneObject) {
    return this.sceneService.create(newObject);
  }
}
