input.onButtonPressed(Button.A, function () {
    if (pins.analogReadPin(AnalogPin.P0) == 1023) {
        pins.analogWritePin(AnalogPin.P0, 767)
        basic.pause(500)
        pins.analogWritePin(AnalogPin.P0, 511)
        basic.pause(500)
        pins.analogWritePin(AnalogPin.P0, 256)
        basic.pause(500)
        pins.analogWritePin(AnalogPin.P0, 0)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    pins.analogWritePin(AnalogPin.P0, 256)
    basic.pause(500)
    pins.analogWritePin(AnalogPin.P0, 511)
    basic.pause(500)
    pins.analogWritePin(AnalogPin.P0, 767)
    basic.pause(500)
    pins.analogWritePin(AnalogPin.P0, 1023)
    basic.pause(500)
})
