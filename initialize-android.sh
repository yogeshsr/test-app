#!/bin/bash

# raise an error if any command fails!
set -e

  # fetch and initialize $ANDROID_HOME
  download-android
  # Use the latest android sdk tools
  echo y | android update sdk --no-ui --filter platform-tools > /dev/null
  echo y | android update sdk --no-ui --filter tools > /dev/null

  # The BuildTools version used by your project
  echo y | android update sdk --no-ui --filter build-tools-21.1.2 --all > /dev/null

  # The SDK version used to compile your project
  echo y | android update sdk --no-ui --filter android-21 > /dev/null

  # Specify at least one system image if you want to run emulator tests
  echo y | android update sdk --no-ui --filter sys-img-armeabi-v7a-android-21 --all > /dev/null

