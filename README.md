# et9001

[![Greenkeeper badge](https://badges.greenkeeper.io/insanity54/et9001.svg)](https://greenkeeper.io/)

ETLC big endian version jk lol wtfbbqz

et website


## Admin tasks

### Build the site

This uses Metalsmith and turns the source files into static HTML files and puts them in the `build` dir

    make build

### Deploy the site

This uses Ansible to provision and push the static HTML files to a webserver. requires `~/.ansible-inventory` specifying `extremetoaster` host(s).

    make deploy
