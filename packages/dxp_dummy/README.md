# DXP Dummy

DXP Dummy provides a script to generate dummy data for a site based on vital packages.

### Setup

add DXP Dummy as dev dependency to the site package.json and the script definition inside the scripts section

```json
  "scripts": {
    "generate-content": "generate-dummy-content",
  },
  devDependencies: {
    "@dxp/dummy": "^0.0.0"
  }
```
### Usage
THe script is available as command `generate-dummy-content`, it accepts 4 arguments that can be provided as script argument or environment variable set by the file .env.site

### Number of pages to generate
The number of pages to generate can be defined by the argument `--numberOfPages` or `--number-of-pages`, if the argument is not provided, the environment variable `process.env.DXP_GENERATED_CONTENT_NUMBER_OF_PAGES`. If neither the environment variable is provided, the default value is `10`.

### Destination
The destination argument defines the destination path where to save the generated JSON.
It can be provided as argument `--destination`, if the argument is not provided, the environment variable `process.env.DXP_GENERATED_CONTENT_DESTINATION`. If neither the environment variable is provided, the default value is `./src/data`.
The path can be provided as relative from the directory where the script is run or as absolute.

### Static Path
The Static path argument defines the destination path for the downloaded image.
It can be provided as argument `--static-path` or `--staticPath`, if the argument is not provided, the environment variable `process.env.BODILESS_BACKEND_STATIC_PATH`. If neither the environment variable is provided, the default value is `./static`.
The path can be provided as relative from the directory where the script is run or as absolute. For usage with a NextJS file, it must be set to `./public` 

### Clear Data
The Clear data argument defines if the script must remove the content of `pages` destination, the content of `images` directory within the static directory and the JSON files defining the menus in header and footer.
It can be provided as argument `--clear-data` or `--clearData`, if the argument is not provided, the environment variable `process.env.BODILESS_BACKEND_CLEAR_DATA`. If neither the environment variable is provided, the default value is `true`.
