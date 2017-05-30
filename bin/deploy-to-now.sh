#!/usr/bin/env bash

npm install -g now

now deploy --token=$NOW_TOKEN
now alias --token=$NOW_TOKEN
