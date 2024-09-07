"use client"

import Script from "next/script";

const SmartlookSnippet = () => {

    return (
        <div>
            <Script id="smartlook-snippet">
                {`
          window.smartlook||(function(d) {
            var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
            var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
            c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
            })(document);
            smartlook('init', '9f526b6589d42b2926b99da830c4ad1cf04f7e2c', { region: 'eu' });
        `}
            </Script>
        </div>
    );
};

export default SmartlookSnippet