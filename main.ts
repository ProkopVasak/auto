radio.setGroup(92)
radio.setTransmitPower(7)
basic.forever(function follow_line() {
    
})
function zataceni(x: any) {
    
}

radio.onReceivedValue(function on_received_value(name: string, value: number) {
    if (name == "turn" && value == 1) {
        
    } else if (name == "turn" && value == 2) {
        
    } else if (name == "move" && value == 1) {
        
    } else if (name == "move" && value == 2) {
        
    } else if (name == "stop" && value == 1) {
        
    }
    
})
