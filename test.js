import { OpenSeaStreamClient } from '@opensea/stream-js';
import { WebSocket } from 'ws';

const client = new OpenSeaStreamClient({
  token: '6f60c3f37e37470e85377e47fb7f46f7',
  connectOptions: {
    transport: WebSocket
  }
});

client.connect();

client.onItemSold('*', (event) => {
    // handle event
    let chain = event.payload.item.chain.name;
    if(chain == 'ethereum') {
      console.log(event.payload.item.nft_id);
    }
    
    //console.log(chain);
  });
