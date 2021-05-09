import {Task} from "./api/task"

export type EventType   = "InstallDone" |  "InstallError" | "UninstallError" | "UninstallDone"
export interface NotificationEvent {
    event: EventType
    data: Task
}
export class NotificationManager {
    ws?:WebSocket
    listeners:{ [key:string]:((event:NotificationEvent) => void)[] } = {}
    connectWs = () => {
        const apiUrl  = localStorage.getItem("apiUrl")
        if (!apiUrl) {
            return
        }
        const uri  = new URL(apiUrl)
        console.log(`ws://${uri.host}/notification`)
        this.ws = new WebSocket(`ws://${uri.host}/notification`)
        this.ws.onmessage = (message:MessageEvent) => {
            const noti:NotificationEvent  = JSON.parse(message.data)
            this.listeners[noti.event].forEach(it => it(noti))
        }
    }
    addListener = (event:EventType,listener: (event:NotificationEvent) => void) => {
        if (this.listeners[event]){
            this.listeners[event].push(listener)
            return
        }
        this.listeners[event] = [listener]
    }
}

export const DefaultNotificationManager = new NotificationManager()
