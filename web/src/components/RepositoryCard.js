import React from 'react';
import { Chip, Typography, Avatar, Box, useTheme } from '@material-ui/core';
import styled from 'styled-components';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import StarIcon from '@material-ui/icons/Star';
import { lighten } from 'polished';

const Card = styled.div`
    background-color: ${props => lighten(0.1, props.bgColor)};
    border: 2px solid ${props => props.borderColor};
    border-radius: 5px;
    padding: 20px;
    color: ${props => props.color};    
    width: 100%;   
    word-break: break-all; 
`

const User = styled.div`
    margin-bottom: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Link = styled.a`
    color: ${props => props.color};    
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
`

const RepositoryCard = ({ repository }) => {
    const theme = useTheme();
    const primary = theme.palette.primary;
    const secondary = theme.palette.secondary;

    const { full_name, url, description, forks, stars, owner } = repository;
    const { login, avatar_url, page_url } = owner;

    return (
        <Card
            color={primary.contrastText}
            borderColor={secondary.main}
            bgColor={primary.main}>

            <Link color={primary.contrastText} href={page_url} target="_blank">
                <User>
                    <Avatar src={avatar_url} alt={login} />
                    <Typography variant="subtitle1" style={{ marginLeft: '15px' }}>
                        {login}
                    </Typography>
                </User>
            </Link>

            <Box
                marginBottom="20px">
                <Chip
                    size="small"
                    icon={<CallSplitIcon />}
                    label={`forks: ${forks}`}
                    color="secondary" />
                <Chip
                    style={{ marginLeft: '15px' }}
                    size="small"
                    icon={<StarIcon />}
                    label={`stars: ${stars}`}
                    color="secondary" />
            </Box>

            <Link color={primary.contrastText} href={url} target="_blank">
                <Typography variant="h6">
                    {full_name}
                </Typography>
            </Link>
            <Typography variant="subtitle2" style={{ marginTop: '20px' }}>
                {description}
            </Typography>

        </Card>
    )
}

export default RepositoryCard;