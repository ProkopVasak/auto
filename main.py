radio.set_group(92)
radio.set_transmit_power(7)
def follow_line():
    pass
basic.forever(follow_line)
def zataceni(x):
 pass
def on_received_value(name, value):
    if name == "turn" and value == 1:
        pass
    elif name == "turn" and value == 2:
        pass
    elif name == "move" and value == 1:
        pass
    elif name == "move" and value == 2:
        pass
    elif name == "stop" and value == 1:
        pass           
radio.on_received_value(on_received_value)

