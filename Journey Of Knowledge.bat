@echo off
color 3
set "downloadFolder=D:\Journey_Of_Knowledge" REM تحديد مجلد التنزيلات على القرص D بدون مسافات
set "desktop=%USERPROFILE%\Desktop" REM تحديد سطح المكتب
echo Creating Folder

REM إنشاء المجلد باسم "Journey Of Knowledge"
mkdir "%downloadFolder%"

echo Downloading Files

REM اسماء الملفات
set "file1=Journey_Of_Knowledge.html" REM تحديد اسم ملف ال index بدون مسافات
set "file2=talent_day_logo.png"
set "file3=script.js"
set "file4=styles.css"

REM قم بتنزيل الملفات باستخدام الأمر curl بروتوكول HTTPS
curl -L -o "%downloadFolder%\%file1%" "https://drive.google.com/uc?export=download&id=1QhLUt3ptE_BY1WPrTB69TH6_BKq9DWL9"
curl -L -o "%downloadFolder%\%file2%" "https://drive.google.com/uc?export=download&id=19dV9p8H35g-gcxwEfjECECGxgC63LgYx"
curl -L -o "%downloadFolder%\%file3%" "https://drive.google.com/uc?export=download&id=1liEoeMuIjaJTap8ZfHs8SXuxO2TkvCqN"
curl -L -o "%downloadFolder%\%file4%" "https://drive.google.com/uc?export=download&id=1inxn0_kidGk09RJyP4CQo_3mJRw8-zsF"

echo Creating Shortcut

REM إنشاء اختصار لملف الـ index على سطح المكتب
echo Set WshShell = WScript.CreateObject("WScript.Shell") > "%temp%\CreateShortcut.vbs"
echo Set Shortcut = WshShell.CreateShortcut("%desktop%\Journey_Of_Knowledge.lnk") >> "%temp%\CreateShortcut.vbs"
echo Shortcut.TargetPath = "%downloadFolder%\%file1%" >> "%temp%\CreateShortcut.vbs"
echo Shortcut.Save >> "%temp%\CreateShortcut.vbs"
cscript /nologo "%temp%\CreateShortcut.vbs"
del "%temp%\CreateShortcut.vbs" REM حذف ملف النص البرمجي المؤقت

echo Files Have Been Installed Successfully
pause
