# Goldener Adler UI

## Run & Build

The 

## Scaleway Object Bucket

Set up rclone for scw access:
```shell
  rclone config
```

Build for staging or production environment:
```shell
  npm run build:stg
```
```shell
  npm run build:prod
```

Manually sync build files to bucket:
```shell
  rclone sync ./dist <config-name>:<bucket-name>
```
