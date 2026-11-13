/**
 * Shared state between the page (pointer handling, SculptureStage) and the 3D scene.
 * Kept outside React: it is written on every pointer move and read every frame.
 */
export const ribbonInput = {
  /** Rotation (radians) accumulated while dragging, consumed by the scene each frame. */
  dragX: 0,
  dragY: 0,
  /** Angular velocity (rad/s) carried after release, decays in the scene. */
  velX: 0,
  velY: 0,
  dragging: false,
};
