// import React from 'react';
// import DefaultLayout from '@theme-original/DocPage/Layout';
// import { useLocation } from '@docusaurus/router';

// export default function DocPageLayout(props) {
//   const location = useLocation();
//   const isProductTraining = location.pathname.includes('/docs/product-training/');

//   if (isProductTraining) {
//     return (
//       <div style={{ border: '4px solid red', padding: 16 }}>
//         <div style={{ color: 'red', fontWeight: 'bold', marginBottom: 16 }}>
//           Custom Layout Override Active
//         </div>
//         {props.children}
//       </div>
//     );
//   }
//   return <DefaultLayout {...props} />;
// }