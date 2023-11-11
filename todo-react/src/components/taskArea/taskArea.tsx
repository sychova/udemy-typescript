import React, { FC, ReactElement } from 'react';
import {
  Box,
  Grid,
  LinearProgress,
  Alert,
} from '@mui/material';
import { format } from 'date-fns';
import { useQuery } from 'react-query';

import { TaskCounter } from '../taskCounter/taskCounter';
import { Task } from '../task/task';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { ITaskApi } from './interfaces/ITaskApi';

export const TaskArea: FC = (): ReactElement => {
  const { error, isLoading, data, refetch } = useQuery(
    'tasks',
    async () => {
      return await sendApiRequest<ITaskApi[]>(
        'http://localhost:3200/tasks',
        'GET',
      );
    },
  );

  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>
          Status of your tasks as of{' '}
          {format(new Date(), 'PPPP')}
        </h2>
      </Box>
      <Grid
        container
        display="flex"
        justifyContent="center"
      >
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          xs={10}
          md={8}
        >
          {error && (
            <Alert severity="error">
              There was an error fetching your tasks
            </Alert>
          )}
          {!error &&
            Array.isArray(data) &&
            data.length === 0 && (
              <Alert severity="warning">
                You do not have any tasks created yet
              </Alert>
            )}
          {isLoading ? (
            <LinearProgress />
          ) : (
            Array.isArray(data) &&
            data.length > 0 &&
            data.map((each, index) => {
              return (
                <Task
                  key={index + each.priority}
                  id={each.id}
                  title={each.title}
                  date={new Date(each.date)}
                  description={each.description}
                  priority={each.priority}
                  status={each.status}
                />
              );
            })
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
