const Config = {
  repo: "./ipfs/orbitdb-poc-consumer",
  silent: false,
  config: {
    Addresses: {
      Swarm: [
        "/ip4/0.0.0.0/tcp/4001",
        "/ip4/0.0.0.0/tcp/4002/ws"
      ]
    },
    Bootstrap: [
      // To establish a connection between the communicating peers for pubsub
      // you need to add it as bootstrapper
      // Note: You can do this dynamically in consumer.js
      // "/ip4/<External Public IP>/tcp/4001/p2p/QmVmYesEWZm4L1YbrVhCvJEzCDNCvrU56E22HSDXiaC7HZ"
      "/ip4/104.197.35.15/tcp/4001/p2p/QmVpVbEw6RPnXwbvyNhwpCT94eMtN8rwioEDWGdGSc9K4m"
    ]
  },
  Discovery: {
    MDNS: {
      Enabled: false,
      Interval: 10
    }
  },
  EXPERIMENTAL: {
    pubsub: true
  }
}

module.exports = {
  Config
}
