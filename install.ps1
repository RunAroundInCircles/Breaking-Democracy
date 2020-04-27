<#
MIT License
Copyright (c) 2019 Caleb
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
#>

<# To test the powershell script please uncomment the -WhatIf paramater at then end of each Remove-Item and Expand-Archive command
    Powershell will then describe what would happen 
#>

# Before running this program make sure to install node js

# Package locks must be removed before running install.
If(Test-Path "./package-lock.json"){
    Remove-Item -path "./package-lock.json" # -WhatIf
}

If(Test-Path "./application"){
    cd application
}
Else{
    Write-Output "Please make sure the INSTALL.ps1 file is in the top Grand Theft Democracy repo folder and in the folder above application.";
    Exit
}

If(Test-Path "./package-lock.json"){
    Remove-Item -path "./package-lock.json" # -WhatIf
}

cd ..

#Finds the directory where the INSTALL script is
$currentDirectory = Get-Location

If((Test-Path "./Install Modules/install files 1.zip") -and (Test-Path "./Install Modules/install files 2.zip") -and (Test-Path "./Install Modules/install files 3.zip")){

Expand-Archive -Path "./Install Modules/install files 1.zip" -DestinationPath  $currentDirectory # -WhatIf # Extracts dependencies
Expand-Archive -Path "./Install Modules/install files 2.zip" -DestinationPath  $currentDirectory # -WhatIf # Extracts dependencies
Expand-Archive -Path "./Install Modules/install files 3.zip" -DestinationPath  $currentDirectory # -WhatIf # Extracts dependencies

cd "./application"
npm install .
npm start
}
Else
{
    Write-Output "Please make sure the INSTALL.ps1 file is in the top Grand Theft Democracy repo folder.";
    Exit
}

