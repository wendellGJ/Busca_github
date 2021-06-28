import { Divider, Grid, List, ListItem, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

export default function TableStarred() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center" className={classes.container}>
        <Paper elevation={3} className={classes.paper}>
          <List className={classes.list}>
            <ListItem>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <Typography variant="body2" component="p">
                    Repository name
                  </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs={3}>
                  <Typography variant="body2" component="p">
                    Repository laguage
                  </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs={1}>
                  <Typography variant="body2" component="p">
                    45265
                  </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs={1}>
                  <Typography variant="body2" component="p">
                    1300
                  </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs={2}>
                  <Typography variant="body2" component="p">
                    acessar repo
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
            <Divider variant="inset" component="li" className={classes.divider} />
          </List>
          <List className={classes.list}>
            <ListItem>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <Typography variant="body2" component="p">
                    Repository name
                  </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs={3}>
                  <Typography variant="body2" component="p">
                    Repository laguage
                  </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs={1}>
                  <Typography variant="body2" component="p">
                    45265
                  </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs={1}>
                  <Typography variant="body2" component="p">
                    1300
                  </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs={2}>
                  <Typography variant="body2" component="p">
                    acessar repo
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
            <Divider variant="inset" component="li" className={classes.divider} />
          </List>
          <List className={classes.list}>
            <ListItem>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <Typography variant="body2" component="p">
                    Repository name
                  </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs={3}>
                  <Typography variant="body2" component="p">
                    Repository laguage
                  </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs={1}>
                  <Typography variant="body2" component="p">
                    45265
                  </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs={1}>
                  <Typography variant="body2" component="p">
                    1300
                  </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs={2}>
                  <Typography variant="body2" component="p">
                    acessar repo
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
            <Divider variant="inset" component="li" className={classes.divider} />
          </List>
        </Paper>
      </Grid>
    </div>
  );
}
