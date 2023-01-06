import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import VideoCard from '../components/VideoCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function HomePage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <VideoCard/>
      </Grid>
      <Grid item xs={3}>
        <VideoCard/>
      </Grid>
      <Grid item xs={3}>
        <VideoCard/>
      </Grid>
      <Grid item xs={3}>
        <VideoCard/>
      </Grid>
    </Grid>
  )
}

export default HomePage