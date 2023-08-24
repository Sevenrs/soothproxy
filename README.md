# Robot fighting game authentication proxy
This repository contains a simple network server that acts as a proxy in between you and a robot fighting game authentication server.\
The difference between a normal connection and a connection here is that we do not listen to disconnects from the upstream server.

## How to use
1. Install NodeJS (`sudo apt update & sudo apt install nodejs` | `sudo pacman -Sy nodejs`)
2. Run `npm i` to install all the dependencies required to run this application properly
3. Run `npm run proxy` to start running the proxy
4. Change `[login]` to point to `127.0.0.1` in `patch.ini`
5. Make sure that the `UPSTREAM_SERVER` value matches the one from `patch.ini`
6. Have fun. The proxy will now relay for you and if you're on Linux, you won't crash.

## Note
You can also just ask the owner of the robot fighting game server to enable a flag for your account. This repository effectively does the same thing, but is not really needed.

Mostly did this for fun.
