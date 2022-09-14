#build project in production
npm run build

cd build

cp index.html 200.html

surge . moviebookticketapp.surge.sh