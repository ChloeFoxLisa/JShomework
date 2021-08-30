import React from "react";
export const MessageList = ({ messageList }) => {
    return (
        <>
            {messageList.map((el) => {
                return <React.Fragment key={el}>
                    <p className="message">{el.Author}: {el.Text}</p>
                </React.Fragment>
            })}
        </>
    );
};

export const BotMessage = ({messageList}) => {
    if (messageList.length !== 0) {
        const BotTimer = setTimeout(() => {
            alert('сообщение от ' + messageList[messageList.length - 1].Author + ' отправленно')
        }, 1500);
        return () => clearTimeout(BotTimer);
    }
};