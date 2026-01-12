import { Injectable } from '@nestjs/common';

export interface SceneObject {
  id: string;
  name: string;
  position: [number, number, number];
}

@Injectable()
export class SceneService {
  private objects: SceneObject[] = [];

  findAll(): SceneObject[] {
    return this.objects;
  }

  create(object: SceneObject) {
    this.objects.push(object);
    return object;
  }
}
