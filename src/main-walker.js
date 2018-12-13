/* global AFRAME */

AFRAME.registerComponent('main-walker', {
  init: function () {
    setInterval(() => this.move(), 2000)
  },
  move: function () {
    const currentZ = this.el.object3D.position.z
    if (currentZ > 0) {
      this.el.object3D.position.z = -5
      return
    }
    this.el.object3D.position.z += 1
  }
})
