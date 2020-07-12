import React from 'react';
import { Dialog, Card, CircularProgress, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Container = styled(Card)`
    padding: 20px 10px;
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;

    h6 {
        margin-top: 10px;
    }
`

const Loading = () => {
    const loading = useSelector(state => state.loading);

    return (
        <Dialog open={loading}>
            <Container>
                <CircularProgress
                    color="primary" />
                <Typography variant="subtitle2">
                    Por favor aguarde ...
                </Typography>
            </Container>
        </Dialog>
    )
}

export default Loading;