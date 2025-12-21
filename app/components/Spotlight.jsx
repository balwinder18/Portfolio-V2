// 'use client';

// import React, { useState, useEffect, useRef } from 'react';

// const SpotlightText = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       if (containerRef.current) {
//         const rect = containerRef.current.getBoundingClientRect();
//         setMousePosition({
//           x: event.clientX - rect.left,
//           y: event.clientY - rect.top,
//         });
//       }
//     };

//     const container = containerRef.current;
//     if (container) {
//       container.addEventListener('mousemove', handleMouseMove);
//     }

//     return () => {
//       if (container) {
//         container.removeEventListener('mousemove', handleMouseMove);
//       }
//     };
//   }, []);

//   const hiddenText = "I AM LOOKING FOR A JOB/Internship .";

//   const generateGridText = () => {
//     const rows = 30; // More rows since text is smaller
//     const columns = 40; // Increase to fill more horizontal space
//     const lines = [];

//     for (let i = 0; i < rows; i++) {
//       lines.push(
//         <div
//           key={i}
//           className="whitespace-nowrap"
//           style={{
//             opacity: 0.05, // watermark feel
//             fontSize: '20px', // Smaller text
//             fontWeight: 'bold',
//             color: '#ffffff',
//             userSelect: 'none',
//             pointerEvents: 'none',
//             transform: 'rotate(-20deg)', // Tilt the line
//             transformOrigin: 'left center',
//             marginBottom: '10px',
//           }}
//         >
//           {hiddenText.repeat(columns)}
//         </div>
//       );
//     }
//     return lines;
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="fixed inset-0 z-0 bg-[#0a0a0a] flex flex-col items-start justify-start overflow-hidden"
//     >
//       {/* Watermark Background Text */}
//       <div className="absolute inset-0 flex flex-col justify-start items-start px-10 pt-10 pointer-events-none select-none leading-[2.5rem]">
//         {generateGridText()}
//       </div>

//       {/* Spotlight Overlay */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0) 100px, rgba(0,0,0,0.9) 200px)`,
//           pointerEvents: 'none',
//         }}
//       ></div>
//     </div>
//   );
// };

// export default SpotlightText;
