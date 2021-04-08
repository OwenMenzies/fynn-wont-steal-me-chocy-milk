input.onButtonPressed(Button.A, function () {
    if (Password_doer_or_not == true) {
        if (Password == 3) {
            Password += 1
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        }
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
        if (true) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        }
    } else if (Password_doer_or_not == false) {
        basic.showString("You have three attempts to get the password until another person will come in and stop you from stealing my chocy milk ")
    }
})
let Password = 0
let Password_doer_or_not = false
radio.setGroup(1.79769313486e+308)
Password_doer_or_not = false
Password = 0
