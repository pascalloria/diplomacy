Projet de site  Soluce pour le jeu "Diplomacy is not an Option".


    Le site devra permettre aux admin d'ajouter , modifier et supprimer les articles
    
    Les utilisateurs quand a eux ne pourront que les consulter.



    A faire :                     
        - Responsive design
            - ajout d'un bouton type "hamburger" dans la navbar pour la gestion des petits ecran" - ok
            -  reduire la taille du titre
        - Redigé la page Contact
        - Remplacer les rechargement de page par une fonction de mise a jour interne a react.
        - Gerer les props  via Context (mini redux)
       
        
        


    Fait :         
        - Ajouter une gestion admin
        - Ajouté commentaire
        - Ajouter un éditeur dans la textarea
        - Permetre aux utilisateur non logger de poster un commentaire et d'y inserer un nom. 
        - Modération des commentaires
        - Permettre d'ajouter des images au articles - OK ( le serveur refuse les images trop grosse )
            - Ajout d'une limitation de 2 MB pour la taille de l'image *
            - regler la limite autorisé en fetch (POST / PUT) à 20 MB
                - modification :
                    app.use (bodyParser.json({limit: '20mb'}));  // midlleware
                - ajout de la ligne :                 
                    app.use(bodyParser.urlencoded({limit: '20mb', extended: true}));
        - Redimensionner et centrer les images ( Ajout d'une regle CSS .content img )



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
