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
      this.el.setAttribute('geometry', this.data.focusGeometry)

      const nearestElement = this.getNearestElement(intersection)
      if (nearestElement) {
        const itemId = nearestElement.getAttribute('data-model-id')
        this.showPanel(itemId)
      }
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
  },
  showPanel: function (itemId) {
    document.querySelector('#display-panel').classList.add('active')
    const panel = document.querySelector('#display-panel .img-area')
    panel.setAttribute('style', 'background-image: url("./img/img' + itemId + '.jpg")')
  }
})
