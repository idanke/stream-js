import { OpenSeaStreamClient } from '@opensea/stream-js';
import { WebSocket } from 'ws';

const client = new OpenSeaStreamClient({
  token: '6f60c3f37e37470e85377e47fb7f46f7',
  connectOptions: {
    transport: WebSocket
  }
});

client.connect();

client.onItemListed('nuri-samurai', (event) => {
    // handle event
    console.log(event.payload.item.nft_id);
  });
