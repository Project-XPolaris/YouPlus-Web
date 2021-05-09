echo install youplus web service
workdir=$(pwd)
sed "s|YMWorkDir|$workdir|g" service_template > YouPlusWeb.service
mv "$workdir/YouPlusWeb.service" "/etc/systemd/system/YouPlusWeb.service"
systemctl daemon-reload
