set current=%cd%

cd ..\releases\20\preview\features\
del *.* /q

cd ..\plugins\
del *.* /q

cd..

del *.jar /q
del *.zip /q