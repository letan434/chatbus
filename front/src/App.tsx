import React, { useState, useEffect } from "react";
import {
  Container,
  CssBaseline,
  Grid,
  makeStyles,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Send as SendIcon } from "@material-ui/icons";
import red from "@material-ui/core/colors/red";

interface Props {}
const useStyles = makeStyles((theme) => ({
  list: {
    backgroundColor: theme.palette.grey[500],
  },
}));
interface Bus {
  name: string;
  selected: boolean;
}
interface Hitchhiker {
  name: string;
}

const App: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [chatBus, setChatBus] = useState<Bus[]>([]);
  const [hitchhikers, setHitchhikers] = useState<Hitchhiker[]>([]);

  useEffect(() => {
    setChatBus([
      { name: "tan", selected: false },
      { name: "baka", selected: false },
      { name: "ID", selected: true },
    ]);
    setHitchhikers([
      { name: "user01" },
      { name: "user02" },
      { name: "user03" },
    ]);
  }, [props]);
  return (
    <Container component="main" maxWidth="xl">
      <CssBaseline />
      <Grid container spacing={3}>
        <Grid item xs={3} className={classes.list}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                <SendIcon />
                Chatbus
              </ListSubheader>
            }
          >
            {chatBus.map((bus) => (
              <ListItem button>
                <ListItemText primary={bus.name} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={6}>
          Main
        </Grid>
        <Grid item xs={3} className={classes.list}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                <SendIcon />
                hitchhikers
              </ListSubheader>
            }
          >
            {hitchhikers.map((h) => (
              <ListItem button>
                <ListItemText primary={h.name} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
