FROM golang:1.21.0-alpine3.18 as dev

ENV ROOT=/src/app
WORKDIR ${ROOT}

RUN apk update && apk add git && apk add bash && apk add vim

# Migrate host files to container working directory
COPY ./src/server ${ROOT}
EXPOSE 8080

CMD ["go", "run", "main.go"]