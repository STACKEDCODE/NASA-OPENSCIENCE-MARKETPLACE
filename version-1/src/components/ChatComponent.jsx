import { createEffect } from "solid-js";
import * as signalR from "@microsoft/signalr";

const ChatComponent = () => {
    createEffect(() => {
        const connection = new signalR.HubConnectionBuilder()
            .withUrl("ws://172.16.68.153:7227/ChatHub") // Ruta del hub en el servidor
            .build();

        connection.start().catch(err => console.error(err));

        connection.on("broadcastMensaje", (usuario, mensaje) => {
            // Maneja el mensaje recibido
            console.log(`${usuario}: ${mensaje} `);
        });

        // Envía mensajes al servidor
        const enviarMensaje = () => {
            const usuario = "Usuario1"; // Nombre de usuario
            const mensaje = "Hola, esto es un mensaje desde Solid.js!";
            connection.invoke("EnviarMensaje", usuario, mensaje).catch(err => console.error(err));
        };

        // Llama a enviarMensaje después de 3 segundos (solo como ejemplo)
        setTimeout(enviarMensaje, 3000);

        return () => {
            connection.stop();
        };
    });

    return <div>Chat en tiempo real con SignalR y Solid.js</div>;
};

export default ChatComponent;
