input.onButtonPressed(Button.A, function () {
    if (Password_doer_or_not == true) {
    	
    } else if (Password_doer_or_not == false) {
        basic.showString("Press A+B to start entering code ")
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Password_doer_or_not == true) {
        Password_doer_or_not = false
        basic.showString("password entering stopped")
    } else if (Password_doer_or_not == false) {
        Password_doer_or_not = true
        basic.showString("Enter password")
    }
})
input.onButtonPressed(Button.B, function () {
    if (Password_doer_or_not == true) {
    	
    }
})
let Password_doer_or_not = false
radio.setGroup(69420)
Password_doer_or_not = false
