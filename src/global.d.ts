/// <reference types="three" />

declare module "*.glb";
declare module "*.png";

declare module "meshline" {
  export class MeshLineGeometry extends THREE.BufferGeometry {
    setPoints(points: THREE.Vector3[]): void;
  }
  export class MeshLineMaterial extends THREE.ShaderMaterial {
    color: THREE.Color;
    lineWidth: number;
    map?: THREE.Texture;
    useMap: number;
    repeat: THREE.Vector2;
    resolution: THREE.Vector2;
  }
}

import type { MeshLineGeometry, MeshLineMaterial } from "meshline";
import type * as THREE from "three";

declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: {
      ref?: React.Ref<MeshLineGeometry>;
      [key: string]: unknown;
    };
    meshLineMaterial: {
      ref?: React.Ref<MeshLineMaterial>;
      color?: string | number | THREE.Color;
      depthTest?: boolean;
      resolution?: [number, number] | THREE.Vector2;
      useMap?: boolean | number;
      map?: THREE.Texture;
      repeat?: [number, number] | THREE.Vector2;
      lineWidth?: number;
      [key: string]: unknown;
    };
  }
}
