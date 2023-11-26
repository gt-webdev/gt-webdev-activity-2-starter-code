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

To run the application, run the following terminal commands after launching Docker:

```shell
docker-compose down
docker-compose build
docker-compose up
```

Code changes will automatically cause the website and server code to reload

## Troubleshooting

If you encounter issues with Docker, try clearing caches:

```shell
docker kill $(docker ps -q)
docker_clean_ps
docker rmi $(docker images -a -q)
```
