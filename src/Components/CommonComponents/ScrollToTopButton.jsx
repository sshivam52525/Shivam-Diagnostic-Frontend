
import React, { useState, useEffect } from 'react';
import { Fab, Zoom } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Zoom in={isVisible}>
      <Fab
        color="primary"
        aria-label="scroll back to top"
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 88, // Adjusted to be adjacent to the WhatsApp icon
          width: { xs: 56, md: 72 },
          height: { xs: 56, md: 72 },
        }}
      >
        <KeyboardArrowUp sx={{ fontSize: { xs: 24, md: 36 } }} />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTopButton;
