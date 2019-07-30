# GNU BUILD SCRIPT

project=Sordina
version=1.1.1
xmlFile=sordina
workspace=/media/john/SHARED/HISEProjects/Effects/Sordina/HISE

build_plugin=1
build_installer=1

hise_path=/media/john/SHARED/HISE/projects/standalone/Builds/LinuxMakefile/build/HISE\ Standalone
projucer_path=/media/john/SHARED/HISE/tools/projucer/Projucer
makeself=/media/john/SHARED/makeself

#Create temp directory for packaging
package="$workspace"/Packaging/GNU/temp
mkdir -p "$package"

mkdir -p "$workspace"/Binaries
cd "$workspace"/Binaries

# STEP 1: BUILDING THE BINARIES
# ====================================================================
if (($build_plugin == 1))
then

  "$hise_path" set_project_folder -p:"$workspace"
  "$hise_path" set_version -v:$version

  echo Making the Projucer accessible for this project
  chmod +x "$projucer_path"

  if (($build_plugin==1))
  then
    echo Building the plugins
    echo With IPP
    "$hise_path" clean -p:"$workspace" --all
    "$hise_path" export_ci XmlPresetBackups/$xmlFile.xml -t:effect -p:VST -a:x86x64 -ipp
    chmod +x "$workspace"/Binaries/batchCompileLinux.sh
    sh "$workspace"/Binaries/batchCompileLinux.sh
    cp "$workspace"/Binaries/Builds/LinuxMakefile/build/"$project".so "$package"
    
    echo Without IPP
    "$hise_path" clean -p:"$workspace" --all
    "$hise_path" export_ci XmlPresetBackups/$xmlFile.xml -t:effect -p:VST -a:x86x64
    chmod +x "$workspace"/Binaries/batchCompileLinux.sh
    sh "$workspace"/Binaries/batchCompileLinux.sh
    cp "$workspace"/Binaries/Builds/LinuxMakefile/build/"$project"_no_ipp.so "$package"
  fi
fi

# STEP 2: BUILDING INSTALLER
# ====================================================================

if (($build_installer==1))
then
  echo "Build Installer"

  cp "$workspace"/License.txt "$package"
  cp "$workspace"/Packaging/GNU/GNUInstaller.sh "$package"

  #Run makeself
  sh "$makeself"/makeself.sh --license "$workspace"/License.txt "$workspace"/Packaging/GNU/temp "$workspace"/Installer/"$project"\ $version.sh "$project" ./GNUInstaller.sh

else
  echo "Skip Building Installer"
fi

echo Cleanup
cd "$workspace"
rm -rf "$workspace"/Packaging/GNU/temp
