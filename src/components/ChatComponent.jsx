import React from 'react';
import { Helmet } from 'react-helmet';

const ChatComponent = () => {
  return (
    <div>
      {/* Other components/content of your page */}
      
      {/* Tawk.to script */}
      <Helmet>
        <script type="text/javascript">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/65ab64308d261e1b5f55b2a9/1hkinunpv';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </script>
      </Helmet>
    </div>
  );
};

export default ChatComponent;


