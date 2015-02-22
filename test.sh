./initialize-android.sh

echo no | android create avd --force -n test -t android-21 --abi armeabi-v7a

emulator -avd test -no-skin -no-audio -no-window &

wget https://github.com/selendroid/selendroid/releases/download/0.14.0/selendroid-standalone-0.14.0-with-dependencies.jar

pip install selenium

wget -O Garner-debug.apk https://www.dropbox.com/s/nwjfywczan66gni/Garner-debug.apk?dl=0 Garner-debug.apk

./android-wait-for-emulator

adb shell input keyevent 82 &

java -jar selendroid-standalone-0.14.0-with-dependencies.jar -app Garner-debug.apk >a.log 2>&1