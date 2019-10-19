@echo off

set project=Sordina
set xmlFile=sordina
set workspace=D:\HISEProjects\Effects\Sordina\HISE

set build_plugin=0
set build_installer=1
set clean_project=0

set hise_source=D:\HISE
set hise_path="D:\HISE\projects\standalone\Builds\VisualStudio2017\x64\Release\App\HISE.exe"
set installer="C:\Users\John\AppData\Local\Programs\Inno Setup 6\ISCC.exe"

:BuildProject
REM  ====================================================================================

%hise_path% set_hise_folder -p:%hise_source%
%hise_path% set_project_folder -p:%workspace%

if %clean_project%==1 (
	echo Cleaning project
	%hise_path% clean -p:%workspace% --all
)

if %build_plugin%==1 (
	echo Exporting %plugin_name% Plugins
	%hise_path% export_ci XmlPresetBackups/%xmlFile%.xml -t:effect -p:VST -a:x86x64
	call %workspace%/Binaries/batchCompile.bat
)

:CopyFiles
echo Copying files
REM  ====================================================================================

echo Changing directory
cd /d %workspace%\Packaging\Windows

md build

xcopy /E /Y %workspace%\"Binaries\Compiled\*.*" build\

del /S "build\*.lib"
del /S "build\*.exp"

:BuildInstaller
echo Building installer
REM  ====================================================================================

if %build_installer%==1 (
 	%installer% %workspace%\Packaging\Windows\WinInstaller.iss
	echo Cleanup
	xcopy /Y build\"%project% Installer *.exe" %workspace%\Installer\
	rd /S /Q build
)

:end

cmd /k