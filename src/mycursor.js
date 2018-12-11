/* global AFRAME */

AFRAME.registerComponent('mycursor', {
  schema: {
    normalGeometry: {
      default: {
        primitive: 'ring',
        radiusInner: 0.02,
        radiusOuter: 0.03
      }
    },
    focusGeometry: {
      default: {
        primitive: 'ring',
        radiusInner: 0.03,
        radiusOuter: 0.04
      }
    }
  },

  init: function () {
    this.el.setAttribute('geometry', this.data.normalGeometry)

    this.el.addEventListener('raycaster-intersection', (intersection) => {
      const nearestElement = this.getNearestElement(intersection)
      console.log(nearestElement.getAttribute('data-model-id'))
      this.el.setAttribute('geometry', this.data.focusGeometry)
    })

    this.el.addEventListener('raycaster-intersection-cleared', (intersection) => {
      this.el.setAttribute('geometry', this.data.normalGeometry)
    })
  },
  getNearestElement: function (intersection) {
    if (!intersection || intersection.detail.els.length === 0) {
      return null
    }
    return intersection.detail.els[0]
  }
})
