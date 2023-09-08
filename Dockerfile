FROM golang:1.21.0-alpine3.18 as dev

ENV ROOT=/src/app
WORKDIR ${ROOT}

RUN apk update && apk add git && apk add bash && apk add vim

# Migrate host files to container working directory
COPY ./src/server ${ROOT}
EXPOSE 8080

CMD ["go", "run", "main.go"]


# FROM golang:1.15.7-alpine as builder

# ENV ROOT=/go/src/app
# WORKDIR ${ROOT}

# RUN apk update && apk add git
# COPY go.mod go.sum ./
# RUN go mod download

# COPY . ${ROOT}
# RUN CGO_ENABLED=0 GOOS=linux go build -o $ROOT/binary


# FROM scratch as prod

# ENV ROOT=/go/src/app
# WORKDIR ${ROOT}
# COPY --from=builder ${ROOT}/binary ${ROOT}

# EXPOSE 8080
# CMD ["/go/src/app/binary"]