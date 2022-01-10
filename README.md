# styleguide

** In development - please be aware there may be bugs!! **

The boilerplate structure is based off the tutorial used here:
https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/

and here:
https://medium.com/@dtkatz/use-the-blazing-fast-parcel-bundler-to-build-and-test-a-react-app-e6972a2587e1

This project installs Jest as well, but doesn't include any tests yet. Winston is installed with the Express server for better error messaging.
The client does not include Redux or other state management frameworks since React Hooks and Context allow us to forego that.

You must have Node and npm installed globally on your system. This project uses Node version 11.4.

To INSTALL the project:
navigate to project directory main folder where you can see the api and client folders. The Express server and React client files share the same package.json file.

command line:

$ npm install

(if you want to use prettier code formatter make sure the code below is in your package.json file. )

Put the following into your package.json (add format line to scripts if scripts parameter is already in there):
"scripts": {
"format": "prettier --write \"src/\*_/_.{js,jsx}\"",
},

## Development:

Parcel is used to host a client page server on localhost for development. It's easier and cleaner than using something like createreactapp and will package everything for production, unlike nodemon. It's run as described below on the command line for the client.

To RUN the project in development you must start the server AND the client in 2 terminal windows:

terminal 1:
npm run dev

Make sure you have git installed globally. Use this window for git pushes to bitbucket. Please create a new branch whenever editing, and push that branch. Repo Administrator will do the merge.
Handy cheat sheet: https://www.keycdn.com/blog/git-cheat-sheet#commands-for-git-branching

## Test: (no tests currently set up so will have errors)

npm run test

#############################################

---- Notes -----

How to create a new web section or component

1. Use an example component. Key Features is good for one with no external JS and has editable images, InPageNav is a simple one with JS, FAQs is a good one for JS and changing height.
2. In client/src/Website/sections create a folder starting with "S\_" and ending with the section name in pascalcase.
3. In that folder, create an index.js.
4. Start coding. The menu and the rest of the app will pull in what it needs if you have the right settings in your code.
5. Always start with "import React, {useContext, useEffect} from 'react';" on the first line. Note that you might need to add more react methods later in those brackets, like "useState".
6. Next line is your function that creates the react component. It should be named the same as the folder. Ie "const S_KeyFeature = () => { };"
7. Inside the function, call appState by adding: "const { appState, setAppState } = useContext(AppContext);"
8. Next line, add a useEffect hook by writing "useEffect(() => {},[]);". Copy the settings from a similar section's useEffect and change the values accordingly.
   a. CurrentPath should be "/ui/" with the section title in lowercase and hyphenated if more than one word, ex: "/ui/key-feature"
   b. Scripts is an array of strings that contains the names of any interaction js files needed for the flat html version. The first one should always be "../rexusManager.component.js", then any others. Those script files should be in the same folder as your component, so no path needed.
   \*You can leave this array empty until you are finished creating the react version of your section, and are ready to save it as html.
   c. "htmlSaved" setting: set this to false until after you have saved html for the first time. IF YOU GET ERRORS WHEN YOU VIEW FOR THE FIRST TIME, THIS IS PROBABLY SET WRONG.
   d. Fields are the label and default content for any editable fields in your section. Put the text you want to appear at first here.
   e. Specs are the pretty much same as old specs, just moved here. Fill out specs for any areas that you like; they will be automatically added.
9. Add a line of code after all your useContext, useEffect, etc, for a loading blurb. "if (!appState.fields) return "...Loading Key Feature";" This will be skipped and then run the line after it when the section is ready.
10. Add "return ();" . Your jsx goes inside there. Copy the source from the old section html and paste it in here. Then edit accordingly.
11. After the closing brace for your react component function, add "export default {};". Use the entries from another section as an example of how to add the values there. These help build the flat html, menu, links and more around the app.
12. Test in browser. If you see errors in the browser (not just console) you may have to restart localhost/node server. Ctrl + c, then npm run dev (or npm run dev-react if you don't need to save the html.)
    Testing tip: If you see console errors with 'set error boundary', you probably need to change something you have in an "onClick={}" to be an arrow function inside those brackets. Old or empty style tags are also a common error that VScode and linting won't catch.
13. If it works after testing, click Save HTML button in browser. In your code, CHANGE "htmlSaved" PARAMETER in useEffect to "true" or you won't be able to see the html.
14. After you save as html, a folder will appear in "public/static". It will be the name you gave the "htmlName" property in your export default in the section js. You don't need to do anything to this folder.
15. If you need to add external js to make any part of the section work, as in the carousel action of the In Page Nav, simply add the js file to the "S_InPageNav" module folder (for example) and the file name ("InPageNav.component.js")to the scripts array in the setAppState of that component. Script tags and "src" will automatically be added to the html code and the correct folders for sending to other teams, and the js file will be copied there as well.
16. If you need to import the Rexus manager js for your section as well, just add "../rexusManager.component.js" to the scripts array. It's already in the correct place to work with your html version.

## Production:

(currently azure server is on a private account)

1. Stop any local servers you have running. (CTRL + C)
2. Delete the cache and dist folders in your workspace.
3. Type "npm run build" (no actual quotes though) in the command line in your terminal, hit return.
4. Open the folder where you have git cloned the azure repo locally on your hard drive. Permissions for the azure server must be provided by the owner and steps to set that up are beyond the scope of this doc.
5. Delete the contents of the "\_react" folder.
6. Take the contents of the newly created dist folder, from your workspace, and put them in the "\_react" folder.
7. That's it. It may take a few mins for the site at https://sg2.azurewebsites.net/ to update.
8. Parcel outputs a detailed report in the console, and is set to use a bundle analyzer. Go to this url https://bundle-buddy.com/ and upload the required files from your dist folder to see what files and node modules file sizes are. The setting to output a bundle-buddy file are in package.json as a reporter on the build script and can be removed there. \*Instructions are here: https://parceljs.org/features/production/
