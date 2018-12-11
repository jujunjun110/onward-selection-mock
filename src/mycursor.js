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

    this.el.addEventListener('raycaster-intersection', () => {
      this.el.setAttribute('geometry', this.data.focusGeometry)
    })

    this.el.addEventListener('raycaster-intersection-cleared', () => {
      this.el.setAttribute('geometry', this.data.normalGeometry)
    })
  }
})
