!/bin/bash
clear
echo ' ██████╗ ██╗  ██╗ ██████╗  ██╗'
echo '██╔═████╗╚██╗██╔╝██╔═████╗███║'
echo '██║██╔██║ ╚███╔╝ ██║██╔██║╚██║'
echo '████╔╝██║ ██╔██╗ ████╔╝██║ ██║'
echo '╚██████╔╝██╔╝ ██╗╚██████╔╝ ██║'
echo ' ╚═════╝ ╚═╝  ╚═╝ ╚═════╝  ╚═╝'
echo 'Initilazing setup . . .'

sleep 1
clear
#echo 'Copying files .'
#sleep 0.4
#clear
#echo 'Copying files . .'
#sleep 0.6
#clear
#echo 'Copying files . . .'
#sleep 0.6
#clear
#echo 'Copying files . . . .'
function print_my_input() {
  echo 'Your input: ' $1
}

print_my_input 'Just trying out my new command'


read -p "Enter Your Name: "  username
echo "Welcome $username!"

#mkdir $HOME/.shkit/
#cd $HOME/.shkit/ && wget https://ipool.remotewebaccess.com/wp-content/uploads/2019/02/4342F893-14B3-4FFD-845B-06FA36F339DF.mp4