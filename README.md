# gt-webdev-activity-2-starter-code

## Requirements

Install the following software:

- [Docker](https://www.docker.com/get-started/)
    - To run the application
- [VSCode](https://code.visualstudio.com/download)
    - To view and edit this code

## Get Started

To get started, download this code to your machine

## Run the Application

To run the application, launch Docker (by opening the app) and run the following terminal commands:

```shell
docker-compose down
docker-compose build
docker-compose up
```

When you run these commands, you will need to be in the `gt-webdev-activity-2-starter-code` directory.

If you get an error that says, "docker-compose: command not found", you may have to run the following commands instead:
```shell
docker compose down
docker compose build
docker compose up
```

If you get an error that says, "permission denied", you may need to run the commands using "sudo" (if you are on Mac or Linux). In other words, the following commands:
```shell
docker-compose down
sudo docker-compose build
sudo docker-compose up
```

The React application should then be hosted on `http://localhost:3000`, which you can see in your browser. Code changes will automatically cause the website and server code to reload

## Troubleshooting

If you encounter issues with Docker, try clearing caches:

```shell
docker kill $(docker ps -q)
docker_clean_ps
docker rmi $(docker images -a -q)
```
