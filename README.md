# Nutshell: The Information Dashboard

## Setup: Follow these steps exactly

1. Clone this repository
1. `cd` into the directory it creates
1. Make a `database.json` file in the `api` directory
1. Delete the `.ignore` file in the `api` directory
1. Paste the following into your `database.json` file

```json
{
    "users": [],
    "articles": [],
    "events": [],
    "friends": [],
    "tasks": [],
    "messages": []
}
```

> **Note:** Your `database.json` file is already in the `.gitignore` file for this project, so it will never be added to the repo or pushed to Github.

> **Note:** No authentication is in place. Do not put any important data on this app.

## Summary

* Chat with friends
* Create a todo list
* Save news articles
* Plan events