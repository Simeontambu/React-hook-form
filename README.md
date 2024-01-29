
# Projet avec React Hook Form

Ce projet utilise React Hook Form, une bibliothèque légère et performante pour la gestion des formulaires dans React.

## Installation

1. Clonez ce dépôt de code sur votre machine locale.
2. Assurez-vous d'avoir Node.js installé sur votre machine.
3. Ouvrez une invite de commande dans le répertoire du projet.
4. Exécutez la commande `npm install` pour installer les dépendances nécessaires.

## Utilisation

1. Dans le fichier `App.js`, importez le hook `useForm` depuis la bibliothèque `react-hook-form`.
2. Utilisez la fonction `useForm` pour initialiser le formulaire et obtenir les méthodes et les propriétés nécessaires.
3. Définissez l'état initial du formulaire à l'aide du hook `useState`. Par exemple, dans cet exemple, nous utilisons `useState` pour définir les valeurs initiales des champs `name`, `phone`, `email`, `age` et `gender`.
4. Utilisez les méthodes et les propriétés fournies par `useForm` pour enregistrer les champs, gérer les erreurs de validation et soumettre le formulaire.
5. Définissez une fonction de rappel `onSubmit` pour gérer l'événement de soumission du formulaire. Dans cet exemple, nous affichons simplement les données du formulaire dans la console et affichons une alerte avec le nom saisi.
6. Dans le rendu JSX du composant `App`, utilisez la balise `form` avec l'attribut `onSubmit` défini sur la fonction `handleSubmit` fournie par `useForm`.
7. Pour chaque champ du formulaire, utilisez les méthodes fournies par `useForm` pour enregistrer le champ et spécifier les règles de validation. Par exemple, dans cet exemple, nous utilisons `{...register("name", { required: true })}` pour enregistrer le champ `name` et spécifier qu'il est requis.
8. Utilisez les propriétés `errors` fournies par `useForm` pour afficher les messages d'erreur de validation à côté des champs. Par exemple, dans cet exemple, nous utilisons `{errors.name && <span>erreur</span>}` pour afficher un message d'erreur si le champ `name` est vide.

## Exécution

1. Dans l'invite de commande, exécutez la commande `npm start` pour lancer l'application.
2. Ouvrez votre navigateur et accédez à `http://localhost:3000` pour voir l'application en cours d'exécution.

N'hésitez pas à explorer davantage la documentation de React Hook Form pour en savoir plus sur ses fonctionnalités et ses options avancées.

