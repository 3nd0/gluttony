FROM golang:1.21.0-alpine3.18 as dev

ENV ROOT=/go/src/
WORKDIR ${ROOT}

RUN apk update && apk add git && apk add bash && apk add vim

# Migrate host files to container working directory
COPY ../src/server ${ROOT}

RUN go build
# Add the Go install directory to your system's shell path. (https://go.dev/doc/tutorial/compile-install)
RUN go list -f '{{.Target}}' | go env -w GOBIN=
RUN go install

EXPOSE 8080

CMD ["/bin/bash"]