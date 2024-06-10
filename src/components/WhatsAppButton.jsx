import React from "react";
import { Tooltip } from "react-tooltip";
import { FaWhatsapp } from "react-icons/fa";
import { LinkWhatsApp, Wrapper } from "../styles/WhatsAppButtonStyle"; // Importe corrigido

const WhatsAppButton = () => {
    return (
        <Wrapper>
            <Tooltip id="my-tooltip" />
            <LinkWhatsApp
                target="_blank"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Envie uma mensagem"
                href="https://api.whatsapp.com/send/?phone=5511991231629&text=Ol%C3%A1%2C+vi+seu+portfolio+e+tenho+interesse+em+seus+servi%C3%A7os.&type=phone_number&app_absent=0"
            >
                <FaWhatsapp />
            </LinkWhatsApp>
        </Wrapper>
    );
};

export default WhatsAppButton;
