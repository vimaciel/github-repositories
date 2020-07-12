import React from 'react';
import { Grid, useTheme } from '@material-ui/core';
import styled, { createGlobalStyle } from 'styled-components';
import SearchForm from './SearchForm';
import Repositories from './Repositories';

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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
`

const Home = () => {    
    const theme = useTheme();
    const primary = theme.palette.primary;

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
                   <Repositories />
                </ContentGrid>
                <FormGrid
                    xs={12}
                    md={5}
                    item>
                    <SearchForm />
                </FormGrid>
            </MainGrid>
        </>
    )
}

export default Home;