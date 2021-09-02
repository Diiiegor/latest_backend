import mqtt from 'mqtt'

export function sendMqttMessage(message, onFail: CallableFunction,onSuccess:CallableFunction) {
    const host = 'mqtt://mqtt.lyaelectronic.com:4010';
    //const host = 'mqtt://test.mosquitto.org';
    const client = mqtt.connect(host)

    client.on('connect', () => {
        client.publish('lyatest/juan diego',message);
        client.end();
        onSuccess()
    })

    client.on('error', (err) => {
        client.end();
        onFail(err)
    });

}