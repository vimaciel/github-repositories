import React, { useEffect } from 'react';
import { Typography, Box, Grid, TextField, Button, useTheme, Avatar, Chip } from '@material-ui/core';
import styled, { createGlobalStyle } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { search } from '../actions/repositories';
import logo from '../assets/gh-logo.png'
import { lighten } from 'polished';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import StarIcon from '@material-ui/icons/Star';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const MainGrid = styled(Grid)`
    height: 100vh;
`

const ContentGrid = styled(Grid)`
    background-color: ${props => props.bgColor};
    padding: 20px;
`

const FormGrid = styled(Grid)`
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
`

const Logo = styled.img`
    width: 140px;
    height: 120px;
    margin-bottom: 10px;
`

const Card = styled.div`
    background-color: ${props => lighten(0.1, props.bgColor)};
    border: 2px solid ${props => props.borderColor};
    border-radius: 5px;
    padding: 20px;
    color: white;
    margin: 10px 0;
`

const User = styled.div`
    margin-bottom: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Home = () => {
    const repositories = useSelector(state => state.repositories);
    const dispatch = useDispatch();
    const theme = useTheme();
    const primary = theme.palette.primary;
    const secondary = theme.palette.secondary;

    console.log(secondary)

    // useEffect(() => {
    //     dispatch(search(1, 'javascript', ''));
    // }, []);

    return (
        <>
            <GlobalStyle />
            <MainGrid
                container>
                <ContentGrid
                    bgColor={primary.main}
                    xs={12}
                    md={7}
                    item>
                    <Card
                        borderColor={secondary.main}
                        bgColor={primary.main}>
                        <User>
                            <Avatar>
                            </Avatar>
                            <Typography variant="subtitle1" style={{ marginLeft: '15px' }}>
                                freeCodeCamp
                            </Typography>
                        </User>

                        <Typography variant="h5">
                            freeCodeCamp/freeCodeCamp
                        </Typography>
                        <Typography variant="subtitle2" style={{ marginTop: '10px' }}>
                            freeCodeCamp.org's open source codebase and curriculum. Learn to code at home.
                        </Typography>


                        <Box
                            marginTop="20px">
                            <Chip
                                size="small"
                                icon={<CallSplitIcon />}
                                label="forks: 24388"
                                color="secondary" />
                            <Chip
                                style={{ marginLeft: '15px' }}
                                size="small"
                                icon={<StarIcon/>}
                                label="stars: 312391"
                                color="secondary" />
                        </Box>

                    </Card>
                </ContentGrid>
                <FormGrid
                    xs={12}
                    md={5}
                    item>
                    <Logo
                        src={logo}
                        alt="gh-logo" />
                    <Typography variant="h4">
                        Github Repositories
                    </Typography>
                    <Typography variant="subtitle2">
                        Pesquise por repositórios públicos do github
                    </Typography>
                    <form>
                        <TextField
                            margin="normal"
                            variant="outlined"
                            label="Termo"
                            placeholder="Ex: React"
                            fullWidth
                            helperText="Termo será pesquisado no nome, na descrição ou no README do repositório" />

                        <TextField
                            margin="normal"
                            type="password"
                            variant="outlined"
                            placeholder="Ex: javascript"
                            label="Linguagem"
                            fullWidth />
                        <Box marginTop="15px">
                            <Button variant="contained" color="primary" value="Entrar" type="submit" fullWidth>Pesquisar</Button>
                        </Box>
                    </form>
                </FormGrid>
            </MainGrid>
        </>
    )
}

export default Home;