import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import "./FloatingWhatsappButton.Styled.css";
export default function FloatingWhatsappButton() {
  return (
    <div>
      <FloatingWhatsApp
        className="floating-whatsapp"
        messageDelay={0.5}
        chatboxHeight={292}
        phoneNumber="527713435094"
        avatar="https://static.vecteezy.com/system/resources/previews/022/362/782/original/bell-logo-design-illustration-vector.jpg"
        accountName="Arca de la Alianza"
        allowEsc={true}
        allowClickAway={true}
        notification={true}
        // darkMode={true}
        placeholder="Escribe a Arca de la Alianza"
        chatMessage={"Somos arca de la alianza, como podemos ayudarte?"}
        notificationSound={true}
        notificationSoundSrc={"https://jmp.sh/s/tIOyur8xOtaXo4acTpV0"}
      />
    </div>
  );
}
