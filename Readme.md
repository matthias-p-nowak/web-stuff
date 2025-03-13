# Setup

## running https

Take a look at [your own CA post](https://mefju7.priv.no/blog/posts/own_ca/) and create a local certificate. Edit the *cnf* files before running make (maybe under WSL or somewhere else).

In Visual Studio Code, set *Live Server > Settings: Host* to "localhost", since the IP address seems to cause trouble. Under Https (the following section), turn on https with enable=true, under cert and key, enter the paths of the web.crt and the web.key file. Press OK every time, otherwise VSCode resets the field.

