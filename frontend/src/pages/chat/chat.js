import axios from 'axios';
import React, { useEffect, useState , Component} from 'react';
import {Link} from 'react-router-dom';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelList, LoadingIndicator, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';

const uname = 'lls'
const utoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoibGxzIn0._9y5OoJcA1LVXTFEZ3oAUoFkFCUZDm2XBJxBRpws32w'

const filters = { type: 'messaging', members: { $in: [uname] } };
const sort = { last_message_at: -1 };

const Chatroom = () => {
  const [chatClient, setChatClient] = useState(null);


  //'ash'
  //'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYXNoIn0.m5w3_Kc4ZG6YuJ9c3fAlRPn8_WiUlZhHFF5zlh9UDK0'//localStorage.getItem('token')

  useEffect(() => {
    const initChat = async () => {
      const client = StreamChat.getInstance('agz5jzdmftz9');

      await client.connectUser(
        {
          id: uname,
          name: uname,
        },
        utoken,
      );

      setChatClient(client);
    };

    initChat();
  }, []);

  if (!chatClient) {
    return <LoadingIndicator />;
  }

  return (
    <><div><button><Link to="/user">Back</Link></button></div>
    <Chat client={chatClient} theme='messaging light'>
      <ChannelList filters={filters} sort={sort} />
      <Channel>
        <Window>
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat></>
  );
};

export default Chatroom;