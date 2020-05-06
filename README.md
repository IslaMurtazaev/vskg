# VS.kg
Open source web application to make comparisons between whatever you want

## 📦 Backend Installation instructions

### Ubuntu and Ubuntu-based

1. Install prerequisites for Python build:
  ```bash 
  sudo apt-get update
  sudo apt-get install --no-install-recommends make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev
  ```
1. Install pyenv: https://github.com/pyenv/pyenv#basic-github-checkout
1. Install Python: `pyenv install 3.7.4`
1. Install pyenv-virtualenv: https://github.com/pyenv/pyenv-virtualenv
1. Create virtualenv while in project directory: `pyenv virtualenv 3.7.4 vs-api-venv`
   
   * Virtualenv name `vs-api-venv` is important because `.python-version` also points to it. 
   It is needed for virtualenv to be activated automatically when you enter project directory 
   and deactivated when you leave.

### ⚙️ Running dev server
Install prerequisites if using MySQL:
```
sudo apt-get install python3-dev default-libmysqlclient-dev
```

In activated virtualenv install requirements:
```
pip install -r requirements.txt
```

Create new database in mysql and provide its credentials as environment variables
```angular2html
> CREATE DATABASE DATABASE_NAME CHARACTER SET utf8
```

```
MYSQL_ROOT_PASSWORD
MYSQL_DATABASE
MYSQL_USER
MYSQL_PASSWORD
MYSQL_HOST
MYSQL_PORT
```

Then run migrations:
```
./manage.py migrate
```

Seed fixtures:
```
./manage.py loaddata data.json
```

This will create a super user with username `admin` and password `Password123`

Run the backend dev server:
```
./manage.py runserver
```


### 🔨 Running tests

```
./manage.py test
```
&nbsp;

## 📦 Frontend Installation instructions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### ⚙️`yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### 🔨 `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
