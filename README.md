# Welcome to Encyclofreedia!

**[See DevPost](https://devpost.com/software/encyclofreedia)**

### Internet upgrade loading...

Encyclofreedia is a self-hostable, community-driven knowledge base for local resources — think a Reddit-style layout, but organized around topics
and subtopics (Housing, Health, Education, Environment, Organizations, etc.) instead of subreddits. Anyone running an instance can host their own
community's set of resources, forums, and posts.

Built at **TigerHacks 2023**. The idea was to chase some of the original openness of the early web — rather than concentrating a community's
knowledge inside one platform, let anyone spin up their own self-hosted "scribe" of local resources, with the option to federate posts back to a
shared "hub."

## Architecture

The project is split into two Dockerized instance types that share the same stack:

- **`hub/`** — a fuller node with all API endpoints wired up (login, register, posts, comments, topics, subtopics, likes/dislikes).
- **`scribe/`** — a leaner instance stub, intended to represent an individual self-hosted node that can sync into a hub.

Each instance runs three services via `docker-compose`:

- **`encyclofreedia/`** — Ionic React + TypeScript frontend
- **`djangofreedia/`** — Django backend/API
- **`encyclodb/`** — MySQL database

The data model (see `hub/djangofreedia/djangofreedia/models.py`) is built around `Topic` → `Subtopic` → `Post`/`Resource`, with `Comment` and
`Reaction` (upvote/downvote) tables, and an `Instance`/`InstanceTopic` layer meant to support federating topics across multiple self-hosted
instances.

## Status

This is a prototype:
- The frontend UI (topic cards, resource cards, search page, vote buttons) is built and interactive, but currently runs on hardcoded/mock data
rather than live API calls.
- Most Django views (`create_post`, `create_comment`, `like_post`, etc.) are stubbed with comments describing the intended logic but don't yet
read or write the database.
- The federation model (instances syncing shared topics) is represented in the schema but not implemented.

## Stack

- Ionic React, TypeScript
- Django, MySQL
- Docker / docker-compose

Each instance's `Dockerfile.prod` and `apache2.conf` were built to deploy behind Apache on Google Cloud — the hackathon build was live at
`encyclofreedia.wiki`, though that domain isn't running anymore.

## What's next

Continued work would mean finishing the API wiring described in the Status section above, then picking back up the original federation goal —
letting independently-run scribes actually sync topics into a hub. There was also interest in folding this into IndependUS's broader civic-tech
projects.

## Running locally

```bash
cd hub   # or scribe
cp .env.example .env   # set MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, MYSQL_ROOT_PASSWORD
docker-compose up

This starts the MySQL database, the Django API on port 8000, and the Ionic dev server on port 80.
