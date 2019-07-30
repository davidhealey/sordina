#!/bin/bash

PLUGIN_NAME="Sordina.so"
NOIPP_PLUGIN_NAME="Sordina_no_ipp.so"

read -r -p "Would you like to install the plugin with the proprietary IPP library? " ipp

if [[ "$ipp" =~ ^([yY][eE][sS]|[yY])+$ ]]
then
    echo "Please enter the location to install the plugin file."
    read plugin_path

    until [ -d "$plugin_path" ]; do
     echo "The entered path does not exist. Please enter a different path."
     read plugin_path
    done

    cp -i "$PLUGIN_NAME" "$plugin_path"
else
    echo "The IPP enabled plugin will not be installed"
fi

read -r -p "Would you like to install the plugin without the proprietary IPP library? (the FFT analyzer will be unavailable) " noipp

if [[ "$noipp" =~ ^([yY][eE][sS]|[yY])+$ ]]
then
    echo "Please enter the location to install the plugin file."
    read plugin_path

    until [ -d "$plugin_path" ]; do
     echo "The entered path does not exist. Please enter a different path."
     read plugin_path
    done

    cp -i "$NOIPPPLUGIN_NAME" "$plugin_path"
else
    echo "The plugin will not be installed"
fi

echo "The software installation is complete."