./initialize-android.sh
echo no | android create avd --force -n test -t android-19 --abi armeabi-v7a
emulator -avd test -no-skin -no-audio -no-window &

#git clone https://github.com/appium/appium.git
#(cd appium && git checkout -b v1.2.1 v1.2.1)
#(cd appium && ./reset.sh --verbose --android)

#./android-wait-for-emulator

#adb emu kill #to stop
# dump & exist # clear # time
# adb logcat -d > logcat.txt # -c # -v time



#https://www.centos.org/docs/5/html/Deployment_Guide-en-US/s1-rpm-using.html

wget http://downloads.onrooby.com/chromium/rpms/chromium-31.0.1650.63-1.el6.x86_64.rpm
echo y | sudo yum install pciutils-libs libcanberra-gtk2
sudo rpm -Uvh chromium-31.0.1650.63-1.el6.x86_64.rpm

npm install appium --silent
#appium --chromedriver-executable /opt/chromium-browser/chromedriver >> a.log &

