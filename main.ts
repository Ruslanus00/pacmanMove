function Start () {
    px = game.createSprite(2, 2)
    py = game.createSprite(2, 2)
    gx = game.createSprite(0, 0)
    gy = game.createSprite(0, 0)
    while (true) {
        if (input.acceleration(Dimension.X) > 200) {
            px.change(LedSpriteProperty.X, 1)
            py.change(LedSpriteProperty.X, 1)
        }
        if (input.acceleration(Dimension.X) < -200) {
            px.change(LedSpriteProperty.X, -1)
            py.change(LedSpriteProperty.X, -1)
        }
        if (input.acceleration(Dimension.Y) > 200) {
            px.change(LedSpriteProperty.Y, 1)
            py.change(LedSpriteProperty.Y, 1)
        }
        if (input.acceleration(Dimension.Y) < -200) {
            px.change(LedSpriteProperty.Y, -1)
            py.change(LedSpriteProperty.Y, -1)
        }
        basic.pause(200)
    }
}
let gy: game.LedSprite = null
let gx: game.LedSprite = null
let py: game.LedSprite = null
let px: game.LedSprite = null
Start()
