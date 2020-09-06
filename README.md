# webrtcnode
WebRTC video chatting application done using express, socketio and peerjs(webrtc)

1) Used Socket io which has functions like 
  (i) broadcast - To emit signals to the client web browsers.
  (ii) join - to create/join room
2) Peerjs which gives a configurable browser's webrtc implementation, and we can start using by adding an minimal js to the html page.
3) Used UUID js to create a new unique IDs for creating rooms.

Few points on Webrtc:
1) The communications are encypted, so any user tryig to get the data will not be able to decrypt it.
2) WebRtc enables peer-to-peer(client-to-client) conectivity, and it uses server once for initiating the connection between clients.
3) WebRtc uses UDP protocol, which helps us to send/receive data faster. Since UDP has few known issues like data loss, which in a video call will be drop in frames.

For now to test the application, I have deployed this app in heroku.
https://webrtctrial.herokuapp.com/

You can initiate your room with any name you want, if you find unique id is hard to copy and send.
For Example : https://webrtctrial.herokuapp.com/roomname.

For Ref:
https://peerjs.com/
https://socket.io/
