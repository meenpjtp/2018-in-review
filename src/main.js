import Timeline from './components/Timeline'

// Initial HMR Setup
if (module.hot) {
    module.hot.accept()

    module.hot.dispose(() => {
        window.assets = timeline.assets
        timeline.renderer.domElement.removeEventListener('wheel', timeline.scroll)
        document.querySelector('canvas').remove()
        timeline.renderer.forceContextLoss()
        timeline.renderer.context = null
        timeline.renderer.domElement = null
        timeline.renderer = null
        cancelAnimationFrame(timeline.animationId)
        removeEventListener('resize', timeline.resize)
        removeEventListener('mousemove', timeline.mouseMove)
        removeEventListener('touchmove', timeline.mouseMove)
        removeEventListener('mousedown', timeline.mouseDown)
        removeEventListener('touchdown', timeline.mouseDown)
    })
}



const timeline = new Timeline()
window.timeline = timeline