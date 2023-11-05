FROM beevelop/ionic:v2023.10.1

RUN echo "Hello World!"

RUN mkdir /app
COPY . /app
WORKDIR /app

RUN npm i -D -E react-scripts

EXPOSE 8100