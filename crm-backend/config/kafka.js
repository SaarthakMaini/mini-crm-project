const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'crm',
  brokers: [process.env.KAFKA_BROKER]
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'crm-group' });

module.exports = { producer, consumer };