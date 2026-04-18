import { Box } from "@mui/material";
import WhatsAppIconComponent from "./CommonComponents/WhatsAppIcon";

const Wrapper = ({ children }) => {
    return (
        <Box sx={{p:3
        }}>
            {children}
            <WhatsAppIconComponent />
        </Box>
    );
};

export default Wrapper;
