var net = require('net');
var HOST = 'coc.waterphuket.com';
var PORT = 6969;
var client = new net.Socket();
var num0;
var num1= (Math.random() * 21).toFixed(0)
var num2= (Math.random() * 21).toFixed(0)
var num3= (Math.random() * 21).toFixed(0)
var num4= (Math.random() * 21).toFixed(0)
var num5= (Math.random() * 21).toFixed(0)


client.connect(PORT, HOST, function() 
{
 	console.log('CONNECTED TO: ' + HOST + ':' + PORT);
 	client.write('5735512153');
 	//client.write((Math.random() * 21).toFixed(0));
 	//client.write(num);
});
/*

client.on('data', function(data) 
{

	if (data == "OK") 
	{
		onsole.log('Server:'+data);
		client.write(""+num0);
	}
 	else if(data=="WRONG")
 	{   num0= (Math.random() * 21).toFixed(0)
 	    client.write(""+num0);
 	    console.log('Server:'+data);
    }
    else(data=="BINGO") 
    {
    	console.log('Server:'+data);
    	client.destroy()
    }
    

 	
});
*/


client.on('data', function(data) 
{
       console.log('Server:'+data);
		client.write(""+num1);
 	client.on('data', function(data) 
{
       console.log('Server:'+data);
		client.write(""+num2);

client.on('data', function(data) 
{
       console.log('Server:'+data);
		client.write(""+num3);

 client.on('data', function(data) 
{
       console.log('Server:'+data);
		client.write(""+num4);


client.on('data', function(data) 
{
       console.log('Server:'+data);
		client.write(""+num5);
	    client.destroy()


})
})

})



})



})




// Add a 'close' event handler for the client socket
/*client.on('close', function() 
{
 	console.log('Connection closed');
});
*/