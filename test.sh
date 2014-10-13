git clone https://github.com/appium/appium.git
cd appium && ./reset.sh --android
sh initialize-android.sh
echo no | android create avd --force -n test -t android-19 --abi armeabi-v7a
emulator -avd test -no-skin -no-audio -no-window &
sh android-wait-for-emulator

cd appium && node . &
cd test && npm install mocha chai chai-as-promised colors underscore wd
cd test && mocha android-simple.js