
// "use client";

import localFont from "next/font/local";
import "./globals.css";

// app/layout.js
import Sidebar from '../components/Sidebar/SideBar';
import RightSide from '../components/RightSide/RightSide';
// import '../styles/globals.css';  // import your global styles





export const metadata = {
  title: "MindScribe",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       <link rel="icon" href="/favicon.ico" />
       </head>
      <body className="bg-gray-200">
      {/* <div className="App">
      <div className="AppGlass">
        <Sidebar/> */}
        
        <div className="content ">{children}</div>


        {/* <RightSide />
      </div>
    </div> */}
      </body>
    </html>
  );
}




// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
