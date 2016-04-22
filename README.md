# et9001
ETLC big endian version jk lol wtfbbqz

et website


## Admin tasks

### Build the site

This uses Metalsmith and turns the source files into static HTML files and puts them in the `build` dir

    make build

### Deploy the site

This uses Ansible to provision and push the static HTML files to a webserver. requires `~/.ansible-inventory` specifying `extremetoaster` host(s).

    make deploy
