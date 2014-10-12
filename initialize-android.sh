#!/bin/bash

# raise an error if any command fails!
set -e

INITIALIZATION_FILE="$ANDROID_HOME/.initialized-dependencies"

if [ ! -e ${INITIALIZATION_FILE} ]; then
  # fetch and initialize $ANDROID_HOME
  download-android
  # Use the latest android sdk tools
  echo y | android update sdk --no-ui --filter platform-tools > /dev/null
  echo y | android update sdk --no-ui --filter tools > /dev/null

  # The BuildTools version used by your project
  echo y | android update sdk --no-ui --filter build-tools-20.0.0 --all > /dev/null

  # The SDK version used to compile your project
  echo y | android update sdk --no-ui --filter android-18 > /dev/null

  # Specify at least one system image if you want to run emulator tests
  echo y | android update sdk --no-ui --filter sys-img-armeabi-v7a-android-19 --all > /dev/null

  echo no | android create avd --force -n test -t android-19 --abi armeabi-v7a

  emulator -avd test -no-skin -no-audio -no-window &

  touch ${INITIALIZATION_FILE}
fi
