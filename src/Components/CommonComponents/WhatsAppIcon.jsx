import React from 'react';
import { Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppIconComponent = () => {
    const openWhatsApp = () => {
        const phoneNumber = '919814719180';
        const message = 'Hello, I would like to make an appointment.';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <Fab
            color="primary"
            sx={{
                position: 'fixed',
                bottom: 16,
                right: 16,
                backgroundColor: '#25D366',
                '&:hover': {
                    backgroundColor: '#128C7E',
                },
                width: { xs: 56, md: 72 },
                height: { xs: 56, md: 72 },
            }}
            aria-label="whatsapp"
            onClick={openWhatsApp}
        >
            <WhatsAppIcon sx={{ fontSize: { xs: 24, md: 36 } }} />
        </Fab>
    );
};

export default WhatsAppIconComponent;
