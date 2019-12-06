# reviewerator

Generate staff, manager, and position-specific performance review charts like never before.

A React project, bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1. [Development Workflow](#development-workflow)
1. [Editing Review Criteria](#editing-review-criteria)
1. [Making a Review](#making-and-exporting-a-review)

## Development Workflow

Install dependencies:

```
npm install
```

Start the development server:

```sh
npm start
```

> Starts the app in development mode at [http://localhost:3000](http://localhost:3000) with hot reloading enabled

## Editing Review Criteria

Review criteria are composed of 2 axes: **performance categories** and **performance levels**.

**Categories** are grouped into skill profiles according to the role of the employee being reviewed. All categories are scored against the same set of **levels**.

All of these axes live in the `src/data` directory of the app, like so:

```
|src
|--data
|----index.js
|----levels.js
|----manager.js
|----staff.js
```

### To add, remove, or rename categories/levels:

You may simply change the contents of any file to see the changes reflected in the application's interface.

> :warning: Be sure to follow the existing data structure in the file you're editing.

### To create a role:

1. Create a file at `src/data/newRole.js`, using the following shape:

   ```js
   const newRole = {
     skillName: {
       displayText: 'Skill Name',
       level: 1,
     }
     ...
   };
   ```

1. Import it in `src/data/index.js`
1. Add it as an option in `src/data/roleOptions.js`
1. Import it in `src/components/Chart/index.js`
1. Add it to the `resetContext` function in `src/components/Chart/index.js`:
   ```js
   ...
   } else if (newContextName === 'newRole') {
     newContext = { ...newRole, };
   }
   ```
1. If you want it to become the default role (the one shown when the application loads), import it in `src/components/viewContext.js`

## Making and Exporting a Review

### To set a skill level

Along the axis of the skill, click within the desired level range

![Setting A Skill Level](/public/tutorial/set-a-skill-level.gif 'Setting a Skill Level')

### To change the skills profile

Click on the current profile name in the chart title (default is "Manager") to reveal a dropdown of options

![Change the Skills Profile](/public/tutorial/change-skills-profile.gif 'Change the Skills Profile')

### To clear the matrix

Refresh the page

### To export the chart

You have two options:

#### Take a screenshot

Super quick, but not scalable.

#### Print the page to a PDF

Also quick, and gives you a nice vector PDF file. Has a few steps, though:

1. Press `CMD+P` to summon the print dialogue
1. Select "Destination > Save as PDF"
1. Select "Margins > None"
1. If in Chrome, click "More Settings", and select tick "Options > Background graphics"
1. Depending on the size of the chart, you may need to decrease the scale to fit it with its intended proportions. 70 usually works.

![Printing the Chart](/public/tutorial/printing.gif 'Printing the Chart')

> Printing to a PDF leaves a sizable amount of whitespace around the chart. If you don't feel like cropping, just take a screenshot.
