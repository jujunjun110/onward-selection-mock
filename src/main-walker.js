/* global AFRAME */

AFRAME.registerComponent('main-walker', {
  init: function () {
    const move = () => {
      const currentZ = this.el.object3D.position.z
      if (currentZ > 0) {
        this.el.object3D.position.z = -5
      } else {
        this.el.object3D.position.z += 1
      }
    }
    setInterval(move, 2000)
  }
})
