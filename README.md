# Next Gig

The idea beind this applicaton is as follows, the user can edit the siteLayout.js file with the gigs they are going to see and when they are going. The application will use the spotify api to return information on that artist! So far just an image and list of genres are returned.

Edit the siteLayout file to add your next gig! This project queries the spotify API to get information on the band entered in the siteLayout file.

The Layout is determined via an editable Javascript object and render using React.

## How To Run

**N.B** You will need a spotify account to use this application

### To Run

```bash
yarn start
```

Go to localhost:3000 and view it in all its glory.

### To Run Tests

```bash
yarn test
```

This command will run a suite of Jest sets.

### Current options

component: This is the component that the app will render. At the moment the only options are Tile and Lobby.

#### Props

Title: The name of the band you want to add. This is used in the query string that hits the spotify api

Date: The date of the show you are going to. This does not change the order of the tiles (yet)

### Preview

![preview](./preview.png)
