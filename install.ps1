# Before running this program make sure to install node js

If(Test-Path "./package-lock.json"){
    Remove-Item -path "./package-lock.json"
}
cd application

If(Test-Path "./package-lock.json"){
    Remove-Item -path "./package-lock.json"
}

cd ..
npm install
cd application
npm install
npm uninstall jest
Remove-Item -path ".\node_modules" -recurse
npm install react
npm uninstall webpack
npm install webpack@4.42.0 webpack@4.41.5
rm .\node_modules\*

npm install