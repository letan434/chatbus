export default class Chatbus {
  private ws: WebSocket;
  constructor(url: string) {
    this.ws = new WebSocket(url);
    this.ws.onerror = this.onError;
    this.ws.onopen = this.onOpen;
    this.ws.onmessage = this.onMessage;
  }
  public busList() {
    this.ws.send(
      JSON.stringify({
        type: "bus_list",
        msg: "",
      })
    );
  }
  public hitchhickerList() {
    this.ws.send(
      JSON.stringify({
        type: "hitchhicker_list",
        msg: "",
      })
    );
  }
  private subsribers: { [key: string]: Array<(data: any) => void> } = {};
  public subscribe(eventName: string, callback: (data: any) => void): void {
    if (!this.subsribers[eventName]) {
      this.subsribers[eventName] = [];
    }

    this.subsribers[eventName].push(callback);
  }
  private onError(this: WebSocket, ev: Event): any {
    //this.info("Disconnected from ChatBus");
  }
  private onOpen(this: WebSocket, ev: Event): any {
    // $.event.trigger({
    //     type: "send_message",
    //         msg_type: 'bus_list',
    //         message: ""
    //     });
    //     $.event.trigger({
    //     type: "send_message",
    //         msg_type: 'hitchhicker_list',
    //         message: ""
    //     });
    //     this.info("Connected to chatBus server ! Please type in username");
  }
  private onMessage(this: WebSocket, ev: MessageEvent): any {
    const data = JSON.parse(ev.data);
    /*
      var Data = JSON.parse(e.data);
             console.log(Data);
             $.event.trigger({
	         type: Data.type,
                 msg: Data.msg
             });
             */
  }
}
