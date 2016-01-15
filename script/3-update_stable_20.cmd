set current=%cd%

cd ..\releases\20\stable\features\
del *.* /q

cd ..\plugins\
del *.* /q

cd..

del *.jar /q
del *.zip /q

cd %current%

copy ..\releases\20\preview\features\*.* ..\releases\20\stable\features\
copy ..\releases\20\preview\plugins\*.* ..\releases\20\stable\plugins\
copy ..\releases\20\preview\*.jar ..\releases\20\stable\
copy ..\releases\20\preview\*.xml ..\releases\20\stable\
copy ..\releases\20\preview\org.scn.community.sdk.package_preview.zip ..\releases\20\stable\org.scn.community.sdk.package_stable.zip