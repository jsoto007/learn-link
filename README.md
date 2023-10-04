# learn-link
For front-end setup
- run in terminal: `npm install``
- then run `npm run dev`` to start the front-end server

For back-end setup
- run in a new terminal: `pipenv install && pipenv shell``

In the server folder:
- `export FLASK_APP-app.py`
- `export FLASK_RUN_PORT=5555`

- `flask db init` to create initial db setup

- `flask db revision --autogenerate -m 'message here!'`
- `flask db upgrade head`

Run app.py to start the back-end server! ^_^
