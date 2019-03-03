import time
from bitalino import BITalino
import random
import json
# The macAddress variable on Windows can be "XX:XX:XX:XX:XX:XX" or "COMX"
# while on Mac OS can be "/dev/tty.BITalino-XX-XX-DevB" for devices ending with the last 4 digits of the MAC address or "/dev/tty.BITalino-DevB" for the remaining
macAddress = "20:16:02:26:60:31"

# This example will collect data for 5 sec.
running_time = 10
    
batteryThreshold = 60
acqChannels = [0, 2, 4]
samplingRate = 1000
nSamples = 100
digitalOutput = [1,1]
while True:
    try:
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
        dict_ = {}
        arr_to_json = {}
        coun = 0
        while (end - start) < running_time:
            # Read samples
            arr_channels = device.read(nSamples)
            sam_1 = random.randint(0,99)
            sam_2 = random.randint(0,99)
            dict_['' + coun] = [arr_channels[sam_1][4],arr_channels[sam_1][5], arr_channels[sam_1][6] ]
            dict_['' + coun] = [arr_channels[sam_2][4],arr_channels[sam_2][5], arr_channels[sam_2][6] ]
            #print(, end='\n\n')
            end = time.time()
        final_dict={"data":dict_}
        with open('result.json', 'w+') as fp:
            json.dump(final_dict, fp)
        # Turn BITalino led on
        device.trigger(digitalOutput)
            
        # Stop acquisition
        device.stop()
            
        # Close connection
        device.close()

    except:
        print("Error in connection")
