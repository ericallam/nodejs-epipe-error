var run = function(){
  process.stdout.on('drain', function(){
    process.exit(0);
  });

  process.stdout.write(stdout);
};

var stdin = process.stdin;

stdin.resume();
stdin.setEncoding("utf8");

var stdout = '';

stdin.on('data', function(data){
  stdout += data;
});

stdin.on('end', run);



