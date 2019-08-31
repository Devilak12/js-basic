function game()
{
    var t=document.getElementById('el').value;
    const a=Math.floor(Math.random()*t)+1;
    if(a==t)
    {
        document.getElementById('et').innerHTML='you won';
    }
    else{
        document.getElementById('et').innerHTML='you lose';
    }
}
