# Backend

This is backend for "versus.kg" application

# Installation instructions

## Ubuntu and Ubuntu-based

### Python

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

# Running dev server

In activated virtualenv install requirements:
```
pip install -r requirements.txt
```

Create new database in mysql and provide its credentials as environment variables
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


# Running tests

```
./manage.py test
```
