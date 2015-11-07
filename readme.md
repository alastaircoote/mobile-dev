Mobile Dev Session
==================

To get started, install [Node](http://nodejs.org) and [Git](http://git-scm.com) (or just download the ZIP file of this repository).

Open your Terminal or Command Prompt and run:

    git clone git@github.com:alastaircoote/mobile-dev.git

Then run:

    npm install -g browser-sync

Now run:

    cd mobile-dev
    browser-sync start --server --files '**/*'

Provided that your phone is connected to the same wi-fi network as your laptop, you should be able to connect to your laptop via the IP address logged by `browser-sync`.
