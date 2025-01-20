import random

class Sensor:
    def __init__(self, name: str):
        self.name = name
    
    def read_temperature(self):
        return round(random.randint(10, 50), 2)