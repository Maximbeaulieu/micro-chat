input.onButtonPressed(Button.A, function () {
    radio.sendString("sheeesh")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
