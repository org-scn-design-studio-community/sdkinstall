set current=%cd%

cd ..\releases\10\stable\features\
del *.* /q

cd ..\plugins\
del *.* /q

cd..

del *.jar /q
del *.zip /q

cd %current%

copy ..\releases\10\preview\features\*.* ..\releases\10\stable\features\
copy ..\releases\10\preview\plugins\*.* ..\releases\10\stable\plugins\
copy ..\releases\10\preview\*.jar ..\releases\10\stable\
copy ..\releases\10\preview\*.xml ..\releases\10\stable\
copy ..\releases\10\preview\org.scn.community.sdk.package_preview.zip ..\releases\10\stable\org.scn.community.sdk.package_stable.zip