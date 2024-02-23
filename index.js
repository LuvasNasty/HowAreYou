var root=document.querySelector(':root');

let textchange;
textchange="Yippie dir geht es gut!";
function change()
{
    document.getElementById('head').innerHTML= textchange;
    root.style.setProperty('--enable', 'visible');
    root.style.setProperty('--disable', 'hidden');
}

let x,xstring,y,ystring;
function random()
{
    do{
        x=0;
        xstring="vh";
        x= Math.random()*100;
        x=Math.floor(x);
        x=x-60;
    }while(x<-40||x>40);

    do{
        y=0;
        ystring="%";
        y= Math.random()*100;
        y=Math.floor(y);
        y=y-65;
    }while(y<-60||y>35);

    xstring=x+xstring;
    ystring=y+ystring;

    
    root.style.setProperty('--posX', xstring);
    root.style.setProperty('--posY', ystring);
}
