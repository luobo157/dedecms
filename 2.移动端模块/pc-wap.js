<script type="text/javascript">
<!--自动识别码：-->
if (window.location.toString().indexOf('pref=padindex') != -1) {} else {
    if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
      if (window.location.href.indexOf("?mobile") < 0) {
        try {
          if (/Android|Windows Phone|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            window.location.href = "{dede:global.wapurl/}";
          } else if (/iPad/i.test(navigator.userAgent)) {} else {}
        } catch(e) {}
      }
    }
  }
<!--自动识别码：-->


<!--pc跳转到移动目录-->
var yousite="www.github.com";//这里改为您的电脑站访问地址不用带http://
var url=window.document.location.pathname;
var url="/m"+url;
var site="http://"+yousite+url;
//平台、设备和操作系统  
var system ={  
    win : false,  
    mac : false,  
    xll : false  
};  
//检测平台 
var p = navigator.platform;    
system.win = p.indexOf("Win") == 0;  
system.mac = p.indexOf("Mac") == 0;  
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);  
//跳转语句
if(system.win||system.mac||system.xll)
{}
else{
	window.location.href=site;
} 
<!--pc跳转到移动目录-->

<!--移动目录跳转到pc-->
var yousite="www.github.com";//这里改为您的电脑站访问地址不用带http://
var url=window.document.location.pathname;
var url=url.substr(4,1000);
var site="http://"+yousite+url;
//平台、设备和操作系统  
var system ={  
    win : false,  
    mac : false,  
    xll : false  
};  
//检测平台  
var p = navigator.platform;    
system.win = p.indexOf("Win") == 0;  
system.mac = p.indexOf("Mac") == 0;  
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);  
//跳转语句
if(system.win||system.mac||system.xll)
{window.location.href=site;}
else{}
<!--移动目录跳转到pc-->

<!--pc跳转到移动独立站-->
var yousite="m.github.com";//这里改为您的手机站访问地址不用带http://
var url=window.document.location.pathname;
var site="http://"+yousite+url;
//平台、设备和操作系统  
var system ={  
    win : false,  
    mac : false,  
    xll : false  
};  
//检测平台 
var p = navigator.platform;    
system.win = p.indexOf("Win") == 0;  
system.mac = p.indexOf("Mac") == 0;  
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);  
//跳转语句
if(system.win||system.mac||system.xll)
{}
else{
	window.location.href=site;
} 
<!--pc跳转到移动独立站-->

<!--移动独立站跳转到pc-->
var yousite="www.github.com";//这里改为您的电脑站访问地址不用带http://
var url=window.document.location.pathname;
var site="http://"+yousite+url;
//平台、设备和操作系统  
var system ={  
    win : false,  
    mac : false,  
    xll : false  
};  
//检测平台  
var p = navigator.platform;    
system.win = p.indexOf("Win") == 0;  
system.mac = p.indexOf("Mac") == 0;  
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);  
//跳转语句
if(system.win||system.mac||system.xll)
{window.location.href=site;}
else{}
<!--移动独立站跳转到pc-->


</script>
