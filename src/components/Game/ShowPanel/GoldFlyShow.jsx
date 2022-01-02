// import Snow from "./GoldFly"
// import { useState } from "react"

// function GoldFlyShow(){
//     const[snowShow,setSnowShow] = useState(true)

//     const children = Array(5).fill(1).map((c, i) => (
//         <div key={i} className="addMoneyAnim" style={{ animationDelay: `${-Math.random() * 0.6}s` }} />
//       ));
        
//     return (
//         <div className="snow-demo-wrapper" >
//           <div className="snow-demo">
//             {snowShow && (
//               <Snow onEnd={setSnowShow(false)} >
//                 {children}
//               </Snow>
//             )}
//           </div>
//         </div>
//     )
    
// }

// export default GoldFlyShow