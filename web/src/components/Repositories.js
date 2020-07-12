import React from 'react';
import * as _ from 'lodash';
import { useSelector } from 'react-redux';
import RepositoryCard from './RepositoryCard';
import { Grid, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { search } from '../actions/repositories';

const Repositories = () => {
    const repositories = useSelector(state => state.repositories);
    const { page, query, language } = useSelector(state => state.search);
    const dispatch = useDispatch();

    const loadPrevious = () => {
        dispatch(search(page - 1, language, query));
    }

    const loadMore = () => {
        dispatch(search(page + 1, language, query));
    }

    if (_.isEmpty(repositories)) {
        return null;
    }

    const { items } = repositories;

    return (
        <Grid container spacing={1}>
            {items.map((item, index) => (
                <Grid key={index} item md={6} style={{ display: 'flex' }}>
                    <RepositoryCard
                        repository={item} />
                </Grid>
            ))}
            <Grid
                style={{ marginTop: '20px', padding: '10px' }}
                direction="row"
                container
                spacing={2}>
                <Grid item md={5}>
                    <Button onClick={loadPrevious} disabled={page === 1} fullWidth variant="contained" color="secondary">
                        Carregar anterior
                    </Button>
                </Grid>
                <Grid item md={2}>
                    <Button fullWidth variant="contained" color="primary">
                        {`Página ${page}`}
                    </Button>
                </Grid>
                <Grid item md={5}>
                    <Button onClick={loadMore} fullWidth variant="contained" color="secondary">
                        Carregar próximo
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Repositories;