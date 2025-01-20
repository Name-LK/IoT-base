import time 
from models.sensor import Sensor
from services.thingsboard_client import ThingsBoardClient
from config import settings
from utils.logger import Logger

logger = Logger()