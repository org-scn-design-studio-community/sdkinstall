set current=%cd%

cd ..\releases\10\preview\features\
del *.* /q

cd ..\plugins\
del *.* /q

cd..

del *.jar /q
del *.zip /q