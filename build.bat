@echo off

if "%1%"=="--help" (
echo HISE Build Script Windows
echo ================================================================================
echo build [--help]
echo.
echo This script can be used to build a project using the command line tool of HISE.
echo Options:
echo --help: shows this info
echo.  
echo Requirements:
echo 1. You need to compile HISE and store the path to HISE.exe as `hise_path`
echo 2. You need to have the HISE SDK set correctly: `HISE set_hise_folder -p:PATH`
echo 3. You need to have the following tools installed: git, InnoSetup
echo.
echo ================================================================================

goto :end
)

REM set this to 0 to skip the installer
set buildInstaller=1

set plugin_name=Sordina
set plugin_project_path=XmlPresetBackups/sordina.xml

set installer_command="C:\Users\John\AppData\Local\Programs\Inno Setup 6\ISCC.exe"

REM Environment variables, comment for build server usage
set hise_path="C:\Users\John\Documents\HISE\projects\standalone\Builds\VisualStudio2017\x64\Release\App\HISE.exe"

:VariableCheck
echo Checking Environment variables
REM  ====================================================================================

if not defined hise_path (
   echo ERROR: The HISE path is not set: `hise_path`
   exit /b 1
)

if "%plugin_project_path%"=="" (
   echo ERROR: The path to the HISE project file is not set `plugin_project_path`
   exit /b 1
)

if "%plugin_name%"=="" (
   echo ERROR: The path to the HISE project file is not set `plugin_name`
   exit /b 1
)

REM Don't check the installer if not required...
if "%buildInstaller%"=="0" (
  goto :BuildProject
)

if not defined installer_command (
   echo ERROR: The path to the Innosetup tool is not set: `installer_command`
   exit /b 1
)


:BuildProject
echo Building Binaries...
REM  ====================================================================================


echo Setting project folder
%hise_path% set_project_folder "-p:%~dp0"

%hise_path% clean --all

echo Exporting %plugin_name% Plugins
%hise_path% clean
%hise_path% export_ci %plugin_project_path% -t:effect -p:VST -a:x86x64
call Binaries/batchCompile.bat

:CopyFiles
echo Copying files
REM  ====================================================================================

md build

xcopy /E /Y "Binaries\Compiled\*.*" build\

del /S "build\*.lib"
del /S "build\*.exp"

:BuildInstaller
echo Building installer
REM  ====================================================================================

if %buildInstaller%==0 (
   echo Skipping Installer
   goto :EOF
)

REM %hise_path% create-win-installer --noaax

%installer_command% WinInstaller.iss

:end
