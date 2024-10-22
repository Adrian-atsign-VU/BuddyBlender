# Ruby script for anomaly detection
def initialize_anomaly_detector
    puts 'Anomaly detector initialized!'
end

def process_data(data)
    data.each do |item|
        puts 'Processing item: ' + item.to_s
    end
end

initialize_anomaly_detector
process_data([1, 2, 3, 4])
