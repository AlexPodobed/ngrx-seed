#!/bin/bash
display_usage() {
	echo -e "Usage:\n ./deploy.sh [stage]"
	}
	# if less than two arguments supplied, display usage
	if [  $# -le 0 ]
	then
		display_usage
		exit 1
	fi
# check whether user had supplied -h or --help . If yes display usage
	if [[ ( $# == "--help") ||  $# == "-h" ]]
		then
			display_usage
			exit 0
		fi
    if [ $1 == stage ]
    	then
    		REMOTE_HOST=""
    		REMOTE_USERNAME=""
    		BUILD_COMMAND="build-stage"
    		SLACK_MESSAGE="Deployed on Dev server"
    elif [ $1 == prod ]
    	then
    		REMOTE_HOST=""
    		REMOTE_USERNAME=""
    		BUILD_COMMAND="build"
        SLACK_MESSAGE="Deployed on Prod server"
    else
    	echo -e "This stage is not set"
    	exit 1
    fi

# Local build webpack
npm run $BUILD_COMMAND
cd dist
tar cf ../build.tar.gz --exclude='*.map' ./
cd ../
#Upload webpack to server
scp build.tar.gz $REMOTE_USERNAME@$REMOTE_HOST:/tmp/

#Deploy Webpack
ssh -tt $REMOTE_USERNAME@$REMOTE_HOST << EOF
cd /var/www/ubs-web/
sudo rm -r *
sudo tar xf /tmp/build.tar.gz
sudo rm -rf /tmp/build.tar.gz
exit
EOF

rm -rf build.tar.gz || true


#Slack notification
#curl -X POST --data-urlencode "payload={\"channel\": \"#general\", \"username\": \"WEB:DEPLOY\", \"text\": \"$SLACK_MESSAGE.\", \"icon_emoji\": \":rocket:\"}" https://hooks.slack.com/services/put_id_here
