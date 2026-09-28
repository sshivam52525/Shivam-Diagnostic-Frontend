import { Box } from "@mui/material";
import WhatsAppIconComponent from "./CommonComponents/WhatsAppIcon";

const Wrapper = ({ children }) => {
    return (
        <Box
            sx={{
                width: '100%',
                backgroundColor: '#f8fafc',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 'lg',
                    mx: 'auto',
                    px: { xs: 1.5, sm: 2, md: 3, lg: 4 },
                    py: { xs: 2, sm: 2.5, md: 3 },
                    pb: { xs: 3, sm: 4, md: 5 },
                }}
            >
                {children}
                <WhatsAppIconComponent />
            </Box>
        </Box>
    );
};

export default Wrapper;
