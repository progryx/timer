import React from 'react';
import {
    Button,
    ButtonGroup,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Typography
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

type Props = {
    timerInterval: number
    setTimerInterval: (interval: number) => void
}

export const IntervalComponent: React.FC<Props> = ({ timerInterval, setTimerInterval }) => {

    const decreaseInterval = () => timerInterval > 1 ? timerInterval - 1 : 1
    const increaseInterval = () => timerInterval + 1

    return (
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color='primary' variant='subtitle1'>Настройка интервала</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography color='primary' variant='body1' component="h2">
                    Интервал обновления секундомера: {timerInterval} сек.
                </Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
                <ButtonGroup variant="contained" color="primary">
                    <Button onClick={() => setTimerInterval(decreaseInterval())}>-</Button>
                    <Button onClick={() => setTimerInterval(increaseInterval())}>+</Button>
                </ButtonGroup>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};