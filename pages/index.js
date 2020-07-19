import Head from 'next/head'
import Navigation from './Navigation'
import { Fragment, useState} from 'react'

import { Icon } from "@rmwc/icon";
import { Grid, GridCell} from "@rmwc/grid";
import { Typography } from "@rmwc/typography";
import { Button } from "@rmwc/button";
import { List, ListItem} from "@rmwc/list";
import { Drawer, DrawerHeader, DrawerTitle, DrawerSubtitle, DrawerContent } from "@rmwc/drawer";

import './css';

function Example() {
  const [navigationModalVisibility, setNavigationModalVisibility] = useState(false);

  return (
    <>
      {/** Make the drawer appear right-to-left */}
      <Drawer
        dir="rtl"
        modal
        open={navigationModalVisibility}
        onClose={() => setNavigationModalVisibility(false)}
      >
        {/** Set the content back to left-to-right */}
        <DrawerHeader dir="ltr">
          <DrawerTitle>Menu</DrawerTitle>
          <DrawerSubtitle>More items to explore</DrawerSubtitle>
        </DrawerHeader>

        <DrawerContent dir="ltr">
          <List>
            <ListItem>Projects</ListItem>
            <ListItem>Blogs</ListItem>
            <ListItem>About</ListItem>
          </List>
        </DrawerContent>
      </Drawer>

      <Button raised label="Explore More" onClick={() => setNavigationModalVisibility(true)}/>
    </>
  );
}

function Home() {
  return (
    <div className="container mdc-theme--background">
      <Head>
        <title>Miaoxin Wang</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <Fragment>
          {/* <Navigation/> */}
          <Example/>
        </Fragment>

        <Grid>
          <GridCell span={12}>
            <Typography use="headline1">
              Miaoxin Wang
            </Typography>
          </GridCell>
          
          <GridCell span={12}>
            <Typography use="overline">
              Reliable, innovative, and hands-on UX endeavor. Loves to facilitate people's daily routine and design for mundane to sublime. Current research interests cover affective computing, CSCW, and humane technology for a better life.
            </Typography>
          </GridCell>
        </Grid>
      </main>

      <footer>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
};

export default Home
