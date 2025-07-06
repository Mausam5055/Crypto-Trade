import React from "react";

const ChatWidget: React.FC = () => (
  <iframe
    src="https://app.chatsimple.ai/iframe23/682f02c8-9d3a-47f8-b31c-8b36cd2a8620/5f36e527-c20a-469e-ae54-ca77322b7eb6/a39502d8-387e-4db4-8b68-3c300845e521"
    title="Chatsimple"
    style={{
      position: "fixed",
      bottom: "24px",
      right: "24px",
      width: "350px",
      height: "400px",
      border: "none",
      borderRadius: "20px",
      boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
      zIndex: 9999,
    }}
    allow="clipboard-write"
  />
);

export default ChatWidget;
