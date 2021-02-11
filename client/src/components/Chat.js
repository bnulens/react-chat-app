import React from "react";
import { useQuery, gql } from "@apollo/client";

import { ChatWrapper } from "../style/compstyling/styledChat";

const GET_MESSAGES = gql`
  query {
    messages {
      id
      content
      user
    }
  }
`;

const Messages = () => {
  const { data } = useQuery(GET_MESSAGES);
  if (!data) {
    return null;
  }
};

const Chat = () => {
  return (
    <>
      <ChatWrapper>
        <Messages />
      </ChatWrapper>
    </>
  );
};

export default Chat;
