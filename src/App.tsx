import React from 'react';
import { TimerComponent } from './components/TimerComponent';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';

export const RootApp: React.FC = () => (
    <React.Fragment>
        <Container maxWidth="md">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">React Timer v2.0</Typography>
                </Toolbar>
            </AppBar>
            <TimerComponent/>
        </Container>
    </React.Fragment>
);
