import paho.mqtt.client as mqtt
import json

class ThingsBoardClient:
    def __init__(self, host: str, access_token: str):
        self.host = host
        self.access_token = access_token
        self.client = mqtt.Client()
        self.client.username_pw_set(self.access_token)
        self.client.connect(self.host, 1883, 60)
        self.client.loop_start()
        
    def send_telemetry(self, data:dict):
        self.client.publish('v1/devices/me/telemetry', json.dumps(data), 1)
        
    def disconnect(self):
        self.client.loop_stop()
        self.client.disconnect()