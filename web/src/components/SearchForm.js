import React, { useState, useEffect } from 'react';
import { Button, Typography, TextField, Box } from '@material-ui/core';
import styled from 'styled-components';
import logo from '../assets/gh-logo.png'
import { search } from '../actions/repositories';
import { useDispatch } from 'react-redux';

const Logo = styled.img`
    width: 140px;
    height: 120px;
    margin-bottom: 10px;
`

const Container = styled.div`
    position: fixed;
    top: 0;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const SearchForm = () => {
    const [fields, setFields] = useState({
        query: '',
        page: 1,
        language: 'javascript'
    });

    const dispatch = useDispatch();

    useEffect(() => {
        executeSearch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onChangeQuery = (e) => {
        const query = e.target.value;

        setFields({
            ...fields,
            query
        });
    }

    const onChangeLanguage = (e) => {
        const language = e.target.value;

        setFields({
            ...fields,
            language
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (fields.language !== '') {
            executeSearch();
        }
    }

    const executeSearch = () => {
        const { query, page, language } = fields;
        dispatch(search(page, language, query));
    }

    return (
        <Container>
            <Box 
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center">
                <Logo
                    src={logo}
                    alt="gh-logo" />
                <Typography variant="h4">
                    Github Repositories
                </Typography>
                <Typography variant="subtitle2">
                    Pesquise por repositórios públicos do github
                </Typography>
            </Box>

            <form onSubmit={onSubmit}>
                <TextField
                    onChange={onChangeQuery}
                    value={fields.query}
                    margin="normal"
                    variant="outlined"
                    label="Termo"
                    placeholder="Ex: React"
                    fullWidth
                    helperText="Termo será pesquisado no nome, na descrição ou no README do repositório" />

                <TextField
                    onChange={onChangeLanguage}
                    error={fields.language === ''}
                    value={fields.language}
                    margin="normal"
                    variant="outlined"
                    placeholder="Ex: javascript"
                    label="Linguagem"
                    helperText="* Este campo é obrigatório"
                    fullWidth />
                <Box marginTop="15px">
                    <Button variant="contained" color="primary" value="Entrar" type="submit" fullWidth>Pesquisar</Button>
                </Box>
            </form>
        </Container>
    )
}

export default SearchForm;