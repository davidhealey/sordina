#!/bin/bash

PLUGIN_NAME="Sordina.so"

read -r -p "Would you like to install the plugin with the proprietary IPP library for reduced CPU usage? " ipp

if [[ "$ipp" =~ ^([yY][eE][sS]|[yY])+$ ]]
then
    echo "Please enter the location to install the plugin file."
    read plugin_path

    until [ -d "$plugin_path" ]; do
     echo "The entered path does not exist. Please enter a different path."
     read plugin_path
    done

    cp -i ipp/"$PLUGIN_NAME" "$plugin_path"
else
    echo "The plugin with IPP enabled will not be installed"
    
    read -r -p "Would you like to install the plugin without the IPP library (the FFT analyzer will be disabled)? " noipp

    if [[ "$noipp" =~ ^([yY][eE][sS]|[yY])+$ ]]
    then
        echo "Please enter the location to install the plugin file."
        read plugin_path

        until [ -d "$plugin_path" ]; do
         echo "The entered path does not exist. Please enter a different path."
         read plugin_path
        done

        cp -i no_ipp/"$PLUGIN_NAME" "$plugin_path"
    else
        echo "The plugin will not be installed"
    fi
fi

echo "The software installation is complete."
