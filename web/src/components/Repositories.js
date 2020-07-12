import React from 'react';
import * as _ from 'lodash';
import { useSelector } from 'react-redux';
import RepositoryCard from './RepositoryCard';
import { Grid } from '@material-ui/core';

const Repositories = () => {
    const repositories = useSelector(state => state.repositories);

    if (_.isEmpty(repositories)) {
        return null;
    }

    const { items } = repositories;

    return (
        <Grid container spacing={3}>
            {items.map(item => (
                <Grid item md={6} style={{ display: 'flex' }}>
                    <RepositoryCard
                        repository={item} />
                </Grid>
            ))}
        </Grid>
    )
}

export default Repositories;