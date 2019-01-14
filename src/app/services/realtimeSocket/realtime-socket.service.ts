import { Injectable, EventEmitter } from "@angular/core";

import io from "socket.io-client";
@Injectable({
  providedIn: "root"
})
export class RealtimeSocketService {
  MySocket: any = null;

  constructor() {}

  private BidChangeEvent: EventEmitter<any> = new EventEmitter<any>();
  public SocketInitEvent: EventEmitter<any> = new EventEmitter<any>();
  public init(url: string) {
    console.log("RealtimeSocketService constructor url:" + url);

    let socket = io.connect(url);

    socket.on("connect", () => {
      socket.emit("subscribe", { room: "room1" });

      socket.on("abc", function(data) {
        console.log(data);
      });
      socket.on("BID_CHENGED", data => {
        console.log(data);
        this.BidChangeEvent.emit(data);
      });

      this.MySocket = socket;
      this.SocketInitEvent.emit({ SocketInit: true });
    });
  }
  public subscribeToItem(itemid: string) {
    this.MySocket.emit("subscribe", { room: itemid });
  }
  public unsubscribeToItem(itemid: string) {
    this.MySocket.emit("unsubscribe", { room: itemid });
  }
  public getBidChangeEvent(): EventEmitter<any> {
    return this.BidChangeEvent;
  }

  public sendBidChanged(itemid: string) {
    this.MySocket.emit("BID_CHENGED", {
      room: "room1",
      data: "bid chenaged...."
    });
  }
}
