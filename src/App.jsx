const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Part = ({ name, units }) => {
  return (
    <p>
      {name} {units}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      <Part name={parts[0].name} units={parts[0].units} />
      <Part name={parts[1].name} units={parts[1].units} />
      <Part name={parts[2].name} units={parts[2].units} />
    </div>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.units, 0)

  return <p>Total units {total}</p>
}

const Footer = ({ name, courseCode, section }) => {
  return (
    <footer>
      {name} - {courseCode} - {section}
    </footer>
  )
}

const App = () => {
  const course = {
    name: 'BATCHELOR IN SCIENCE OF INFORMATION TECHNOLOGY',
    parts: [
      {
        name: 'Information Management 2 ---',
        units: 3
      },
      {
        name: 'Technopreneurship ---',
        units: 3
      },
      {
        name: 'Project Management for IT ---',
        units: 3
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer
        name="Kimberly S. Daydayan"
        courseCode="CSIT340"
        section="G5"
      />
    </div>
  )
}

export default App




















// const Header = ({ course }) => {
//   return <h1>{course}</h1>
// }

// const Part = ({ name, units }) => {
//   return (
//     <p>
//       {name} {units}
//     </p>
//   )
// }

// const Content = ({ parts }) => {
//   return (
//     <div>
//       <Part name={parts[0].name} units={parts[0].units} />
//       <Part name={parts[1].name} units={parts[1].units} />
//       <Part name={parts[2].name} units={parts[2].units} />
//     </div>
//   )
// }

// const Total = ({ parts }) => {
//   const total = parts.reduce((sum, part) => sum + part.units, 0)

//   return <p>Total units {total}</p>
// }

// const Footer = ({ name, courseCode, section }) => {
//   return (
//     <footer>
//       {name} - {courseCode} - {section}
//     </footer>
//   )
// }

// const App = () => {
//   const course = 'BATCHELOR IN SCIENCE OF INFORMATION TECHNOLOGY'

//   const parts = [
//     {
//       name: 'Information Management 2',
//       units: 3
//     },
//     {
//       name: 'Technopreneurship',
//       units: 3
//     },
//     {
//       name: 'Project Management for IT',
//       units: 3
//     }
//   ]

//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={parts} />
//       <Total parts={parts} />
//       <Footer
//         name="Kimberly S. Daydayan"
//         courseCode="CSIT340"
//         section="G5"
//       />
//     </div>
//   )
// }

// export default App








//const Hello = () => {
//   return (
//     <div>
//       <p>Hello world</p>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <Hello />
//     </div>
//   )
// }

// export default App









// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
