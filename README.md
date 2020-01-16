## Screenshot

![react-native-simple-boilerplate](/screen/login.png?raw=true "Login Screen")
![react-native-simple-boilerplate](/screen/app.png?raw=true "Dashboard Screen")

## The boilerplate contains

- a [React Native](https://facebook.github.io/react-native/) (v**0.59.9**) application (in "[ejected](https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md)" mode to allow using dependencies that rely on native code)
- a [clear directory layout](#directory-layout) to provide a base architecture for your application
- [Redux](https://redux.js.org/) (v4.0.1) to help manage state
- [Redux Persist](https://github.com/rt2zz/redux-persist) (v5.10.0) to persist the Redux state
- [Redux Sagas](https://redux-saga.js.org) (v1.0.2) to separate side-effects and logic from state and UI logic
- [React Navigation](https://reactnavigation.org/) (v3.6.0) with a [`NavigationService`](App/Services/NavigationService.js) to handle routing and navigation in the app, with a splash screen setup by default
- [reduxsauce](https://github.com/infinitered/reduxsauce) (v1.0.1) to facilitate using Redux
- [axios](https://github.com/axios/axios) to make API calls (v0.19.0)
- [prettier](https://prettier.io/) and [eslint](https://eslint.org/) preconfigured for React Native

The boilerplate includes an example (displaying fake user data) from UI components to the saga. The example is easy to remove so that it doesn't get in the way.

## Directory layout

- [`App/Components`](App/Components): presentational components
- [`App/Containers`](App/Containers): container components, i.e. the application's screens
- [`App/Assets`](App/Assets): assets (image, audio files, ...) used by the application
- [`App/Navigators`](App/Navigators): react navigation navigators 
- [`App/Sagas`](App/Sagas): redux sagas
- [`App/Services`](App/Services): application services, e.g. API clients
- [`App/Stores`](App/Stores): redux [actions, reducers and stores](https://redux.js.org/basics)

For more information on each directory, click the link and read the directory's README.

## Using the boilerplate

To create a new project using the boilerplate:

- clone this repository
- remove the previous git history: `rm -rf .git/`
- install the npm dependencies by running `yarn`
- rename the React Native project to your own project name: `yarn run rename -- <YourProjectName>` (the default name is `Boilerplate`)

## Running the project

Assuming you have all the requirements installed, you can setup and run the project by running:

- `yarn install` to install the dependencies
- `run:android` to run the Android application (remember to start a simulator or connect an Android phone)
- `run:ios` to run the iOS application (remember to start a simulator or connect an iPhone phone)

## Troubleshooting

### App fails to start after renaming

If your applicaiton fails to start after using the `yarn run rename` command, please take a look at [this issue](https://github.com/thecodingmachine/react-native-boilerplate/issues/34)

## Alternative boilerplates

We looked into existing boilerplates before starting this project, and while many of them are awesome, we did not find what we were looking for.

The most popular is [mcnamee's Starter Kit](https://github.com/mcnamee/react-native-starter-kit), which is unfortunately [limited by *Expo*](https://facebook.github.io/react-native/docs/getting-started#caveats) and misses Redux Saga.

If we look at the rest (and ignore unmaintained projects), many popular boilerplates are too opinionated: they include 3rd party services or very strong architecture choices that we are not comfortable with. To name a few: [Snowflake](https://github.com/bartonhammond/snowflake) runs with a Hapi Server running on Redhat OpenShift, [Hasura's boilerplate](https://github.com/hasura/react-native-auth-boilerplate) uses Hasura's SaaS for authentication, [Apollo's StarterKit](https://github.com/sysgears/apollo-universal-starter-kit) is targeted at GraphQL using Apollo, the [Meteor Boilerplate](https://github.com/spencercarli/react-native-meteor-boilerplate) targets Meteor…

Finally some did not contain the architecture we are looking for (the separation of concerns with Redux, Sagas, etc.), for example [re-start](https://github.com/react-everywhere/re-start).

One interesting exception is [Ignite IR Boilerplate "Andross"](https://github.com/infinitered/ignite-ir-boilerplate-andross), but after consideration we decided not to use it because of the large amount of unnecessary code/components it provided.
