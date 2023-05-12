// javascript code runs as much as process argv number
const times = process.argv.slice(2)

const timer = function(times){
for (let i = 0; i < times.length; i++){
  if (!isNaN(times[i]) && times[i] > 0){
  setTimeout(() => {
    process.stdout.write('\x07');}, times[i] * 1000);  
  }
}
};

timer(times);
