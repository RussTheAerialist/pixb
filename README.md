# pixb

## Usage

Create a file called .env in the directory where you will be running the
script from.  It should contain the following:

```
LISTEN_PORT=8000
LED_PIN=6
LED_COUNT=8
```

Change the values to suit your board. And then run `npm start`

## Triggering effects

It's all done by hitting urls, which makes it easy to trigger from things like
reveal.js.

### Supported Effects

* `/glitter` - A sparkly, glittery effect
* `/blink-test` - Blink all the leds on and off at 2hz
* `/rainbow` - Rainbow across the leds
* `/` - turn off effects

### Cylinder Spiral Effect

The `/rainbow` endpoint has a special mode that is enabled by adding
`COLUMN_LENGTH` and `ROW_COUNT` to the `.env` file.  This will cause the
leds to spiral down a cylinder.  This is a special case for a specific
project I'm working on.

*This hasn't been tested yet because I'm still developing the device*

