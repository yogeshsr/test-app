./initialize-android.sh
echo no | android create avd --force -n test -t android-19 --abi armeabi-v7a
emulator -avd test -no-skin -no-audio -no-window &
./android-wait-for-emulator

git clone https://github.com/appium/appium.git
(cd appium && git checkout -b v1.2.1 v1.2.1)
(cd appium && ./reset.sh --verbose --android)
