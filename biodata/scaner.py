import time
from bitalino import BITalino
import random
# The macAddress variable on Windows can be "XX:XX:XX:XX:XX:XX" or "COMX"
# while on Mac OS can be "/dev/tty.BITalino-XX-XX-DevB" for devices ending with the last 4 digits of the MAC address or "/dev/tty.BITalino-DevB" for the remaining
macAddress = "20:16:02:26:60:31"

# This example will collect data for 5 sec.
running_time = 10
    
batteryThreshold = 60
acqChannels = [0, 2, 4]
samplingRate = 1000
nSamples = 10
digitalOutput = [1,1]

# Connect to BITalino
device = BITalino(macAddress)

# Set battery threshold
device.battery(batteryThreshold)

# Read BITalino version
print(device.version())
    
# Start Acquisition
device.start(samplingRate, acqChannels)

start = time.time()
end = time.time()
dict_ = {
    'samble':'',
    'channel 1':'',
    'channel 3':'',
    'channel 5':''
}
arr_to_json = {}
while (end - start) < running_time:
    # Read samples
    arr_channels = device.read(nSamples)
    
    arr_to_json
    print(, end='\n\n')
    end = time.time()

# Turn BITalino led on
device.trigger(digitalOutput)
    
# Stop acquisition
device.stop()
    
# Close connection
device.close()
