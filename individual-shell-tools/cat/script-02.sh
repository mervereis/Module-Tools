#!/bin/bash

set -euo pipefail

# TODO: Write a command to output the contents of all of the files inside the helper-files directory to the terminal.
# Make sure you are only calling `cat` once.
#
# The output of this command should be:
# Once upon a time...
# There was a house made of gingerbread.
# It looked delicious.
# I was tempted to take a bite of it.
# But this seemed like a bad idea...


cat > helper-2.txt
There was a house made of gingerbread.
cat > helper-3.txt
It looked delicious.
 cat > helper-4.txt
I was tempted to take a bite of it.
 cat >helper-5.txt
But this seemed like a bad idea...
helper-files % cd ..
 % cat helper-files/*
There was a house made of gingerbread.It looked delicious.
I was tempted to take a bite of it.
But this seemed like a bad idea...