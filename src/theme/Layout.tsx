import React, { useEffect } from 'react';
import Layout from '@theme-original/Layout';

export default function CustomLayout(props) {
  useEffect(() => {
    // Only add the script if it doesn't already exist
    if (!document.getElementById('chatbase-script')) {
      console.log('[Chatbase] Injecting Chatbase script...');
      const script = document.createElement('script');
      script.id = 'chatbase-script';
      script.innerHTML = `
        (function(){
          try {
            if(!window.chatbase||window.chatbase("getState")!=="initialized"){
              window.chatbase=(...arguments)=>{
                if(!window.chatbase.q){window.chatbase.q=[]}
                window.chatbase.q.push(arguments)
              };
              window.chatbase=new Proxy(window.chatbase,{
                get(target,prop){
                  if(prop==="q"){return target.q}
                  return(...args)=>target(prop,...args)
                }
              })
            }
            const onLoad=function(){
              try {
                const script=document.createElement("script");
                script.src="https://www.chatbase.co/embed.min.js";
                script.id="6yjAWz1a54kTvHyP5vbwp";
                script.domain="www.chatbase.co";
                script.onload = function() { console.log('[Chatbase] Widget script loaded.'); };
                script.onerror = function(e) { console.error('[Chatbase] Widget script failed to load:', e); };
                document.body.appendChild(script)
              } catch (err) {
                console.error('[Chatbase] Error appending widget script:', err);
              }
            };
            if(document.readyState==="complete"){onLoad()}
            else{window.addEventListener("load",onLoad)}
          } catch (err) {
            console.error('[Chatbase] Error in main script:', err);
          }
        })();
      `;
      script.onerror = (e) => console.error('[Chatbase] Main script failed to load:', e);
      document.body.appendChild(script);
    } else {
      console.log('[Chatbase] Script already exists.');
    }

    // Inject custom CSS for Chatbase FAB color
    if (!document.getElementById('chatbase-custom-style')) {
      const style = document.createElement('style');
      style.id = 'chatbase-custom-style';
      style.innerHTML = `
        /* Change Chatbase FAB background to ExitTech green */
        .chatbase-chat-button, 
        .chatbase-chat-button svg,
        .chatbase-chat-button div,
        .chatbase-chat-button button,
        .chatbase-chat-button * {
          background: #81BA54 !important;
          background-color: #81BA54 !important;
          color: #fff !important;
        }
        .chatbase-chat-button svg path,
        .chatbase-chat-button svg * {
          fill: #fff !important;
        }
        /* Override any hover states */
        .chatbase-chat-button:hover,
        .chatbase-chat-button:hover svg,
        .chatbase-chat-button:hover div,
        .chatbase-chat-button:hover button {
          background: #81BA54 !important;
          background-color: #81BA54 !important;
        }
      `;
      document.head.appendChild(style);
    }

    // Apply styles after a delay to ensure Chatbase has loaded
    setTimeout(() => {
      const chatButton = document.querySelector('.chatbase-chat-button');
      if (chatButton) {
        chatButton.setAttribute('style', 'background: #81BA54 !important; background-color: #81BA54 !important;');
        const svg = chatButton.querySelector('svg');
        if (svg) {
          svg.setAttribute('style', 'background: #81BA54 !important; background-color: #81BA54 !important;');
        }
      }
    }, 2000);
  }, []);

  return <Layout {...props} />;
} 