# BOTS authentication proxy
This repository contains a simple network server that acts as a proxy in between you and a BOTS authentication server.\
The difference between a normal connection and a connection here is that we do not listen to disconnects from the upstream server.

## How to use
1. Install NodeJS (`sudo apt update & sudo apt install nodejs` | `sudo pacman -Sy nodejs`)
2. Run `npm i` to install all the dependencies required to run this application properly
3. Run `npm run proxy` to start running the proxy
4. Change `[login]` to point to `127.0.0.1` in `patch.ini`
5. Make sure that the `UPSTREAM_SERVER` value matches the one from `patch.ini`
6. Have fun. The proxy will now relay for you and if you're on Linux, you won't crash.

## Note
You can also just ask the owner of the Bots server to enable a flag for your account. This repository effectively does the same thing, but is not really needed.

Mostly did this for fun.

## Hosted version
I am thinking about hosting this on a spare server that I have so all you would have to do is change the login IP address to the hosted proxy. Since I'm still unsure whether I should (not everyone thinks I'm the nicest guy because in theory this could be used in a bad way), I haven't done it yet.