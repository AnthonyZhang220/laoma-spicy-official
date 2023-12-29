import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import RestaurantIcon from '@mui/icons-material/Restaurant';

import "./SpeedDialMenu.scss"


export default function SpeedDialMenu({ handleOpenBooking }) {
    const [isOpen, setIsOpen] = useState(true);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const actions = [
        { icon: <RestaurantIcon />, name: 'Book a Table', action: handleOpenBooking },
        { icon: <PhoneIcon />, name: 'Call Us', action: handleClose },
        { icon: <PlaceIcon />, name: 'Location', action: handleClose },
        { icon: <AccessTimeFilledIcon />, name: isOpen ? 'Open Now' : "Closed", action: handleClose },
    ];
    useEffect(() => {
        getIfOpen();
    }, [isOpen])

    function getIfOpen() {
        const date = new Date();
        const hour = ('00' + date.getHours()).slice(-2);
        const minute = ('00' + date.getMinutes()).slice(-2);
        const currentTime = hour + ":" + minute;
        if (currentTime > "11:00" && currentTime < "21:30") {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }
    return (
        <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1, position: "fixed", bottom: 0, right: 0, zIndex: 1000 }}>
            <SpeedDial
                ariaLabel="SpeedDial tooltip example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        PopperProps={{
                            style: { maxWidth: 'none' },
                        }}
                        tooltipOpen
                        FabProps={{ size: "large" }}
                        onClick={action.action}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}