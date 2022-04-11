# GNU BUILD SCRIPT

project=Sordina
xmlFile=sordina
version=1.0.1
workspace=/mnt/samba/projects/Effects/Sordina/HISE

build_ipp=0
build_no_ipp=0
build_installer=1

hise_path=/mnt/samba/hise_builds/HISE/projects/standalone/Builds/LinuxMakefile/build/HISE\ Standalone
projucer_path=/mnt/samba/hise_builds/HISE/tools/projucer/Projucer
makeself="$workspace"/Packaging/GNU/makeself

#Create temp directory for packaging
package="$workspace"/Packaging/GNU/temp
mkdir -p "$package"
mkdir -p "$package"/ipp
mkdir -p "$package"/no_ipp

# STEP 1: BUILDING THE BINARIES
# ====================================================================
if (($build_ipp == 1 || $build_no_ipp == 1))
then

  "$hise_path" set_project_folder -p:"$workspace"
  "$hise_path" set_version -v:$version

  mkdir -p "$workspace"/Binaries
  cd "$workspace"/Binaries
  
  if (($build_no_ipp==1))
  then
    echo Building the plugins
    echo Without IPP
    "$hise_path" clean -p:"$workspace"
    "$hise_path" export_ci XmlPresetBackups/$xmlFile.xml -t:effect -p:VST -a:x64
    sh "$workspace"/Binaries/batchCompileLinux.sh
    cp "$workspace"/Binaries/Builds/LinuxMakefile/build/"$project".so $package/no_ipp
  fi
  
  if (($build_ipp==1))
  then
    echo With IPP
    "$hise_path" clean -p:"$workspace"
    "$hise_path" export_ci XmlPresetBackups/$xmlFile.xml -t:effect -p:VST -a:x64 -ipp
    sh "$workspace"/Binaries/batchCompileLinux.sh
    cp "$workspace"/Binaries/Builds/LinuxMakefile/build/"$project".so $package/ipp
  fi
fi

# STEP 2: BUILDING INSTALLER
# ====================================================================

if (($build_installer==1))
then
  echo "Build Installer"

  mkdir -p "$workspace"/Installer
  cp "$workspace"/License.txt "$package"
  cp "$workspace"/Packaging/GNU/GNUInstaller.sh "$package"

  #Run makeself
  sh "$makeself"/makeself.sh --license "$workspace"/License.txt "$workspace"/Packaging/GNU/temp "$workspace"/Installer/"$project"\ $version.sh "$project" ./GNUInstaller.sh

else
  echo "Skip Building Installer"
fi

echo Cleanup
cd "$workspace"
#rm -rf "$workspace"/Packaging/GNU/temp
