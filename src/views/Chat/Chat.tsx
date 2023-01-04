import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Chat = () => {
  return (
    <ChatContainer>
        <ChatHeader>
        <ChatHeaderLeft>
            <h4><strong>#Room name</strong></h4>
            <StarBorderOutlined/>
          </ChatHeaderLeft>
          <ChatHeaderRight>
            <p>
              <InfoOutlined/>
              Details
            </p>
          </ChatHeaderRight>
        </ChatHeader>
    </ChatContainer>
  )
}

export default Chat

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin: 4rem 0 0 1rem;
    margin-top: 5rem;
`

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.2rem;
  border-bottom: 0.1rem solid #e9e9e9;
`

const ChatHeaderRight = styled.div``

const ChatHeaderLeft = styled.div`

`